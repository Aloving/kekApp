import React from "react";
import PropTypes from "prop-types";
import AddMark from './AddMark.jsx';

class Marks extends React.Component {



  addMark(data){

      this.props.addmark({title: data.title, defaultItem: data.defaultItem})

  }

  render() {
    var content;
    if (this.props.marks.loading) {
      content = ''
    }
    else {
      content = <div className="modal__marks">
        <div className="modal__marks modal__marks_default">
          {
            this.props.marks.defaults.map((item) => {

              return <button key={item.id} className="mark mark_default" onClick={this.props.toggleClassActive}>{item.title}</button>;
            })
          }

          <AddMark default={true} addMark={this.addMark.bind(this)}/>


        </div>
        <div className="modal__marks modal__marks_undefault">
          {
            this.props.marks.unDefaults.map((item) => {
              return <button onClick={this.props.toggleClassActive} key={item.id} className="mark mark_undefault">{item.title}</button>;
            })
          }

         <AddMark default={false} addMark={this.addMark.bind(this)}/>

        </div>
      </div>
    }

    return (
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

