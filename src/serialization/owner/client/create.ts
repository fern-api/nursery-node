/**
 * This file auto-generated by Fern from our API Definition.
 */

import { FernNurseryApi } from "@fern-api/nursery";
import * as core from "../../../core";

export const Error: core.schemas.Schema<Error.Raw, FernNurseryApi.owner.create.Error> = core.schemas
  .union("errorName", {
    OwnerAlreadyExistsError: core.schemas.object({}),
  })
  .transform<FernNurseryApi.owner.create.Error>({
    parse: (value) => {
      switch (value.errorName) {
        case "OwnerAlreadyExistsError":
          return FernNurseryApi.owner.create.Error.ownerAlreadyExistsError();
      }
    },
    json: (value) => value as any,
  });

export declare namespace Error {
  type Raw = Error.OwnerAlreadyExistsError;

  interface OwnerAlreadyExistsError {
    errorName: "OwnerAlreadyExistsError";
  }
}
