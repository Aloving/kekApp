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



        return (
            <div className={this.props.stat ? 'item_percent item color_' + this.props.number + '' : ' item color_' + this.props.number + ''}>
                <span style={style}
                      className={'item__title color_' + this.props.number + ''}>{this.props.title}</span>
                <span className='item__price'>{this.props.price}</span>

            </div>
        )
    }
}

export default Item;