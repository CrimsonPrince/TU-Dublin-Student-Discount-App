import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { CheckTutorial } from '../check-tutorial.service';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'all',
        children: [
          {
            path: '',
            loadChildren: '../category/discount-list/discount-list.module#DiscountListPageModule',
            canLoad: [CheckTutorial]
          }
        ]
      },
      {
        path: 'food',
        children: [
          {
            path: ':categoryId',
            loadChildren: '../category/discount-list/discount-list.module#DiscountListPageModule',
            canLoad: [CheckTutorial]
          }
        ]
      },
      {
        path: 'night',
        children: [
          {
            path: ':categoryId',
            loadChildren: '../category/discount-list/discount-list.module#DiscountListPageModule',
            canLoad: [CheckTutorial]  
          }
        ]
      },
      {
        path: 'shopping',
        children: [
          {
            path: ':categoryId',
            loadChildren: '../category/discount-list/discount-list.module#DiscountListPageModule',
            canLoad: [CheckTutorial]
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: '../about/about.module#AboutPageModule',
            canLoad: [CheckTutorial]
          }
        ]
      },
      {
        path: 'qr',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/qr',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
