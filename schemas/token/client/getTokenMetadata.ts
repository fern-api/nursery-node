/**
 * This file auto-generated by Fern from our API Definition.
 */

import { NurseryApi } from "../../..";
import * as core from "../../../core";

export const Error: core.schemas.Schema<
  Error.Raw,
  NurseryApi.token.getTokenMetadata.Error
> = core.schemas
  .union("errorName", {
    TokenNotFoundError: core.schemas.object({}),
  })
  .transform<NurseryApi.token.getTokenMetadata.Error>({
    parse: (value) => {
      switch (value.errorName) {
        case "TokenNotFoundError": {
          return {
            ...value,
            _visit: (visitor) => visitor.tokenNotFoundError(),
          };
        }
      }
    },
    json: (value) => value as any,
  });

export declare namespace Error {
  type Raw = Error.TokenNotFoundError;

  interface TokenNotFoundError {
    errorName: "TokenNotFoundError";
  }
}
