/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { FernNursery } from "@fern-api/nursery";
import * as core from "../../../core";

export const OwnerId: core.schemas.Schema<serializers.OwnerId.Raw, FernNursery.OwnerId> = core.schemas.string();

export declare namespace OwnerId {
  type Raw = string;
}
