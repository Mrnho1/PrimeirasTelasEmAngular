import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';//MASCARA DE MOEDA REAL
import ptBr from '@angular/common/locales/pt'//MASCARA DE MOEDA REAL
import { registerLocaleData } from '@angular/common';


import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { ContatoComponent } from './contato/contato.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';


import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { RodapeComponent } from './rodape/rodape.component';

//MASCARA DE MOEDA REAL
registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    SobreNosComponent,
    CabecalhoComponent,
    DetalhesComponent,
    RodapeComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
    HttpClientModule
  ],
  //MASCARA DE MOEDA REAL
  providers: [
    {provide : LOCALE_ID, useValue: 'pt'},
    {provide : DEFAULT_CURRENCY_CODE, useValue: 'BRL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
