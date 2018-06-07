import { Component, OnInit, Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserInfo } from '../../model/all';

@Injectable()
export class AdminUserCheckComponent implements CanActivate {
  private sub: any;
  private id: any;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean | Observable<boolean> | Promise<boolean> {

    return route.params.pwd === 'enso';
  }
  constructor() { }
}
