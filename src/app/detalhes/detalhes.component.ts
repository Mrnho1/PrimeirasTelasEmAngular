import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
//quero que ja seja executado implements OnInit
export class DetalhesComponent implements OnInit {
 //importante para a API
  imovelId: string;
  imovel : any;




  constructor(
    private router: ActivatedRoute,
    //acesso dos ids
    private http: HttpClient
    ){}

  ngOnInit(){
    this.router.paramMap.subscribe(params => {
      this.imovelId = params.get('id') ?? '';
      //acesso dos ids
      this.http.get<any>('http://localhost:3000/imoveis/' + this.imovelId).subscribe(data => {
      this.imovel = data;
      })
    });
  }
}
