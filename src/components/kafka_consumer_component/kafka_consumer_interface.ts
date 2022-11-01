import { ComponentInterface } from "../ComponentInterface";

export interface KafkaConsumerInterface extends ComponentInterface {

    listen: (callback: (message: string) => void) => Promise<void>;

}