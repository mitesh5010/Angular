import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { interval, map, Observable } from 'rxjs';

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

  customInterval$ = new Observable((subscriber)=>{
    let timeExecuted = 0;
    const interval = setInterval(()=>{
      if (timeExecuted > 3) {
        clearInterval(interval);
        subscriber.complete();
        return;
      }
      console.log("Emitting new value");
      subscriber.next({message: 'New Value Emitting'});
      timeExecuted++;
    },2000)
  });

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

    this.customInterval$.subscribe({
      next: val => console.log(val),
      complete: () => console.log('Completed')
    })

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
