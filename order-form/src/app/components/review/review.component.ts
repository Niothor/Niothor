import { Component, Input, OnInit } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  @Input() stepper!: MatStepper;
  order: Order | null = null;
  submitted = false;
  orderRef: number = Math.floor(Math.random() * 100000);

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.order$.subscribe(() => {
      this.order = this.orderService.getOrder();
    });
  }

  onBack(): void {
    this.stepper.previous();
  }

  onSubmit(): void {
    if (this.order) {
      this.submitted = true;
      console.log('Παραγγελία υποβλήθηκε:', this.order);
      // Here you would send the order to your backend
      setTimeout(() => {
        this.orderService.resetOrder();
        this.stepper.reset();
      }, 2000);
    }
  }
}
