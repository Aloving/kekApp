import React from 'react';
import ReactDOM from 'react-dom';
import Item from './Item';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class Card extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false
        }
    }

    openModal() {
        this.props.openModal(this.props.id);
    }

    toggle() {
        this.setState({open: !this.state.open})
    }

    componentDidMount() {
        if (this.props.first) {
            this.setState({open: true})
        }

    }

    render() {

        var counter = 0;
        var summ = 0;
        this.props.items.map((item) => {
            summ += item.price;
        })


        var items = this.props.items.map((item) => {

            return <Item stat={this.props.stat}

                         percent={this.props.stat ? Math.round((item.price / (summ / 67) )) : null}
                         number={Math.round(Math.random() * 4)}
                         price={item.price}
                         title={item.title}
                         key={this.props.id ? item._id : counter++}
            />;
        })
        var total = <Item
            total={true}
            number={Math.round(Math.random() * 4)}
            price={summ}
            title='Всего'
            key='total'
        />;
        var content;
        if (this.state.open) {

            content = <div className={"card__content"}>
                {items}
                {total}
            </div>
        }


        return (
            <div className={"card color_" + this.props.number + ""} ref="card" id={this.props.id}>
                <div className="card__header">
                    <span
                        className="card__date">{typeof this.props.date == 'object' ? `${this.props.date.month < 10 ? '0' + this.props.date.month : this.props.date.month}.${this.props.date.year}` : this.props.date}</span>
                    {this.props.openModal ? <button onClick={this.openModal.bind(this)} className="card__add">+</button> : null}
                    <button onClick={this.toggle.bind(this)} className={this.state.open ? 'card__toggle card__toggle_open' : 'card__toggle card__toggle_close' }><span
                        className="card__toggle-icon">▼</span></button>
                </div>
                <ReactCSSTransitionGroup transitionName="toggle"
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
}

export default Card;