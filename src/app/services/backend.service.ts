import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service';
import { ScoreResult, Task, DeleteTaskRequest } from '../model/all';

@Injectable()
export class BackendService {
  headers: HttpHeaders = new HttpHeaders();
  constructor(public client: HttpClient, public config: ConfigService) {
    this.headers = this.headers.set('Content-Type', 'application/json');
   }
  scoreStuff() {
    return this.client.post<ScoreResult>(
            this.config.urlOwnScore,
            {'email': localStorage.getItem('enso-qr-id')});
  }

   submitImage(img) {
    return this.client.post(
            this.config.urlPostImage,
            {'email': localStorage.getItem('enso-qr-id'),
              'image': img});
  }
  getTasks() {
    return this.client.get<Task[]>(this.config.urlGetTasks);
  }
  newTask(task: Task) {
    return this.client.post(this.config.urlUpdateTask, JSON.stringify(task), {headers: this.headers});
  }
  deleteTask(partitionKey: string, rowKey: string) {
    return this.client.post(this.config.urlDeleteTask,
      JSON.stringify({PartitionKey: partitionKey, RowKey: rowKey }), {headers: this.headers});
  }
}
