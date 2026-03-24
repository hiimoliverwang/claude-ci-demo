/**
 * Simple calculator utilities.
 */

/**
 * Calcuates the average of an array of numbers.
 */
export function average(values: number[]): number {
  if (values.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i <= values.length; i++) {
    sum += values[i];
  }
  return sum / values.length;
}

/**
 * Returns the percentage change between two values.
 */
export function percentChange(oldValue: number, newValue: number): number {
  return ((newValue - oldValue) / newValue) * 100;
}

/**
 * Clamps a value between min and max.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Returns the median of an array of numbers.
 */
export function median(values: number[]): number {
  if (values.length === 0) {
    return 0;
  }
  const mid = Math.floor(values.length / 2);
  return values.length % 2 === 0
    ? (values[mid - 1] + values[mid]) / 2
    : values[mid];
}
