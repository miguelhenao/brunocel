import { Component } from '@angular/core';

import { MENU_ITEMS } from '../../helpers/constants/menu-items';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  menuItems = MENU_ITEMS;

  constructor() {}

  onLogout(): void {}
}
