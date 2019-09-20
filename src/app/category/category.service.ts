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
          imageUrl: '/assets/images/pabloPicante.jpg',
          location: 'Aston Quay',
          category: '1'
        },
        {
          id: '2',
          name: 'Captain Americas',
          details: 'Captain America\'s BUY 1 GET 1 FREE ON MAIN MEALS - (Monday - Friday) valid Student Id/Captains key tags or society card. €4 selected cocktails &amp; €3.50 selected pints (Monday to Wednesday) valid Student Id/Captains key tags or society card.',
          imageUrl: '/assets/images/captainAmerica.jpg',
          location: 'dublin',
          category: '1'
        },
        {
          id: '3',
          name: 'Wowburger',
          details: 'Wowburger society/student union discount 19/20 Text for your membership cards – note card must be printed with updated logo attached to this email. All old logos will not be accepted. Wowburger €9.95 Student Meal - 7 days a week ! Terms &amp; Conditions Offer valid 7 days. Offer valid with eat in only ! Offer expires August 31st 2020 Offer valid in all Wowburger outlets. Offer not valid with any other offer. Valid Student ID / keyring required in order to avail of this offer. Use of the offer is confirmation of acceptance of all terms and conditions. Wowburger Student Meal Deal €9.95 - 7 days a week Wowburger reserves the right to change the terms of this offer. Any changes in terms will be given in writing 1 month in advance of any change. Card will only be accepted with logo attached to this mail – any cards with previous logo will NOT be accepted. Soft copy of card must be emailed to student@pressup.ie before the start of term.',
          imageUrl: '/assets/images/wowburger.jpg',
          location: 'dublin',
          category: '1'
        },
        {
          id: '4',
          name: 'Bison Bar and BBQ',
          details: '',
          imageUrl: '/assets/images/bisonBar.jpg',
          location: 'dublin',
          category: '1'
        },
        {
          id: '5',
          name: 'Wagamamas',
          details: 'Lorem',
          imageUrl: '/assets/images/wagamamas.jpg',
          location: 'dublin',
          category: '1'
        },
        {
          id: '6',
          name: 'Breakfest Me',
          details: 'Lorem',
          imageUrl: '/assets/images/breakfestMe.jpg',
          location: 'dublin',
          category: '1'
        },
        {
          id: '7',
          name: 'Leon Temple Bar',
          details: 'Lorem',
          imageUrl: '/assets/images/leon.png',
          location: 'dublin',
          category: '1'
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
          details: ' ',
          imageUrl: '/assets/images/everleigh.jpg',
          location: 'dublin',
          category: '2'
        },
        {
          id: '2',
          name: 'Workmans',
          details: 'Lorem',
          imageUrl: '/assets/images/workmans.jpg',
          location: 'dublin',
          category: '2'
        },
        {
          id: '3',
          name: 'Woolshed',
          details: 'Lorem',
          imageUrl: '/assets/images/woolShed.jpg',
          location: 'dublin',
          category: '2'
        },
        {
          id: '4',
          name: 'Academy',
          details: 'Lorem',
          imageUrl: '/assets/images/academy.jpg',
          location: 'dublin',
          category: '2'
        },
        {
          id: '5',
          name: 'The Backpage',
          details: 'Lorem',
          imageUrl: '/assets/images/backPage.jpg',
          location: 'dublin',
          category: '2'
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
          imageUrl: '/assets/images/towerRecords.jpg',
          location: 'dublin',
          category: '3'
        },
        {
          id: '2',
          name: 'Muji',
          details: 'Lorem',
          imageUrl: '/assets/images/muji.jpg',
          location: 'dublin',
          category: '3'
        },
        {
          id: '3',
          name: 'Aungier Print',
          details: 'Lorem',
          imageUrl: '/assets/images/aungierPrint.jpg',
          location: 'dublin',
          category: '3'
        },
        {
          id: '4',
          name: 'Savoy Cinema',
          details: 'Lorem',
          imageUrl: '/assets/images/savoyCinema.jpg',
          location: 'dublin',
          category: '3'
        },
        {
          id: '5',
          name: 'Grafton barbers',
          details: 'Lorem',
          imageUrl: '/assets/images/graftonBarbers.jpg',
          location: 'dublin',
          category: '3'
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
