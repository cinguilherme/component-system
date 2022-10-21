import { ComponentInterface } from '../ComponentInterface'
import fetch from 'node-fetch'

export class HttpOutComponent implements ComponentInterface {
    dependencies: Array<string> = []
    name: string = 'http-out'

    public http_out: any

    constructor(bookmark: any) {}

    start() {
        this.http_out = fetch
    }

    status() {}

    stop() {
        this.http_out = null
    }
}
