const dbUtils = require('./../utils/db-util')

const user = {

  /**
   * 数据库创建用户
   * @param  {object} model 用户数据模型
   * @return {object}       mysql执行结果
   */
  async create ( model ) {
    let result = await dbUtils.insertData( 'user_info', model )
    return result
  },

  /**
   * 查找一个存在用户的数据
   * @param  {obejct} options 查找条件参数
   * @return {object|null}        查找结果
   */
  async getExistOne(options ) {
    let _sql = `
    SELECT * from user_info
      where email="${options.email}" or name="${options.name}"
      limit 1`
    let result = await dbUtils.query( _sql )
    if ( Array.isArray(result) && result.length > 0 ) {
      result = result[0]
    } else {
      result = null
    }
    return result
  },

  /**
   * 根据用户名和密码查找用户
   * @param  {object} options 用户名密码对象
   * @return {object|null}         查找结果
   */
  async getOneByUserNameAndPassword( options ) {
    let _sql = `
    SELECT * from user_info
      where password="${options.password}" and name="${options.name}"
      limit 1`
    let result = await dbUtils.query( _sql )
    if ( Array.isArray(result) && result.length > 0 ) {
      result = result[0]
    } else {
      result = null
    }
    return result
  },

  /**
   * 根据用户名查找用户信息
   * @param  {string} userName 用户账号名称
   * @return {object|null}     查找结果
   */
  async getUserInfoByUserName( userName ) {

    let result = await dbUtils.select(
      'user_info',
      ['id', 'email', 'name', 'detail_info', 'create_time', 'modified_time', 'modified_time' ])
    if ( Array.isArray(result) && result.length > 0 ) {
      result = result[0]
    } else {
      result = null
    }
    return result
  },

  /**
   * 获取用户列表
   * @return {object|null}     查找结果
   */
  async getAllUser(){
    let _sql = `
    SELECT id,name,email,level from user_info where modified_time IS NULL;
    `
    let result = await dbUtils.query( _sql )
    // let result = await dbUtils.select(
    //   'user_info',
    //   ['id','email','name','level'])
    if ( Array.isArray(result) && result.length > 0 ) {
      result = result
    } else {
      result = null
    }
    return result
  },

  /**
   * 删除用户
   * @param  {string} Id 用户账号id
   * @return {object|null}     查找结果
   */
  async deleteUser(Id){
    let _sql = `
    UPDATE user_info set modified_time=NOW() WHERE id=${Id};
    `
    let result = await dbUtils.query( _sql );
    if ( result.changedRows > 0 ) {
      result = result
    } else {
      result = null
    }
    return result
  },
  
  /**
   * 根据id查询用户
   * @param  {string} Id 用户账号id
   * @return {object|null}     查找结果
   */
  async SelectUser(Id){
    let result = await dbUtils.findDataById( 'user_info', Id )
    return result
  },
  /**
   * 修改用户
   * @param  {object} model 用户数据模型
   * @return {object}       mysql执行结果
   */
  async edit ( model ,Id) {
    let _sql = `
    UPDATE user_info set ${model} WHERE id=${Id};
    `
    let result = await dbUtils.query( _sql );
    // let result = await dbUtils.updateData( 'user_info', model,Id )
    if ( result.changedRows > 0 ) {
      result = result
    } else {
      result = null
    }
    return result
  },
}


module.exports = user
