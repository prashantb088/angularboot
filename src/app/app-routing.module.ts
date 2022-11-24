import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddlaptopComponent } from './addlaptop/addlaptop.component';
import { BootviewComponent } from './bootview/bootview.component';
import { ViewlaptopComponent } from './viewlaptop/viewlaptop.component';

const routes: Routes = [

  {path: 'viewuser',component:BootviewComponent},
  {path: 'getlaptop',component:ViewlaptopComponent},
  {path: 'addlaptop',component:AddlaptopComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
