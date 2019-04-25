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
  errorClass_2 = "none";
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
      this.error = "Please, select the source!";
    } else {
      this.chooseButtonClass = "warn";
      this.spinnermode = "indeterminate";
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
        this.errorClass_2 = "none";
      });
    } else {
      this.errorClass_2 = null;
    }
  }

  changebleCurrency = null;
  submittedCurrency = null;
  submitted__Currency = null;
  currencyContainer: any = [];
  rates = null;

  changeCurrency(curr_n, curr_v) {
    this.changebleCurrency = curr_n;
    this.submittedCurrency = curr_v;
    console.log(this.changebleCurrency);
  }

  SubmitCurrency() {
    this.submitted__Currency = this.submittedCurrency;
    console.log(this.submitted__Currency);
    if (this.submitted__Currency == "RUR") {
      this.data.getCurrency().subscribe(response => {
        console.log(response);
        this.currencyContainer = response;
        this.currencyContainer.splice(0, 1);
        this.currencyContainer.splice(1, 3);
        console.log("CC", this.currencyContainer);
      });
    } else if (this.submitted__Currency == "BTC") {
      this.data.getCurrency().subscribe(response => {
        console.log(response);
        this.currencyContainer = response;
        this.currencyContainer.splice(0, 3);
        console.log("CC", this.currencyContainer);
      });
    } else if (this.submitted__Currency == "EUR") {
      this.data.getCurrency().subscribe(response => {
        console.log(response);
        this.currencyContainer = response;
        this.currencyContainer.splice(1, 3);
        console.log("CC", this.currencyContainer);
      });
    } else {
      this.data.getCurrency().subscribe(response => {
        console.log(response);
        this.currencyContainer = response;
        this.currencyContainer.splice(0, 2);
        this.currencyContainer.splice(1, 2);
        console.log("CC", this.currencyContainer);
      });
    }
  }

  radios = [
    { name: "EUR", value: "EUR" },
    { name: "USD", value: "USD" },
    { name: "RUR", value: "RUR" },
    { name: "BTC", value: "BTC" }
  ];

  ngOnInit() {}
}
