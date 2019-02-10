import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteService } from 'src/services/quote.service';
import { ProductService } from 'src/services/product-service';
import { ProductDetailsComponent } from 'src/app/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ QuoteService,
    ProductService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
