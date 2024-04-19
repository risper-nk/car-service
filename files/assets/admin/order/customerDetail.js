export function customerDetails(data){
    return `
    <div class="flex justify-between card-header">
        <h2 class="card-title">Customer</h2>
    </div>
    <div class="card-section border-b box-border">
        <div class="flex justify-between card-section-header mb-1">
            <h3 class="card-session-title">Contact information</h3>
        </div>
        <div class="card-session-content pt-lg">
            <div><a href="#" class="text-interactive hover:underline">${data.email}</a></div>
            <div><span>${data.phone}</span></div>
        </div>
    </div>
    <div class="card-section border-b box-border">
        <div class="flex justify-between card-section-header mb-1">
            <h3 class="card-session-title">Contact information</h3>
        </div>
        <div class="card-session-content pt-lg">
            <div><a href="#" class="text-interactive hover:underline">${data.email}</a></div>
            <div><span>${data.phone}</span></div>
        </div>
    </div>
    <div class="card-section border-b box-border">
        <div class="flex justify-between card-section-header mb-1">
            <h3 class="card-session-title">Shipping Address</h3>
        </div>
        <div class="card-session-content pt-lg">
            <div class="address__summary">
                <div class="full-name">N/A</div>
                <div class="address-one">adaf,ada.c</div>
                <div class="city-province-postcode">
                    <div>N/A</div>
                    <div><span>N/A<!-- -->, </span> <span>KENYA</span></div>
                </div><div class="telephone">${data.phone}</div>
            </div>
        </div>
    </div>
    <div class="card-section border-b box-border">
        <div class="flex justify-between card-section-header mb-1">
            <h3 class="card-session-title">Billing address</h3>
        </div>
        <div class="card-session-content pt-lg">
            <div class="address__summary">
                <div class="full-name">N/A</div>
                <div class="address-one">adaf,ada.c</div>
                <div class="city-province-postcode">
                    <div>N/A</div>
                    <div><span>N/A<!-- -->, </span> <span>KENYA</span></div>
                </div><div class="telephone">${data.phone}</div>
            </div>
        </div>
    </div>`
}