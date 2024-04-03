import { fetchFunction } from "../../modules.js"
const chartFunction = (id,labels,data) =>{
	var xValues = labels;
	var yValues = data ? data : [70, 30];
	var barColors = ["#87CEEB", "#28282B"];

	new Chart(id, {
	  type: "pie",
	  data: {
		labels: xValues,
		datasets: [{
		  backgroundColor: barColors,
		  data: yValues
		}]
	  },
	  options: {
		title: {
		  display: true,
		 
		}
	  }
	});
	return true
}

const barChart= (id,data1,data2,data3) =>{
	console.log("in")
	var xValues = ["Jan","Feb","March","April","May","June","July","August","Sept","Oct","Nov","Dec"];
	//var yValues = data
	//var barColors = "#28282B";

	new Chart(id, {
	  type: "bar",
	  data: {
		labels: xValues,
		datasets: [{
            label: data1.name,
            data: data1.data,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          },
          {
            label: data2.name,
            data: data2.data,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          },
          {
            label: data3.name,
            data: data3.data,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
	  },
	  options: {
		title: {
		  display: true,
		  text: "Total Visits"
		}
	  }
	});
	return true
}

function lifetTimeSales(data){
    setTimeout(function(){
          var chartdata = [{
            name: 'Net Profit',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          }, {
            name: 'Revenue',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          }, {
            name: 'Total Balance',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          }]
          for(var dt of data.invoice.data){
            var date = new Date(dt.date)
            date = date.getMonth()
            if(dt.complete){
                chartdata[0].data[date] += dt.amount
                chartdata[1].data[date] += dt.amount
            }
            chartdata[2].data[date] += dt.amount
          }
          $("#salesChart").html('')
          $("#salesGraph").html('')
        chartFunction("salesChart",[data.invoice.total,data.invoice.cancelled])
        barChart("salesGraph",chartdata[0],chartdata[1],chartdata[2])
    },999)
    return `
    <div class="col-span-1 grid grid-cols-1 gap-2 auto-rows-max">
        <div class="card shadow">
            <div class="flex justify-between card-header">
                <h2 class="card-title">Lifetime Sales</h2>
            </div>
            <div class="card-section border-b box-border">
                <div class="card-session-content pt-lg">
                    <div class="grid grid-cols-1 gap-1">
                        <div class="flex space-x-1 items-center">
                            <span class="info dot" style="width: 1rem; height: 1rem;"></span>
                            <div class="self-center">${data.invoice.data.length} orders</div>
                        </div>
                        <div class="flex space-x-1 items-center">
                            <span class="info dot" style="width: 1rem; height: 1rem;"></span>
                            <div class="self-center">$${data.invoice.total} lifetime sale</div>
                        </div>
                        <div class="flex space-x-1 items-center">
                            <span class="success dot" style="width: 1rem; height: 1rem;"></span>
                            <div class="self-center">${100*(data.invoice.complete/data.invoice.total) ? 100*(data.invoice.complete/data.invoice.total) : 0} % of orders completed</div>
                        </div>
                        <div class="flex space-x-1 items-center">
                            <span class="critical dot" style="width: 1rem; height: 1rem;"></span>
                            <div class="self-center">${100*(data.invoice.cancelled/data.invoice.data.length) ? 100*(data.invoice.cancelled/data.invoice.data.length) : 0}% of orders cancelled</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-section border-b box-border">
                <div class="card-session-content pt-lg" id="salesChart">
                    <div class="skeleton-wrapper-lifetime">
                        <div class="skeleton-chart"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}

function bestSellers(data){
    let el = ``
    let arr  = []
    let categories = []
    let keys = data.data
    for(var s of data.categories){
        if(arr.length === 0){arr.push(keys[s._id]);categories.push(s)}
        if(!categories.includes(s)){// arr[arr.length-1]
            let k = arr[arr.length-1]
            arr[arr.length-1] = keys[s._id]
            arr.push(k)
            let y = categories[categories.length-1]
            categories[categories.length-1] = s
            categories.push(y)
        }
    }
   
    for(var category of categories){
        el += `
        <tr>
            <td>
                <div class="grid-thumbnail text-border border border-divider p-075 rounded flex justify-center" style="width: 6rem; height: 6rem;">
                    <img class="object-cover"srcc="" alt="">
                </div>
            </td>
            <td>
                <a href="/admin/categories/edit?${category._id}" class="font-semibold hover:underline">${category.name}</a>
            </td>
            <td>$${category.price}</td>
            <td>${arr[categories.indexOf(category)]}</td>
        </tr>
        `
    }
    return el
}

function recentOrders(datas){
    console.log(datas)
    let el = ``
    for(var data of datas.bookings){
        el += `
        <tr>
            <td>
                <div class="grid-thumbnail text-border border border-divider p-075 rounded flex justify-center" style="width: 6rem; height: 6rem;">
                    <img class="object-cover"srcc="" alt="">
                </div>
            </td>
            <td>
                <a href="/admin/orders/edit?${data.invoice._id}" class="font-semibold hover:underline">${data.user.name}</a>
            </td>
            <td>$${data.invoice.amount}</td>
            <td>${data.service.name}</td>
        </tr>
        `
    }
    return el
}

export function salesStats(){
    fetchFunction("/api/models/admin/getAnalysis",{},"post",function(data){
        //console.log(data)
        document.getElementById("lifetimeSales").innerHTML = lifetTimeSales(data)
    })
    fetchFunction("/api/models/admin/bestSellers",{},"post",function(data){
        console.log(data)
        document.getElementById("bestSellers").innerHTML = bestSellers(data)
    })
    fetchFunction("/api/models/admin/recentOrders",{},"post",function(data){
        console.log(data)
        document.getElementById("recentOrders").innerHTML = recentOrders(data)
    })
    return `
        <div class="col-span-2 grid grid-cols-1 gap-2 auto-rows-max">
            <div class="card shadow">
                <div class="flex justify-between card-header">
                    <h2 class="card-title">Sale Statistics</h2>
                </div>
                <div class="card-section border-b box-border">
                    <div class="card-session-content pt-lg" id="salesGraph">
                        <div class="skeleton-wrapper-lifetime">
                            <div class="skeleton-chart"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card shadow">
                <div class="flex justify-between card-header">
                    <h2 class="card-title">Best Sellers</h2>
                </div>
                <div class="" >
                <div class="card-section border-b box-border">
                    <div class="card-session-content pt-lg">
                        <table class="listing bestsellers">
                            <tbody id="bestSellers">
                            </tbody>
                        </table>
                    </div>
                </div>
                </div>
            </div>
            <div class="card shadow">
                <div class="flex justify-between card-header">
                    <h2 class="card-title">Recent orders</h2>
                </div>
                <div class="" >
                <div class="card-section border-b box-border">
                    <div class="card-session-content pt-lg">
                        <table class="listing bestsellers">
                            <tbody id="recentOrders">
                            </tbody>
                        </table>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div id="lifetimeSales"></div>
    `
}