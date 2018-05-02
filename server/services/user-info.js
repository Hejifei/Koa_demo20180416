/**
 * 用户业务操作
 */

const validator = require('validator')
const userModel = require('./../models/user-info')
const {userCode,resmsg} = require('./../codes/user')
var url = require('url');  

const user = {

  /**
   * 创建用户
   * @param  {object} user 用户信息
   * @return {object}      创建结果
   */
  async create( user ) {
    let result = await userModel.create(user)
    return result
  },

  /**
   * 查找存在用户信息
   * @param  {object} formData 查找的表单数据
   * @return {object|null}      查找结果
   */
  async getExistOne( formData ) {
    let resultData = await userModel.getExistOne({
      'email': formData.email,
      'name': formData.userName
    })
    return resultData
  },

  /**
   * 登录业务操作
   * @param  {object} formData 登录表单信息
   * @return {object}          登录业务操作结果
   */
  async signIn( formData ) {
    let resultData = await userModel.getOneByUserNameAndPassword({
      'password': formData.password,
      'name': formData.userName})
    return resultData
  },


  /**
   * 根据用户名查找用户业务操作
   * @param  {string} userName 用户名
   * @return {object|null}     查找结果
   */
  async getUserInfoByUserName( userName ) {
    
    let resultData = await userModel.getUserInfoByUserName( userName ) || {}
    let userInfo = {
      // id: resultData.id,
      email: resultData.email,
      userName: resultData.name,
      detailInfo: resultData.detail_info,
      createTime: resultData.create_time
    }
    return userInfo
  },


  /**
   * 检验用户注册数据
   * @param  {object} userInfo 用户注册数据
   * @return {object}          校验结果
   */
  validatorSignUp( userInfo ) {
    let result = {
      success: false,
      message: '',
    }

    if ( /[a-z0-9\u4e00-\u9fa5\_\-]{6,16}/.test(userInfo.userName) === false ) {
      result.message = userCode.ERROR_USER_NAME
      return result
    }
    if ( !validator.isEmail( userInfo.email ) ) {
      result.message = userCode.ERROR_EMAIL
      return result
    }
    if ( !/[\w+]{6,16}/.test( userInfo.password )  ) {
      result.message = userCode.ERROR_PASSWORD
      return result
    }
    if ( userInfo.password !== userInfo.confirmPassword ) {
      result.message = userCode.ERROR_PASSWORD_CONFORM
      return result
    }

    result.success = true

    return result
  },


  /**
   * 获取用户列表
   * @return {object|null}     查找结果
   */
  async getUsers() {
    let resultData = await userModel.getAllUser()
    return resultData
  },

  
  /**
   * 查询某用户信息操作
   * @param  {object} formData 用户的id
   * @return {object}          用户的详细信息
   */
  async getUserDetail( formData ) {
    // 解析链接后面的id
    let id = url.parse(decodeURI(formData.request.url),true).query.id
    let resultData = await userModel.SelectUser(id )
    return resultData
  },
  /**
   * 用户信息修改保存
   * @param  {object} userInfo 用户注册数据
   * @return {object}          校验结果
   */
  async updateUser( formData ) {
    let mode = ` name='${formData.name}',email='${formData.email}',password='${formData.password}',level='${formData.level}' `
    let id = formData.id;
    let result = await userModel.edit(mode,id)
    return result
  },
  /**
   * 获取用户列表
   * @return {object|null}     查找结果
   */
  async deleteUser(formData) {
    let resultData = await userModel.deleteUser(formData.id )
    return resultData
  },
}

module.exports = user
