import {id} from "./id.js"
import {Login,Register,Logout} from "./login/login.js"
import { Dashboard } from "./dashboard/dashboard.js"; 
import { Routes } from "./routes.js"
import {Session} from "./session.js"
import { newProduct,allProducts} from "./product/products.js"
import {newService,allServices,editService } from "./service/service.js"
import { allAttribute,newAttribute } from "./attribute/attribute.js";
import {newCategory,allCategory,editCategory} from "./category/category.js"
import {newCollection,allCollection} from "./collection/collection.js"
import {editCollection} from "./collection/editCollection.js"
import {editProduct} from "./product/editProduct.js"
import {allSetting} from "./settings/settings.js"
import {allOrder} from "./order/order.js"
import { editOrder } from "./order/orderDetail.js";
import { allPage,newPage,editPage } from "./pages/page.js";
import { allCustomer,newCustomer,editCustomer } from "./customer/customer.js";
import {fetchFunction} from "./modules.js"
import { newWorker,allWorker } from "./mechanic/worker.js";
import { shipOrder } from "./order/orderDelivery.js";

modules.shipOrder = shipOrder

function setFetchData(res, urlPath,next){
   
    let srch = res.search ? res.search : undefined
     let html = next();
     document.title = res.title;
     window.history.pushState({"html":html,"pageTitle":res.title},"", urlPath);
 }

 window.addEventListener("popstate", (e) => {
    if(e.state){
        document.getElementById("content").innerHTML = e.state.html;
        document.title = e.state.pageTitle;
    }
});

window.addEventListener("hashchange", (e) => {
    var url = window.location.hash
    
    url = url.replace("#","")
    routesHandler(url)
    
});

window.addEventListener("load",function(){
	var url = window.location.pathname
	
	if(url.includes("#")){
		url = url.split("#")
		url = url[url.length-1]
	}
	
	routesHandler(url)
	
})



function routesHandler(url){
	if(document.getElementById(id)===null){
		document.getElementById("content-wrapper").innerHTML += `
			<div id="${id}"></div> 
		`
	}
	if(!url.includes("/")){url  = "/"+url}
    var arr = url.split("/")
    let title = arr[arr.length-1] +" "+ arr[arr.length-2] 
    var search = url.split("?")
    
    if(search.length > 1){
        url = search[0]
        search = search[1]       
    }else{
        search = null
    }
    console.log(url,Routes[url],search)
    
    if(Routes[url] !== undefined){
        var fn = Routes[url]
        
        setFetchData({title:title.toUpperCase(),search:search},url,function(ed){
            console.log(ed)
            try{eval(fn+`('${search}')`)}catch(e){console.log(e);Dashboard(ed)}
        })
    }else{
        setFetchData({title:title.toUpperCase(),search:search},url,Dashboard)
    }
}
module.fetchFunction = fetchFunction
const session = new Session()
if(session.get("token") ===false &&session.get("company")===false){
    session.delete()
    if(window.location.href.includes("login") || window.location.href.includes("register")){
        routesHandler(window.location.pathname)
        
    }else{
        window.location.hash = "/login"
    }   
    
}