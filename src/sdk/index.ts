import type { ApiClientOptions } from "./core";
import { BridgeSDK } from "./bridge";
import { DataSDK } from "./data";
import { GammaSDK } from "./gamma";

export { BaseApiClient, PolymarketApiError } from "./core";

export { GammaSDK, DEFAULT_GAMMA_BASE_URL } from "./gamma";
export type * as GammaTypes from "./gamma/generated/types";

export { DataSDK, DEFAULT_DATA_BASE_URL } from "./data";
export type * as DataTypes from "./data/generated/types";

export { BridgeSDK, DEFAULT_BRIDGE_BASE_URL } from "./bridge";
export type * as BridgeTypes from "./bridge/generated/types";

export type PolymarketSDKOptions = {
  gamma?: ApiClientOptions;
  data?: ApiClientOptions;
  bridge?: ApiClientOptions;
};

export class PolymarketSDK {
  gamma: GammaSDK;
  data: DataSDK;
  bridge: BridgeSDK;

  constructor(options: PolymarketSDKOptions = {}) {
    this.gamma = new GammaSDK(options.gamma);
    this.data = new DataSDK(options.data);
    this.bridge = new BridgeSDK(options.bridge);
  }
}
