import { Component, OnInit } from '@angular/core';
import { Track } from "ngx-audio-player";   

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  msaapDisplayTitle = true;
  msaapDisplayPlayList = false;
  msaapPageSizeOptions = [2, 4, 6];

  msaapPlaylist: Track[] = [
    {
      title: "Viva la Vida",
      link: "../../assets/audio/7-coldplay-viva_la_vida_(zvukoff.ru).mp3"
    }
  ];

  playerClass = 'none';
  navbarOpen = false;

  openPlayer(){
    if(this.playerClass === null){
      this.playerClass = "none";
    }
    else{this.playerClass = null;}
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor() {}

  ngOnInit() {}
}
