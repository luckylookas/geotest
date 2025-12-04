import {Component, computed, DOCUMENT, inject, InjectionToken, signal} from '@angular/core';
import {areWeThereYet, locations} from '../locations';

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
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  private navigator = inject(NAVIGATOR);

  position = signal<{latitude: number, longitude: number}>({latitude: 0, longitude: 0})

  success = computed(() => areWeThereYet(this.position(), locations[0]))


  a = this.navigator.geolocation.watchPosition(
    success => {
      this.position.set(success.coords)
    },
    error => console.log(error)
    ,
    {
      enableHighAccuracy: true,
    }
  )
}
