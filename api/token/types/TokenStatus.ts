/**
 * This file auto-generated by Fern from our API Definition.
 */

export type TokenStatus = TokenStatus.Active | TokenStatus.Expired | TokenStatus.Revoked | TokenStatus._Unknown;

export declare namespace TokenStatus {
  interface Active extends _Utils {
    type: "active";
  }

  interface Expired extends _Utils {
    type: "expired";
  }

  interface Revoked extends _Utils {
    type: "revoked";
  }

  interface _Unknown extends _Utils {
    type: void;
  }

  interface _Utils {
    _visit: <Result>(visitor: TokenStatus._Visitor<Result>) => Result;
  }

  interface _Visitor<Result> {
    active: () => Result;
    expired: () => Result;
    revoked: () => Result;
    _other: (value: { type: string }) => Result;
  }
}

export const TokenStatus = {
  active: (): TokenStatus.Active => {
    const valueWithoutVisit: Omit<TokenStatus.Active, "_visit"> = {
      type: "active",
    };
    Object.defineProperty(valueWithoutVisit, "_visit", {
      enumerable: false,
      writable: true,
    });
    const castedValue = valueWithoutVisit as TokenStatus.Active;
    castedValue._visit = (visitor) => visitor.active();
    return castedValue;
  },

  expired: (): TokenStatus.Expired => {
    const valueWithoutVisit: Omit<TokenStatus.Expired, "_visit"> = {
      type: "expired",
    };
    Object.defineProperty(valueWithoutVisit, "_visit", {
      enumerable: false,
      writable: true,
    });
    const castedValue = valueWithoutVisit as TokenStatus.Expired;
    castedValue._visit = (visitor) => visitor.expired();
    return castedValue;
  },

  revoked: (): TokenStatus.Revoked => {
    const valueWithoutVisit: Omit<TokenStatus.Revoked, "_visit"> = {
      type: "revoked",
    };
    Object.defineProperty(valueWithoutVisit, "_visit", {
      enumerable: false,
      writable: true,
    });
    const castedValue = valueWithoutVisit as TokenStatus.Revoked;
    castedValue._visit = (visitor) => visitor.revoked();
    return castedValue;
  },
} as const;
