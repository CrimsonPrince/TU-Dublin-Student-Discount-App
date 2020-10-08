import { Discount } from './discount.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  private discount: Discount[] = [
        {
          id: '1',
          name: 'WowBurger',
          details: 'Offer valid 7 days, Offer valid with eat in or take away, Offer valid in all Wowburger outlets, Offer not valid with any other offer. \nValid Student ID / keyring required in order to avail of this offer, Use of the offer is confirmation of acceptance of all terms and conditions. \nWowburger reserves the right to  change the terms of this offer. Any changes in terms will be given in writing 1 month in advance of any change',
          imageUrl: '/assets/wow-detail.png',
          location: 'All Locations',
          altUrl: "/assets/wow-list.png",
          shortDetails: "Burger, fries and a soft drink for €9.95 - 7 days a week",
          color: "dark"
        },
        {
          id: '2',
          name: 'Workmans',
          details: 'A valid and in date student ID (not student leap card) and proof of age (passport, Garda ID or driver license) required. Photos of ID cannot be accepted. Valid 7 days a week.',
          imageUrl: '/assets/work-detail.png',
          location: 'Wellington Quay, Temple Bar',
          altUrl: '/assets/work-list.png',
          shortDetails: 'Selected spirit and splash for €5',
          color: "dark"
        },
        {
          id: '3',
          name: 'Wagamama',
          details: 'Applies to Main Menu only, offer not valid with any other offer or with special menus, valid student id and society card required; the discount only applies for the card holder only, not accompanying guests. Valid in south king Street, Blanchardstown, and Dundrum restaurants, valid in eat in & take away, not valid in December 2020 / on bank holidays, cards will only be accepted with valid Wagamama logo, discount will be applied to the bill for student holding valid college id and society card. in case of the student dining with guests who cannot avail of the offer, the bill will be split by the server, use of the offer is confirmation of acceptance of all terms and conditions, Wagamama reserve the right to change the terms of this offer.',
          imageUrl: '/assets/waga-details.jpg',
          location: 'South king Street, Blanchardstown, and Dundrum',
          altUrl: '/assets/waga-list.jpg',
          shortDetails: '20% off Main Menu Monday – Thursday',
          color: "light"
        },
        {
          id: '4',
          name: 'Captain Americas',
          details: 'Valid student ID required | does not include steaks / ribs | applies to Captain Americas a la carte Main course menu only',
          imageUrl: '/assets/captains-detail.png',
          location: 'All Locations',
          altUrl: '/assets/captains-list.png',
          shortDetails: 'Buy one get one FREE on Captain Americas a la carte main course menu items Monday - Friday!',
          color: "light"
        },
        {
          id: '5',
          name: 'Bison Bar And Grill',
          details: 'Valid - Monday to Friday 12pm- 5pm (eat in only). Individuals must be 3rd level students and over the age of 18 years old.',
          imageUrl: '/assets/bison-detail.png',
          location: 'south king st, blanchardstown and dundrum',
          altUrl: '/assets/bison-list.png',
          shortDetails: 'Any Burger/Sambo, Any Side & a soft drink or PT Heineken €9.95 (Mon-Fri 12-5pm)',
          color: "light"
        },
        {
          id: '6',
          name: 'Tower Records',
          details: 'Not valid on sale or electronic items Offer expires August 31st 2021 Offer not valid with any other offer. Tower Records reserves the right to change the terms of this offer. Any changes in terms will be given in writing 1 month in advance of any change. Card will only be accepted with logo attached to this mail & any cards with previous logo will NOT be accepted.',
          imageUrl: '/assets/tower-details.jpg',
          location: '7 Dawson St & 2nd floor Easons O’Connell St',
          altUrl: '/assets/tower-list.jpg',
          shortDetails: '7 Dawson St & 2nd floor Easons O’Connell St 10% off discount',
          color: "light"
        },
        {
          id: '7',
          name: 'MUJI',
          details: 'Not valid on Furniture, Not valid on Sale items Offer expires August 31st 2021 Offer not valid with any other offer. Muji reserves the right to change the terms of this offer. Any changes in terms will be given in writing 1 month in advance of any change. Card will only be accepted with logo attached to this mail & any cards with previous logo will NOT be accepted.',
          imageUrl: '/assets/muji-details.jpg',
          location: 'Chatham St',
          altUrl: '/assets/muji-list.jpg',
          shortDetails: 'Chatham St 10% off discount',
          color: "light"
        }
  ];


  constructor() { }

  getAll() {
    return [...this.discount];
  }

  getById (id) {
      return this.discount.find(o => o.id === id);
  }
}