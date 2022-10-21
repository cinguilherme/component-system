import { ComponentInterface } from '../ComponentInterface'
import fetch from 'node-fetch'
import { Bookmark } from './bookmark'

export class HttpOutComponent implements ComponentInterface {
    dependencies: Array<string> = []
    name: string = 'http-out'

    public http_out: any
    public bookmark: Bookmark

    constructor(bookmark: Bookmark) {
        this.bookmark = bookmark
    }

    start() {
        this.http_out = fetch
    }

    status() {}

    stop() {
        this.http_out = null
    }
}
