import {id} from "./../id.js"
import {settingTab} from "./settingForms.js"

export function navigation(){
    return `
    <div class="setting-page-menu" style="max-width:168px;">
        <div class="card shadow">
            <div class="card-section border-b box-border">
                <div class="flex justify-between card-section-header mb-1">
                    <h3 class="card-session-title">
                        <a href="#/admin/setting/store">Store Setting</a>
                    </h3>
                </div>
                <div class="card-session-content pt-lg">
                    <div>Configure your store information</div>
                </div>
            </div>
            <div class="card-section border-b box-border">
                <div class="flex justify-between card-section-header mb-1">
                    <h3 class="card-session-title">
                        <a href="#/admin/setting/payments">Payment Setting</a>
                    </h3>
                </div>
                <div class="card-session-content pt-lg">
                    <div>Configure the available payment methods</div>
                </div>
            </div>
           
            
        </div>
    </div>`
}

export function allSetting(){
    var url = window.location.href
    url = url.split("/")
    url = url[url.length-1] 
	console.log(url)
    return document.getElementById(id).innerHTML =`
        <div class="main-content-inner">
            <div class="main-content-inner">
                <div class="grid grid-cols-6 gap-x-2 grid-flow-row flexdisplayrow">
                    <div class="col-span-2 flexrow">
                        ${navigation()}
                    </div>
                    <div class="col-span-4 flexrow" id="setting-tab">
                        ${settingTab(url)}
                    </div>
                </div>
            </div>
        </div>
    `
}