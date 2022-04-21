import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

import { AppStoreModule as ClientStoreModule } from './client/app-store.module';
import { AppStoreModule as ProviderStoreModule } from './provider/app-store.module';
import { AppStoreModule as UserStoreModule } from './user/app-store.module';
import { ClientService } from '../services/client.service';
import { ProviderService } from '../services/provider.service';
import { UserService } from '../services/user.service';

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
  imports: [
    CommonModule,
    StoreModule.forRoot(rootReducer, rootStoreConfig),
    EffectsModule.forRoot([]),
    ClientStoreModule,
    ProviderStoreModule,
    UserStoreModule
  ],
  providers: [UserService, ClientService, ProviderService]
})
export class RootStoreModule {}
