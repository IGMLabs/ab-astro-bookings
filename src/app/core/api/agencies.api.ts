import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}
