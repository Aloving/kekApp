import React from 'react';
import Cards from './Cards';
import Modal from './Modal';
import Header from './Header'
import {connect} from 'react-redux';


import {action_getdays, action_getmarks, action_addmark, action_updatelist, action_deleteItem, action_updateItem} from './../redux/actions';


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
        console.log(data);
        if(data.type == 'update'){
            this.setState({ openModal: true, dayId: data.id, itemId: data.itemId, type: 'update'});
        }
       if(data.type == 'add'){
           this.setState({ openModal: true, dayId: data.id, type: 'add'});
       }
        document.body.classList.add('open-modal');
        this.props.getmarks();
    }

    closeModal() {
        this.setState({openModal: false});
        document.body.classList.remove('open-modal');
    }

    getmarks() {
        this.props.getmarks();
    }

 
    deleteItem(data){
        this.props.deleteItem(data)
    }
   updateItem(data){
        this.props.updateItem(data)
    }


    render() {

        return (
            <div className="container" >
                <Cards openModal={this.openModal.bind(this)} cards={this.props.cards} onDeleteItem={ this.deleteItem.bind(this)}  stat={this.props.stat}/>
                <Modal
                    dayId={this.state.dayId}
                    addmark={this.props.addmark}
                    marks={this.props.marks}
                    getmarks={this.props.getmarks}
                    open={this.state.openModal}
                    closeModal={this.closeModal.bind(this)}
                    updatelist={this.props.updatelist}
                    type={this.state.type}
                    itemId= {this.state.itemId}
                    updateItem={this.props.updateItem}

                />
             
            </div>

        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getdays: () => {
            dispatch(action_getdays());
        },

        getmarks: () => {
            dispatch(action_getmarks());
        },
        addmark: (title) => {
            dispatch(action_addmark(title))
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

