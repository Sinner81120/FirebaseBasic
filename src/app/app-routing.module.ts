import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Page/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'nhap',
    pathMatch: 'full'
  },
  {
    path: 'nhap',
    loadChildren: () => import('./Page/nhap/nhap.module').then(m => m.NhapPageModule)
  },
  {
    path: 'xuat',
    loadChildren: () => import('./Page/xuat/xuat.module').then(m => m.XuatPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
