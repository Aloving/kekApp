import React from 'react';
import spinner from './../../assets/img/spinner.gif';

class Modal extends React.Component {
    constructor() {
        super();
        this.state = {
            addMarkOpen: false,
            addMarkValue: '',
        };
    }

    handleClick() {
        this.setState({addMarkOpen: !this.state.addMarkOpen});
    }

    closeModal(evt) {
        if (evt.target.classList.contains('modal') || evt.target.classList.contains('modal__close')) {
            this.props.closeModal();
        }
    }

    addMarkChange(evt) {
        console.log(this.state.addMarkValue);
        this.setState({addMarkValue: evt.target.value});

    }

    handleSubmit(evt) {
        evt.preventDefault();
        console.log('value', evt.target.getElementsByTagName('input')[0].value);

    }
    toggleClassActive(evt){
        // document.getElementsByClassName('mark').classList.remove('mark-active');
        // evt.target.classList.add('mark-active');
    }

    render() {
        var marks;
        if (this.props.open) {
            marks = this.props.marks == 'loading' || typeof this.props.marks.defaults == 'undefined' || typeof this.props.marks == 'undefined' ? <img src={spinner}/> :
                <div className="modal__marks">
                    <div className="modal__marks modal__marks_default">
                        {

                            this.props.marks.defaults.map((item) => {
                                var number = Math.round(Math.random() * 4);
                                return <button onClick={this.toggleClassActive.bind(this)} key={item.id} className={"mark mark_default color_" + number}>{item.title}</button>;
                            })

                        }

                    </div>
                    <div className="modal__marks modal__marks_undefault">
                        {
                            this.props.marks.unDefaults.map((item) => {

                                return <button onClick={this.toggleClassActive.bind(this)} key={item.id} className="mark mark_undefault">{item.title}</button>;
                            })
                        }
                        <div onClick={this.toggleClassActive.bind(this)} className={this.state.addMarkOpen ? 'add-mark add-mark_active mark' : 'mark add-mark'}>
                            <div className="add-mark__label"
                                 onClick={this.handleClick.bind(this)}>{this.state.addMarkOpen && this.state.addMarkValue != '' ? this.state.addMarkValue : '+'}</div>
                            <form id="addMark" onSubmit={this.handleSubmit.bind(this)}>
                                <input className="add-mark__input" onChange={this.addMarkChange.bind(this)} value={this.state.addMarkValue}/>
                            </form>
                        </div>
                    </div>
                </div>;

        } else {
            console.log('close', this.props.marks);
        }


        return (
            <div onClick={this.closeModal.bind(this)} className={this.props.open ? 'modal modal_open' : 'modal'}>
                <div className='modal__body'>
                    <button className='modal__add'>+</button>
                    <div className='modal__close' onClick={this.closeModal.bind(this)}>+</div>
                    <div className='modal__content'>
                        <input type='text' className='modal__input'/>
                        {marks}
                    </div>

                </div>
            </div>
        );
    }
}

export default Modal;