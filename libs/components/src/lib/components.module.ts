import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComComponent } from './test-com/test-com.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    TestComComponent
  ],
  exports: [
    TestComComponent
  ],
})
export class ComponentsModule {}
