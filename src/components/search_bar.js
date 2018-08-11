import React, {Component} from 'react';

class SearchBar extends Component { //have additional functionality when class component

  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  render() { //syntax to define mthod in class
    //have to return jsx on render method
    return (
      <div>
        <input
        value = {this.state.term}
        onChange = {event => this.setState({term: event.target.value})} />
      </div>
    );


  }  //onChange react define property


}



export default SearchBar;
