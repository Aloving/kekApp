import React from 'react';
import Marks from './Marks'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class ModalBody extends React.Component{
	render (){
     console.log(this.props);
		return(
			
			<div onClick={this.props.closeModal} className={this.props.open ? 'modal modal_open' : 'modal'}>
                <div className='modal__body'>
                    <button className='modal__add' onClick={this.props.formSubmit}>+</button>
                    <div className='modal__close' onClick={this.props.closeModal}><span>+</span></div>
                    <div className='modal__content'>
                        <input 
                            type='number'
                            className='modal__input' 
                            placeholder="Введите сумму покупки" 
                            onChange={this.props.priceChange} 
                            value={this.props.priceValue}/>
                        <span className="modal__error">{this.props.errorMessage}</span>
                        <ReactCSSTransitionGroup  transitionName="animation-opacity"
                                                  transitionAppear={true}
                                                  transitionAppearTimeout={800}
                                                  transitionEnterTimeout={800}
                                                  transitionLeaveTimeout={800}
                        >
                            <Marks  {...this.props.marksProps}/>
                        </ReactCSSTransitionGroup>

                    </div>

                </div>
            </div>
           
            )
	}
}

export default ModalBody;