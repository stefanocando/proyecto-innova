const Application = require('koa');
const Koa = require('koa');
const koaBody = require('koa-body');
const KoaLogger = require('koa-logger');
const router = require('./routes');
const cors = require('@koa/cors');
const orm = require('./models');

const app = new Koa();

app.use(cors());

app.context.orm = orm;

app.use(KoaLogger());
app.use(koaBody());

app.use(router.routes());

module.exports = app;