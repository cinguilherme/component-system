import express from 'express';

const newApp = () => {
    const app = express();

    // app.get('/', (r,res) => {
    //     res.send('hello world');
    // });

    return app;
}

export const startComponent = () => {
    console.log('starting http component');
    
    return {app: newApp()}
}