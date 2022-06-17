import { Injectable } from '@angular/core';

@Injectable()
export abstract class StorageBase {
  public getToken(): string {
    return '';
  }

  public setToken(token: string) {}
}
