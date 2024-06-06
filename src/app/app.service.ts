import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Datos } from './datos';
@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getJsonData(): Observable<Datos[]> {
    return this.http.get<Datos[]>('assets/json/proyectos.json');
  }
}
