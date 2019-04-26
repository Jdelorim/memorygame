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
  newId: []
}

shuffleArr = arr => arr.sort((a,b) => 0.5 - Math.random());


handleWin = () => {
    alert("you won!");
    
    this.setState({
      topScore: 12,
      score: 0,
      newId: []
    });
};

handleLoose = () => {
  alert("you Loose!");
  let newScore = this.state.score;
  if(newScore > this.state.topScore) {
    alert("new score it greater!");
    console.log(`newSCore: ${newScore}, ${this.state.topScore}`);
    this.setState({
      topScore: newScore,
      score: 0,
      newId: []
    });
  
} else {
  this.setState({
    topScore: this.state.topScore,
    score: 0,
    newId: []
  });
}
}

handleClick = id => {
if (this.state.newId.indexOf(id) === -1) {
    this.state.newId.push(id);
    let newScore = this.state.score + 1;
    if(newScore === 12) {
      this.handleWin();
    } else {
    this.setState({
      score: newScore
      
    });
  }
    
} else {

  this.handleLoose();
}
  console.log(`topScore", ${this.state.topScore}`);
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
