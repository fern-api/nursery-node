/**
 * This file was auto-generated by Fern from our API Definition.
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
    const _response = await core.fetcher({
      url: urlJoin(this.options.environment, "/tokens/create"),
      method: "POST",
      body: await serializers.token.create.Request.json({
        ownerId: request.ownerId,
        prefix: request.prefix,
        description: request.description,
      }),
    });
    if (_response.ok) {
      return {
        ok: true,
        body: await serializers.token.create.Response.parse(_response.body as serializers.token.create.Response.Raw),
      };
    }

    if (_response.error.reason === "status-code") {
      switch ((_response.error.body as serializers.token.create.Error.Raw)?.errorName) {
        case "OwnerNotFoundError":
          return {
            ok: false,
            error: await serializers.token.create.Error.parse(
              _response.error.body as serializers.token.create.Error.Raw
            ),
          };
      }
    }

    return {
      ok: false,
      error: FernNursery.token.create.Error._unknown(_response.error),
    };
  }

  public async getTokenMetadata(
    request: FernNursery.GetTokenMetadataRequest
  ): Promise<FernNursery.token.getTokenMetadata.Response> {
    const _response = await core.fetcher({
      url: urlJoin(this.options.environment, "/tokens/metadata"),
      method: "POST",
      body: await serializers.token.getTokenMetadata.Request.json({
        token: request.token,
      }),
    });
    if (_response.ok) {
      return {
        ok: true,
        body: await serializers.token.getTokenMetadata.Response.parse(
          _response.body as serializers.token.getTokenMetadata.Response.Raw
        ),
      };
    }

    if (_response.error.reason === "status-code") {
      switch ((_response.error.body as serializers.token.getTokenMetadata.Error.Raw)?.errorName) {
        case "TokenNotFoundError":
          return {
            ok: false,
            error: await serializers.token.getTokenMetadata.Error.parse(
              _response.error.body as serializers.token.getTokenMetadata.Error.Raw
            ),
          };
      }
    }

    return {
      ok: false,
      error: FernNursery.token.getTokenMetadata.Error._unknown(_response.error),
    };
  }

  public async getTokensForOwner(ownerId: FernNursery.OwnerId): Promise<FernNursery.token.getTokensForOwner.Response> {
    const _response = await core.fetcher({
      url: urlJoin(this.options.environment, `/tokens/owner/${ownerId}`),
      method: "GET",
    });
    if (_response.ok) {
      return {
        ok: true,
        body: await serializers.token.getTokensForOwner.Response.parse(
          _response.body as serializers.token.getTokensForOwner.Response.Raw
        ),
      };
    }

    if (_response.error.reason === "status-code") {
      switch ((_response.error.body as serializers.token.getTokensForOwner.Error.Raw)?.errorName) {
        case "OwnerNotFoundError":
          return {
            ok: false,
            error: await serializers.token.getTokensForOwner.Error.parse(
              _response.error.body as serializers.token.getTokensForOwner.Error.Raw
            ),
          };
      }
    }

    return {
      ok: false,
      error: FernNursery.token.getTokensForOwner.Error._unknown(_response.error),
    };
  }

  public async revokeTokenById(tokenId: FernNursery.TokenId): Promise<FernNursery.token.revokeTokenById.Response> {
    const _response = await core.fetcher({
      url: urlJoin(this.options.environment, `/tokens/revoke/${tokenId}`),
      method: "POST",
    });
    if (_response.ok) {
      return {
        ok: true,
        body: undefined,
      };
    }

    if (_response.error.reason === "status-code") {
      switch ((_response.error.body as serializers.token.revokeTokenById.Error.Raw)?.errorName) {
        case "TokenNotFoundError":
          return {
            ok: false,
            error: await serializers.token.revokeTokenById.Error.parse(
              _response.error.body as serializers.token.revokeTokenById.Error.Raw
            ),
          };
      }
    }

    return {
      ok: false,
      error: FernNursery.token.revokeTokenById.Error._unknown(_response.error),
    };
  }

  public async revokeToken(request: FernNursery.RevokeTokenRequest): Promise<FernNursery.token.revokeToken.Response> {
    const _response = await core.fetcher({
      url: urlJoin(this.options.environment, "/tokens/revoke"),
      method: "POST",
      body: await serializers.token.revokeToken.Request.json({
        token: request.token,
      }),
    });
    if (_response.ok) {
      return {
        ok: true,
        body: undefined,
      };
    }

    if (_response.error.reason === "status-code") {
      switch ((_response.error.body as serializers.token.revokeToken.Error.Raw)?.errorName) {
        case "TokenNotFoundError":
          return {
            ok: false,
            error: await serializers.token.revokeToken.Error.parse(
              _response.error.body as serializers.token.revokeToken.Error.Raw
            ),
          };
      }
    }

    return {
      ok: false,
      error: FernNursery.token.revokeToken.Error._unknown(_response.error),
    };
  }
}
