import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  standalone: true,
  styleUrls: ['./contato.component.scss'],

  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, ReactiveFormsModule, NgIf],
})
export class ContatoComponent {
  nome = new FormControl('',Validators.required);
  email = new FormControl('',[Validators.required, Validators.email]);
  assunto = new FormControl('');
  menssagem = new FormControl('',[Validators.required,Validators.minLength(6)]);

  getErrorMessage(){
    if(this.nome.hasError('required')) {
      return 'Este campo é obrigatório';
    }

    if(this.email.hasError('email')) {
      return 'Este campo é obrigatório';
    }

    if(this.email.hasError('required')) {
      return 'Digite um email válido';
    }

    if(this.menssagem.hasError('required')) {
      return 'Este campo é obrigatório';
    }

    if(this.menssagem.hasError('minlength')) {
      return 'Mínimo de 6 caracteres é obrigatório';
    }

    return '';

  }
}
