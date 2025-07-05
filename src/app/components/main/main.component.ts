import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  router = inject(Router);

  onCategoryChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    if (value) {
      this.router.navigate(['/category', value]);
    }
  }
}
