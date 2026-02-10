/* eslint-disable */
// This file is auto-generated from https://docs.polymarket.com/api-reference/data-api-openapi.yaml
// Run `bun generate-sdks.ts` to regenerate.

export type DataOperationId = "getActivity" | "getClosedPositions" | "getDataApiHealth" | "getHolders" | "getLiveVolume" | "getOi" | "getOther" | "getPositions" | "getRevisions" | "getTraded" | "getTrades" | "getV1AccountingSnapshot" | "getV1BuildersLeaderboard" | "getV1BuildersVolume" | "getV1Leaderboard" | "getValue";

export type Activity = {
  proxyWallet?: Address;
  timestamp?: number;
  conditionId?: Hash64;
  type?: "TRADE" | "SPLIT" | "MERGE" | "REDEEM" | "REWARD" | "CONVERSION" | "MAKER_REBATE";
  size?: number;
  usdcSize?: number;
  transactionHash?: string;
  price?: number;
  asset?: string;
  side?: "BUY" | "SELL";
  outcomeIndex?: number;
  title?: string;
  slug?: string;
  icon?: string;
  eventSlug?: string;
  outcome?: string;
  name?: string;
  pseudonym?: string;
  bio?: string;
  profileImage?: string;
  profileImageOptimized?: string;
};
export type Address = string;
export type BuilderVolumeEntry = {
  dt?: string;
  builder?: string;
  builderLogo?: string;
  verified?: boolean;
  volume?: number;
  activeUsers?: number;
  rank?: string;
};
export type ClosedPosition = {
  proxyWallet?: Address;
  asset?: string;
  conditionId?: Hash64;
  avgPrice?: number;
  totalBought?: number;
  realizedPnl?: number;
  curPrice?: number;
  timestamp?: number;
  title?: string;
  slug?: string;
  icon?: string;
  eventSlug?: string;
  outcome?: string;
  outcomeIndex?: number;
  oppositeOutcome?: string;
  oppositeAsset?: string;
  endDate?: string;
};
export type ErrorResponse = {
  error: string;
};
export type Hash64 = string;
export type HealthResponse = {
  data?: string;
};
export type Holder = {
  proxyWallet?: Address;
  bio?: string;
  asset?: string;
  pseudonym?: string;
  amount?: number;
  displayUsernamePublic?: boolean;
  outcomeIndex?: number;
  name?: string;
  profileImage?: string;
  profileImageOptimized?: string;
};
export type LeaderboardEntry = {
  rank?: string;
  builder?: string;
  volume?: number;
  activeUsers?: number;
  verified?: boolean;
  builderLogo?: string;
};
export type LiveVolume = {
  total?: number;
  markets?: MarketVolume[];
};
export type MarketVolume = {
  market?: Hash64;
  value?: number;
};
export type MetaHolder = {
  token?: string;
  holders?: Holder[];
};
export type OpenInterest = {
  market?: Hash64;
  value?: number;
};
export type OtherSize = {
  id?: number;
  user?: Address;
  size?: number;
};
export type Position = {
  proxyWallet?: Address;
  asset?: string;
  conditionId?: Hash64;
  size?: number;
  avgPrice?: number;
  initialValue?: number;
  currentValue?: number;
  cashPnl?: number;
  percentPnl?: number;
  totalBought?: number;
  realizedPnl?: number;
  percentRealizedPnl?: number;
  curPrice?: number;
  redeemable?: boolean;
  mergeable?: boolean;
  title?: string;
  slug?: string;
  icon?: string;
  eventSlug?: string;
  outcome?: string;
  outcomeIndex?: number;
  oppositeOutcome?: string;
  oppositeAsset?: string;
  endDate?: string;
  negativeRisk?: boolean;
};
export type RevisionEntry = {
  revision?: string;
  timestamp?: number;
};
export type RevisionPayload = {
  questionID?: Hash64;
  revisions?: RevisionEntry[];
};
export type Trade = {
  proxyWallet?: Address;
  side?: "BUY" | "SELL";
  asset?: string;
  conditionId?: Hash64;
  size?: number;
  price?: number;
  timestamp?: number;
  title?: string;
  slug?: string;
  icon?: string;
  eventSlug?: string;
  outcome?: string;
  outcomeIndex?: number;
  name?: string;
  pseudonym?: string;
  bio?: string;
  profileImage?: string;
  profileImageOptimized?: string;
  transactionHash?: string;
};
export type Traded = {
  user?: Address;
  traded?: number;
};
export type TraderLeaderboardEntry = {
  rank?: string;
  proxyWallet?: Address;
  userName?: string;
  vol?: number;
  pnl?: number;
  profileImage?: string;
  xUsername?: string;
  verifiedBadge?: boolean;
};
export type Value = {
  user?: Address;
  value?: number;
};

