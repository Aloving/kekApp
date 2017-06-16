import React from 'react';
import Container from './Container';
import Modal from './Modal';
import Header from './Header'
import {connect} from 'react-redux';


import {action_getdays, action_getmarks, action_addmark, action_updatelist, action_deleteItem, action_updateItem} from './../redux/actions';


class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            openModal: false,
            dayId: '',
            openModalUpdate: false
        };
    }

    openModal(data) {
        console.log(data);
        if(data.type == 'update'){
            this.setState({ openModalUpdate: true, dayId: data.id, itemId: data.itemId});
        }
       if(data.type == 'add'){
           this.setState({ openModal: true, dayId: data.id});
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

    componentDidMount() {

        this.props.getdays();

        document.title = "Главная";


    }
    deleteItem(data){
        this.props.deleteItem(data)
    }
   updateItem(data){
        this.props.updateItem(data)
    }

    render() {

        return (
            <div className="home" >
                <Header content='За последние 7 дней'/>
                <Container openModal={this.openModal.bind(this)} cards={this.props.days} onDeleteItem={ this.deleteItem.bind(this)}/>
                <Modal
                    dayId={this.state.dayId}
                    addmark={this.props.addmark}
                    marks={this.props.marks}
                    getmarks={this.props.getmarks}
                    open={this.state.openModal}
                    closeModal={this.closeModal.bind(this)}
                    updatelist={this.props.updatelist}
                    type="add"
                />
                <Modal
                    dayId={this.state.dayId}
                    addmark={this.props.addmark}
                    marks={this.props.marks}
                    getmarks={this.props.getmarks}
                    open={this.state.openModalUpdate}
                    closeModal={this.closeModal.bind(this)}
                    updateItem={this.props.updateItem}
                    itemId= {this.state.itemId}
                    type="update"

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
)(Home);

