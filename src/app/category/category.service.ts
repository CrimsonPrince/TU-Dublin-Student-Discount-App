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
          category: '1',
          altUrl:
        },
        {
          id: '2',
          name: 'Captain Americas',
          details: 'Captain America\'s BUY 1 GET 1 FREE ON MAIN MEALS - (Monday - Friday) valid Student Id/Captains key tags or society card. €4 selected cocktails &amp; €3.50 selected pints (Monday to Wednesday) valid Student Id/Captains key tags or society card.',
          imageUrl: '/assets/images/captainAmerica.jpg',
          location: 'Grafton St, Cork, Blanchardstown restaurants only.',
          category: '1',
          altUrl:
        },
        {
          id: '3',
          name: 'Wowburger',
          details: 'Wowburger society/student union discount 19/20 Text for your membership cards – note card must be printed with updated logo attached to this email. All old logos will not be accepted. Wowburger €9.95 Student Meal - 7 days a week ! Terms &amp; Conditions Offer valid 7 days. Offer valid with eat in only ! Offer expires August 31st 2020 Offer valid in all Wowburger outlets. Offer not valid with any other offer. Valid Student ID / keyring required in order to avail of this offer. Use of the offer is confirmation of acceptance of all terms and conditions. Wowburger Student Meal Deal €9.95 - 7 days a week.',
          imageUrl: '/assets/images/wowburger.jpg',
          location: 'All',
          category: '1',
          altUrl:
        },
        {
          id: '4',
          name: 'Bison Bar and BBQ',
          details: 'Bison Bar & BBQ €9.95 Student Meal - (Monday - Friday 12pm - 5pm eat in only) valid Student Id/Captains key tags or society card. Terms & Conditions Offer valid Monday to Friday only. Offer expires August 31st 2020 Offer not valid with any other offer. Valid Student ID / keyring required in order to avail of this offer.. Use of the offer is confirmation of acceptance of all terms and conditions.',
          imageUrl: '/assets/images/bisonBar.jpg',
          location: 'Wellington Quay',
          category: '1',
          altUrl:
        },
        {
          id: '5',
          name: 'Wagamamas',
          details: '‘wagamama’ 20% off main menu, monday thursday only expires august 31st 2020 terms & conditions offer valid monday to thursday only this must be highlighted in an email to all card holders. offer valid in south king st, blanchardstown and dundrum offer not valid with any other offer or with special menus valid on eat’in & take away not valid on bank holidays valid student i.d for all diners to avail of the offer. use of the offer is confirmation of acceptance of all terms and conditions.',
          imageUrl: '/assets/images/wagamamas.jpg',
          location: 'south king st, blanchardstown and dundrum',
          category: '1',
          altUrl:
        },
        {
          id: '6',
          name: 'Breakfest Me',
          details: '10% Discount, Craving breakfast food? Need items to start your day? BreakfastMe can help! We offer a wide variety of food from local cafes and restaurants straight to your home or work. Order delivery times are between 07:00 and 15:00, 7 days a week. Order now and stay in bed!',
          imageUrl: '/assets/images/breakfestMe.jpg',
          location: 'Dublin',
          category: '1',
          altUrl: '/assets/images/breakfestMe.jpg'
        },
        {
          id: '7',
          name: 'Leon Temple Bar',
          details: '5.50 wrap + drink on Tuesdays. €5 meal deal - any main + drink for September only €6.50 meal deal - wrap + drink from October and available all days  15% student discount all year around with valid college ID',
          imageUrl: '/assets/images/leon.png',
          location: 'Temple Bar',
          category: '1',
          altUrl:
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
          details: 'Everleigh FREE entry before 12.00am Sunday to Thursday ! Terms & Conditions Offer valid Sunday to Thursday. Offer expires August 31st 2020 Government ID required &a student ID / student tag. Offer not valid with any other offer. ROAR - Right Of Admission Reserved Use of the offer is confirmation of acceptance of all terms and conditions. Everleigh reserves the right to change the terms of this offer.',
          imageUrl: '/assets/images/everleigh.jpg',
          location: 'Harcourt Street',
          category: '2',
          altUrl:
        },
        {
          id: '2',
          name: 'The Workmans Club',
          details: 'FREE before 11pm €4 pints &amp; €4 cocktails Terms & Conditions: Only valid on Wednesdays! Government ID required & student ID / student tag. Offer not valid with any other offer. ROAR - Right Of Admission Reserved Offer expires August 31st 2020 Offer not valid with any other offer. The Workmans Club reserves the right to change the terms of this offer.',
          imageUrl: '/assets/images/workmans.jpg',
          location: '10 Wellington Key',
          category: '2',
          altUrl:
        },
        {
          id: '3',
          name: 'Woolshed',
          details: '12 euro burger and a pint ( Dublin Blue) Mon- Fri. No-nonsense pub with tellies showing all the big sporting events and a simple pizza and grill menu.',
          imageUrl: '/assets/images/woolShed.jpg',
          location: 'Parnell St',
          category: '2',
          altUrl:
        },
        {
          id: '4',
          name: 'Academy',
          details: 'Monday: Melt Mondays - Free entry before 11:30pm and cheap list after 11:30pm Thursday: Konspiracy - Free entry before 11:30pm and cheap list after 11:30pm Friday: Neon Neon - Free entry before 11:30pm and cheap list after 11:30pm Saturday: Circus - Cheap list until midnight',
          imageUrl: '/assets/images/academy.jpg',
          location: 'Abbey St',
          category: '2',
          altUrl:
        },
        {
          id: '5',
          name: 'The Backpage',
          details: '10% discount, <br> Café | Cocktails | Brunch | Beer | Board Games | Sports | Pizza | Ping Pong | Crazy Golf',
          imageUrl: '/assets/images/backPage.jpg',
          location: 'Phibsborough',
          category: '2',
          altUrl:
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
          details: 'Tower Records 10% off Terms and Conditions: Not valid on sale or electronic items Offer expires August 31st 2020 Offer not valid with any other offer. Tower Records reserves the right to change the terms of this offer.',
          imageUrl: '/assets/images/towerRecords.jpg',
          location: '7 Dawson St & 2nd floor Easons O’Connell St',
          category: '3',
          altUrl:
        },
        {
          id: '2',
          name: 'Muji',
          details: 'Muji 10% of Terms & Conditions: Not valid on Furniture, Not valid on Sale items Offer expires August 31st 2020 Offer not valid with any other offer. Muji reserves the right to change the terms of this offer.',
          imageUrl: '/assets/images/muji.jpg',
          location: 'Chatham St',
          category: '3',
          altUrl:
        },
        {
          id: '3',
          name: 'Aungier Print',
          details: '10% Discount, Aungier Print is intent on providing you with the highest quality and most beneficial results. Whether you are interested in Digital printing or Large format posters, we offer valuable options. For more than 20 years we have conducted business in the Dublin area and strive to bring the community a reliable source for Digital Printing and Large Format Posters.',
          imageUrl: '/assets/images/aungierPrint.jpg',
          location: 'Aungier Street',
          category: '3',
          altUrl: '/assets/images/aungierPrint.jpg'
        },
        {
          id: '4',
          name: 'Savoy Cinema',
          details: '10 euro ticket, popcorn and drink deal, The Savoy Cinema is the oldest operational cinema in Dublin, and it is the preferred cinema in Ireland for film premières.',
          imageUrl: '/assets/images/savoyCinema.jpg',
          location: 'O\'Connell Street Upper',
          category: '3',
          altUrl: '/assets/images/savoyCinema.jpg'
        },
        {
          id: '5',
          name: 'Grafton barbers',
          details: ' €10 Dry Trim. Monday – Friday before 12:30pm. This offer is exclusive in our Grafton Street & South Anne Street stores',
          imageUrl: '/assets/images/graftonBarbers.jpg',
          location: 'Grafton Street & South Anne Street',
          category: '3',
          altUrl:
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
