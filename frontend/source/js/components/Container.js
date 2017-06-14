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
        
        console.log('CONATINER',this.props.cards);

       if(Array.isArray(this.props.cards)){

          cards = this.props.cards.map((item) => {
                   counter++;
                   return <Card onDeleteItem={this.props.onDeleteItem} first={counter == 1 ? true : false} stat={this.props.stat ? true : false} number={Math.round(Math.random() * 4) } openModal={this.props.openModal}  id={item.id} date={item.data || item.date}
                                items={item.items} key={item.id ? item.id : counter}/>


               });
       }else if(this.props.cards == 'loading'){
           cards =  ''
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