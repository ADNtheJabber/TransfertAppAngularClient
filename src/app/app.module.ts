import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTransfertComponent } from './components/list-transfert/list-transfert.component';
import { AddTransfertComponent } from './components/add-transfert/add-transfert.component';
import { DeleteTransfertComponent } from './components/delete-transfert/delete-transfert.component';
import { ListEmetteurComponent } from './components/list-emetteur/list-emetteur.component';
import { ListRecepteurComponent } from './components/list-recepteur/list-recepteur.component';

@NgModule({
  declarations: [
    AppComponent,
    ListTransfertComponent,
    AddTransfertComponent,
    DeleteTransfertComponent,
    ListEmetteurComponent,
    ListRecepteurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
