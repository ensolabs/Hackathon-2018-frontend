export class Task {
    constructor(public IconUrl: string,
        public Keywords: string[],
        public Name: string,
        public PartitionKey: string,
        public RowKey: string,
        public Score: number) {}
}
