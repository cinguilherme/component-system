import { LoggerInterface, LogPayload } from "./LoggerInterface";

export class LoggerMock implements LoggerInterface {
    log: (payload: LogPayload) => void;
}