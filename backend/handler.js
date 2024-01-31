'use strict';
import app from './index.js'
import ServerlessHttp from 'serverless-http';
export const hello = ServerlessHttp(app);
