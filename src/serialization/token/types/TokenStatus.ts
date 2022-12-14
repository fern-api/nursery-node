/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { FernNursery } from "@fern-api/nursery";
import * as core from "../../../core";

export const TokenStatus: core.schemas.Schema<serializers.TokenStatus.Raw, FernNursery.TokenStatus> = core.schemas
  .union("type", {
    active: core.schemas.object({}),
    expired: core.schemas.object({}),
    revoked: core.schemas.object({}),
  })
  .transform<FernNursery.TokenStatus>({
    parse: (value) => {
      switch (value.type) {
        case "active":
          return FernNursery.TokenStatus.active();
        case "expired":
          return FernNursery.TokenStatus.expired();
        case "revoked":
          return FernNursery.TokenStatus.revoked();
        default:
          return FernNursery.TokenStatus._unknown(value);
      }
    },
    json: (value) => value as any,
  });

export declare namespace TokenStatus {
  type Raw = TokenStatus.Active | TokenStatus.Expired | TokenStatus.Revoked;

  interface Active {
    type: "active";
  }

  interface Expired {
    type: "expired";
  }

  interface Revoked {
    type: "revoked";
  }
}
