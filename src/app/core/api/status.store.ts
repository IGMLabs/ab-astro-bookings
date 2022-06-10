import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiStatus } from './api-status.interface';

@Injectable({
  providedIn: 'root',
})
export class StatusStore {
  private initialState: ApiStatus = {
    isWorking: false,
    errorMessage: '',
  };
  private state$: BehaviorSubject<ApiStatus> = new BehaviorSubject(
    this.initialState
  );

  public setState(newState: ApiStatus) {
    this.state$.next(newState);
  }

  public getState$() {
    return this.state$.asObservable();
  }
}
