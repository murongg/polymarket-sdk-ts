/* eslint-disable */
// This file is auto-generated from https://docs.polymarket.com/api-reference/clob-subset-openapi.yaml
// Run `bun generate-sdks.ts` to regenerate.

export type ClobOperationId = "getBook" | "getMidpoint" | "getPrice" | "getPrices" | "getPricesHistory" | "postBooks" | "postPrices" | "postSpreads";

export type BookRequest = {
  token_id: string;
  side?: "BUY" | "SELL";
};
export type Error = {
  error: string;
};
export type MidpointResponse = {
  mid: string;
};
export type OrderBookSummary = {
  market: string;
  asset_id: string;
  timestamp: string;
  hash: string;
  bids: OrderLevel[];
  asks: OrderLevel[];
  min_order_size: string;
  tick_size: string;
  neg_risk: boolean;
};
export type OrderLevel = {
  price: string;
  size: string;
};
export type PriceHistoryResponse = {
  history: {
    t: number;
    p: number;
  }[];
};
export type PriceRequest = {
  token_id: string;
  side: "BUY" | "SELL";
};
export type PriceResponse = {
  price: string;
};
export type PricesResponse = {
  [key: string]: {
    [key: string]: string;
  };
};
export type SpreadsResponse = {
  [key: string]: string;
};

export type GetBookParams = {
  token_id: string;
};

export type GetMidpointParams = {
  token_id: string;
};

export type GetPriceParams = {
  token_id: string;
  side: "BUY" | "SELL";
};

export type GetPricesHistoryParams = {
  market: string;
  startTs?: number;
  endTs?: number;
  interval?: "1m" | "1w" | "1d" | "6h" | "1h" | "max";
  fidelity?: number;
};

export type PostBooksParams = {
  body: BookRequest[];
};

export type PostPricesParams = {
  body: PriceRequest[];
};

export type PostSpreadsParams = {
  body: BookRequest[];
};
