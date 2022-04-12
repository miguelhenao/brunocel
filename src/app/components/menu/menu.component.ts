import { Component, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';

import { MenuItem, MenuSection } from './interfaces/types';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
  @Output() logout = new EventEmitter();
  @Input() hasLogout = true;
  @Input() menuItems!: MenuSection[];
  @Input() title = 'Menú';

  onLogout(): void {
    this.logout.emit();
  }

  getTooltipMessage(item: MenuItem): string {
    return item.info || '';
  }
}
