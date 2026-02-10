type QueryParams = Record<string, unknown>;
type PathParams = Record<string, string | number>;

export type ApiClientOptions = {
  baseUrl?: string;
  headers?: Record<string, string>;
  fetchImpl?: typeof fetch;
};

export class PolymarketApiError extends Error {
  status: number;
  statusText: string;
  body: unknown;

  constructor(status: number, statusText: string, body: unknown) {
    super("Polymarket API request failed: " + status + " " + statusText);
    this.name = "PolymarketApiError";
    this.status = status;
    this.statusText = statusText;
    this.body = body;
  }
}

export class BaseApiClient {
  private readonly baseUrl: string;
  private readonly fetchImpl: typeof fetch;
  private readonly defaultHeaders: Record<string, string>;

  constructor(options: ApiClientOptions = {}) {
    if (!options.baseUrl) {
      throw new Error("baseUrl is required");
    }

    this.baseUrl = options.baseUrl;
    this.fetchImpl = options.fetchImpl ?? fetch;
    this.defaultHeaders = options.headers ?? {};
  }

  private buildUrl(path: string, pathParams?: PathParams, query?: QueryParams): string {
    let resolvedPath = path;

    if (pathParams) {
      resolvedPath = path.replace(/\{([^}]+)\}/g, (_, key: string) => {
        const value = pathParams[key];
        if (value === undefined || value === null) {
          throw new Error("Missing required path parameter: " + key);
        }
        return encodeURIComponent(String(value));
      });
    }

    const url = new URL(resolvedPath, this.baseUrl);

    if (query) {
      for (const [key, value] of Object.entries(query)) {
        if (value === undefined || value === null) continue;
        if (Array.isArray(value)) {
          for (const item of value) {
            if (item === undefined || item === null) continue;
            url.searchParams.append(key, String(item));
          }
        } else {
          url.searchParams.set(key, String(value));
        }
      }
    }

    return url.toString();
  }

  protected async request(args: {
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    path: string;
    pathParams?: PathParams;
    query?: QueryParams;
    body?: unknown;
    init?: RequestInit;
  }): Promise<unknown> {
    const { method, path, pathParams, query, body, init } = args;
    const url = this.buildUrl(path, pathParams, query);

    const headers: Record<string, string> = {
      ...this.defaultHeaders,
      ...(init?.headers as Record<string, string> | undefined),
    };

    if (
      body !== undefined &&
      headers["content-type"] === undefined &&
      headers["Content-Type"] === undefined
    ) {
      headers["content-type"] = "application/json";
    }

    const response = await this.fetchImpl(url, {
      ...init,
      method,
      headers,
      body: body === undefined ? undefined : JSON.stringify(body),
    });

    const contentType = response.headers.get("content-type") ?? "";
    const isJson = contentType.includes("application/json");
    const payload = isJson ? await response.json() : await response.text();

    if (!response.ok) {
      throw new PolymarketApiError(response.status, response.statusText, payload);
    }

    return payload;
  }
}

// Backward-compatible aliases for earlier single-module API naming.
export type GammaClientOptions = ApiClientOptions;
export { PolymarketApiError as GammaApiError };
export { BaseApiClient as GammaBaseClient };
