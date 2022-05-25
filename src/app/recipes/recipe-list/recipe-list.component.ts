import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://st2.depositphotos.com/48197816/46110/i/1600/depositphotos_461109044-stock-photo-heat-skillet-parallel-little-oil.jpg'),
    new Recipe('Test 2', 'This a test2', 'https://st4.depositphotos.com/24147632/38096/i/1600/depositphotos_380961580-stock-photo-fresh-homemade-chocolate-chip-cookies.jpg')
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedRecipe(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
