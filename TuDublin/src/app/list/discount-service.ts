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
          details: 'Burger, fries and a soft drink for &euro;9.95 - 7 days a week<br/><strong>T&amp;Cs</strong><br />Offer valid 7 days, Offer valid with eat in or take away, Offer valid in all Wowburger outlets, Offer not<br />valid with any other offer, Valid Student ID / keyring required in order to avail of this offer, Use of<br />the offer is confirmation of acceptance of all terms and conditions, Wowburger reserves the right to<br />change the terms of this offer. Any changes in terms will be given in writing 1 month in advance of any<br />change',
          imageUrl: '/assets/wow2.png',
          location: 'All Locations',
          altUrl: "Burger, fries and a soft drink for &euro;9.95 - 7 days a week"
        },
        {
          id: '2',
          name: 'Workmans',
          details: '<p>Selected spirit and splash for &euro;5<br /><strong>T&amp;Cs</strong><br />A valid and in date student ID (not student leap card) and proof of age (passport, Garda ID or drivers<br/>license) required. Photos of ID cannot be accepted. Valid 7 days a week.</p>',
          imageUrl: '/assets/work2.png',
          location: 'Wellington Quay, Temple Bar',
          altUrl: 'Selected spirit and splash for &euro;5'
        },
        {
          id: '3',
          name: 'Wagamama',
          details: '<p>20% off Main Menu Monday &ndash; Thursday<br /><strong>T&amp;Cs</strong><br />Applies to Main Menu only, offer not valid with any other offer or with special menu&rsquo;s, valid student<br />idand society card required; the discount only applies for the card holder only, not accompanying<br />guests. Valid in south king Street, blanchardstown, and Dundrum restaurants, valid in eat in &amp; take away,<br />not valid in December 2019 / on bank holidays, cards will only be accepted with valid wagamama logo,<br />discount will be applied to the bill for student holding valid college id and society card. in case of the<br />student dining with guests who cannot avail of the offer, the bill will be split by the server, use of the<br />offer is confirmation of acceptance of all terms and conditions, wagamama reserve the right to<br />change the terms of this offer.</p>',
          imageUrl: '/assets/waga1.jpg',
          location: 'South king Street, Blanchardstown, and Dundrum',
          altUrl: '20% off Main Menu Monday – Thursday'
        },
        {
          id: '4',
          name: 'Captain Americas',
          details: '<p>Buy one get one FREE on Captain Americas a la carte main course menu items Monday -<br />Friday!<br /><strong>T&amp;Cs</strong><br />Valid student ID required | does not include steaks / ribs | applies to Captain Americas a la carte<br />Main course menu only</p>',
          imageUrl: '/assets/captains1.png',
          location: 'All Locations',
          altUrl: 'Buy one get one FREE on Captain Americas a la carte main course menu items Monday - Friday!'
        },
        {
          id: '5',
          name: 'Bison Bar And Grill',
          details: '<p>Any Burger/Sambo, Any Side &amp; a soft drink or PT Heineken &euro;9.95 (Mon-Fri 12-5pm)<br />T&amp;Cs</p> <p>Valid &ndash; Monday to Friday 12pm- 5pm (eat in only).<br />Individuals must be 3rd level students and over the age of 18 years old.</p>',
          imageUrl: '/assets/bison2.png',
          location: 'south king st, blanchardstown and dundrum',
          altUrl: 'Any Burger/Sambo, Any Side & a soft drink or PT Heineken €9.95 (Mon-Fri 12-5pm)'
        },
        {
          id: '6',
          name: 'Tower Records',
          details: '<p>7 Dawson St &amp; 2nd floor Easons O&rsquo;Connell St 10% off discount<br />T&amp;Cs<br />Not valid on sale or electronic items Offer expires August 31st 2021 Offer not valid with any other<br />offer.<br />Tower Records reserves the right to change the terms of this offer. Any changes in terms will be given in writing 1 month in advance of any change. Card will only be accepted with logo attached to this mail &ndash; any cards with previous logo will NOT be accepted.</p>',
          imageUrl: '/assets/tower1.jpg',
          location: '7 Dawson St & 2nd floor Easons O’Connell St',
          altUrl: '7 Dawson St & 2nd floor Easons O’Connell St 10% off discount'
        },
        {
          id: '7',
          name: 'MUJI',
          details: '<p>Chatham St 10% off discount<br /><strong>T&amp;Cs</strong><br />Not valid on Furniture, Not valid on Sale items Offer expires August 31st 2021 Offer not valid with<br />any other offer. Muji reserves the right to change the terms of this offer. Any changes in terms will be<br />given in writing 1 month in advance of any change. Card will only be accepted with logo attached to this<br />mail &ndash; any cards with previous logo will NOT be accepted.</p>',
          imageUrl: '/assets/muji2.jpg',
          location: 'Chatham St',
          altUrl: 'Chatham St 10% off discount'
        }
  ];


  constructor() { }

  getAll() {
    return [...this.discount];
  }

  getById () {
      return 
  }
}