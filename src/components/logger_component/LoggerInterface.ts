export type LogLevel = 'debug' | 'info' | 'warn' | 'error' | 'fatal'

export interface LogPayload {
    level: LogLevel
    message: string
    body: any
}

export interface LoggerInterface {
    log: (payload: LogPayload) => void
}
