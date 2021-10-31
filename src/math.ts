export function factorial(n: number): number {
  if (n <= 1)
    return 1;
  return n * factorial(n - 1);
}

function getPrimeFactors(n: number): number[] {
  const primeFactors: number[] = [];

  for (let count = 2; n > 1; count++)
    while (n % count === 0) {
      primeFactors.push(count);
      n /= count;
    }

  return primeFactors;
}

function isEven(n: number): boolean {
  return !Boolean(n & 1);
}

function isPrime(n: number): boolean {
  for (let i = 2; i < Math.sqrt(n); i++)
    if (n % i === 0)
      return false;
  return n > 1;
}

/* Recursive:
function isPrime(n, i = 2) {
  if (n <= 2) return n === 2;
  if (n % i === 0) return false;
  if (i * i > n) return true;
  return isPrime(n, i + 1);
}
*/

function randomChance(numerator: number, denominator: number): boolean {
  const randomNumber = randomInt(1, denominator);
  return randomNumber <= numerator;
}

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomNumbers(total: number, min: number, max: number): number[] {
  if (max - min < total)
    throw new TypeError(`The difference between max and min must be >= the total.`);

  const numbers = new Set<number>();

  while (numbers.size < total)
    numbers.add(randomInt(min, max));

  return [...numbers];
}

function reduceFraction(numerator: number, denominator: number): [number, number] {
  let i = 2;

  while (i <= Math.min(numerator, denominator)) {
    if (numerator % i === 0 && denominator % i === 0) {
      numerator /= i;
      denominator /= i;
      continue;
    }
    i++;
  }

  return [numerator, denominator];
}