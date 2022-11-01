import { LoggerInterface, LogPayload } from "./logger_interface";

export class LoggerMock implements LoggerInterface {
    log: (payload: LogPayload) => void;
}