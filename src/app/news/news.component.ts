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
  spinnermode = "determinate";

  selectedCity: string = null;
  weatherForecast: any = {};
  degreez = null;
  weather = "";
  icon = "";

  selectedType = null;
  error = null;
  errorClass = "none";
  chooseButtonClass = "primary";

  options = [
    { name: "Political (The Independent)", value: "independent" },
    { name: "Sport (BBC Sport)", value: "bbc-sport" },
    { name: "Business (CNBC)", value: "cnbc" },
    { name: "Medical (Medical News Today)", value: "medical-news-today" },
    { name: "Science (Next Big Future)", value: "next-big-future" },
    { name: "Technology (Hacker News)", value: "hacker-news" },
    { name: "Entertainment (MTV News)", value: "mtv-news" }
  ];

  SubmitType() {
    console.log(this.selectedType);
    if (this.selectedType == null) {
      this.errorClass = null;
      this.error = "Please, select!";
    } else {
      this.chooseButtonClass = "warn";
      this.spinnermode = 'indeterminate';
      setTimeout(() => {
        this.data.getNews(this.selectedType).subscribe(response => {
          this.news = response;
          console.log(this.news);
        });
        this.spinnermode = "determinate";
        this.chooseButtonClass = "primary";
        this.errorClass = "none";
      }, 2000);
    }
  }

  onChange() {
    if (this.selectedCity !== null) {
      this.weatherservice.getData(this.selectedCity).subscribe(response => {
        console.log(response);
        this.weatherForecast = response;
        this.degreez = Math.floor(this.weatherForecast.main.temp - 273.15);
        this.weather = this.weatherForecast.weather[0].main;
        this.icon = this.weatherForecast.weather[0].icon;
      });
    }
  }

  ngOnInit() {
    // setTimeout(() => {
    //   this.data.getNews().subscribe(response => {
    //     this.news = response;
    //     console.log(this.news);
    //   });
    //   this.spinnernone = "none";
    // }, 2000);
  }
}
