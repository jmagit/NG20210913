import { Component, OnInit } from '@angular/core';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
import { DemosComponent } from '../demos/demos.component';
import { HomeComponent } from '../main';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.css']
})
export class DinamicoComponent implements OnInit {
  menu = [
    { texto: 'demos', componente: DemosComponent, icono: 'fas fa-chalkboard-teacher'},
    { texto: 'inicio', componente: HomeComponent, icono: 'fas fa-home'},
    { texto: 'calculadora', componente: CalculadoraComponent, icono: 'fas fa-calculator'},
  ]
  actual = this.menu[0].componente

  constructor() { }

  ngOnInit(): void {
  }

  seleccionar(indice: number) {
    this.actual = this.menu[indice].componente
  }
}
