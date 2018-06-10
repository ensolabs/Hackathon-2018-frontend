import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service';
import { ScoreResult, Task, DeleteTaskRequest, AdminUser, UserInfo } from '../model/all';

@Injectable()
export class BackendService {
  headers: HttpHeaders = new HttpHeaders();
  constructor(public client: HttpClient, public config: ConfigService) {
    this.headers = this.headers.set('Content-Type', 'application/json');
  }
  scoreStuff() {
    const user = JSON.parse( localStorage.getItem('enso-qr-id')) as UserInfo;
    console.log(user);
    return this.client.post<ScoreResult>(
      this.config.urlOwnScore,
      { 'email': user.id });
  }

  submitImage(img) {
    const user = JSON.parse( localStorage.getItem('enso-qr-id')) as UserInfo;
    return this.client.post(
      this.config.urlPostImage,
      {
        'email': user.id,
        'id': user.id,
        'name': user.firstName,
        'image': img
      });
  }
  getTasks() {
    return this.client.get<Task[]>(this.config.urlGetTasks);
  }
  newTask(task: Task) {
    return this.client.post(this.config.urlUpdateTask, JSON.stringify(task), { headers: this.headers });
  }
  deleteTask(partitionKey: string, rowKey: string) {
    return this.client.post(this.config.urlDeleteTask,
      JSON.stringify({ PartitionKey: partitionKey, RowKey: rowKey }), { headers: this.headers });
  }
  gotPrice(email: string, gotPrice: boolean) {
    return this.client.post(this.config.urlGotPrice, JSON.stringify({ email: email, gotPrice: gotPrice }),
      { headers: this.headers });
  }
  getUsers() {
    return this.client.get<AdminUser[]>(this.config.urlHighScore);
  }
  checkPwd(pwd: string) {
    return this.client.post<Response>(this.config.urlCheckPwd, JSON.stringify({password: pwd}), {headers: this.headers});
  }
}
