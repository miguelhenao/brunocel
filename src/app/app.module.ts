import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { httpInterceptorProviders } from './helpers/http-interceptors';
import { AppRoutingModule } from './app-routing.module';
import { RootStoreModule } from './root-store/root-store.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RootStoreModule,
    StoreModule.forRoot({}, {}),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument()
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
