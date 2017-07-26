import React from "react";
import Item from "./Item";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import arrow from "../../../assets/arrow.svg";
import Icon from "../Icon";

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    }
  }

  openModal() {
    this.props.openModal({id: this.props.id, type: 'add'});
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
    var summ = 0;
    this.props.items.map((item) => {
      summ += item.price;
    })
    var items = this.props.items.map((item) => {
      return <Item stat={this.props.stat}
                   defaultItem={item.defaultItem}
                   percent={this.props.stat ? Math.round((item.price / (summ / 100) )) : null}
                   price={item.price}
                   title={item.title}
                   onDeleteItem={this.props.onDeleteItem}
                   parentId={this.props.id}
                   id={item._id || item.id}
                   key={ item._id || item.id}
                   openModal={this.props.openModal}
      />;
    })
    var total = <Item
      total={true}
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
      <div className="card" ref="card" id={this.props.id}>
        <div className="card__header">
          {
            this.props.stat ?
              '' :
              <button onClick={this.openModal.bind(this)} className="card__add">+</button>
          }
          <span className="card__date">
                    {typeof this.props.date == 'object' ? `${this.props.date.month < 10 ? '0' + this.props.date.month : this.props.date.month}.${this.props.date.year}` : this.props.date}
                    </span>
          <button
            onClick={this.toggle.bind(this)}
            className={this.state.open ? 'card__toggle card__toggle_open' : 'card__toggle card__toggle_close' }><span className="card__toggle-icon"><Icon id={arrow.id}/></span>
          </button>
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