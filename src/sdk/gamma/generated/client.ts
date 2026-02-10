/* eslint-disable */
// This file is auto-generated from https://docs.polymarket.com/api-reference/gamma-openapi.json
// Run `bun generate-sdks.ts` to regenerate.

import { BaseApiClient } from "../../core";
import type { ApiClientOptions } from "../../core";
import type * as T from "./types";

export const DEFAULT_GAMMA_BASE_URL = "https://gamma-api.polymarket.com";

export type GammaSDKOptions = ApiClientOptions;

export class GammaSDK extends BaseApiClient {
  constructor(options: GammaSDKOptions = {}) {
    super({
      ...options,
      baseUrl: options.baseUrl ?? DEFAULT_GAMMA_BASE_URL,
    });
  }

  async getAbridgedMarkets(params: T.GetAbridgedMarketsParams, init?: RequestInit): Promise<T.Market[]> {
    return this.request({
      method: "POST",
      path: "/markets/abridged",
      pathParams: undefined,
      query: undefined,
      body: params.body,
      init,
    }) as Promise<T.Market[]>;
  }

  async getCommentsById(params: T.GetCommentsByIdParams, init?: RequestInit): Promise<T.Comment[]> {
    const pathParams = {
      id: params.id,
    };

    const query = {
      get_positions: params.get_positions,
    };

    return this.request({
      method: "GET",
      path: "/comments/{id}",
      pathParams,
      query,
      body: undefined,
      init,
    }) as Promise<T.Comment[]>;
  }

  async getCommentsByUserAddress(params: T.GetCommentsByUserAddressParams, init?: RequestInit): Promise<T.Comment[]> {
    const pathParams = {
      user_address: params.user_address,
    };

    const query = {
      limit: params.limit,
      offset: params.offset,
      order: params.order,
      ascending: params.ascending,
    };

    return this.request({
      method: "GET",
      path: "/comments/user_address/{user_address}",
      pathParams,
      query,
      body: undefined,
      init,
    }) as Promise<T.Comment[]>;
  }

  async getEvent(params: T.GetEventParams, init?: RequestInit): Promise<T.Event> {
    const pathParams = {
      id: params.id,
    };

    const query = {
      include_chat: params.include_chat,
      include_template: params.include_template,
    };

    return this.request({
      method: "GET",
      path: "/events/{id}",
      pathParams,
      query,
      body: undefined,
      init,
    }) as Promise<T.Event>;
  }

  async getEventBySlug(params: T.GetEventBySlugParams, init?: RequestInit): Promise<T.Event> {
    const pathParams = {
      slug: params.slug,
    };

    const query = {
      include_chat: params.include_chat,
      include_template: params.include_template,
    };

    return this.request({
      method: "GET",
      path: "/events/slug/{slug}",
      pathParams,
      query,
      body: undefined,
      init,
    }) as Promise<T.Event>;
  }

  async getEventCommentsCount(params: T.GetEventCommentsCountParams, init?: RequestInit): Promise<T.Count> {
    const pathParams = {
      id: params.id,
    };

    return this.request({
      method: "GET",
      path: "/events/{id}/comments/count",
      pathParams,
      query: undefined,
      body: undefined,
      init,
    }) as Promise<T.Count>;
  }

  async getEventCreator(params: T.GetEventCreatorParams, init?: RequestInit): Promise<T.EventCreator> {
    const pathParams = {
      id: params.id,
    };

    return this.request({
      method: "GET",
      path: "/events/creators/{id}",
      pathParams,
      query: undefined,
      body: undefined,
      init,
    }) as Promise<T.EventCreator>;
  }

  async getEventTags(params: T.GetEventTagsParams, init?: RequestInit): Promise<T.Tag[]> {
    const pathParams = {
      id: params.id,
    };

    return this.request({
      method: "GET",
      path: "/events/{id}/tags",
      pathParams,
      query: undefined,
      body: undefined,
      init,
    }) as Promise<T.Tag[]>;
  }

