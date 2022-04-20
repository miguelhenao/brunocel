import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { CustomComponentsModule } from '../../components/custom-components.module';
import { MaterialModule } from '../../helpers/modules/material.module';
import { ClientUpsertComponent } from './components/client-upsert/client-upsert.component';
import { ClientListComponent } from './components/client-list/client-list.component';

@NgModule({
  declarations: [ClientsComponent, ClientUpsertComponent, ClientListComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    CustomComponentsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientsModule {}
