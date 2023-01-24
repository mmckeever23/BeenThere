import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pin } from './pin';

@Injectable({
  providedIn: 'root'
})
export class PindataService { 
  baseUrl="http://localhost:8081/pin"
  constructor(private httpClient: HttpClient) { }

  savePins(pin: Pin): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, pin);
  }

  getAllPins(): Observable<Pin[]>{
    return this.httpClient.get<Pin[]>(`${this.baseUrl}`);
  }

}