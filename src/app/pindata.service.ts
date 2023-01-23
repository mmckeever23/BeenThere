import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pin } from './pin';

@Injectable({
  providedIn: 'root'
})
export class PindataService { 
  baseUrl="http://localhost:8081"

  constructor(private httpClient: HttpClient) { }

  getPins(): Observable<Pin[]>{
    return this.httpClient.get<Pin[]>(`${this.baseUrl}/pin/all`);
  }

  addPin(pin: Pin): Observable<Pin>{
    return this.httpClient.post<Pin>(`${this.baseUrl}/pin/add`, pin);
  }

  updatePin(pin: Pin): Observable<Pin>{
    return this.httpClient.put<Pin>(`${this.baseUrl}/pin/update`, pin);
  }

  deletePin(pinId: number): Observable<void>{
    return this.httpClient.delete<void>(`${this.baseUrl}/pin/delete/${pinId}`);
  }
}
