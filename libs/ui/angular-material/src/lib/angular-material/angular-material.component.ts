import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-angular-material',
  imports: [CommonModule],
  templateUrl: './angular-material.component.html',
  styleUrl: './angular-material.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AngularMaterialComponent {}
