export default class MathPlus {
  public static factorial(n: number): number {
    for (let i = n - 1; i > 0; i--)
      n *= i;
    return n;
  }

  public static getPrimeFactors(n: number): number[] {
    const primeFactors: number[] = [];

    for (let count = 2; n > 1; count++)
      while (n % count === 0) {
        primeFactors.push(count);
        n /= count;
      }

    return primeFactors;
  }

  public static isEven(n: number): boolean {
    return !Boolean(n & 1);
  }

  public static isPrime(n: number): boolean {
    for (let i = 2; i < Math.sqrt(n); i++)
      if (n % i === 0)
        return false;
    return n > 1;

    /* Recursive:
      function isPrime(n, i = 2) {
        if (n <= 2) return n === 2;
        if (n % i === 0) return false;
        if (i * i > n) return true;
        return isPrime(n, i + 1);
      }
    */
  }

  public static randomChance(numerator: number, denominator: number): boolean {
    const randomNumber = this.randomInt(1, denominator);
    return randomNumber <= numerator;
  }

  public static randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public static randomNumbers(total: number, min: number, max: number): number[] {
    if (max - min < total)
      throw new TypeError(
        `The difference between max and min must be equal to or greater than the total.`
      );

    const numbers = new Set<number>();

    while (numbers.size < total)
      numbers.add(this.randomInt(min, max));

    return [...numbers];
  }

  public static reduceFraction(numerator: number, denominator: number): [number, number] {
    for (let i = 2; i <= Math.min(numerator, denominator);) {
      if (numerator % i !== 0 || denominator % i !== 0) {
        i++;
        continue;
      }
      numerator /= i;
      denominator /= i;
    }

    return [numerator, denominator];
  }
}