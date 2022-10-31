/**
 * This file auto-generated by Fern from our API Definition.
 */

import { FernNurseryApi } from "../../..";
import * as core from "../../../core";

export type Response = core.APIResponse<void, FernNurseryApi.owner.create.Error>;
export type Error = Error.OwnerAlreadyExistsError | Error._Unknown;

export declare namespace Error {
  interface OwnerAlreadyExistsError extends _Utils {
    errorName: "OwnerAlreadyExistsError";
  }

  interface _Unknown extends _Utils {
    errorName: void;
    content: core.Fetcher.Error;
  }

  interface _Utils {
    _visit: <Result>(visitor: Error._Visitor<Result>) => Result;
  }

  interface _Visitor<Result> {
    ownerAlreadyExistsError: () => Result;
    _other: (value: core.Fetcher.Error) => Result;
  }
}

export const Error = {
  ownerAlreadyExistsError: (): Error.OwnerAlreadyExistsError => {
    const valueWithoutVisit: Omit<Error.OwnerAlreadyExistsError, "_visit"> = {
      errorName: "OwnerAlreadyExistsError",
    };
    Object.defineProperty(valueWithoutVisit, "_visit", {
      enumerable: false,
      writable: true,
    });
    const castedValue = valueWithoutVisit as Error.OwnerAlreadyExistsError;
    castedValue._visit = (visitor) => visitor.ownerAlreadyExistsError();
    return castedValue;
  },
} as const;