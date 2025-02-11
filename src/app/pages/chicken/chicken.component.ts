import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CategoryMealsService } from '../../core/services/category-meals.service';
import { IMealByCategory } from '../../core/services/interfaces/imeal-by-category';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chicken',
  imports: [],
  templateUrl: './chicken.component.html',
  styleUrl: './chicken.component.scss'
})
export class ChickenComponent implements OnInit , OnDestroy {
  private readonly _categoryMealsService = inject(CategoryMealsService);

  meals: IMealByCategory[] = [];
  supMeals:Subscription = new Subscription();
  getRecipeData(): void {
   this.supMeals= this._categoryMealsService.getMeals("chicken").subscribe({
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

