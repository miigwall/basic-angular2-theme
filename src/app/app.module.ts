import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from '../components/home/home.component';
import { PageComponent } from '../components/page/page.component';
import { ErrorComponent } from '../components/error/error.component';

import { HttpService } from '../services/http.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'notfound', component: ErrorComponent, pathMatch: 'full' },
  { path: ':pageId', component: PageComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageComponent,
    ErrorComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes, { 
      	enableTracing: true,
      }
    ),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [ 
    HttpService,
  ],
  bootstrap: [ 
    AppComponent 
  ]
})
export class AppModule {}
