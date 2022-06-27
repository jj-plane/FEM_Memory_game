import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Player } from '../player.interface';
import { timer } from 'rxjs';

@Component({
  selector: 'app-player-display',
  templateUrl: './player-display.component.html',
  styleUrls: ['./player-display.component.scss']
})
export class PlayerDisplayComponent implements OnInit, OnDestroy {


  @Input() multiplePlayers = false;
  @Input() currentPlayer = 0;
  @Input() players: Player[] = [];

  timer?: string = undefined;
  constructor() { }

  ngOnInit(): void {
    timer(0, 1000).subscribe(n => this.updateTimer(n));
  }

  ngOnDestroy(){
    
  }

  updateTimer(n:number){
    //This should probably be it's own function cause I can reuse it.
    //I'd move it if I was working with a team.
    this.timer = new Date(n * 1000).toISOString().substring(11, 19);
  }

}
