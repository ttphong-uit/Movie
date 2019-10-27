import { NgModule } from "@angular/core";
import { MaterialModule } from "@core/material/material.module";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { FormRoutingModule } from "./form-routing.module";
import { FormComponent } from "./form.component";
import { DangNhapComponent } from "./dang-nhap/dang-nhap.component";
import { DangKiComponent } from "./dang-ki/dang-ki.component";

@NgModule({
  declarations: [FormComponent, DangNhapComponent, DangKiComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FormModule {}
