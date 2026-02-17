/* eslint-disable */
// This file is auto-generated from https://docs.polymarket.com/api-reference/data-api-openapi.yaml
// Run `bun generate-sdks.ts` to regenerate.

import { BaseApiClient } from "../../core";
import type { ApiClientOptions } from "../../core";
import type * as T from "./types";

export const DEFAULT_DATA_BASE_URL = "https://data-api.polymarket.com";

export type DataSDKOptions = ApiClientOptions;

export class DataSDK extends BaseApiClient {
  constructor(options: DataSDKOptions = {}) {
    super({
      ...options,
      baseUrl: options.baseUrl ?? DEFAULT_DATA_BASE_URL,
    });
  }

  async getActivity(params: T.GetActivityParams, init?: RequestInit): Promise<T.Activity[]> {
    const query = {
      limit: params.limit,
      offset: params.offset,
      user: params.user,
      market: params.market,
      eventId: params.eventId,
      type: params.type,
      start: params.start,
      end: params.end,
      sortBy: params.sortBy,
      sortDirection: params.sortDirection,
      side: params.side,
    };

    return this.request({
      method: "GET",
      path: "/activity",
      pathParams: undefined,
      query,
      body: undefined,
      init,
    }) as Promise<T.Activity[]>;
  }

  async getClosedPositions(params: T.GetClosedPositionsParams, init?: RequestInit): Promise<T.ClosedPosition[]> {
    const query = {
      user: params.user,
      market: params.market,
      title: params.title,
      eventId: params.eventId,
      limit: params.limit,
      offset: params.offset,
      sortBy: params.sortBy,
      sortDirection: params.sortDirection,
    };

    return this.request({
      method: "GET",
      path: "/closed-positions",
      pathParams: undefined,
      query,
      body: undefined,
      init,
    }) as Promise<T.ClosedPosition[]>;
  }

  async getDataApiHealth(init?: RequestInit): Promise<T.HealthResponse> {
    return this.request({
      method: "GET",
      path: "/",
      pathParams: undefined,
      query: undefined,
      body: undefined,
      init,
    }) as Promise<T.HealthResponse>;
  }

  async getHolders(params: T.GetHoldersParams, init?: RequestInit): Promise<T.MetaHolder[]> {
    const query = {
      limit: params.limit,
      market: params.market,
      minBalance: params.minBalance,
    };

    return this.request({
      method: "GET",
      path: "/holders",
      pathParams: undefined,
      query,
      body: undefined,
      init,
    }) as Promise<T.MetaHolder[]>;
  }

  async getLiveVolume(params: T.GetLiveVolumeParams, init?: RequestInit): Promise<T.LiveVolume[]> {
    const query = {
      id: params.id,
    };

    return this.request({
      method: "GET",
      path: "/live-volume",
      pathParams: undefined,
      query,
      body: undefined,
      init,
    }) as Promise<T.LiveVolume[]>;
  }

  async getOi(params: T.GetOiParams = {}, init?: RequestInit): Promise<T.OpenInterest[]> {
    const query = {
      market: params.market,
    };

    return this.request({
      method: "GET",
      path: "/oi",
      pathParams: undefined,
      query,
      body: undefined,
      init,
    }) as Promise<T.OpenInterest[]>;
  }

  async getOther(params: T.GetOtherParams, init?: RequestInit): Promise<T.OtherSize[]> {
    const query = {
      id: params.id,
      user: params.user,
    };

    return this.request({
      method: "GET",
      path: "/other",
      pathParams: undefined,
      query,
      body: undefined,
      init,
    }) as Promise<T.OtherSize[]>;
  }

  async getPositions(params: T.GetPositionsParams, init?: RequestInit): Promise<T.Position[]> {
    const query = {
      user: params.user,
      market: params.market,
      eventId: params.eventId,
      sizeThreshold: params.sizeThreshold,
      redeemable: params.redeemable,
      mergeable: params.mergeable,
      limit: params.limit,
      offset: params.offset,
      sortBy: params.sortBy,
      sortDirection: params.sortDirection,
      title: params.title,
    };

    return this.request({
      method: "GET",
      path: "/positions",
      pathParams: undefined,
      query,
      body: undefined,
      init,
    }) as Promise<T.Position[]>;
  }

