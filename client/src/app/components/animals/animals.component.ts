import { Component, OnInit } from '@angular/core';

import { AnimalService } from '../../services/animal.service';
import { Animal } from 'src/app/models/Animal';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css'],
})
export class AnimalsComponent implements OnInit {
  animal: Animal = { id: 0, name: '' };
  animals: Array<Animal> = [];

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.loadAnimals();
  }

  private loadAnimals() {
    this.animalService.getAllAnimals().subscribe((data) => {
      this.animals = data;
    });
  }

  onCreate(): void {
    this.animalService.createAnimal(this.animal).subscribe(() => {
      this.loadAnimals();
    });
  }

  onDelete(id: number): void {
    this.animalService.deleteAnimal(id).subscribe(() => {
      this.loadAnimals();
    });
  }
}
