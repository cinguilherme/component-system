import express from 'express';

interface HtppComponent {
    name: "http",
    app: any,
    startComponent: Function,
    stopComponent: Function,
}

const newApp = () => {
    const app = express();

    // app.get('/', (r,res) => {
    //     res.send('hello world');
    // });

    return app;
}

const loadRoutes = () => {

}

const startServer = (app:any) => {
    app.listen(3000, () => {
        console.log('server running on port 3000');
    });
}

const startComponent = () => {
    console.log('starting http component');
    
    const app = newApp();

    const flip = () => {
        startServer(app);
    }

    return {app, flip}
}

export const newComponent: () => HtppComponent = () => {
    const app = newApp()
    return {
        name: "http",
        app,
        startComponent: () => startServer(app),
        stopComponent: () => console.log('stop app')
    }
}
