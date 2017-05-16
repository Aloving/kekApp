import React from 'react';
import ReactDOM from 'react-dom';
import update from 'react-addons-update';
import Container from './Container'
import Modal from './Modal';

var data = [
    {
        id: '' + (Math.round(Math.random() * 1000000)),
        date: '11.05.2017',
        items: [
            {
                id: '' + (Math.round(Math.random() * 1000000)),
                title: 'Lorem',
                price: 600
            },
            {
                id: '' + (Math.round(Math.random() * 1000000)),
                title: 'Ipsum',
                price: 100
            },
            {
                id: '' + (Math.round(Math.random() * 1000000)),
                title: 'Dolore',
                price: 6000
            }
        ]
    },
    {
        id: '' + (Math.round(Math.random() * 1000000)),
        date: '11.05.2017',
        items: [
            {
                id: '' + (Math.round(Math.random() * 1000000)),
                title: 'Lorem',
                price: 600
            },
            {
                id: '' + (Math.round(Math.random() * 1000000)),
                title: 'Ipsum',
                price: 100
            },
            {
                id: '' + (Math.round(Math.random() * 1000000)),
                title: 'Dolore',
                price: 6000
            }
        ]
    },
    {
        id: '' + (Math.round(Math.random() * 1000000)),
        date: '11.05.2017',
        items: [
            {
                id: '' + (Math.round(Math.random() * 1000000)),
                title: 'Lorem',
                price: 600
            },
            {
                id: '' + (Math.round(Math.random() * 1000000)),
                title: 'Ipsum',
                price: 100
            },
            {
                id: '' + (Math.round(Math.random() * 1000000)),
                title: 'Dolore',
                price: 6000
            }
        ]
    },
    {
        id: '' + (Math.round(Math.random() * 1000000)),
        date: '11.05.2017',
        items: [
            {
                id: '' + (Math.round(Math.random() * 1000000)),
                title: 'Lorem',
                price: 600
            },
            {
                id: '' + (Math.round(Math.random() * 1000000)),
                title: 'Ipsum',
                price: 100
            },
            {
                id: '' + (Math.round(Math.random() * 1000000)),
                title: 'Dolore',
                price: 6000
            }
        ]
    },
    {
        id: '' + (Math.round(Math.random() * 1000000)),
        date: '11.05.2017',
        items: [
            {
                id: '' + (Math.round(Math.random() * 1000000)),
                title: 'Lorem',
                price: 600
            },
            {
                id: '' + (Math.round(Math.random() * 1000000)),
                title: 'Ipsum',
                price: 100
            },
            {
                id: '' + (Math.round(Math.random() * 1000000)),
                title: 'Dolore',
                price: 6000
            }
        ]
    },
    {
        id: '' + (Math.round(Math.random() * 1000000)),
        date: '11.05.2017',
        items: [
            {
                id: '' + (Math.round(Math.random() * 1000000)),
                title: 'Lorem',
                price: 600
            },
            {
                id: '' + (Math.round(Math.random() * 1000000)),
                title: 'Ipsum',
                price: 100
            },
            {
                id: '' + (Math.round(Math.random() * 1000000)),
                title: 'Dolore',
                price: 6000
            }
        ]
    },
]


class App extends React.Component {

    constructor() {
        super()
        this.state = {
            cards: data
        }
        this.deleteItem =  this.deleteItem.bind(this);

    }
    deleteItem(evt){
        var elemId = evt.target.parentElement.id;
        var cardId = evt.target.closest('.card').id;

    }
    render() {

        return (
        <div className="App">
            <header className="header"/>
            <Container onDeleteItem={this.deleteItem} cards={this.state.cards}/>
            <Modal/>
        </div>


        )
    }
}

export default App;