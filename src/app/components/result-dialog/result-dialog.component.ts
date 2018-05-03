import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-result-dialog',
  templateUrl: './result-dialog.component.html',
  styleUrls: ['./result-dialog.component.css']
})
export class ResultDialogComponent implements OnInit {

  result: any;

  constructor(
    private dialogRef: MatDialogRef<ResultDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.result = data.result;
  }




  ngOnInit() {
  }

}
