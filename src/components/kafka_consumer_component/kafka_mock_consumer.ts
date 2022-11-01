import { KafkaConsumerInterface } from "./kafka_consumer_interface";

export class KafkaMockConsumer implements KafkaConsumerInterface {
    
    listen: (callback: (message: string) => void) => Promise<void>;
    
    dependencies: string[];
    name: string;
    start: Function;
    stop: Function;
    status: Function;
}