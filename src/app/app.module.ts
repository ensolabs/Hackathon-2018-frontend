import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatFormFieldModule,MatInputModule, MatOptionModule, MatSelectModule, MatSlideToggleModule, MatCardModule, MatChipsModule,
  MatToolbarModule,  MatListModule, MatIconModule} from '@angular/material';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatFormFieldModule,MatInputModule,
                MatOptionModule, MatSelectModule,MatSlideToggleModule,MatCardModule,
                MatChipsModule, MatToolbarModule, MatIconModule,MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
