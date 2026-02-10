import { mkdir } from "node:fs/promises";
import { parse as parseYaml } from "yaml";

const SPECS = [
  {
    moduleName: "clob",
    className: "ClobSDK",
    operationTypeName: "ClobOperationId",
    defaultBaseUrlConst: "DEFAULT_CLOB_BASE_URL",
    defaultBaseUrl: "https://clob.polymarket.com",
    sourceUrl: "https://docs.polymarket.com/api-reference/clob-subset-openapi.yaml",
  },
  {
    moduleName: "gamma",
    className: "GammaSDK",
    operationTypeName: "GammaOperationId",
    defaultBaseUrlConst: "DEFAULT_GAMMA_BASE_URL",
    defaultBaseUrl: "https://gamma-api.polymarket.com",
    sourceUrl: "https://docs.polymarket.com/api-reference/gamma-openapi.json",
  },
  {
    moduleName: "data",
    className: "DataSDK",
    operationTypeName: "DataOperationId",
    defaultBaseUrlConst: "DEFAULT_DATA_BASE_URL",
    defaultBaseUrl: "https://data-api.polymarket.com",
    sourceUrl: "https://docs.polymarket.com/api-reference/data-api-openapi.yaml",
  },
  {
    moduleName: "bridge",
    className: "BridgeSDK",
    operationTypeName: "BridgeOperationId",
    defaultBaseUrlConst: "DEFAULT_BRIDGE_BASE_URL",
    defaultBaseUrl: "https://bridge.polymarket.com",
    sourceUrl: "https://docs.polymarket.com/api-reference/bridge-api-openapi.yaml",
  },
] as const;

type HttpMethod = "get" | "post" | "put" | "patch" | "delete";

type OpenApiParameter = {
  name: string;
  in: "path" | "query" | "header" | "cookie";
  required?: boolean;
  schema?: OpenApiSchema;
};

type OpenApiSchema = {
  $ref?: string;
  type?: string;
  nullable?: boolean;
  enum?: Array<string | number | boolean>;
  items?: OpenApiSchema;
  properties?: Record<string, OpenApiSchema>;
  required?: string[];
  additionalProperties?: boolean | OpenApiSchema;
  oneOf?: OpenApiSchema[];
  anyOf?: OpenApiSchema[];
  allOf?: OpenApiSchema[];
};

type OpenApiOperation = {
  operationId?: string;
  parameters?: Array<OpenApiParameter | { $ref: string }>;
  requestBody?:
    | {
        required?: boolean;
        content?: Record<string, { schema?: OpenApiSchema | { $ref: string } }>;
      }
    | { $ref: string };
  responses?: Record<
    string,
    {
      content?: Record<string, { schema?: OpenApiSchema | { $ref: string } }>;
    }
  >;
};

type OpenApiPathItem = Partial<Record<HttpMethod, OpenApiOperation>> & {
  parameters?: Array<OpenApiParameter | { $ref: string }>;
};

type OpenApiSpec = {
  paths: Record<string, OpenApiPathItem>;
  components?: {
    parameters?: Record<string, OpenApiParameter>;
    requestBodies?: Record<
      string,
      {
        required?: boolean;
        content?: Record<string, { schema?: OpenApiSchema | { $ref: string } }>;
      }
    >;
    schemas?: Record<string, OpenApiSchema>;
  };
};

type ResolvedParam = {
  name: string;
  in: "path" | "query" | "header" | "cookie";
  required: boolean;
  tsType: string;
};

type OperationMeta = {
  method: HttpMethod;
  path: string;
  operationId: string;
  params: ResolvedParam[];
  bodyType?: string;
  bodyRequired: boolean;
  responseType: string;
};

function toTypeName(value: string): string {
  return value
    .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z0-9])/g, (_, __, c) => c.toUpperCase())
    .replace(/[^a-zA-Z0-9]/g, "");
}

function toOperationName(method: HttpMethod, path: string): string {
  const methodPrefix: Record<HttpMethod, string> = {
    get: "get",
    post: "post",
    put: "put",
    patch: "patch",
    delete: "delete",
  };

  const segments = path
    .split("/")
    .filter(Boolean)
    .map((segment) => {
      if (segment.startsWith("{") && segment.endsWith("}")) {
        const key = segment.slice(1, -1);
        return `By${toTypeName(key)}`;
      }

      return toTypeName(segment);
    });

  return methodPrefix[method] + segments.join("");
}

function isRef(value: unknown): value is { $ref: string } {
  return typeof value === "object" && value !== null && "$ref" in value;
}

