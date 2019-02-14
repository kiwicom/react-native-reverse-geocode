// @flow

'use strict';

const debounce = (fn, time, ...args) => {
  let timeout;

  return () => {
    const functionCall = () => fn.apply(this, args);

    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  };
};

export default debounce;
