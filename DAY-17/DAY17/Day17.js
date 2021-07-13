import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import './Card.css';
function Day17(){
  return(
  <div>
  <h1 id="head">Calorie Read Only</h1>
  <div className="container">
  <Card title="food1" dis="you have consumed 100 calories today"/>
  <Card title="food2" dis="you have consumed 90 calories today"/>
  <Card title="food3" dis="you have consumed 400 calories today"/>
  
  </div>
  </div>
  );
}
export default Day17;