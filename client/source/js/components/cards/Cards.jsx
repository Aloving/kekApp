import React from "react";
import Card from "./Card";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const Cards = ({cards, onDeleteItem, stat, openModal}) => {
    var counter = 0;
    var content;
    if (cards.loading) {
      content = ''
    } else {
      content = cards.map((item) => {
        counter++;
        return <Card onDeleteItem={onDeleteItem} first={counter == 1 ? true : false} stat={stat ? true : false} openModal={openModal}
                     id={item.id || item._id} date={item.date}
                     items={item.items} key={item.id || item._id}/>
      });
    }

    return (
      <div className="container">
        <ReactCSSTransitionGroup transitionName="animation-opacity"
                                 transitionAppear={true}
                                 transitionEnterTimeout={600}
                                 transitionLeaveTimeout={600}
                                 transitionAppearTimeout={600}
        >
          {content}
        </ReactCSSTransitionGroup>
      </div>
    )
}

export default Cards;