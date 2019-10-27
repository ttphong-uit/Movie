import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "@core/material/material.module";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { TrangChuModule } from "./trang-chu/trang-chu.module";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  declarations: [HomeComponent, NavbarComponent, FooterComponent],
  imports: [CommonModule, HomeRoutingModule, MaterialModule, TrangChuModule]
})
export class HomeModule {}
