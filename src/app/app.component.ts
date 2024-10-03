import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Registro } from './models/registro';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  registroArray: Registro[] = [
    {id: 1, nombre: "Juan", pais: "Mexico"},
    {id: 2, nombre: "Damian", pais: "Mexico"},
    {id: 3, nombre: "Paulina", pais: "Mexico"}
  ];

  selectedRegistro: Registro = new Registro();

agregarOeditar(){
if(this.selectedRegistro.id === 0){
  this.selectedRegistro.id = this.registroArray.length + 1;
  this.registroArray.push(this.selectedRegistro);
}

this.selectedRegistro = new Registro()

  
}

abrirEdicion(registro: Registro){
  this.selectedRegistro = registro;
}

delete(){
    if(confirm("SweetAlert2 is working!")){
      this.registroArray = this.registroArray.filter(x => x != this.selectedRegistro);
      this.selectedRegistro = new Registro()
    }
  }
}
