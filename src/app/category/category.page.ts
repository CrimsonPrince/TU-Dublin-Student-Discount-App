import { Category } from './category.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  categories: Category[] = [
    {
      id: '1',
      name: "Food",
      imageUrl: "https://arthurcoll.com/img/avatar.jpg"
    },
    {
      id: '2',
      name: "Night",
      imageUrl: "https://arthurcoll.com/img/avatar.jpg"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
