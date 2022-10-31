/**
 * This file auto-generated by Fern from our API Definition.
 */

import { FernNurseryApi } from "../../..";
import * as core from "../../../core";

export type Response = core.APIResponse<
  FernNurseryApi.token.TokenMetadata,
  FernNurseryApi.token.getTokenMetadata.Error
>;
export type Error = Error.TokenNotFoundError | Error._Unknown;

export declare namespace Error {
  interface TokenNotFoundError extends _Utils {
    errorName: "TokenNotFoundError";
  }

  interface _Unknown extends _Utils {
    errorName: void;
    content: core.Fetcher.Error;
  }

  interface _Utils {
    _visit: <Result>(visitor: Error._Visitor<Result>) => Result;
  }

  interface _Visitor<Result> {
    tokenNotFoundError: () => Result;
    _other: (value: core.Fetcher.Error) => Result;
  }
}

export const Error = {
  tokenNotFoundError: (): Error.TokenNotFoundError => {
    const valueWithoutVisit: Omit<Error.TokenNotFoundError, "_visit"> = {
      errorName: "TokenNotFoundError",
    };
    Object.defineProperty(valueWithoutVisit, "_visit", {
      enumerable: false,
      writable: true,
    });
    const castedValue = valueWithoutVisit as Error.TokenNotFoundError;
    castedValue._visit = (visitor) => visitor.tokenNotFoundError();
    return castedValue;
  },
} as const;