function refName(ref: string): string {
  const parts = ref.split("/");
  return parts[parts.length - 1] ?? "Unknown";
}

function resolveSchemaRef(
  schema: OpenApiSchema | { $ref: string } | undefined
): OpenApiSchema | undefined {
  if (!schema) return undefined;
  if (!isRef(schema)) return schema;
  return { $ref: schema.$ref };
}

function isQuotedLiteral(value: string): boolean {
  return (
    (value.startsWith("\"") && value.endsWith("\"")) ||
    (value.startsWith("'") && value.endsWith("'"))
  );
}

function formatPropertyName(name: string): string {
  return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name) ? name : JSON.stringify(name);
}

function indentBlock(value: string, size = 2): string {
  const pad = " ".repeat(size);
  return value
    .split("\n")
    .map((line) => (line.length > 0 ? pad + line : line))
    .join("\n");
}

function withNullable(baseType: string, nullable?: boolean): string {
  if (!nullable) return baseType;
  if (baseType.includes("null")) return baseType;
  return `${baseType} | null`;
}

function schemaToTs(schema: OpenApiSchema | { $ref: string } | undefined): string {
  const resolved = resolveSchemaRef(schema);
  if (!resolved) return "unknown";
  if (resolved.$ref) return withNullable(refName(resolved.$ref), resolved.nullable);

  if (resolved.oneOf && resolved.oneOf.length > 0) {
    const union = resolved.oneOf.map((item) => schemaToTs(item)).join(" | ");
    return withNullable(union, resolved.nullable);
  }

  if (resolved.anyOf && resolved.anyOf.length > 0) {
    const union = resolved.anyOf.map((item) => schemaToTs(item)).join(" | ");
    return withNullable(union, resolved.nullable);
  }

  if (resolved.allOf && resolved.allOf.length > 0) {
    const intersection = resolved.allOf.map((item) => schemaToTs(item)).join(" & ");
    return withNullable(intersection, resolved.nullable);
  }

  if (resolved.enum && resolved.enum.length > 0) {
    return withNullable(resolved.enum.map((v) => JSON.stringify(v)).join(" | "), resolved.nullable);
  }

  if (resolved.type === "array") {
    return withNullable(`${schemaToTs(resolved.items)}[]`, resolved.nullable);
  }

  if (resolved.type === "integer" || resolved.type === "number") return withNullable("number", resolved.nullable);
  if (resolved.type === "boolean") return withNullable("boolean", resolved.nullable);
  if (resolved.type === "string") return withNullable("string", resolved.nullable);

  if (resolved.type === "object" || resolved.properties || resolved.additionalProperties !== undefined) {
    const required = new Set(resolved.required ?? []);
    const propEntries = Object.entries(resolved.properties ?? {});
    const lines: string[] = [];

    for (const [name, propSchema] of propEntries) {
      const optional = required.has(name) ? "" : "?";
      lines.push(`${formatPropertyName(name)}${optional}: ${schemaToTs(propSchema)};`);
    }

    if (resolved.additionalProperties) {
      if (resolved.additionalProperties === true) {
        lines.push("[key: string]: unknown;");
      } else {
        lines.push(`[key: string]: ${schemaToTs(resolved.additionalProperties)};`);
      }
    }

    if (lines.length === 0) {
      return withNullable("Record<string, unknown>", resolved.nullable);
    }

    return withNullable(`{\n${indentBlock(lines.join("\n"))}\n}`, resolved.nullable);
  }

  return withNullable("unknown", resolved.nullable);
}

function getRequestBodySchema(
  spec: OpenApiSpec,
  requestBody: OpenApiOperation["requestBody"]
): { schema?: OpenApiSchema | { $ref: string }; required: boolean } {
  if (!requestBody) return { required: false };

  const resolvedRequestBody = isRef(requestBody)
    ? spec.components?.requestBodies?.[refName(requestBody.$ref)]
    : requestBody;

  if (!resolvedRequestBody) return { required: false };

  const jsonSchema =
    resolvedRequestBody.content?.["application/json"]?.schema ??
    Object.values(resolvedRequestBody.content ?? {})[0]?.schema;

  return {
    schema: jsonSchema,
    required: Boolean(resolvedRequestBody.required),
  };
}

function getSuccessResponseSchema(
  operation: OpenApiOperation
): OpenApiSchema | { $ref: string } | undefined {
  const responses = operation.responses ?? {};

  for (const statusCode of ["200", "201", "202", "203", "204"]) {
    const content = responses[statusCode]?.content;
    if (!content) {
      if (statusCode === "204") return { type: "string" };
      continue;
    }

    return content["application/json"]?.schema ?? Object.values(content)[0]?.schema;
  }

  return undefined;
}

