import update_img from "../../../assets/update.svg";
import del_img from "../../../assets/del.svg";
import React from "react";
import Icon from "../Icon";
import PropTypes from "prop-types";


class Item extends React.Component {
  onDeleteItem(evt) {
    this.item.classList.add('item_leave')
    var self = this;
    setTimeout(function () {
      self.props.onDeleteItem({
        dayId: self.props.parentId, itemId: self.props.id
      });
    }, 300)
  }

  onUpdateItem() {
    this.props.openModal({id: this.props.parentId, type: 'update', itemId: this.props.id});
  }

  render() {
    var classNames = [];
    this.props.defaultItem ? classNames.push('item_default') : '';
    this.props.total ? classNames.push('item_total') : '';
    this.props.stat ? classNames.push('item_percent') : '';
    if (this.props.percent) {
      var style = {
        width: this.props.percent + '%',
      }
    }
    var className = 'item ' + classNames.join(' ');

    return (
      <div className={className} ref={(item) => {
        this.item = item;
      }}>
        {
          this.props.percent ?
            <span className="item__percent" style={style}></span>
            : ''
        }
        <span className='item__price'>{this.props.price}</span>
        <span className='item__title'>{this.props.title}</span>
        {
          this.props.total || this.props.stat ? '' :
            <div className='item__right'>
              <span onClick={this.onUpdateItem.bind(this)} className={ this.props.defaultItem ? 'item__update item__update_green' : 'item__update item__update_grey'}><Icon
                id={update_img.id}/></span>
              <span onClick={this.onDeleteItem.bind(this)} className={ this.props.defaultItem ? 'item__delete item__delete_green' : 'item__delete item__delete_grey'}><Icon
                id={del_img.id}/></span>
            </div>
        }
      </div>
    )
  }
}

Item.propTypes = {
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}

export default Item;