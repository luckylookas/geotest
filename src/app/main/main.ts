import {
  Component,
  computed,
  DOCUMENT,
  effect,
  inject,
  InjectionToken,
  model,
  Resource,
  resource, ResourceRef,
  signal
} from '@angular/core';
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
  readonly thresholdMeters = 50;
  private navigator = inject(NAVIGATOR);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  position: ResourceRef<Position|undefined> = resource({
    params: () => ({}),
    defaultValue: undefined,
    loader: () =>
      !this.busy() ? Promise.resolve(undefined) :
        new Promise((ok, fail) => {
          this.navigator.geolocation.getCurrentPosition(
            success => {
              ok(success.coords)
              this.busy.set(false)
            },
            fail,
            {
              enableHighAccuracy: true,
            })
        })

  })

  currentLocation = toSignal(this.route.paramMap.pipe(
    map(it => it.get('id') ?? locations[0].id),
    map(it =>  locations.find(c => c.id === it) ?? locations[0])
  ), {initialValue: locations[0]})

  player = toSignal(this.route.paramMap.pipe(
    map(it => it.get('player') ?? 'any')), {initialValue: 'any'});


  nextLocation = computed(() => {
    const nextId =

    locations.find(it => it.id === this.currentLocation().id)?.next.find(n => n.player === this.player())?.nextId
    ?? locations.find(it => it.id === this.currentLocation().id)?.next.find(n => n.player === 'any')?.nextId
    ?? locations[0].id

    return locations.find(it => it.id === nextId) ?? locations[0];

  });


  // inputs for solutions
  guess = model('')
  done = computed(() => !this.currentLocation().next.length)
  skipped = signal(0)
  done = computed(() => locations.findIndex(it => it.id === this.currentLocation().id) === locations.length-1)

  //solutions
  distanceToTarget = computed(() => this.position.value() == undefined || this.currentLocation().position == undefined ? undefined : metersAway(this.position.value()!, this.currentLocation().position!))
  solutionForPuzzle = computed(() => this.currentLocation().solution)


  reachedLocation = computed(() => this.currentLocation().position != undefined && this.distanceToTarget()! < this.thresholdMeters)
  solvedPuzzle = computed(() => this.solutionForPuzzle() != undefined && this.guess() === this.solutionForPuzzle())
  success = computed(() => this.reachedLocation() || this.solvedPuzzle())

  readonly defaultSkipText = [
    'einfach weiter bitte',
    'wirklich?',
    'wirklich wirklich?',
    'ohne schummeln?',
    'versprochen?'
  ]
  busy = signal(false)
  skipText = computed(() => this.currentLocation().skipText ?? this.defaultSkipText)

  advance() {
    if (this.done()){
      return
    }

    this.skipped.set(0)
    this.position.set(undefined)
    this.guess.set('')
    this.router.navigate(['/' + this.player()  + '/' + this.nextLocation().id])
  }


  constructor() {
    effect(() => {
      if (this.success()) {
       this.advance()
      }
    });

    effect(() => {
      if (this.busy()) {
        this.position.reload()
      }
    });

    effect(() => {
      this.currentLocation()
      window.scrollTo(0, 0);
    });
  }


  public thereYet() {
    this.busy.set(true)
  }

  public skip() {
    this.skipped.set(this.skipped() + 1)
    if (this.skipped() === this.skipText().length) {
     this.advance()
    }

  }
}
