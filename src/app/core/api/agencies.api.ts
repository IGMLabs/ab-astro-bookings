import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agency } from './agency.interface';
import { CrudApi } from './crud.api';
import { StatusStore } from './status.store';

@Injectable({
  providedIn: 'root',
})
export class AgenciesApi extends CrudApi<Agency> {
  constructor(http: HttpClient, statusStore: StatusStore) {
    super(http, 'agencies', statusStore);
  }

  public getByText$(text: string | null): Observable<Agency[]> {
    if (text === null || text == '') return this.getAll$();
    return this.http.get<Agency[]>(this.url + '?q=' + text); // .pipe(delay(3000));
  }
}
