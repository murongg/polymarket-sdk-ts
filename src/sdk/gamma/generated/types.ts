/* eslint-disable */
// This file is auto-generated from https://docs.polymarket.com/api-reference/gamma-openapi.json
// Run `bun generate-sdks.ts` to regenerate.

export type GammaOperationId = "getAbridgedMarkets" | "getCommentsById" | "getCommentsByUserAddress" | "getEvent" | "getEventBySlug" | "getEventCommentsCount" | "getEventCreator" | "getEventTags" | "getEventTweetCount" | "getGammaStatus" | "getMarket" | "getMarketBySlug" | "getMarketDescription" | "getMarketsInformation" | "getMarketTags" | "getPublicProfile" | "getPublicProfileByUserAddress" | "getRelatedTagsById" | "getRelatedTagsBySlug" | "getSeries" | "getSeriesCommentsCount" | "getSeriesSummaryById" | "getSeriesSummaryBySlug" | "getSportsMarketTypes" | "getSportsMetadata" | "getTag" | "getTagBySlug" | "getTagsRelatedToATagById" | "getTagsRelatedToATagBySlug" | "getTeam" | "listComments" | "listEventCreators" | "listEvents" | "listEventsPagination" | "listMarkets" | "listSeries" | "listSportEventsResults" | "listTags" | "listTeams" | "publicSearch";

export type Category = {
  id?: string;
  label?: string | null;
  parentCategory?: string | null;
  slug?: string | null;
  publishedAt?: string | null;
  createdBy?: string | null;
  updatedBy?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};
export type Chat = {
  id?: string;
  channelId?: string | null;
  channelName?: string | null;
  channelImage?: string | null;
  live?: boolean | null;
  startTime?: string | null;
  endTime?: string | null;
};
export type Collection = {
  id?: string;
  ticker?: string | null;
  slug?: string | null;
  title?: string | null;
  subtitle?: string | null;
  collectionType?: string | null;
  description?: string | null;
  tags?: string | null;
  image?: string | null;
  icon?: string | null;
  headerImage?: string | null;
  layout?: string | null;
  active?: boolean | null;
  closed?: boolean | null;
  archived?: boolean | null;
  new?: boolean | null;
  featured?: boolean | null;
  restricted?: boolean | null;
  isTemplate?: boolean | null;
  templateVariables?: string | null;
  publishedAt?: string | null;
  createdBy?: string | null;
  updatedBy?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  commentsEnabled?: boolean | null;
  imageOptimized?: ImageOptimization;
  iconOptimized?: ImageOptimization;
  headerImageOptimized?: ImageOptimization;
};
export type Comment = {
  id?: string;
  body?: string | null;
  parentEntityType?: string | null;
  parentEntityID?: number | null;
  parentCommentID?: string | null;
  userAddress?: string | null;
  replyAddress?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  profile?: CommentProfile;
  reactions?: Reaction[];
  reportCount?: number | null;
  reactionCount?: number | null;
};
export type CommentPosition = {
  tokenId?: string | null;
  positionSize?: string | null;
};
export type CommentProfile = {
  name?: string | null;
  pseudonym?: string | null;
  displayUsernamePublic?: boolean | null;
  bio?: string | null;
  isMod?: boolean | null;
  isCreator?: boolean | null;
  proxyWallet?: string | null;
  baseAddress?: string | null;
  profileImage?: string | null;
  profileImageOptimized?: ImageOptimization;
  positions?: CommentPosition[];
};
export type Count = {
  count?: number;
};
export type Event = {
  id?: string;
  ticker?: string | null;
  slug?: string | null;
  title?: string | null;
  subtitle?: string | null;
  description?: string | null;
  resolutionSource?: string | null;
  startDate?: string | null;
  creationDate?: string | null;
  endDate?: string | null;
  image?: string | null;
  icon?: string | null;
  active?: boolean | null;
  closed?: boolean | null;
  archived?: boolean | null;
  new?: boolean | null;
  featured?: boolean | null;
  restricted?: boolean | null;
  liquidity?: number | null;
  volume?: number | null;
  openInterest?: number | null;
  sortBy?: string | null;
  category?: string | null;
  subcategory?: string | null;
  isTemplate?: boolean | null;
  templateVariables?: string | null;
  published_at?: string | null;
  createdBy?: string | null;
  updatedBy?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  commentsEnabled?: boolean | null;
  competitive?: number | null;
  volume24hr?: number | null;
  volume1wk?: number | null;
  volume1mo?: number | null;
  volume1yr?: number | null;
  featuredImage?: string | null;
  disqusThread?: string | null;
  parentEvent?: string | null;
  enableOrderBook?: boolean | null;
  liquidityAmm?: number | null;
  liquidityClob?: number | null;
  negRisk?: boolean | null;
  negRiskMarketID?: string | null;
  negRiskFeeBips?: number | null;
  commentCount?: number | null;
  imageOptimized?: ImageOptimization;
  iconOptimized?: ImageOptimization;
  featuredImageOptimized?: ImageOptimization;
  subEvents?: string[] | null;
  markets?: Market[];
  series?: Series[];
  categories?: Category[];
  collections?: Collection[];
  tags?: Tag[];
  cyom?: boolean | null;
  closedTime?: string | null;
  showAllOutcomes?: boolean | null;
  showMarketImages?: boolean | null;
  automaticallyResolved?: boolean | null;
  enableNegRisk?: boolean | null;
  automaticallyActive?: boolean | null;
  eventDate?: string | null;
  startTime?: string | null;
  eventWeek?: number | null;
  seriesSlug?: string | null;
  score?: string | null;
  elapsed?: string | null;
  period?: string | null;
  live?: boolean | null;
  ended?: boolean | null;
  finishedTimestamp?: string | null;
  gmpChartMode?: string | null;
  eventCreators?: EventCreator[];
  tweetCount?: number | null;
  chats?: Chat[];
  featuredOrder?: number | null;
  estimateValue?: boolean | null;
  cantEstimate?: boolean | null;
  estimatedValue?: string | null;
  templates?: Template[];
  spreadsMainLine?: number | null;
  totalsMainLine?: number | null;
  carouselMap?: string | null;
  pendingDeployment?: boolean | null;
  deploying?: boolean | null;
  deployingTimestamp?: string | null;
  scheduledDeploymentTimestamp?: string | null;
  gameStatus?: string | null;
};
export type EventCreator = {
  id?: string;
  creatorName?: string | null;
  creatorHandle?: string | null;
  creatorUrl?: string | null;
  creatorImage?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};
