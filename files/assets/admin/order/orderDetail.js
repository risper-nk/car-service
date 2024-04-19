import {customerDetails} from "./customerDetail.js"
import { addModal } from "../modal.js"
import {shipOrder} from "./orderDelivery.js"
import {id} from "./../id.js"
import { fetchFunction } from "../modules.js"
import { allOrder } from "./order.js"

document.getElementsByTagName("body")[0].innerHTML += addModal("shipModal")
export function editOrder(_id){
    if(_id === undefined || _id === null || _id === "null"){
        return allOrder()
    }
    fetchFunction("/api/models/admin/getOrder/"+_id,{},"post",function(data){
        let stet =  `<button type="button" data-target="#shipModal" data-toggle="modal" onclick="modules.shipOrder('${data.book._id}')" class="button primary">
                    <span>Assign Mechanic</span>
                </button>`
        if(data.book.handler){
            stet = `<span>Assigned to </span> <a href="#/admin/worker/edit?${data.book.handler}">${data.book.handler}</a>`
        }
        return document.getElementById(id).innerHTML = `
            <div class="main-content-inner">
                <div class="page-heading flex justify-between items-center">
                    <div class="flex justify-start space-x-1 items-center">
                        <a href="#/admin/orders" class="breadcrum-icon border block border-border rounded mr-075">
                            <span class="flex items-center justify-center">
                                <svg class="text-icon" viewBox="0 0 20 20" focusable="false" aria-hidden="true"><path d="M17 9H5.414l3.293-3.293a.999.999 0 1 0-1.414-1.414l-5 5a.999.999 0 0 0 0 1.414l5 5a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L5.414 11H17a1 1 0 1 0 0-2z"></path></svg>
                            </span>
                        </a>
                        <div class="self-center">
                            <h1 class="page-heading-title">Editing #${data.book._id}</h1>
                        </div><span class="success badge">
                            <span class="complete progress rounded-100"></span>
                            <span class="self-center title">${data.invoice.complete ? "Paid" : "Pending"}</span>
                        </span>
                        <span class="default badge">
                            <span class="incomplete progress rounded-100"></span>
                            <span class="self-center title">${data.book.complete ? "Completed" : "Processing"}</span>
                        </span>
                    </div>
                    <div class="flex justify-end space-x-1 items-center"></div>
                </div>
                <div class="grid grid-cols-3 gap-x-2 grid-flow-row flexdisplayrow">
                    <div class="col-span-2 grid grid-cols-1 gap-2 auto-rows-max flexrow">
                        <div class="card shadow">
                            <div class="flex justify-between card-header">
                                <h2 class="card-title">
                                    <div class="flex space-x-1">
                                        <span class="default circle">
                                            <span class="self-center"><span></span></span>
                                        </span>
                                        <span class="block self-center">Processing</span>
                                    </div>
                                </h2>
                            </div>
                            ${orderItems(data.categories)}
                            <div class="card-section border-b box-border">
                                <div class="card-session-content pt-lg">
                                    <div class="flex justify-end gap-1">
                                       ${stet}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card shadow">
                            ${orderInvoice(data.invoice)}
                        </div>
                        ${orderActivity(data)}
                    </div>
                    <div class="col-span-2 grid grid-cols-1 gap-2 auto-rows-max">
                        <div class="card shadow">
                            <div class="flex justify-between card-header">
                                <h2 class="card-title">Customer notes</h2>
                            </div>
                            <div class="card-section border-b box-border">
                                <div class="card-session-content pt-lg">
                                    <div><span class="text-border">No notes from customer</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="card shadow">
                            ${customerDetails(data.user)}
                        </div>
                    </div>
                </div>
            </div>`
    })
   
}

function orderActivity(data){
    return  `
    <div class="order-activities">
        <h3 class="title">Activities</h3>
        <ul>
            <li class="group">
                <span>Mar 09</span>
                <ul>
                    <li class="flex items-center">
                        <span class="dot"></span>
                        <div class="comment">
                            ${data.invoice.complete === true ? `<span>Customer paid by using credit card. Transaction ID: ${data.invoice._id}</span>` : "Payment Pending"}
                        </div>
                        <span class="time">${data.invoice.date}</span>
                    </li>
                </ul>
            </li>
            <li class="group">
                <span>${data.book.date}</span>
                <ul>
                    <li class="flex items-center">
                        <span class="dot"></span>
                        <div class="comment"><span>Order created</span></div>
                        <span class="time">${new Date(data.date).toUTCString()}</span>
                    </li>
                </ul>
            </li>
        </ul>
    </div>`
}

function orderItems(datas){
    console.log(datas)
    let el = ``
    for(var data of datas){
        el += `
            <tr>
                <td>
                    <div class="product-thumbnail">
                        <div class="thumbnail">
                            <img src="" alt="">
                        </div>
                        <span class="qty">1</span>
                    </div>
                </td>
                <td>
                    <div class="product-column">
                        <div>
                            <span class="font-semibold">
                                <a href="#/admin/categories/edit/?${data._id}">${data.name}</a>
                            </span>
                        </div>
                        
                    
                    </div>
                </td>
                <td>
                    <div class="product-price">
                        <span>${data.price}<!-- --> x <!-- -->1</span>
                    </div>
                </td>
                <td>
                    <span>${data.price}</span>
                </td>
            </tr>
           
        `
    }
    return `
        <div class="card-session-content pt-lg">
            <table class="listing order-items">
                <tbody id="listingOrders">
                    ${el}                    
                </tbody>
            </table>
        </div>`
    
   // return el
}

function orderInvoice(data){
    return `
    <div class="flex justify-between card-header">
        <h2 class="card-title">
            <div class="flex space-x-1">
                <span class="success circle"><span class="self-center"><span></span></span></span>
                <span class="block self-center">Credit Card</span>
            </div>
        </h2>

    </div>
    <div class="card-section border-b box-border">
        <div class="card-session-content pt-lg">
            <div class="summary-wrapper">
                <div class="summary-row"><span>Subtotal</span>
                    <div><div>2<!-- --> items</div><div>${data.amount}</div></div>
                </div>
                <div class="summary-row">
                    <span>Shipping</span>
                    <div><div>Standard Delivery</div><div>$0.00</div></div>
                </div>
                <div class="summary-row">
                    <span>Discount</span><div><div></div><div>$0.00</div></div>
                </div>
                <div class="summary-row">
                    <span>Tax</span>
                    <div><div></div><div>$0.00</div></div>
                </div>
                <div class="summary-row">
                    <span>Total</span>
                    <div><span></span><div>${data.amount}</div></div>
                </div>
            </div>
        </div>
    </div>
    <div class="card-section border-b box-border">
        <div class="card-session-content pt-lg">
            <div class="flex justify-between">
                <div class="self-center">
                    <span>Paid by customer</span>
                </div>
				
                <div class="self-center">
                    <span>KES ${data.invoice.complete === true ? data.invoice.amount : 0}</span>
                </div>
            </div>
        </div>
    </div>
    `

}