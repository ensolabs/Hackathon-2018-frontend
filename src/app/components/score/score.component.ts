import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  constructor(public _service:BackendService) { }

  ngOnInit() {
    this._service.scoreStuff().subscribe(x=>{console.log(x)},err=>{console.log(err)});
  }

}
