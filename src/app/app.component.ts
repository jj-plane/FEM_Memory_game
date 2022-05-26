import { Component, OnInit } from '@angular/core';
import { Gamecard } from './gamecard.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  cardImages = [
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

  smallGrid = {
    
  }

  //grid is either small or large. User sets this
  gridSize = 'small';

  //Theme can be icons or numbers. The pieces have both data in them
  theme: string = 'icons';

  //The actual cards. We keep 2 stacks, the cards on the board and the currently flipped cards
  cards: Gamecard[] = [];
  flippedCards: Gamecard[] = [];
  matchedCount: number = 0; //Keeps track of how many matches so far

  //Total turns
  totalTurns: number = 0;
  
  //Player system
  currentPlayer: number = 1;
  maxPlayers: number = 1;

  //Navigation
  showStartScreen: boolean = true;
  showRestartScreen: boolean = false;

  startGame(event:any){
    this.showStartScreen = false;
    this.theme = event.theme.value;
    this.gridSize = event.grid.value;
    this.maxPlayers = event.players.value;

    this.setupCards();
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

  setupCards(){
    this.cards.length = 0;
    this.cardImages.forEach((img, index) => {
      const newCard: Gamecard = {
        imageId: img,
        state: 'default',
        num: index
      };

      this.cards.push({...newCard});
      this.cards.push({...newCard});
    })

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
        this.matchedCount++;
        if(this.matchedCount === this.cardImages.length){
          alert("YOU WIN");
          this.showRestartScreen = true;
        }
      }

      this.totalTurns++;
    }, 1000)
  }

  ngOnInit(): void {
      //this.setupCards();
  }
}
