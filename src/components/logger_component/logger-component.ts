import { LoggerInterface, LogPayload } from "./logger_interface";

export class Logger implements LoggerInterface {
    log: (payload: LogPayload) => void;

}