  async getEventTweetCount(params: T.GetEventTweetCountParams, init?: RequestInit): Promise<T.EventTweetCount> {
    const pathParams = {
      id: params.id,
    };

    return this.request({
      method: "GET",
      path: "/events/{id}/tweet-count",
      pathParams,
      query: undefined,
      body: undefined,
      init,
    }) as Promise<T.EventTweetCount>;
  }

  async getGammaStatus(init?: RequestInit): Promise<string> {
    return this.request({
      method: "GET",
      path: "/status",
      pathParams: undefined,
      query: undefined,
      body: undefined,
      init,
    }) as Promise<string>;
  }

  async getMarket(params: T.GetMarketParams, init?: RequestInit): Promise<T.Market> {
    const pathParams = {
      id: params.id,
    };

    const query = {
      include_tag: params.include_tag,
    };

    return this.request({
      method: "GET",
      path: "/markets/{id}",
      pathParams,
      query,
      body: undefined,
      init,
    }) as Promise<T.Market>;
  }

  async getMarketBySlug(params: T.GetMarketBySlugParams, init?: RequestInit): Promise<T.Market> {
    const pathParams = {
      slug: params.slug,
    };

    const query = {
      include_tag: params.include_tag,
    };

    return this.request({
      method: "GET",
      path: "/markets/slug/{slug}",
      pathParams,
      query,
      body: undefined,
      init,
    }) as Promise<T.Market>;
  }

  async getMarketDescription(params: T.GetMarketDescriptionParams, init?: RequestInit): Promise<T.MarketDescription> {
    const pathParams = {
      id: params.id,
    };

    return this.request({
      method: "GET",
      path: "/markets/{id}/description",
      pathParams,
      query: undefined,
      body: undefined,
      init,
    }) as Promise<T.MarketDescription>;
  }

  async getMarketsInformation(params: T.GetMarketsInformationParams, init?: RequestInit): Promise<T.Market[]> {
    return this.request({
      method: "POST",
      path: "/markets/information",
      pathParams: undefined,
      query: undefined,
      body: params.body,
      init,
    }) as Promise<T.Market[]>;
  }

  async getMarketTags(params: T.GetMarketTagsParams, init?: RequestInit): Promise<T.Tag[]> {
    const pathParams = {
      id: params.id,
    };

    return this.request({
      method: "GET",
      path: "/markets/{id}/tags",
      pathParams,
      query: undefined,
      body: undefined,
      init,
    }) as Promise<T.Tag[]>;
  }

  async getPublicProfile(params: T.GetPublicProfileParams, init?: RequestInit): Promise<T.PublicProfileResponse> {
    const query = {
      address: params.address,
    };

    return this.request({
      method: "GET",
      path: "/public-profile",
      pathParams: undefined,
      query,
      body: undefined,
      init,
    }) as Promise<T.PublicProfileResponse>;
  }

  async getPublicProfileByUserAddress(params: T.GetPublicProfileByUserAddressParams, init?: RequestInit): Promise<T.Profile> {
    const pathParams = {
      user_address: params.user_address,
    };

    return this.request({
      method: "GET",
      path: "/profiles/user_address/{user_address}",
      pathParams,
      query: undefined,
      body: undefined,
      init,
    }) as Promise<T.Profile>;
  }

  async getRelatedTagsById(params: T.GetRelatedTagsByIdParams, init?: RequestInit): Promise<T.RelatedTag[]> {
    const pathParams = {
      id: params.id,
    };

    const query = {
      omit_empty: params.omit_empty,
      status: params.status,
    };

    return this.request({
      method: "GET",
      path: "/tags/{id}/related-tags",
      pathParams,
      query,
      body: undefined,
      init,
    }) as Promise<T.RelatedTag[]>;
  }

