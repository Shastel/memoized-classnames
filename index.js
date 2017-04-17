import cx from 'classnames';

function defaultMemoize(fn) {
  let cache = {};
  function memoized(...args) {
      const hash = JSON.stringify(args);

      if (cache[hash]) {
        return cache[hash];
      }

      cache[hash] = fn(...args);
      return cache[hash];
  }

  memoized.cache = {};
  memoized.dropCache = function() {
    cache = {};
    memoized.cache = {};
  }

  return memoized;
}

export default function classNamesCreator(memoize = defaultMemoize) {
    return memoize(cx);
}
