import {ComponentInterface} from "../ComponentInterface";

export class HttpOutMockComponent implements ComponentInterface {
    dependencies: Array<string> = [];
    name: string = "http-out-mock";

    public http_out;

    constructor(bookmark: any) {
    }

    start() {
        this.http_out = (url, ops?) => {};
    }

    status() {
    }

    stop() {

    }
}