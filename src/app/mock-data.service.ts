import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Item } from './item';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MockDataService {
  mockItems: Array<Item>;
  baseURL = '../assets/ms-data.json';

  constructor(private http: HttpClient) {}

  getItems() {
    return this.http.get(this.baseURL)
    .pipe(
        map(data => data as Array<Item>)
    )
  }
}
