import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
  public requiredScore: number;
  public urlPostImage: string;
  public urlOwnScore: string;
  public urlHighScore: string;
  public urlGetTasks: string;
  public urlUpdateTask: string;
  public urlDeleteTask: string;
  public urlGotPrice: string;
  public urlCheckPwd: string;
  constructor() { }
}
