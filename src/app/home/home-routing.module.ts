import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import {
  FormCanActiveGuard,
  DatgheCanActiveGuard
} from "@core/guards/canactive.guard";

const routes: Routes = [
  //Home
  {
    path: "",
    component: HomeComponent,
    children: [
      //Trang Chu
      { path: "", loadChildren: "./trang-chu/trang-chu.module#TrangChuModule" },
      {
        path: "trang-chu",
        loadChildren: "./trang-chu/trang-chu.module#TrangChuModule"
      },

      //form
      {
        path: "form",
        loadChildren: "./form/form.module#FormModule",
        canActivate: [FormCanActiveGuard]
      },

      //Phim
      { path: "phim", loadChildren: "./phim/phim.module#PhimModule" },

      //chi tiet phim
      {
        path: "chi-tiet-phim/:id",
        loadChildren: "./chi-tiet-phim/chi-tiet-phim.module#ChiTietPhimModule"
      },

      //dat-ghe
      {
        path: "dat-ghe/:id",
        loadChildren: "./dat-ghe/dat-ghe.module#DatGheModule",
        canActivate: [DatgheCanActiveGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
