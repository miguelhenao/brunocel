import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomComponentsModule } from '../../components/custom-components.module';
import { MaterialModule } from '../../helpers/modules/material.module';
import { ProvidersRoutingModule } from './providers-routing.module';
import { ProvidersComponent } from './providers.component';
import { ProviderUpsertComponent } from './components/provider-upsert/provider-upsert.component';

@NgModule({
  declarations: [ProvidersComponent, ProviderUpsertComponent],
  imports: [
    CommonModule,
    ProvidersRoutingModule,
    CustomComponentsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProvidersModule {}
