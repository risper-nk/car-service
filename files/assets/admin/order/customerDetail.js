export function customerDetails(){
    return `
    <div class="flex justify-between card-header">
        <h2 class="card-title">Customer</h2>
    </div>
    <div class="card-section border-b box-border">
        <div class="flex justify-between card-section-header mb-1">
            <h3 class="card-session-title">Contact information</h3>
        </div>
        <div class="card-session-content pt-lg">
            <div><a href="#" class="text-interactive hover:underline">tutti@gmail.com</a></div>
            <div><span>4342345</span></div>
        </div>
    </div>
    <div class="card-section border-b box-border">
        <div class="flex justify-between card-section-header mb-1">
            <h3 class="card-session-title">Contact information</h3>
        </div>
        <div class="card-session-content pt-lg">
            <div><a href="#" class="text-interactive hover:underline">tutti@gmail.com</a></div>
            <div><span>4342345</span></div>
        </div>
    </div>
    <div class="card-section border-b box-border">
        <div class="flex justify-between card-section-header mb-1">
            <h3 class="card-session-title">Shipping Address</h3>
        </div>
        <div class="card-session-content pt-lg">
            <div class="address__summary">
                <div class="full-name">Tutti</div>
                <div class="address-one">adaf,ada.c</div>
                <div class="city-province-postcode">
                    <div>12345, IL</div>
                    <div><span>Kentucky<!-- -->, </span> <span>United States</span></div>
                </div><div class="telephone">4342345</div>
            </div>
        </div>
    </div>
    <div class="card-section border-b box-border">
        <div class="flex justify-between card-section-header mb-1">
            <h3 class="card-session-title">Billing address</h3>
        </div>
        <div class="card-session-content pt-lg">
            <div class="address__summary">
                <div class="full-name">Tutti</div>
                <div class="address-one">adaf,ada.c</div>
                <div class="city-province-postcode">
                    <div>12345, IL</div><div><span>Kentucky<!-- -->, </span> 
                        <span>United States</span>
                    </div>
                </div>
                <div class="telephone">4342345</div>
            </div>
        </div>
    </div>`
}