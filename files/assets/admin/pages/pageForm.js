export function pageForm(){
    return `
        <form id="cmspageForm" action="#/api/pages" method="POST">
            <div class="grid grid-cols-3 gap-x-2 grid-flow-row ">
                <div class="col-span-2 grid grid-cols-1 gap-2 auto-rows-max">
                    <div class="card shadow">
                        <div class="flex justify-between card-header"><h2 class="card-title">General</h2></div>
                        <div class="card-section border-b box-border">
                            <div class="card-session-content pt-lg">
                                <div class="">
                                    <div class="form-field-container null">
                                        <label for="coupon">Page Title</label>
                                        <div class="field-wrapper flex flex-grow">
                                            <input type="text" name="title" placeholder="Enter Title" value=""><div class="field-border"></div>
                                        </div>
                                    </div>
                                    <div class="form-field-container null">
                                        <label for="description">Content</label>
                                        <div class="field-wrapper flex flex-grow">
                                            <textarea type="text" class="form-field" id="content" name="content" placeholder="Enter content"></textarea>
                                            <div class="field-border"></div>
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-1 grid grid-cols-1 gap-2 auto-rows-max">
                    <div class="card shadow">
                        <div class="card-section border-b box-border">
                            <div class="flex justify-between card-section-header mb-1">
                                <h3 class="card-session-title">Status</h3>
                            </div>
                            <div class="card-session-content pt-lg">
                                <div class="form-field-container null">
                                    <div class="field-wrapper radio-field">
                                        <div>
                                            <label for="status0" class="flex">
                                                <input type="radio" name="status" id="status0" value="0"><span class="radio-checked"><span></span></span><span class="pl-1">Disabled</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label for="status1" class="flex"><input type="radio" name="status" id="status1" value="1" checked="">
                                                <span class="radio-checked"><span></span></span><span class="pl-1">Enabled</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-section border-b box-border">
                            <div class="flex justify-between card-section-header mb-1">
                                <h3 class="card-session-title">Layout</h3>
                            </div>
                            <div class="card-session-content pt-lg">
                                <div class="form-field-container null">
                                    <div class="field-wrapper radio-field">
                                        <div>
                                            <label for="layout0" class="flex">
                                                <input type="radio" name="layout" id="layout0" value="oneColumn" checked="">
                                                <span class="radio-checked"><span></span></span><span class="pl-1">One column</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label for="layout1" class="flex">
                                                <input type="radio" name="layout" id="layout1" value="twoColumnsLeft">
                                                <span class="radio-checked"><span></span></span><span class="pl-1">Two columns left</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label for="layout2" class="flex">
                                                <input type="radio" name="layout" id="layout2" value="twoColumnsRight">
                                                <span class="radio-checked"><span></span></span><span class="pl-1">Two columns right</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label for="layout3" class="flex">
                                                <input type="radio" name="layout" id="layout3" value="threeColumns">
                                                <span class="radio-checked"><span></span></span><span class="pl-1">Three columns</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>`
}