import fetch from 'isomorphic-fetch';

function returnData(data){
    return data;
}

export function getdays() {
    return fetch('api/getdays')
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


