import { Component, Input, OnInit } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { ProductService } from '../../services/product.service';
import { OrderService } from '../../services/order.service';
import { Product } from '../../models';

@Component({
  selector: 'app-product-selection',
  templateUrl: './product-selection.component.html',
  styleUrls: ['./product-selection.component.scss']
})
export class ProductSelectionComponent implements OnInit {
  @Input() stepper!: MatStepper;
  products: Product[] = [];
  selectedProduct: Product | null = null;

  constructor(
    private productService: ProductService,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  selectProduct(product: Product): void {
    this.selectedProduct = product;
    this.orderService.setProduct(product);
  }

  onNext(): void {
    if (this.selectedProduct) {
      this.stepper.next();
    }
  }

  onBack(): void {
    this.stepper.previous();
  }
}
