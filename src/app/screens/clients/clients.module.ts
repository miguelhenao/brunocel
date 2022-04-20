import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { CustomComponentsModule } from '../../components/custom-components.module';
import { MaterialModule } from '../../helpers/modules/material.module';

@NgModule({
  declarations: [ClientsComponent],
  imports: [CommonModule, ClientsRoutingModule, CustomComponentsModule, MaterialModule, FlexLayoutModule]
})
export class ClientsModule {}
