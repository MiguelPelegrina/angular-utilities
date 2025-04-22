/**
 * Interface representing an action that can be performed on a given element of a table row.
 * @template T - The type of entity the action is associated with.
 */
export interface Action<T> {
  label: string;
  tooltip?: string;

  // Function that will be executed when clicking on the element
  onClick: (entity: T) => void;

  condition?: (entity: T) => boolean;
}
