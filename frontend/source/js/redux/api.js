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
    fetch('/api/addmark',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'kkk',
                defaultItem: false,
            })
        })
        .then(data => data.json())
        .then(data => console.log(data));

}