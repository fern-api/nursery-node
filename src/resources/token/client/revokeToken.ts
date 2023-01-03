/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { FernNursery } from "@fern-api/nursery";
import * as core from "../../../core";

export type Response = core.APIResponse<void, FernNursery.token.revokeToken.Error>;
export type Error =
  | FernNursery.token.revokeToken.Error.TokenNotFoundError
  | FernNursery.token.revokeToken.Error._Unknown;

export declare namespace Error {
  interface TokenNotFoundError extends _Utils {
    errorName: "TokenNotFoundError";
  }

  interface _Unknown extends _Utils {
    errorName: void;
    content: core.Fetcher.Error;
  }

  interface _Utils {
    _visit: <_Result>(visitor: FernNursery.token.revokeToken.Error._Visitor<_Result>) => _Result;
  }

  interface _Visitor<_Result> {
    tokenNotFoundError: () => _Result;
    _other: (value: core.Fetcher.Error) => _Result;
  }
}

export const Error = {
  tokenNotFoundError: (): FernNursery.token.revokeToken.Error.TokenNotFoundError => {
    const valueWithoutVisit: Omit<FernNursery.token.revokeToken.Error.TokenNotFoundError, "_visit"> = {
      errorName: "TokenNotFoundError",
    };
    return core.addNonEnumerableProperty(valueWithoutVisit, "_visit", function <
      _Result
    >(this: FernNursery.token.revokeToken.Error.TokenNotFoundError, visitor: FernNursery.token.revokeToken.Error._Visitor<_Result>) {
      return FernNursery.token.revokeToken.Error._visit(this, visitor);
    });
  },

  _unknown: (fetcherError: core.Fetcher.Error): FernNursery.token.revokeToken.Error._Unknown => {
    const valueWithoutVisit = fetcherError as unknown as Omit<FernNursery.token.revokeToken.Error._Unknown, "_visit">;
    return core.addNonEnumerableProperty(valueWithoutVisit, "_visit", function <
      _Result
    >(this: FernNursery.token.revokeToken.Error._Unknown, visitor: FernNursery.token.revokeToken.Error._Visitor<_Result>) {
      return FernNursery.token.revokeToken.Error._visit(this, visitor);
    });
  },

  _visit: <_Result>(
    value: FernNursery.token.revokeToken.Error,
    visitor: FernNursery.token.revokeToken.Error._Visitor<_Result>
  ): _Result => {
    switch (value.errorName) {
      case "TokenNotFoundError":
        return visitor.tokenNotFoundError();
      default:
        return visitor._other(value as any);
    }
  },
} as const;