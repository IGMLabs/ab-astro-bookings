import { HttpClient } from '@angular/common/http';
import { catchError, of, pipe, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StatusStore } from './status.store';

export abstract class CrudApi<ApiType> {
  private url = environment.apiUrl + this.endPoint + '/';

  private statusPipe = pipe(
    tap(() => this.notifyIdle()),
    catchError((err) => {
      this.notifyError(err.message);
      return of(err);
    })
  );

  constructor(
    private http: HttpClient,
    private endPoint: string,
    protected statusStore: StatusStore
  ) {}

  public getAll$() {
    this.notifyWorking();
    return this.http.get<ApiType[]>(this.url).pipe(this.statusPipe);
  }

  public getById$(id: string) {
    this.notifyWorking();
    return this.http.get<ApiType>(this.url + id).pipe(this.statusPipe);
  }

  public post$(payload: Partial<ApiType>) {
    this.notifyWorking();
    return this.http.post<ApiType>(this.url, payload).pipe(this.statusPipe);
  }

  public put$(id: string, payload: Partial<ApiType>) {
    this.notifyWorking();
    return this.http.put<ApiType>(this.url + id, payload).pipe(this.statusPipe);
  }

  public delete$(id: string) {
    this.notifyWorking();
    return this.http.delete<ApiType>(this.url + id).pipe(this.statusPipe);
  }

  private notifyWorking() {
    this.statusStore.setState({ isWorking: true, errorMessage: '' });
  }
  private notifyIdle() {
    this.statusStore.setState({ isWorking: false, errorMessage: '' });
  }
  private notifyError(message: string) {
    this.statusStore.setState({ isWorking: false, errorMessage: message });
  }
}
