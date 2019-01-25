import { Injectable } from '@angular/core';
import { AuthHttp } from "angular2-jwt/angular2-jwt";

@Injectable()
export class OrderService {

  constructor(private authHttp: AuthHttp) {
  }

  getOrders() { 
    return this.authHttp.get('http://localhost:8081/jobs')
      .map(response => response.json());
  }
}
