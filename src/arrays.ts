export function distinct(arr: any[]): any[] {
  return [...new Set(arr)];
}

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

