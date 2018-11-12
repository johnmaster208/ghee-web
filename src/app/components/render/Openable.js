import React, { Component } from 'react'

class Openable extends Component {

  constructor(props) {
      super(props);
      this.state = {
          open: false
      }
      this.toggle = this.toggle.bind(this);
  }

  toggle() {
      this.setState({
          open: !this.state.open
      })
  }

  render() {
    const { children } = this.props;
    return children({
        open: this.state.open,
        toggle: this.toggle
    })
  }
}

export default Openable