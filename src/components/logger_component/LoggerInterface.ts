export interface LogPayload {
    message: string
    body: any
}

export interface LoggerInterface {
    log: (payload: LogPayload) => void
}
