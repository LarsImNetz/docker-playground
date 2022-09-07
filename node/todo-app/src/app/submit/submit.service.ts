import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVICE_URLS } from '../app-config.module';
import { TodoDto } from '../todo.dto';

@Injectable({
  providedIn: 'root'
})
export class SubmitService {

  constructor(private readonly httpClient: HttpClient) {
  }

  public submit(todos: TodoDto): Promise<string> {
    return this.httpClient
      .post<string>(SERVICE_URLS.SUBMIT, this.adapt(todos), {})
      .toPromise();
  }

  private adapt(todos: TodoDto): object {
    const adapted = JSON.parse(JSON.stringify(todos));

    return adapted;
  }

}
