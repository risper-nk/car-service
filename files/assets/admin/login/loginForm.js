import {fetchFunction,createAlert} from "../modules.js"
export function loginForm(){
    setTimeout(function(){
        $("#adminLoginForm").submit(function(e){
            console.log(e)
            e.preventDefault()
            var myform = $("#adminLoginForm").serialize({ hash: true })
            let fom = new URLSearchParams(myform)
            //email,password
            var payload = {
                
                email: fom.getAll("email")[0],
                password: fom.getAll("password")[0],
                
            };
            fetchFunction("/api/auth",payload,"post",function(data){
                var response = data
                if(response.token){
                    document.cookie = "token="+response.token
                }
                if(response.payload){
                    document.cookie = "user="+response.token
                    
                    if(response.payload.company){
                        document.cookie = "company=True"
                        location.href = "/admin/dashboard"
                        
                    }
                }
                var alert = "success"
                if(response.status != 200){
                    alert = "error"
                }
                createAlert(response.message)
            })
            return false
        })
    },999)
    return `
        <form id="adminLoginForm" action="#/admin" onsubmit="return false;">
            <div class="form-field-container null">
                <label for="email">Email</label>
                <div class="field-wrapper flex flex-grow">
                    <input type="text" name="email" placeholder="Email" value="admin1@carservice.com">
                    <div class="field-border"></div>
                </div>
            </div>
            <div class="form-field-container null">
                <label for="password">Password</label>
                <div class="field-wrapper flex flex-grow">
                    <input type="password" name="password" placeholder="Password" value="123456">
                    <div class="field-border"></div>
                </div>
            </div>
            <div class="form-submit-button flex border-t border-divider mt-1 pt-1">
                <button type="submit" class="button primary">
                    <span>Login</span>
                </button><br>
                
            </div>
            <div class="form-submit-button flex border-t border-divider mt-1 pt-1 align-center">
             <a class="button" role="button" href="#/register">Register</a>
             </div>
        </form>
    `
}

export function registerForm(){
    setTimeout(function(){
        $("#adminForm").submit(function(e){
            console.log(e)
            e.preventDefault()
            var myform = $("#adminForm").serialize({ hash: true })
            let fom = new URLSearchParams(myform)
            //email,password
            var payload = {
                name: fom.getAll("name")[0],
                phone: fom.getAll("phone")[0],
                email: fom.getAll("email")[0],
                password: fom.getAll("password")[0],
                
            };
            fetchFunction("/api/models/admin2/createCompany",payload,"post",function(data){
                console.log(data)
                var response = data
                if(response.next){
                    document.cookie = "company=True"
                    location.href = "/"+response.next
                }
                
                var alert = "success"
                if(response.status != 200){
                    alert = "error"
                }
                createAlert(response.message)
            })
            return false
        })
    },999)
    return `
        <form id="adminForm" >
            <div class="form-field-container null">
                <label for="email">Name</label>
                <div class="field-wrapper flex flex-grow">
                    <input type="text" name="name" placeholder="Company Name" value="Shop">
                    <div class="field-border"></div>
                </div>
            </div>
            <div class="form-field-container null">
                <label for="email">Phone</label>
                <div class="field-wrapper flex flex-grow">
                    <input type="text"  name="phone" placeholder="Company Phone" >
                    <div class="field-border"></div>
                </div>
            </div>
            <div class="form-field-container null">
                <label for="email">Email</label>
                <div class="field-wrapper flex flex-grow">
                    <input type="text" name="email" placeholder="Email" placeholder="demo@evershop.io">
                    <div class="field-border"></div>
                </div>
            </div>
            <div class="form-field-container null">
                <label for="password">Password</label>
                <div class="field-wrapper flex flex-grow">
                    <input type="password" name="password" placeholder="Password"  placeholder="******">
                    <div class="field-border"></div>
                </div>
            </div>
            <div class="form-submit-button flex border-t border-divider mt-1 pt-1">
                <button type="submit" class="button primary">
                    <span>Create Account</span>
                </button><br>
                
            </div>
            <div class="form-submit-button flex border-t border-divider mt-1 pt-1">
                <a class="button" role="button" href="#/login">Login</a>
            </div>
        </form>
    `
}