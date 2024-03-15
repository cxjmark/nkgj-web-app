// @ts-ignore
import dayjs from 'dayjs'
// @ts-ignore
import timezone from 'dayjs/plugin/timezone'
// eslint-disable-next-line no-restricted-imports
import { isNumber } from 'lodash-es'

dayjs.extend(timezone)
const getGuess = () => dayjs.tz.guess()
const NK_TIMEZONE_CODE = 'NK_TIMEZONE_CODE'

export function getLocalTimeZoneCode(): string {
  const _timezone = window.localStorage.getItem(NK_TIMEZONE_CODE) || ''
  return _timezone ? getGuess() : _timezone
}

export function formatDate(
  value: dayjs.ConfigType,
  format: string | 'date' = 'YYYY-MM-DD HH:mm'
): string {
  if (isNumber(value) && String(value).length === 10) {
    value = Number(value) * 1000
  }
  let _format = 'YYYY-MM-DD HH:mm'
  if (format) {
    _format = format === 'date' ? 'YYYY-MM-DD' : format
  }
  return dayjs.tz(value, getLocalTimeZoneCode()).format(_format)
}
