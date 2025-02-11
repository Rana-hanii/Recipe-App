import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { IMealByCategory } from '../../core/services/interfaces/imeal-by-category';
import { Subscription } from 'rxjs';
import { CategoryMealsService } from '../../core/services/category-meals.service';

@Component({
  selector: 'app-breakfast',
  imports: [],
  templateUrl: './breakfast.component.html',
  styleUrl: './breakfast.component.scss'
})
export class BreakfastComponent implements OnInit , OnDestroy {
  private readonly _categoryMealsService = inject(CategoryMealsService);

  meals: IMealByCategory[] = [];
  supMeals:Subscription = new Subscription();
  getRecipeData(): void {
   this.supMeals= this._categoryMealsService.getMeals("breakfast").subscribe({
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
    this.supMeals.unsubscribe()

  }
} 