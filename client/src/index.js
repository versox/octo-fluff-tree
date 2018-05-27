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

// urgent items
var urgentItems = [
  "Finish hackathon project",
  "Take a nap"
  ];

ReactDOM.render(
  <List id = "urgent" classS = "draggable" items = {urgentItems}/>,
  document.getElementById('urgent')
);

var moderateItems = [
  "Call mom",
  "Schedule dentist appointment",
  "Practice french"];

ReactDOM.render(
  <List id = "moderate" classS = "draggable" items = {moderateItems}/>,
  document.getElementById('moderate')
);

var casualItems = [
  "Hang out with Miles",
  "Practice guitar",
  "Win hackathon"];

ReactDOM.render(
  <List id = "casual" classS = "draggable" items = {casualItems}/>,
  document.getElementById('casual')
);

var eventItems = [
  "8:00  AM Project Submission",
  "8:00  AM Room Allocation for Demos",
  "9:00  AM Brunch",
  "12:00 PM Project Demo to Judges",
  "2:30  PM Closing Ceremony",
  "4:30  PM GO Train home",
  "6:00  PM Gym",
  "8:00  PM Dinner date with Jess"];

ReactDOM.render(
  <List colorful = "true" classS = "event" items = {eventItems}/>,
  document.getElementById('eventsHolder')
)
