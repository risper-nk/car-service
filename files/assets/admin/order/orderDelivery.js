import {editModal} from "../modal.js"
import { fetchFunction,createAlert } from "../modules.js"

export function getWorkers(id){
    fetchFunction("/api/models/admin/getWorkers",{},"post",function(data){
        document.getElementById(id).innerHTML = ""
        data.workers.map(function(datas){
            document.getElementById(id).innerHTML += `
                <option value=${datas._id}>${datas.name}</option>
            `
        })
    })
    return ''
}

export function activateForm(id){
    console.log(id)
    var myform = $("#activateForm").serialize({ hash: true })
    let fom = new URLSearchParams(myform)
    var payload = {
        handler_id: fom.getAll("carrier")[0],
        trackin_number:fom.getAll("tracking_number")[0]
    }
    
    fetchFunction("/api/models/admin/assignWorker/"+id,payload,"post",function(data){
        console.log(data)
        if(data.message){
            createAlert(data.message)
        }
        
    })
    return false
   
}
modules.activateForm = activateForm
 
export function shipOrder(id){
    console.log(id)
  
        
    editModal("shipModal","Activate Order",function(){
        return `
        <form id="activateForm"  method="POST">
            <div class="grid grid-cols-2 gap-1">
                <div>
                    <div class="form-field-container null">
                        <label for="tracking_number">Tracking number</label>
                        <div class="field-wrapper flex flex-grow">
                            <input type="text" name="tracking_number" value="">
                                <div class="field-border"></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="form-field-container dropdown null">
                        <label for="carrier">Mechanic</label>
                        <div class="field-wrapper flex flex-grow items-baseline">
                            <select class="form-field" id="carrier" name="carrier">
                                <option value="" disabled="">Please select</option>
                                ${getWorkers('carrier')}
                            </select>
                            <div class="field-border"></div>
                            <div class="field-suffix"><svg viewBox="0 0 20 20" width="1rem" height="1.25rem" focusable="false" aria-hidden="true"><path d="m10 16-4-4h8l-4 4zm0-12 4 4H6l4-4z"></path></svg></div>
                        </div>
                    </div>
                </div>
            </div>
        </form>`
    },{footer:{element:"button",type:"button",text:"ship",onclick:"modules.activateForm('"+id+"')"}})
}