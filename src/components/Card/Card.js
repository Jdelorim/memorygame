import React, { Component} from "react";
import "./Card.css";


class Card extends Component {
 
  

render() {
  
  return(
   
      <div className="card z-depth-4">

        <div className="card-image">
          <img name={this.props.name} src={this.props.image} onClick={() => this.props.handleClick(this.props.id, this.props.click)} alt={this.props.name}/>
          <span className="card-title"><strong>{this.props.name}</strong></span>
        </div>
      </div>

  )
}

}


export default Card;