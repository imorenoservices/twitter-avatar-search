import { NgModule } from '@angular/core';
import en from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';

import { AppComponent } from './app.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { UserSearchResultsComponent } from './components/user-search-results/user-search-results.component';
import { GithubService } from './services/github.service';

registerLocaleData(en);

const COMPONENTS = [UserSearchResultsComponent, PaginationComponent];

const NGZORRO_MODULES = [NzTableModule, NzDividerModule, NzButtonModule, NzIconModule];

@NgModule({
  declarations: [AppComponent, ...COMPONENTS],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ...NGZORRO_MODULES
  ],
  providers: [GithubService, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule {}
