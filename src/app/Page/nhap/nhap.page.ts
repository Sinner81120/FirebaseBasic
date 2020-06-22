import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { UserService } from '../../Service/UserService/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nhap',
  templateUrl: './nhap.page.html',
  styleUrls: ['./nhap.page.scss'],
})
export class NhapPage implements OnInit {
  user = {
    name: null,
    age: null,
    address: null,
    job: null,
  };
  constructor(
    public UserService: UserService,
    public ToastCrtl: ToastController,
    public router: Router,
  ) { }

  ngOnInit() {
  }
  async PushSuccess() {
    const toast = await this.ToastCrtl.create({
      message: 'Push success !!!',
      duration: 3000
    });
    toast.present();
  }
  async add(value) {
    this.UserService.addUser(value);
    this.PushSuccess();
    this.resetFields();
  }

  resetFields() {
    this.user.address = null;
    this.user.age = null;
    this.user.job = null;
    this.user.name = null;
  }
  navigate() {
    this.router.navigate(['xuat']);
  }
}
