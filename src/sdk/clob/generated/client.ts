/* eslint-disable */
// This file is auto-generated from https://docs.polymarket.com/api-reference/clob-subset-openapi.yaml
// Run `bun generate-sdks.ts` to regenerate.

import { BaseApiClient } from "../../core";
import type { ApiClientOptions } from "../../core";
import type * as T from "./types";

export const DEFAULT_CLOB_BASE_URL = "https://clob.polymarket.com";

export type ClobSDKOptions = ApiClientOptions;

export class ClobSDK extends BaseApiClient {
  constructor(options: ClobSDKOptions = {}) {
    super({
      ...options,
      baseUrl: options.baseUrl ?? DEFAULT_CLOB_BASE_URL,
    });
  }

  async getBook(params: T.GetBookParams, init?: RequestInit): Promise<T.OrderBookSummary> {
    const query = {
      token_id: params.token_id,
    };

    return this.request({
      method: "GET",
      path: "/book",
      pathParams: undefined,
      query,
      body: undefined,
      init,
    }) as Promise<T.OrderBookSummary>;
  }

  async getMidpoint(params: T.GetMidpointParams, init?: RequestInit): Promise<T.MidpointResponse> {
    const query = {
      token_id: params.token_id,
    };

    return this.request({
      method: "GET",
      path: "/midpoint",
      pathParams: undefined,
      query,
      body: undefined,
      init,
    }) as Promise<T.MidpointResponse>;
  }

  async getPrice(params: T.GetPriceParams, init?: RequestInit): Promise<T.PriceResponse> {
    const query = {
      token_id: params.token_id,
      side: params.side,
    };

    return this.request({
      method: "GET",
      path: "/price",
      pathParams: undefined,
      query,
      body: undefined,
      init,
    }) as Promise<T.PriceResponse>;
  }

  async getPrices(init?: RequestInit): Promise<T.PricesResponse> {
    return this.request({
      method: "GET",
      path: "/prices",
      pathParams: undefined,
      query: undefined,
      body: undefined,
      init,
    }) as Promise<T.PricesResponse>;
  }

  async getPricesHistory(params: T.GetPricesHistoryParams, init?: RequestInit): Promise<T.PriceHistoryResponse> {
    const query = {
      market: params.market,
      startTs: params.startTs,
      endTs: params.endTs,
      interval: params.interval,
      fidelity: params.fidelity,
    };

    return this.request({
      method: "GET",
      path: "/prices-history",
      pathParams: undefined,
      query,
      body: undefined,
      init,
    }) as Promise<T.PriceHistoryResponse>;
  }

  async postBooks(params: T.PostBooksParams, init?: RequestInit): Promise<T.OrderBookSummary[]> {
    return this.request({
      method: "POST",
      path: "/books",
      pathParams: undefined,
      query: undefined,
      body: params.body,
      init,
    }) as Promise<T.OrderBookSummary[]>;
  }

  async postPrices(params: T.PostPricesParams, init?: RequestInit): Promise<T.PricesResponse> {
    return this.request({
      method: "POST",
      path: "/prices",
      pathParams: undefined,
      query: undefined,
      body: params.body,
      init,
    }) as Promise<T.PricesResponse>;
  }

  async postSpreads(params: T.PostSpreadsParams, init?: RequestInit): Promise<T.SpreadsResponse> {
    return this.request({
      method: "POST",
      path: "/spreads",
      pathParams: undefined,
      query: undefined,
      body: params.body,
      init,
    }) as Promise<T.SpreadsResponse>;
  }
}