export type EventTweetCount = {
  tweetCount?: number;
};
export type EventsPagination = {
  data?: Event[];
  pagination?: Pagination;
};
export type ImageOptimization = {
  id?: string;
  imageUrlSource?: string | null;
  imageUrlOptimized?: string | null;
  imageSizeKbSource?: number | null;
  imageSizeKbOptimized?: number | null;
  imageOptimizedComplete?: boolean | null;
  imageOptimizedLastUpdated?: string | null;
  relID?: number | null;
  field?: string | null;
  relname?: string | null;
};
export type Market = {
  id?: string;
  question?: string | null;
  conditionId?: string;
  slug?: string | null;
  twitterCardImage?: string | null;
  resolutionSource?: string | null;
  endDate?: string | null;
  category?: string | null;
  ammType?: string | null;
  liquidity?: string | null;
  sponsorName?: string | null;
  sponsorImage?: string | null;
  startDate?: string | null;
  xAxisValue?: string | null;
  yAxisValue?: string | null;
  denominationToken?: string | null;
  fee?: string | null;
  image?: string | null;
  icon?: string | null;
  lowerBound?: string | null;
  upperBound?: string | null;
  description?: string | null;
  outcomes?: string | null;
  outcomePrices?: string | null;
  volume?: string | null;
  active?: boolean | null;
  marketType?: string | null;
  formatType?: string | null;
  lowerBoundDate?: string | null;
  upperBoundDate?: string | null;
  closed?: boolean | null;
  marketMakerAddress?: string;
  createdBy?: number | null;
  updatedBy?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  closedTime?: string | null;
  wideFormat?: boolean | null;
  new?: boolean | null;
  mailchimpTag?: string | null;
  featured?: boolean | null;
  archived?: boolean | null;
  resolvedBy?: string | null;
  restricted?: boolean | null;
  marketGroup?: number | null;
  groupItemTitle?: string | null;
  groupItemThreshold?: string | null;
  questionID?: string | null;
  umaEndDate?: string | null;
  enableOrderBook?: boolean | null;
  orderPriceMinTickSize?: number | null;
  orderMinSize?: number | null;
  umaResolutionStatus?: string | null;
  curationOrder?: number | null;
  volumeNum?: number | null;
  liquidityNum?: number | null;
  endDateIso?: string | null;
  startDateIso?: string | null;
  umaEndDateIso?: string | null;
  hasReviewedDates?: boolean | null;
  readyForCron?: boolean | null;
  commentsEnabled?: boolean | null;
  volume24hr?: number | null;
  volume1wk?: number | null;
  volume1mo?: number | null;
  volume1yr?: number | null;
  gameStartTime?: string | null;
  secondsDelay?: number | null;
  clobTokenIds?: string | null;
  disqusThread?: string | null;
  shortOutcomes?: string | null;
  teamAID?: string | null;
  teamBID?: string | null;
  umaBond?: string | null;
  umaReward?: string | null;
  fpmmLive?: boolean | null;
  volume24hrAmm?: number | null;
  volume1wkAmm?: number | null;
  volume1moAmm?: number | null;
  volume1yrAmm?: number | null;
  volume24hrClob?: number | null;
  volume1wkClob?: number | null;
  volume1moClob?: number | null;
  volume1yrClob?: number | null;
  volumeAmm?: number | null;
  volumeClob?: number | null;
  liquidityAmm?: number | null;
  liquidityClob?: number | null;
  makerBaseFee?: number | null;
  takerBaseFee?: number | null;
  customLiveness?: number | null;
  acceptingOrders?: boolean | null;
  notificationsEnabled?: boolean | null;
  score?: number | null;
  imageOptimized?: ImageOptimization;
  iconOptimized?: ImageOptimization;
  events?: Event[];
  categories?: Category[];
  tags?: Tag[];
  creator?: string | null;
  ready?: boolean | null;
  funded?: boolean | null;
  pastSlugs?: string | null;
  readyTimestamp?: string | null;
  fundedTimestamp?: string | null;
  acceptingOrdersTimestamp?: string | null;
  competitive?: number | null;
  rewardsMinSize?: number | null;
  rewardsMaxSpread?: number | null;
  spread?: number | null;
  automaticallyResolved?: boolean | null;
  oneDayPriceChange?: number | null;
  oneHourPriceChange?: number | null;
  oneWeekPriceChange?: number | null;
  oneMonthPriceChange?: number | null;
  oneYearPriceChange?: number | null;
  lastTradePrice?: number | null;
  bestBid?: number | null;
  bestAsk?: number | null;
  automaticallyActive?: boolean | null;
  clearBookOnStart?: boolean | null;
  chartColor?: string | null;
  seriesColor?: string | null;
  showGmpSeries?: boolean | null;
  showGmpOutcome?: boolean | null;
  manualActivation?: boolean | null;
  negRiskOther?: boolean | null;
  gameId?: string | null;
  groupItemRange?: string | null;
  sportsMarketType?: string | null;
  line?: number | null;
  umaResolutionStatuses?: string | null;
  pendingDeployment?: boolean | null;
  deploying?: boolean | null;
  deployingTimestamp?: string | null;
  scheduledDeploymentTimestamp?: string | null;
  rfqEnabled?: boolean | null;
  eventStartTime?: string | null;
};
export type MarketDescription = {
  description?: string | null;
};
export type MarketsInformationBody = {
  id?: number[];
  slug?: string[];
  closed?: boolean | null;
  clobTokenIds?: string[];
  conditionIds?: string[];
  marketMakerAddress?: string[];
  liquidityNumMin?: number | null;
  liquidityNumMax?: number | null;
  volumeNumMin?: number | null;
  volumeNumMax?: number | null;
  startDateMin?: string | null;
  startDateMax?: string | null;
  endDateMin?: string | null;
  endDateMax?: string | null;
  relatedTags?: boolean | null;
  tagId?: number | null;
  cyom?: boolean | null;
  umaResolutionStatus?: string | null;
  gameId?: string | null;
  sportsMarketTypes?: string[];
  rewardsMinSize?: number | null;
  questionIds?: string[];
  includeTags?: boolean | null;
};
export type Pagination = {
  hasMore?: boolean;
  totalResults?: number;
};
export type Profile = {
  id?: string;
  name?: string | null;
  user?: number | null;
  referral?: string | null;
  createdBy?: number | null;
  updatedBy?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  utmSource?: string | null;
  utmMedium?: string | null;
  utmCampaign?: string | null;
  utmContent?: string | null;
  utmTerm?: string | null;
  walletActivated?: boolean | null;
  pseudonym?: string | null;
  displayUsernamePublic?: boolean | null;
  profileImage?: string | null;
  bio?: string | null;
  proxyWallet?: string | null;
  profileImageOptimized?: ImageOptimization;
  isCloseOnly?: boolean | null;
  isCertReq?: boolean | null;
  certReqDate?: string | null;
};
export type PublicProfileError = {
  type?: string;
  error?: string;
};
export type PublicProfileResponse = {
  createdAt?: string | null;
  proxyWallet?: string | null;
  profileImage?: string | null;
  displayUsernamePublic?: boolean | null;
  bio?: string | null;
  pseudonym?: string | null;
  name?: string | null;
  users?: PublicProfileUser[] | null;
  xUsername?: string | null;
  verifiedBadge?: boolean | null;
};
export type PublicProfileUser = {
  id?: string;
  creator?: boolean;
  mod?: boolean;
};
export type Reaction = {
  id?: string;
  commentID?: number | null;
  reactionType?: string | null;
  icon?: string | null;
  userAddress?: string | null;
  createdAt?: string | null;
  profile?: CommentProfile;
};
export type RelatedTag = {
  id?: string;
  tagID?: number | null;
  relatedTagID?: number | null;
  rank?: number | null;
};
export type Search = {
  events?: Event[] | null;
  tags?: SearchTag[] | null;
  profiles?: Profile[] | null;
  pagination?: Pagination;
};
export type SearchTag = {
  id?: string;
  label?: string;
  slug?: string;
  event_count?: number;
};
export type Series = {
  id?: string;
  ticker?: string | null;
  slug?: string | null;
  title?: string | null;
  subtitle?: string | null;
  seriesType?: string | null;
  recurrence?: string | null;
  description?: string | null;
  image?: string | null;
  icon?: string | null;
  layout?: string | null;
  active?: boolean | null;
  closed?: boolean | null;
  archived?: boolean | null;
  new?: boolean | null;
  featured?: boolean | null;
  restricted?: boolean | null;
  isTemplate?: boolean | null;
  templateVariables?: boolean | null;
  publishedAt?: string | null;
  createdBy?: string | null;
  updatedBy?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  commentsEnabled?: boolean | null;
  competitive?: string | null;
  volume24hr?: number | null;
  volume?: number | null;
  liquidity?: number | null;
  startDate?: string | null;
  pythTokenID?: string | null;
  cgAssetName?: string | null;
  score?: number | null;
  events?: Event[];
  collections?: Collection[];
  categories?: Category[];
  tags?: Tag[];
  commentCount?: number | null;
  chats?: Chat[];
};
export type SeriesSummary = {
  id?: string;
  title?: string | null;
  slug?: string | null;
  eventDates?: string[];
  eventWeeks?: number[];
  earliest_open_week?: number | null;
  earliest_open_date?: string | null;
};
export type SportsMarketTypesResponse = {
  marketTypes?: string[];
};
export type SportsMetadata = {
  sport?: string;
  image?: string;
  resolution?: string;
  ordering?: string;
  tags?: string;
  series?: string;
};
export type Tag = {
  id?: string;
  label?: string | null;
  slug?: string | null;
  forceShow?: boolean | null;
  publishedAt?: string | null;
  createdBy?: number | null;
  updatedBy?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  forceHide?: boolean | null;
  isCarousel?: boolean | null;
};
export type Team = {
  id?: number;
  name?: string | null;
  league?: string | null;
  record?: string | null;
  logo?: string | null;
  abbreviation?: string | null;
  alias?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};
