import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SharedComponent} from './Components/shared/shared.component';

const routes: Routes = [
  { path:'products',
    component: SharedComponent ,
    loadChildren: () =>
      import('./Components/product/product-module').then(m => m.ProductModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
