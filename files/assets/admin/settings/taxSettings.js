export function taxSettings(data){
    return document.getElementById("setting-tab").innerHTML = `
    <div class="col-span-4 grid grid-cols-1 gap-2">
        <div class="card shadow">
            <div class="card-section border-b box-border">
                <div class="flex justify-between card-section-header mb-1">
                    <h3 class="card-session-title">Tax</h3>
                </div>
                <div class="card-session-content pt-lg">
                    <div>Configure the tax classes that will be available to your customers at checkout.</div>
                </div>
            </div>
            <div class="card-section border-b box-border">
                <div class="flex justify-between card-section-header mb-1">
                    <h3 class="card-session-title">Basic configuration</h3>
                </div>
                <div class="card-session-content pt-lg">
                    <form id="taxSettings" action="#/api/settings" method="POST">
                        <div class="grid grid-cols-2 gap-2"><div>
                            <div class="form-field-container dropdown null">
                                <label for="defaultShippingTaxClassId">Shipping tax class</label>
                                <div class="field-wrapper flex flex-grow items-baseline">
                                    <select class="form-field" id="defaultShippingTaxClassId" name="defaultShippingTaxClassId" placeholder="None">
                                        <option value="">None</option><option value="-1">Proportional allocation based on cart items</option>
                                        <option value="0">Higest tax rate based on cart items</option>
                                        <option value="1">Taxable Goods</option>
                                    </select>
                                    <div class="field-border"></div>
                                    <div class="field-suffix">
                                        <svg viewBox="0 0 20 20" width="1rem" height="1.25rem" focusable="false" aria-hidden="true"><path d="m10 16-4-4h8l-4 4zm0-12 4 4H6l4-4z"></path></svg>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                        <div>
                            <div class="form-field-container dropdown null">
                                <label for="baseCalculationAddress">Base calculation address</label>
                                <div class="field-wrapper flex flex-grow items-baseline">
                                    <select class="form-field" id="baseCalculationAddress" name="baseCalculationAddress">
                                        <option value="" disabled="">Please select</option>
                                        <option value="shippingAddress">Shipping address</option>
                                        <option value="billingAddress">Billing address</option>
                                        <option value="storeAddress">Store address</option>
                                    </select>
                                    <div class="field-border"></div>
                                    <div class="field-suffix">
                                        <svg viewBox="0 0 20 20" width="1rem" height="1.25rem" focusable="false" aria-hidden="true"><path d="m10 16-4-4h8l-4 4zm0-12 4 4H6l4-4z"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-submit-button flex border-t border-divider mt-1 pt-1">
                        <button type="button" class="button primary"><span>Save</span></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="card shadow">
        <div class="flex justify-between card-header">
            <h2 class="card-title">Tax classes</h2>
        </div>
        <div class="card-section border-b box-border">
            <div class="flex justify-between card-section-header mb-1">
                <h3 class="card-session-title">
                    <div class="flex justify-between items-center gap-2"><div>Taxable Goods</div></div>
                </h3>
            </div>
            <div class="card-session-content pt-lg">
                <div class="divide-y border rounded border-divider">
                    <div class="flex justify-start items-center border-divider mt-2">
                        <div class="flex-grow px-1">
                            <div class="my-2">
                                <table class="border-collapse divide-y">
                                    <thead>
                                        <tr>
                                            <th class="border-none">Name</th>
                                            <th class="border-none">Rate</th>
                                            <th class="border-none">Compound</th>
                                            <th class="border-none">Priority</th>
                                            <th class="border-none">Action</th>
                                        </tr>
                                    </thead>
                                    <tr class="border-divider py-2">
                                        <td class="border-none py-1">VAT</td>
                                        <td class="border-none py-1">10%</td>
                                        <td class="border-none py-1">No</td>
                                        <td class="border-none py-1">0</td>
                                        <td class="border-none py-1">
                                            <a href="#" class="text-interactive">Edit</a>
                                            <a href="#" class="text-critical ml-2">Delete</a>
                                        </td>
                                    </tr>
                                    <tr class="border-divider py-2">
                                            <td class="border-none py-1">Hungary</td>
                                            <td class="border-none py-1">27%</td>
                                            <td class="border-none py-1">No</td>
                                            <td class="border-none py-1">1</td>
                                            <td class="border-none py-1">
                                                <a href="#" class="text-interactive">Edit</a>
                                                <a href="#" class="text-critical ml-2">Delete</a>
                                            </td>
                                        </tr>
                                    </table>
                                    <div class="mt-1">
                                        <a href="#" class="text-interactive">+ Add Rate</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-section border-b box-border">
                <div class="card-session-content pt-lg">
                    <div><button type="button" class="button primary">
                        <span>Create new tax class</span>
                    </button></div>
                </div>
            </div>
        </div>
    </div>
    `
}