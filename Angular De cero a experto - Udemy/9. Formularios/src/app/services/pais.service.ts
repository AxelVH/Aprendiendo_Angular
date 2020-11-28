import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private httpClient: HttpClient) { }

  GetAll(): Observable<any[]> {

    return this.httpClient.get(`https://restcountries.eu/rest/v2/lang/es`)
      .pipe(
        map((data: any[] ) => data.map(pais => ({ nombre: pais.name, codigo: pais.alpha3Code })))
      );

  }

}
