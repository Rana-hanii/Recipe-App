import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { get } from 'http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  constructor(private _httpClient:HttpClient) {}

  getMeals():Observable<any>{
    return this._httpClient.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');

  } 
  getMealDetails(id:string):Observable<any>{
    return this._httpClient.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  }
}

