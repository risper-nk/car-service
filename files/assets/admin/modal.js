export const addModal = (id)=>{
	let el = `
		<div id=${id} class="modal fade" role="dialog">
		  <div class="modal-dialog">

			<!-- Modal content-->
			<div class="modal-content">
			  <div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" style="position:absolute;right:2%;">&times;</button>
				<h4 class="modal-title">Modal Header</h4>
			  </div>
			  <div class="modal-body" >
				<p>Some text in the modal.</p>
			  </div>
			  <div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal"  >Close</button>
			  </div>
			</div>

		  </div>
		</div>
	`
	return el
}



export function editModal(id,titletext,children,settings=undefined){
	
	const body =document.getElementById(id);
	
	const title = body.getElementsByClassName("modal-title")
	const el = body.getElementsByClassName("modal-body")
	const footer = body.getElementsByClassName("modal-footer")[0]
	title[0].innerHTML = titletext
	el[0].innerHTML = children()
	el[0].setAttribute("style","width:99%;margin: 0;padding: 0;")
	if(settings !== undefined){
		if(settings.footer !== undefined){
			var ft = document.createElement(settings.footer.element)
			ft.setAttribute("type",settings.footer.type)
			ft.setAttribute("onclick",settings.footer.onclick ? settings.footer.onclick : "close")
			ft.innerText = settings.footer.text ? settings.footer.text : "next"
			console.log(footer.children)
			footer.appendChild(ft)
		}
	}
}

