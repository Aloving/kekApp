import React from "react";
import ModalBody from "./ModalBody";

class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      addMarkOpen: false,
      priceValue: '',
      activeButton: '',
      errorMessage: ''
    };
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
    if (val.match(/[\d+()+\-*\/]/g) != null) {
      this.setState({priceValue: val.match(/[\d+()+\-*\/]/g).join('') || ''});
    } else if (val == '') {
      this.setState({priceValue: ''});
    }
    if (this.state.priceValue != '') {
      this.setState({errorMessage: ''})
    }
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.price) {
      this.setState({priceValue: nextProps.price})
    }else{
      this.setState({priceValue: ''})
    }
  }

  addmark(data) {
    var search = [];
    for (let i in this.props.marks) {
      var res = this.props.marks[i].filter((item) => {
        return item.title.toLowerCase() == data.title.toLowerCase();
      })
      if (res.length) {
        search.push(res)
      }
    }


    if (!search.length) {
      this.props.addmark({title: data.title.toLowerCase(), defaultItem: data.defaultItem});
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
          price: eval(this.state.priceValue),
          title: this.state.activeButton

        };
        this.props.updatelist(data);
        this.closeModal('custom');
      } else if (this.props.type == "update") {
        data = {
          dayId: this.props.dayId,
          price: eval(this.state.priceValue),
          title: this.state.activeButton,
          itemId: this.props.itemId,
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
        addmark: this.addmark.bind(this),
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
