const Router = require('koa-router');
const orm = require('../models/index');

const router = new Router();

router.post("/", async (ctx) => {
    try {
        const user = await ctx.orm.User.findOne({
            where: { username: ctx.request.body.username }
        });
        if (user) {
            if (ctx.request.body.password === user.password) {
                ctx.response.body = { user: user};

                ctx.status = 201;
            } else {
                ctx.throw("Contraseña incorrecta", 401);
            }
        } else {
            console.log("No encontrado");
            ctx.throw("Usuario con ese email no encontrado", 404);
        }
    } catch (error) {
        console.log(error);
        ctx.throw(error);
    }
});

module.exports = router;
