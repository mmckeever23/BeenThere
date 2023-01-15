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

  savePinData(pinData: object): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, pinData);
  }
}
