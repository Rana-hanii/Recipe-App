import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BeefComponent } from './pages/beef/beef.component';
import { BreakfastComponent } from './pages/breakfast/breakfast.component';
import { ChickenComponent } from './pages/chicken/chicken.component';
import { DessertComponent } from './pages/dessert/dessert.component';
import { GoatComponent } from './pages/goat/goat.component';
import { LambComponent } from './pages/lamb/lamb.component';
import { MiscellaneousComponent } from './pages/miscellaneous/miscellaneous.component';
import { PastaComponent } from './pages/pasta/pasta.component';
import { PorkComponent } from './pages/pork/pork.component';
import { SeafoodComponent } from './pages/seafood/seafood.component';
import { SideComponent } from './pages/side/side.component';
import { StarterComponent } from './pages/starter/starter.component';
import { VeganComponent } from './pages/vegan/vegan.component';
import { VegetarianComponent } from './pages/vegetarian/vegetarian.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home',component: HomeComponent, title: 'Home'},
    {path: 'beef',component: BeefComponent, title: 'Beef'},
    {path: 'breakfast',component: BreakfastComponent, title: 'Breakfast'},
    {path: 'chicken',component: ChickenComponent, title: 'Chicken'},
    {path: 'dessert',component: DessertComponent, title: 'Dessert'},
    {path: 'goat',component: GoatComponent, title: 'Goat'},
    {path: 'lamb',component: LambComponent, title: 'Lamb'},
    {path: 'miscellaneous',component: MiscellaneousComponent, title: 'Miscellaneous'},
    {path: 'pasta',component: PastaComponent, title: 'Pasta'},
    {path: 'pork',component: PorkComponent, title: 'Pork'},
    {path:'seafood',component:SeafoodComponent,title:'Seafood'},    
    {path:'side',component:SideComponent,title:'Side'},
    {path:'starter',component:StarterComponent,title:'Starter'},
    {path:'vegan',component:VeganComponent,title:'Vegan'},
    {path:'vegetarian',component:VegetarianComponent,title:'Vegetarian'},
    {path: '**', component: NotfoundComponent, title: 'Not Found'},
];
