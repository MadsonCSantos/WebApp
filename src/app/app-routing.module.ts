import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarroComponent } from './carro/carro.component';
import { ClienteComponent } from './cliente/cliente.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  //vai carregar as views carro e cliente
  {path: '', redirectTo: 'dashboard', pathMatch:'full'},//serve para quando não seleciona rota
  {path: 'dashboard', component: DashboardComponent},
  {path: 'carro', component: CarroComponent},
  {path: 'cliente', component: ClienteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
