import { Session } from "./session.js";
const api = ""
export async function fetchFunction(apiUrl, payload, method,nextFunction,header) {
    try {
     
      const session = new Session()
      const options = {
        method: method || 'GET', // Default to GET if method is not provided
        headers: {
          'Content-Type': header || 'application/json', // Set content type to JSON
          "x-auth-token": session.get("user") ? session.get("user") : session.get("token")
        }
      };
  
      if (payload) {
        options.body = JSON.stringify(payload); // Include payload in request body if provided
      }
  
      const response = await fetch(api+apiUrl, options);
    
      const data = await response.json();
      nextFunction(data); // Send data to the next function
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
  
  export function createAlert(data){
    console.log(data)
    data = data.message ? data.message : data
    document.getElementById("Toastify").innerHTML += `
      
        <div id="" class="Toastify__toast Toastify__toast--success" style="animation-fill-mode: forwards; animation-duration: 750ms; transition: transform 0.2s ease 0s, opacity 0.2s ease 0s; transform: translateX(0px); opacity: 1;">
          <div role="alert" class="Toastify__toast-body">${data ? data : "success"}</div><button onclick="this.parentElement.remove()" class="Toastify__close-button Toastify__close-button--error" type="button" aria-label="close"><svg aria-hidden="true" viewBox="0 0 14 16"><path fill-rule="evenodd" d="M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"></path>
         </svg></button>
        </div>
    
    `
  }