const Router = require('koa-router');
const restaurants = require('./routes/restaurants');
const platos = require('./routes/platos');
const createUser = require('./routes/createUser')
const loginUser = require('./routes/loginUser')

// const userRoutes = require('./routes/userroutes.js')

const router = new Router();

// router.use('/sexo', userroutes.routes());
router.use('/loginUser', loginUser.routes());
router.use('/createUser', createUser.routes());
router.use('/restaurants', restaurants.routes());
router.use('/platos', platos.routes());

module.exports = router;