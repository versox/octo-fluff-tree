import React, { Component } from 'react';

class ListItem extends Component {
  //
  // onDragStart: function(e){
  //   // REMOVED THIS LINE
  //   e.preventDefault();
  //
  //   console.log('ondragstart');
  // }

  render() {
    return (
        <li id={this.props.id} className={this.props.classS}>{this.props.name}</li>
    )
  }
}

export default ListItem;
