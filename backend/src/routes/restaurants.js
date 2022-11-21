const Router = require('koa-router');

const router = new Router();

router.get('matches.index', '/', async( ctx ) => {
    try {
        const matches = await ctx.orm.Restaurants.findAll();
        if (!matches) {
            ctx.throw(404);
        }
    } catch (error) {
        console.log(error);
        ctx.throw(error);
    }
    ctx.body(matches);
});

module.exports = router;