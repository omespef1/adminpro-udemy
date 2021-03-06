import { Routes, RouterModule } from "@angular/router";
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
  {
    path: '', component: PagesComponent, children:
      [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'progress', component: ProgressComponent },
        { path: 'graficas1', component: Graficas1Component },
      ]
  },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  { path: '**', component: NopagefoundComponent }
];
export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true })