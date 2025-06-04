import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Product} from '../../../models/product';
import {ProductService} from '../../../services/product';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit   {

  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(
      response => {
        this.products = response.products;
      },
      error => {
        console.error('Error fetching products:', error);
      }
    );
  }

  @Input() filterData: any;




}