  async getRelatedTagsBySlug(params: T.GetRelatedTagsBySlugParams, init?: RequestInit): Promise<T.RelatedTag[]> {
    const pathParams = {
      slug: params.slug,
    };

    const query = {
      omit_empty: params.omit_empty,
      status: params.status,
    };

    return this.request({
      method: "GET",
      path: "/tags/slug/{slug}/related-tags",
      pathParams,
      query,
      body: undefined,
      init,
    }) as Promise<T.RelatedTag[]>;
  }

  async getSeries(params: T.GetSeriesParams, init?: RequestInit): Promise<T.Series> {
    const pathParams = {
      id: params.id,
    };

    const query = {
      include_chat: params.include_chat,
    };

    return this.request({
      method: "GET",
      path: "/series/{id}",
      pathParams,
      query,
      body: undefined,
      init,
    }) as Promise<T.Series>;
  }

  async getSeriesCommentsCount(params: T.GetSeriesCommentsCountParams, init?: RequestInit): Promise<T.Count> {
    const pathParams = {
      id: params.id,
    };

    return this.request({
      method: "GET",
      path: "/series/{id}/comments/count",
      pathParams,
      query: undefined,
      body: undefined,
      init,
    }) as Promise<T.Count>;
  }

  async getSeriesSummaryById(params: T.GetSeriesSummaryByIdParams, init?: RequestInit): Promise<T.SeriesSummary> {
    const pathParams = {
      id: params.id,
    };

    return this.request({
      method: "GET",
      path: "/series-summary/{id}",
      pathParams,
      query: undefined,
      body: undefined,
      init,
    }) as Promise<T.SeriesSummary>;
  }

  async getSeriesSummaryBySlug(params: T.GetSeriesSummaryBySlugParams, init?: RequestInit): Promise<T.SeriesSummary> {
    const pathParams = {
      slug: params.slug,
    };

    return this.request({
      method: "GET",
      path: "/series-summary/slug/{slug}",
      pathParams,
      query: undefined,
      body: undefined,
      init,
    }) as Promise<T.SeriesSummary>;
  }

  async getSportsMarketTypes(init?: RequestInit): Promise<T.SportsMarketTypesResponse> {
    return this.request({
      method: "GET",
      path: "/sports/market-types",
      pathParams: undefined,
      query: undefined,
      body: undefined,
      init,
    }) as Promise<T.SportsMarketTypesResponse>;
  }

  async getSportsMetadata(init?: RequestInit): Promise<T.SportsMetadata[]> {
    return this.request({
      method: "GET",
      path: "/sports",
      pathParams: undefined,
      query: undefined,
      body: undefined,
      init,
    }) as Promise<T.SportsMetadata[]>;
  }

  async getTag(params: T.GetTagParams, init?: RequestInit): Promise<T.Tag> {
    const pathParams = {
      id: params.id,
    };

    const query = {
      include_template: params.include_template,
    };

    return this.request({
      method: "GET",
      path: "/tags/{id}",
      pathParams,
      query,
      body: undefined,
      init,
    }) as Promise<T.Tag>;
  }

  async getTagBySlug(params: T.GetTagBySlugParams, init?: RequestInit): Promise<T.Tag> {
    const pathParams = {
      slug: params.slug,
    };

    const query = {
      include_template: params.include_template,
    };

    return this.request({
      method: "GET",
      path: "/tags/slug/{slug}",
      pathParams,
      query,
      body: undefined,
      init,
    }) as Promise<T.Tag>;
  }

  async getTagsRelatedToATagById(params: T.GetTagsRelatedToATagByIdParams, init?: RequestInit): Promise<T.Tag[]> {
    const pathParams = {
      id: params.id,
    };

    const query = {
      omit_empty: params.omit_empty,
      status: params.status,
    };

    return this.request({
      method: "GET",
      path: "/tags/{id}/related-tags/tags",
      pathParams,
      query,
      body: undefined,
      init,
    }) as Promise<T.Tag[]>;
  }

