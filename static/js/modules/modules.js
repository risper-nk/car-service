
const api = ""
export async function fetchFunction(apiUrl, payload, method,nextFunction) {
    try {
      console.log(apiUrl)
      const options = {
        method: method || 'GET', // Default to GET if method is not provided
        headers: {
          'Content-Type': 'application/json' // Set content type to JSON
        }
      };
  
      if (payload) {
        options.body = JSON.stringify(payload); // Include payload in request body if provided
      }
  
      const response = await fetch(api+apiUrl, options);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      nextFunction(data); // Send data to the next function
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
  