export function distinct(arr: any[]): any[] {
  return [...new Set(arr)];
}

/*

const teams = ["1", "2", "3", "4", "5", "6"];

function getHalves(teams) {
  const half = Math.ceil(teams.length / 2);
  const firstHalf = teams.slice(0, half);
  const secondHalf = teams.slice(half);

  if (teams.length % 2 === 1)
    secondHalf.push(null);

  return [firstHalf, secondHalf];
}

function rotate(firstHalf, secondHalf) {
  firstHalf.splice(1, 0, secondHalf.shift());
  secondHalf.push(firstHalf.pop());
}

function getPairings(teams) {
  const [firstHalf, secondHalf] = getHalves(teams);
  const pairings = {};
  const { length } = teams;
  const limit = (length % 2 === 0) ? length - 1 : length;

  for (let i = 1; i <= limit; i++) {
    const round = firstHalf.map((contestant, i) => {
      return [contestant, secondHalf[i]];
    });
    pairings[i] = round;
    rotate(firstHalf, secondHalf);
  }

  return pairings;
}

const pairings = getPairings(teams);
console.log(pairings);

*/

function getRandomItem(arr: any[]): any {
  return arr[~~(Math.random() * arr.length)];
}

function includesDeep(needle: any, haystack: any[]): boolean {
  for (const element of haystack) {
    if (element === needle)
      return true;
    if (Array.isArray(element) && includesDeep(needle, element))
      return true;
  }

  return false;
}

function last(arr: any[]): any {
  return arr[arr.length - 1];
}

function objectify(keys: string[], values: any[]): object {
  if (keys.length !== values.length)
    throw new TypeError(`The keys and values arrays must be the same length.`);

  return keys.reduce((acc, key, i) => {
    return { ...acc, [key]: values[i] };
  }, {});
}

function shuffle(arr: any[]): any[] {
  const copy = arr.slice();

  for (let i = copy.length - 1; i > 0; i--) {
    const j = ~~(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function sum(arr: number[]): number {
  return arr.reduce((total, number) => total + number, 0);
}

