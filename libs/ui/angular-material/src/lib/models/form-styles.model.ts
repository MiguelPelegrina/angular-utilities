const DEFAULT_GAP = 16;
const DEFAULT_ALIGNMENT: 'left' | 'right' | 'center' = 'center';

/**
 * Form styles for the form template component.
 */
export class FormStyles {
  height?: number;
  width?: number;
  gap?: number;
  alignment: 'left' | 'right' | 'center';

  /**
   * Creates an instance of FormStyles.
   * @param styles - Partial form styles to override default values.
   */
  constructor(
    options: {
      height?: number;
      width?: number;
      gap?: number;
      alignment?: 'left' | 'right' | 'center';
    } = {}
  ) {
    this.height = options.height;
    this.width = options.width;
    this.gap = options.gap ?? DEFAULT_GAP;
    this.alignment = options.alignment ?? DEFAULT_ALIGNMENT;
  }
}
