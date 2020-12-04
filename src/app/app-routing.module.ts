import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTransfertComponent } from './components/add-transfert/add-transfert.component';
import { DeleteTransfertComponent } from './components/delete-transfert/delete-transfert.component';
import { ListEmetteurComponent } from './components/list-emetteur/list-emetteur.component';
import { ListRecepteurComponent } from './components/list-recepteur/list-recepteur.component';
import { ListTransfertComponent } from './components/list-transfert/list-transfert.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },

  { path: 'transferts', component: ListTransfertComponent },
  { path: 'addTransfert', component: AddTransfertComponent },
  { path: 'listTransfert/:id', component: ListTransfertComponent },
  { path: 'deleteTransfert/:id', component: DeleteTransfertComponent },

  { path: 'emetteurs', component: ListEmetteurComponent },

  { path: 'recepteurs', component: ListRecepteurComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