export type Template = {
  id?: string;
  eventTitle?: string | null;
  eventSlug?: string | null;
  eventImage?: string | null;
  marketTitle?: string | null;
  description?: string | null;
  resolutionSource?: string | null;
  negRisk?: boolean | null;
  sortBy?: string | null;
  showMarketImages?: boolean | null;
  seriesSlug?: string | null;
  outcomes?: string | null;
};

export type GetAbridgedMarketsParams = {
  body: MarketsInformationBody;
};

export type GetCommentsByIdParams = {
  id: number;
  get_positions?: boolean;
};

export type GetCommentsByUserAddressParams = {
  user_address: string;
  limit?: number;
  offset?: number;
  order?: string;
  ascending?: boolean;
};

export type GetEventParams = {
  id: number;
  include_chat?: boolean;
  include_template?: boolean;
};

export type GetEventBySlugParams = {
  slug: string;
  include_chat?: boolean;
  include_template?: boolean;
};

export type GetEventCommentsCountParams = {
  id: number;
};

export type GetEventCreatorParams = {
  id: number;
};

export type GetEventTagsParams = {
  id: number;
};

export type GetEventTweetCountParams = {
  id: number;
};

export type GetMarketParams = {
  id: number;
  include_tag?: boolean;
};

export type GetMarketBySlugParams = {
  slug: string;
  include_tag?: boolean;
};

