/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { FernNursery } from "@fern-api/nursery";
import * as core from "../../../core";

export const TokenId: core.schemas.Schema<serializers.TokenId.Raw, FernNursery.TokenId> = core.schemas.string();

export declare namespace TokenId {
  type Raw = string;
}
