
const Router = require('koa-router');
const bcrypt = require('bcrypt');
const user = require('../models/user')


const router = new Router();
router.post('usuariosLogin.show', '/', async (ctx) => {
    const body = ctx.request.body;
    const usuario = await ctx.orm.User.findOne({
        username : body.user
        
    })
    console.log(body.user)
    console.log(usuario.password)
    console.log(body.password)

    const validPassword = await bcrypt.compare("$2b$05$ZdrkzdnvFXRJBhSfQNjgXuRm605oj/KoDa8yRfT8L6r8tG0sjXXPK", usuario.password);
    console.log(validPassword)
    if (validPassword) {
        ctx.body = body.user
            
        
    } else {
        error = "no"
        ctx.throw(error)

        
    }
   
    

});

module.exports = router;