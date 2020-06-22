import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { XuatPage } from './xuat.page';

const routes: Routes = [
  {
    path: '',
    component: XuatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class XuatPageRoutingModule {}
