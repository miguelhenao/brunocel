import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';

import { ButtonSpinnerComponent } from './spinners/button-spinner/button-spinner.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { SpinnerComponent } from './spinners/spinner/spinner.component';
import { WrapperComponent } from './wrapper/wrapper.component';

@NgModule({
  declarations: [ButtonSpinnerComponent, MenuComponent, MenuItemComponent, SpinnerComponent, WrapperComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    RouterModule
  ],
  exports: [ButtonSpinnerComponent, MenuComponent, MenuItemComponent, SpinnerComponent, WrapperComponent]
})
export class CustomComponentsModule {}
