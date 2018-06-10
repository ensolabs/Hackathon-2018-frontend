import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-congrats-dialog',
  templateUrl: './congrats-dialog.component.html',
  styleUrls: ['./congrats-dialog.component.css']
})
export class CongratsDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<CongratsDialogComponent>) {
  }

  ngOnInit() {
  }

}
