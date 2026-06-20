import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MotocicletaService } from '../../services/motocicleta.service';
import { Motocicleta } from '../../models/motocicleta.interface';

@Component({
  selector: 'app-lista-motocicletas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-motocicletas.component.html',
  styleUrls: ['./lista-motocicletas.component.css']
})
export class ListaMotocicletasComponent implements OnInit {
  motocicletas: Motocicleta[] = [];
  totalMotocicletas: number = 0;
  motosDisponibles: number = 0;

  constructor(private motocicletaService: MotocicletaService) {}

  ngOnInit() {
    this.motocicletas = this.motocicletaService.getMotocicletas();
    this.totalMotocicletas = this.motocicletas.length;
    this.motosDisponibles = this.motocicletas.filter(m => m.disponible).length;
  }
}