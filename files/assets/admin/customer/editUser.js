export function editUser(){
    return `
    <div class="main-content-inner">
        <div class="page-heading flex justify-between items-center">
            <div class="flex justify-start space-x-1 items-center">
                <a href="#/admin/customers" class="breadcrum-icon border block border-border rounded mr-075">
                    <span class="flex items-center justify-center">
                        <svg class="text-icon" viewBox="0 0 20 20" focusable="false" aria-hidden="true"><path d="M17 9H5.414l3.293-3.293a.999.999 0 1 0-1.414-1.414l-5 5a.999.999 0 0 0 0 1.414l5 5a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L5.414 11H17a1 1 0 1 0 0-2z"></path></svg>
                    </span>
                </a>
                <div class="self-center">
                    <h1 class="page-heading-title">Editing User</h1>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-3 gap-x-2 grid-flow-row ">
            <div class="col-span-2 grid grid-cols-1 gap-2 auto-rows-max">
                <div class="card shadow">
                    <div class="flex justify-between card-header">
                        <h2 class="card-title">Order History</h2>
                    </div>
                    <div class="card-section border-b box-border">
                        <div class="card-session-content pt-lg">
                            <div>Customer does not have any order yet.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-1 grid grid-cols-1 gap-2 auto-rows-max">
                <div class="card shadow">
                    <div class="">
                        <div class="card-section border-b box-border">
                            <div class="flex justify-between card-section-header mb-1">
                                <h3 class="card-session-title">Full Name</h3>
                            </div>
                            <div class="card-session-content pt-lg">
                                <div><span>bindu</span></div>
                            </div>
                        </div>
                        <div class="card-section border-b box-border">
                            <div class="flex justify-between card-section-header mb-1">
                                <h3 class="card-session-title">Email</h3>
                            </div>
                            <div class="card-session-content pt-lg">
                                <div><span>klu@gmail.com</span></div>
                            </div>
                        </div>
                        <div class="card-section border-b box-border">
                            <div class="flex justify-between card-section-header mb-1">
                                <h3 class="card-session-title">Group</h3>
                            </div>
                            <div class="card-session-content pt-lg">
                                <div><span>General</span></div>
                            </div>
                        </div>
                        <div class="card-section border-b box-border">
                            <div class="flex justify-between card-section-header mb-1">
                                <h3 class="card-session-title">Status</h3>
                            </div>
                            <div class="card-session-content pt-lg">
                                <div><span>Enabled</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`
}