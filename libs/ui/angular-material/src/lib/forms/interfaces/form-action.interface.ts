/**
 * Interface representing a button in a form.
 */
export interface FormAction {
  label: string;
  action: () => void;
  submit?: boolean;
  color?: 'primary' | 'accent' | 'warn';
  disabled?: boolean | (() => boolean);
  icon?: string;
  showOnlyIcon?: boolean;
  iconPosition?: 'start' | 'end';
}
