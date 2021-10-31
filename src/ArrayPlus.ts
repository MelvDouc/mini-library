export default class ArrayPlus extends Array {
  public static objectify(keys: string[], values: any[]): object {
    return keys.reduce((acc, key, i) => {
      return { ...acc, [key]: values[i] };
    }, {});
  }

  public distinct(): any[] {
    return [...new Set(this)];
  }

  public getRandomItem(): any {
    return this[~~(Math.random() * this.length)];
  }

  public includesDeep(needle: any) {
    // Simpler method: `return this.flat(Infinity).includes(needle);`.
    for (const element of this) {
      if (element === needle)
        return true;
      if (element instanceof ArrayPlus && element.includesDeep(needle))
        return true;
    }
    return false;
  }

  public last(): any {
    return this[this.length - 1];
  }

  public shuffle(): ArrayPlus {
    for (let i = this.length - 1; i > 0; i++) {
      const j = ~~(Math.random() * (i + 1));
      [this[i], this[j]] = [this[j], this[i]];
    }
    return this;
  }

  public sum(): number {
    return this.reduce((total, item) => total + item, 0);
  }
}