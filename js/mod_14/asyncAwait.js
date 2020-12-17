class HTTP {
    async get(url, data) {
        try {
            let response = await fetch(url, data = {});
            let responseData = await response.json();
            return responseData;
        } catch (error) {
            console.log(error);
        }
    }
    async post(url, data) {
        try {
            let response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify(data),
            })
        let responseData = response.json()
        return responseData;
        } catch (error) {
            console.log(error);
        }
       
    }
    async put(url, data) {
        
        try {
            let response = await fetch(url, { 
                    method: 'PUT',
                    headers: { 
                         'Content-Type': 'application/json; charset=UTF-8'
                    },
                    body: JSON.stringify(data),
            })
            let responseData = await response.json()
            return responseData;
            
        } catch (error) {
            console.log(error);
        }
    }
    async delete(url) {
      try {
          let response = await fetch(url, { 
                  method: 'DELETE',
                  headers: { 
                       'Content-Type': 'application/json; charset=UTF-8'
                  },
          })
          let responseData = await response.json()
          return responseData
          
      } catch (error) {
          console.log(error);
      }
    }
}
const http = new HTTP();
//let URL = `http://localhost:3000/drivers`
//http.get(URL)
//============================== POST ===========
// let carlos = {
//     name: 'Carlos Sainz',
//     points: 105
// }
//http.post(URL, carlos)

//==========================  PUT
// let URL = `http://localhost:3000/drivers/29`
// let carlos = {
//     name: 'Carlos Sainz ****bdfddfd******',
//     points: 105
// }
// http.put(URL, carlos)

//==================== DELETE

//  let URL = `http://localhost:3000/drivers/30`

// http.delete(URL)
