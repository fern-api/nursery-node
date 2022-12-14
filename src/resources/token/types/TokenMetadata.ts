/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { FernNursery } from "@fern-api/nursery";

/**
 * @example
 *     {
 *         tokenId: "some-token-id",
 *         ownerId: "some-owner-id",
 *         createdTime: new Date("2022-12-23T10:43:35Z"),
 *         status: FernNursery.TokenStatus.active()
 *     }
 */
export interface TokenMetadata {
  tokenId: FernNursery.TokenId;
  ownerId: FernNursery.OwnerId;
  description?: string;
  createdTime: Date;
  status: FernNursery.TokenStatus;
}
