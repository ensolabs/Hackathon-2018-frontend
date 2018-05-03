import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule,
  MatOptionModule, MatSelectModule, MatSlideToggleModule, MatCardModule, MatChipsModule,
  MatToolbarModule,  MatListModule, MatIconModule, MatProgressBarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { WebCamModule } from 'ack-angular-webcam';


import { AppComponent } from './app.component';
import { ScoreComponent } from './components/score/score.component';
import { BackendService } from './services/backend.service';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes, Router } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { RegisteredCheckComponent } from './components/registered-check/registered-check.component';
import { CaptureComponent } from './components/capture/capture.component';
import { AppLoadService } from './services/app-load.service';
import { ConfigService } from './services/config.service';
import { ZXingScannerModule } from './zxing/zxing-scanner.module';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './components/users/users.component';
import { AdminUserCheckComponent } from './components/admin-user-check/admin-user-check.component';

const appRoutes: Routes = [
  { path: 'score', component: ScoreComponent, canActivate: [RegisteredCheckComponent] },
  { path: 'register', component: RegisterUserComponent },
  { path: 'capture', component: CaptureComponent },
  { path: 'users', component: UsersComponent, canActivate: [AdminUserCheckComponent] },
  { path: 'admin', component: AdminComponent, canActivate: [AdminUserCheckComponent]  },
  { path: '',
    redirectTo: '/score',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent,
    AdminComponent,
    PageNotFoundComponent,
    RegisterUserComponent,
    CaptureComponent,
    RegisteredCheckComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule,
                MatOptionModule, MatSelectModule, MatSlideToggleModule, MatCardModule,
                MatChipsModule, MatToolbarModule, MatIconModule, MatListModule, FlexLayoutModule,
                MatProgressBarModule, WebCamModule,
                HttpClientModule, RouterModule.forRoot(
                  appRoutes,
                  { enableTracing: false } // <-- debugging purposes only
                ),
                ZXingScannerModule.forRoot()
  ],
  providers: [RegisteredCheckComponent, AdminUserCheckComponent, BackendService, AppLoadService, ConfigService,
    { provide: APP_INITIALIZER, useFactory: get_settings, deps: [AppLoadService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor() {

  }
}
export function get_settings(appLoadService: AppLoadService) {
  return () => appLoadService.getSettings();
}
