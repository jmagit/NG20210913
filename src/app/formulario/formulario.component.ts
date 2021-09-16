import { Component, OnInit } from '@angular/core';

class Persona {
  id: number | null = null;
  nombre: string | null = null;
  apellidos: string | null = null;
  edad: number | null = null;
  nif: string | null = null;
  correo: string | null = null;
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  elemento: Persona = new Persona();
  isAdd = true;

  constructor() { }

  ngOnInit(): void {
  }

  nuevo() {
    this.elemento = new Persona();
    this.isAdd = true;
  }

  cargar() {
    this.elemento = {id: 1, nombre: 'Pepitoooooooooooooooo', apellidos: 'Grillo', edad: 99, nif: '12345678Z', correo: 'pepito@grillo'};
    this.isAdd = false;
  }

  enviar() {
    alert((this.isAdd ? 'Añadiendo ' : 'Modificando ') + JSON.stringify(this.elemento))
  }
}
