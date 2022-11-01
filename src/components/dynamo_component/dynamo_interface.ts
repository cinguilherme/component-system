
export interface DynamoInterface {
    insert: (key: string, value: string) => Promise<void>;
}