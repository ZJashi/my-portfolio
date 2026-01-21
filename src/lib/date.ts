export const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

export const formatDate = (year: number, month: number): string => {
  if (month < 1 || month > 12) {
    throw new Error(`Invalid month: ${month}`);
  }
  return `${MONTHS[month - 1]} ${year}`;
};
