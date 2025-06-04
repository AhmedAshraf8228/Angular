import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  currentFilter =
    { title: '', category: 'All', minPrice: null, maxPrice: null };

  updateFilter(e: any) {
    this.currentFilter = { ...e };
  }

}
