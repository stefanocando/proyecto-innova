const Router = require('koa-router');

const router = new Router();

router.post('generateOrder', '/', async (ctx) => {
    const body = ctx.request.body;

    console.log(body);
    try {
        const order = await ctx.orm.Order.create({
            username: body.username,
            telephone: body.telephone,
            adress: body.adress,
            comments: body.comments,
            products: body.products,
        });
        ctx.status = 203;
        ctx.body = "Orden creada con éxito";
    } catch (error) {
        ctx.throw(error);
    }
})

module.exports = router;