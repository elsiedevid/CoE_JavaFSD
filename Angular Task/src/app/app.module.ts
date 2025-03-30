import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Required for [(ngModel)]
import { BrowserModule } from '@angular/platform-browser';
import { AddRecipeComponent } from './add-recipe/add-recipe.component'; // ✅ Import AddRecipeComponent
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard'; // ✅ Import AuthGuard
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShortenTextPipe } from './pipes/shorten-text.pipe'; // ✅ Import the pipe
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipesComponent } from './recipes/recipes.component';
import { AuthService } from './services/auth.service';
import { ContactComponent } from './contact/contact.component';
import { RecipeFilterPipe } from './recipe-filter.pipe'; // ✅ Import AuthService

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipesComponent,
    RecipeDetailsComponent,
    LoginComponent,
    NavbarComponent,
    AddRecipeComponent, // ✅ Ensure this is added
    ShortenTextPipe, ContactComponent, RecipeFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // ✅ Required for login form
  ],
  providers: [AuthService, AuthGuard], // ✅ Register services
  bootstrap: [AppComponent]
})
export class AppModule { }
