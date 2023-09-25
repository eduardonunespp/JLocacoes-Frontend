import { DateTime, Interval, Duration, Info } from "luxon";

import { HumanizeDateTime } from "../../domain-types";

export const humanize: HumanizeDateTime = (date) => {
  return DateTime.fromISO(date).toRelative() ?? undefined;
};

export const formatDate = (value: string | Date, format: string): string => {
  return DateTime.fromJSDate(new Date(value)).toFormat(format).toString();
};

export const formatTime = (value: string, format: string): string => {
  return DateTime.fromISO(value).setLocale("pt-BR").toFormat(format);
};

export const getDay = () => {
  return DateTime.now().setLocale("pt-BR").toFormat("yyyy-MM-dd");
};

export const getTime = () => {
  return DateTime.now().setLocale("pt-BR").toFormat("HH:mm");
};

export const toDate = (value: string): Date => {
  return DateTime.fromISO(value).toJSDate();
};

export const getFirstDayOfCurrentMonth = (value: Date): string => {
  return DateTime.fromJSDate(value).startOf("month").toFormat("yyyy-MM-dd");
};

export const getLastDayOfCurrentMonth = (value: Date): string => {
  return DateTime.fromJSDate(value).endOf("month").toFormat("yyyy-MM-dd");
};

export const dayWeek = (value: string): number => {
  return DateTime.fromISO(value).setLocale("pt-BR").weekday;
};

export const getDayName = (value: number): string => {
  return Info.weekdays()[value - 1];
};

export const subtractTime = (
  timeValue: string,
  subtractTimeInput: string,
  format: string
) => {
  const subtractTime = subtractTimeInput ? subtractTimeInput : "00:00:00";

  return Duration.fromISOTime(timeValue)
    .minus({
      hours: Duration.fromISOTime(subtractTime).hours,
      minutes: Duration.fromISOTime(subtractTime).minutes,
      seconds: Duration.fromISOTime(subtractTime).seconds,
    })
    .toFormat(format)
    .toString();
};

export const someDayDateTime = (timeValue: string, days: number) => {
  return DateTime.fromISO(timeValue)
    .plus({
      day: days,
    })
    .toFormat("yyyy-MM-dd")
    .toString();
};

export const isDateTimeGreaterThan = (
  date: string,
  dateToCompare: string
): boolean => {
  const dateTime = DateTime.fromJSDate(new Date(date));
  const dateTimeToCompare = DateTime.fromJSDate(new Date(dateToCompare));

  return Interval.after(dateTime, 0).isAfter(dateTimeToCompare);
};

export const isDateTimeLowerThan = (
  date: string,
  dateToCompare: string
): boolean => {
  const dateTime = DateTime.fromJSDate(new Date(date));
  const dateTimeToCompare = DateTime.fromJSDate(new Date(dateToCompare));

  return Interval.before(dateTime, 0).isBefore(dateTimeToCompare);
};
