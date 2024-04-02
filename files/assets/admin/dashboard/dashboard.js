import { salesStats } from "./elements/salesStats.js";
import {id} from "./../id.js"

export function Dashboard(children){
    return document.getElementById(id).innerHTML = `
        <div class="main-content-inner">
        <div class="page-heading flex justify-between items-center">
            <div class="flex justify-start space-x-1 items-center">
                <div class="self-center">
                    <h1 class="page-heading-title">Dashboard</h1>
                </div>
            </div>
            <div class="flex justify-end space-x-1 items-center"></div>
        </div>
        <div class="grid grid-cols-3 gap-x-2 grid-flow-row ">
            ${salesStats()}
        </div>
    </div>
    `
}