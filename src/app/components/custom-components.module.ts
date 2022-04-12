import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { WrapperComponent } from './wrapper/wrapper.component';

@NgModule({
  declarations: [MenuComponent, MenuItemComponent, WrapperComponent],
  imports: [CommonModule, MatDividerModule, MatIconModule, MatListModule, MatTooltipModule, RouterModule],
  exports: [MenuComponent, MenuItemComponent, WrapperComponent]
})
export class CustomComponentsModule {}
