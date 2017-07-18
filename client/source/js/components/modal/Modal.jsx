import React from "react";
import ModalBody from "./ModalBody";

class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      addMarkOpen: false,
      addMarkValue: '',
      priceValue: '',
      activeButton: '',
      errorMessage: ''
    };
  }

  defaultTesting(title) {
    var g = this.props.marks.defaults.filter(item => {
      return item.title == title
    })
    var result = g.length == 0 ? false : true
    return result;

  }


  handleClick(evt) {
    this.setState({addMarkOpen: !this.state.addMarkOpen});
    if (this.state.addMarkOpen == false) {
      document.getElementsByClassName('add-mark__input')[0].focus()
    }
  }

  closeModal(evt) {
    if (evt == "custom" || evt.target.classList.contains('modal') || evt.target.closest('.modal__close')) {
      this.setState({priceValue: ''});
      this.setState({activeButton: ''});
      this.setState({errorMessage: ''})
      this.props.closeModal();
    }
  }

  priceChange(evt) {
    var val = evt.target.value;
    if (/^\d+$/.test(val) || val == "") {
      this.setState({priceValue: val});
    }
    if (this.state.priceValue != '') {
      this.setState({errorMessage: ''})
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.price != this.props.price){
      this.setState({ priceValue: nextProps.price})
    }
  }

  addMarkChange(evt) {
    this.setState({addMarkValue: evt.target.value});
  }

  handleSubmit(evt) {
    evt.preventDefault();
    var search = this.props.marks.unDefaults.filter((item) => {
      return item.title == this.state.addMarkValue;

    })
    if (!search.length) {
      this.props.addmark({title: this.state.addMarkValue});
      this.setState({addMarkOpen: false});
      this.setState({addMarkValue: ''});
    }
  }

  formSubmit() {
    var data = {};
    if (this.state.priceValue == '' && this.state.activeButton == '') {
      this.setState({errorMessage: 'Введите стоимость покупки и выберите раздел!'})
    } else if (this.state.priceValue == '') {
      this.setState({errorMessage: 'Введите стоимость покупки!'})
    } else if (this.state.activeButton == '') {
      this.setState({errorMessage: 'Выберите раздел!'})
    }
    if (this.state.priceValue != '' && this.state.activeButton != '') {
      this.setState({errorMessage: ''});
      if (this.props.type == 'add') {
        data = {
          id: this.props.dayId,
          price: parseInt(this.state.priceValue),
          title: this.state.activeButton

        };
        this.props.updatelist(data);
        this.closeModal('custom');
      } else if (this.props.type == "update") {
        data = {
          dayId: this.props.dayId,
          price: parseInt(this.state.priceValue),
          title: this.state.activeButton,
          itemId: this.props.itemId,
          defaultItem: this.defaultTesting(this.state.activeButton)
        }
        this.props.updateItem(data);
        this.closeModal('custom');

      }


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

      this.setState({errorMessage: ''})
    }

  }

  propsObject() {
    return {
      closeModal: this.closeModal.bind(this),
      open: this.props.open,
      formSubmit: this.formSubmit.bind(this),
      closeModal: this.closeModal.bind(this),
      priceChange: this.priceChange.bind(this),
      priceValue: this.state.priceValue,
      errorMessage: this.state.errorMessage,
      marksProps: {
        marks: this.props.marks,
        toggleClassActive: this.toggleClassActive.bind(this),
        addMarkOpen: this.state.addMarkOpen,
        handleClick: this.handleClick.bind(this),
        handleSubmit: this.handleSubmit.bind(this),
        addMarkChange: this.addMarkChange.bind(this),
        addMarkValue: this.state.addMarkValue,
      }

    }
  }


  render() {
    var content = typeof this.props.marks.defaults != 'undefined' ? <ModalBody   {...this.propsObject()} /> : '';
    return (
      <div>
        {content}
      </div>

    )
  }
}

export default Modal;
