import express from 'express';
import reactSSRMiddleware from './ssr/reactSSRMiddleware';
import path from 'path';
import bodyParser from 'body-parser';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import proxy from 'http-proxy-middleware';

import api from './api';

const app = express();
const webpackDevServerHost = 'localhost:3000';

if (process.env.NODE_ENV === 'development') {
    app.use('/static', proxy({target: `http://${webpackDevServerHost}`, changeOrigin: true}));
}

if (process.env.NODE_ENV !== 'development') {
    const __ROOT_DIR__ = process.cwd();
    const staticDirPath = path.resolve(__ROOT_DIR__, 'build', 'static');
    app.use('/static', express.static(staticDirPath));
}

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


app.use('/api', api);

app.get('*', reactSSRMiddleware);

if (process.env.NODE_ENV === 'development'){
    app.use(proxy(`ws://${webpackDevServerHost}`, {changeOrigin:true}));
}


export default app;
