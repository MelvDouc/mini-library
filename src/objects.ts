import { GenericObject } from "./types/types.js";

function freezeDeep(object: object) {
  const propNames = Object.getOwnPropertyNames(object) as (keyof object)[];

  for (const propName of propNames) {
    const value = object[propName];
    if (value && typeof value === "object")
      freezeDeep(value);
  }

  return Object.freeze(object);
}

function hasNestedProperty(object: any, property: string): boolean {
  if (!object || typeof object !== "object")
    return false;

  const propNames = Object.getOwnPropertyNames(object) as (keyof object)[];
  for (const propName of propNames)
    if (
      propName === property
      || hasNestedProperty(object[propName], property)
    )
      return true;

  return false;
};

function isObjectLiteral(value: any): boolean {
  return value
    && Object.getPrototypeOf(value) === Object.prototype;
};

function sortByValues(obj: object): object {
  return Object.entries(obj)
    .sort(([, val1], [, val2]) => val2 - val1)
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
}

function copyDeep(object: GenericObject): GenericObject {
  return Object.entries(object).reduce((acc, [key, value]) => {
    if (isObjectLiteral(value))
      value = copyDeep(value);
    return { ...acc, [key]: value };
  }, {});
}