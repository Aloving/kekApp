import fetch from 'isomorphic-fetch';


export function getdays() {
    return fetch('api/getdays')
        .then((data) => data.json());


}

export function getmarks() {
    return fetch('api/getmarks')
        .then((data) => data.json());

}

export function updatelist(id, data) {
    return fetch('./api/updatelist/' + id + '',
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
        .then(data => data.json())
        .then(data => console.log(data));

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
                defaultItem: false,
            })
        })
        .then(data => data.json());


}


updatelist('591d7c03159ddc1ab809ce74', {title: 'тестовый заголовок', price: '10000'})