import { categoryInput } from "./category.js";
import {createAlert, fetchFunction} from "../modules.js"

export function categoryForm(data){
    let editor;
    setTimeout(function(){
        ClassicEditor
            .create( document.querySelector( '#editor' ) )
            .then( newEditor => {
                editor = newEditor;
                if(data){
                    editor.setData(data.description)
                }
            } )
            .catch( error => {
                console.error( error );
            } );
        $("#categoryForm").submit(function(e){
            e.preventDefault()
            var myform = $("#categoryForm").serialize({ hash: true })
            let fom = new URLSearchParams(myform)
            //email,password
            var payload = {
                name: fom.getAll("name")[0],
                price: fom.getAll("category_price")[0],
                price_type:fom.getAll("price_type")[0],
                description: editor.getData(),
                status: fom.getAll("category_status")[0],
                
            };
            if(data !== undefined){
                payload._id = data._id
                payload.update = true
            }
            console.log(payload)
            fetchFunction("/api/models/admin/newCategory",payload,"post",function(data){
                console.log(data)
                createAlert(data.message)
            })
            return false
        })
        
    },999)
    return `
    <form id="categoryForm" action="#/api/categories" method="POST">
        <div class="grid grid-cols-3 gap-x-2 grid-flow-row ">
            <div class="col-span-2 grid grid-cols-1 gap-2 auto-rows-max">
                <div class="card shadow">
                    <div class="flex justify-between card-header"><h2 class="card-title">General</h2></div>
                    <div class="card-section border-b box-border">
                        <div class="card-session-content pt-lg">
                            <div class="">
                                <div class="form-field-container null">
                                    <label for="name">Name</label><div class="field-wrapper flex flex-grow"><input type="text" name="name" placeholder="Name" value=${data ? data.name : ""}><div class="field-border"></div></div>
                                </div>
                                <div class="mt-15 relative"><div class="mb-1">Parent category</div>
                                ${categoryInput()}
                                </div><br>
                                <div class="mt-15 relative"><div class="mb-1">Description</div>
                                <div class="ckeditor" id="editor"></div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
            <div class="col-span-1 grid grid-cols-1 gap-2 auto-rows-max">
                <div class="card shadow">
                    <div class="flex justify-between card-header"><h2 class="card-title">Category Price</h2></div>
                    <div class="card-section border-b box-border">
                        <div class="card-session-content pt-lg">
                            <div class="form-field-container null">
                            
                                 <label for="price"Price</label><div class="field-wrapper flex flex-grow">
                                 <input type="text" name="category_price" placeholder="Price" value=${data ? data.price : ""}><div class="field-border"></div></div>
                    
                            </div>
                            <div class="form-field-container null">
                                <div class="field-wrapper radio-field">
                                    <div><label for="price0" class="flex">
                                        <input type="radio" name="price_type" id="price0" value="0" checked=""><span class="radio-checked"><span></span></span><span class="pl-1">Total</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label for="price1" class="flex"><input type="radio" name="price_type" id="price1" value="1"><span class="radio-checked"><span></span></span><span class="pl-1">Single</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="card shadow">
                    <div class="flex justify-between card-header"><h2 class="card-title">Status</h2></div>
                    <div class="card-section border-b box-border">
                        <div class="card-session-content pt-lg">
                            <div class="form-field-container null">
                                <label for="status">Manage Stock</label>
                                <div class="field-wrapper radio-field">
                                    <div><label for="status0" class="flex">
                                        <input type="radio" name="category_status" id="stocks0" value="0" checked=""><span class="radio-checked"><span></span></span><span class="pl-1">Enabled</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label for="status1" class="flex"><input type="radio" name="category_status" id="stocks1" value="1"><span class="radio-checked"><span></span></span><span class="pl-1">Disabled</span>
                                        </label>
                                    </div>
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