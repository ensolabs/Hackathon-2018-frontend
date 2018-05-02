import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { Task } from '../../model/all';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private _service: BackendService) { }
  public newTask: string;
  public tasks: Task[];
  ngOnInit() {
    this._service.getTasks().subscribe(x => {this.tasks = x; console.log(this.tasks); }, err => console.log(err));
  }
  post() {
    const p = this.newTask.split(',');
    const name = p[0];
    const score = Number( p[p.length - 1] );
    const keywords = p.slice(0, p.length - 1);
    const keywords2 = '["' + keywords.join('","') + '"]';
    const task = new Task('http://arngren.net', keywords, name, '1', (this.tasks.length + 1).toString(), score );
    console.log(JSON.stringify(task));
    this._service.newTask(task).subscribe(x => {
      this.tasks.push(task);
    }, err => console.log(err));
  }
  getKeywords(task: Task): string {
    return Array.prototype.join.call(task.Keywords, ',');
  }
}
