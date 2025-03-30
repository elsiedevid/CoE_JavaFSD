import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: any;
  recipes = [
    {
      id: 1,
      name: "Sambar",
      description: "A flavorful lentil-based stew with vegetables.",
      image: "http://localhost:8090/sambar.jpg",
      instructions: "1. Soak dal and cook with turmeric...\n2. Prepare tamarind extract...\n3. Add vegetables and spices..."
    },
    {
      id: 2,
      name: "Filter Coffee",
      description: "South Indian strong coffee brewed with a metal filter.",
      image: "http://localhost:8090/filter-coffee.jpg",
      instructions: "1. Boil water and add coffee powder...\n2. Allow it to drip...\n3. Mix with hot milk and sugar..."
    },
    {
      id: 3,
      name: "Chettinad Chicken",
      description: "A spicy and flavorful Chettinad-style chicken curry.",
      image: "http://localhost:8090/chicken-chettinad.jpg",
      instructions: "1. Roast spices and blend into a masala...\n2. Cook chicken with onions and tomatoes...\n3. Add masala and simmer..."
    },
    {
      id: 4,
      name: "Rasam",
      description: "A tangy and spicy South Indian soup made with tamarind.",
      image: "http://localhost:8090/rasam.jpg",
      instructions: "1. Boil tamarind extract with spices...\n2. Add cooked dal and tomatoes...\n3. Temper with mustard seeds and curry leaves..."
    },
    {
      id: 5,
      name: "Kothu Parotta",
      description: "A shredded parotta dish stir-fried with egg, spices, and curry.",
      image: "http://localhost:8090/kothu-parotta.jpg",
      instructions: "1. Chop parotta into small pieces...\n2. Sauté onions, chilies, and eggs...\n3. Add parotta and mix with curry sauce..."
    }
  ];

  constructor(private route: ActivatedRoute, private router: Router) { }
  
goBack(): void {
  this.router.navigate(['/recipes']);
}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.recipe = this.recipes.find(recipe => recipe.id === id);

  }
  
}
