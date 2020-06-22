import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NhapPage } from './nhap.page';

const routes: Routes = [
  {
    path: '',
    component: NhapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NhapPageRoutingModule {}
