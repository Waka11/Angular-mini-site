import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable()
export class WeatherService {
    constructor(private request: HttpClient) { }
    getData(CityName) {
        console.log("CITY_NAME", CityName);
        return this.request.get(`https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=aa72480049dc531be9c1bd6fc4d3d1f5`).map((response: Response) => {
            return response;
        });
    }
}