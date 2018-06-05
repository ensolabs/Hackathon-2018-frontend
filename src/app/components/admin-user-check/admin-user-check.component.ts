import { Component, OnInit, Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserInfo } from '../../model/all';

@Injectable()
export class AdminUserCheckComponent implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean | Observable<boolean> | Promise<boolean> {
    const u = localStorage.getItem('enso-qr-id');
    const user = JSON.parse(u) as UserInfo;
    console.log(user);
    const regexp = new RegExp('@enso.no$');
    return regexp.test(user.id);
  }
  constructor() { }
}
