import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import './style.css';

var urgentActivities = [];

var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:8080/activities', true);
xhr.send();

xhr.onreadystatechange = processRequest;

function processRequest(e) {
  if(xhr.readyState == 4) {
    console.log(xhr.responseText);
  }
}

ReactDOM.render(
  <List id = "urgent" classS = "draggable"/>,
  document.getElementById('urgent')
);

ReactDOM.render(
  <List id = "casual"/>,
  document.getElementById('casual')
);

ReactDOM.render(
  <List id = "moderate"/>,
  document.getElementById('moderate')
);

ReactDOM.render(
  <List colorful = "true" classS = "event"/>,
  document.getElementById('eventsHolder')
)
