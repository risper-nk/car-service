import {id} from "./../id.js"
import {categoryForm} from "./categoryForm.js"
import { fetchFunction } from "../modules.js"
export function newCategory(){
    return document.getElementById(id).innerHTML =`
    <div class="main-content-inner">
        <div class="page-heading flex justify-between items-center"><div class="flex justify-start space-x-1 items-center"><a href="#/admin/categories" class="breadcrum-icon border block border-border rounded mr-075"><span class="flex items-center justify-center"><svg class="text-icon" viewBox="0 0 20 20" focusable="false" aria-hidden="true"><path d="M17 9H5.414l3.293-3.293a.999.999 0 1 0-1.414-1.414l-5 5a.999.999 0 0 0 0 1.414l5 5a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L5.414 11H17a1 1 0 1 0 0-2z"></path></svg></span></a>
            <div class="self-center"><h1 class="page-heading-title">Create A New Category</h1></div></div>
        <div class="flex justify-end space-x-1 items-center"></div>
        </div>
        ${categoryForm()}
    </div>
        
    `
}

export function allCategory(){
    fetchFunction("/api/models/admin/getCategories",{},"post",function(data){
        const body = document.getElementById("allCategories")
        for(var data of data.categories){
            body.innerHTML += `
            <tr>
                <td style="width:2rem">
                    <div class="form-field-container null">
                        <div class="field-wrapper radio-field">
                            <label><input type="checkbox" value="0"><span class="checkbox-unchecked"></span><span class="pl-05"></span><input type="hidden" value="0"></label>
                        </div>
                    </div>
                </td>
                <td>
                    <div>
                        <a class="hover:underline font-semibold" href="#/admin/categories/edit?${data._id}">${data.name}</a>
                    </div>
                </td>
                <td>
                    <span>${data.price} </span>
                </td>
                <td>
                    <div class="flex justify-center"><span class="success dot" style="width:1.2rem;height:1.2rem"></span></div>
                </td>
                
            </tr>
            `
        }
    })
    return  document.getElementById(id).innerHTML =`
        <div class="main-content-inner">
            <div class="page-heading flex justify-between items-center">
                <div class="flex justify-start space-x-1 items-center"><a href="#/admin" class="breadcrum-icon border block border-border rounded mr-075"><span class="flex items-center justify-center"><svg class="text-icon" viewBox="0 0 20 20" focusable="false" aria-hidden="true"><path d="M17 9H5.414l3.293-3.293a.999.999 0 1 0-1.414-1.414l-5 5a.999.999 0 0 0 0 1.414l5 5a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L5.414 11H17a1 1 0 1 0 0-2z"></path></svg></span></a><div class="self-center"><h1 class="page-heading-title">All Category</h1></div></div><div class="flex justify-end space-x-1 items-center"></div>
                <div class="flex justify-end space-x-1 items-center"><a href="#/admin/category/new" class="button primary"><span>New Category</span></a></div>
            </div>
            <div class="card-shadow">
                <table class="listing sticky">
                    <thead>
                        <tr>
                            <th class="column"><div class="table-header id-header"><div class="title" style="margin-bottom:1rem"><span>Category Name</span></div><div class="filter" style="width:15rem"><div class="form-field-container null"><div class="field-wrapper flex flex-grow">
                            <input type="text" placeholder="Category Name" value=""><div class="field-border"></div></div></div></div></div></th>
                        </tr>
                    </thead>
                    <tbody id="allCategories"><tr></tr>
                        
                    </tbody>
                </table>
            
                <div class="pagination flex px-2"><div class="flex justify-between w-full space-x-1 mt-1 mb-1"><div class="flex space-x-1"><div class="self-center"><span>Show</span></div><div class="limit"><div class="" style="width:5rem"><div class="form-field-container null"><div class="field-wrapper flex flex-grow"><input type="text" value=""><div class="field-border"></div></div></div></div></div><div class="self-center"><span>per page</span></div></div><div class="flex space-x-1"><div class="current" style="width:5rem"></div><div class="next self-center"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></div><div class="last self-center"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" width="20" height="20"><path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg></a></div><div class="self-center"><span>total<!-- --> records</span></div></div></div></div>
            </div>
        </div>
    `
}

export function categoryInput(){
    setTimeout(function(){
        var coll = document.getElementById("collapsible");
        var i;

        coll.addEventListener("click", function() {
            //this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
            content.style.display = "none";
            } else {
            content.style.display = "block";
            }
        });
        var category = document.getElementById("category_id")
        category.value = ""
        var categs = document.getElementsByClassName("category_item");
        
        for (i = 0; i < categs.length; i++) {
            categs[i].addEventListener("click", function() {
                console.log(this.name)
                if(category.value.includes(this.name+",") === false){
                    category.value += this.name+","
                }else{
                    category.value = category.value.replace(this.name+",","")
                }
                if(this.innerHTML.includes("+")){
                    this.innerHTML = "" 
                   
                }else{
                    this.innerHTML = "+"
                }
                console.log(category,category.value)
            });
        }

    },999)
    fetchFunction("/api/models/admin/getCategories",{},"post",function(data){
            
        const body = document.getElementById("category_content")
        for(var data of data.categories){
            body.innerHTML += `
            <div class="flexdisplayrow">
                <span class="categoryitem flexrow">
                    ${data.name} <a href="javascript:void(0)" name="${data._id}" class="category_item">+</a>
                </span>
            </div>
            `
        }
    })
    return `
    <a href="javascript:void(0)" id="collapsible" class="text-interactive collapsible">Select category</a>
                                   
    <div class="categorycontent" id="category_content">
        
    
    </div>
    <div class="absolute top-5 left-0 right-0 bg-[#eff2f5] z-50 border rounded border-[#c9cccf] p-[10px]"><div></div></div>
    <input type="text" style="display:none;" id="category_id" name="category_id" >
    `
}