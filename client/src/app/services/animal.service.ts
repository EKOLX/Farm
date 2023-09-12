import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Animal } from '../models/Animal';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  private apiUrl = 'http://localhost:5261/api/animal';

  constructor(private http: HttpClient) {}

  getAllAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }

  createAnimal(animal: Animal): Observable<Animal> {
    return this.http.post<Animal>(this.apiUrl, animal);
  }

  deleteAnimal(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
