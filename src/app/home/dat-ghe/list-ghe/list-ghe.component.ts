import {
  Component,
  OnInit,
  Input,
  ViewChildren,
  QueryList
} from "@angular/core";
import { ItemGheComponent } from "./item-ghe/item-ghe.component";
import { CountdownModule } from "ngx-countdown";
import Swal from "sweetalert2";

@Component({
  selector: "app-list-ghe",
  templateUrl: "./list-ghe.component.html",
  styleUrls: ["./list-ghe.component.scss"]
})
export class ListGheComponent implements OnInit {
  @Input() danhSachGhe;
  @Input() maGheHuy;
  @Input() dataLichChieu;
  @ViewChildren(ItemGheComponent) ItemGhe: QueryList<ItemGheComponent>;
  constructor() {}
  ngOnChanges() {
    if (this.ItemGhe) {
      this.ItemGhe.map(itemGhe => {
        if (itemGhe.ghe.maGhe === this.maGheHuy) itemGhe.trangThaiGhe = false;
      });
    }
  }
  ngOnInit() {}
  handleEvent(event) {
    if (event.action === "done") {
      Swal.fire({
        text:
          "Đã hết thời gian giữ ghế. Vui lòng thực hiện đơn hàng trong thời hạn 5 phút. ",
        type: "warning",
        confirmButtonColor: "#facea8",
        confirmButtonText: "Đặt vé lại"
      }).then(() => {
        location.reload();
      });
    }
  }
}
