import { Component, OnInit } from "@angular/core";
declare var $: any;

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"]
})
export class CarouselComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $(".pgwSlider").pgwSlider({
      transitionEffect: "sliding",
      displayControls: true
    });
  }
  ngAfterViewInit() {}
}
