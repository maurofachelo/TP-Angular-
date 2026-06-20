import { Injectable } from '@angular/core';

@Injectable()
export class DatosUsuarioService {
  private nombre: string = '';
  private correo: string = '';

  setDatos(nombre: string, correo: string): void {
    this.nombre = nombre;
    this.correo = correo;
  }

  getNombre(): string {
    return this.nombre;
  }

  getCorreo(): string {
    return this.correo;
  }
}