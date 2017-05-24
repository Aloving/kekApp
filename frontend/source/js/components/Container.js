import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import spinner from './../../assets/spinner.gif';


// var spinner = './assets/spinner.gif';

class Container extends React.Component {


    render() {

        var counter = 0;
        var Cards = this.props.cards == 'loading' ? <img src={spinner}/> : this.props.cards.map((item) => {
            counter++;
            return <Card first={counter == 1 ? true : false} stat={this.props.stat ? true : false} number={Math.round(Math.random() * 4) } openModal={this.props.openModal} onDeleteItem={this.props.onDeleteItem} id={item.id} date={item.data || item.date}
                         items={item.items} key={item.id ? item.id : counter}/>


        });

        return (

            <div className="container">
                {Cards}
            </div>

        )
    }
}

export default Container;