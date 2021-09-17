import { HttpClient, HttpContext } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { RESTDAOService } from '../base-code/RESTDAOService';
import { NotificationService, NotificationType } from '../common-services';
import { AUTH_REQUIRED } from '../security';

class Persona {
  id: number | null = null;
  nombre: string | null = null;
  apellidos: string | null = null;
  edad: number | null = null;
  nif: string | null = null;
  correo: string | null = null;
}


@Injectable({ providedIn: 'root' })
export class PersonasDAOService extends RESTDAOService<Persona, number> {
  constructor(http: HttpClient) {
    super(http, 'personas', { context: new HttpContext().set(AUTH_REQUIRED, true) })
  }
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  elemento: Persona = new Persona();
  isAdd = true;

  constructor(private dao: PersonasDAOService, private notify: NotificationService) { }

  ngOnInit(): void {
  }

  nuevo() {
    this.elemento = new Persona();
    this.isAdd = true;
  }

  cargar() {
    // this.elemento = {id: 1, nombre: 'Pepitoooooooooooooooo', apellidos: 'Grillo', edad: 99, nif: '12345678Z', correo: 'pepito@grillo'};
    if (this.elemento.id)
      this.dao.get(this.elemento.id).subscribe(
        datos => {
          this.elemento = datos;
          this.isAdd = false;
        },
        err => this.notify.add(err.message)
      )
  }

  enviar() {
    if (this.isAdd) {
      this.dao.add(this.elemento).subscribe(
        data => this.notify.add('Añadido', NotificationType.warn),
        err => this.notify.add(err.message)
      )
    } else {
      if (this.elemento.id)
        this.dao.change(this.elemento.id, this.elemento).subscribe(
          data => this.notify.add('Modificado', NotificationType.warn),
          err => this.notify.add(err.message)
        )
    }
    // alert((this.isAdd ? 'Añadiendo ' : 'Modificando ') + JSON.stringify(this.elemento))
  }
}
