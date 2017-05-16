import React from 'react';

class Modal extends React.Component{
    constructor() {
        super()
        this.state= {
            addMarkOpen: false
        }
    }
    handleClick(){
        this.setState({addMarkOpen : !this.state.addMarkOpen})
    }
    render(){

        return(
            <div className='modal'>
                <form className='modal__body'>
                    <button className='modal__add'>+</button>
                    <button className='modal__close'>+</button>
                    <div className='modal__content'>
                        <input type='text' className='modal__input'/>
                        <div className="modal__marks modal__marks_default">
                            <button className="mark mark_default">Продукты</button>
                        </div>
                        <div className="modal__marks modal__marks_undefault">
                            <button className="mark mark_undefault">Продукты</button>
                            <div className={this.state.addMarkOpen ? "add-mark add-mark_active" : "add-mark"} >
                                <div className="add-mark__label" onClick={this.handleClick.bind(this)} >+</div>
                                <input className="add-mark__input"/>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}

export default Modal;