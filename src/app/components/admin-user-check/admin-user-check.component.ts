import { Component, OnInit, Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserInfo } from '../../model/all';
import { BackendService } from '../../services/backend.service';
import { map } from 'rxjs/operators';
import {catchError} from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AdminUserCheckComponent implements CanActivate {
  private sub: any;
  private id: any;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean> {
    return this._service.checkPwd(route.params.pwd)
      .pipe(map(() => true), catchError( (err) => of(false)));
  }
  constructor(private _service: BackendService) { }
}
