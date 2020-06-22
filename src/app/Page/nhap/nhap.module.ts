import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NhapPageRoutingModule } from './nhap-routing.module';

import { NhapPage } from './nhap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NhapPageRoutingModule
  ],
  declarations: [NhapPage]
})
export class NhapPageModule {}
