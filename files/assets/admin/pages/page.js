import {id} from "./../id.js"
import {pageForm} from "./pageForm.js"

export function newPage(){
    return document.getElementById(id).innerHTML = `
    <div class="main-content-inner">
        <div class="page-heading flex justify-between items-center"><div class="flex justify-start space-x-1 items-center"><a href="#/admin/pages" class="breadcrum-icon border block border-border rounded mr-075"><span class="flex items-center justify-center"><svg class="text-icon" viewBox="0 0 20 20" focusable="false" aria-hidden="true"><path d="M17 9H5.414l3.293-3.293a.999.999 0 1 0-1.414-1.414l-5 5a.999.999 0 0 0 0 1.414l5 5a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L5.414 11H17a1 1 0 1 0 0-2z"></path></svg></span></a>
            <div class="self-center"><h1 class="page-heading-title">Create A New page</h1></div></div>
        <div class="flex justify-end space-x-1 items-center"></div>
        </div>
        ${pageForm()}
    </div>
    ` 
}

export function editPage(){
    return document.getElementById(id).innerHTML = `
    <div class="main-content-inner">
        <div class="page-heading flex justify-between items-center"><div class="flex justify-start space-x-1 items-center"><a href="#/admin/pages" class="breadcrum-icon border block border-border rounded mr-075"><span class="flex items-center justify-center"><svg class="text-icon" viewBox="0 0 20 20" focusable="false" aria-hidden="true"><path d="M17 9H5.414l3.293-3.293a.999.999 0 1 0-1.414-1.414l-5 5a.999.999 0 0 0 0 1.414l5 5a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L5.414 11H17a1 1 0 1 0 0-2z"></path></svg></span></a>
            <div class="self-center"><h1 class="page-heading-title">Editing page</h1></div></div>
        <div class="flex justify-end space-x-1 items-center"></div>
        </div>
        ${pageForm()}
    </div>
    ` 
}

function fetchPages(){
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
            <a class="hover:underline font-semibold" href="#/admin/pages/edit?=1e2a1152-1e14-4ba9-b11e-de9d41a88a65">Bipin Yadav</a>
            </div>
        </td>
       
        <td><div><span>Mar 10, 2024</span></div></td>
        <td>
            <div class="flex justify-center">
                <span class="success dot" style="width:1.2rem;height:1.2rem"></span>
            </div>
        </td>
        
    </tr>
    `
}

export function allPage(){
    return  document.getElementById(id).innerHTML =`
        <div class="main-content-inner">
            <div class="page-heading flex justify-between items-center">
                <div class="flex justify-start space-x-1 items-center"><a href="#/admin" class="breadcrum-icon border block border-border rounded mr-075"><span class="flex items-center justify-center"><svg class="text-icon" viewBox="0 0 20 20" focusable="false" aria-hidden="true"><path d="M17 9H5.414l3.293-3.293a.999.999 0 1 0-1.414-1.414l-5 5a.999.999 0 0 0 0 1.414l5 5a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L5.414 11H17a1 1 0 1 0 0-2z"></path></svg></span></a>
                <div class="self-center"><h1 class="page-heading-title">All Pages</h1></div></div><div class="flex justify-end space-x-1 items-center"></div>
                <div class="flex justify-end space-x-1 items-center"><a href="#/admin/pages/new" class="button primary"><span>New Page</span></a></div>
            </div>
            <div class="card-shadow">
                <table class="listing sticky">
                    <thead>
                        <tr>
                            <th class="column"><div class="table-header id-header"><div class="title" style="margin-bottom:1rem"><span>User Name</span></div><div class="filter" style="width:15rem"><div class="form-field-container null"><div class="field-wrapper flex flex-grow"><input type="text" placeholder="Page Title" value=""><div class="field-border"></div></div></div></div></div></th>
                        </tr>
                    </thead>
                    <tbody><tr></tr>
                        ${fetchPages()}
                    </tbody>
                </table>
            
                <div class="pagination flex px-2"><div class="flex justify-between w-full space-x-1 mt-1 mb-1"><div class="flex space-x-1"><div class="self-center"><span>Show</span></div><div class="limit"><div class="" style="width:5rem"><div class="form-field-container null"><div class="field-wrapper flex flex-grow"><input type="text" value=""><div class="field-border"></div></div></div></div></div><div class="self-center"><span>per page</span></div></div><div class="flex space-x-1"><div class="current" style="width:5rem"></div><div class="next self-center"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></div><div class="last self-center"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" width="20" height="20"><path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg></a></div><div class="self-center"><span>total<!-- --> records</span></div></div></div></div>
            </div>
        </div>
    `
}