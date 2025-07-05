import { Routes } from '@angular/router';
import { MealDetailsComponent } from './components/meal-details/meal-details.component';
import { CategoryComponent } from './pages/category/category.component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home',component: HomeComponent, title: 'Home'},
    {path: 'category/:name',component: CategoryComponent,},
    {path: 'meal/:id', component: MealDetailsComponent},
    {path: '**', component: NotfoundComponent, title: 'Not Found'},
];
