import React from 'react';
import spinner from '../../../assets/spinner.gif';

import PropTypes from 'prop-types';
class Marks extends React.Component{



    render(){



       var content;

            if(this.props.marks.loading){
                content = <img class="spinner spinner_marks" src={spinner}/>
                    }
                   else {
                content = <div className="modal__marks">

                    <div className="modal__marks modal__marks_default">
                        {
                            this.props.marks.defaults.map((item) => {
                                var number = 4;
                                return <button key={item.id} className={"mark mark_default color_" + number} onClick={this.props.toggleClassActive}>{item.title}</button>;
                            })
                        }

                    </div>
                    <div className="modal__marks modal__marks_undefault">
                        {
                            this.props.marks.unDefaults.map((item) => {


                                return <button onClick={this.props.toggleClassActive} key={item.id} className="mark mark_undefault">{item.title}</button>;
                            })
                        }
                        <div className={this.props.addMarkOpen ? 'add-mark add-mark_active mark' : 'mark add-mark'}>
                            <div className="add-mark__label"
                                 onClick={this.props.handleClick}>+</div>
                            <form id="addMark" onSubmit={this.props.handleSubmit}>
                                <input className="add-mark__input" size="1" onChange={this.props.addMarkChange} value={this.props.addMarkValue}/>
                            </form>
                        </div>

                    </div>
                </div>
                   }



        return(
            <div>
            {content}
            </div>
        )

    }
}

Marks.propTypes = {
    marks: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
}

export default Marks;

