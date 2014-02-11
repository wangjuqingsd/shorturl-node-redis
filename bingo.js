/**
 * Created with JetBrains WebStorm.
 * User: Kevin.yt90
 * Date: 14-2-11
 * Time: 上午11:08
 * 追加测试数据
 */
 var rock = require('./rock');
 var funcs = require('./funcs');
 var limit = 3
setInterval(function(){
    for(var i=0;i<200;i++){
        rock.sendIn('http://baidu.com/'+(new Date().getTime()+i));
    }
    console.log(new Date());
},10);