export type GetMarketDescriptionParams = {
  id: number;
};

export type GetMarketsInformationParams = {
  body: MarketsInformationBody;
};

export type GetMarketTagsParams = {
  id: number;
};

export type GetPublicProfileParams = {
  address: string;
};

export type GetPublicProfileByUserAddressParams = {
  user_address: string;
};

export type GetRelatedTagsByIdParams = {
  id: number;
  omit_empty?: boolean;
  status?: "active" | "closed" | "all";
};

export type GetRelatedTagsBySlugParams = {
  slug: string;
  omit_empty?: boolean;
  status?: "active" | "closed" | "all";
};

export type GetSeriesParams = {
  id: number;
  include_chat?: boolean;
};

export type GetSeriesCommentsCountParams = {
  id: number;
};

export type GetSeriesSummaryByIdParams = {
  id: number;
};

export type GetSeriesSummaryBySlugParams = {
  slug: string;
};

export type GetTagParams = {
  id: number;
  include_template?: boolean;
};

export type GetTagBySlugParams = {
  slug: string;
  include_template?: boolean;
};

export type GetTagsRelatedToATagByIdParams = {
  id: number;
  omit_empty?: boolean;
  status?: "active" | "closed" | "all";
};

export type GetTagsRelatedToATagBySlugParams = {
  slug: string;
  omit_empty?: boolean;
  status?: "active" | "closed" | "all";
};

