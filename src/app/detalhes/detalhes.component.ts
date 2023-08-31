import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { NgFor, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss'],
  standalone: true,
  imports: [MatGridListModule,MatCardModule,MatButtonModule, NgFor, NgIf, MatIconModule],
})
//quero que ja seja executado implements OnInit
export class DetalhesComponent implements OnInit {
 //importante para a API
  imovelId: string;
  imoveis: any;
  imovel : any;




  constructor(
    private router: ActivatedRoute,
    private router1: Router,
    //acesso dos ids
    private http: HttpClient
    ){}

  ngOnInit(){
    this.router.paramMap.subscribe(params => {
      this.imovelId = params.get('id') ?? '';
      //acesso dos ids
    });
    this.http.get<any>('http://localhost:3000/imoveis').subscribe(data => {
    this.imoveis = data;
    this.imovel = this.imoveis[this.imoveis.findIndex((imovel: any) => imovel.id === parseInt(this.imovelId))];
    // console.log(this.imovel);
    })
  }
  
  detalhes(imovelId: string){
    this.router1.navigate(['/detalhes',imovelId]);
  }
}
