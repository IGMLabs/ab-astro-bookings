import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agency } from './agency.interface';

@Injectable({
  providedIn: 'root',
})
export class AgenciesApi {
  constructor(private http: HttpClient) {}

  public getAll$(): Observable<Agency[]> {
    return this.http.get<Agency[]>('http://localhost:2000/agencies');
  }

  public getById(id: string) {
    return this.http.get<Agency>('http://localhost:3000/agencies/' + id);
  }

  public post(agency: Agency) {
    return this.http.post('http://localhost:3000/agencies', agency);
  }
}
