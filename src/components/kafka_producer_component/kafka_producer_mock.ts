import { KafkaProducerInterface } from "./kafka_producer_interface";

export class KafkaProducerMock implements KafkaProducerInterface {
    
    send: (message: string) => Promise<void>;
    
    dependencies: string[];
    name: string;
    start: Function;
    stop: Function;
    status: Function;

}