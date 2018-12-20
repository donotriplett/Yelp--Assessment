import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YelpComponent } from './yelp/yelp.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { YelpService } from './service/yelp.service';

@NgModule({
  declarations: [
    AppComponent,
    YelpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [HttpClient, YelpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
