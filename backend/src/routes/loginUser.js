
const Router = require('koa-router');
const bcrypt = require('bcrypt');
const user = require('../models/user')


const router = new Router();

router.post('usuariosLogin.show', '/', async (ctx, next) => {
    const body = ctx.request.body;
    console.log(body);

    const usuario = await ctx.orm.User.findOne({ where: {
        username : body.user}
    })
    console.log(usuario);

    // const validPassword = await bcrypt.compare(body.user, usuario.password);
    const correct = await bcrypt.compare(body.password, usuario.password)

    console.log(correct)
    if (correct) {
        console.log("iniciando sesion!")
        ctx.response.status = 200;
        ctx.response.body = {
            username: usuario.username
        };
    }
    else {
        ctx.status = 401;
        ctx.body = {
            errors:['incorrecto']
        }
    }
});

module.exports = router;