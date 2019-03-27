import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"]
})
export class NewsComponent implements OnInit {
  constructor(private data: DataService) {}
  news: any = [];
  spinnernone = "";

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
