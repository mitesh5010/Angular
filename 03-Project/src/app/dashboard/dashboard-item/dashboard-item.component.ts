import { Component, input, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
  // encapsulation: ViewEncapsulation.None,
  // host: {
  //   class: 'dashboard-item',
  // } 
})
export class DashboardItemComponent {
  // @Input({required: true}) image!: { src: string, alt: string } ;
  // @Input({required: true}) title!: string ;

  image = input.required<{src:string, alt:string}>();
  title = input.required<string>();
}
