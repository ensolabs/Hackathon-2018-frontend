export class UserInfo {
  showDebug: boolean;
    constructor(public firstName: string,
        public id: string,
        public score: number,
        public receivedPrice: boolean,
        public congrats: boolean
    ) {}
}
