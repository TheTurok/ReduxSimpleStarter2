import React, {Component} from 'react';

class SearchBar extends Component { //have additional functionality when class component

  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  render() { //syntax to define mthod in class
    //have to return jsx on render method
    return (
      <div className="search-bar">
        <input
        value = {this.state.term}
        onChange = {event => this.onInputchange(event.target.value)} />
      </div>
    );


  }  //onChange react define property

  onInputchange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }


}



export default SearchBar;
