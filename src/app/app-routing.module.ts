import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:"login",
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:"dashboard",
    component:DashboardComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
