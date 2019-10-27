import { SharingDataTrailerService } from "@core/shares/sharing-data-trailer.service";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-item-phim",
  templateUrl: "./item-phim.component.html",
  styleUrls: ["./item-phim.component.scss"]
})
export class ItemPhimComponent implements OnInit {
  @Input() phim;
  constructor(private sharingDataTrailerService: SharingDataTrailerService) {}

  ngOnInit() {}
  beginTrailer(dataPhim) {
    this.sharingDataTrailerService.SharingDataTrailer(dataPhim);
  }
}
