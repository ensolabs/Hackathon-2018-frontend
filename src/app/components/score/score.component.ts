import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { ScoreEntry } from  '../../model/all';

@Component({
  selector: 'score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  public scores:ScoreEntry[];// = [new ScoreEntry(1, 'bygg', 'build', 10), new ScoreEntry(2, 'ro ro', 'rowing', 20)];
  public priceScore:number;
  public totalScore:number;


  constructor(public _service:BackendService) { }
  ngOnInit() {
    this._service.scoreStuff().subscribe(x=>{
        console.log(x);
        this.priceScore = x.priceScore;
        this.totalScore = x.totalScore;
        this.scores = x.scoredTasks;
      },err=>{console.log(err)});
  }
}
