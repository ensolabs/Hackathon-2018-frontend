import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatFormFieldModule,MatInputModule, MatOptionModule, MatSelectModule, MatSlideToggleModule, MatCardModule, MatChipsModule,
  MatToolbarModule,  MatListModule, MatIconModule} from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";


import { AppComponent } from './app.component';
import { ScoreComponent } from './components/score/score.component';
import { BackendService } from './services/backend.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatFormFieldModule,MatInputModule,
                MatOptionModule, MatSelectModule,MatSlideToggleModule,MatCardModule,
                MatChipsModule, MatToolbarModule, MatIconModule,MatListModule,FlexLayoutModule
  ],
  providers: [BackendService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
