import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service';
import { ScoreResult, Task } from '../model/all';

@Injectable()
export class BackendService {
  headers: HttpHeaders = new HttpHeaders();
  constructor(public client: HttpClient, public config: ConfigService) {
    this.headers = this.headers.set('Content-Type', 'application/json');
   }
  scoreStuff() {
    return this.client.post<ScoreResult>(
            this.config.urlOwnScore,
            {'email': 'le@gmail.com'});
  }

   submitImage(img) {
    return this.client.post(
            this.config.urlPostImage,
            {'email': 'le@gmail.com',
              'image': img});
  }
  getTasks() {
    return this.client.get<Task[]>(this.config.urlGetTasks);
  }
  newTask(task: Task) {
    console.log(this.headers);
    return this.client.post(this.config.urlUpdateTask, JSON.stringify(task), {headers: this.headers});
  }
}