  async getTagsRelatedToATagBySlug(params: T.GetTagsRelatedToATagBySlugParams, init?: RequestInit): Promise<T.Tag[]> {
    const pathParams = {
      slug: params.slug,
    };

    const query = {
      omit_empty: params.omit_empty,
      status: params.status,
    };

    return this.request({
      method: "GET",
      path: "/tags/slug/{slug}/related-tags/tags",
      pathParams,
      query,
      body: undefined,
      init,
    }) as Promise<T.Tag[]>;
  }

  async getTeam(params: T.GetTeamParams, init?: RequestInit): Promise<T.Team> {
    const pathParams = {
      id: params.id,
    };

    return this.request({
      method: "GET",
      path: "/teams/{id}",
      pathParams,
      query: undefined,
      body: undefined,
      init,
    }) as Promise<T.Team>;
  }

  async listComments(params: T.ListCommentsParams = {}, init?: RequestInit): Promise<T.Comment[]> {
    const query = {
      limit: params.limit,
      offset: params.offset,
      order: params.order,
      ascending: params.ascending,
      parent_entity_type: params.parent_entity_type,
      parent_entity_id: params.parent_entity_id,
      get_positions: params.get_positions,
      holders_only: params.holders_only,
    };

    return this.request({
      method: "GET",
      path: "/comments",
      pathParams: undefined,
      query,
      body: undefined,
      init,
    }) as Promise<T.Comment[]>;
  }

  async listEventCreators(params: T.ListEventCreatorsParams = {}, init?: RequestInit): Promise<T.EventCreator[]> {
    const query = {
      limit: params.limit,
      offset: params.offset,
      order: params.order,
      ascending: params.ascending,
      creator_name: params.creator_name,
      creator_handle: params.creator_handle,
    };

    return this.request({
      method: "GET",
      path: "/events/creators",
      pathParams: undefined,
      query,
      body: undefined,
      init,
    }) as Promise<T.EventCreator[]>;
  }

  async listEvents(params: T.ListEventsParams = {}, init?: RequestInit): Promise<T.Event[]> {
    const query = {
      limit: params.limit,
      offset: params.offset,
      order: params.order,
      ascending: params.ascending,
      id: params.id,
      tag_id: params.tag_id,
      exclude_tag_id: params.exclude_tag_id,
      slug: params.slug,
      tag_slug: params.tag_slug,
      related_tags: params.related_tags,
      active: params.active,
      archived: params.archived,
      featured: params.featured,
      cyom: params.cyom,
      include_chat: params.include_chat,
      include_template: params.include_template,
      recurrence: params.recurrence,
      closed: params.closed,
      liquidity_min: params.liquidity_min,
      liquidity_max: params.liquidity_max,
      volume_min: params.volume_min,
      volume_max: params.volume_max,
      start_date_min: params.start_date_min,
      start_date_max: params.start_date_max,
      end_date_min: params.end_date_min,
      end_date_max: params.end_date_max,
    };

    return this.request({
      method: "GET",
      path: "/events",
      pathParams: undefined,
      query,
      body: undefined,
      init,
    }) as Promise<T.Event[]>;
  }

  async listEventsPagination(params: T.ListEventsPaginationParams = {}, init?: RequestInit): Promise<T.EventsPagination> {
    const query = {
      limit: params.limit,
      offset: params.offset,
      order: params.order,
      ascending: params.ascending,
      include_chat: params.include_chat,
      include_template: params.include_template,
      recurrence: params.recurrence,
    };

    return this.request({
      method: "GET",
      path: "/events/pagination",
      pathParams: undefined,
      query,
      body: undefined,
      init,
    }) as Promise<T.EventsPagination>;
  }

