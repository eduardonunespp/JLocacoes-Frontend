import { DateTime } from "../shared/core/adapters";

export const getDatesInRange = (startDate: string, endDate?: string) => {
  const toStartDate = DateTime.toDate(startDate);
  const toEndStart = DateTime.toDate(endDate as string);

  let dates: Array<Date> = [];

  if (startDate && endDate) {
    while (toStartDate < toEndStart) {
      dates = [...dates, new Date(toStartDate)];
      toStartDate.setDate(toStartDate.getDate() + 1);
    }

    dates = [...dates, toEndStart];

    return dates.map((date) => DateTime.formatDate(date, "yyyy-MM-dd"));
  }

  dates = [...dates, new Date(toStartDate)];
  return dates.map((date) => DateTime.formatDate(date, "yyyy-MM-dd"));
};

export const getWeekOfMonth = (date: Date) => {
  const adjustedDate = date.getDate();
  const prefixes = ["0", "1", "2", "3", "4", "5"];
  const weekNumber = parseInt(prefixes[0 | (adjustedDate / 7)]) + 1;
  return weekNumber;
};

// dd/mm/yyyy -> date
export const brFormatToDate = (date: string) => {
  const splited = date.split("-");
  return new Date(`${splited[2]}-${splited[1]}-${splited[0]}T00:00:00`);
};

// '2023-01-29' ->
export const toBrFormat = (date: string): string => {
  const data = new Date(date);
  const splited = date.split("-");
  return `${splited[2]}/${splited[1]}/${splited[0]}`;
};

export const getLastDayOfMonth = (lastDate: Date): Date => {
  const lastday = function (y: number, m: number) {
    return new Date(y, m + 1, 0);
  };

  return lastday(lastDate.getFullYear(), lastDate.getMonth());
};

export const getMonthName = (month: number) => {
  const date = new Date();
  date.setMonth(month - 1);

  return date.toLocaleString("pt-BR", { month: "long" });
};