function resolveParameters(
  spec: OpenApiSpec,
  pathParameters: Array<OpenApiParameter | { $ref: string }> = [],
  operationParameters: Array<OpenApiParameter | { $ref: string }> = []
): ResolvedParam[] {
  const merged = [...pathParameters, ...operationParameters];
  const deduped = new Map<string, ResolvedParam>();

  for (const rawParam of merged) {
    const param = isRef(rawParam)
      ? spec.components?.parameters?.[refName(rawParam.$ref)]
      : rawParam;
    if (!param) continue;

    deduped.set(`${param.in}:${param.name}`, {
      name: param.name,
      in: param.in,
      required: Boolean(param.required),
      tsType: schemaToTs(param.schema),
    });
  }

  return [...deduped.values()];
}

function toNamespacedType(tsType: string): string {
  const primitiveTypes = new Set([
    "string",
    "number",
    "boolean",
    "unknown",
    "null",
    "undefined",
    "any",
    "never",
    "true",
    "false",
  ]);

  const trimmed = tsType.trim();
  if (primitiveTypes.has(trimmed) || isQuotedLiteral(trimmed)) return trimmed;
  if (trimmed.startsWith("{") || trimmed.startsWith("Record<")) return trimmed;

  if (trimmed.includes(" | ")) {
    return trimmed
      .split("|")
      .map((part) => toNamespacedType(part.trim()))
      .join(" | ");
  }

  if (trimmed.includes(" & ")) {
    return trimmed
      .split("&")
      .map((part) => toNamespacedType(part.trim()))
      .join(" & ");
  }

  if (trimmed.endsWith("[]")) {
    const inner = trimmed.slice(0, -2);
    return `${toNamespacedType(inner)}[]`;
  }

  if (/^[A-Za-z_][A-Za-z0-9_]*$/.test(trimmed)) {
    return primitiveTypes.has(trimmed) ? trimmed : `T.${trimmed}`;
  }

  return trimmed;
}

function generateParamType(operation: OperationMeta): string | null {
  const paramsTypeName = `${toTypeName(operation.operationId)}Params`;
  const hasAnyParams = operation.params.length > 0 || Boolean(operation.bodyType);
  if (!hasAnyParams) return null;

  const fields = operation.params.map((param) => {
    const optional = param.required ? "" : "?";
    return `  ${param.name}${optional}: ${param.tsType};`;
  });

  if (operation.bodyType) {
    const optional = operation.bodyRequired ? "" : "?";
    fields.push(`  body${optional}: ${operation.bodyType};`);
  }

  return [`export type ${paramsTypeName} = {`, ...fields, "};"].join("\n");
}

function generateClientMethod(operation: OperationMeta): string {
  const paramsTypeName = `${toTypeName(operation.operationId)}Params`;
  const hasAnyParams = operation.params.length > 0 || Boolean(operation.bodyType);

  const requiredFields = [
    ...operation.params.filter((p) => p.required).map((p) => p.name),
    ...(operation.bodyType && operation.bodyRequired ? ["body"] : []),
  ];

  const signature = hasAnyParams
    ? requiredFields.length > 0
      ? `params: T.${paramsTypeName}`
      : `params: T.${paramsTypeName} = {}`
    : "init?: RequestInit";

  const returnType = toNamespacedType(operation.responseType);

  const lines: string[] = [];
  lines.push(
    hasAnyParams
      ? `  async ${operation.operationId}(${signature}, init?: RequestInit): Promise<${returnType}> {`
      : `  async ${operation.operationId}(${signature}): Promise<${returnType}> {`
  );

  const pathParams = operation.params.filter((p) => p.in === "path");
  const queryParams = operation.params.filter((p) => p.in === "query");

  if (pathParams.length > 0) {
    lines.push("    const pathParams = {");
    for (const param of pathParams) {
      lines.push(`      ${param.name}: params.${param.name},`);
    }
    lines.push("    };\n");
  }

  if (queryParams.length > 0) {
    lines.push("    const query = {");
    for (const param of queryParams) {
      lines.push(`      ${param.name}: params.${param.name},`);
    }
    lines.push("    };\n");
  }

  lines.push("    return this.request({");
  lines.push(`      method: "${operation.method.toUpperCase()}",`);
  lines.push(`      path: "${operation.path}",`);
  lines.push(pathParams.length > 0 ? "      pathParams," : "      pathParams: undefined,");
  lines.push(queryParams.length > 0 ? "      query," : "      query: undefined,");
  lines.push(operation.bodyType ? "      body: params.body," : "      body: undefined,");
  lines.push("      init,");
  lines.push(`    }) as Promise<${returnType}>;`);
  lines.push("  }");

  return lines.join("\n");
}

