import React from 'react';
import ReactDOM from 'react-dom';
import Item from './Item';

class Card extends React.Component {

    openModal() {

        this.props.openModal(this.props.id);
    }

    render() {


        var items = this.props.items.map((item) => {
            return <Item number={Math.round(Math.random() * 4)} price={item.price} title={item.title} key={item._id}/>

        })

        return (
            <div className={"card color_" + this.props.number + ""} ref="card" id={this.props.id}>
                <div className="card__header">
                    <span className="card__date">{this.props.date}</span>
                    <button onClick={this.openModal.bind(this)} className="card__add">+</button>
                </div>

                <div className="card__content">
                    {items}
                </div>


            </div>

        )
    }
}

export default Card;