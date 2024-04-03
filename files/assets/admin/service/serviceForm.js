
import { categoryInput } from "../category/category.js";
import {fetchFunction,createAlert} from "../modules.js"

export function serviceForm(data){
    let editor;
    const shipping_detail = {operator:undefined,price:undefined}
<<<<<<< HEAD
    /*setTimeout(function(){
    
        ClassicEditor
=======
    setTimeout(function(){
       /* ClassicEditor
>>>>>>> 18d71d494ef5311247276ab6d1df06bb2ed1d9b7
            .create( document.querySelector( '#editor' ) )
            .then( newEditor => {
                
                editor = newEditor;
                if(data !== undefined){
<<<<<<< HEAD
                    editor.setData(data.description ? data.description : '')
=======
                    editor.setData(data.description)
>>>>>>> 18d71d494ef5311247276ab6d1df06bb2ed1d9b7
                }
            } )
            .catch( error => {
                console.error( error );
            } );*/
        $("#ship_detail").click(function(e){
            if($(this).html().includes('plus')){
               
                shipping_detail.operator = $("#shipping_detail_operator").value()
                shipping_detail.price = $("#shipping_detail_price").value()
                $(this).html(` <i class="fa-solid fa-minus"></i> Remove`)
            }else{
                shipping_detail.operator = undefined
                shipping_detail.price = undefined
                $(this).html(` <i class="fa-solid fa-plus"></i> Add`)
            }
            
            
        })
        $("#free_shipping").click(function(e){
            console.log(e)
            if($(this).prop('checked')===true){
                document.getElementById("free_shipping_table").style.display = 'none'
            }else{
                document.getElementById("free_shipping_table").style.display = 'block'
            }
        })
        $("#serviceForm").submit(function(e){
            e.preventDefault()
            var myform = $("#serviceForm").serialize({ hash: true })
            let fom = new URLSearchParams(myform)
            var categories = document.getElementById("category_id").value
            categories = categories.split(",")
            
            //email,password
            var payload = {
                name: fom.getAll("service")[0],
                key:fom.getAll("key")[0],
                description: editor.getData(),
                shipping:fom.getAll('free_shipping')[0],
                shipping_detail:shipping_detail,
                type:fom.getAll('service_type')[0],
                discount:fom.getAll("discount_amount")[0],
                categories: categories,
                image:fom.getAll("image")[0],
                
            };
            if(data !== undefined){
                payload.id = data._id
            }
            console.log(payload)
            fetchFunction("/api/models/admin/newService",payload,"post",function(data){
                
                createAlert(data)
            })
            return false;
        })
    },999)*/
    return `
        <form id="serviceForm" action="#/api/services">
            <div class="grid grid-cols-1 gap-2">
                <div class="card shadow">
                    <div class="flex justify-between card-header"><h2 class="card-title">General</h2></div>
                    <div class="card-section border-b box-border">
                        <div class="card-session-content pt-lg">
                            <div class="">
                                <div class="form-field-container null">
                                    <label for="service">service name</label>
                                    <div class="field-wrapper flex flex-grow">
                                        <input type="text" name="service" placeholder="Enter service code" value=${data ? data.service.name : ''}><div class="field-border"></div>
                                    </div>
                                </div>
                                <div class="form-field-container null">
                                    <label for="service">service url key</label>
                                    <div class="field-wrapper flex flex-grow">
                                        <input type="text" name="key" placeholder="Enter service key service_name" value=${data ? data.service.key : ''}><div class="field-border"></div>
                                    </div>
                                </div>
                                <div class="form-field-container null">
                                    <label for="description">Description</label>
                                    <div class="ckeditor" id="editor"></div>
                                </div>
                               
                                <div class="grid grid-cols-3 gap-2 form-field-container">
                                    <div>
                                    <div class="form-field-container null">
                                        <label for="discount_amount">Discount amount</label>
                                        <div class="field-wrapper flex flex-grow">
                                            <input type="text" name="discount_amount" placeholder="Discount amount" value=${data? data.service.discount : ''}>
                                            <div class="field-border"></div>
                                        </div>
                                    </div>
                                    </div>
                                <div>
                                <div class="form-field-container null">
                                    <label for="start_date">Start date</label>
                                    <div class="field-wrapper flex flex-grow">
                                        <input type="text" class="form-field flatpickr-input" id="start_date" name="start_date" value="" readonly="readonly">
                                        <div class="field-border"></div>
                                        <div class="field-suffix"><svg style="width:1.8rem;height:1.8rem" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"></path></svg></div>
                                    </div>
                                </div>
                            </div>
                        <div>
                        <div class="form-field-container null">
                            <label for="end_date">End date</label>
                            <div class="field-wrapper flex flex-grow">
                                <input type="text" class="form-field flatpickr-input" id="end_date" name="end_date" value="" readonly="readonly">
                                    <div class="field-border"></div>
                                    <div class="field-suffix"><svg xmlns="http://www.w3.org/2000/svg" fill="none" style="width:1.8rem;height:1.8rem" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"></path></svg></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-field-container null">
                    <div class="field-wrapper radio-field">
                        <label for="free_shipping"><input type="checkbox" id="free_shipping" name="free_shipping"  value="0"><span class="checkbox-checked"><span></span></span><span class="pl-05">Free Pickup?</span><input type="hidden" value="0"></label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="card shadow">
    <div class="flex justify-between card-header"><h2 class="card-title">Service Type</h2></div>
        <div class="card-section border-b box-border">
            <div class="card-session-content pt-lg">
                <div>
                    <div>
                        <div class="">
                            <div class="form-field-container null">
                                <div class="field-wrapper radio-field">
                                    <div><label for="service_type0" class="flex"><input type="radio" name="service_type" id="service_type0" value="full"><span class="radio-checked"><span></span></span><span class="pl-1">Full service</span></label></div>
                                    <div><label for="service_type1" class="flex"><input type="radio" name="service_type" id="service_type1" value="custom"><span class="radio-checked"><span></span></span><span class="pl-1">Custom Service</span></label></div>
                                    <div><label for="service_type2" class="flex"><input type="radio" name="service_type" id="service_type2" value="premium"><span class="radio-checked"><span></span></span><span class="pl-1">Premium Service</span></label></div>
                                 </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-1"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="grid grid-cols-3 gap-x-2 grid-flow-row ">
        <div class="col-span-2 grid grid-cols-1 gap-2 auto-rows-max">
            <div class="card shadow">
                <div class="flex justify-between card-header"><h2 class="card-title">Service Categories</h2></div>
                <div class="card-section border-b box-border">
                    <div class="card-session-content pt-lg">
                        <div>
                            
                        <div style="margin-top:1rem;margin-bottom:1rem">
                            
                            <table class="table table-auto" id="free_shipping_table" style="margin-top:0">
                                <thead>
                                    <tr>
                                        <th><span>Free Shipping</span></th><th><span>Operator</span></th>
                                        <th><span>Price</span></th>
                                        <th> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="form-field-container dropdown">
                                                <div class="field-wrapper">
                                                    <select name="condition[required_products][0][key]" class="form-control">
                                                        <option value="category">Shipping</option>
                                                       
                                                    </select>
                                                    <div class="field-border"></div>
                                                    <div class="field-suffix"><svg viewBox="0 0 20 20" width="1rem" height="1.25rem" focusable="false" aria-hidden="true"><path d="m10 16-4-4h8l-4 4zm0-12 4 4H6l4-4z"></path></svg></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-field-container dropdown">
                                                <div class="field-wrapper">
                                                    <select name="shipping_operator" id="shipping_detail_operator" class="form-control">
                                                        <option value="Operator1">Operator1</option>
                                                        <option value="Operator2">Operator2</option>
                                                    </select>
                                                    <div class="field-border"</div>
                                                    <div class="field-suffix"><svg viewBox="0 0 20 20" width="1rem" height="1.25rem" focusable="false" aria-hidden="true"><path d="m10 16-4-4h8l-4 4zm0-12 4 4H6l4-4z"></path></svg></div>
                                                </div>
                                            </div>
                                        </td>
                                        
                                        <td>
                                            <div >
                                                <div class="form-field-container null">
                                                    <div class="field-wrapper flex flex-grow">
                                                        <input type="text" name="category_price" id="shipping_detail_price" placeholder="Price" value="">
                                                            <div class="field-border"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <a href="javascript:void(0)" id="shipping_detail"  class="text-critical">
                                                <i class="fa-solid fa-plus"></i> Add
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="mt-1 flex justify-start">
                                <div class="items-center flex"><svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg></div>
                                <div class="pl-1">
                                   
                                    ${categoryInput()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-span-1 grid grid-cols-1 gap-2 auto-rows-max">
        <div class="card shadow">
            <div class="flex justify-between card-header"><h2 class="card-title">Service Banner</h2></div>
            <div class="card-section border-b box-border">
                <div class="card-session-content pt-lg">
                    <div class="form-field-container null">
                        <label for="categoryImageUpload" class="flex flex-col justify-center image-uploader"><div class="uploader-icon flex justify-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></div><div class="flex justify-center">
                        <button type="button" onclick="document.getElementById('categoryImageUpload').click()" class="button default"><span>Add image</span></button>
                        </div><div class="flex justify-center mt-1"><span style="color:#6d7175;font-size:1.2rem">click to upload an image</span></div></label>
                        <input type="hidden" value="" name="image">
                        <div class="invisible" style="width:1px;height:1px"><input type="file" id="categoryImageUpload"></div>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
        </div>
        </div>
        <div class="form-submit-button flex border-t border-divider mt-15 pt-15 justify-between">
            <button type="button" class="button critical outline"><span>Cancel</span></button>
            <button type="submit" class="button primary"><span>Save</span></button>
        </div>
        
        </form>
    `
}