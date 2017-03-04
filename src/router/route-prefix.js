var router = require('koa-router');
import {koaRouter} from './koa-router';

/**
 * 根路由设置，这里不是koa-router 的 prefix
 * 
 * route 参数为选填，如果没有route参数则与没有使用这个修饰器效果一样
 * route参数的前面与后面不能加/，中间可以加 如 @routePrefix('user'),@routePrefix('user/list')
 */
export function routePrefix(route){
   return function (target){      
       if(typeof target==='function'){     
           target.prototype.router = {prefix: route};
       }
    }
}

