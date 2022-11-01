import { ComponentInterface } from "../ComponentInterface";

export interface RedisInterface extends ComponentInterface {
    get: (key: string) => Promise<string>;
    set: (key: string, value: string) => Promise<void>;
}