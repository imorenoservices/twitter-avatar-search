import en from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';
import { ErrorHandler, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import * as AllIcons from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';

import { AppComponent } from './app.component';
import { GithubService } from './services/github.service';

import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';
import { ErrorHandlerService } from './services/error-handler.service';

import { NGZORRO_MODULES } from './ng-zorro';
import { COMPONENTS } from './components';

registerLocaleData(en);

//(TODO:) (morenosidiro) Importing all icons is not the best option for optimizing production bundles.
// Check: https://ng.ant.design/components/icon/en#static-loading-and-dynamic-loading
const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map((key) => antDesignIcons[key]);

@NgModule({
  declarations: [AppComponent, ...COMPONENTS],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NzIconModule.forRoot(icons),
    ...NGZORRO_MODULES
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: ErrorHandler, useClass: ErrorHandlerService },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
