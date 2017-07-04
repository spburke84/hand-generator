import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ranker from 'handranker';

class App extends Component {
    constructor() {
      super();

      this.state = {
        currHand: [
          {src: '/playings-cards/cards/2_of_clubs.png',
          rank: '2c'},
          {src: '/playings-cards/cards/3_of_clubs.png',
          rank: '3c'},
          {src: '/playings-cards/cards/4_of_clubs.png',
          rank: '4c'},
          {src: '/playings-cards/cards/5_of_clubs.png',
          rank: '5c'},
          {src: '/playings-cards/cards/6_of_clubs.png',
          rank: '6c'}
        ],
        result: 'Click to generate a hand'
      }
      this.handleClick = this.handleClick.bind(this);
    }

componentDidMount(){
  this.handleClick();
}

handleClick() {
    
    let deck = [
      {src: '/playings-cards/cards/2_of_clubs.png',
       rank: '2c'},
      {src: '/playings-cards/cards/3_of_clubs.png',
       rank: '3c'},
      {src: '/playings-cards/cards/4_of_clubs.png',
      rank: '4c'},
      {src: '/playings-cards/cards/5_of_clubs.png',
      rank: '5c'},
      {src: '/playings-cards/cards/6_of_clubs.png',
      rank: '6c'},
      {src: '/playings-cards/cards/7_of_clubs.png',
      rank: '7c'},
      {src: '/playings-cards/cards/8_of_clubs.png',
      rank: '8c'},
      {src: '/playings-cards/cards/9_of_clubs.png',
      rank: '9c'},
      {src: '/playings-cards/cards/10_of_clubs.png',
      rank: 'Tc'},
      {src: '/playings-cards/cards/jack_of_clubs2.png',
      rank: 'Jc'},
      {src: '/playings-cards/cards/queen_of_clubs2.png',
      rank: 'Qc'},
      {src: '/playings-cards/cards/king_of_clubs2.png',
      rank: 'Kc'},
      {src: '/playings-cards/cards/ace_of_clubs.png',
      rank: 'Ac'},
      {src: '/playings-cards/cards/2_of_diamonds.png',
      rank: '2d'},
      {src: '/playings-cards/cards/3_of_diamonds.png',
      rank: '3d'},
      {src: '/playings-cards/cards/4_of_diamonds.png',
      rank: '4d'},
      {src: '/playings-cards/cards/5_of_diamonds.png',
      rank: '5d'},
      {src: '/playings-cards/cards/6_of_diamonds.png',
      rank: '6d'},
      {src: '/playings-cards/cards/7_of_diamonds.png',
      rank: '7d'},
      {src: '/playings-cards/cards/8_of_diamonds.png',
      rank: '8d'},
      {src: '/playings-cards/cards/9_of_diamonds.png',
      rank: '9d'},
      {src: '/playings-cards/cards/10_of_diamonds.png',
      rank: 'Td'},
      {src: '/playings-cards/cards/jack_of_diamonds2.png',
      rank: 'Jd'},
      {src: '/playings-cards/cards/queen_of_diamonds2.png',
      rank: 'Qd'},
      {src: '/playings-cards/cards/king_of_diamonds2.png',
      rank: 'Kd'},
      {src: '/playings-cards/cards/ace_of_diamonds.png',
      rank: 'Ad'},
      {src: '/playings-cards/cards/2_of_hearts.png',
      rank: '2h'},
      {src: '/playings-cards/cards/3_of_hearts.png',
      rank: '3h'},
      {src: '/playings-cards/cards/4_of_hearts.png',
      rank: '4h'},
      {src: '/playings-cards/cards/5_of_hearts.png',
      rank: '5h'},
      {src: '/playings-cards/cards/6_of_hearts.png',
      rank: '6h'},
      {src: '/playings-cards/cards/7_of_hearts.png',
      rank: '7h'},
      {src: '/playings-cards/cards/8_of_hearts.png',
      rank: '8h'},
      {src: '/playings-cards/cards/9_of_hearts.png',
      rank: '9h'},
      {src: '/playings-cards/cards/10_of_hearts.png',
      rank: 'Th'},
      {src: '/playings-cards/cards/jack_of_hearts2.png',
      rank: 'Jh'},
      {src: '/playings-cards/cards/queen_of_hearts2.png',
      rank: 'Qh'},
      {src: '/playings-cards/cards/king_of_hearts2.png',
      rank: 'Kh'},
      {src: '/playings-cards/cards/ace_of_hearts.png',
      rank: 'Ah'},
      {src: '/playings-cards/cards/2_of_spades.png',
      rank: '2s'},
      {src: '/playings-cards/cards/3_of_spades.png',
      rank: '3s'},
      {src: '/playings-cards/cards/4_of_spades.png',
      rank: '4s'},
      {src: '/playings-cards/cards/5_of_spades.png',
      rank: '5s'},
      {src: '/playings-cards/cards/6_of_spades.png',
      rank: '6s'},
      {src: '/playings-cards/cards/7_of_spades.png',
      rank: '7s'},
      {src: '/playings-cards/cards/8_of_spades.png',
      rank: '8s'},
      {src: '/playings-cards/cards/9_of_spades.png',
      rank: '9s'},
      {src: '/playings-cards/cards/10_of_spades.png',
      rank: 'Ts'},
      {src: '/playings-cards/cards/jack_of_spades2.png',
      rank: 'Js'},
      {src: '/playings-cards/cards/queen_of_spades2.png',
      rank: 'Qs'},
      {src: '/playings-cards/cards/king_of_spades2.png',
      rank: 'Ks'},
      {src: '/playings-cards/cards/ace_of_spades.png',
      rank: 'As'}
    ]

    let temp = [];
    let hand = [];
    let randomCard = 0;

    while(hand.length < 5) {
      randomCard = Math.floor((Math.random() * deck.length));
      temp = deck.splice(randomCard, 1);
      console.log(temp);
      hand.push(temp[0]);
    }

    this.setState({
      currHand: hand
    });

    let rankThis = [hand[0].rank, hand[1].rank, hand[2].rank, hand[3].rank, hand[4].rank];
    let tempRes = Ranker.getHand(rankThis);

    this.setState({
      result: tempRes.description
    });

    //console.log(result.description);

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Random Poker Hand Generator</h2>
        </div>
        <div className="gameSpace">
          <div>
            {console.log(this.state.currHand)}
            <img src={this.state.currHand[0].src}/>
            <img src={this.state.currHand[1].src}/>
            <img src={this.state.currHand[2].src}/>
            <img src={this.state.currHand[3].src}/>
            <img src={this.state.currHand[4].src}/>
          </div>
          <div>
            <span id='ranking'>{this.state.result}</span>
          </div>
          <div>
            <button onClick={()=>{this.handleClick()}}>New Hand</button>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
