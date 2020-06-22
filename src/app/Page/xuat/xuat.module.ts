import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { XuatPageRoutingModule } from './xuat-routing.module';

import { XuatPage } from './xuat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    XuatPageRoutingModule
  ],
  declarations: [XuatPage]
})
export class XuatPageModule {}
