import { CategoryPage } from './category/category.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'category',
  children: [
    {path: '', loadChildren: './category/category.module#CategoryPageModule'},
    {path: ':categoryId', loadChildren: './category/discount-list/discount-list.module#DiscountListPageModule'},
    {path: ':categoryId/:discountId', loadChildren: './category/discount-list/discount-detail/discount-detail.module#DiscountDetailPageModule' }
  ] },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' }
 ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
