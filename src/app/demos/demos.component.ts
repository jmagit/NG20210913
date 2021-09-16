import { Component, OnDestroy, OnInit } from '@angular/core';
import { Unsubscribable } from 'rxjs';
import { NotificationService, NotificationType } from '../common-services';

import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class DemoService {
  constructor() { }
  nombre: string = 'mundo'

}
@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css'],
  // providers: [ DemoService ]
})
export class DemosComponent implements OnInit, OnDestroy {
  private suscriptor: Unsubscribable | undefined;
  private nombre: string = 'mundo'
  listado = [
    { id: 1, nombre: 'Madrid'},
    { id: 2, nombre: 'BARCELONA'},
    { id: 3, nombre: 'sevilla'},
    { id: 4, nombre: 'a Coruña'},
  ]
  idProvincia = 2;

  resultado = ''
  visible = true;
  estetica = { importante: true, error: false, urgente: true }
  fontsize = 24;

  constructor(public vm: NotificationService, private estado: DemoService) { }

  public get Nombre(): string { return this.estado.nombre; }
  public set Nombre(value: string) {
    if(this.estado.nombre === value) return;
    this.estado.nombre = value;
  }

  saluda() {
    this.resultado = `Hola ${this.Nombre}`
  }
  despide() {
    this.resultado = `Adios ${this.Nombre}`
  }
  di(algo: string) {
    this.resultado = `Dice ${algo}`
  }

  cambia() {
    this.visible = !this.visible;
    this.estetica.importante = !this.estetica.importante;
    this.estetica.error = !this.estetica.error;
  }

  calcula(a: number, b: number): number {
    return a + b;
  }

  add(provincia: string) {
    const id = this.listado[this.listado.length - 1].id + 1;
    this.listado.push({id, nombre: provincia})
    this.idProvincia = id;
  }

  ngOnInit(): void {
    this.suscriptor = this.vm.Notificacion.subscribe(n => {
      if (n.Type !== NotificationType.error) { return; }
      window.alert(`Suscripcion: ${n.Message}`);
      this.vm.remove(this.vm.Listado.length - 1);
    });
  }
  ngOnDestroy(): void {
    if (this.suscriptor) {
      this.suscriptor.unsubscribe();
    }
  }

  idiomas = [
    { codigo: 'es', region: 'España' },
    { codigo: 'pt', region: 'Portugal' },
    { codigo: 'en-US', region: 'USA' }
  ];
  idioma = this.idiomas[0].codigo;
  calculos: any[] = [];
  valCalculadora = 666;

  ponResultado(origen: string, valor: any) {
    this.calculos.push({
      pos: this.calculos.length + 1,
      origen,
      valor
    });
  }

}
