import { Component, ElementRef, inject, ViewChild, viewChild } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
router=inject(Router);

@ViewChild("select") selectInput !:ElementRef;


selectg(){

 let x:HTMLSelectElement = this.selectInput.nativeElement;
  this.router.navigate([`/${x.value}`])
 
}



}
