import { Routes, RouterModule } from '@angular/router';
import {pruebaComponent} from "./prueba.component";
import {ModuleWithProviders} from "@angular/core";

export const pruebaRoutes: Routes = [
    {
        path: '',
        component: pruebaComponent,
        data: {
            pageTitle: 'prueba'
        }
    }
];

export const pruebaRouting: ModuleWithProviders = RouterModule.forChild(pruebaRoutes);

