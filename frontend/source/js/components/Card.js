import React from 'react';
import ReactDOM from 'react-dom';




class Card extends React.Component {


    render(){
        var items = this.props.items.map((item) => {
            return  <div className={"item color_" + Math.round(Math.random() * 4)+ ""} key={item.id} id={item.id}>
                <span className="item__title">{item.title}</span>
                <span className="item__price">{item.price}</span>

            </div>
        })

        return(
            <div className={"card color_" + Math.round(Math.random() * 4)+ ""}  id={this.props.id}>
                <div  className="card__header">
                    <span  className="card__date">{this.props.date}</span>
                    <button onClick={this.handleClick} className="card__add">+</button>
                </div>

                <div className="card__content">
                    {items}
                </div>


            </div>

        )
    }
}

export default Card;