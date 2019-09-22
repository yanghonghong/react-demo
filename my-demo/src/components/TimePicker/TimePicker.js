import React from 'react'
import { TimePicker } from 'antd';
import moment from 'moment';

class TimePicker1 extends React.Component {
  state = {
    value: null,
  };

  onChange = time => {
    console.log(time);
    this.setState({ value: time });
  };

  render() {
    return <TimePicker value={this.state.value} onChange={this.onChange} format='YY-MM-DD HH:mm:ss' value={moment()} size='large'/>;
  }
}

export default TimePicker1