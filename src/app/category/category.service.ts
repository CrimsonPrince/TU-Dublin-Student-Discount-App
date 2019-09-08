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
      imageUrl: 'https://arthurcoll.com/img/avatar.jpg'
    },
    {
      id: '2',
      name: 'Night',
      imageUrl: 'https://arthurcoll.com/img/avatar.jpg'
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
