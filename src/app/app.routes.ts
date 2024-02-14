import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { GenerateTinComponent } from './pages/generate-tin/generate-tin.component';

export const routes: Routes = [
    {
        path:"",
        component: RegisterComponent
    },
    {
        path:"tin",
        component:GenerateTinComponent
    }
];
