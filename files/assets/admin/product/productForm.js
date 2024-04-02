export function productForm(){
    let editor;
    setTimeout(function(){
        ClassicEditor
            .create( document.querySelector( '#editor' ) )
            .then( newEditor => {
                editor = newEditor;
            } )
            .catch( error => {
                console.error( error );
            } );
        $("#imagefile").change(function(e){
            console.log(e)
            const imagelist = document.getElementById("images")
            const element = document.createElement("div")
            element.innerHTML = `
            <div class="uploader grid-item" style="cursor:pointer;">
                <div class="uploader-icon">
                    <label for="ltgxs3v8">
                        <svg style="width:30px;height:30px" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
                    </label>
                </div>
            </div>
            `
            imagelist.innerHTML = element.innerHTML +imagelist.innerHTML
        })
        $("#productForm").submit(function(e){
            e.preventDefault()
            var myform = $("#productForm").serialize({ hash: true })
            let fom = new URLSearchParams(myform)
            //email,password
            var payload = {
                name: fom.getAll("name")[0],
                price: fom.getAll("price")[0],
                weight: fom.getAll("weight")[0],
                sku: fom.getAll("sku")[0],
                category: fom.getAll("category_id")[0],
                tax: fom.getAll("tax_class")[0],
                description: editor.getData(),
                description_image: fom.getAll("description_image")[0],
                status: fom.getAll("status")[0],
                visibility: fom.getAll("visibility")[0],
                stock_manage: fom.getAll("stockmanage")[0],
                quantity: fom.getAll("qty")[0],
                attribute: fom.getAll("group_id")[0],
            };
            console.log(payload)
            //fetchFunction("/api/models/admin/newItem",payload,"post",function(data){})
            return false
        })
        var coll = document.getElementById("collapsible");
        var i;

        coll.addEventListener("click", function() {
            //this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
            content.style.display = "none";
            } else {
            content.style.display = "block";
            }
        });
        var category = document.getElementById("category_id")
        category.value = ""
        var categs = document.getElementsByClassName("category_item");
        for (i = 0; i < categs.length; i++) {
            categs[i].addEventListener("click", function() {
                console.log(this.name)
                if(category.value.includes(this.name+",") === false){
                    category.value += this.name+","
                }else{
                    category.value = category.value.replace(this.name+",","")
                }
                if(this.innerHTML.includes("+")){
                    this.innerHTML = "" 
                   
                }else{
                    this.innerHTML = "+"
                    
                  
                }
                console.log(category,category.value)
            });
            }
    },999)
    return `
        <form id="productForm" action="#/api/products" >
            <div class="grid grid-cols-3 gap-x-2 grid-flow-row ">
                <div class="col-span-2 grid grid-cols-1 gap-2 auto-rows-max">
                    <div class="card shadow">
                        <div class="flex justify-between card-header"><h2 class="card-title">General</h2></div>
                        <div class="card-section border-b box-border">
                            <div class="card-session-content pt-lg">
                                <div class="">
                                    <div class="form-field-container null">
                                        <label for="name">Name</label><div class="field-wrapper flex flex-grow">
                                        <input type="text" name="name" placeholder="Name" value=""><div class="field-border"></div></div>
                                    </div>
                                    <input type="text" id="product_id" name="product_id" value="" readonly="" style="display:none">
                                    <div class="grid grid-cols-3 gap-1 mt-15">
                                        <div>
                                            <div class="form-field-container null"<label for="sku">SKU</label>
                                                <div class="field-wrapper flex flex-grow"><input type="text" name="sku" placeholder="SKU" value=""><div class="field-border"></div></div></div></div><div>
                                            <div class="form-field-container null"><label for="price">Price</label>
                                                <div class="field-wrapper flex flex-grow"><input type="text" name="price" placeholder="Price" value=""><div class="field-border"></div><div class="field-suffix">USD</div></div></div></div><div>
                                            <div class="form-field-container null"><label for="weight">Weight</label>
                                                <div class="field-wrapper flex flex-grow"><input type="text" name="weight" placeholder="Weight" value=""><div class="field-border"></div><div class="field-suffix">kg</div></div></div>
                                        </div>
                                    </div>
                                    <div class="mt-15 relative"><div class="mb-1">Category</div>
                                    <a href="javascript:void(0)" id="collapsible" class="text-interactive collapsible">Select category</a>
                                   
                                    <div class="categorycontent">
                                        <div class="flexdisplayrow">
                                            <span class="categoryitem flexrow">
                                                Art <a href="javascript:void(0)" name="art" class="category_item">+</a>
                                            </span>
                                        </div>
                                    
                                    </div>
                                    <div class="absolute top-5 left-0 right-0 bg-[#eff2f5] z-50 border rounded border-[#c9cccf] p-[10px]"><div></div></div>
                                    <input type="text" style="display:none;" id="category_id" name="category_id" ></div>
                                    <div class="form-field-container dropdown null">
                                        <label for="tax_class">Tax class</label>
                                        <div class="field-wrapper flex flex-grow items-baseline">
                                            <select class="form-field" id="tax_class" name="tax_class" placeholder="None">
                                                <option selected="" value="0">None</option>
                                                <option value="1">Taxable Goods</option>
                                            </select>
                                            <div class="field-border"></div>
                                            <div class="field-suffix">
                                                <svg viewBox="0 0 20 20" width="1rem" height="1.25rem" focusable="false" aria-hidden="true"><path d="m10 16-4-4h8l-4 4zm0-12 4 4H6l4-4z"></path></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ckeditor">
                                        <label for="description mt-1">Description Image</label>
                                        <div class="image-icon mt-1"><a href="javascript:void(0)" onclick="mediaLibrary()"><svg xmlns="http://www.w3.org/2000/svg" style="width:20px;height:20px" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="hover:fill-primary"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></a></div>
                                        <input type="hidden" name="description_image" value="">
                                        <div id="editor">
                                        </div>    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card shadow">
                        <div class="flex justify-between card-header"><h2 class="card-title">Media</h2></div>
                        <div class="card-section border-b box-border">
                            <div class="card-session-content pt-lg">
                                <div class="product-image-manager">
                                    <div id="images" class="image-list" tabindex="0">
                                        <div class="uploader grid-item" style="cursor:pointer;" onclick="mediaLibrary()">
                                            <div class="uploader-icon" >
                                                <label for="ltgxs3v8">
                                                    <svg style="width:30px;height:30px" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
                                                </label>
                                            </div>
                                            <div class="invisible">
                                                <input type="file" id="imagefile" multiple="">
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
                        <div class="flex justify-between card-header"><h2 class="card-title">Product status</h2></div>
                        <div class="card-section border-b box-border">
                            <div class="card-session-content pt-lg">
                                <div class="form-field-container null">
                                    <label for="status">Status</label>
                                    <div class="field-wrapper radio-field">
                                        <div>
                                        <label for="status0" class="flex">
                                            <input type="radio" name="status" id="status0" value="0" checked=""><span class="radio-checked"><span></span></span><span class="pl-1">Disabled</span>
                                        </label>
                                        </div>
                                        <div>
                                        <label for="status1" class="flex">
                                            <input type="radio" name="status" id="status1" value="1" ><span class="radio-checked"><span></span></span><span class="pl-1">Enabled</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-section border-b box-border">
                            <div class="card-session-content pt-lg">
                                <div class="form-field-container null">
                                    <label for="visibility">Visibility</label>
                                    <div class="field-wrapper radio-field">
                                        <div><label for="visibility0" class="flex">
                                            <input type="radio" name="visibility" id="visibility0" value="0" checked=""><span class="radio-checked"><span></span></span><span class="pl-1">Not Visible</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label for="visibility1" class="flex"><input type="radio" name="visibility" id="visibility1" value="1"><span class="radio-checked"><span></span></span><span class="pl-1">Visible</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card shadow subdued">
                        <div class="flex justify-between card-header"><h2 class="card-title">Product status</h2></div>
                        <div class="card-section border-b box-border">
                            <div class="card-session-content pt-lg">
                                <div class="form-field-container null">
                                    <label for="manage">Manage Stock</label>
                                    <div class="field-wrapper radio-field">
                                        <div><label for="manage0" class="flex">
                                            <input type="radio" name="stockmanage" id="manage0" value="1" checked=""><span class="radio-checked"><span></span></span><span class="pl-1">Yes</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label for="manage1" class="flex"><input type="radio" name="stockmanage" id="manage1" value="0"><span class="radio-checked"><span></span></span><span class="pl-1">NO</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-session-content pt-lg">
                            <div class="form-field-container null">
                                <label for="qty">Quantity</label>
                                <div class="field-wrapper flex flex-grow">
                                    <input type="text" name="qty" placeholder="Quantity" value="">
                                        <div class="field-border"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card shadow">
                    <div class="card-section border-b box-border">
                        <div class="flex justify-between card-section-header mb-1"><h3 class="card-session-title">Attribute group</h3></div>
                        <div class="card-session-content pt-lg">
                            <div><div class="form-field-container dropdown null">
                                <div class="field-wrapper flex flex-grow items-baseline">
                                    <select class="form-field" id="group_id" name="group_id">
                                        <option value="" disabled="">Please select</option>
                                            <option selected="" value="46">cd</option><option value="45">shoes</option>
                                    </select>
                                    <div class="field-border"></div>
                                    <div class="field-suffix"><svg viewBox="0 0 20 20" width="1rem" height="1.25rem" focusable="false" aria-hidden="true"><path d="m10 16-4-4h8l-4 4zm0-12 4 4H6l4-4z"></path></svg></div>
                                </div>
                            </div></div>
                        </div>
                    </div>
                    <div class="card-section border-b box-border">
                        <div class="flex justify-between card-section-header mb-1"><h3 class="card-session-title">Attributes</h3></div>
                        <div class="card-session-content pt-lg"><table class="table table-auto"><tbody></tbody></table></div>
                    </div>
                    </div>
                </div>
            </div>
            <div class="form-submit-button flex border-t border-divider mt-15 pt-15 justify-between">
                <button type="button" class="button critical outline"><span>Cancel</span></button>
                <button type="submit"class="button primary"><span>Save</span></button>
            </div>
        </form>
    `
}