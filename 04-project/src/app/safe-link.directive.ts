import { Directive, ElementRef, inject, input } from "@angular/core";

@Directive({
  selector: "a[appSafeLink]",
  standalone: true,
  host:{
    '(click)' : 'onConformClick($event)',
  }
})

export class SafeLinkDirective {

  queryParam = input('myapp' ,{alias: 'appSafeLink'});
  private hostElement = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  constructor() {
    console.log('SafeLink Directive Active!');
    
  }
  onConformClick(event: MouseEvent){
    const wantToLeave = window.confirm('Are you sure you want to leave this page?');
    if(wantToLeave){
      const address = this.hostElement.nativeElement.href;
      this.hostElement.nativeElement.href = address + '?from' + this.queryParam();
      return ;
    }

    event.preventDefault();
  }
}