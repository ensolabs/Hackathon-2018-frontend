import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { ConfigService } from './config.service';

@Injectable()
export class AppLoadService {
  constructor(private httpClient: HttpClient, public configService: ConfigService) { }
  public getSettings(): Promise<any> {
    const promise = this.httpClient.get('assets/config.json')
      .toPromise()
      .then(settings => {
        this.configService.urlHighScore = settings['urlHighScore'];
        this.configService.urlOwnScore = settings['urlOwnScore'];
        this.configService.urlPostImage = settings['urlPostImage'];
        this.configService.urlGetTasks = settings['urlGetTasks'];
        this.configService.urlUpdateTask = settings['urlUpdateTask'];
        this.configService.urlDeleteTask = settings['urlDeleteTask'];
        this.configService.urlGotPrice = settings['urlGotPrice'];
        this.configService.urlCheckPwd = settings['urlCheckPwd'];
        return settings;
      });
    return promise;
  }
}
