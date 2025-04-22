/**
 * Interface that represents the information to create a table column in the table template.
 */
export interface TableColumn {
  /**
   * Name of the header.
   */
  label: string;

  /**
   * Name of key of the property of the object shown in this column.
   */
  key: string;

  /**
   * Should it be right-aligned or left-aligned?
   */
  position?: 'right' | 'left';

  /**
   * If it should sortable
   */
  isSortable?: boolean;
}
