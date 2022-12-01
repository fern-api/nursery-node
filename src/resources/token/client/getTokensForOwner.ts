/**
 * This file auto-generated by Fern from our API Definition.
 */

import { FernNurseryApi } from "@fern-api/nursery";
import * as core from "../../../core";

export interface Request {
  ownerId: FernNurseryApi.OwnerId;
}

export type Response = core.APIResponse<FernNurseryApi.TokenMetadata[], FernNurseryApi.token.getTokensForOwner.Error>;
export type Error =
  | FernNurseryApi.token.getTokensForOwner.Error.OwnerNotFoundError
  | FernNurseryApi.token.getTokensForOwner.Error._Unknown;

export declare namespace Error {
  interface OwnerNotFoundError extends _Utils {
    errorName: "OwnerNotFoundError";
  }

  interface _Unknown extends _Utils {
    errorName: void;
    content: core.Fetcher.Error;
  }

  interface _Utils {
    _visit: <_Result>(visitor: FernNurseryApi.token.getTokensForOwner.Error._Visitor<_Result>) => _Result;
  }

  interface _Visitor<_Result> {
    ownerNotFoundError: () => _Result;
    _other: (value: core.Fetcher.Error) => _Result;
  }
}

export const Error = {
  ownerNotFoundError: (): FernNurseryApi.token.getTokensForOwner.Error.OwnerNotFoundError => {
    const valueWithoutVisit: Omit<FernNurseryApi.token.getTokensForOwner.Error.OwnerNotFoundError, "_visit"> = {
      errorName: "OwnerNotFoundError",
    };
    return core.addNonEnumerableProperty(valueWithoutVisit, "_visit", function <
      _Result
    >(this: FernNurseryApi.token.getTokensForOwner.Error.OwnerNotFoundError, visitor: FernNurseryApi.token.getTokensForOwner.Error._Visitor<_Result>) {
      return FernNurseryApi.token.getTokensForOwner.Error._visit(this, visitor);
    });
  },

  _visit: <_Result>(
    value: FernNurseryApi.token.getTokensForOwner.Error,
    visitor: FernNurseryApi.token.getTokensForOwner.Error._Visitor<_Result>
  ): _Result => {
    switch (value.errorName) {
      case "OwnerNotFoundError":
        return visitor.ownerNotFoundError();
      default:
        return visitor._other(visitor as any);
    }
  },
} as const;
