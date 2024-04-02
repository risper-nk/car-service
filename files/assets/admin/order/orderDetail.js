import {customerDetails} from "./customerDetail.js"
import { addModal } from "../modal.js"
import {shipOrder} from "./orderDelivery.js"
import {id} from "./../id.js"

document.getElementsByTagName("body")[0].innerHTML += addModal("shipModal")
export function editOrder(){
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
                    <h1 class="page-heading-title">Editing #14736</h1>
                </div><span class="success badge">
                    <span class="complete progress rounded-100"></span>
                    <span class="self-center title">Paid</span>
                </span>
                <span class="default badge">
                    <span class="incomplete progress rounded-100"></span>
                    <span class="self-center title">Processing</span>
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
                    ${orderItems()}
                    <div class="card-section border-b box-border">
                        <div class="card-session-content pt-lg">
                            <div class="flex justify-end gap-1">
                                <button type="button" data-target="#shipModal" data-toggle="modal" onclick="shipOrder()" class="button primary">
                                    <span>Ship Items</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card shadow">
                    ${orderInvoice()}
                </div>
                ${orderActivity()}
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
                    ${customerDetails()}
                </div>
            </div>
        </div>
    </div>`
}

function orderActivity(){
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
                            <span>Customer paid by using credit card. Transaction ID: pi_3OsZ4lEvEMCuLU1x1ZoEZwDy</span>
                        </div>
                        <span class="time">11:13 PM</span>
                    </li>
                </ul>
            </li>
            <li class="group">
                <span>1710025991229</span>
                <ul>
                    <li class="flex items-center">
                        <span class="dot"></span>
                        <div class="comment"><span>Order created</span></div>
                        <span class="time">11:13 PM</span>
                    </li>
                </ul>
            </li>
        </ul>
    </div>`
}

function orderItems(){
    return `
    <div class="card-session-content pt-lg">
        <table class="listing order-items">
            <tbody>
                <tr>
                    <td>
                        <div class="product-thumbnail">
                            <div class="thumbnail">
                                <img src="/assets/catalog/1009/4805/plv3206-Blue-thumb.png" alt="">
                            </div>
                            <span class="qty">1</span>
                        </div>
                    </td>
                    <td>
                        <div class="product-column">
                            <div>
                                <span class="font-semibold">
                                    <a href="#/admin/products/edit/2607e074-bb8e-4524-82c4-bb033e46576b">Alphaboost shoes</a>
                                </span>
                            </div>
                            <div class="text-sm text-gray-500">
                                <span class="font-semibold">SKU: </span>
                                <span>NJC51430-Blue-L</span>
                            </div>
                            <div class="cart-item-variant-options mt-05">
                                <ul>
                                    <li>
                                        <span class="attribute-name font-semibold">Size<!-- -->:<!-- --> </span>
                                        <span>L</span>
                                    </li>
                                    <li>
                                        <span class="attribute-name font-semibold">Color<!-- -->:<!-- --> </span>
                                        <span>Blue</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="product-price">
                            <span>$708.00<!-- --> x <!-- -->1</span>
                        </div>
                    </td>
                    <td>
                        <span>$708.00</span>
                    </td>
                </tr>
                <tr><td><div class="product-thumbnail"><div class="thumbnail"><img src="/assets/catalog/2763/7203/plv4117-Blue-thumb.png" alt=""></div><span class="qty">1</span></div></td><td><div class="product-column"><div><span class="font-semibold"><a href="/admin/products/edit/76216f3d-d503-475b-b43f-aaa10076bc38">Hacked fashion chuck taylor all star</a></span></div><div class="text-sm text-gray-500"><span class="font-semibold">SKU: </span><span>NJC15709-Blue-S</span></div><div class="cart-item-variant-options mt-05"><ul><li><span class="attribute-name font-semibold">Color<!-- -->:<!-- --> </span><span>Blue</span></li><li><span class="attribute-name font-semibold">Size<!-- -->:<!-- --> </span><span>S</span></li></ul></div></div></td><td><div class="product-price"><span>$802.00<!-- --> x <!-- -->1</span></div></td><td><span>$802.00</span></td></tr>
            </tbody>
        </table>
    </div>`
}

function orderInvoice(){
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
                    <div><div>2<!-- --> items</div><div>$1,510.00</div></div>
                </div>
                <div class="summary-row">
                    <span>Shipping</span>
                    <div><div>Standard Delivery</div><div>$5.00</div></div>
                </div>
                <div class="summary-row">
                    <span>Discount</span><div><div></div><div>$0.00</div></div>
                </div>
                <div class="summary-row">
                    <span>Tax</span>
                    <div><div></div><div>$151.00</div></div>
                </div>
                <div class="summary-row">
                    <span>Total</span>
                    <div><span></span><div>$1,666.00</div></div>
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
                    <span>$166,600.00</span>
                </div>
            </div>
        </div>
    </div>
    `

}