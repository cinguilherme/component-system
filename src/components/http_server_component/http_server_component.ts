import express from 'express'
import { ComponentInterface } from '../ComponentInterface'

interface HtppComponent {
    name: 'http'
    app: any
    startComponent: Function
    stopComponent: Function
}

export class HttpComponent implements ComponentInterface {
    public name: string = 'http'
    private _state: any
    public dependencies: Array<string>

    constructor() {
        this.dependencies = []
    }

    start() {
        this._state = newComponent()
        this._state.server = this._state.startComponent()
        console.log('http server is started')
    }

    status() {
        console.log('status component evoked')
        console.log(this._state)
        console.log(this._state.server)
    }

    stop() {
        console.log('stop component evoked')
        this._state.stopComponent(this._state)
    }
}

const startServer = (app: any) => {
    return app.listen(3000, () => {
        console.log('server running on port 3000')
    })
}

const newApp = () => {
    const app = express()

    app.get('/', (r, res) => {
        res.send('hello world')
    })

    return app
}

export const newComponent: () => HtppComponent = () => {
    const app = newApp()
    return {
        name: 'http',
        app,
        startComponent: () => {
            return startServer(app)
        },
        stopComponent: (state: any) => {
            console.log('stop app')
            state.server.close()
            console.log('no longer listening')
        },
    }
}
