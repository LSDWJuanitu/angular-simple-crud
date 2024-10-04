import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Registro } from './models/registro';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

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
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Trabajando!",
    showConfirmButton: false,
    timer: 1500
  });
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

  Swal.fire({
    title: "Estas seguro que lo quieres eliminar?",
    text: "No podras recuperarlo!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText: "Cancelar",
    confirmButtonText: "Eliminar registro!"
  }).then((result) => {
    if (result.isConfirmed) {
      this.registroArray = this.registroArray.filter(x => x != this.selectedRegistro);
      this.selectedRegistro = new Registro();
      Swal.fire({
        title: "Eliminado!",
        text: "Tu registro a sido eliminado.",
        icon: "success"
      });
    }
  });
  }
}
