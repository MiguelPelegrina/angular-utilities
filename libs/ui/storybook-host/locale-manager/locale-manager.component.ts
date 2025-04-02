import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  Input,
  signal,
  WritableSignal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'lib-locale-manager',
  imports: [CommonModule, TranslocoModule],
  templateUrl: './locale-manager.component.html',
  styleUrl: './locale-manager.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocaleManagerComponent {
  private translationService = inject(TranslocoService);

  // Using a writable signal for locale
  private _locale: WritableSignal<string> = signal('en');

  // Expose locale as a getter/setter property
  @Input()
  set locale(value: string) {
    this._locale.set(value);
  }

  constructor() {
    // Effect runs automatically when locale signal changes
    effect(() => {
      this.translationService.setActiveLang(this._locale());
    });
  }
}
