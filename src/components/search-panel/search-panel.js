import React, {Component} from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {

  state = {
    text: '',
  };

  onSearchChange = (e) => {
    let currentText = e.target.value;
    this.setState({
      text: currentText,
    });
    this.props.onSearchChange(currentText);
  };


  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="type to search"
        onChange={this.onSearchChange}
        value={this.state.text}
      />
    );
  }
};
