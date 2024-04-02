import {id} from "./../id.js"
import {productForm} from "./productForm.js"


export function editProduct(){
    return document.getElementById(id).innerHTML =`
        <div class="main-content-inner">
            <div class="page-heading flex justify-between items-center"><div class="flex justify-start space-x-1 items-center"><a href="#/admin/collections" class="breadcrum-icon border block border-border rounded mr-075"><span class="flex items-center justify-center"><svg class="text-icon" viewBox="0 0 20 20" focusable="false" aria-hidden="true"><path d="M17 9H5.414l3.293-3.293a.999.999 0 1 0-1.414-1.414l-5 5a.999.999 0 0 0 0 1.414l5 5a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L5.414 11H17a1 1 0 1 0 0-2z"></path></svg></span></a>
                <div class="self-center"><h1 class="page-heading-title">Edit Product</h1></div></div>
            <div class="flex justify-end space-x-1 items-center"></div>
            </div>
            ${productForm(true)}
            
        </div>
            
    `
}