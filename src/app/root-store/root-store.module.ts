import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

export interface RootState {
  router: RouterReducerState;
}

export const rootReducer = {
  router: routerReducer
};

export const rootStoreConfig = {
  runtimeChecks: {
    strictStateImmutability: true,
    strictActionImmutability: true
  }
};

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forRoot(rootReducer, rootStoreConfig), EffectsModule.forRoot([])]
})
export class RootStoreModule {}
