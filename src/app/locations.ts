export interface Location {
  name?: string;
  position?: Position;
  id: string;
  solution?: string;
}

export interface Position {
  latitude: number;
  longitude: number;
}

export const locations: Location[] = [
  {
    name: 'iselgasse ecke lafnitzgasse',
    position: {
      latitude: 48.28121320422785,
      longitude: 16.456317145898865
    },
    id: 'start'
  },
  {
    name: 'lafnitzgasse ecke moellplatz',
    id: 'station1',
    position: {
      latitude: 48.27973738159596,
      longitude: 16.45738696813583
    }
  },
  {
    name: 'moellplatz puzzle',
    solution: '1234',
    id: 'station2',
  },
  {
    name: 'billa',
    position: {
      latitude: 48.28215777743105,
      longitude: 16.449952853991498
    },
    id: 'station3'
  },
  {
    name: 'finale',
    id: 'finale'
  }

];

export function metersAway(position: Position, target: Position) : number {
  const R = 6371; // Earth radius in km
  const toRad = (x: number) => x * Math.PI / 180;

  const dLat = toRad(position.latitude - target.latitude);
  const dLon = toRad(position.longitude - target.longitude);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(position.latitude)) *
    Math.cos(toRad(target.latitude)) *
    Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.asin(Math.sqrt(a));
  return R * c * 1000;
}
