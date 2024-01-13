import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  private recipes: Recipe[] = [
    new Recipe(
      'Another Test Recipe',
      'The is simply a test',
      'https://lobsterfrommaine.com/wp-content/uploads/fly-images/1577/20210517-Pasta-alla-Gricia-with-Lobster3010-1024x576-c.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'The is simply a test',
      'https://lobsterfrommaine.com/wp-content/uploads/fly-images/1577/20210517-Pasta-alla-Gricia-with-Lobster3010-1024x576-c.jpg'
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
