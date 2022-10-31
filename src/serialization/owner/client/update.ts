/**
 * This file auto-generated by Fern from our API Definition.
 */

import { FernNurseryApi } from "../../..";
import * as core from "../../../core";

export const Error: core.schemas.Schema<Error.Raw, FernNurseryApi.owner.update.Error> = core.schemas
  .union("errorName", {
    OwnerNotFoundError: core.schemas.object({}),
  })
  .transform<FernNurseryApi.owner.update.Error>({
    parse: (value) => {
      switch (value.errorName) {
        case "OwnerNotFoundError": {
          return FernNurseryApi.owner.update.Error.ownerNotFoundError();
        }
      }
    },
    json: (value) => value as any,
  });

export declare namespace Error {
  type Raw = Error.OwnerNotFoundError;

  interface OwnerNotFoundError {
    errorName: "OwnerNotFoundError";
  }
}