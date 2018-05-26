import React, { Component } from 'react';
import ListItem from './ListItem';

var listOfThings = ["world", "the", "hi"];

class List extends Component {
  render() {
    let items = [];
    for (var i = 0; i < listOfThings.length; i++)
    {
      items.push(<ListItem name={listOfThings[i]} id={this.props.id} />);
    }
    return <div><ul>{items}</ul></div>
  }
}

export default List;
