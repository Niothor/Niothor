import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Order, CustomerData, Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderSubject = new BehaviorSubject<Partial<Order>>({});
  public order$: Observable<Partial<Order>> = this.orderSubject.asObservable();

  constructor() { }

  setCustomerData(customer: CustomerData): void {
    const current = this.orderSubject.value;
    this.orderSubject.next({ ...current, customer });
  }

  setProduct(product: Product): void {
    const current = this.orderSubject.value;
    this.orderSubject.next({ ...current, product });
  }

  setDimensions(dimensions: { [key: string]: any }): void {
    const current = this.orderSubject.value;
    this.orderSubject.next({ ...current, dimensions });
  }

  getOrder(): Order | null {
    const order = this.orderSubject.value;
    if (order.customer && order.product && order.dimensions) {
      return order as Order;
    }
    return null;
  }

  resetOrder(): void {
    this.orderSubject.next({});
  }
}
