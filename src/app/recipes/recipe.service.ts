import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  constructor(private slService: ShoppingListService) { }

  private recipes: Recipe[] = [
    new Recipe(
      'Pasta alla Gricia with Lobster',
      'Delicious pasta dish with lobster',
      'https://lobsterfrommaine.com/wp-content/uploads/fly-images/1577/20210517-Pasta-alla-Gricia-with-Lobster3010-1024x576-c.jpg',
      [
        new Ingredient('Pasta', 1),
        new Ingredient('Lobster', 1),
      ]
    ),
    new Recipe(
      'Burger',
      '\'Merica',
      'https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Ground Beef', 1)
      ]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredients(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
