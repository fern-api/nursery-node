/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { FernNursery } from "@fern-api/nursery";
import * as core from "../../../core";

export type Response = core.APIResponse<FernNursery.Owner, FernNursery.owner.get.Error>;
export type Error = FernNursery.owner.get.Error.OwnerNotFoundError | FernNursery.owner.get.Error._Unknown;

export declare namespace Error {
  interface OwnerNotFoundError extends _Utils {
    errorName: "OwnerNotFoundError";
  }

  interface _Unknown extends _Utils {
    errorName: void;
    content: core.Fetcher.Error;
  }

  interface _Utils {
    _visit: <_Result>(visitor: FernNursery.owner.get.Error._Visitor<_Result>) => _Result;
  }

  interface _Visitor<_Result> {
    ownerNotFoundError: () => _Result;
    _other: (value: core.Fetcher.Error) => _Result;
  }
}

export const Error = {
  ownerNotFoundError: (): FernNursery.owner.get.Error.OwnerNotFoundError => {
    const valueWithoutVisit: Omit<FernNursery.owner.get.Error.OwnerNotFoundError, "_visit"> = {
      errorName: "OwnerNotFoundError",
    };
    return core.addNonEnumerableProperty(valueWithoutVisit, "_visit", function <
      _Result
    >(this: FernNursery.owner.get.Error.OwnerNotFoundError, visitor: FernNursery.owner.get.Error._Visitor<_Result>) {
      return FernNursery.owner.get.Error._visit(this, visitor);
    });
  },

  _unknown: (fetcherError: core.Fetcher.Error): FernNursery.owner.get.Error._Unknown => {
    const valueWithoutVisit = fetcherError as unknown as Omit<FernNursery.owner.get.Error._Unknown, "_visit">;
    return core.addNonEnumerableProperty(valueWithoutVisit, "_visit", function <
      _Result
    >(this: FernNursery.owner.get.Error._Unknown, visitor: FernNursery.owner.get.Error._Visitor<_Result>) {
      return FernNursery.owner.get.Error._visit(this, visitor);
    });
  },

  _visit: <_Result>(
    value: FernNursery.owner.get.Error,
    visitor: FernNursery.owner.get.Error._Visitor<_Result>
  ): _Result => {
    switch (value.errorName) {
      case "OwnerNotFoundError":
        return visitor.ownerNotFoundError();
      default:
        return visitor._other(value as any);
    }
  },
} as const;
