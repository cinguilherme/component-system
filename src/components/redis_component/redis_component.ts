import { RedisInterface } from "./redis_interface";

export class RedisComponent implements RedisInterface {
    get: (key: string) => Promise<string>;
    set: (key: string, value: string) => Promise<void>;
    
    dependencies: string[];
    name: string;
    start: Function;
    stop: Function;
    status: Function;
}