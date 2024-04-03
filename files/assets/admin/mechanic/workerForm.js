import { categoryInput } from "../category/category.js";
import {fetchFunction,createAlert} from "../modules.js"


export function workerForm(){
    setTimeout(function(){
        $("#workerForm").submit(function(e){
            e.preventDefault()
            var myform = $("#workerForm").serialize({ hash: true })
            let fom = new URLSearchParams(myform)
            var payload = {
                email:fom.getAll("workerEmail")[0],
                name:fom.getAll("workerName")[0],
                password:fom.getAll("workerPassword")[0],
                status:fom.getAll("workerStatus")[0],
            }
            console.log(payload)
            fetchFunction("/api/models/admin/newWorker",payload,"post",function(data){
                console.log(data)
                createAlert(data.message)
                
            })
            return false
        })
    },100)
    return `
        <form id="workerForm" action="#/api/pages" method="POST">
               <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                    <input type="email" class="form-control" name="workerEmail" id="inputEmail3" placeholder="Email">
                </div>
                </div>
                <div class="form-group row">
                <label for="inputName3" class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" name="workerName" id="inputName3" placeholder="Name  ">
                </div>
                </div>
                <div class="form-group row">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" name="workerPassword" id="inputPassword3" placeholder="Password">
                </div>
                </div>
                <fieldset class="form-group">
                <div class="row">
                    <legend class="col-form-label col-sm-2 pt-0">Statuss</legend>
                    <div class="col-sm-10">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="workerStatus" id="workerStatus1" value="option1" checked>
                        <label class="form-check-label" for="workerStatus1">
                        Enabled
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="workerStatus" id="workerStatus2" value="option2">
                        <label class="form-check-label" for="workerStatus2">
                        Disabled
                        </label>
                    </div>
                    
                    </div>
                </div>
                </fieldset>
                 
                <div class="form-group row">
                <div class="col-sm-10">
                    <button type="submit" class="btn btn-primary">Create</button>
                </div>
                </div>
            
        </form>`
}