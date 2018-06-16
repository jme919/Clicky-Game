import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    starArr: friends,
    score: 0,
    topScore: 0
  };

  shuffleArray = () => {
    let array = this.state.starArr;
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    console.log("Shuffled");
    this.setState({ starArr: array });
  }

  handleClick = (event) => {
    const targetIndex = event.target.id;
    if(this.state.starArr[targetIndex].clicked===false){
      const newScore = this.state.score +1;
      this.setState({score: newScore});
    
      if(newScore>this.state.topScore){
        this.setState({topScore: newScore});
      }
      this.starClick(targetIndex);

    }else{
      this.gameOver();
    }

  }

  starClick = (targetIndex) =>{
    const array = this.state.starArr;
    array[targetIndex].clicked = true;

    this.setState({starArr: array});
    this.shuffleArray();
  }

  gameOver = () =>{
    this.setState({score: 0 });
    const array = this.state.starArr;
    for(let i=0; i <array.length; i++){
      array[i].clicked = false;
    }
    this.setState({starArr: array});
    this.shuffleArray();
  }



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar 
        score = {this.state.score}
        topScore = {this.state.topScore} />
        {friends.map((friend, index) => (
          <FriendCard
            
            id={friend.id}
            key={index}
            index={index}
            name={friend.name}
            image={friend.image}
            handleClick={this.handleClick}
            
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
