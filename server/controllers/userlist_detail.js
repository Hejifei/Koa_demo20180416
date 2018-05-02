const userInfoService = require('./../services/user-info')

module.exports = {

      async indexPage ( ctx ) {
        const title = 'userInfo-Edit'
        let result =((await userInfoService.getUserDetail(ctx))[0]);
        await ctx.render('userlist_detail', {
          title,
          result
        })
      },
}