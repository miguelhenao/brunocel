import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProvidersEffects } from './effects';
import { providersReducer } from './reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('providers', providersReducer),
    EffectsModule.forFeature([ProvidersEffects])
  ]
})
export class AppStoreModule {}
