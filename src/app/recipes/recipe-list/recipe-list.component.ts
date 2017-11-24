import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

	recipes: Recipe[] = [
		new Recipe('Test Recipe', 'This is simply a Test', 'http://www.seriouseats.com/recipes/assets_c/2016/03/20160209-amatriciana-pasta-vicky-wasik-017-thumb-1500xauto-430193.jpg'),
		new Recipe('This is actually Pasta', 'Pasta is a nice dish. You can simply put some souce on it and it will taste WONDERFUL', 'http://www.seriouseats.com/recipes/assets_c/2016/03/20160209-amatriciana-pasta-vicky-wasik-017-thumb-1500xauto-430193.jpg'),
		new Recipe('Hunger', 'I am actually hungry...', 'http://www.seriouseats.com/recipes/assets_c/2016/03/20160209-amatriciana-pasta-vicky-wasik-017-thumb-1500xauto-430193.jpg')

	];

  constructor() { }

  ngOnInit() {
  }

}
