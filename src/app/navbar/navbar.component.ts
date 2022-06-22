import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() startScreen = true;

  constructor() { }

  ngOnInit(): void {
  }

  restartGame(){
    alert('restart');
  }

  newGame(){
    alert('new game');
  }

}
