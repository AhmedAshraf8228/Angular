import {Component, EventEmitter, Input, input, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from '../../../models/category';
import {ProductService} from '../../../services/product';

@Component({
  selector: 'app-filter',
  standalone: false,
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent implements OnInit {
  categories: Category[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getCategories().subscribe(
      response => {
        this.categories = response;
      },
      error => {
        console.error('Error fetching products:', error);
      }
    );
  }


  @Input() filters:any ;
  @Output() filterChange = new EventEmitter<any>();

  onFilterUpdate() {
    this.filterChange.emit(this.filters);
  }
}
