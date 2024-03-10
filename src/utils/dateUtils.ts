import dayjs from 'dayjs';

export function dateToString(date: dayjs.ConfigType, format?: string): string {
  if (!date) {
    date = new Date().toLocaleDateString();
  }
  if (!format) {
    format = 'YYYY-MM-DD';
  }
  return dayjs(date).format(format);
}
