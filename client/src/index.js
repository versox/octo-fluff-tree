import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import './style.css';

var urgentActivities = [];

ReactDOM.render(
  <List id = "urgent"/>,
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
