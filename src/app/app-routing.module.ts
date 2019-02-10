import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuoteComponent } from 'src/app/quote/quote.component';
import { ProductDetailsComponent } from 'src/app/product-details/product-details.component';

const routes: Routes = [
  {path: 'quote', component: QuoteComponent},
  {path: 'productDetails', component: ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
