import {editModal} from "../modal.js"
 
export function shipOrder(){
    editModal("shipModal","Ship Order",function(){
        return `
        <form id="ship-items" action="#/api/orders/c1beb3cc-7d01-4a59-8f9c-908b00c0eb82/shipments" method="POST">
            <div class="grid grid-cols-2 gap-1">
                <div>
                    <div class="form-field-container null">
                        <label for="tracking_number">Tracking number</label>
                        <div class="field-wrapper flex flex-grow">
                            <input type="text" name="tracking_number" value="">
                                <div class="field-border"></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="form-field-container dropdown null">
                        <label for="carrier">Carrier</label>
                        <div class="field-wrapper flex flex-grow items-baseline">
                            <select class="form-field" id="carrier" name="carrier">
                                <option value="" disabled="">Please select</option>
                                <option value="default">Default</option>
                                <option value="fedex">FedEx</option>
                                <option value="usps">USPS</option>
                                <option value="ups">UPS</option>
                            </select>
                            <div class="field-border"></div>
                            <div class="field-suffix"><svg viewBox="0 0 20 20" width="1rem" height="1.25rem" focusable="false" aria-hidden="true"><path d="m10 16-4-4h8l-4 4zm0-12 4 4H6l4-4z"></path></svg></div>
                        </div>
                    </div>
                </div>
            </div>
        </form>`
    },{footer:{element:button,type:button,text:"Ship",onclick:"makeDelivery()"}})
}