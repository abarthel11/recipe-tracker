import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Another Test Recipe',
      'The is simply a test',
      'https://lobsterfrommaine.com/wp-content/uploads/fly-images/1577/20210517-Pasta-alla-Gricia-with-Lobster3010-1024x576-c.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'The is simply a test',
      'https://lobsterfrommaine.com/wp-content/uploads/fly-images/1577/20210517-Pasta-alla-Gricia-with-Lobster3010-1024x576-c.jpg'
    ),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  constructor() {}

  ngOnInit(): void {}
}
