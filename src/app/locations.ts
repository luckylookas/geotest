export interface Location {
  name?: string;
  latitude: number;
  longitude: number;
  uri?: string;
}


export const locations: Location[] = [
  {
    name: 'yella yella',
    latitude: 48.2247789,
    longitude: 16.4970056,
    uri: '/b098bad9908b50885bad274880dbc8bc'
  }
];


export function areWeThereYet(location: Location, target: Location) : boolean {
    const R = 6371; // Earth radius in km
    const toRad = (x: number) => x * Math.PI / 180;

    const dLat = toRad(location.latitude - target.latitude);
    const dLon = toRad(location.longitude - target.longitude);

    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(location.latitude)) *
      Math.cos(toRad(target.latitude)) *
      Math.sin(dLon / 2) ** 2;

    const c = 2 * Math.asin(Math.sqrt(a));
    return R * c * 1000 <= 30; // distance in km
}
