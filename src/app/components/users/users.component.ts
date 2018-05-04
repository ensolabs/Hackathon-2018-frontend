import { Component, OnInit } from '@angular/core';
import { UserInfo, AdminUser } from '../../model/all';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Array<UserInfo> = new Array<UserInfo>();
  constructor(private _service: BackendService) { }

  ngOnInit() {


    this._service.getUsers().subscribe(x => {
      this.users = x.map(y => new UserInfo(y.Email, y.Email, Number(y.Score), y.HasGotPrice === 'True'));
    }, err => console.log(err));
  }
  getIcon(hasReceived: boolean): string {
    return hasReceived ? 'checked' : 'stars';
  }
  receive(user: UserInfo) {
    if (user.score > 99) {
      this._service.gotPrice(user.email, !user.receivedPrice)
        .subscribe(x => { user.receivedPrice = !user.receivedPrice; }, err => { console.log(err); });
    }
  }
  isClickable(user: UserInfo): boolean {
    return user.score > 99;
  }
}
