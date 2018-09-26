import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import expanse from "./expanse.json";

import './App.css';



class App extends Component {
 
state={
  //destructed from expanse: expanse
  expanse,
  score: 0,
  topScore:500, 
  click: false

}

shuffleArr = array => array.sort((a,b) => 0.5 - Math.random());

cardClick = (id, click) => {
//  let newScore = this.state.score++;
//  let newClick = this.state.click = true;
this.setState({
   score: this.state.score++,
  // click: true
});

  if(click === true){
    alert("alreadyClicked");
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
      this.shuffleArr(this.state.expanse).map((i) => (
         <Card
         id = {i.id}
         click={i.click}
         name = {i.name}
         image = {i.image}
         handleClick={(i.id,this.cardClick)}
         />
     ))
     }
    </Wrapper>
    );
  }
}

export default App;
