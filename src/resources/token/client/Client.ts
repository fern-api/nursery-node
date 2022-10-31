/**
 * This file auto-generated by Fern from our API Definition.
 */

import { FernNurseryApi } from "../../..";
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

  public async create(request: FernNurseryApi.token.CreateTokenRequest): Promise<FernNurseryApi.token.create.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options.environment, "/tokens/create"),
      method: "POST",
      body: serializers.token.CreateTokenRequest.json(request),
    });
    if (response.ok) {
      return {
        ok: true,
        body: serializers.token.CreateTokenResponse.parse(response.body as serializers.token.CreateTokenResponse.Raw),
      };
    }

    if (response.error.reason === "status-code") {
      switch ((response.error.body as serializers.token.create.Error.Raw)?.errorName) {
        case "OwnerNotFoundError":
          return {
            ok: false,
            error: serializers.token.create.Error.parse(response.error.body as serializers.token.create.Error.Raw),
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
    request: FernNurseryApi.token.GetTokenMetadataRequest
  ): Promise<FernNurseryApi.token.getTokenMetadata.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options.environment, "/tokens/metadata"),
      method: "POST",
      body: serializers.token.GetTokenMetadataRequest.json(request),
    });
    if (response.ok) {
      return {
        ok: true,
        body: serializers.token.TokenMetadata.parse(response.body as serializers.token.TokenMetadata.Raw),
      };
    }

    if (response.error.reason === "status-code") {
      switch ((response.error.body as serializers.token.getTokenMetadata.Error.Raw)?.errorName) {
        case "TokenNotFoundError":
          return {
            ok: false,
            error: serializers.token.getTokenMetadata.Error.parse(
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
    request: FernNurseryApi.token.getTokensForOwner.Request
  ): Promise<FernNurseryApi.token.getTokensForOwner.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options.environment, `/tokens/owner/${request.ownerId}`),
      method: "GET",
    });
    if (response.ok) {
      return {
        ok: true,
        body: serializers.token.getTokensForOwner.Response.parse(
          response.body as serializers.token.TokenMetadata.Raw[]
        ),
      };
    }

    if (response.error.reason === "status-code") {
      switch ((response.error.body as serializers.token.getTokensForOwner.Error.Raw)?.errorName) {
        case "OwnerNotFoundError":
          return {
            ok: false,
            error: serializers.token.getTokensForOwner.Error.parse(
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
}