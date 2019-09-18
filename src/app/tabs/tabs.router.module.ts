import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
 
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'all',
        children: [
          {
            path: ':categoryId',
            loadChildren: '../category/discount-list/discount-list.module#DiscountListPageModule'
          }
        ]
      },
      {
        path: 'food',
        children: [
          {
            path: ':categoryId',
            loadChildren: '../category/discount-list/discount-list.module#DiscountListPageModule'
          }
        ]
      },
      {
        path: 'night',
        children: [
          {
            path: ':categoryId',
            loadChildren: '../category/discount-list/discount-list.module#DiscountListPageModule'
          }
        ]
      },
      {
        path: 'shopping',
        children: [
          {
            path: ':categoryId',
            loadChildren: '../category/discount-list/discount-list.module#DiscountListPageModule'
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: ':categoryId',
            loadChildren: '../category/discount-list/discount-list.module#DiscountListPageModule'
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs',
    pathMatch: 'full'
  }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}