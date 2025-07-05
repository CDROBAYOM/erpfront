import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ServiciosComponent } from './Components/servicios/servicios.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servicios', component: ServiciosComponent }
];
