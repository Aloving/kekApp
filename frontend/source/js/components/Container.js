import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import spinner from './../../assets/spinner.gif';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// var spinner = './assets/spinner.gif';

class Container extends React.Component {

    shouldComponentUpdate(nextProps) {
        return (nextProps.cards !== this.props.cards);
    }

    render() {

        var counter = 0;
        var cards;

       if(Array.isArray(this.props.cards)){

          cards = this.props.cards.map((item) => {
                   counter++;
                   return <Card first={counter == 1 ? true : false} stat={this.props.stat ? true : false} number={Math.round(Math.random() * 4) } openModal={this.props.openModal} onDeleteItem={this.props.onDeleteItem} id={item.id} date={item.data || item.date}
                                items={item.items} key={item.id ? item.id : counter}/>


               });
       }else if(this.props.cards == 'loading'){
           cards =  ''
       }else if(Object.prototype.toString.call(this.props.cards) == "[object Object]" && this.props.cards.items){

           cards = <Card first={true}  stat={false} number={Math.round(Math.random() * 4) } openModal={this.props.openModal} onDeleteItem={this.props.onDeleteItem} id={this.props.cards.id} date={this.props.cards.date}
                            items={this.props.cards.items} key={this.props.cards.id}/>
       }else{
           cards =  ''
       }


        return (

            <div className="container">
                <ReactCSSTransitionGroup  transitionName="animation-opacity"
                                          transitionAppear={true}
                                          transitionEnterTimeout={800}
                                          transitionLeaveTimeout={800}
                                          transitionAppearTimeout={800}
                >
                    {cards}
                </ReactCSSTransitionGroup>

            </div>

        )
    }
}

export default Container;