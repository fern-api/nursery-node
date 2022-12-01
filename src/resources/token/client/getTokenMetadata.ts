/**
 * This file auto-generated by Fern from our API Definition.
 */

import { FernNurseryApi } from "@fern-api/nursery";
import * as core from "../../../core";

export type Response = core.APIResponse<FernNurseryApi.TokenMetadata, FernNurseryApi.token.getTokenMetadata.Error>;
export type Error =
  | FernNurseryApi.token.getTokenMetadata.Error.TokenNotFoundError
  | FernNurseryApi.token.getTokenMetadata.Error._Unknown;

export declare namespace Error {
  interface TokenNotFoundError extends _Utils {
    errorName: "TokenNotFoundError";
  }

  interface _Unknown extends _Utils {
    errorName: void;
    content: core.Fetcher.Error;
  }

  interface _Utils {
    _visit: <_Result>(visitor: FernNurseryApi.token.getTokenMetadata.Error._Visitor<_Result>) => _Result;
  }

  interface _Visitor<_Result> {
    tokenNotFoundError: () => _Result;
    _other: (value: core.Fetcher.Error) => _Result;
  }
}

export const Error = {
  tokenNotFoundError: (): FernNurseryApi.token.getTokenMetadata.Error.TokenNotFoundError => {
    const valueWithoutVisit: Omit<FernNurseryApi.token.getTokenMetadata.Error.TokenNotFoundError, "_visit"> = {
      errorName: "TokenNotFoundError",
    };
    return core.addNonEnumerableProperty(valueWithoutVisit, "_visit", function <
      _Result
    >(this: FernNurseryApi.token.getTokenMetadata.Error.TokenNotFoundError, visitor: FernNurseryApi.token.getTokenMetadata.Error._Visitor<_Result>) {
      return FernNurseryApi.token.getTokenMetadata.Error._visit(this, visitor);
    });
  },

  _visit: <_Result>(
    value: FernNurseryApi.token.getTokenMetadata.Error,
    visitor: FernNurseryApi.token.getTokenMetadata.Error._Visitor<_Result>
  ): _Result => {
    switch (value.errorName) {
      case "TokenNotFoundError":
        return visitor.tokenNotFoundError();
      default:
        return visitor._other(visitor as any);
    }
  },
} as const;
