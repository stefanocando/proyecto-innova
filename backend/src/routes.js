const Router = require('koa-router');
const user_routes = require('./routes/user_routes');

const router = new Router();

router.use('/login', user_routes.routes());

module.exports = router;