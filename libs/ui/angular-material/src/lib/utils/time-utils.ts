/**
 * Limits a string value to the following format: "XX:XX".
 * @param event - Event that was triggered.
 * @returns The modified string.
 */
export function onTimeInput(event: Event): string {
  let value = (event.target as HTMLInputElement).value.replace(/[^0-9:]/g, '');
  if (value.length >= 2 && !value.includes(':')) {
    value = value.slice(0, 2) + ':' + value.slice(2);
  }
  return value;
}
