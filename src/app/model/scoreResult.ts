import { ScoreEntry } from './scoreEntry';

export class ScoreResult {
  constructor(public priceScore:number, public totalScore:number, public scoredTasks:ScoreEntry[]){

  }
}