export type GetActivityParams = {
  limit?: number;
  offset?: number;
  user: Address;
  market?: Hash64[];
  eventId?: number[];
  type?: "TRADE" | "SPLIT" | "MERGE" | "REDEEM" | "REWARD" | "CONVERSION" | "MAKER_REBATE"[];
  start?: number;
  end?: number;
  sortBy?: "TIMESTAMP" | "TOKENS" | "CASH";
  sortDirection?: "ASC" | "DESC";
  side?: "BUY" | "SELL";
};

export type GetClosedPositionsParams = {
  user: Address;
  market?: Hash64[];
  title?: string;
  eventId?: number[];
  limit?: number;
  offset?: number;
  sortBy?: "REALIZEDPNL" | "TITLE" | "PRICE" | "AVGPRICE" | "TIMESTAMP";
  sortDirection?: "ASC" | "DESC";
};

export type GetHoldersParams = {
  limit?: number;
  market: Hash64[];
  minBalance?: number;
};

export type GetLiveVolumeParams = {
  id: number;
};

export type GetOiParams = {
  market?: Hash64[];
};

export type GetOtherParams = {
  id: number;
  user: Address;
};

export type GetPositionsParams = {
  user: Address;
  market?: Hash64[];
  eventId?: number[];
  sizeThreshold?: number;
  redeemable?: boolean;
  mergeable?: boolean;
  limit?: number;
  offset?: number;
  sortBy?: "CURRENT" | "INITIAL" | "TOKENS" | "CASHPNL" | "PERCENTPNL" | "TITLE" | "RESOLVING" | "PRICE" | "AVGPRICE";
  sortDirection?: "ASC" | "DESC";
  title?: string;
};

export type GetRevisionsParams = {
  questionID: Hash64;
  limit?: number;
};

export type GetTradedParams = {
  user: Address;
};

export type GetTradesParams = {
  limit?: number;
  offset?: number;
  takerOnly?: boolean;
  filterType?: "CASH" | "TOKENS";
  filterAmount?: number;
  market?: Hash64[];
  eventId?: number[];
  user?: Address;
  side?: "BUY" | "SELL";
};

export type GetV1AccountingSnapshotParams = {
  user: Address;
};

export type GetV1BuildersLeaderboardParams = {
  timePeriod?: "DAY" | "WEEK" | "MONTH" | "ALL";
  limit?: number;
  offset?: number;
};

export type GetV1BuildersVolumeParams = {
  timePeriod?: "DAY" | "WEEK" | "MONTH" | "ALL";
};

export type GetV1LeaderboardParams = {
  category?: "OVERALL" | "POLITICS" | "SPORTS" | "CRYPTO" | "CULTURE" | "MENTIONS" | "WEATHER" | "ECONOMICS" | "TECH" | "FINANCE";
  timePeriod?: "DAY" | "WEEK" | "MONTH" | "ALL";
  orderBy?: "PNL" | "VOL";
  limit?: number;
  offset?: number;
  user?: Address;
  userName?: string;
};

export type GetValueParams = {
  user: Address;
  market?: Hash64[];
};
