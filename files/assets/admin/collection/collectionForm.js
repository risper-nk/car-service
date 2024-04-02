import { categoryInput } from "../category/category.js";
export function collectionForm(next){
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
        $("#collectionForm").submit(function(e){
            e.preventDefault()
            var myform = $("#collectionForm").serialize({ hash: true })
            let fom = new URLSearchParams(myform)
            //email,password
            var payload = {
                name: fom.getAll("name")[0],
               
                uniqueid: fom.getAll("collection_id")[0],
                
                description: editor.getData(),
                parent_category: fom.getAll("category_id")[0]
                
            };
            console.log(payload)
            //fetchFunction("/api/models/admin/newItem",payload,"post",function(data){})
            return false
        })
    },999)
    var edit
    if(next && next === true){
        edit = `
        <div class="card shadow">
            <div class="flex justify-between card-header"><h2 class="card-title">Products</h2>
                <div class="flex space-x-075"><div class="card-action"><a href="javascript:void(0)" class="text-interactive">Add products</a></div></div>
            </div>
            <div class="card-section border-b box-border">
                <div class="card-session-content pt-lg">
                    <div>
                        <div class="border rounded border-divider mb-2"><input type="text" placeholder="Search products" value=""></div>
                        <div class="flex justify-between"><div><i>4 items</i></div><div></div></div>
                        <div class="grid grid-cols-8 gap-2 py-1 border-divider items-center">
                            <div class="grid-thumbnail text-border border border-divider p-075 rounded flex justify-center col-span-1">
                                <img class="self-center" src="/assets/catalog/1034/3600/plv7632-Green-thumb.png" alt="">
                            </div>
                            <div class="col-span-5"><a href="#/admin/products/edit?=90a9a814-eb79-4917-86ec-0264784c3baa" class="font-semibold hover:underline">Nike air zoom pegasus 35</a></div>
                            <div class="col-span-2 text-right"><a href="javascript:void(0)" class="text-critical hover:first-letter:">Remove</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
    return `
    <form id="collectionForm" action="#/api/collections">
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
                                    <label for="name">UniqueID</label><div class="field-wrapper flex flex-grow">
                                    <input type="text" name="collection_id" placeholder="Unique ID" value=""><div class="field-border"></div></div>
                                </div>
                                <div class="mt-15 relative"><div class="mb-1">Parent category</div>
                                ${categoryInput()}
                                <input type="hidden" name="parent_id" value=""></div>
                                <div class="ckeditor">
                                    <label for="description mt-1">Description</label>
                                    <div class="image-icon mt-1"><a href="javascript:void(0)"><svg xmlns="http://www.w3.org/2000/svg" style="width:20px;height:20px" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="hover:fill-primary"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></a></div>
                                    <div id="editor"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ${edit}
            </div>
           
        </div>
        <div class="form-submit-button flex border-t border-divider mt-15 pt-15 justify-between">
            <button type="button" class="button critical outline"><span>Cancel</span></button>
            <button type="submit" class="button primary"><span>Save</span></button>
        </div>
    </form>
    `
}