import { Session } from "../session.js"
import {loginForm,registerForm} from "./loginForm.js"
const id = "content-wrapper"

export function Login(){
    return document.getElementById(id).innerHTML = `
	<style>
	.header{display:none;}
	</style>
	<div class="main-content login-content">
		<div class="main-content-inner login-content-inner">
			<div class="admin-login-form">
				<div class="flex items-center justify-center mb-3 img">
					
					<div>
						${loginForm()}
					</div>
				</div>
			</div>
		</div>
	</div>
    `
}

export function Register(){
    return document.getElementById(id).innerHTML = `
	<style>
	.header{display:none;}
	</style>
	<div class="main-content login-content">
		<div class="main-content-inner login-content-inner">
			<div class="admin-login-form">
				<div class="flex items-center justify-center mb-3 img">
					
					<div>
						${registerForm()}
					</div>
				</div>
			</div>
		</div>
	</div>
    `
}

export function Logout(){
	const session = new Session()
	session.delete()
	Login()
}