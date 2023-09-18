import { Component, OnInit } from '@angular/core';
import { CountryApiService } from '../country-api.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  countryCount: number = 0;
  region:string = ``;
  listCountry: any = {};
  cargando: boolean = true;

  constructor ( public countryApiService: CountryApiService ){}
  ngOnInit(): void {
    this.loadCountry();
  }

  regionFilter(event: Event){
    let btn = event.target as HTMLButtonElement;
    if(btn.textContent == "África"){
      this.region = `africa`;
    } else if(btn.textContent == "América"){
      this.region = `americas`;
    } else if(btn.textContent == "Asia"){
      this.region = `asia`;
    } else if(btn.textContent == "Europa"){
      this.region = `europe`;
    } else if(btn.textContent == "Oceanía"){
      this.region = `oceania`;
    } else {
      this.region = ``;
    }
    this.region ? this.loadCountryRegion() : this.loadCountry();
  }

  loadCountry(){
    this.cargando = true;
    this.countryApiService.getCountries().subscribe(data => {
      this.cargando = false;
      this.listCountry = data;
    });
  }
  loadCountryRegion(){
    this.cargando = true;
    this.countryApiService.getCountriesRegion(this.region || "").subscribe(data => {
      this.cargando = false;
      this.listCountry = data;
    });
  }
}