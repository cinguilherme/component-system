import { ComponentInterface } from '../ComponentInterface'

class MockHttpComponent implements ComponentInterface {
    private state: any
    public name: string = 'http'
    dependencies: Array<string> = []

    constructor() {}

    start() {}

    status() {}

    stop() {}
}
