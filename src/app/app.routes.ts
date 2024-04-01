import { Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
    { path: 'navbar', component: NavBarComponent },
    { path: 'inicio', component: InicioComponent }
];
