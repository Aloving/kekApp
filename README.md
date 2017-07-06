# KekApp
App for lulz

## api Routes

## /days
| Route | Information | Method | Request Example | Response Example |
| - | - | - | - | - |
|  /api/days/index  | 7 days for index page | GET | [request](https://gist.github.com/Aloving/9234878ee1088d91485f7d18f5d4e8b9) | [response](https://gist.github.com/Aloving/4e6fd5b572b9958b0853d3f94c852dd2) |
| /api/days/calendar | route for getting calendar data | GET | [request](https://gist.github.com/Aloving/41839991e5c71646249727622ec0db0f) | [response](https://gist.github.com/Aloving/560efcd324aaa311ef3e9606885f6e1e) |
| /api/days/byid/:id | route for getting single day | GET | [request](https://gist.github.com/Aloving/36e48d762d0836b062013514c96e4a63) | [response](https://gist.github.com/Aloving/88e032796ee72be9995b3dba8e00aaf0) |
| /api/days/statistics | route for getting single day | GET | [request](https://gist.github.com/Aloving/73e0971074cae7a4305093be948b2cdb) | [response](https://gist.github.com/Aloving/68072fedb48369bfd5d323b817ebd8f6) |
#### /days / task (notes calls "task", nevermind)
| Route | Information | Method | Request Example | Response Example |
| - | - | - | - | - |
| /api/days/task/add | route for add a note in to the day | POST | [request](https://gist.github.com/Aloving/1085f9d48373c29dc74397c74e8e274e) |  [response](https://gist.github.com/Aloving/55612f93bcd5d86cfb89e1cdc44ee57a) |
| /api/days/task/update/:id | route for update "task" | PUT | [request](https://gist.github.com/Aloving/f0f85e62dcbc6611aeeaaa7d21bdc12a) | [response](https://gist.github.com/Aloving/1085f9d48373c29dc74397c74e8e274e) same like "add method" |
| /api/days/task/delete/:id | route for delete "task" | DELETE | [request](https://gist.github.com/Aloving/2fbcfbbc11ecba263d33be278add3e48) | [response](https://gist.github.com/Aloving/ea82ce3fe6e0254d2c38d04966af277b) |
## /marks
| Route | Information | Method | Request Example | Response Example |
| - | - | - | - | - |
|  /api/marks/getmarks  | route for getting marks | GET | [request](https://gist.github.com/Aloving/143c64c1fa2bad919c51cd3f808cece6) | [response](https://gist.github.com/Aloving/fb4959600cc749e55b096e4178e2fcf8) |
| /api/marks/addmark | route add undefault mark | POST | [request](https://gist.github.com/Aloving/b8cada6ab8a05577875b3d9365f9256a) | [response](https://gist.github.com/Aloving/https://gist.github.com/Aloving/3adee92e1c40d19f91e94af3a417a09a) |
## /auth
