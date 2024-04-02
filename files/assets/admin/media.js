const module = {}
function selectImage(el){
    const icon = document.createElement("div")
    icon.innerHTML = `
    <div class="select fill-current text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width: 2rem;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
    `
    if(el.classList.contains("selected")){
        el.classList.remove("selected")
        if(el.children[0].children[1]){
            el.children[0].children[1].remove()
        }
    }else{
        el.classList.add('selected')
        el.children[0].appendChild(icon)
    }
}

function uploadFile(file) {
    // Create a FormData object
    const formData = new FormData();
    formData.append('file', file);
    for (var key of formData.entries()) {
        console.log(key[0] + ', ' + key[1]);
    }
    module.fetchFunction("/api/models/admin/uploadImage",formData,"POST",function(data){
        console.log(data)
        try{
            const imagelist = document.getElementById("imagelist")
            const element = document.createElement("div")
            element.innerHTML = `
                <div class="col image-item selected" onclick="selectImage(this)">
                    <div class="inner">
                        <a href="javascript:void(0)">
                            <img src="/assets/global/images/art1.jpeg" alt="">
                        </a>
                    </div>
                </div>
            `
            imagelist.innerHTML = element.innerHTML +imagelist.innerHTML
        }catch(e){console.log(e)}
    })
  }

function mediaLibrary(){
    setTimeout(function(){
        const fileInput = document.getElementById('upload-image'); // Assuming you have an input element with id 'fileInput'
        fileInput.addEventListener('change', (event) => {
           
        const file = event.target.files[0];
        if (file) {
            uploadFile(file);
        } else {
            console.error('No file selected');
        }
        });
    },999)
    const body = document.createElement("div")
    body.setAttribute("class","mediaLibrary")
    body.setAttribute("id","mediaLibrary")
    body.innerHTML = `
    <div class="file-browser">
        <div class="content">
            <div class="flex justify-end">
                <a href="javascript:void(0)" onclick="document.getElementById('mediaLibrary').remove()" class="text-interactive fill-current">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width: 2rem;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </a>
            </div>
            <div class="">
                <div class="grid grid-cols-4 gap-2 flexdisplayrow" >
                    <div class="col-span-1 flexrow" style="max-width:194px;">
                        <div class="current-path mb-4">
                            <div class="flex">
                                <div class="pr-1">You are here:</div>
                                <div><a href="#" class="text-interactive hover:underline">Root</a></div>
                            </div>
                        </div>
                        <ul class="mt-15 mb-15">
                            <li class="text-interactive fill-current flex list-group-item">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width: 2rem; height: 2rem;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                <a class="pl-05 hover:underline" href="#">catalog</a>
                            </li>
                            <li class="text-interactive fill-current flex list-group-item">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width: 2rem; height: 2rem;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                <a class="pl-05 hover:underline" href="#">homepage</a>
                            </li>
                        </ul>
                        <div class=" justify-between">
                            <div class="form-field-container null">
                                <div class="field-wrapper flex flex-grow">
                                    <input type="text" placeholder="New folder" value="">
                                    <div class="field-border"></div>
                                </div>
                            </div>
                            <div class="mt-1">
                                <a href="#" class="text-interactive hover:underline">Create</a>
                            </div>
                        </div>
                    </div>
                <div class="col-span-3 flexrow">
                    <div class="error text-critical mb-2"></div>
                    <div class="tool-bar grid grid-cols-3 gap-1 mb-2">
                        <button type="button" class="button critical outline">
                            <span>Delete image</span>
                        </button>
                        <button type="button" class="button primary">
                            <span>Insert image</span>
                        </button>
                        <button type="button" class="button info" onclick='document.getElementById("upload-image").click()'>
                            <span>Upload image</span>
                        </button>
                        <label for="upload-image" class="self-center">
                            <a class="invisible"><input id="upload-image" type="file" multiple=""></a>
                        </label>
                    </div>
                    <div class="grid grid-cols-9 gap-1" id="imagelist">
                            <div class="col image-item " onclick="selectImage(this)">
                                <div class="inner">
                                    <a href="javascript:void(0)">
                                        <img src="/assets/global/images/art3.jpeg" alt="">
                                    </a>
                                </div>
                            </div>
                            <div class="col image-item selected" onclick="selectImage(this)">
                                <div class="inner">
                                    <a href="javascript:void(0)"><img src="/assets/global/images/art2.jpeg" alt=""></a>
                                    <div class="select fill-current text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width: 2rem;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </div>
                                </div>
                            </div>
                            <div class="col image-item " onclick="selectImage(this)">
                                <div class="inner">
                                    <a href="javascript:void(0)">
                                        <img src="/assets/global/images/art1.jpeg" alt=""></a>
                                    </div>
                                </div>
                            </div>
                    </div>
                    </div>
                </div>
            </div>
    </div>
    `
    document.getElementsByTagName("body")[0].appendChild(body)
}