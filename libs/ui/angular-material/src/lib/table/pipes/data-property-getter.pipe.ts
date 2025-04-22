import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'dataPropertyGetter',
})
export class DataPropertyGetterPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transform(object: any, keyName: string): unknown {
    if (!object || !keyName) {
      return null;
    }

    const keys = keyName.split('.');
    let value = object;

    // Loop through nested objects
    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        // Handle enums of objects.

        value = value[key];
      }
    }

    return value;
  }
}
