var koaRouter = new require('koa-router')();

koaRouter.add = function(Controller){
  if(typeof controller === 'function'){
    new Controller();
  }
};

export {koaRouter};
