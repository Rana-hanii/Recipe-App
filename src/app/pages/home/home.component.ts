import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MealsService } from '../../core/services/meals.service';
import { IMeal } from '../../core/services/interfaces/imeal';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [],
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
}

