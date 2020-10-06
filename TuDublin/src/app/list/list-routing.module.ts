import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailPage } from './detail/detail.page';
import { ListPage } from './list.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: ListPage},
      {path: ':discountId', component: DetailPage},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPageRoutingModule {}
