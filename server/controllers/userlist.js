const userInfoService = require('./../services/user-info')
const {userCode,resmsg} = require('./../codes/user')

module.exports = {
    
      async indexPage ( ctx ) {
        const title = 'userlist'
        let result = {
          message: '',
          data: null,
          code: ''
        }
        let validateResult =JSON.stringify(await userInfoService.getUsers());
        result.message = resmsg.success;
        result.data = validateResult;
        result.code = 1;
        await ctx.render('userlist', {
          title,
          result
        })
      },
}