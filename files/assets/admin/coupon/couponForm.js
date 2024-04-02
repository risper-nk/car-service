export function couponForm(){
    setTimeout(function(){
        $("#couponForm").submit(function(e){
            e.preventDefault()
            return false;
        })
    },999)
    return `
        <form id="couponForm" action="#/api/coupons">
            <div class="grid grid-cols-1 gap-2">
                <div class="card shadow">
                    <div class="flex justify-between card-header"><h2 class="card-title">General</h2></div>
                    <div class="card-section border-b box-border">
                        <div class="card-session-content pt-lg">
                            <div class="">
                                <div class="form-field-container null">
                                    <label for="coupon">Coupon code</label>
                                    <div class="field-wrapper flex flex-grow">
                                        <input type="text" name="coupon" placeholder="Enter coupon code" value=""><div class="field-border"></div>
                                    </div>
                                </div>
                                <div class="form-field-container null">
                                    <label for="description">Description</label>
                                    <div class="field-wrapper flex flex-grow">
                                        <textarea type="text" class="form-field" id="description" name="description" placeholder="Enter description"></textarea>
                                        <div class="field-border"></div>
                                    </div>
                                </div>
                                <div class="form-field-container null">
                                    <label for="status">Status</label>
                                    <input type="hidden" value="1" name="status">
                                    <div class="field-wrapper flex flex-grow">
                                        <a href="#" class="toggle enabled"><span></span></a>
                                    </div>
                                </div>
                                <div class="grid grid-cols-3 gap-2 form-field-container">
                                    <div>
                                    <div class="form-field-container null">
                                        <label for="discount_amount">Discount amount</label>
                                        <div class="field-wrapper flex flex-grow">
                                            <input type="text" name="discount_amount" placeholder="Discount amount" value="">
                                            <div class="field-border"></div>
                                        </div>
                                    </div>
                                    </div>
                                <div>
                                <div class="form-field-container null">
                                    <label for="start_date">Start date</label>
                                    <div class="field-wrapper flex flex-grow">
                                        <input type="text" class="form-field flatpickr-input" id="start_date" name="start_date" value="" readonly="readonly">
                                        <div class="field-border"></div>
                                        <div class="field-suffix"><svg style="width:1.8rem;height:1.8rem" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"></path></svg></div>
                                    </div>
                                </div>
                            </div>
                        <div>
                        <div class="form-field-container null">
                            <label for="end_date">End date</label>
                            <div class="field-wrapper flex flex-grow">
                                <input type="text" class="form-field flatpickr-input" id="end_date" name="end_date" value="" readonly="readonly">
                                    <div class="field-border"></div>
                                    <div class="field-suffix"><svg xmlns="http://www.w3.org/2000/svg" fill="none" style="width:1.8rem;height:1.8rem" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"></path></svg></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-field-container null">
                    <div class="field-wrapper radio-field">
                        <label for="free_shipping"><input type="checkbox" id="free_shipping" value="0"><span class="checkbox-checked"><span></span></span><span class="pl-05">Free shipping?</span><input type="hidden" name="free_shipping" value="0"></label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="card shadow">
    <div class="flex justify-between card-header"><h2 class="card-title">Discount Type</h2></div>
        <div class="card-section border-b box-border">
            <div class="card-session-content pt-lg">
                <div>
                    <div>
                        <div class="">
                            <div class="form-field-container null">
                                <div class="field-wrapper radio-field">
                                    <div><label for="discount_type0" class="flex"><input type="radio" name="discount_type" id="discount_type0" value="fixed_discount_to_entire_order"><span class="radio-checked"><span></span></span><span class="pl-1">Fixed discount to entire order</span></label></div>
                                    <div><label for="discount_type1" class="flex"><input type="radio" name="discount_type" id="discount_type1" value="percentage_discount_to_entire_order"><span class="radio-checked"><span></span></span><span class="pl-1">Percentage discount to entire order</span></label></div>
                                    <div><label for="discount_type2" class="flex"><input type="radio" name="discount_type" id="discount_type2" value="fixed_discount_to_specific_products"><span class="radio-checked"><span></span></span><span class="pl-1">Fixed discount to specific products</span></label></div>
                                    <div><label for="discount_type3" class="flex"><input type="radio" name="discount_type" id="discount_type3" value="percentage_discount_to_specific_products"><span class="radio-checked"><span></span></span><span class="pl-1">Percentage discount to specific products</span></label></div>
                                    <div><label for="discount_type4" class="flex"><input type="radio" name="discount_type" id="discount_type4" value="buy_x_get_y"><span class="radio-checked"><span></span></span><span class="pl-1">Buy X get Y</span></label></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-1"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="grid grid-cols-3 gap-x-2 grid-flow-row ">
        <div class="col-span-2 grid grid-cols-1 gap-2 auto-rows-max">
            <div class="card shadow">
                <div class="flex justify-between card-header"><h2 class="card-title">Order conditions</h2></div>
                <div class="card-section border-b box-border">
                    <div class="card-session-content pt-lg">
                        <div>
                            <div class="form-field-container null">
                                <label for="condition[order_total]">Minimum purchase amount</label>
                                <div class="field-wrapper flex flex-grow"><input type="text" name="condition[order_total]" placeholder="Enter minimum purchase amount" value="">
                                    <div class="field-border"></div>
                                </div>
                            </div>
                            <div class="form-field-container null">
                                <label for="condition[order_qty]">Minimum purchase qty</label>
                                <div class="field-wrapper flex flex-grow"><input type="text" name="condition[order_qty]" placeholder="Enter minimum purchase qty" value="">
                                    <div class="field-border"></div>
                                </div>
                            </div>
                        <div style="margin-top:1rem;margin-bottom:1rem">
                            <div><span>Order must contains product matched bellow conditions(All)</span></div>
                            <table class="table table-auto" style="margin-top:0">
                                <thead>
                                    <tr>
                                        <th><span>Key</span></th><th><span>Operator</span></th>
                                        <th><span>Value</span></th><th><span>Minimum quantity</span></th>
                                        <th> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="form-field-container dropdown">
                                                <div class="field-wrapper">
                                                    <select name="condition[required_products][0][key]" class="form-control">
                                                        <option value="category">Category</option>
                                                        <option value="collection">Collection</option>
                                                        <option value="attribute_group">Attribute Group</option>
                                                        <option value="sku">Sku</option>
                                                        <option value="price">Price</option>
                                                    </select>
                                                    <div class="field-border"></div>
                                                    <div class="field-suffix"><svg viewBox="0 0 20 20" width="1rem" height="1.25rem" focusable="false" aria-hidden="true"><path d="m10 16-4-4h8l-4 4zm0-12 4 4H6l4-4z"></path></svg></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-field-container dropdown">
                                                <div class="field-wrapper">
                                                    <select name="condition[required_products][0][operator]" class="form-control">
                                                        <option value="IN">In</option>
                                                        <option value="NOT IN">Not in</option>
                                                    </select>
                                                    <div class="field-border"</div>
                                                    <div class="field-suffix"><svg viewBox="0 0 20 20" width="1rem" height="1.25rem" focusable="false" aria-hidden="true"><path d="m10 16-4-4h8l-4 4zm0-12 4 4H6l4-4z"></path></svg></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <input type="hidden" name="condition[required_products][0][value]" value="">
                                                <div><a href="#" class="text-interactive hover:underline"><span>Choose categories</span></a></div>
                                        </td>
                                        <td>
                                            <div style="width: 60px;">
                                                <div class="form-field-container null">
                                                    <div class="field-wrapper flex flex-grow">
                                                        <input type="text" name="condition[required_products][0][qty]" placeholder="Enter the quantity" value="">
                                                            <div class="field-border"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <a href="#" class="text-critical"><svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6"></path></svg></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="mt-1 flex justify-start">
                                <div class="items-center flex"><svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg></div>
                                <div class="pl-1">
                                    <a href="#"><span>Add product</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-span-1 grid grid-cols-1 gap-2 auto-rows-max">
        <div class="card shadow">
            <div class="flex justify-between card-header"><h2 class="card-title">Customer conditions</h2></div>
            <div class="card-section border-b box-border">
                <div class="card-session-content pt-lg">
                    <div class="">
                        <div class=" css-1jznj68-container">
                            <span id="react-select-3443-live-region" class="css-7pg0cj-a11yText"></span>
                            <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" class="css-7pg0cj-a11yText"></span>
                            <div class=" css-1s2u09g-control">
                                <div class=" css-1d8n9bt">
                                    <div class=" css-14el2xx-placeholder" id="react-select-3443-placeholder">Select...</div>
                                    <div class=" css-ackcql" data-value="">
                                        <input type="text" class="" style="label:input;color:inherit;background:0;opacity:1;width:100%;grid-area:1 / 2;font:inherit;min-width:2px;border:0;margin:0;outline:0;padding:0" autocapitalize="none" autocomplete="off" autocorrect="off" id="react-select-3443-input" spellcheck="false" tabindex="0" value="" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" role="combobox" aria-describedby="react-select-3443-placeholder">
                                    </div>
                                </div>
                                <div class=" css-1wy0on6">
                                    <span class=" css-1okebmr-indicatorSeparator"></span>
                                    <div class=" css-tlfecz-indicatorContainer" aria-hidden="true"><svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="css-8mmkcg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg></div>
                                </div>
                            </div>
                            <div><input type="hidden" name="user_condition[groups][]" value=""></div>
                        </div>
                        <div class="form-field-container null">
                            <label for="user_condition[emails]">Customer email (empty for all)</label>
                            <div class="field-wrapper flex flex-grow">
                                <input type="text" name="user_condition[emails]" placeholder="Enter customer emails" value=""><div class="field-border"></div>
                                <div class="field-suffix"><svg xmlns="http://www.w3.org/2000/svg" fill="none" style="width:1.8rem;height:1.8rem" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path></svg></div>
                            </div>
                            <div class="field-instruction mt-sm">Use comma when you have multi email</div>
                        </div>
                        <div class="form-field-container null">
                            <label for="user_condition[purchased]">Customer's purchase</label>
                                <div class="field-wrapper flex flex-grow">
                                    <input type="text" name="user_condition[purchased]" placeholder="Enter purchased amount" value="">
                                        <div class="field-border"></div>
                                </div>
                                <div class="field-instruction mt-sm">Minimum purchased amount</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
        <div class="form-submit-button flex border-t border-divider mt-15 pt-15 justify-between">
            <button type="button" class="button critical outline"><span>Cancel</span></button>
            <button type="submit" class="button primary"><span>Save</span></button>
        </div>
        
        </form>
    `
}