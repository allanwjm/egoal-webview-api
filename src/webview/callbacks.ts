const cache: {[uuid: string]: Function} = {};

export function pushResolve(uuid: string, resolve: Function) {
  cache[uuid] = resolve;
}

export function simpleCallback<T>(uuid: string, result: T) {
  const resolve = cache[uuid];
  if (resolve) {
    resolve(result);
    delete cache[uuid];
  }
}
