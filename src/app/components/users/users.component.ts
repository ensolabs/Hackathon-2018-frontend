import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../../model/all';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Array<UserInfo> = new Array<UserInfo>();
  constructor() { }

  ngOnInit() {
    this.users = [new UserInfo('Gunnis', 'gunn@is.com', 102, false),
    new UserInfo('Lasse', 'las@se.com', 101, true),
    new UserInfo('Gunnis', 'gunn@is.com', 90, false),
    ];
  }
  getIcon(hasReceived: boolean): string {
    return hasReceived ? 'checked' : 'stars';
  }
  receive(user: UserInfo) {
    user.receivedPrice = !user.receivedPrice;
  }
}
