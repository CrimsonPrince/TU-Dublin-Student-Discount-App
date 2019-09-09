import { Discount } from './discount.model';
import { Category } from './category.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categories: Category[] = [
    {
      id: '1',
      name: 'Food',
      imageUrl: '../../assets/images/diceys.jpg',
      discounts: [
        {
          id: '1',
          name: 'Diceys',
          details: 'Lorem',
          imageUrl: 'he',
          location: 'dublin'
        },
        {
          id: '2',
          name: 'Academy',
          details: 'Lorem',
          imageUrl: 'he',
          location: 'dublin'
        }
      ]
    },
    {
      id: '2',
      name: 'Night',
      imageUrl: '../../assets/images/academy.jpg',
      discounts: []
    }
  ];


  constructor() { }

  getAllCategories() {
    return [...this.categories];
  }

  getCategory(categoryId: string) {
    return { ...this.categories.find(category => {
      return category.id === categoryId;
    })};
  }
}
