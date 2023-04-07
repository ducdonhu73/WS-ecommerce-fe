const dateFormat =
  /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/;

function isValidDate(date: unknown): boolean {
  return (
    date != null &&
    Object.prototype.toString.call(date) === '[object Date]' &&
    !isNaN(date as number)
  );
}

/**
 * A function which evaluates whether a given key/value pair contains a date or time
 * and converts that value to a Date object if so
 * @param {string} key Key
 * @param {unknown} value Value to evaluate and revive
 * @returns {unknown | Date} the value, simply passed through if not a date, or a Date
 */
export function dateReviver(key: string, value: unknown): unknown | Date {
  if (typeof value === 'string' && dateFormat.test(value)) {
    // console.log('Dateee', value);
    const potentialDate = new Date(value);
    if (isValidDate(potentialDate)) {
      return potentialDate;
    }
  }

  return value;
}
