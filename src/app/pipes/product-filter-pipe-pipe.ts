import { Pipe, PipeTransform } from '@angular/core';
import {Product} from '../models/product';

@Pipe({
  name: 'productFilterPipe',
  standalone: false
})
export class ProductFilterPipePipe implements PipeTransform {

  transform(products: Product[], filter: {
    title?: string,
    minPrice?: number,
    maxPrice?: number,
    category?: string
  }): Product[] {
    if (!products || !filter) return products;
    console.log('Filter applied:', filter);

    return products.filter(product => {
      const matchesTitle = !filter.title  || product.title.toLowerCase().includes(filter.title.toLowerCase());
      const matchesMin = filter.minPrice == null || product.price >= filter.minPrice;
      const matchesMax = filter.maxPrice == null || product.price <= filter.maxPrice;
      const matchesCategory = !filter.category  || filter.category==='All' || product.category.toLowerCase() === filter.category.toLowerCase();
      return matchesTitle && matchesMin && matchesMax  && matchesCategory;
    });
  }

}
