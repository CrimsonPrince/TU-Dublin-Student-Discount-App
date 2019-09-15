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
          name: 'Pablo Picante',
          details: '4.99 Off Peak Burrito\'s in Aston Quay after 2pm',
          imageUrl: '/assets/images/diceys.jpg',
          location: 'Aston Quay'
        },
        {
          id: '2',
          name: 'Captain Americas',
          details: 'Lorem',
          imageUrl: 'he',
          location: 'dublin'
        },
        {
          id: '3',
          name: 'Wowburger',
          details: 'Lorem',
          imageUrl: 'he',
          location: 'dublin'
        },
        {
          id: '4',
          name: 'Bison Bar and BBQ',
          details: 'Lorem',
          imageUrl: 'he',
          location: 'dublin'
        },
        {
          id: '5',
          name: 'Wagamamas',
          details: 'Lorem',
          imageUrl: 'he',
          location: 'dublin'
        },
        {
          id: '6',
          name: 'Breakfest Me',
          details: 'Lorem',
          imageUrl: 'he',
          location: 'dublin'
        },
        {
          id: '7',
          name: 'Leon Temple Bar',
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
      discounts: [
        {
          id: '1',
          name: 'EverLeigh',
          details: 'Lorem',
          imageUrl: '/assets/images/everleigh.jpg',
          location: 'dublin'
        },
        {
          id: '2',
          name: 'Workmans',
          details: 'Lorem',
          imageUrl: '/assets/images/workmans.jpg',
          location: 'dublin'
        },
        {
          id: '3',
          name: 'Woolshed',
          details: 'Lorem',
          imageUrl: '/assets/images/tramline.jpg',
          location: 'dublin'
        },
        {
          id: '4',
          name: 'Academy',
          details: 'Lorem',
          imageUrl: '/assets/images/academy.jpg',
          location: 'dublin'
        },
        {
          id: '5',
          name: 'The Backpage',
          details: 'Lorem',
          imageUrl: '/assets/images/wowburger.jpg',
          location: 'dublin'
        }

      ]
    },
    {
      id: '3',
      name: 'Shopping',
      imageUrl: '../../assets/images/academy.jpg',
      discounts: [
        {
          id: '1',
          name: 'Tower Records',
          details: 'Lorem',
          imageUrl: 'he',
          location: 'dublin'
        },
        {
          id: '2',
          name: 'Muji',
          details: 'Lorem',
          imageUrl: 'he',
          location: 'dublin'
        },
        {
          id: '3',
          name: 'Aungier Print',
          details: 'Lorem',
          imageUrl: 'he',
          location: 'dublin'
        },
        {
          id: '4',
          name: 'Savoy Cinema',
          details: 'Lorem',
          imageUrl: 'he',
          location: 'dublin'
        },
        {
          id: '5',
          name: 'Grafton barbers',
          details: 'Lorem',
          imageUrl: 'he',
          location: 'dublin'
        }
      ]
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
