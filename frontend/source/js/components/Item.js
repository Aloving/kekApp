import React from 'react';

class Item extends React.Component{
    render() {
        return(
            <div className={'item color_' + this.props.number + ''} >
                <span className={'item__title color_' + this.props.number + ''}>{this.props.title}</span>
                <span className='item__price'>{this.props.price}</span>

            </div>
        )
    }
}

export default Item;