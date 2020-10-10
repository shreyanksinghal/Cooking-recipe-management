import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: any[]=[
    new Recipe('A Test Recipe', 'Sample Recipe', 'https://source.unsplash.com/1600x900/?cooking'),
    new Recipe('A Test Recipe 2', 'Sample Recipe 2', 'https://source.unsplash.com/1600x900/?cooking')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
