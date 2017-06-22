import React from 'react';

import Card from './Card';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import spinner from '../../../assets/spinner.gif';


class Cards extends React.Component {








    render() {


        var counter = 0;
        var cards;

       if(this.props.cards.loading){

        cards = ''

       }else{

           cards = this.props.cards.map((item) => {
               counter++;
               return <Card onDeleteItem={this.props.onDeleteItem} first={counter == 1 ? true : false} stat={this.props.stat ? true : false} openModal={this.props.openModal}  id={item.id || item._id} date={item.date}
                            items={item.items} key={item.id || item._id}/>


           });
       }


        return (

            <div className="container">
                <ReactCSSTransitionGroup  transitionName="animation-opacity"
                                          transitionAppear={true}
                                          transitionEnterTimeout={600}
                                          transitionLeaveTimeout={600}
                                          transitionAppearTimeout={600}
                >
                    {cards}
                </ReactCSSTransitionGroup>

            </div>

        )
    }
}

export default Cards;