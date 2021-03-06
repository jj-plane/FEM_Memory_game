import { Component, OnInit } from '@angular/core';
import { Gamecard } from './gamecard.interface';
import { Player } from './player.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  cardImages = [
    'fa-solid fa-person-snowboarding',
    'fa-solid fa-dumbbell',
    'fa-solid fa-apple-whole',
    'fa-solid fa-drum',
    'fa-solid fa-amp-guitar',
    'fa-solid fa-guitar-electric',
    'fa-solid fa-joystick',
    'fa-solid fa-alien-8bit',
    'fa-solid fa-futbol',
    'fa-solid fa-anchor',
    'fa-solid fa-flask',
    'fa-solid fa-sun',
    'fa-solid fa-hand-peace',
    'fa-solid fa-bug',
    'fa-solid fa-moon',
    'fa-solid fa-snowflake',
    'fa-solid fa-turkish-lira-sign',
    'fa-solid fa-car'
  ];

  //grid is either 8 or 18. User sets this
  gridSize:number = 8;

  //Theme can be icons or numbers. The pieces have both data in them
  theme: string = 'icons';

  //The actual cards. We keep 2 stacks, the cards on the board and the currently flipped cards
  cards: Gamecard[] = [];
  flippedCards: Gamecard[] = [];
  matchedCount: number = 0; //Keeps track of how many matches so far

  //Total turns
  totalTurns: number = 0;
  
  //Player system
  players: Player[] = [];
  currentPlayer: number = 1;

  //Navigation
  showStartScreen: boolean = true;
  showRestartScreen: boolean = false;

  startGame(event:any){
    this.showStartScreen = false;
    this.theme = event.theme.value;
    this.gridSize = parseInt(event.grid.value);
    this.setupPlayers(parseInt(event.players.value));
    this.setupCards();
  }

  restartGame(event:any){
    //Reset player turns
    for(let i = 0; i < this.players.length; i++){
      this.players[i].turns = 0;
      this.players[i].matches = 0;
    }
    //Reset total turns
    this.totalTurns = 0;
    //Set turn back to player 1
    this.currentPlayer = 1;
    //Reset cards
    this.setupCards();
  }

  newGame(event:any){
    //Reset player turns
    for(let i = 0; i < this.players.length; i++){
      this.players[i].turns = 0;
      this.players[i].matches = 0;
    }
    //Reset total turns
    this.totalTurns = 0;

    //Remove the players
    this.players = [];

    //Show the start screen
    this.showStartScreen = true;
  }

  shuffle(deck: Gamecard[]) {
    let currentIndex = deck.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [deck[currentIndex], deck[randomIndex]] = [
        deck[randomIndex], deck[currentIndex]];
    }
  
    return deck;
  }

  setupPlayers(playerNumber: number){
    for(let i = 0; i < playerNumber; i++){
      const newPlayer: Player = {
        id: i,
        turns: 0,
        matches: 0
      }
      this.players.push(newPlayer);
    }
  }

  updatePlayer(){
    //First, we update the current players turns
    this.players[this.currentPlayer - 1].turns++;

    //then we check to see if there's only 1 player, if so, we just return
    if(this.players.length === 1){
      return;
    }
    //If there's more than 1, then we check to see if we're at the last player.
    else if(this.players.length > 1 && this.players.length === this.currentPlayer){
      //If we are, we reset the current player back to 1
      this.currentPlayer = 1;
      return;
    }
    //Otherwise, we just tick the current player up 1
    else{
      this.currentPlayer++;
    }
  }

  setupCards(){
    this.cards.length = 0;

    for(let i = 0; i < this.gridSize; i++){
      const newCard: Gamecard = {
        imageId: this.cardImages[i],
        state: 'default',
        num: i
      }
      this.cards.push({...newCard});
      this.cards.push({...newCard});
    }

    this.cards = this.shuffle(this.cards);
  }

  cardClick(index: number) : void {
    const cardInfo = this.cards[index];

    if(cardInfo.state === 'default' && this.flippedCards.length < 2){
      cardInfo.state = 'flipped';
      this.flippedCards.push(cardInfo);

      if(this.flippedCards.length > 1){
        this.matchCheck();
      }
    }
    else if(cardInfo.state === 'flipped'){
      cardInfo.state = 'default';
      this.flippedCards.pop();
    }
  }

  matchCheck(): void{
    setTimeout(() => {
      const cardOne = this.flippedCards[0];
      const cardTwo = this.flippedCards[1];
      const nextState = cardOne.imageId === cardTwo.imageId ? 'matched' : 'default';
      cardOne.state = cardTwo.state = nextState;

      this.flippedCards.length = 0;

      if(nextState === 'matched'){
        this.players[this.currentPlayer - 1].matches++; 
        this.matchedCount++;
        if(this.matchedCount === this.gridSize){
          alert("YOU WIN");
          this.showRestartScreen = true;
        }
      }

      this.totalTurns++;
      this.updatePlayer();
    }, 1000)
  }

  ngOnInit(): void {
      //this.setupCards();
  }
}
