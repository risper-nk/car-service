import { paymentSettingForm } from "./paymentSettingForm.js";
import { shippingSettings } from "./shippingSettings.js";
import { taxSettings } from "./taxSettings.js";
import {fetchFunction} from "../modules.js"

export function settingTab(url){
    switch(url.toLowerCase()){
        case "store":
            fetchFunction("/api/request/getCompany",{},"post",storeSettings)
            
            break;
        case "payments":
            fetchFunction("/api/request/Payments",{},"post",paymentSettingForm)
            break
        case "shipping":
            fetchFunction("/api/request/getShipping",{},"post",shippingSettings)
            break
        case "tax":
            fetchFunction("/api/request/getTax",{},"post",taxSettings)
            break
        default:
            fetchFunction("/api/request/getCompany",{},"post",storeSettings)
            break;
    }
}


function storeSettings(data){
    console.log(data)
    return document.getElementById("setting-tab").innerHTML = `
    <form id="storeSetting" action="#/api/settings" method="POST">
        <div class="card shadow">
            <div class="card-section border-b box-border">
                <div class="flex justify-between card-section-header mb-1">
                    <h3 class="card-session-title">Store Information</h3>
                </div>
                <div class="card-session-content pt-lg">
                    <div class="form-field-container null">
                        <label for="storeName">Store Name</label>
                        <div class="field-wrapper flex flex-grow">
                            <input type="text" name="storeName" placeholder="Store Name" value=${data ? data.company.name :"My Store"} >
                            <div class="field-border"></div>
                        </div>
                    </div>
                    <div class="form-field-container null">
                        <label for="storeDescription">Store Description</label>
                        <div class="field-wrapper flex flex-grow">
                            <textarea type="text" class="form-field" id="storeDescription" name="storeDescription" placeholder="Store Description">${data ? data.company.description:"My description"}</textarea>
                            <div class="field-border"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-section border-b box-border">
                <div class="flex justify-between card-section-header mb-1">
                    <h3 class="card-session-title">Contact Information</h3>
                </div>
                <div class="card-session-content pt-lg">
                    <div class="grid grid-cols-2 gap-2 mt-2">
                        <div>
                            <div class="form-field-container null">
                                <label for="storePhoneNumber">Store Phone Number</label>
                                <div class="field-wrapper flex flex-grow">
                                    <input type="text" name="storePhoneNumber" placeholder="Store Phone Number" value=${data ? data.company.phone : ""}>
                                    <div class="field-border"></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="form-field-container null">
                                <label for="storeEmail">Store Email</label>
                                <div class="field-wrapper flex flex-grow">
                                    <input type="text" name="storeEmail" placeholder="Store Email" value=${data ? data.company.email : ""}>
                                    <div class="field-border"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-section border-b box-border">
                <div class="flex justify-between card-section-header mb-1">
                    <h3 class="card-session-title">Address</h3>
                </div>
                <div class="card-session-content pt-lg">
                    <div style="margin-top: 1rem;">
                        <div class="form-field-container dropdown null">
                            <label for="storeCountry">Country</label>
                            <div class="field-wrapper flex flex-grow items-baseline">
                                <select class="form-field" id="storeCountry" name="storeCountry" placeholder="Country">
                                    <option value="" disabled="">Country</option>
                                    
                                </select>
                                <div class="field-border"></div>
                                <div class="field-suffix">
                                    <svg viewBox="0 0 20 20" width="1rem" height="1.25rem" focusable="false" aria-hidden="true"><path d="m10 16-4-4h8l-4 4zm0-12 4 4H6l4-4z"></path></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-field-container null">
                        <label for="storeAddress">Address</label>
                        <div class="field-wrapper flex flex-grow">
                            <input type="text" name="storeAddress" placeholder="Store Address" value=${data ? data.company.address:""}>
                            <div class="field-border"></div>
                        </div>
                    </div>
                    <div class="grid grid-cols-3 gap-2 mt-2">
                        <div>
                            <div class="form-field-container null">
                                <label for="storeCity">City</label>
                                <div class="field-wrapper flex flex-grow">
                                    <input type="text" name="storeCity" placeholder="City" value=${data ? data.company.state:""}>
                                    <div class="field-border"></div>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <div class="form-field-container null">
                                <label for="storePostalCode">PostalCode</label>
                                <div class="field-wrapper flex flex-grow">
                                    <input type="text" name="storePostalCode" placeholder="PostalCode" value=${data ? data.company.code:""}>
                                    <div class="field-border"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-section border-b box-border">
                <div class="flex justify-between card-section-header mb-1">
                    <h3 class="card-session-title">Logo</h3>
                </div>
                <div class="card-session-content pt-lg">
                    <div class="form-field-container null">
                        <div class="field-wrapper flex flex-grow">
                            <input type="file" name="storelogo" placeholder="Logo" id="storelogo">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-submit-button flex border-t border-divider mt-1 pt-1">
            <button type="button" class="button primary"><span>Save</span></button>
        </div>
    </form>
    `
}