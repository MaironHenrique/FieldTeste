import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repositores } from './model/repositores';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RepositorioService {

  apiRequest = 'https://api.github.com/search/repositories?q=';
  
  constructor(private http:HttpClient) { }

  obterTodos(search: string, page:number = 1):
  Observable<Repositores> { 
    return this.http.get<Repositores>
    (`${this.apiRequest}${search}&page=${page}`);
  }

 

}
