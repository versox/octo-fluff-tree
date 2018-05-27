import React, { Component } from 'react';
import ListItem from './ListItem';

var listOfThings = ["world", "the", "hi"];
var colors = ["purple", "blue", "green", "pink"];

class List extends Component {
  render() {
    let items = [];
    for (var i = 0; i < listOfThings.length; i++)
    {
      if(this.props.colorful == "true")
      {
          var colorI = i % 4;
          items.push(<ListItem name={listOfThings[i]} id={colors[i]} classS={this.props.classS}/>);
      }
      else
      {
          items.push(<ListItem name={listOfThings[i]} id={this.props.id} classS={this.props.classS} />);
      }
    }
    return <ul>{items}</ul>
  }
}

export default List;
