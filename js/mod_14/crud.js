class HTTP {
    get(url,data={}) {
        return new Promise((resolve, reject) => {
            fetch(url, data = {})
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err=>reject(err))
        })
    }
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify(data),
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err=>reject(err))
        })
    }
    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify(data),
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err=>reject(err))
        })
    }
    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err=>reject(err))
        })
    }
}
const http = new HTTP();
let URL = 'http://localhost:3000/drivers/34';

//===================== get ==================
// http.get(URL).then(data=>console.log(data))

//===================== post =================
// let daniel = {
//     name: 'Daniel Ricciardo',
//     points: 119,
// }

// http.post(URL, daniel)

//========================== PUT =================

// let daniel = {
//     name: 'Daniel Ricciardo !!!!!!!',
//     points: 119,
// }
// let URL = 'http://localhost:3000/drivers';

// http.put(URL, daniel).then(data => console.log(data));

//================== DELETE =====================

// let URL = 'http://localhost:3000/drivers/34';
// http.delete(URL)
