import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }
}
