import { Component, OnInit } from "@angular/core";
import { SharingDataTrailerService } from "@core/shares/sharing-data-trailer.service";
import { DomSanitizer } from "@angular/platform-browser";

import * as $ from "jquery";
declare var $: any;

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"]
})
export class ModalComponent implements OnInit {
  body: any;
  constructor(
    private sharingDataTrailerService: SharingDataTrailerService,
    private sanitizer: DomSanitizer
  ) { }
  ngOnInit() {
    this.sharingDataTrailerService.SharingTrailer.subscribe((data: any) => {
      if (Object.entries(data).length) {
        let contentBody = `<iframe width="100%" class="video" height="500px" src=${data.trailer}></iframe>`;
        let modalBody = <HTMLInputElement>document.getElementById("modal-body");
        modalBody.innerHTML = contentBody;
        $(".stop-iframe").click(function () {
          $(".video").each(function () {
            $(this).attr("src", $(this).attr("src"));
            return false;
          });
        });
      }
    });
  }
}
