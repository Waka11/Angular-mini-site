import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AngularFontAwesomeModule } from "angular-font-awesome";
import { NgxAudioPlayerModule } from "ngx-audio-player";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule, MatCheckboxModule } from "@angular/material";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';

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
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxAudioPlayerModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatTabsModule
  ],
  providers: [WeatherService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
