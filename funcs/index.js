/**
 * Created with JetBrains WebStorm.
 * User: kevin.yt90
 * Date: 14-2-11
 * Time: 上午9:47
 * 函数库
 */
var crypto = require('crypto');

/**
 * md5加密函数
 * @param str 需加密字符串
 * @returns {*} md5 加密后
 */
exports.md5 = function (str) {
    return crypto.createHash('md5').update(str).digest('hex');
};
