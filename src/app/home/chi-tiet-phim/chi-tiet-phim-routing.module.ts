import { ChiTietPhimComponent } from './chi-tiet-phim.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "", children: [
    { path: "", component: ChiTietPhimComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChiTietPhimRoutingModule { }
