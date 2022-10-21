export interface HttpOutInterface {
    call: (endpoint: string) => Promise<any>
}
