import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { forkJoin } from 'rxjs';
import { CategoryMealsService } from '../../core/services/category-meals.service';
import { MealsService } from '../../core/services/meals.service';

@Component({
  selector: 'app-category',
  imports: [RouterModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit{

  meals: any[] = [];
  categoryName: string = '';

  private mealsService = inject(MealsService);

  constructor(
    private route: ActivatedRoute,
    private categoryMealsService: CategoryMealsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoryName = params.get('name') || '';
      if (this.categoryName) {
        this.categoryMealsService.getMeals(this.categoryName).subscribe(res => {
          const mealList = res.meals || [];
          const detailsObservables = mealList.map((meal: any) =>
            this.mealsService.getMealDetails(meal.idMeal)
          );
          forkJoin(detailsObservables).subscribe((details: unknown) => {
            const detailsArr = details as any[];
            this.meals = detailsArr.map(d => d.meals[0]);
          });
         
        });
      }
    });
  }
}
