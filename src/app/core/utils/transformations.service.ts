import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransformationsService {
  constructor() {}

  public getDashId(source: string): string {
    return source.toLocaleLowerCase().replace(/ /g, '-');
  }
}
