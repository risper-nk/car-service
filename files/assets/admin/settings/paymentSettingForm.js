
export function paymentSettingForm(){
    return  `
        <form id="paymentSettingForm" action="#/api/settings" method="POST">
            <div class="grid gap-2">
                <div class="card shadow">
                    <div class="flex justify-between card-header">
                        <h2 class="card-title">Stripe Payment</h2>
                    </div>
                    <div class="card-section border-b box-border">
                        <div class="card-session-content pt-lg">
                            <div class="grid grid-cols-3 gap-2">
                                <div class="col-span-1 items-center flex">
                                    <h4>Enable?</h4>
                                </div>
                                <div class="col-span-2">
                                    <div class="form-field-container null">
                                        <input type="hidden" value="1" name="stripePaymentStatus">
                                        <div class="field-wrapper flex flex-grow">
                                            <a href="javascript:void(0)" class="toggle enabled"><span></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-section border-b box-border">
                        <div class="card-session-content pt-lg">
                            <div class="grid grid-cols-3 gap-2">
                                <div class="col-span-1 items-center flex">
                                    <h4>Dislay Name</h4>
                                </div>
                                <div class="col-span-2">
                                    <div class="form-field-container null">
                                        <div class="field-wrapper flex flex-grow">
                                            <input type="text" name="stripeDislayName" placeholder="Dislay Name" value="Credit Card">
                                            <div class="field-border"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-section border-b box-border">
                        <div class="card-session-content pt-lg">
                            <div class="grid grid-cols-3 gap-2">
                                <div class="col-span-1 items-center flex">
                                    <h4>Publishable Key</h4>
                                </div>
                                <div class="col-span-2">
                                    <div class="form-field-container null">
                                        <div class="field-wrapper flex flex-grow">
                                            <input type="text" name="stripePublishableKey" placeholder="Publishable Key" value="pk_test_51Jdo9iEvEMCuLU1xfxYWbka7AdHF7ADu2H6h1vuvnLZuC5c5L5CUsvyCRHhSgGOF8bhxqrbKIwck6CA0J1jL6HxH005zCFd8sI">
                                            <div class="field-border"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-section border-b box-border">
                        <div class="card-session-content pt-lg">
                            <div class="grid grid-cols-3 gap-2">
                                <div class="col-span-1 items-center flex">
                                    <h4>Secret Key</h4>
                                </div>
                                <div class="col-span-2">
                                    <div class="form-field-container null">
                                        <div class="field-wrapper flex flex-grow">
                                            <input type="text" name="stripeSecretKey" placeholder="Secret Key" value="sk_te*******************************">
                                            <div class="field-border"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-section border-b box-border">
                        <div class="card-session-content pt-lg">
                            <div class="grid grid-cols-3 gap-2">
                                <div class="col-span-1 items-center flex">
                                    <h4>Webhook Secret Key</h4>
                                </div>
                                <div class="col-span-2">
                                    <div class="form-field-container null">
                                        <div class="field-wrapper flex flex-grow">
                                            <input type="text" name="stripeEndpointSecret" placeholder="Secret Key" value="whsec*******************************">
                                            <div class="field-border"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card shadow">
                    <div class="flex justify-between card-header">
                        <h2 class="card-title">Paypal Payment</h2>
                    </div>
                    <div class="card-section border-b box-border">
                        <div class="card-session-content pt-lg">
                            <div class="grid grid-cols-3 gap-2">
                                <div class="col-span-1 items-center flex">
                                    <h4>Enable?</h4>
                                </div>
                                <div class="col-span-2">
                                    <div class="form-field-container null">
                                        <input type="hidden" value="1" name="paypalPaymentStatus">
                                        <div class="field-wrapper flex flex-grow">
                                            <a href="#" class="toggle enabled"><span></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-section border-b box-border">
                        <div class="card-session-content pt-lg">
                            <div class="grid grid-cols-3 gap-2">
                                <div class="col-span-1 items-center flex">
                                    <h4>Dislay Name</h4>
                                </div>
                                <div class="col-span-2">
                                    <div class="form-field-container null">
                                        <div class="field-wrapper flex flex-grow">
                                            <input type="text" name="paypalDislayName" placeholder="Dislay Name" value="Paypal">
                                            <div class="field-border"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-section border-b box-border">
                        <div class="card-session-content pt-lg">
                            <div class="grid grid-cols-3 gap-2">
                                <div class="col-span-1 items-center flex">
                                    <h4>Client ID</h4></div><div class="col-span-2">
                                        <div class="form-field-container null">
                                            <div class="field-wrapper flex flex-grow">
                                                <input type="text" name="paypalClientId" placeholder="Publishable Key" value="AViMqtVtim4OP7xoI7Z10FL-PPk8QU7C-1lm-7dNCMuuGqtEazKTB1gq7ZzrQlCSoqswVOS-V8tt2e6h">
                                                <div class="field-border"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-section border-b box-border">
                            <div class="card-session-content pt-lg">
                                <div class="grid grid-cols-3 gap-2">
                                    <div class="col-span-1 items-center flex">
                                        <h4>Client Secret</h4>
                                    </div>
                                    <div class="col-span-2">
                                        <div class="form-field-container null">
                                            <div class="field-wrapper flex flex-grow">
                                                <input type="text" name="paypalClientSecret" placeholder="Secret Key" value="*******************************">
                                                <div class="field-border"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-section border-b box-border">
                            <div class="card-session-content pt-lg">
                                <div class="grid grid-cols-3 gap-2">
                                    <div class="col-span-1 items-center flex">
                                        <h4>Environment</h4>
                                    </div>
                                    <div class="col-span-2">
                                        <div class="form-field-container null">
                                            <div class="field-wrapper radio-field">
                                                <div>
                                                    <label for="paypalEnvironment0" class="flex">
                                                        <input type="radio" name="paypalEnvironment" id="paypalEnvironment0" value="https://api-m.sandbox.paypal.com" checked="">
                                                        <span class="radio-checked">
                                                            <span></span>
                                                        </span>
                                                        <span class="pl-1">Sandbox</span>
                                                    </label>
                                                </div>
                                                <div>
                                                    <label for="paypalEnvironment1" class="flex">
                                                        <input type="radio" name="paypalEnvironment" id="paypalEnvironment1" value="https://api-m.paypal.com">
                                                        <span class="radio-checked"><span></span></span>
                                                        <span class="pl-1">Live</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card shadow">
                        <div class="flex justify-between card-header">
                            <h2 class="card-title">Cash On Delivery Payment</h2>
                        </div>
                        <div class="card-section border-b box-border">
                            <div class="card-session-content pt-lg">
                                <div class="grid grid-cols-3 gap-2">
                                    <div class="col-span-1 items-center flex">
                                        <h4>Enable?</h4>
                                    </div>
                                    <div class="col-span-2">
                                        <div class="form-field-container null">
                                            <input type="hidden" value="1" name="codPaymentStatus">
                                            <div class="field-wrapper flex flex-grow">
                                                <a href="#" class="toggle enabled"><span></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-section border-b box-border">
                            <div class="card-session-content pt-lg">
                                <div class="grid grid-cols-3 gap-2">
                                    <div class="col-span-1 items-center flex">
                                        <h4>Dislay Name</h4>
                                    </div>
                                    <div class="col-span-2">
                                        <div class="form-field-container null">
                                            <div class="field-wrapper flex flex-grow">
                                                <input type="text" name="codDislayName" placeholder="Dislay Name" value="Cash On Delivery">
                                                <div class="field-border"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-submit-button flex border-t border-divider mt-1 pt-1">
                    <button type="button" class="button primary"><span>Save</span></button>
                </div>
        </form>`
}