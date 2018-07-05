import express from 'express';
import favicon from 'serve-favicon';
import ServerRender from './ssr/serverRender';
import path from 'path';
import bodyParser from 'body-parser';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import proxy from 'http-proxy-middleware';

import api from './api';

const app = express();
const webpackDevServerHost = 'localhost:3000';

if (process.env.NODE_ENV === 'development') {
    const __ROOT_DIR__ = process.cwd();
    app.use('/static', proxy({target: `http://${webpackDevServerHost}`, changeOrigin: true}));
    app.use('/antd', express.static(path.resolve(__ROOT_DIR__, 'node_modules', 'antd', 'dist')));
}

if (process.env.NODE_ENV !== 'development') {
    const __ROOT_DIR__ = process.cwd();
    const staticDirPath = path.resolve(__ROOT_DIR__, 'build', 'static')
    ;
    app.use(favicon(path.join(__ROOT_DIR__, 'build', 'favicon.ico')));
    app.use('/static', express.static(staticDirPath));
}

app.disable('x-powered-by');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


app.use('/api', api);

app.get('*', ServerRender);

if (process.env.NODE_ENV === 'development'){
    app.use(proxy(`ws://${webpackDevServerHost}`, {changeOrigin:true}));
}


export default app;