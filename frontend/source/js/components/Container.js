import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card'


class Container extends React.Component {


    render() {
        var Cards = this.props.cards.map((item) => {

            return <Card onDeleteItem={this.props.onDeleteItem} id={item.id} date={item.date} items={item.items} key={item.id}/>
        })

        return (

            <div className="container">
                {Cards}
            </div>

        )
    }
}

export default Container;