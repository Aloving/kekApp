import home_img from '../../assets/home.svg';
import update_img from '../../assets/update.svg';
import update_img_grey from '../../assets/update_grey.svg';
import del_img from '../../assets/del.svg';
import del_img_grey from '../../assets/del_grey.svg';
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
                {
                    this.props.total ? '' :
                        <div className='item__right'>
                            <span  className='item__update'><img src={this.props.defaultItem ? update_img : update_img_grey}/></span>
                            <span  className='item__delete'><img src={this.props.defaultItem ? del_img : del_img_grey}/></span>
                        </div>


                }


            </div>
        )
    }
}

export default Item;