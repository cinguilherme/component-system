import {ComponentInterface} from "../ComponentInterface";

export class HttpOutMockComponent implements ComponentInterface {
    dependencies: Array<string> = [];
    name: string = "http-out-mock";

    start() {
    }

    status() {
    }

    stop() {
    }
}