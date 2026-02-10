/* eslint-disable */
// This file is auto-generated from https://docs.polymarket.com/api-reference/bridge-api-openapi.yaml
// Run `bun generate-sdks.ts` to regenerate.

import { BaseApiClient } from "../../core";
import type { ApiClientOptions } from "../../core";
import type * as T from "./types";

export const DEFAULT_BRIDGE_BASE_URL = "https://bridge.polymarket.com";

export type BridgeSDKOptions = ApiClientOptions;

export class BridgeSDK extends BaseApiClient {
  constructor(options: BridgeSDKOptions = {}) {
    super({
      ...options,
      baseUrl: options.baseUrl ?? DEFAULT_BRIDGE_BASE_URL,
    });
  }

  async getStatusByAddress(params: T.GetStatusByAddressParams, init?: RequestInit): Promise<T.TransactionStatusResponse> {
    const pathParams = {
      address: params.address,
    };

    return this.request({
      method: "GET",
      path: "/status/{address}",
      pathParams,
      query: undefined,
      body: undefined,
      init,
    }) as Promise<T.TransactionStatusResponse>;
  }

  async getSupportedAssets(init?: RequestInit): Promise<T.SupportedAssetsResponse> {
    return this.request({
      method: "GET",
      path: "/supported-assets",
      pathParams: undefined,
      query: undefined,
      body: undefined,
      init,
    }) as Promise<T.SupportedAssetsResponse>;
  }

  async postDeposit(params: T.PostDepositParams, init?: RequestInit): Promise<T.DepositResponse> {
    return this.request({
      method: "POST",
      path: "/deposit",
      pathParams: undefined,
      query: undefined,
      body: params.body,
      init,
    }) as Promise<T.DepositResponse>;
  }

  async postQuote(params: T.PostQuoteParams, init?: RequestInit): Promise<T.QuoteResponse> {
    return this.request({
      method: "POST",
      path: "/quote",
      pathParams: undefined,
      query: undefined,
      body: params.body,
      init,
    }) as Promise<T.QuoteResponse>;
  }

  async postWithdraw(params: T.PostWithdrawParams, init?: RequestInit): Promise<T.DepositResponse> {
    return this.request({
      method: "POST",
      path: "/withdraw",
      pathParams: undefined,
      query: undefined,
      body: params.body,
      init,
    }) as Promise<T.DepositResponse>;
  }
}