function schemaDefinitionToType(name: string, schema: OpenApiSchema): string {
  return `export type ${name} = ${schemaToTs(schema)};`;
}

async function loadOpenApiSpec(url: string): Promise<OpenApiSpec> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }

  const raw = await response.text();
  const trimmed = raw.trim();
  const parsed = trimmed.startsWith("{") ? JSON.parse(trimmed) : parseYaml(trimmed);
  return parsed as OpenApiSpec;
}

for (const config of SPECS) {
  const spec = await loadOpenApiSpec(config.sourceUrl);
  const schemas = spec.components?.schemas ?? {};
  const schemaNames = Object.keys(schemas).sort();
  const operations: OperationMeta[] = [];
  const usedOperationIds = new Map<string, number>();

  for (const [path, pathItem] of Object.entries(spec.paths)) {
    const pathLevelParams = pathItem.parameters ?? [];
    for (const method of ["get", "post", "put", "patch", "delete"] as const) {
      const operation = pathItem[method];
      if (!operation) continue;

      const baseOperationId =
        operation.operationId?.trim() || toOperationName(method, path);
      const collisionCount = usedOperationIds.get(baseOperationId) ?? 0;
      usedOperationIds.set(baseOperationId, collisionCount + 1);
      const operationId =
        collisionCount === 0 ? baseOperationId : `${baseOperationId}${collisionCount + 1}`;

      const params = resolveParameters(spec, pathLevelParams, operation.parameters);
      const requestBody = getRequestBodySchema(spec, operation.requestBody);

      operations.push({
        method,
        path,
        operationId,
        params,
        bodyType: requestBody.schema ? schemaToTs(requestBody.schema) : undefined,
        bodyRequired: requestBody.required,
        responseType: schemaToTs(getSuccessResponseSchema(operation)),
      });
    }
  }

  operations.sort((a, b) => a.operationId.localeCompare(b.operationId));

  const schemaTypeDefs = schemaNames
    .map((name) => schemaDefinitionToType(name, schemas[name]!))
    .join("\n");

  const paramTypeDefs = operations
    .map((operation) => generateParamType(operation))
    .filter((value): value is string => Boolean(value))
    .join("\n\n");

  const operationNameType = operations.map((op) => JSON.stringify(op.operationId)).join(" | ");

  const generatedTypes = `/* eslint-disable */
// This file is auto-generated from ${config.sourceUrl}
// Run \`bun generate-sdks.ts\` to regenerate.

export type ${config.operationTypeName} = ${operationNameType};

${schemaTypeDefs}

${paramTypeDefs}
`;

  const generatedClientMethods = operations.map((operation) => generateClientMethod(operation)).join("\n\n");

  const generatedClient = `/* eslint-disable */
// This file is auto-generated from ${config.sourceUrl}
// Run \`bun generate-sdks.ts\` to regenerate.

import { BaseApiClient } from "../../core";
import type { ApiClientOptions } from "../../core";
import type * as T from "./types";

export const ${config.defaultBaseUrlConst} = "${config.defaultBaseUrl}";

export type ${config.className}Options = ApiClientOptions;

export class ${config.className} extends BaseApiClient {
  constructor(options: ${config.className}Options = {}) {
    super({
      ...options,
      baseUrl: options.baseUrl ?? ${config.defaultBaseUrlConst},
    });
  }

${generatedClientMethods}
}
`;

  const moduleDir = `./src/sdk/${config.moduleName}`;
  const generatedDir = `${moduleDir}/generated`;

  await mkdir(generatedDir, { recursive: true });
  await Bun.write(`${generatedDir}/types.ts`, generatedTypes);
  await Bun.write(`${generatedDir}/client.ts`, generatedClient);
  await Bun.write(
    `${moduleDir}/index.ts`,
    [
      "/* eslint-disable */",
      "// Generated barrel file.",
      `export { ${config.className}, ${config.defaultBaseUrlConst} } from \"./generated/client\";`,
      `export type { ${config.className}Options } from \"./generated/client\";`,
      "export type * from \"./generated/types\";",
      "",
    ].join("\n")
  );

  console.log(`Generated ${operations.length} operations in src/sdk/${config.moduleName}`);
}
