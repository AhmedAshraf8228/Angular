import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [
    {
      title: 'iPhone 15 Pro',
      category: 'Electronics',
      price: 999,
      stock: 25,
      image: 'assets/imgs/iphone.jpg'
    },
    {
      title: 'Samsung Galaxy S24',
      category: 'Electronics',
      price: 899,
      stock: 18,
      image: 'assets/imgs/samsung.jpg'
    },
    {
      title: 'Nike Air Max',
      category: 'Shoes',
      price: 120,
      stock: 50,
      image: 'assets/imgs/airmax.jpg'
    },
    {
      title: 'Adidas Ultraboost',
      category: 'Shoes',
      price: 180,
      stock: 35,
      image: 'assets/imgs/ultraboost.jpg'
    },
    {
      title: 'MacBook Pro M3',
      category: 'Electronics',
      price: 1999,
      stock: 12,
      image: 'assets/imgs/macbook.jpg'
    },
    {
      title: 'Sony WH-1000XM5',
      category: 'Electronics',
      price: 399,
      stock: 40,
      image: 'assets/imgs/sony.jpg'
    },
    {
      title: 'Levi’s 501 Jeans',
      category: 'Clothing',
      price: 59,
      stock: 60,
      image: 'assets/imgs/levis.jpg'
    },
    {
      title: 'Nike Dri-FIT Shirt',
      category: 'Clothing',
      price: 35,
      stock: 75,
      image: 'assets/imgs/nike-shirt.jpg'
    }
  ];
}
