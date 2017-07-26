import React from "react";
import Marks from "./Marks";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const ModalBody = ({open, closeModal, formSubmit,  priceChange, priceValue, errorMessage, marksProps}) => {
    return (
      <div onClick={closeModal} className={open ? 'modal modal_open' : 'modal'}>
        <div className='modal__body'>
          <button className='modal__add' onClick={formSubmit}>+</button>
          <div className='modal__close' onClick={closeModal}><span>+</span></div>
          <div className='modal__content'>
            <input
              className='modal__input'
              placeholder="Введите сумму покупки"
              onChange={priceChange}
              value={priceValue}/>
            <span className="modal__error">{errorMessage}</span>
            <ReactCSSTransitionGroup transitionName="animation-opacity"
                                     transitionAppear={true}
                                     transitionAppearTimeout={800}
                                     transitionEnterTimeout={800}
                                     transitionLeaveTimeout={800}
            >
              <Marks  {...marksProps}/>
            </ReactCSSTransitionGroup>
          </div>
        </div>
      </div>
    )

}

export default ModalBody;