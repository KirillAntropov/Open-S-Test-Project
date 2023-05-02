import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { BasketComponent } from './components/basket/basket.component';
import { CategoryComponent } from './components/category/category.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [

  { path: '', component: ProductsComponent },
  { path: 'category/:id', component: CategoryComponent },
  { path: 'basket', component: BasketComponent },
  // { path: 'search', component: FormComponent },


  {path: '**', redirectTo: '', component: ProductsComponent}
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
