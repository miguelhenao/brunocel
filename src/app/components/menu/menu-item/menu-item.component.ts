import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { MenuItem } from '../interfaces/types';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuItemComponent {
  @Input() item!: MenuItem;

  getTooltipMessage(item: MenuItem): string {
    return item.info || '';
  }
}
