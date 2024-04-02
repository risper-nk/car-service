import {attributeForm} from "./attributeForm.js"
import {id} from "./../id.js"

export function newAttribute(){
    return document.getElementById(id).innerHTML =`
    <div class="main-content-inner">
        <div class="page-heading flex justify-between items-center"><div class="flex justify-start space-x-1 items-center"><a href="#/admin/attributes" class="breadcrum-icon border block border-border rounded mr-075"><span class="flex items-center justify-center"><svg class="text-icon" viewBox="0 0 20 20" focusable="false" aria-hidden="true"><path d="M17 9H5.414l3.293-3.293a.999.999 0 1 0-1.414-1.414l-5 5a.999.999 0 0 0 0 1.414l5 5a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L5.414 11H17a1 1 0 1 0 0-2z"></path></svg></span></a>
            <div class="self-center"><h1 class="page-heading-title">Create A New Attribute</h1></div></div>
        <div class="flex justify-end space-x-1 items-center"></div>
        </div>
        ${attributeForm()}
    </div>
        
    `
}

function fetchAttributes(){
    return `
    <tr>
        <td>
            <div class="form-field-container null">
                <div class="field-wrapper radio-field">
                    <label>
                        <input type="checkbox" value="0">
                        <span class="checkbox-unchecked"></span><span class="pl-05"></span>
                        <input type="hidden" value="0">
                    </label>
                </div>
            </div>
        </td>
        <td>
            <div>
                <a class="hover:underline font-semibold" href="#/admin/attributes/edit/4a0eeaca-3162-4c64-9791-58e22b25a047">Brand</a>
            </div>
        </td>
        <td>
            <div class="">
                <div>
                    <a href="#" class="text-interactive hover:underline">hahaha</a>
                </div>
            </div>
        </td>
        <td>select</td>
        <td>
            <div class="nodejscart-switch"><div><span>No</span></div></div>
        </td>
        <td><div class="nodejscart-switch"><div><span>Yes</span></div></div></td>
    </tr>
    `
}

export function allAttribute(){
    return  document.getElementById(id).innerHTML =`
        <div class="main-content-inner">
            <div class="page-heading flex justify-between items-center">
                <div class="flex justify-start space-x-1 items-center"><a href="#/admin" class="breadcrum-icon border block border-border rounded mr-075"><span class="flex items-center justify-center"><svg class="text-icon" viewBox="0 0 20 20" focusable="false" aria-hidden="true"><path d="M17 9H5.414l3.293-3.293a.999.999 0 1 0-1.414-1.414l-5 5a.999.999 0 0 0 0 1.414l5 5a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L5.414 11H17a1 1 0 1 0 0-2z"></path></svg></span></a><div class="self-center"><h1 class="page-heading-title">All Attributes</h1></div></div><div class="flex justify-end space-x-1 items-center"></div>
                <div class="flex justify-end space-x-1 items-center"><a href="#/admin/attributes/new" class="button primary"><span>New Attribute</span></a></div>
            </div>
            <div class="card-shadow">
                <table class="listing sticky">
                    <thead>
                        <tr>
                            <th class="column"><div class="table-header id-header"><div class="title" style="margin-bottom:1rem"><span>Attribute Name</span></div><div class="filter" style="width:15rem"><div class="form-field-container null"><div class="field-wrapper flex flex-grow"><input type="text" placeholder="Product Name" value=""><div class="field-border"></div></div></div></div></div></th>
                        </tr>
                    </thead>
                    <tbody><tr></tr>
                        ${fetchAttributes()}
                    </tbody>
                </table>
            
                <div class="pagination flex px-2"><div class="flex justify-between w-full space-x-1 mt-1 mb-1"><div class="flex space-x-1"><div class="self-center"><span>Show</span></div><div class="limit"><div class="" style="width:5rem"><div class="form-field-container null"><div class="field-wrapper flex flex-grow"><input type="text" value=""><div class="field-border"></div></div></div></div></div><div class="self-center"><span>per page</span></div></div><div class="flex space-x-1"><div class="current" style="width:5rem"></div><div class="next self-center"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></div><div class="last self-center"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" width="20" height="20"><path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg></a></div><div class="self-center"><span>total<!-- --> records</span></div></div></div></div>
            </div>
        </div>
    `
}