import {routePrefix, route, koaRouter} from '../router';
koaRouter.add(UserController);

@routePrefix('user')
export class UserController{
    @route() // http://localhost:3000/user
    async getUser({id}){
        let user = await timeout({id:"01",name:'bowen',xxx:id});
        return user;
    }
}

function timeout(testVal) {
  return new Promise((resolve) => {
    setTimeout(function(){
        resolve(testVal);
    }, 10);
  });
}