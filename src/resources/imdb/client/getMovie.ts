/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { AcmeGizmoApi } from "@cognodyne/nursery";
import * as core from "../../../core";

export type Response = core.APIResponse<AcmeGizmoApi.Movie, AcmeGizmoApi.imdb.getMovie.Error>;
export type Error = AcmeGizmoApi.imdb.getMovie.Error.MovieDoesNotExistError | AcmeGizmoApi.imdb.getMovie.Error._Unknown;

export declare namespace Error {
  interface MovieDoesNotExistError extends _Utils {
    statusCode: 404;
    content: AcmeGizmoApi.MovieDoesNotExistError;
  }

  interface _Unknown extends _Utils {
    statusCode: void;
    content: core.Fetcher.Error;
  }

  interface _Utils {
    _visit: <_Result>(visitor: AcmeGizmoApi.imdb.getMovie.Error._Visitor<_Result>) => _Result;
  }

  interface _Visitor<_Result> {
    movieDoesNotExistError: (value: AcmeGizmoApi.MovieDoesNotExistError) => _Result;
    _other: (value: core.Fetcher.Error) => _Result;
  }
}

export const Error = {
  movieDoesNotExistError: (
    value: AcmeGizmoApi.MovieDoesNotExistError
  ): AcmeGizmoApi.imdb.getMovie.Error.MovieDoesNotExistError => {
    const valueWithoutVisit: Omit<AcmeGizmoApi.imdb.getMovie.Error.MovieDoesNotExistError, "_visit"> = {
      content: value,
      statusCode: 404,
    };
    return core.addNonEnumerableProperty(valueWithoutVisit, "_visit", function <
      _Result
    >(this: AcmeGizmoApi.imdb.getMovie.Error.MovieDoesNotExistError, visitor: AcmeGizmoApi.imdb.getMovie.Error._Visitor<_Result>) {
      return AcmeGizmoApi.imdb.getMovie.Error._visit(this, visitor);
    });
  },

  _unknown: (fetcherError: core.Fetcher.Error): AcmeGizmoApi.imdb.getMovie.Error._Unknown => {
    const valueWithoutVisit = fetcherError as unknown as Omit<AcmeGizmoApi.imdb.getMovie.Error._Unknown, "_visit">;
    return core.addNonEnumerableProperty(valueWithoutVisit, "_visit", function <
      _Result
    >(this: AcmeGizmoApi.imdb.getMovie.Error._Unknown, visitor: AcmeGizmoApi.imdb.getMovie.Error._Visitor<_Result>) {
      return AcmeGizmoApi.imdb.getMovie.Error._visit(this, visitor);
    });
  },

  _visit: <_Result>(
    value: AcmeGizmoApi.imdb.getMovie.Error,
    visitor: AcmeGizmoApi.imdb.getMovie.Error._Visitor<_Result>
  ): _Result => {
    switch (value.statusCode) {
      case 404:
        return visitor.movieDoesNotExistError(value.content);
      default:
        return visitor._other(value as any);
    }
  },
} as const;
