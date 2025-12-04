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
import {MatProgressBar} from '@angular/material/progress-bar';
import {MatDivider} from '@angular/material/list';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';

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
    MatProgressBar,
    MatLabel,
    MatFormField,
    MatInput,
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
  skipped = signal(5)

  //solutions
  distanceToTarget = computed(() => this.position() == undefined || this.currentLocation().position == undefined ? undefined : metersAway(this.position()!, this.currentLocation().position!))
  solutionForPuzzle = computed(() => this.currentLocation().solution)

  success = computed(() => (this.currentLocation().position == undefined || this.distanceToTarget()! < 50) && (this.solutionForPuzzle() == undefined || this.guess() === this.solutionForPuzzle()))


  advance() {
    const next = locations.findIndex(it => it.id === this.currentLocation()?.id)+1
    if (next >= locations.length) {
      return
    }
    this.skipped.set(5)
    this.done.set(next === locations.length-1)
    this.guess.set('')
    this.router.navigate(['/'+locations[next].id])
  }

  constructor() {
    effect(() => {
      if (this.success()) {
       this.advance()
      }
    });
  }

  busy = signal(false)

  public thereYet() {
  this.busy.set(true)
  this.position.set(undefined)
   this.navigator.geolocation.getCurrentPosition(
      success => {
        this.position.set(success.coords)
      this.busy.set(false)
      },
      error => console.log(error),
      {
        enableHighAccuracy: true,
      })
  }



  public skip() {
    this.skipped.set(this.skipped() - 1)
    if (this.skipped() <= 0) {
     this.advance()
    }

  }
}
