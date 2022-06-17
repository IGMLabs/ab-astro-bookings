import { Injectable } from '@angular/core';
import { Storage } from './storage.interface';

@Injectable()
export abstract class StorageBase implements Storage {
  public abstract getToken(): string;
  public abstract setToken(token: string): void;
}
