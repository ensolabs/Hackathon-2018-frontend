import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-registered-check',
  templateUrl: './registered-check.component.html',
  styleUrls: ['./registered-check.component.css']
})
export class RegisteredCheckComponent implements OnInit, CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if (!localStorage.getItem('enso-qr-id')) {
      this.router.navigate(['/register']);
      return false;
    }

    return true;
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
