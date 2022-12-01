/**
 * This file auto-generated by Fern from our API Definition.
 */

import { FernNursery } from "@fern-api/nursery";
import urlJoin from "url-join";
import * as serializers from "../../../serialization";
import * as core from "../../../core";

export declare namespace Client {
  interface Options {
    environment: string;
  }
}

export class Client {
  constructor(private readonly options: Client.Options) {}

  public async create(request: FernNursery.CreateTokenRequest): Promise<FernNursery.token.create.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options.environment, "/tokens/create"),
      method: "POST",
      body: await serializers.CreateTokenRequest.json(request),
    });
    if (response.ok) {
      return {
        ok: true,
        body: await serializers.CreateTokenResponse.parse(response.body as serializers.CreateTokenResponse.Raw),
      };
    }

    if (response.error.reason === "status-code") {
      switch ((response.error.body as serializers.token.create.Error.Raw)?.errorName) {
        case "OwnerNotFoundError":
          return {
            ok: false,
            error: await serializers.token.create.Error.parse(
              response.error.body as serializers.token.create.Error.Raw
            ),
          };
      }
    }

    return {
      ok: false,
      error: {
        errorName: undefined,
        content: response.error,
        _visit: (visitor) => visitor._other(response.error),
      },
    };
  }

  public async getTokenMetadata(
    request: FernNursery.GetTokenMetadataRequest
  ): Promise<FernNursery.token.getTokenMetadata.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options.environment, "/tokens/metadata"),
      method: "POST",
      body: await serializers.GetTokenMetadataRequest.json(request),
    });
    if (response.ok) {
      return {
        ok: true,
        body: await serializers.TokenMetadata.parse(response.body as serializers.TokenMetadata.Raw),
      };
    }

    if (response.error.reason === "status-code") {
      switch ((response.error.body as serializers.token.getTokenMetadata.Error.Raw)?.errorName) {
        case "TokenNotFoundError":
          return {
            ok: false,
            error: await serializers.token.getTokenMetadata.Error.parse(
              response.error.body as serializers.token.getTokenMetadata.Error.Raw
            ),
          };
      }
    }

    return {
      ok: false,
      error: {
        errorName: undefined,
        content: response.error,
        _visit: (visitor) => visitor._other(response.error),
      },
    };
  }

  public async getTokensForOwner(
    request: FernNursery.token.getTokensForOwner.Request
  ): Promise<FernNursery.token.getTokensForOwner.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options.environment, `/tokens/owner/${request.ownerId}`),
      method: "GET",
    });
    if (response.ok) {
      return {
        ok: true,
        body: await serializers.token.getTokensForOwner.Response.parse(
          response.body as serializers.TokenMetadata.Raw[]
        ),
      };
    }

    if (response.error.reason === "status-code") {
      switch ((response.error.body as serializers.token.getTokensForOwner.Error.Raw)?.errorName) {
        case "OwnerNotFoundError":
          return {
            ok: false,
            error: await serializers.token.getTokensForOwner.Error.parse(
              response.error.body as serializers.token.getTokensForOwner.Error.Raw
            ),
          };
      }
    }

    return {
      ok: false,
      error: {
        errorName: undefined,
        content: response.error,
        _visit: (visitor) => visitor._other(response.error),
      },
    };
  }

  public async revokeTokenById(
    request: FernNursery.token.revokeTokenById.Request
  ): Promise<FernNursery.token.revokeTokenById.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options.environment, `/tokens/revoke/${request.tokenId}`),
      method: "POST",
    });
    if (response.ok) {
      return {
        ok: true,
        body: undefined,
      };
    }

    if (response.error.reason === "status-code") {
      switch ((response.error.body as serializers.token.revokeTokenById.Error.Raw)?.errorName) {
        case "TokenNotFoundError":
          return {
            ok: false,
            error: await serializers.token.revokeTokenById.Error.parse(
              response.error.body as serializers.token.revokeTokenById.Error.Raw
            ),
          };
      }
    }

    return {
      ok: false,
      error: {
        errorName: undefined,
        content: response.error,
        _visit: (visitor) => visitor._other(response.error),
      },
    };
  }

  public async revokeToken(request: FernNursery.RevokeTokenRequest): Promise<FernNursery.token.revokeToken.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options.environment, "/tokens/revoke"),
      method: "POST",
      body: await serializers.RevokeTokenRequest.json(request),
    });
    if (response.ok) {
      return {
        ok: true,
        body: undefined,
      };
    }

    if (response.error.reason === "status-code") {
      switch ((response.error.body as serializers.token.revokeToken.Error.Raw)?.errorName) {
        case "TokenNotFoundError":
          return {
            ok: false,
            error: await serializers.token.revokeToken.Error.parse(
              response.error.body as serializers.token.revokeToken.Error.Raw
            ),
          };
      }
    }

    return {
      ok: false,
      error: {
        errorName: undefined,
        content: response.error,
        _visit: (visitor) => visitor._other(response.error),
      },
    };
  }
}
