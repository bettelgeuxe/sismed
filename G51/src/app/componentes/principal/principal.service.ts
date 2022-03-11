import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  apiURL:string="http://localhost:8080/api/pacientes"

  constructor() { }
}
