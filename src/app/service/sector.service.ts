import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectorService {
  private readonly URL = "http://localhost:4001/";

  constructor(private http: HttpClient) { }

  fetchSectors(): Observable<any> {
    return this.http.get(this.URL+"sectors");
  }

  fetchSectorCompanies(id): Observable<any> {
    return this.http.get(this.URL+"sector/"+id);
  }
}
