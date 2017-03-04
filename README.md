# node-koa-seed
Seed project form nodejs koa

#node-koa-server
##关于
该模块使用了KOA和KOA-ROUTER作为基础框架，并通过作用es7的decoractor特性对KOA-ROUTER进行进一步的封装，
进行实现类似Spring-mvc或者.net webapi风格的路由定制

##环境要求
nodejs 版本必需在7以上

###如何跑起来

```
npm install 
npm i koa
npm run build
node app
```

##代码示例
* controller书写风格

```javascript
@routePrefix('template')
export class TemplateConteroller{
    @route('load/:id') //http://localhost:3000/template/load/(id)
    async getTemplate({id}){
        id = await timeout(id);
        return id;
    }

    @route('loadUsers/:filter') //http://localhost:3000/template/loadUsers/(filter)
    async users({filter}){
        let vv = await timeout([{id:"01",name:'bowen'},{id:'02',name:'owen'}]);
        return vv;
    }

    @route('loadTpls','get', false/*是否为异步方法，否表示为同步方法*/) //http://localhost:3000/template/loadTpls
    getTemplates(){
        return `<div>helel</div>`;
    }
}
```
* @routePrefix 给class标注的路由前缀  @routePrefix（route）
    * route 路由使用的根路径，内部方法的路由都会把这个路径加在前面，这个参数可以为空，效果等同于没有声明@routePrefix。
* @route 给方法票注的路由 @route(route, method, isAsync)
    * route 路由使用的路径
    * method http method 如 get , post ,put ,delete，如果我们不设置这个参数，程序会自动根据方法名来获取（参考：route:route.js代码说明)
    * isAsync 默认为true,当前是否为asnyc方法， 如果不是把这个参数设置成false.


* app 的代码

```javascript
import "babel-polyfill";
import {routePrefix,route, koaRouter} from './router';
const Koa = require('Koa');
const app = new Koa();

//import controllers to app, we should do this or our controller will not execute!
//把要使用到的controller引到当前app中，我们必须这样做，否则controller被不会被加载运行。
import './demo/template.controller';
import './demo/user.controller';


app.use(koaRouter.routes())
   .use(koaRouter.allowedMethods());

console.log('server started : http://localhost:3000/');
app.listen(3000);
```


by bowen liang 2017-3-4