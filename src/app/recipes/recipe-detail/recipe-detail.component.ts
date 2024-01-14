import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
	selector: 'app-recipe-detail',
	templateUrl: './recipe-detail.component.html',
	styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
	recipe: Recipe;
	id: number;

	constructor(
		private recipeService: RecipeService,
		private route: ActivatedRoute,
		private router: Router
	) {}

	addToShoppingList() {
		this.recipeService.addIngredients(this.recipe.ingredients);
	}

	onEditRecipe(): void {
		this.router.navigate(['../', this.id, 'edit'], {
			relativeTo: this.route
		});
	}

	ngOnInit(): void {
		this.route.params.subscribe((params: Params) => {
			this.id = +params.id;
			this.recipe = this.recipeService.getRecipe(this.id);
		});
	}
}
