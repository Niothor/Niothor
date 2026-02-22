import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { OrderService } from '../../services/order.service';
import { Product } from '../../models';

@Component({
  selector: 'app-dimensions',
  templateUrl: './dimensions.component.html',
  styleUrls: ['./dimensions.component.scss']
})
export class DimensionsComponent implements OnInit {
  @Input() stepper!: MatStepper;
  form: FormGroup;
  currentProduct: Product | null = null;

  constructor(
    private fb: FormBuilder,
    private orderService: OrderService
  ) {
    this.form = this.fb.group({});
  }

  ngOnInit(): void {
    this.orderService.order$.subscribe(order => {
      if (order.product) {
        this.currentProduct = order.product;
        this.buildForm();
      }
    });
  }

  buildForm(): void {
    const group: { [key: string]: any } = {};
    if (this.currentProduct?.dimensions) {
      this.currentProduct.dimensions.forEach(dim => {
        const validators = dim.required ? [Validators.required] : [];
        if (dim.type === 'number') {
          validators.push(Validators.pattern(/^\d+$/));
        }
        group[dim.id] = ['', validators];
      });
    }
    this.form = this.fb.group(group);
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.orderService.setDimensions(this.form.value);
      this.stepper.next();
    }
  }

  onBack(): void {
    this.stepper.previous();
  }
}
