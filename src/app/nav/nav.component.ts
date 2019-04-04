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
      title: "Avengers",
      link: "../../assets/audio/alan-silvestri-the-avengers.mp3"
    }
  ];
  msbapTitle = "Avengers";
  msbapAudioUrl = "../../assets/audio/alan-silvestri-the-avengers.mp3";

  msbapDisplayTitle = true;

  playerClass = "none";
  navbarOpen = false;

  openPlayer() {
    if (this.playerClass === null) {
      this.playerClass = "none";
    } else {
      this.playerClass = null;
    }
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor() {}

  ngOnInit() {}
}
