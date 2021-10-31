export type WeekDay = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface DateObject {
  year: number;
  month: number;
  monthDay: number;
}

export type GenericObject = {
  [key: string | number]: any;
};