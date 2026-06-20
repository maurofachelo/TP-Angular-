import { Component, OnInit } from '@angular/core';  
import { DatosUsuarioService } from '../../services/datos-usuario.service';

@Component({
  selector: 'app-perfil-usuario',
  standalone: true,
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {  
  public nombre: string = '';
  public correo: string = '';

  constructor(private datosUsuario: DatosUsuarioService) { }

  ngOnInit() {  // ← Obtener datos aquí, no en el constructor
    this.nombre = this.datosUsuario.getNombre();
    this.correo = this.datosUsuario.getCorreo();
    console.log('Componente PerfilUsuario - datos obtenidos:', this.nombre, this.correo);
  }
}