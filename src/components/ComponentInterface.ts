export interface ComponentInterface {
    dependencies: Array<string>
    name: string
    start: Function
    stop: Function
    status: Function
}