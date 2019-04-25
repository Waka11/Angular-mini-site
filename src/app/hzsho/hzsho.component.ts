import { Component, OnInit, ViewChild } from "@angular/core";

import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: "app-hzsho",
  templateUrl: "./hzsho.component.html",
  styleUrls: ["./hzsho.component.css"]
})
export class HzshoComponent implements OnInit {
  @ViewChild("Form") Form: NgForm;
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  matcher = new MyErrorStateMatcher();

  SubmitForm(Form: NgForm) {
    console.log("form", this.emailFormControl);
  }

  radios = [
    { name: "Political (The Independent)", value: "independent" },
    { name: "Sport (BBC Sport)", value: "bbc-sport" },
    { name: "Business (CNBC)", value: "cnbc" },
    { name: "Medical (Medical News Today)", value: "medical-news-today" },
    { name: "Science (Next Big Future)", value: "next-big-future" },
    { name: "Technology (Hacker News)", value: "hacker-news" },
    { name: "Entertainment (MTV News)", value: "mtv-news" }
  ];

  
  constructor() {}

  ngOnInit() {}
}
