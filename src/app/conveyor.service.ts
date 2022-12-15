import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IConveyor } from './IConveyor';

@Injectable({
  providedIn: 'root'
})
export class ConveyorService {

  constructor(private httpClient: HttpClient) { }

  getConveyors(): Observable<IConveyor[]> {
    return this.httpClient.get<IConveyor[]>('/api/conveyor/all');
  }

}
