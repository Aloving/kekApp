import React from 'react';
import Container from './Container';
import Modal from './Modal';
import Header from './Header'
import {connect} from 'react-redux';


import {action_getdays, action_getmark, action_addmarks, action_updatelist, action_deleteItem} from './../redux/actions';


class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            openModal: false,
            dayId: ''
        };
    }

    openModal(id) {

        this.setState({openModal: true, dayId: id});
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
        this.props.deleteItem(
            {dayId: data.dayId,
                itemId : data.itemId
            })
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

    };
};

export default connect(
    (state) => {
        return {days: state.days, marks: state.marks};
    },
    mapDispatchToProps
)(Home);

