import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-result-dialog',
  templateUrl: './result-dialog.component.html',
  styleUrls: ['./result-dialog.component.css']
})
export class ResultDialogComponent implements OnInit {
  public title = 'Huzzah';
  public positive = ['Du har et falkeblikk!', 'Nok et mesterverk er fanget av din linse.'];
  public negative = ['Har du husket linselokket?', 'Ånden som dør, mannen som ikke kan se...', 'Guru meditation...'];
  result: any;
  public negativeText: string;
  public positiveText: string;
  tags: string[];


  constructor(
    private dialogRef: MatDialogRef<ResultDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.result = data.result;
    this.tags = data.tags;
  }

  ngOnInit() {
    let index = Math.floor(Math.random() * this.positive.length);
    this.positiveText = this.positive[index];

    index = Math.floor(Math.random() * this.negative.length);
    this.negativeText = this.negative[index];

    if (this.result.scoreResult.Score > 0) {
      this.title = 'Blinkskudd!';
    } else {
      this.title = 'Huh?';
    }
  }
  getTags(): string {
    return JSON.stringify(this.result.tags);
  }

  getTasks() {
    const v = JSON.parse(this.result.scoreResult.Tasks);

    switch (v.length) {
      case 0:
        return null;
      case 1:
        return v[0];
      case 2:
        return v[0] + ' og ' + v[1];
      case 3:
        {
          const head = v.slice(0, v.length - 1);
          return head.join(', ') + ' og ' + v[v.length - 1];
        }
    }
    return v.join(',');
  }
}
