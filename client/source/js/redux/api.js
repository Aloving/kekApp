import fetch from 'isomorphic-fetch';

/* days */

export function getdays(data) {
    return fetch('/api/days/index', {
      headers: {'userid': data.userId}
    })
        .then((data) => data.json());


}
export function getcalendar(data) {
  return fetch('/api/days/calendar',
    {
      headers: {'userid': data.userId}
    })
    .then(data => data.json());


}
export function getdayById(data){

  return fetch('/api/days/byid/' + data.dayId + '',
    {
      headers: {'userid': data.userId}
    })
    .then(data => data.json());


}
export function getstat(data) {
  return fetch('/api/days/statistics',
    {
      headers: {'userid': data.userId}
    })
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
        userid: data.userId

      })
    })
    .then(data => data.json());

}
export function updateItem(data){

  return fetch('/api/days/task/update/' + data.itemId,{
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      dayid:data.dayId,
      title: data.title,
      price: data.price,
      userid: data.userId
    })
  })
    .then(res => res.json())

}
export function deleteItem(data){
  return fetch('/api/days/task/delete/' +data.itemId, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      dayid:  data.dayId,
      userid: data.userId
    })
  })
    .then(res => res.json())
}

/*marks*/

export function getmarks(data) {
    return fetch('/api/marks/getmarks', {
      headers: {'userid': data.userId}
    })
        .then((data) => data.json());

}
export function addmark(data) {
   return fetch('/api/marks/addmark',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: data.title,
                defaultItem: data.defaultItem,
              userid: data.userId
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
        password: data.password,
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