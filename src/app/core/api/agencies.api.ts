import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Agency } from './agency.interface';

@Injectable({
  providedIn: 'root',
})
export class AgenciesApi {
  private url = environment.apiUrl + 'agencies/';

  constructor(private http: HttpClient) {}

  public getAll$(): Observable<Agency[]> {
    return this.http.get<Agency[]>(this.url);
  }

  public getById$(id: string): Observable<Agency> {
    return this.http.get<Agency>(this.url + id);
  }

  public post$(agency: Agency): Observable<Agency> {
    return this.http.post<Agency>(this.url, agency);
  }
}
