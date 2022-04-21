import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CustomComponentsModule } from '../../components/custom-components.module';
import { MaterialModule } from '../../helpers/modules/material.module';
import { ProvidersRoutingModule } from './providers-routing.module';
import { ProvidersComponent } from './providers.component';

@NgModule({
  declarations: [ProvidersComponent],
  imports: [CommonModule, ProvidersRoutingModule, CustomComponentsModule, MaterialModule, FlexLayoutModule]
})
export class ProvidersModule {}
