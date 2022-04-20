import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ClientsEffects } from './effects';
import { clientsReducer } from './reducer';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forFeature('clients', clientsReducer), EffectsModule.forFeature([ClientsEffects])]
})
export class AppStoreModule {}
