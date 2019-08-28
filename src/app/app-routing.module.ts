import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import {AdminOrdersComponent} from './admin/admin-orders/admin-orders.component'
import { from } from 'rxjs';


const routes: Routes =
[

// { path: 'products' , Component : ProductsComponent} ,
// { path: 'orders' , Component : MyOrdersComponent} ,
// { path: 'admin/orders' , Component : AdminOrdersComponent} ,
// { path: 'admin/products' , Component : ProductsComponent} ,

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
