import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';
import { LoadingComponent } from './util-components/loading/loading.component';
import { CarouseliComponent } from './util-components/carouseli/carouseli.component';
import { AtomSpinnerModule } from 'angular-epic-spinners';

@NgModule({
  declarations: [
    AppComponent,
    CarouseliComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AtomSpinnerModule,
    MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
