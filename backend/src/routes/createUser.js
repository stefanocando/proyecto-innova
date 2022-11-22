
const Router = require('koa-router');
const bcrypt = require('bcrypt');


const router = new Router();
router.post('usuariosCreate.show', '/', async (ctx) => {
    const body = ctx.request.body;
    console.log(body.password);
    const hashPassword = await bcrypt.hash(body.password, 5);
    try {
      await ctx.orm.User.create({
        username: body.user,
        email: body.email,
        password: hashPassword,
      });
      ctx.status = 201
      ctx.body = "creado exitosamente"
    } catch (error) {
      ctx.throw(error)
    }
    

});

module.exports = router;