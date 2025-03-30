import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  searchText: string = ''; // User input for search
  filterBy: string = 'name'; // Default filter type (name or category)

  recipes = [
    { id: 1, name: "Sambar", category: "South Indian", description: "A flavorful lentil-based stew with vegetables.", image: "http://localhost:8090/sambar.jpg" },
    { id: 2, name: "Filter Coffee", category: "Beverage", description: "South Indian strong coffee brewed with a metal filter.", image: "http://localhost:8090/filter-coffee.jpg" },
    { id: 3, name: "Chettinad Chicken", category: "Non-Veg", description: "A spicy and flavorful Chettinad-style chicken curry.", image: "http://localhost:8090/chicken-chettinad.jpg" },
    { id: 4, name: "Rasam", category: "South Indian", description: "A tangy and spicy South Indian soup made with tamarind.", image: "http://localhost:8090/rasam.jpg" },
    { id: 5, name: "Kothu Parotta", category: "Street Food", description: "A shredded parotta dish stir-fried with egg, spices, and curry.", image: "http://localhost:8090/kothu-parotta.jpg" },
  ];

  constructor(private router: Router) {}

  viewDetails(id: number) {
    this.router.navigate(['/recipe-details', id]);
  }

  editRecipe(id: number) {
    this.router.navigate(['/edit-recipe', id]);
  }

  deleteRecipe(id: number) {
    this.recipes = this.recipes.filter(recipe => recipe.id !== id);
  }
}
