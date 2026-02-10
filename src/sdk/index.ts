import type { ApiClientOptions } from "./core";
import { BridgeSDK } from "./bridge";
import { ClobSDK } from "./clob";
import { DataSDK } from "./data";
import { GammaSDK } from "./gamma";

export { BaseApiClient, PolymarketApiError } from "./core";

export { ClobSDK, DEFAULT_CLOB_BASE_URL } from "./clob";
export type * as ClobTypes from "./clob/generated/types";

export { GammaSDK, DEFAULT_GAMMA_BASE_URL } from "./gamma";
export type * as GammaTypes from "./gamma/generated/types";

export { DataSDK, DEFAULT_DATA_BASE_URL } from "./data";
export type * as DataTypes from "./data/generated/types";

export { BridgeSDK, DEFAULT_BRIDGE_BASE_URL } from "./bridge";
export type * as BridgeTypes from "./bridge/generated/types";

export type PolymarketSDKOptions = {
  clob?: ApiClientOptions;
  gamma?: ApiClientOptions;
  data?: ApiClientOptions;
  bridge?: ApiClientOptions;
};

export class PolymarketSDK {
  clob: ClobSDK;
  gamma: GammaSDK;
  data: DataSDK;
  bridge: BridgeSDK;

  constructor(options: PolymarketSDKOptions = {}) {
    this.clob = new ClobSDK(options.clob);
    this.gamma = new GammaSDK(options.gamma);
    this.data = new DataSDK(options.data);
    this.bridge = new BridgeSDK(options.bridge);
  }
}