  async getRevisions(params: T.GetRevisionsParams, init?: RequestInit): Promise<T.RevisionPayload[]> {
    const query = {
      questionID: params.questionID,
      limit: params.limit,
    };

    return this.request({
      method: "GET",
      path: "/revisions",
      pathParams: undefined,
      query,
      body: undefined,
      init,
    }) as Promise<T.RevisionPayload[]>;
  }

  async getTraded(params: T.GetTradedParams, init?: RequestInit): Promise<T.Traded> {
    const query = {
      user: params.user,
    };

    return this.request({
      method: "GET",
      path: "/traded",
      pathParams: undefined,
      query,
      body: undefined,
      init,
    }) as Promise<T.Traded>;
  }

  async getTrades(params: T.GetTradesParams = {}, init?: RequestInit): Promise<T.Trade[]> {
    const query = {
      limit: params.limit,
      offset: params.offset,
      takerOnly: params.takerOnly,
      filterType: params.filterType,
      filterAmount: params.filterAmount,
      market: params.market,
      eventId: params.eventId,
      user: params.user,
      side: params.side,
    };

    return this.request({
      method: "GET",
      path: "/trades",
      pathParams: undefined,
      query,
      body: undefined,
      init,
    }) as Promise<T.Trade[]>;
  }

  async getV1AccountingSnapshot(params: T.GetV1AccountingSnapshotParams, init?: RequestInit): Promise<string> {
    const query = {
      user: params.user,
    };

    return this.request({
      method: "GET",
      path: "/v1/accounting/snapshot",
      pathParams: undefined,
      query,
      body: undefined,
      init,
    }) as Promise<string>;
  }

  async getV1BuildersLeaderboard(params: T.GetV1BuildersLeaderboardParams = {}, init?: RequestInit): Promise<T.LeaderboardEntry[]> {
    const query = {
      timePeriod: params.timePeriod,
      limit: params.limit,
      offset: params.offset,
    };

    return this.request({
      method: "GET",
      path: "/v1/builders/leaderboard",
      pathParams: undefined,
      query,
      body: undefined,
      init,
    }) as Promise<T.LeaderboardEntry[]>;
  }

  async getV1BuildersVolume(params: T.GetV1BuildersVolumeParams = {}, init?: RequestInit): Promise<T.BuilderVolumeEntry[]> {
    const query = {
      timePeriod: params.timePeriod,
    };

    return this.request({
      method: "GET",
      path: "/v1/builders/volume",
      pathParams: undefined,
      query,
      body: undefined,
      init,
    }) as Promise<T.BuilderVolumeEntry[]>;
  }

  async getV1Leaderboard(params: T.GetV1LeaderboardParams = {}, init?: RequestInit): Promise<T.TraderLeaderboardEntry[]> {
    const query = {
      category: params.category,
      timePeriod: params.timePeriod,
      orderBy: params.orderBy,
      limit: params.limit,
      offset: params.offset,
      user: params.user,
      userName: params.userName,
    };

    return this.request({
      method: "GET",
      path: "/v1/leaderboard",
      pathParams: undefined,
      query,
      body: undefined,
      init,
    }) as Promise<T.TraderLeaderboardEntry[]>;
  }

  async getV1MarketPositions(params: T.GetV1MarketPositionsParams, init?: RequestInit): Promise<T.MetaMarketPositionV1[]> {
    const query = {
      market: params.market,
      user: params.user,
      status: params.status,
      sortBy: params.sortBy,
      sortDirection: params.sortDirection,
      limit: params.limit,
      offset: params.offset,
    };

    return this.request({
      method: "GET",
      path: "/v1/market-positions",
      pathParams: undefined,
      query,
      body: undefined,
      init,
    }) as Promise<T.MetaMarketPositionV1[]>;
  }

  async getValue(params: T.GetValueParams, init?: RequestInit): Promise<T.Value[]> {
    const query = {
      user: params.user,
      market: params.market,
    };

    return this.request({
      method: "GET",
      path: "/value",
      pathParams: undefined,
      query,
      body: undefined,
      init,
    }) as Promise<T.Value[]>;
  }
}
