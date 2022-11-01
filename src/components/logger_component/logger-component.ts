import { LoggerInterface, LogPayload } from "./LoggerInterface";

export class Logger implements LoggerInterface {
    log: (payload: LogPayload) => void;

}