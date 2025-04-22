// TODO Make label and tooltip depend on a condiction?
/**
 * Interface representing an icon from the Material Icon list.
 */
export interface Icon<T> {
  label: string;
  tooltip: string;

  /**
   * Condition on which the icon will be showed.
   * @param element - The element.
   * @returns True if the condition is matched and false if not.
   */
  condition: (element: T) => boolean;

  /**
   * Optional color of the icon.
   * @param element - The element.
   * @returns The string of the color.
   */
  color?: (element: T) => string;
}
