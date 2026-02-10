/* eslint-disable */
// This file is auto-generated from https://docs.polymarket.com/api-reference/bridge-api-openapi.yaml
// Run `bun generate-sdks.ts` to regenerate.

export type BridgeOperationId = "getStatusByAddress" | "getSupportedAssets" | "postDeposit" | "postQuote" | "postWithdraw";

export type Address = string;
export type DepositRequest = {
  address: Address;
};
export type DepositResponse = {
  address?: {
    evm?: string;
    svm?: string;
    btc?: string;
  };
  note?: string;
};
export type ErrorResponse = {
  error: string;
};
export type FeeBreakdown = {
  appFeeLabel?: string;
  appFeePercent?: number;
  appFeeUsd?: number;
  fillCostPercent?: number;
  fillCostUsd?: number;
  gasUsd?: number;
  maxSlippage?: number;
  minReceived?: number;
  swapImpact?: number;
  swapImpactUsd?: number;
  totalImpact?: number;
  totalImpactUsd?: number;
};
export type QuoteRequest = {
  fromAmountBaseUnit: string;
  fromChainId: string;
  fromTokenAddress: string;
  recipientAddress: string;
  toChainId: string;
  toTokenAddress: string;
};
export type QuoteResponse = {
  estCheckoutTimeMs?: number;
  estFeeBreakdown?: FeeBreakdown;
  estInputUsd?: number;
  estOutputUsd?: number;
  estToTokenBaseUnit?: string;
  quoteId?: string;
};
export type SupportedAsset = {
  chainId?: string;
  chainName?: string;
  token?: Token;
  minCheckoutUsd?: number;
};
export type SupportedAssetsResponse = {
  supportedAssets?: SupportedAsset[];
};
export type Token = {
  name?: string;
  symbol?: string;
  address?: string;
  decimals?: number;
};
export type Transaction = {
  fromChainId?: string;
  fromTokenAddress?: string;
  fromAmountBaseUnit?: string;
  toChainId?: string;
  toTokenAddress?: string;
  status?: "DEPOSIT_DETECTED" | "PROCESSING" | "ORIGIN_TX_CONFIRMED" | "SUBMITTED" | "COMPLETED" | "FAILED";
  txHash?: string;
  createdTimeMs?: number;
};
export type TransactionStatusResponse = {
  transactions?: Transaction[];
};
export type WithdrawalRequest = {
  address: Address;
  toChainId: string;
  toTokenAddress: string;
  recipientAddr: string;
};

export type GetStatusByAddressParams = {
  address: string;
};

export type PostDepositParams = {
  body: DepositRequest;
};

export type PostQuoteParams = {
  body: QuoteRequest;
};

export type PostWithdrawParams = {
  body: WithdrawalRequest;
};
