import {EventEmitter, Injectable} from "@angular/core";

import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Omelet',
      'This is a super-omelet!',
      'https://st2.depositphotos.com/48197816/46110/i/1600/depositphotos_461109044-stock-photo-heat-skillet-parallel-little-oil.jpg',
      [
        new Ingredient('Egg', 4),
        new Ingredient('Ham', 4)
      ]),
    new Recipe(
      'Cookies',
      'A super-cookie filled with chocolate!',
      'https://st4.depositphotos.com/24147632/38096/i/1600/depositphotos_380961580-stock-photo-fresh-homemade-chocolate-chip-cookies.jpg',
      [
        new Ingredient('Milk', 1),
        new Ingredient('Flour', 1),
        new Ingredient('Chocolate', 2)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipe() {
    return this.recipes.slice();
  }

  getIngredients(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredientFromRecipe(ingredients);
  }

}
