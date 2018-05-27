import React, { Component } from 'react';
import ListItem from './ListItem';
import interact from 'interactjs';

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

      interact('.draggable')
        .draggable({
          // enable inertial throwing
          inertia: true,
          // keep the element within the area of it's parent
          restrict: {

            endOnly: true,
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
          },
          // enable autoScroll
          autoScroll: true,
          // call this function on every dragmove event
          onmove: dragMoveListener,
        });

        function dragMoveListener (event) {
          var target = event.target,
              // keep the dragged position in the data-x/data-y attributes
              x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
              y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

          // translate the element
          target.style.webkitTransform =
          target.style.transform =
            'translate(' + x + 'px, ' + y + 'px)';

          // update the posiion attributes
          target.setAttribute('data-x', x);
          target.setAttribute('data-y', y);
        }



export default List;
