import React from "react";

class AddMark extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.addMark = this.addMark.bind(this);
  }

  handleClick() {
    this.setState({open: !this.state.open});
    if (this.state.open == false) {
      this.input.focus()
    }
  }

  addMark(evt) {
    evt.preventDefault();
    let data = {title: this.input.value, defaultItem: this.props.default}
    this.props.addMark(data)

  }

  render() {
    return (
      <div className={this.state.open ? 'add-mark add-mark_active mark' : 'mark add-mark'}>
        <div className="add-mark__label" onClick={this.handleClick}>+
        </div>
        <form id="addMark" onSubmit={this.addMark}>
          <input className="add-mark__input" size="1" ref={(item) => this.input = item}/>
        </form>
      </div>
    )
  }
}


export default AddMark;