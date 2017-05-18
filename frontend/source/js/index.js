import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import '../scss/app.scss';
import store from './redux/store';

var data = [];

for (let i =0; i< 500000; i++){
    data.push('word' + i);
}



console.time();
var elem = "20";
var ft = data.filter(
    (item) => {
        return item.indexOf(elem) !== -1;
    }
);

console.timeEnd();
console.log(ft);

ReactDOM.render(<Provider store={store}>

    <App />

</Provider>, document.getElementById('root'));
