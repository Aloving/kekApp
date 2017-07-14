import fetch from 'isomorphic-fetch';

/* days */

export function getdays() {
    return fetch('/api/days/index')
        .then((data) => data.json());


}
export function getcalendar() {
  return fetch('/api/days/calendar')
    .then(data => data.json());


}
export function getdayById(id){

  return fetch('/api/days/byid/' + id + '')
    .then(data => data.json());


}
export function getstat() {
  return fetch('/api/days/statistics')
    .then((data) => data.json());

}

/* tasks */

export function updatelist(data) {
  return fetch('/api/days/task/add/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        dayid: data.id,
        title: data.title,
        price: data.price,
      })
    })
    .then(data => data.json());

}
export function updateItem(data){
  return fetch('/api/days/task/update/' +  data.itemId,{
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      dayid:data.dayId,
      title: data.title,
      price: data.price,
    })
  })

}
export function deleteItem(data){
  return fetch('(/api/days/task/delete/' +   data.itemId, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      dayid:  data.dayId,
    })
  });
}

/*marks*/

export function getmarks() {
    return fetch('/api/marks/getmarks')
        .then((data) => data.json());

}
export function addmark(title) {
   return fetch('/api/marks/addmark',
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


/* auth */



export function createUser(data){
  return fetch('/auth/user',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: data.username,
        password: data.password
      })
    })
    .then(res => res.json())



}


export function getUser(data){
  return fetch('/auth/user', {
    method: 'GET',
    headers: {'x-auth': data.token}
  })
    .then(res =>  res.json())
}

export function getToken(data){
  return fetch('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: data.username,
      password: data.password
    })
  })
    .then(res => res.json())

}