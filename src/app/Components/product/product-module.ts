import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {CartComponent} from './cart/cart.component';
import {FilterComponent} from './home/filter/filter.component';
import {ProductListComponent} from './home/product-list/product-list.component';
import {FormsModule} from '@angular/forms';
import {NameLenPipe} from './pipes/name-len-pipe';
import {DescriptionLenPipe} from './pipes/description-len-pipe';
import {ProductFilterPipePipe} from './pipes/product-filter-pipe-pipe';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: ':id', component: ProductDetailsComponent },
  { path: '**', component: HomeComponent  }
];

@NgModule({
  declarations: [
    HomeComponent,
    ProductDetailsComponent,
    CartComponent,
    FilterComponent,
    ProductListComponent,
    NameLenPipe,
    DescriptionLenPipe,
    ProductFilterPipePipe,
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), FormsModule
  ],
})
export class ProductModule { }
