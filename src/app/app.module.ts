import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { WeatherService } from "./forecast.service";
import { DataService } from "./data.service";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from "./home/home.component";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { NewsComponent } from "./news/news.component";
import { HzshoComponent } from "./hzsho/hzsho.component";
import { NewsItemComponent } from "./news/news-item/news-item.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ErrorPageComponent,
    NewsComponent,
    HzshoComponent,
    NewsItemComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [WeatherService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
