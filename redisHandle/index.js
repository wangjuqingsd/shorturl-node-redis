/**
 * Created with JetBrains WebStorm.
 * User: Kevin.yt90
 * Date: 14-2-11
 * Time: 上午10:04
 * 写入 或者 提取 URL 用
 */
var redis = require("redis"),
    client = redis.createClient();
var util = require('util');
// if you'd like to select database 3, instead of 0 (default), call
// client.select(3, function() { /* ... */ });

client.on("error", function (err) {
    console.log("Error " + err);
});

exports.writeIn = function(obj){
    client.hset('url',obj.key, obj.value);
};
exports.jump = function(str,req,res){
    client.hget('url',str,function(err,result){
        if(err || result===null) res.render('found'); return "";
        res.render('redirect',{url:result});
    });
}