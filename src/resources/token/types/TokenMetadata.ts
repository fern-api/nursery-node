/**
 * This file auto-generated by Fern from our API Definition.
 */

import { FernNurseryApi } from "@fern-api/nursery";

export interface TokenMetadata {
  tokenId: FernNurseryApi.TokenId;
  ownerId: FernNurseryApi.OwnerId;
  description?: string;
  createdTime: Date;
  status: FernNurseryApi.TokenStatus;
}
