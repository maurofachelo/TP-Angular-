import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatosUsuarioService } from './services/datos-usuario.service';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PerfilUsuarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Facello';

  constructor(private datosUsuario: DatosUsuarioService) {}

  ngOnInit() {
    console.log('Estableciendo datos...');  
    this.datosUsuario.setDatos('Mauro Facello', 'maurofachelo@gmail.com');
    console.log('Datos establecidos:', this.datosUsuario.getNombre()); 
  }
}
