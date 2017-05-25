import React from 'react';
import Header from './Header';
class Day extends React.Component {
    componentDidMount() {
        document.title = "Дата";
    }
    render() {

        return (
            <div className="calendar">
                <h1>{ this.props.params.dayId}</h1>

            </div>

        )

    }
}

export default Day;