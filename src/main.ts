/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { enableProdMode, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { platformBrowser, BrowserModule, bootstrapApplication } from '@angular/platform-browser';


import { environment } from './environments/environment';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app/app-routing.module';
import { NbSidebarModule, NbMenuModule, NbDatepickerModule, NbDialogModule, NbWindowModule, NbToastrModule, NbChatModule } from '@nebular/theme';
import { CoreModule } from './app/@core/core.module';
import { ThemeModule } from './app/@theme/theme.module';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, BrowserAnimationsModule, AppRoutingModule, NbSidebarModule.forRoot(), NbMenuModule.forRoot(), NbDatepickerModule.forRoot(), NbDialogModule.forRoot(), NbWindowModule.forRoot(), NbToastrModule.forRoot(), NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }), CoreModule.forRoot(), ThemeModule.forRoot()),
    provideHttpClient(withInterceptorsFromDi())
  ]
})
  .catch(err => console.error(err));
