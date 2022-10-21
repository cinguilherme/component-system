import { ComponentInterface } from '../ComponentInterface'
import { Bookmark, Endpoint } from './bookmark'
import { HttpOutInterface } from './http-out-interface'

export class HttpOutMockComponent implements ComponentInterface, HttpOutInterface {
    dependencies: Array<string> = []
    name: string = 'http-out-mock'

    public http_out

    public bookmark: Bookmark

    constructor(bookmark: Bookmark) {
        this.bookmark = bookmark
    }

    start() {
        this.http_out = (url, ops?) => {}
    }

    status() {}

    stop() {}

    call(endpoint: string): Promise<any> {
        let endpoint1: Endpoint = this.bookmark.table.filter(ed => ed.endpoint === endpoint)[0]
        if (endpoint1) {
            return endpoint1.handler()
        } else {
            return Promise.reject('endpoint not found')
        }
    }
}
