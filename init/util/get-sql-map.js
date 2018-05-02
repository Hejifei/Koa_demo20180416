const fs = require('fs')
const walkFile = require('./walk-file')

/**
 * 获取sql目录下的文件目录数据
 * @return {object} 
 */
function getSqlMap () {
  // __dirname：全局变量，存储的是文件所在的文件目录
  // __filename：全局变量，存储的是文件名
  let basePath = __dirname
  basePath = basePath.replace(/\\/g, '\/')
  
  let pathArr = basePath.split('\/')
  pathArr = pathArr.splice( 0, pathArr.length - 1 )
  basePath = pathArr.join('/') + '/sql/'
  
  let fileList = walkFile( basePath, 'sql' )
  return fileList
}

module.exports = getSqlMap