/**
 * Created with JetBrains WebStorm.
 * User: Kevin.yt90
 * Date: 14-2-11
 * Time: 上午9:42
 * 传入参数，MD5加密后，截取后6位字符串，生成对象 返回
 */
var funcs = require('../funcs');
var rh = require('../redisHandle');
var domainSet = 'http://localhost:3000/go/';
exports.sendIn = function(str){
    var obj = {
        key:funcs.md5(str).substr(0,7),
        value : str
    };
    rh.writeIn(obj);
    return domainSet+obj.key;
};
exports.sendOut = function(str,req,res){
    rh.jump(str,req,res);
};