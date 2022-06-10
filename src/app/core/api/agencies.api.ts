import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agency } from './agency.interface';
import { CrudApi } from './crud.api';

@Injectable({
  providedIn: 'root',
})
export class AgenciesApi extends CrudApi<Agency> {
  constructor(http: HttpClient) {
    super(http, 'agencies');
  }
}
