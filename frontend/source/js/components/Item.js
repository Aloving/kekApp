import React from 'react';

class Item extends React.Component {
    render() {

        var classNames = [];

        this.props.defaultItem ? classNames.push('item_default')  : '';
        this.props.total ? classNames.push('item_total') : '';
        this.props.stat ? classNames.push('item_percent') : '';
        

        if(this.props.percent){
        var style = {
            
                width: this.props.percent + '%',
            
        }
    }
        var className = 'item ' + classNames.join(' ');

        return (


            <div className={className}>
            { 
                this.props.percent ? 

                <span className="item__percent" style = {style}></span>
                : ''
            }
                <span className='item__price'>{this.props.price}</span>
                 <span className='item__title'>{this.props.title}</span>

            </div>
        )
    }
}

export default Item;