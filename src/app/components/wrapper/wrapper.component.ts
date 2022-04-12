import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WrapperComponent {
  @Input() title: string = 'Sin título';

  constructor() {}
}
