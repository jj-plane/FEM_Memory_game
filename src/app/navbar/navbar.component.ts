import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() startScreen = true;
  @Output() RestartGameEvent = new EventEmitter();
  @Output() NewGameEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  restartGame(){
    console.log('restarting game');
    this.RestartGameEvent.emit({});
  }

  newGame(){
    this.NewGameEvent.emit({});
  }

}
