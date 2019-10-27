import { SharingDataTrailerService } from "@core/shares/sharing-data-trailer.service";
import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-item-phim",
  templateUrl: "./item-phim.component.html",
  styleUrls: ["./item-phim.component.scss"]
})
export class ItemPhimComponent implements OnInit {
  @Input() phim;
  maPhim: any;
  movie: any;
  constructor(
    private router: Router,
    private sharingDataTrailerService: SharingDataTrailerService
  ) {}

  ngOnInit() {}
  beginTrailer(dataPhim) {
    this.sharingDataTrailerService.SharingDataTrailer(dataPhim);
  }
  goToDetailMovie() {
    this.router.navigate(["/chi-tiet-phim", this.phim.maPhim]);
  }
}
