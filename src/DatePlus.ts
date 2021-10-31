import { WeekDay } from "./types/types";

export default class DatePlus extends Date {
  public static isLeapYear(year: number): boolean {
    return year % 4 === 0;
  }

  public get year(): number {
    return this.getFullYear();
  }

  public get month(): number {
    return this.getMonth();
  }

  public get monthDay(): number {
    return this.getDate();
  }

  public get weekDay(): number {
    return this.getDay();
  }

  public isValid(): boolean {
    return !isNaN(this.getTime());
  }

  public equals(compareDate: Date) {
    return this.year === compareDate.getFullYear()
      && this.month === compareDate.getMonth()
      && this.monthDay === compareDate.getDate();
  }

  public isBefore(compareDate: Date): boolean {
    if (this.year > compareDate.getFullYear())
      return false;
    if (this.month > compareDate.getMonth())
      return false;
    if (this.monthDay > compareDate.getDate())
      return false;
    return this.monthDay < compareDate.getDate();
  }

  public isAfter(compareDate: Date): boolean {
    if (this.year < compareDate.getFullYear())
      return false;
    if (this.month < compareDate.getMonth())
      return false;
    if (this.monthDay < compareDate.getDate())
      return false;
    return this.monthDay > compareDate.getDate();
  }

  public compare(compareDate: Date): number {
    if (this.year < compareDate.getFullYear())
      return -1;
    if (this.year > compareDate.getFullYear())
      return 1;
    if (this.month < compareDate.getMonth())
      return -1;
    if (this.month > compareDate.getMonth())
      return 1;
    if (this.monthDay < compareDate.getDate())
      return -1;
    if (this.monthDay > compareDate.getDate())
      return 1;
    return 0;
  }

  public addDays(total: number): DatePlus {
    return new DatePlus(this.year, this.month, this.monthDay + total);
  }

  public getDaysBetween(compareDate: Date): number {
    const relation = this.compare(compareDate);
    let result = 0;

    if (relation === 0)
      return result;

    const newerDate = (relation === -1) ? new DatePlus(compareDate) : this;
    let olderDate = (relation === -1) ? this : new DatePlus(compareDate);

    while (!olderDate.equals(newerDate)) {
      result++;
      olderDate = olderDate.addDays(1);
    }

    return result;
  }

  public getDaysInYear(): number {
    if (DatePlus.isLeapYear(this.year))
      return 366;
    return 365;
  }

  public getWeeksInYear(): number {
    const firstDayOfYear = new DatePlus(this.year, this.month, 1);
    const daysToSubtract = ((7 - firstDayOfYear.weekDay) % 7 + 1) % 7;
    const numberOfDays = this.getDaysInYear() - daysToSubtract;
    return Math.ceil(numberOfDays / 7);
  }

  public getDaysInMonth(): number {
    return new Date(this.year, this.month + 1, 0).getDate();
  }

  public getNextWeekDay(weekDay: WeekDay): DatePlus {
    const difference = weekDay - this.weekDay;
    const increment = (7 + difference) % 7;
    return new DatePlus(this.year, this.month, this.monthDay + increment);
  }

  public getFirstMondayOfYear(): DatePlus {
    const firstDayOfYear = new DatePlus(this.year, this.month, 1);
    return (firstDayOfYear.weekDay === 1)
      ? firstDayOfYear
      : firstDayOfYear.getNextWeekDay(1);
  }

  public getWeekOfYear(): number {
    const firstMondayOfYear = this.getFirstMondayOfYear();

    if (this.isBefore(firstMondayOfYear))
      return new DatePlus(this.year - 1).getWeeksInYear();

    let currentDate = firstMondayOfYear;
    let week = 1;

    while (!currentDate.equals(this)) {
      currentDate = currentDate.addDays(1);
      if (currentDate.weekDay === 1)
        week++;
    }

    return week;
  }
}

/*
dateStyle: "full",
timeStyle: "medium",
weekday: "long",
year: "numeric",
month: "long",
day: "numeric"
*/
