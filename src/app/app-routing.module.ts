import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ContactosAddComponent, ContactosEditComponent, ContactosListComponent, ContactosViewComponent } from './contactos';
import { DemosComponent } from './demos/demos.component';
import { HomeComponent } from './main';
import { PageNotFoundComponent } from './main/page-not-found/page-not-found.component';
import { AuthGuard } from './security';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'demos', component: DemosComponent, data: { pageTitle: 'Demos' } },
  { path: 'chisme/de/hacer/numeros', component: CalculadoraComponent, data: { pageTitle: 'Calculadora' } },
  { path: 'contactos', component: ContactosListComponent },
  { path: 'contactos/add', component: ContactosAddComponent, canActivate: [ AuthGuard ] },
  { path: 'contactos/:id/edit', component: ContactosEditComponent, canActivate: [ AuthGuard ] },
  { path: 'contactos/:id', component: ContactosViewComponent },
  { path: 'contactos/:id/:kk', component: ContactosViewComponent },
  { path: 'blog', children: [
    { path: '', component: BlogComponent },
    { path: 'add', component: BlogComponent },
    { path: ':id/edit', component: BlogComponent },
    { path: ':id', component: BlogComponent },
    { path: ':id/:kk', component: BlogComponent },
    ]},
  { path: 'jacki/aupol', redirectTo: '/contactos/33'},
  { path: 'config', loadChildren: () => import('./config/config.module').then(mod => mod.ConfigModule)},
  { path: '404.html', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
