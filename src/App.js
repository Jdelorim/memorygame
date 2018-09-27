import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import expanse from "./expanse.json";

import './App.css';

//

class App extends Component {
 
state={
  //destructed from expanse: expanse
  cards: [...expanse],
  score: 0,
  topScore: 0, 
  click: false,
  newArr: []
}

shuffleArr = array => array.sort((a,b) => 0.5 - Math.random());

handleClick = id => {

if (this.state.newArr.indexOf(id) === -1) {
    this.state.newArr.push(id);
    let newScore = this.state.score + 1;
    this.setState({
      score: newScore
    });
} else {
  alert("you lost!");
  this.setState({
    topScore: this.state.score,
    score: 0,
    newArr: []
    
  });
}



  
  console.log(`Card clicked!", ${id}, ${this.state.click}`);
}



  render() {
   // const {score, topScore, expanse}= this.state;
    return (
    
  <Wrapper>
    <Navbar 
    title = "The Expanse Memory Game"
    score = {this.state.score}
    topScore = {this.state.topScore}
    
    />
    {
      this.shuffleArr(this.state.cards).map((i) => (
         <Card
         id = {i.id}
         click={i.click}
         name = {i.name}
         image = {i.image}
         handleClick={this.handleClick}
         />
     ))
     }
    </Wrapper>
    );
  }
}

export default App;
