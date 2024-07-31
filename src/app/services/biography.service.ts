import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Biography} from "../models/biography.model";
import {firstValueFrom} from "rxjs";
import {environment} from "../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class BiographyService {
  private fullBaseUrlApi

  constructor(private http: HttpClient) {
    this.fullBaseUrlApi = environment.API_URL + "biography";
  }

  getBiography() : Promise<Biography> {
    return firstValueFrom(this.http.get<Biography>(this.fullBaseUrlApi))
  }
}
