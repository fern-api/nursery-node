/**
 * This file auto-generated by Fern from our API Definition.
 */

import { NurseryApi } from "../../..";
import * as core from "../../../core";

export const Error: core.schemas.Schema<
  Error.Raw,
  NurseryApi.token.create.Error
> = core.schemas
  .union("errorName", {
    OwnerNotFoundError: core.schemas.object({}),
  })
  .transform<NurseryApi.token.create.Error>({
    parse: (value) => {
      switch (value.errorName) {
        case "OwnerNotFoundError": {
          return {
            ...value,
            _visit: (visitor) => visitor.ownerNotFoundError(),
          };
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
