import { ComponentInterface } from "../ComponentInterface";

export interface KafkaProducerInterface extends ComponentInterface {
    send: (message: string) => Promise<void>;
}