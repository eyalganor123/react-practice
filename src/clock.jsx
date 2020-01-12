import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Clock extends Component {
  constructor (props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }
  componentDidMount () {
    console.log(this.props);
    this.timer = setInterval(()=> {
      this.setState({ time: new Date() });
    }, 1000);
  }
  render () {
    return <div style={{backgroundColor:this.props.color}}>{this.state.time.toLocaleTimeString()}</div>;
  }
}

Clock.propTypes={
  color:PropTypes.string
}
Clock.defaultProps={
  color: "blue"
}
export default Clock;
