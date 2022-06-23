import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-display',
  templateUrl: './player-display.component.html',
  styleUrls: ['./player-display.component.scss']
})
export class PlayerDisplayComponent implements OnInit {


  @Input() multiplePlayers = false;
  constructor() { }

  ngOnInit(): void {
  }

}
