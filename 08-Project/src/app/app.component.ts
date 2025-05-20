import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  clickCount = signal(0);
  clickCount$ = toObservable(this.clickCount);
 //observable to signal
  interval$ =interval(1000);
  intervalSignal = toSignal(this.interval$, { initialValue: 0 });

  constructor() {
    // effect(() => {
    //   console.log('Click count changed:', this.clickCount());
      
    // })
  }

  ngOnInit(): void {
    // const subscribetion = interval(1000).pipe(
    //   map((val)=> val*2)
    // ).subscribe({
    //   next: (val) => console.log(val)
    // });

    // this.destroyRef.onDestroy(()=>{
    //   subscribetion.unsubscribe();
    // })

    const subscribetion = this.clickCount$.subscribe({
      next: (val) => console.log('Click count changed:', this.clickCount())
    })
    this.destroyRef.onDestroy(()=>{
      subscribetion.unsubscribe();
    })
  }

  onClick() {
    this.clickCount.update((prevCount)=>prevCount + 1);
    
  }
}
