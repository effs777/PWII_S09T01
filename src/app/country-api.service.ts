import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICountry } from './interfases/ICountry';

@Injectable({
  providedIn: 'root'
})
export class CountryApiService {
  private urlBase: string = `https://restcountries.com/v3.1/`;
  private urlField: string = '?fields=translations,name,flags,cioc,ccn3,region,subregion,capital';

  //https://restcountries.com/v3.1/all?fields=name,flags,cioc,ccn3,region,subregion,capital

  constructor(public http: HttpClient) { }

  getCountries() {
    const url = `${this.urlBase}all${this.urlField}`;
    return this.http.get(url);
  }

  getCountriesRegion(region: string) {
    const url = `${this.urlBase}region/${region}${this.urlField}`;
    return this.http.get(url);
  }
}