/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { FernNursery } from "@fern-api/nursery";
import * as core from "../../../core";

export const Request: core.schemas.Schema<serializers.token.revokeToken.Request.Raw, FernNursery.RevokeTokenRequest> =
  core.schemas.object({
    token: core.schemas.string(),
  });

export declare namespace Request {
  interface Raw {
    token: string;
  }
}

export const Error: core.schemas.Schema<serializers.token.revokeToken.Error.Raw, FernNursery.token.revokeToken.Error> =
  core.schemas
    .union("errorName", {
      TokenNotFoundError: core.schemas.object({}),
    })
    .transform<FernNursery.token.revokeToken.Error>({
      parse: (value) => {
        switch (value.errorName) {
          case "TokenNotFoundError":
            return FernNursery.token.revokeToken.Error.tokenNotFoundError();
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
