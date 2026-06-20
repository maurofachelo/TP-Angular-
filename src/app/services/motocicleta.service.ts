import { Injectable } from '@angular/core';
import { Motocicleta } from '../models/motocicleta.interface';

@Injectable()
export class MotocicletaService {
  // Lista de motocicletas precargadas
  private motocicletas: Motocicleta[] = [
    {
      id: 1,
      marca: 'Honda',
      modelo: 'Tornado',
      cilindrada: 300,
      precio: 11400000,
      disponible: true
    },
    {
      id: 2,
      marca: 'Honda',
      modelo: 'Twister',
      cilindrada: 300,
      precio: 8500000,
      disponible: true
    },
    {
      id: 3,
      marca: 'Honda',
      modelo: 'GLH',
      cilindrada: 150,
      precio: 4600000,
      disponible: false
    },
    {
      id: 4,
      marca: 'Honda',
      modelo: 'Wave S',
      cilindrada: 110,
      precio: 3500000,
      disponible: true
    },
    {
      id: 5,
      marca: 'Honda',
      modelo: 'NAVI',
      cilindrada: 110,
      precio: 3400000,
      disponible: false
    },
    {
      id: 6,
      marca: 'Honda',
      modelo: 'NX190',
      cilindrada: 190,
      precio: 8100000,
      disponible: true
    },
    {
      id: 7,
      marca: 'Honda',
      modelo: 'XR150',
      cilindrada: 150,
      precio: 6200000,
      disponible: true
    },
    {
      id: 8,
      marca: 'Honda',
      modelo: 'CB750 HORNET',
      cilindrada: 750,
      precio: 21000000,
      disponible: true
    }
  ];

  // Método para obtener todas las motocicletas
  getMotocicletas(): Motocicleta[] {
    return this.motocicletas;
  }

  // Método para obtener una motocicleta por ID
  getMotocicletaById(id: number): Motocicleta | undefined {
    return this.motocicletas.find(m => m.id === id);
  }
}