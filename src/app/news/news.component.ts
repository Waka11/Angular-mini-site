import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { WeatherService } from "../forecast.service";
import "rxjs/add/operator/map";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"]
})
export class NewsComponent implements OnInit {
  constructor(
    private data: DataService,
    private weatherservice: WeatherService
  ) {}
  news: any = [];
  spinnernone = "";

  selectedCity: string = null;
  weatherForecast: any = {};
  degreez = null;
  weather = "";
  icon = "";

  onChange() {
    this.weatherservice.getData(this.selectedCity).subscribe(response => {
      console.log(response);
      this.weatherForecast = response;
      this.degreez = Math.floor(this.weatherForecast.main.temp - 273.15);
      this.weather = this.weatherForecast.weather[0].main;
      this.icon = this.weatherForecast.weather[0].icon;
    });
  }

  ngOnInit() {
    setTimeout(() => {
      this.data.getNews().subscribe(response => {
        this.news = response;
        console.log(this.news);
      });
      this.spinnernone = "none";
    }, 2000);
  }
}
