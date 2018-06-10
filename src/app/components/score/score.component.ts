import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { ScoreEntry } from '../../model/all';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
  public scores: ScoreEntry[];
  public priceScore: number;
  public totalScore: number;
  displayedColumns = ['name', 'score'];
  dataSource = new MatTableDataSource(this.scores);

  constructor(public _service: BackendService) {
  }
  ngOnInit() {
    this._service.scoreStuff().subscribe(
      x => {
        this.priceScore = x.priceScore;
        this.totalScore = x.totalScore;
        this.scores = x.scoredTasks;
      },
      err => {
        console.log(err);
      }
    );
  }
}
