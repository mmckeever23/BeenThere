import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pin } from './pin';

@Injectable({
  providedIn: 'root'
})
export class PindataService {

  baseUrl="http://localhost:8081/pindata"
  constructor(private httpClient: HttpClient) { }

  saveCoordinates(pin: Pin): Observable<Object>{
    console.log(pin);
    return this.httpClient.post(`${this.baseUrl}`, pin);
  }
}
