import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatFormFieldModule,MatInputModule, MatOptionModule, MatSelectModule, MatSlideToggleModule, MatCardModule, MatChipsModule,
  MatToolbarModule,  MatListModule, MatIconModule, MatProgressBarModule} from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { WebCamModule } from 'ack-angular-webcam';


import { AppComponent } from './app.component';
import { ScoreComponent } from './components/score/score.component';
import { BackendService } from './services/backend.service';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes, Router } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { CaptureComponent } from './components/capture/capture.component';

const appRoutes: Routes = [
  { path: 'score', component: ScoreComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'capture', component: CaptureComponent },
  { path: 'admin',      component: AdminComponent },
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
    CaptureComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatFormFieldModule,MatInputModule,
                MatOptionModule, MatSelectModule,MatSlideToggleModule,MatCardModule,
                MatChipsModule, MatToolbarModule, MatIconModule,MatListModule,FlexLayoutModule,
                MatProgressBarModule, WebCamModule,
                HttpClientModule, RouterModule.forRoot(
                  appRoutes,
                  { enableTracing: false } // <-- debugging purposes only
                ),
                ZXingScannerModule.forRoot()
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor() {

  }
}