  async listMarkets(params: T.ListMarketsParams = {}, init?: RequestInit): Promise<T.Market[]> {
    const query = {
      limit: params.limit,
      offset: params.offset,
      order: params.order,
      ascending: params.ascending,
      id: params.id,
      slug: params.slug,
      clob_token_ids: params.clob_token_ids,
      condition_ids: params.condition_ids,
      market_maker_address: params.market_maker_address,
      liquidity_num_min: params.liquidity_num_min,
      liquidity_num_max: params.liquidity_num_max,
      volume_num_min: params.volume_num_min,
      volume_num_max: params.volume_num_max,
      start_date_min: params.start_date_min,
      start_date_max: params.start_date_max,
      end_date_min: params.end_date_min,
      end_date_max: params.end_date_max,
      tag_id: params.tag_id,
      related_tags: params.related_tags,
      cyom: params.cyom,
      uma_resolution_status: params.uma_resolution_status,
      game_id: params.game_id,
      sports_market_types: params.sports_market_types,
      rewards_min_size: params.rewards_min_size,
      question_ids: params.question_ids,
      include_tag: params.include_tag,
      closed: params.closed,
    };

    return this.request({
      method: "GET",
      path: "/markets",
      pathParams: undefined,
      query,
      body: undefined,
      init,
    }) as Promise<T.Market[]>;
  }

  async listSeries(params: T.ListSeriesParams = {}, init?: RequestInit): Promise<T.Series[]> {
    const query = {
      limit: params.limit,
      offset: params.offset,
      order: params.order,
      ascending: params.ascending,
      slug: params.slug,
      categories_ids: params.categories_ids,
      categories_labels: params.categories_labels,
      closed: params.closed,
      include_chat: params.include_chat,
      recurrence: params.recurrence,
    };

    return this.request({
      method: "GET",
      path: "/series",
      pathParams: undefined,
      query,
      body: undefined,
      init,
    }) as Promise<T.Series[]>;
  }

  async listSportEventsResults(params: T.ListSportEventsResultsParams = {}, init?: RequestInit): Promise<T.Event[]> {
    const query = {
      limit: params.limit,
      offset: params.offset,
      order: params.order,
      ascending: params.ascending,
    };

    return this.request({
      method: "GET",
      path: "/events/results",
      pathParams: undefined,
      query,
      body: undefined,
      init,
    }) as Promise<T.Event[]>;
  }

  async listTags(params: T.ListTagsParams = {}, init?: RequestInit): Promise<T.Tag[]> {
    const query = {
      limit: params.limit,
      offset: params.offset,
      order: params.order,
      ascending: params.ascending,
      include_template: params.include_template,
      is_carousel: params.is_carousel,
    };

    return this.request({
      method: "GET",
      path: "/tags",
      pathParams: undefined,
      query,
      body: undefined,
      init,
    }) as Promise<T.Tag[]>;
  }

  async listTeams(params: T.ListTeamsParams = {}, init?: RequestInit): Promise<T.Team[]> {
    const query = {
      limit: params.limit,
      offset: params.offset,
      order: params.order,
      ascending: params.ascending,
      league: params.league,
      name: params.name,
      abbreviation: params.abbreviation,
    };

    return this.request({
      method: "GET",
      path: "/teams",
      pathParams: undefined,
      query,
      body: undefined,
      init,
    }) as Promise<T.Team[]>;
  }

  async publicSearch(params: T.PublicSearchParams, init?: RequestInit): Promise<T.Search> {
    const query = {
      q: params.q,
      cache: params.cache,
      events_status: params.events_status,
      limit_per_type: params.limit_per_type,
      page: params.page,
      events_tag: params.events_tag,
      keep_closed_markets: params.keep_closed_markets,
      sort: params.sort,
      ascending: params.ascending,
      search_tags: params.search_tags,
      search_profiles: params.search_profiles,
      recurrence: params.recurrence,
      exclude_tag_id: params.exclude_tag_id,
      optimized: params.optimized,
    };

    return this.request({
      method: "GET",
      path: "/public-search",
      pathParams: undefined,
      query,
      body: undefined,
      init,
    }) as Promise<T.Search>;
  }
}
