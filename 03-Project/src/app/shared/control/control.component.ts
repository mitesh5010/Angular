import { AfterContentInit, afterNextRender, afterRender, Component, ContentChild, contentChild, ElementRef, Host, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',  
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  }
})
export class ControlComponent implements AfterContentInit {
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('Control clicked');
  // }
  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  constructor() {
    afterRender(()=>{
      console.log('AFTER RENDER');
    })

    afterNextRender(()=>{
      console.log('AFTER NEXT RENDER');
    })
  }

  ngAfterContentInit(): void {
    //...
  }

  label = input.required<string>();
  private el = inject(ElementRef);
  onClick() {
    console.log('Control clicked');
    console.log(this.el);
    console.log(this.control());
    
  }
}
