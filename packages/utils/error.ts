import { isString } from "lodash-es";

class SgUIError extends Error {
  constructor(msg: string) {
    super(msg);
    this.name = "SgUIError";
  }
}
function createSgUIError(scope: string, msg: string) {
  return new SgUIError(`[${scope}]:${msg}`);
}

export function throwError(scope: string, msg: string) {
  throw createSgUIError(scope, msg);
}

export function debugWarn(error: Error): void;
export function debugWarn(scope: string, msg: string): void;
export function debugWarn(scope: string | Error, msg?: string) {
  if (process.env.NODE_ENV !== "production") {
    const err = isString(scope) ? createSgUIError(scope, msg!) : scope;
    console.warn(err);
  }
}
