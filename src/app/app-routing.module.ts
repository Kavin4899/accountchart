import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'chart',component: ChartComponent},
  {path:'login',component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
