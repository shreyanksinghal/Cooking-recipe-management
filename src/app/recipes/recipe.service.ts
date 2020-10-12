import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[]=[
        new Recipe('A Test Recipe', 'Sample Recipe', 'https://source.unsplash.com/1600x900/?cooking'),
        new Recipe('A Test Recipe 2', 'Sample Recipe 2', 'https://source.unsplash.com/1600x900/?cooking')
      ];

      getRecipes(){
          return this.recipes.slice();
      }
}