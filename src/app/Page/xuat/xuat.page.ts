import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Service/UserService/user.service';
import { User } from '../../Models/User'
import { ToastController } from '@ionic/angular'

@Component({
  selector: 'app-xuat',
  templateUrl: './xuat.page.html',
  styleUrls: ['./xuat.page.scss'],
})
export class XuatPage implements OnInit {
  items: User[];
  constructor(
    public UserService: UserService,
    public Toastctrl: ToastController,
  ) {
    this.UserService.getUser().subscribe(data => {
      this.items = data;
      console.log(this.items)
    })
  }
  ngOnInit() {
  }
  async Deletesuccess() {
    const toast = await this.Toastctrl.create({
      message: 'Delete success !!!',
      duration: 3000
    });
    toast.present();
  }
  delete(userkey) {
    this.UserService.deleteUser(userkey);
    this.Deletesuccess();
  }
}
