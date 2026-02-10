# polymarket SDK

Polymarket API SDK generated from docs in `https://docs.polymarket.com/api-reference`.

Generated modules:
- CLOB (`clob.polymarket.com`)
- Gamma (`gamma-api.polymarket.com`)
- Data (`data-api.polymarket.com`)
- Bridge (`bridge.polymarket.com`)

## Install

```bash
pnpm add polymarket-sdk-ts
```

## Regenerate all modules

```bash
pnpm run generate:sdk
```

This regenerates:
- `src/sdk/clob/generated/*`
- `src/sdk/gamma/generated/*`
- `src/sdk/data/generated/*`
- `src/sdk/bridge/generated/*`

## Automated SDK updates

SDK updates and releases are automated via GitHub Actions and run daily.

## Project structure

```text
src/
  sdk/
    core.ts                # shared request/error base
    index.ts               # unified exports + PolymarketSDK facade
    clob/
      generated/
    gamma/
      generated/
    data/
      generated/
    bridge/
      generated/
generate-sdks.ts           # OpenAPI -> SDK generator
```

## Usage

```ts
import { PolymarketSDK } from "polymarket-sdk-ts";

const sdk = new PolymarketSDK();

const orderBook = await sdk.clob.getBook({ token_id: "1234567890" });
const market = await sdk.gamma.getMarketBySlug({ slug: "will-btc-be-above-100k-on-december-31" });
const health = await sdk.data.getDataApiHealth();
const assets = await sdk.bridge.getSupportedAssets();
```

## Build and publish

```bash
pnpm install
pnpm run generate:sdk
pnpm run build
pnpm publish --access public
```
