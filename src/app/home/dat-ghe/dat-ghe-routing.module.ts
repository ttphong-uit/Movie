import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatGheComponent } from './dat-ghe.component';


const routes: Routes = [
  { path: "", component: DatGheComponent }
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatGheRoutingModule { }
