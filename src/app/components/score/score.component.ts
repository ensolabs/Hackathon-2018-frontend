import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { ScoreEntry } from '../../model/all';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
  public scores: ScoreEntry[]; // = [new ScoreEntry(1, 'bygg', 'build', 10), new ScoreEntry(2, 'ro ro', 'rowing', 20)];
  public priceScore: number;
  public totalScore: number;

  displayedColumns = ['name', 'score'];
  dataSource = new MatTableDataSource(this.scores);

  constructor(public _service: BackendService,   private router: Router  ) {}
  ngOnInit() {
    this._service.scoreStuff().subscribe(
      x => {
        console.log(x);
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
