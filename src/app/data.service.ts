import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";


@Injectable({
  providedIn: "root"
})
export class DataService {
    constructor(private request: HttpClient) {}
  getNews(source) {
    return this.request.get(
      `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=b235b608bf1149f5af92f46975273b78`
    ).map((response: Response) => {
        console.log("response", response);
        return response;
    });;
  }

  getCurrency(){
    return this.request
      .get(
        ` https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3`
      )
      .map((response: Response) => {
        console.log("response", response);
        return response;
      });
  }
}
