import { addModal,editModal } from "../modal.js"
import {createShippingZone } from "./createShippingZone.js"

document.getElementsByTagName("body")[0].innerHTML += addModal("shipModal")


function newShipping(){
	var html = createShippingZone()
	editModal("shipModal","New Shipping",html,settings=undefined)
}

function activeMethods(){
    return `
        <tbody>
            <tr class="border-divider py-2">
                <td class="border-none py-1">Standard Delivery</td>
                <td class="border-none py-1">Enabled</td>
                <td class="border-none py-1">$5.00</td>
                <td class="border-none py-1">None</td>
                <td class="border-none py-1">
                    <a href="#" class="text-interactive">Edit</a>
                </td>
            </tr>
            <tr class="border-divider py-2">
                <td class="border-none py-1">Express Delivery</td>
                <td class="border-none py-1">Enabled</td>
                <td class="border-none py-1">$15.00</td>
                <td class="border-none py-1">None</td>
                <td class="border-none py-1">
                    <a href="#" class="text-interactive">Edit</a>
                </td>
            </tr>
        </tbody>
    `
}

export function shippingSettings(data){
    
    return document.getElementById("setting-tab").innerHTML = `
        <div class="card shadow">
            <div class="card-section border-b box-border">
                <div class="flex justify-between card-section-header mb-1">
                    <h3 class="card-session-title">
                        <div class="flex justify-between items-center gap-2">
                            <div>adfdsg</div>
                            <div><a href="#" class="text-interactive">Edit Zone</a></div>
                        </div>
                    </h3>
                </div>
                <div class="card-session-content pt-lg">
                    <div class="divide-y border rounded border-divider">
                        <div class="flex justify-start items-center border-divider mt-2">
                            <div class="p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#008060" aria-hidden="true" width="25" height="25"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                            </div>
                            <div class="flex-grow px-1">
                                <div><b>Algeria</b></div>
                                <div>Ain Temouchent</div>
                            </div>
                        </div>
                        <div class="flex justify-start items-center border-divider mt-2">
                            <div class="flex-grow px-1">
                                <div class="my-2">
                                    <table class="border-collapse divide-y">
                                        <thead>
                                            <tr>
                                                <th class="border-none">Method</th>
                                                <th class="border-none">Status</th>
                                                <th class="border-none">Cost</th>
                                                <th class="border-none">Condition</th>
                                                <th class="border-none">Action</th>
                                            </tr>
                                        </thead>
                                        ${activeMethods()}
                                    </table>
                                    <div class="mt-1">
                                        <a href="#" class="text-interactive">+ Add Method</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-section border-b box-border">
                <div class="card-session-content pt-lg">
                    <div><button type="button" class="button primary" data-toggle="modal" id="newShipping" data-target="#shipModal" onclick="newShipping()">
                        <span>Create new shipping zone</span>
                    </button>
                </div>
            </div>
            </div>
        </div>
    `
    $("#newShipping").click(function(){
        newShipping()
    })
}