import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, FormsModule],
})
export class UserModule {}
