import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToggleComponent } from './toggle.component';
const routes: Routes = [
  {
    path: '',
    component: ToggleComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToggleRoutingModule { }