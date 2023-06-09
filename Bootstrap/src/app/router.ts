import { Routes } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { HomeComponent } from './Component/home/home.component';
import { LayoutsComponent } from './Component/layouts/layouts.component';


export const routes : Routes = [
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:"",
        component:LayoutsComponent,
        children:[
            {
                path:"",
                component:HomeComponent
            }
        ]
    }
]