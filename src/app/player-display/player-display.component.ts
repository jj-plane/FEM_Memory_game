import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../player.interface';

@Component({
  selector: 'app-player-display',
  templateUrl: './player-display.component.html',
  styleUrls: ['./player-display.component.scss']
})
export class PlayerDisplayComponent implements OnInit {


  @Input() multiplePlayers = false;
  @Input() currentPlayer = 0;
  @Input() players: Player[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
