import fetch from 'isomorphic-fetch';



export function getdays() {
    return fetch('api/getdays/index')
        .then((data) => data.json());


}

export function getmarks() {
    return fetch('api/getmarks')
        .then((data) => data.json());

}
export function getstat() {
    return fetch('api/getstatistic')
        .then((data) => data.json());

}


export function updatelist(data) {

   
    return fetch('/api/updatelist/' + data.id,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: data.title,
                price: +data.price,
            })
        })
        .then(data => data.json());

}


export function addmark(title) {
   return fetch('/api/addmark',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                defaultItem: false
            })
        })
        .then(data => data.json())
     

}

export function getcalendar() {
    return fetch('api/getdays/calendar/')
        .then(data => data.json());


}
