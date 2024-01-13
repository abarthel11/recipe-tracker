import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }
}
