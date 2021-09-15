import { Component, OnInit } from '@angular/core';
import { DemosComponent } from '../demos/demos.component';
import { HomeComponent } from '../main';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.css']
})
export class DinamicoComponent implements OnInit {
  menu = [
    { texto: 'inicio', componente: HomeComponent},
    { texto: 'demos', componente: DemosComponent},
  ]
  actual = this.menu[0].componente

  constructor() { }

  ngOnInit(): void {
  }

  seleccionar(indice: number) {
    this.actual = this.menu[indice].componente
  }
}
