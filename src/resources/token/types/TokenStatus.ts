/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { FernNursery } from "@fern-api/nursery";
import * as core from "../../../core";

/**
 * @example
 *     FernNursery.TokenStatus.active()
 *
 * @example
 *     FernNursery.TokenStatus.expired()
 *
 * @example
 *     FernNursery.TokenStatus.revoked()
 */
export type TokenStatus =
  | FernNursery.TokenStatus.Active
  | FernNursery.TokenStatus.Expired
  | FernNursery.TokenStatus.Revoked
  | FernNursery.TokenStatus._Unknown;

export declare namespace TokenStatus {
  interface Active extends _Utils {
    type: "active";
  }

  interface Expired extends _Utils {
    type: "expired";
  }

  interface Revoked extends _Utils {
    type: "revoked";
  }

  interface _Unknown extends _Utils {
    type: void;
  }

  interface _Utils {
    _visit: <_Result>(visitor: FernNursery.TokenStatus._Visitor<_Result>) => _Result;
  }

  interface _Visitor<_Result> {
    active: () => _Result;
    expired: () => _Result;
    revoked: () => _Result;
    _other: (value: { type: string }) => _Result;
  }
}

export const TokenStatus = {
  active: (): FernNursery.TokenStatus.Active => {
    const valueWithoutVisit: Omit<FernNursery.TokenStatus.Active, "_visit"> = {
      type: "active",
    };
    return core.addNonEnumerableProperty(valueWithoutVisit, "_visit", function <
      _Result
    >(this: FernNursery.TokenStatus.Active, visitor: FernNursery.TokenStatus._Visitor<_Result>) {
      return FernNursery.TokenStatus._visit(this, visitor);
    });
  },

  expired: (): FernNursery.TokenStatus.Expired => {
    const valueWithoutVisit: Omit<FernNursery.TokenStatus.Expired, "_visit"> = {
      type: "expired",
    };
    return core.addNonEnumerableProperty(valueWithoutVisit, "_visit", function <
      _Result
    >(this: FernNursery.TokenStatus.Expired, visitor: FernNursery.TokenStatus._Visitor<_Result>) {
      return FernNursery.TokenStatus._visit(this, visitor);
    });
  },

  revoked: (): FernNursery.TokenStatus.Revoked => {
    const valueWithoutVisit: Omit<FernNursery.TokenStatus.Revoked, "_visit"> = {
      type: "revoked",
    };
    return core.addNonEnumerableProperty(valueWithoutVisit, "_visit", function <
      _Result
    >(this: FernNursery.TokenStatus.Revoked, visitor: FernNursery.TokenStatus._Visitor<_Result>) {
      return FernNursery.TokenStatus._visit(this, visitor);
    });
  },

  _unknown: (value: { type: string }): FernNursery.TokenStatus._Unknown => {
    const valueWithoutVisit = value as unknown as Omit<FernNursery.TokenStatus._Unknown, "_visit">;
    return core.addNonEnumerableProperty(valueWithoutVisit, "_visit", function <
      _Result
    >(this: FernNursery.TokenStatus._Unknown, visitor: FernNursery.TokenStatus._Visitor<_Result>) {
      return FernNursery.TokenStatus._visit(this, visitor);
    });
  },

  _visit: <_Result>(value: FernNursery.TokenStatus, visitor: FernNursery.TokenStatus._Visitor<_Result>): _Result => {
    switch (value.type) {
      case "active":
        return visitor.active();
      case "expired":
        return visitor.expired();
      case "revoked":
        return visitor.revoked();
      default:
        return visitor._other(value as any);
    }
  },
} as const;
