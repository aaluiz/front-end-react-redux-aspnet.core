import React from 'react';  

class Input extends React.Component {
    constructor(props) {
      super(props);
      this.state = { name: "", price: "" };
    }
    handleChangeName(event) {
      this.setState({ name: event.target.value });
    }
    handleChangePrice(event) {
      this.setState({ price: event.target.value });
    }
    addItem() {
      this.props.onAdd(this.state.name, this.state.price);
      this.setState({ name: "", price: "" });
    }
    render() {
      return (
        <div>
          <input
            onChange={this.handleChangeName.bind(this)}
            value={this.state.name}
          />
          <input
            onChange={this.handleChangePrice.bind(this)}
            value={this.state.price}
          />
          <button onClick={() => this.addItem()}>Add</button>
        </div>
      );
    }
  }

  export default Input;