# KekApp
App for lulz

## api Routes

| Route | Info | Method |
| ------ | ------ | ------ |
| api/getdays/:cond/:id? | Route for get days | GET |
| api/getdays/index/| 7 last days for index page  | GET |
| api/getdays/calendar/ | Get all days with light version (_id, date)  | GET |
| api/getdays/byid/5927c876e393ac244c14114a | Information by day   | GET |
| api/updatelist:id | Route for update day items (example of request here: https://gist.github.com/Aloving/07e00b638af073d40a0f9099d1ebc96e) | POST |
| api/getmarks | Route for get marks | GET|
| api/addmark | Route for add common mark(example of request here: https://gist.github.com/Aloving/cbcb5ade0533fe3be918eeba2f2f2697) | POST|
| api/getstatistic | Route for get statictic | GET |
| api/updateday/:id | Route for update day task (example of request here: https://gist.github.com/Aloving/116854d0eafa9f144635bdd1394d7ab9) | Post