import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Product} from '../../models/product';
import {ProductService} from '../../services/product';
import {CartService} from '../../services/cart-service';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit   {

  products: Product[] = [];

  constructor(private productService: ProductService ,private cartService: CartService) {}

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


  addToCart(product: any) {
    this.cartService.addToCart({
      productId: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
      image: product.thumbnail
    });

    // Optional toast
    alert(`${product.title} added to cart!`);


  }
}
