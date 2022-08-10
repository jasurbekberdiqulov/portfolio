import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProblemsRoutingModule } from './problems-routing.component';
import { ProblemsComponent } from './problems.component';

@NgModule({
  declarations: [
    ProblemsComponent
  ],
  imports: [
    CommonModule,
    ProblemsRoutingModule
  ],
  providers: []
})
export class ProblemsModule { }
