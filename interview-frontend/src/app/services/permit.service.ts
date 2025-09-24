import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PermitRegistration, CreatePermitRegistration } from '../models/permit-registration';

@Injectable({
  providedIn: 'root',
})
export class PermitService {
  private apiUrl = 'http://localhost:5098/api/permitregistrations';

  constructor(private http: HttpClient) {}

  getPermits(): Observable<PermitRegistration[]> {
    return this.http.get<PermitRegistration[]>(this.apiUrl);
  }

  getPermit(id: number): Observable<PermitRegistration> {
    return this.http.get<PermitRegistration>(`${this.apiUrl}/${id}`);
  }

  createPermit(permit: CreatePermitRegistration): Observable<PermitRegistration> {
    return this.http.post<PermitRegistration>(this.apiUrl, permit);
  }

  // TODO: Add method to update permit status
}
