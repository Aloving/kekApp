import React from 'react';


class AddMark extends React.Component {

  constructor(){
    super();
    this.state= {
      open: false
    }
  }
  handleclick() {
    this.setState({ open: !this.state.open});
    if (this.state.open == false) {
      this.input.focus()
    }
  }


  addMark(evt){
    evt.preventDefault();

    let data = {title: this.input.value, defaultItem: this.props.default}
    this.props.addMark(data)

  }
render(){
  return(
    <div className={this.state.open ? 'add-mark add-mark_active mark' : 'mark add-mark'}>
      <div className="add-mark__label" onClick={this.handleclick.bind(this)}>+
      </div>
      <form id="addMark" onSubmit={this.addMark.bind(this)}>
        <input className="add-mark__input" size="1" ref={(item) => this.input = item}/>
      </form>
    </div>
  )
}
}


export default AddMark;