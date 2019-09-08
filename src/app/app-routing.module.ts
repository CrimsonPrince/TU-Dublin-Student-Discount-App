import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'category', pathMatch: 'full' },
  { path: 'category',
  children: [
    {path: '', loadChildren: './category/category.module#CategoryPageModule'},
    {path: ':categoryId', loadChildren: './category/discount-list/discount-list.module#DiscountListPageModule'}
  ] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
