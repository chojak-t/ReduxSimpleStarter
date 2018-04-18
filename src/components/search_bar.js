import React, {Component} from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      term: 'search here'
    };
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={this.onInputChange} />
        <br />
        Value: {this.state.term}
      </div>
    );
  }

  onInputChange(e) {
    this.setState({term: e.target.value});
    //console.log(e.target.value);
  }

};

export default SearchBar;
