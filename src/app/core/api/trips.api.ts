import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Trip } from './trip.interface';

@Injectable({
  providedIn: 'root',
})
export class TripsApi {
  private url = environment.apiUrl + 'trips/';

  constructor(private http: HttpClient) {}

  public getAll() {
    return this.http.get<Trip[]>(this.url);
  }

  public getById(id: string) {
    return this.http.get<Trip>(this.url + id);
  }

  public post(trip: Partial<Trip>) {
    return this.http.post<Trip>(this.url, trip);
  }
}
