import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { PagoPlux } from "../adapters/payplux";

@Injectable({
    providedIn: 'root', 
  })
export class PayPluxService {
    private readonly baseUrl='http://localhost:3002/payplux/';

    constructor() { }

    http= inject(HttpClient)


    getTransactionByIdStateResource(idTransaction:string) {
    return this.http.get<PagoPlux>(`${this.baseUrl}getById?idTransaction=${idTransaction}`);
  }


}