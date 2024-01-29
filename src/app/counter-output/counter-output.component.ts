import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from "@ngrx/store";
import { AsyncPipe, NgIf } from "@angular/common";

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
// export class CounterOutputComponent implements OnInit, OnDestroy {
export class CounterOutputComponent {
  count$: Observable<number>;
  // counter = 0;
  // counterServiceSub?: Subscription;

  // constructor(private counterService: CounterService) {}
  constructor(private store: Store<{counter: number}>) {
    this.count$ = this.store.select('counter')
  }

  // ngOnInit(): void {
  //   this.counterServiceSub = this.counterService.counterChanged.subscribe(
  //     (newVal) => (this.counter = newVal)
  //   );
  // }
  //
  // ngOnDestroy(): void {
  //   if (this.counterServiceSub) {
  //     this.counterServiceSub.unsubscribe();
  //   }
  // }
}
