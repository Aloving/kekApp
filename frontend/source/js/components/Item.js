import React from 'react';

class Item extends React.Component {
    render() {
        var style= {};
        if(this.props.stat){
            var percent = (this.props.percent + 20) + '%';
            style = {
                width: percent
            }
        }
        var className = this.props.total ? `item_total item color_${this.props.number}` : this.props.stat ? `item_percent item color_${this.props.number}`: `item color_${this.props.number}`;


        return (


            <div className={className}>
                <span style={style}
                      className={`item__title color_${this.props.number}`}>{this.props.title}</span>
                <span className='item__price'>{this.props.price}</span>

            </div>
        )
    }
}

export default Item;