/**
 * This file auto-generated by Fern from our API Definition.
 */

import { FernNurseryApi } from "../../..";

export interface TokenMetadata {
  tokenId: FernNurseryApi.token.TokenId;
  ownerId: FernNurseryApi.owner.OwnerId;
  description?: string;
  createdTime: Date;
  status: FernNurseryApi.token.TokenStatus;
}
