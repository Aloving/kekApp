import React from 'react';
import spinner from './../../assets/spinner.gif';

class Modal extends React.Component {
    constructor() {
        super();
        this.state = {
            addMarkOpen: false,
            addMarkValue: '',
            priceValue: '',
            priceValid: '',
            buttonValid: '',
            activeButton: '',
            hintActive: false,
            errorMessage: ''
        };
    }

    handleClick(evt) {

        this.setState({addMarkOpen: !this.state.addMarkOpen});
         if(this.state.addMarkOpen == false){
            document.getElementsByClassName('add-mark__input')[0].focus()
         }
    }

    closeModal(evt) {
        if (evt == "custom" || evt.target.classList.contains('modal') || evt.target.classList.contains('modal__close')) {
            this.setState({priceValue: ''});
            this.setState({activeButton: ''});

            this.props.closeModal();
        }
    }

    priceChange(evt) {
        var val = evt.target.value; 
        if(/^\d+$/.test(val) || val==""){
            this.setState({priceValue: val});
        }
        if (this.state.priceValue != '') {
            this.setState({priceValid: 'valid'});
        }

    }

    openHint() {
        this.setState({hintActive: true})
    }

    closeHint() {
        this.setState({hintActive: false})
    }

    addMarkChange(evt) {
        this.setState({addMarkValue: evt.target.value});

    }

    handleSubmit(evt) {
        evt.preventDefault();
        var search = this.props.marks.unDefaults.filter((item) =>  {
            return item.title == this.state.addMarkValue;

        })
        if(!search.length){
            this.props.addmark(this.state.addMarkValue);
            this.setState({addMarkOpen: false});
            this.setState({addMarkValue: ''});
        }
    
    }

    formSubmit() {
        var data = {};

        if (this.state.priceValue == '') {
            this.setState({priceValid: 'invalid'});
        
            this.setState({errorMessage: 'Введите стоимость покупки!'})
        }
        if (this.state.activeButton == '') {
            this.setState({buttonValid: 'invalid'});
           
            this.setState({errorMessage: 'Выберите раздел!'})
        }
        if (this.state.priceValue == '' && this.state.activeButton == '') {
            this.setState({errorMessage: 'Введите стоимость покупки и выберите раздел!'})
        }
        if (this.state.priceValue != '' && this.state.activeButton != '') {
            this.setState({errorMessage: ''});
        
            data = {
                id: this.props.dayId,
                price: this.state.priceValue,
                title: this.state.activeButton
            };
            this.props.updatelist(data);
            this.closeModal('custom');

        }
    }

    toggleClassActive(evt) {
        this.setState({addMarkValue: ''});
        this.setState({addMarkOpen: false});
        this.setState({activeButton: evt.target.innerHTML});
        var items = document.getElementsByClassName('mark');
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove('mark_active')
        }
        evt.target.classList.add('mark_active');
        if (this.state.activeButton != '') {
            this.setState({buttonValid: 'valid'});
            this.setState({errorMessage: ''})
        }

    }

    render() {
        var marks;
        if (this.props.open) {
            marks = this.props.marks == 'loading' || typeof this.props.marks.defaults == 'undefined' || typeof this.props.marks == 'undefined' ? <img src={spinner}/> :
                <div className="modal__marks">
                    <div className="modal__marks modal__marks_default">
                        {

                            this.props.marks.defaults.map((item) => {
                                var number = 4;
                                return <button key={item.id} className={"mark mark_default color_" + number} onClick={this.toggleClassActive.bind(this)}>{item.title}</button>;
                            })

                        }

                    </div>
                    <div className="modal__marks modal__marks_undefault">
                        {
                            this.props.marks.unDefaults.map((item) => {

                                return <button onClick={this.toggleClassActive.bind(this)} key={item.id} className="mark mark_undefault">{item.title}</button>;
                            })
                        }
                        <div onMouseEnter={this.openHint.bind(this)} onMouseLeave={this.closeHint.bind(this)}
                             className={this.state.addMarkOpen ? 'add-mark add-mark_active mark' : 'mark add-mark'}>
                            <div className="add-mark__label"
                                 onClick={this.handleClick.bind(this)}>+</div>
                            <form id="addMark" onSubmit={this.handleSubmit.bind(this)}>
                                <input className="add-mark__input" size="1" onChange={this.addMarkChange.bind(this)} value={this.state.addMarkValue}/>
                            </form>
                        </div>
                        <div className={this.state.hintActive ? 'hint hint_active' : 'hint'}>Введите значение в поле, чтобы добавить новый раздел</div>
                    </div>
                </div>;

        }


        return (
            <div onClick={this.closeModal.bind(this)} className={this.props.open ? 'modal modal_open' : 'modal'}>
                <div className='modal__body'>
                    <button className='modal__add' onClick={this.formSubmit.bind(this)}>+</button>
                    <div className='modal__close' onClick={this.closeModal.bind(this)}>+</div>
                    <div className='modal__content'>
                        <input 
                            type='text' 
                            className='modal__input' 
                            placeholder="Введите сумму покупки" 
                            onChange={this.priceChange.bind(this)} 
                            value={this.state.priceValue}/>
                        <span className="modal__error">{this.state.errorMessage}</span>
                        {marks}
                    </div>

                </div>
            </div>
        );
    }
}

export default Modal;