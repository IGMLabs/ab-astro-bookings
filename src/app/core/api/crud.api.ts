import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export abstract class CrudApi<ApiType> {
  private url = environment.apiUrl + this.endPoint + '/';

  constructor(private http: HttpClient, private endPoint: string) {}

  public getAll$() {
    return this.http.get<ApiType[]>(this.url);
  }

  public getById$(id: string) {
    return this.http.get<ApiType>(this.url + id);
  }

  public post$(payload: Partial<ApiType>) {
    return this.http.post<ApiType>(this.url, payload);
  }

  public put$(id: string, payload: Partial<ApiType>) {
    return this.http.put<ApiType>(this.url + id, payload);
  }

  public delete$(id: string) {
    return this.http.delete<ApiType>(this.url + id);
  }
}
