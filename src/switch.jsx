import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Switch extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isOn: false,
      backgroundColor: 'red',
      height: '100px',
      width: '100px',
    };
  }
  handleClick = () => {
    const isOn = !this.state.isOn;
    this.setState({ isOn });
    this.props.onChange(isOn);
  };
  render () {

    return (
      <div
        onClick={this.handleClick}
        style={{
          height: this.state.height,
          width: this.state.width,
          backgroundColor: this.state.isOn ? 'green' : 'red',
          borderRadius: '50%',
        }}
      />
    );
  }
}
Switch.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Switch;
