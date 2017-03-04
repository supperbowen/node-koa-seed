import {routePrefix, route, koaRouter} from '../router';


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

    @route('loadTpls','get', false) //http://localhost:3000/template/loadTpls
    getTemplates(){
        return `<div>helel</div>`;
    }
}

function timeout(testVal) {
  return new Promise((resolve) => {
    setTimeout(function(){
        resolve(testVal);
    }, 10);
  });
}

koaRouter.add(TemplateConteroller);