import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Service/UserService/user.service';
import { User } from '../../Models/User'

@Component({
  selector: 'app-xuat',
  templateUrl: './xuat.page.html',
  styleUrls: ['./xuat.page.scss'],
})
export class XuatPage implements OnInit {
  items: User[];
  constructor(
    public UserService: UserService,
  ) {
    this.UserService.getUser().subscribe(data => {
      this.items = data;
    })
  }
  ngOnInit() {
  }
}
