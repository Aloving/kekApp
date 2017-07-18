import React from "react";
import Cards from "./Cards";
import Modal from "../modal/Modal";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {action_addmark, action_deleteItem, action_getdays, action_getmarks, action_updateItem, action_updatelist} from "../../redux/actions";


class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      openModal: false,
      dayId: '',
      itemId: '',
      type: '',
    };
  }

  openModal(data) {
    if (data.type == 'update') {
      this.setState({openModal: true, dayId: data.id, itemId: data.itemId, type: 'update'});
    }
    if (data.type == 'add') {
      this.setState({openModal: true, dayId: data.id, type: 'add'});
    }
    document.body.classList.add('open-modal');
    this.getmarks();
  }

  closeModal() {
    this.setState({openModal: false});
    document.body.classList.remove('open-modal');
  }

  getmarks() {
    this.props.getmarks({userId: this.props.userId});
  }


  deleteItem(data) {

    var params = {...data, userId: this.props.userId}
    this.props.deleteItem(params)
  }

  updateItem(data) {
    var params = {...data, userId: this.props.userId}
    this.props.updateItem(params)
  }
  addMark(data){
    var params = {...data, userId: this.props.userId}
    this.props.addMark(params)
  }
  updatelist(data){

    var params = {...data, userId: this.props.userId}
    this.props.updatelist(params)
  }
  render() {

    return (
      <div>
        <Cards openModal={this.openModal.bind(this)} cards={this.props.cards} onDeleteItem={ this.deleteItem.bind(this)} stat={this.props.stat}/>
        <Modal
          dayId={this.state.dayId}
          addmark={this.addMark.bind(this)}
          marks={this.props.marks}
          getmarks={this.getmarks.bind(this)}
          open={this.state.openModal}
          closeModal={this.closeModal.bind(this)}
          updatelist={this.updatelist.bind(this)}
          type={this.state.type}
          itemId={this.state.itemId}
          updateItem={this.props.updateItem.bind(this)}

        />

      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {


    getmarks: (data) => {
      dispatch(action_getmarks(data));
    },
    addmark: (data) => {
      dispatch(action_addmark(data))
    },
    updatelist: (data) => {
      dispatch(action_updatelist(data))
    },
    deleteItem: (data) => {
      dispatch(action_deleteItem(data))
    },
    updateItem: (data) => {
      dispatch(action_updateItem(data))
    },

  };
};

export default connect(
  (state) => {
    return {days: state.days, marks: state.marks};
  },
  mapDispatchToProps
)(Container);


Container.propTypes = {
  cards: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
}
