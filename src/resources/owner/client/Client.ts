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

  public async create(request: FernNursery.CreateOwnerRequest): Promise<FernNursery.owner.create.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options.environment, "/owner"),
      method: "POST",
      body: await serializers.CreateOwnerRequest.json(request),
    });
    if (response.ok) {
      return {
        ok: true,
        body: undefined,
      };
    }

    if (response.error.reason === "status-code") {
      switch ((response.error.body as serializers.owner.create.Error.Raw)?.errorName) {
        case "OwnerAlreadyExistsError":
          return {
            ok: false,
            error: await serializers.owner.create.Error.parse(
              response.error.body as serializers.owner.create.Error.Raw
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

  public async get(request: FernNursery.owner.get.Request): Promise<FernNursery.owner.get.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options.environment, `/owner/${request.ownerId}`),
      method: "GET",
    });
    if (response.ok) {
      return {
        ok: true,
        body: await serializers.Owner.parse(response.body as serializers.Owner.Raw),
      };
    }

    if (response.error.reason === "status-code") {
      switch ((response.error.body as serializers.owner.get.Error.Raw)?.errorName) {
        case "OwnerNotFoundError":
          return {
            ok: false,
            error: await serializers.owner.get.Error.parse(response.error.body as serializers.owner.get.Error.Raw),
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

  public async update(request: FernNursery.owner.update.Request): Promise<FernNursery.owner.update.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options.environment, `/owner/${request.ownerId}`),
      method: "PUT",
      body: await serializers.UpdateOwnerRequest.json(request._body),
    });
    if (response.ok) {
      return {
        ok: true,
        body: await serializers.Owner.parse(response.body as serializers.Owner.Raw),
      };
    }

    if (response.error.reason === "status-code") {
      switch ((response.error.body as serializers.owner.update.Error.Raw)?.errorName) {
        case "OwnerNotFoundError":
          return {
            ok: false,
            error: await serializers.owner.update.Error.parse(
              response.error.body as serializers.owner.update.Error.Raw
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
