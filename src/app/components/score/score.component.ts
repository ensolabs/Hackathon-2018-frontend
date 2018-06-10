import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { ScoreEntry, UserInfo } from '../../model/all';
import { MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { CongratsDialogComponent } from '../congrats-dialog/congrats-dialog.component';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent implements OnInit {
  public scores: ScoreEntry[];
  public priceScore: number;
  public totalScore: number;
  displayedColumns = ['name', 'score'];
  dataSource = new MatTableDataSource(this.scores);

  constructor(public _service: BackendService, private dialog: MatDialog) {}
  ngOnInit() {
    this._service.scoreStuff().subscribe(
      x => {
        const user = JSON.parse(localStorage.getItem('enso-qr-id')) as UserInfo;
        if (user.congrats && x.totalScore === 0) {
          user.congrats = false;
          localStorage.setItem('enso-qr-id', JSON.stringify(user));
        }
        this.priceScore = x.priceScore;
        this.totalScore = x.totalScore;
        this.scores = x.scoredTasks;
        if (this.totalScore >= x.priceScore) {
          this.showCongrats();
        }
      },
      err => {
        console.log(err);
      }
    );
  }
  showCongrats() {
    const user = JSON.parse(localStorage.getItem('enso-qr-id')) as UserInfo;
    if (!user.congrats) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      this.dialog.open(CongratsDialogComponent, dialogConfig);

      user.congrats = true;
      localStorage.setItem('enso-qr-id', JSON.stringify(user));
    }
  }
}
