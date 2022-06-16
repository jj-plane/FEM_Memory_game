import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-startscreen',
  templateUrl: './startscreen.component.html',
  styleUrls: ['./startscreen.component.scss']
})
export class StartscreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() GameStarted = new EventEmitter();

  onStartGame(){
    console.log('starting game');
    this.GameStarted.emit({
        theme: this.themeControl,
        players: this.playersControl,
        grid: this.gridControl
      });
  }

  themeControl = new FormControl('numbers');
  playersControl = new FormControl('1');
  gridControl = new FormControl(8);

}
