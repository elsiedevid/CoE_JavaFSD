import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent {
  recipe = {
    name: '',
    description: '',
    image: '',
    instructions: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    const newRecipe = this.recipe;
    
    // Retrieve the existing recipes from localStorage or set to an empty array if none exist
    let recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    
    // Push the new recipe to the recipes array
    recipes.push(newRecipe);
    
    // Save the updated recipes array back to localStorage
    localStorage.setItem('recipes', JSON.stringify(recipes));

    // Log the new recipe (for debugging)
    console.log('New Recipe Added:', newRecipe);

    // After adding the recipe, navigate back to the recipe list page
    this.router.navigate(['/recipes']);
  }
}
