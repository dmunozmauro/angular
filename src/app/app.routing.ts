import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { Empleado } from './empleado/empleado';
import { HomeComponent } from './home/home.component';
import { ContactoComponent} from './contacto/contacto.component';
import { CochesComponent } from './coches/coches.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'empleado', component: EmpleadoComponent },
    { path: 'fruta', component: FrutaComponent },
    { path: 'pagina-principal', component: HomeComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'contacto/:page', component: ContactoComponent },
    { path: 'coches', component: CochesComponent },
    { path: '**', component: HomeComponent },
    
];

export const appRoutingProvider: any[]=[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);