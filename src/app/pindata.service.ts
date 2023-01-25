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

  savePin(pin: Pin): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, pin);
  }

  getAllPins(): Observable<Pin[]>{
    return this.httpClient.get<Pin[]>(`${this.baseUrl}`);
  }

  getPinById(id: number): Observable<Pin>{
    return this.httpClient.get<Pin>(`${this.baseUrl}/${id}`)
  }

  updatePin(id: number, pin: Pin): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, pin);
  }

  deletePin(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

}