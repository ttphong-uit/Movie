import { FormComponent } from './form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DangKiComponent } from './dang-ki/dang-ki.component';
import { CandeactivateGuard } from '@core/guards/candeactive.guard';


const routes: Routes = [
  { path: "", component: FormComponent, canDeactivate: [CandeactivateGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
