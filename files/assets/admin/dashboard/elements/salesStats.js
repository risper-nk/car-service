{import { fetchFunction } from "../../modules.js"}
function lifetTimeSales(){
    
    return `
    <div class="col-span-1 grid grid-cols-1 gap-2 auto-rows-max">
        <div class="card shadow">
            <div class="flex justify-between card-header">
                <h2 class="card-title">Lifetime Sales</h2>
            </div>
            <div class="card-section border-b box-border">
                <div class="card-session-content pt-lg">
                    <div class="skeleton-wrapper-lifetime">
                        <div class="skeleton"></div>
                        <div class="skeleton"></div>
                        <div class="skeleton"></div>
                        <div class="skeleton"></div>
                    </div>
                </div>
            </div>
            <div class="card-section border-b box-border">
                <div class="card-session-content pt-lg">
                    <div class="skeleton-wrapper-lifetime">
                        <div class="skeleton-chart"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}

export function salesStats(){
    fetchFunction("/api/models/admin/getAnalysis",{},"post",function(data){
        document.getElementById("lifetimeSales") = lifetTimeSales(data)
    })
    return `
        <div class="col-span-2 grid grid-cols-1 gap-2 auto-rows-max">
            <div class="card shadow">
                <div class="flex justify-between card-header">
                    <h2 class="card-title">Sale Statistics</h2>
                </div>
                <div class="skeleton-wrapper-statistic">
                    <div class="skeleton"></div>
                </div>
            </div>
            <div class="card shadow">
                <div class="flex justify-between card-header">
                    <h2 class="card-title">Best Sellers</h2>
                </div>
                <div class="skeleton-wrapper-bestsellers">
                    <div class="skeleton"></div>
                    <div class="skeleton"></div>
                    <div class="skeleton"></div>
                    <div class="skeleton"></div>
                    <div class="skeleton"></div>
                </div>
            </div>
        </div>
        <div id="lifetimeSales"></div>
    `
}