export function attributeForm(){
    return  `
    <form id="productForm" action="#/api/attributes" method="POST">
        <div class="grid grid-cols-3 gap-x-2 grid-flow-row ">
            <div class="col-span-2 grid grid-cols-1 gap-2 auto-rows-max">
                <div class="card shadow">
                    <div class="flex justify-between card-header"><h2 class="card-title">General</h2></div>
                    <div class="card-section border-b box-border">
                        <div class="card-session-content pt-lg">
                            <div class="">
                                <div class="form-field-container null">
                                    <label for="name">Name</label><div class="field-wrapper flex flex-grow"><input type="text" name="name" placeholder="Name" value=""><div class="field-border"></div></div>
                                </div>
                                <div class="form-field-container null">
                                    <label for="name">Attribute Code</label><div class="field-wrapper flex flex-grow"><input type="text" name="attribute_code" placeholder="Code" value=""><div class="field-border"></div></div>
                                </div>
                                <input type="text" id="attribute_id" name="attribute_id" value="" readonly="" style="display:none">
                               
                                <div class="mt-15 relative"><div class="mb-1">Type</div><div class="absolute top-5 left-0 right-0 bg-[#eff2f5] z-50 border rounded border-[#c9cccf] p-[10px]"><div></div></div><input type="hidden" name="attribute_id" value=""></div>
                                <div class="field-wrapper radio-field">
                                    <div><label for="type0" class="flex">
                                        <input type="radio" name="type" id="type0" value="text">
                                        <span class="radio-checked"><span></span></span>
                                        <span class="pl-1">Text</span>
                                    </label></div>
                                    <div>
                                        <label for="type1" class="flex">
                                            <input type="radio" name="type" id="type1" value="select">
                                            <span class="radio-checked"><span></span></span><span class="pl-1">Select</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label for="type2" class="flex">
                                            <input type="radio" name="type" id="type2" value="multiselect">
                                            <span class="radio-checked"><span></span></span><span class="pl-1">Multiselect</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label for="type3" class="flex"><input type="radio" name="type" id="type3" value="textarea">
                                        <span class="radio-checked"><span></span></span><span class="pl-1">Textarea</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-section border-b box-border">
                       <div class="flex justify-between card-section-header mb-1"><h3 class="card-session-title">Attribute Group</h3></div>
                        <div class="card-session-content pt-lg">
                            <div>
                                <div class="mb-1">Select groups the attribute belongs to</div>
                                <div class="grid gap-2 grid-cols-2">
                                    <div>
                                        <div class=" css-b62m3t-container">
                                            <span id="react-select-4-live-region" class="css-7pg0cj-a11yText"></span>
                                            <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" class="css-7pg0cj-a11yText"></span>
                                            <div class=" css-1s2u09g-control">
                                                <div class=" css-1d8n9bt">
                                                    <div class=" css-14el2xx-placeholder" id="react-select-4-placeholder">Select...</div>
                                                    <div class=" css-ackcql" data-value="">
                                                    <input class="" autocapitalize="none" autocomplete="off" autocorrect="off" id="react-select-4-input" spellcheck="false" tabindex="0" type="text" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" role="combobox" aria-describedby="react-select-4-placeholder" value="" style="color: inherit; background: 0px center; opacity: 1; width: 100%; grid-area: 1 / 2; font: inherit; min-width: 2px; border: 0px; margin: 0px; outline: 0px; padding: 0px;">
                                                </div>
                                            </div>
                                            <div class=" css-1wy0on6">
                                                <span class=" css-1okebmr-indicatorSeparator"></span>
                                                <div class=" css-tlfecz-indicatorContainer" aria-hidden="true">
                                                    <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="css-8mmkcg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <input name="groups[]" type="hidden" value="">
                                        </div>
                                    </div>
                                </div>
                                <div class="grid gap-2 grid-cols-1">
                                    <div>
                                        <div class="form-field-container has-error">
                                            <div class="field-wrapper flex flex-grow">
                                                <input type="text" placeholder="Create a new group" value="">
                                                <div class="field-border"></div>
                                                <div class="field-suffix">
                                                        <a class="text-interactive" href="#">
                                                            <svg width="1.5rem" height="1.5rem" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                        </a>
                                                </div>
                                            </div>
                                            <div class="field-error pt025 flex">
                                                <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zM9 9a1 1 0 0 0 2 0V7a1 1 0 1 0-2 0v2zm0 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"></path></svg>
                                                <span class="pl025 text-critical">Group name is required</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                
            </div>
            <div class="col-span-1 grid grid-cols-1 gap-2 auto-rows-max">
                <div class="card shadow subdued">
                    <div class="flex justify-between card-header"><h2 class="card-title">Settings</h2></div>
                    <div class="card-section border-b box-border">
                        <div class="card-session-content pt-lg">
                            <div class="form-field-container null">
                                <label for="status">Is required</label>
                                <div class="field-wrapper radio-field">
                                    <div><label for="status0" class="flex">
                                        <input type="radio" name="status" id="status0" value="0" checked=""><span class="radio-checked"><span></span></span><span class="pl-1">Disabled</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label for="status1" class="flex"><input type="radio" name="status" id="status1" value="1"><span class="radio-checked"><span></span></span><span class="pl-1">Enabled</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-section border-b box-border">
                        <div class="card-session-content pt-lg">
                            <div class="form-field-container null">
                                <label for="status">Is filterable</label>
                                <div class="field-wrapper radio-field">
                                    <div><label for="visibility0" class="flex">
                                        <input type="radio" name="filter" id="visibility0" value="0" checked=""><span class="radio-checked"><span></span></span><span class="pl-1">No</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label for="visibility1" class="flex"><input type="radio" name="filter" id="visibility1" value="1"><span class="radio-checked"><span></span></span><span class="pl-1">Yes</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-section border-b box-border">
                        <div class="card-session-content pt-lg">
                            <div class="form-field-container null">
                                <label for="status">Show to customers</label>
                                <div class="field-wrapper radio-field">
                                    <div><label for="show0" class="flex">
                                        <input type="radio" name="show" id="show0" value="0" checked=""><span class="radio-checked"><span></span></span><span class="pl-1">No</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label for="show1" class="flex"><input type="radio" name="show" id="show1" value="1"><span class="radio-checked"><span></span></span><span class="pl-1">Yes</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-section border-b box-border">
                        <div class="card-session-content pt-lg">
                            <div class="form-field-container null">
                                <label for="sort_order">Sort order</label>
                                <div class="field-wrapper flex flex-grow">
                                    <input type="text" name="sort_order" value=""><div class="field-border"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="form-submit-button flex border-t border-divider mt-15 pt-15 justify-between">
            <button type="button" class="button critical outline"><span>Cancel</span></button>
            <button type="button" class="button primary"><span>Save</span></button>
        </div>
    </form>
    `
}