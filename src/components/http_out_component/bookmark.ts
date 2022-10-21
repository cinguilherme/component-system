export type HandlerFn = () => Promise<any>

export interface Endpoint {
    endpoint: string
    url: string
    method: string
    handler: HandlerFn
}

export interface Bookmark {
    table: Array<Endpoint>
}
