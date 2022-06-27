/**
 * Even Fibonacci numbers
 *
 * https://projecteuler.net/problem=2
 *
 * Each new term in the Fibonacci sequence is generated by adding the previous two terms.
 * By starting with 1 and 2, the first 10 terms will be:
 *
 * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 *
 * By considering the terms in the Fibonacci sequence whose values do not exceed four million,
 * find the sum of the even-valued terms.
 */

import logger from './logger.js';

function problem0002(_top) {
  let i = 0;
  let last1 = 1;
  let last2 = 0;
  let evenSum = 0;

  let fibo = 0;
  do {
    fibo = last2 + last1;

    logger.info(`Fibonacci (${i}) = ${fibo}`);

    if (fibo % 2 === 0) {
      evenSum += fibo;
    }

    // next keys:
    last2 = last1;
    last1 = fibo;
    i += 1;
  } while (fibo < _top);

  logger.info(`RESULT = ${evenSum}`);
  return evenSum;
}

export default problem0002;
export { problem0002 };
