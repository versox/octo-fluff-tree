import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    return (
      <div id={this.props.id}><li>{this.props.name}</li></div>
    )
  }
}

export default ListItem;
