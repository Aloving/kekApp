import React from 'react';
import ReactDOM from 'react-dom';
import Item from './Item';

class Card extends React.Component {
    constructor(){
        super();
        this.state={
            open: false
        }
    }

    openModal() {
        this.props.openModal(this.props.id);
    }
    toggle(){
        this.setState({open: !this.state.open})
    }
    componentDidMount(){
       if(this.props.first) {
           this.setState({open: true})
       }

    }

    render() {
        if(this.props.stat == true){
            var counter = 0;
            var summ = 0;
            this.props.items.map((item) => {
                summ += item.price;
            })
        }

        var items = this.props.items.map((item) => {
                return <Item stat={this.props.stat} percent={this.props.stat ? Math.round((item.price / (summ / 80) )) : ''} number={Math.round(Math.random() * 4)} price={item.price} title={item.title} key={this.props.id ? item._id : counter++}/>;
        })

        return (
            <div className={"card color_" + this.props.number + ""} ref="card" id={this.props.id}>
                <div className="card__header">
                    <span className="card__date">{typeof this.props.date == 'object' ? `${this.props.date.month < 10 ? '0' + this.props.date.month : this.props.date.month}.${this.props.date.year}` : this.props.date}</span>
                    {this.props.openModal ? <button onClick={this.openModal.bind(this)} className="card__add">+</button> : null}
                    <button onClick={this.toggle.bind(this)} className={this.state.open ? 'card__toggle card__toggle_open' : 'card__toggle card__toggle_close' }><span className="card__toggle-icon">▼</span></button>
                </div>

                <div className={this.state.open ? "card__content card__content_open" : "card__content card__content_close"}>
                    {items}
                </div>


            </div>

        )
    }
}

export default Card;