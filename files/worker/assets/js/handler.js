const session = new Session()
session.set("handler=false")
const home = document.getElementById("page").innerHTML
if(session.get("handler")==false){
    loginForm()
}else{
    fetchFunction("/api/models/handler/getAssigned",{},"post",handlerDashboard)
}

function loginForm(){
    return document.getElementById("page").innerHTML = `
        <section class="vh-100" style="">
        <div class="container py-5 h-100">
        <div class="row d-flex align-items-center justify-content-center h-100">
            <div class="col-md-8 col-lg-7 col-xl-6">
                <img src="https://th.bing.com/th?id=OIP.1NkHSnN0OGo6Kx7YK6Se1QHaHa&w=250&h=250&c=8&rs=1&qlt=30&o=6&dpr=1.3&pid=3.1&rm=2"
                class="img-fluid" alt="Phone image">
            </div>
            <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                <form id="loginForm">
                <!-- Email input -->
                <div class="form-outline mb-4">
                    <input type="text" name="name" id="form1Example13" class="form-control form-control-lg" />
                    <label class="form-label" for="form1Example13">Email or Username</label>
                </div>

                <!-- Password input -->
                <div class="form-outline mb-4">
                    <input type="password" name="password" id="form1Example23" class="form-control form-control-lg" />
                    <label class="form-label" for="form1Example23">Password</label>
                </div>

                <button type="submit" class="btn btn-primary btn-lg btn-block">Sign in</button>

                
                </form>
            </div>
            </div>
        </div>
        </section>`
}
$(document).ready(function(){
    $("#loginForm").submit(function(e){
        e.preventDefault()
        var myform = $("#loginForm").serialize({ hash: true })
        let fom = new URLSearchParams(myform)
        //email,password
        var payload = {
            name: fom.getAll("name")[0],
            password: fom.getAll("password")[0],
        };
		console.log(payload)
        fetchFunction("/api/models/handler/login",payload,"post",function(data){
			console.log(data)
            if(data.message){
                createAlert(data.message)
            }
            if(data.token){
                session.set("handler="+data.token)
                fetchFunction("/api/models/handler/getAssigned",{},"post",handlerDashboard)
            }
        })
        return false
    })
})

function activateBook(id,el){
    fetchFunction("/api/models/handler/makeEntry",{book:id},"post",function(data){
        if(data.message){
			if(data.message.includes("success")){
				el.innerText = "Activated"
			}
            createAlert(data.message)
        }
		
    })
}

function handlerDashboard(datas,type){
	console.log(datas)
	if(type === undefined){type = false}
    document.getElementById("page").innerHTML = home
    const body = document.getElementById("listings")
    body.innerHTML = ""
    for(var data of datas.bookings.data){
		console.log(data.book,data.active)
        if(data.book.complete === type){
            body.innerHTML += `
            <div class="col-xl-9 col-lg-8 col-md-12" style="min-width: 186px;">
                <div class="row">
                
                <div class="col-xl-6 col-lg-6 col-md-6 d-flex">
                <div class="card ctm-border-radius shadow-sm flex-fill">
                <div class="card-header">
                <h4 class="card-title mb-0">${data.service.name ? data.service.name : "N/A"}</h4>
                </div>
                <div class="card-body">
                <p class="card-text">${data.service.description ? data.service.description : "Description"}</p>
                <div class="mt-2">
                <span class="avatar" data-toggle="tooltip" data-placement="top" title="Richard Wilson"><img src="assets/img/profiles/img-10.jpg" alt="Richard Wilson" class="img-fluid"></span>
                <a href="#activate" class="btn btn-theme button-1 ctm-border-radius text-white float-right text-white" onclick="activateBook('${data.book._id}',this)">${data.active.complete ?'Mark as Complete': 'Completed' }</a>
                </div>
                </div>
                </div>
                </div>
                </div>
            </div>
            `
        }
    }
}

function newOrders(){
	fetchFunction("/api/models/handler/getAssigned",{},"post",function(data){
		handlerDashboard(data, false)
	})
}
function completedOrders(){
	fetchFunction("/api/models/handler/getAssigned",{},"post",function(data){
		handlerDashboard(data, true)
	})
}