import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { Task, DeleteTaskRequest } from '../../model/all';

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
    this._service.getTasks().subscribe(x => { this.tasks = x; }, err => console.log(err));
  }
  post() {
    const p = this.newTask.split(',');
    const name = p[0];
    const score = Number(p[p.length - 1]);
    const keywords = p.slice(0, p.length - 1);
    const task = new Task('http://arngren.net', keywords, name, '1',
      (Math.max(...(this.tasks.map(x => Number(x.RowKey)))) + 1).toString(), score);
    this._service.newTask(task).subscribe(x => {
      this.tasks.push(task);
      this.newTask = '';
    }, err => console.log(err));
  }
  getKeywords(task: Task): string {
    return Array.prototype.join.call(task.Keywords, ',');
  }
  delete(task: Task) {
    this._service.deleteTask(task.PartitionKey, task.RowKey)
      .subscribe(x => { this.removeTask(task.RowKey); }, err => { console.log(err); });
  }
  removeTask(rowKey: string) {
    this.tasks = this.tasks.filter(x => x.RowKey !== rowKey);
  }
  edit(task: Task) {

    this.newTask = task.Name + ',' + task.Keywords.join(',') + ',' + task.Score;
    this._service.deleteTask(task.PartitionKey, task.RowKey)
    .subscribe(x => { this.removeTask(task.RowKey); }, err => { console.log(err); });
  }
}
