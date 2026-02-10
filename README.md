# polymarket-sdk-ts

TypeScript SDK for Polymarket public APIs.

## Install

```bash
pnpm add polymarket-sdk-ts
```

## Quick start

```ts
import { PolymarketSDK } from "polymarket-sdk-ts";

const sdk = new PolymarketSDK();

const orderBook = await sdk.clob.getBook({ token_id: "1234567890" });
const market = await sdk.gamma.getMarketBySlug({
  slug: "will-btc-be-above-100k-on-december-31",
});
const health = await sdk.data.getDataApiHealth();
const assets = await sdk.bridge.getSupportedAssets();
```

## Available API modules

- `sdk.clob` (CLOB market data, pricing, spreads)
- `sdk.gamma` (markets, events, tags, series)
- `sdk.data` (positions, activity, analytics)
- `sdk.bridge` (deposit, withdrawal, asset routing)

## Configure endpoints or headers

```ts
import { PolymarketSDK } from "polymarket-sdk-ts";

const sdk = new PolymarketSDK({
  clob: {
    baseUrl: "https://clob.polymarket.com",
    headers: {
      "x-client": "my-app",
    },
  },
});
```

## Error handling

All requests throw `PolymarketApiError` for non-2xx responses.

```ts
import { PolymarketApiError } from "polymarket-sdk-ts";

try {
  // request...
} catch (error) {
  if (error instanceof PolymarketApiError) {
    console.error(error.status, error.statusText, error.body);
  }
}
```

## API reference

- Official docs: `https://docs.polymarket.com/api-reference`
