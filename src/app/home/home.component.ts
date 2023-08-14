import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { NgFor, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [MatGridListModule,MatCardModule,MatButtonModule, NgFor, NgIf, MatIconModule, CommonModule],
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private http:HttpClient){}
  //acessando a API
  ngOnInit(): void {
    this.http.get<any>("http://localhost:3000/imoveis").subscribe(data => {
      this.imoveis = data;
    })
  }

  detalhes(imovelId: string){
    this.router.navigate(['/detalhes',imovelId]);
  }
  //Se não for string colocar o void
  toogleFavorito(index: number): void {
    this.imoveis[index].favorito = !this.imoveis[index].favorito;
  }

  nome: string = 'Lucas';
  sobrenome: string = 'Marinho';
  imoveis: any;
    
}
