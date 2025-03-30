import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recipeFilter'
})
export class RecipeFilterPipe implements PipeTransform {
  transform(recipes: any[], searchText: string, filterBy: string): any[] {
    if (!searchText || !filterBy) return recipes;
    
    searchText = searchText.toLowerCase();

    return recipes.filter(recipe => 
      recipe[filterBy]?.toLowerCase().includes(searchText)
    );
  }
}
