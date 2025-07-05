import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MealsService } from '../../core/services/meals.service';
import { IMeal } from '../../core/services/interfaces/imeal';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit , OnDestroy {
  private readonly mealsService = inject(MealsService);

  meals: IMeal[] = [];
  supMeals:Subscription = new Subscription();
  getRecipeData(): void {
   this.supMeals= this.mealsService.getMeals().subscribe({
      next: (res) => {
        console.log(res);
        this.meals = res.meals;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit(): void {
    this.getRecipeData();
  }
  ngOnDestroy(): void{
    this.supMeals.unsubscribe();

  }
  // get meal details
  getMealDetails(id:string):void{
    this.supMeals= this.mealsService.getMealDetails(id).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }

}