export type GetTeamParams = {
  id: number;
};

export type ListCommentsParams = {
  limit?: number;
  offset?: number;
  order?: string;
  ascending?: boolean;
  parent_entity_type?: "Event" | "Series" | "market";
  parent_entity_id?: number;
  get_positions?: boolean;
  holders_only?: boolean;
};

export type ListEventCreatorsParams = {
  limit?: number;
  offset?: number;
  order?: string;
  ascending?: boolean;
  creator_name?: string;
  creator_handle?: string;
};

export type ListEventsParams = {
  limit?: number;
  offset?: number;
  order?: string;
  ascending?: boolean;
  id?: number[];
  tag_id?: number;
  exclude_tag_id?: number[];
  slug?: string[];
  tag_slug?: string;
  related_tags?: boolean;
  active?: boolean;
  archived?: boolean;
  featured?: boolean;
  cyom?: boolean;
  include_chat?: boolean;
  include_template?: boolean;
  recurrence?: string;
  closed?: boolean;
  liquidity_min?: number;
  liquidity_max?: number;
  volume_min?: number;
  volume_max?: number;
  start_date_min?: string;
  start_date_max?: string;
  end_date_min?: string;
  end_date_max?: string;
};

export type ListEventsPaginationParams = {
  limit?: number;
  offset?: number;
  order?: string;
  ascending?: boolean;
  include_chat?: boolean;
  include_template?: boolean;
  recurrence?: string;
};

export type ListMarketsParams = {
  limit?: number;
  offset?: number;
  order?: string;
  ascending?: boolean;
  id?: number[];
  slug?: string[];
  clob_token_ids?: string[];
  condition_ids?: string[];
  market_maker_address?: string[];
  liquidity_num_min?: number;
  liquidity_num_max?: number;
  volume_num_min?: number;
  volume_num_max?: number;
  start_date_min?: string;
  start_date_max?: string;
  end_date_min?: string;
  end_date_max?: string;
  tag_id?: number;
  related_tags?: boolean;
  cyom?: boolean;
  uma_resolution_status?: string;
  game_id?: string;
  sports_market_types?: string[];
  rewards_min_size?: number;
  question_ids?: string[];
  include_tag?: boolean;
  closed?: boolean;
};

export type ListSeriesParams = {
  limit?: number;
  offset?: number;
  order?: string;
  ascending?: boolean;
  slug?: string[];
  categories_ids?: number[];
  categories_labels?: string[];
  closed?: boolean;
  include_chat?: boolean;
  recurrence?: string;
};

export type ListSportEventsResultsParams = {
  limit?: number;
  offset?: number;
  order?: string;
  ascending?: boolean;
};

export type ListTagsParams = {
  limit?: number;
  offset?: number;
  order?: string;
  ascending?: boolean;
  include_template?: boolean;
  is_carousel?: boolean;
};

export type ListTeamsParams = {
  limit?: number;
  offset?: number;
  order?: string;
  ascending?: boolean;
  league?: string[];
  name?: string[];
  abbreviation?: string[];
};

export type PublicSearchParams = {
  q: string;
  cache?: boolean;
  events_status?: string;
  limit_per_type?: number;
  page?: number;
  events_tag?: string[];
  keep_closed_markets?: number;
  sort?: string;
  ascending?: boolean;
  search_tags?: boolean;
  search_profiles?: boolean;
  recurrence?: string;
  exclude_tag_id?: number[];
  optimized?: boolean;
};
