import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent {
  recipeId: number | null = null;
  recipe = { id: 0, name: '', description: '', instructions: '', image: '' };

  constructor(private route: ActivatedRoute, private router: Router) {
    this.recipeId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadRecipe();
  }

  loadRecipe() {
    const storedRecipes = localStorage.getItem('recipes');
    if (storedRecipes) {
      const recipes = JSON.parse(storedRecipes);
      const foundRecipe = recipes.find((r: any) => r.id === this.recipeId);
      if (foundRecipe) {
        this.recipe = { ...foundRecipe }; // Create a copy to avoid direct mutation
      }
    }
  }

  saveRecipe() {
    let storedRecipes = localStorage.getItem('recipes');
    if (storedRecipes) {
      let recipes = JSON.parse(storedRecipes);
      const index = recipes.findIndex((r: any) => r.id === this.recipeId);
      if (index !== -1) {
        recipes[index] = { ...this.recipe }; // Ensure immutability
        localStorage.setItem('recipes', JSON.stringify(recipes));
      }
    }
    this.router.navigate(['/recipes']); // Redirect after saving
  }

  cancelEdit() {
    this.router.navigate(['/recipes']);
  }
}
