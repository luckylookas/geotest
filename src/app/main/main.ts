import {Component, computed, DOCUMENT, effect, inject, InjectionToken, model, signal} from '@angular/core';
import {locations, metersAway, Location, Position} from '../locations';
import {MatButton} from '@angular/material/button';
import {DecimalPipe} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MatChip} from '@angular/material/chips';
import {MatIcon} from '@angular/material/icon';
import {map} from 'rxjs';
import {toSignal} from '@angular/core/rxjs-interop';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

export const WINDOW = new InjectionToken<Window>(
  'Window global object',
  {
    factory: () => {
      const doc = inject(DOCUMENT);
      return doc.defaultView!;
    }
  }
);


export const NAVIGATOR = new InjectionToken<Navigator>(
  'Navigator global object',
  {
    factory: () => inject(WINDOW).navigator
  }
);


@Component({
  selector: 'app-main',
  imports: [
    MatButton,
    DecimalPipe,
    FormsModule,
    MatProgressSpinner,
  ],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  private navigator = inject(NAVIGATOR);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  currentLocation = toSignal(this.route.paramMap.pipe(
    map(it => it.get('id') ?? locations[0].id),
    map(it =>  locations.find(c => c.id === it) ?? locations[0])
  ), {initialValue: locations[0]})


  // inputs for solutions
  guess = model('')
  position = signal<Position|undefined>(undefined)
  done = signal(false)

  //solutions
  distanceToTarget = computed(() => this.position() == undefined || this.currentLocation().position == undefined ? undefined : metersAway(this.position()!, this.currentLocation().position!))
  solutionForPuzzle = computed(() => this.currentLocation().solution)

  success = computed(() => (this.currentLocation().position == undefined || this.distanceToTarget()! < 50) && (this.solutionForPuzzle() == undefined || this.guess() === this.solutionForPuzzle()))


  constructor() {
    effect(() => {
      if (this.success()) {
        const next = locations.findIndex(it => it.id === this.currentLocation()?.id)+1
        if (next >= locations.length) {
          return
        }
        this.done.set(next === locations.length-1)
        this.guess.set('')
        this.router.navigate(['/'+locations[next].id])
      }
    });

    effect(() => {
      this.busy.set(this.position() == undefined)
    });
  }

  busy = signal(false)

  public thereYet() {
  this.busy.set(true)
  this.position.set(undefined)
   this.navigator.geolocation.getCurrentPosition(
      success => this.position.set(success.coords),
      error => console.log(error),
      {
        enableHighAccuracy: true,
      })
  }
}
