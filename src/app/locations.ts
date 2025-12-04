export interface Location {
  name?: string;
  position?: Position;
  id: string;
  solution?: string;
  paragraphs: string[];
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
    paragraphs: ['geh zur ecke iselgasse/lafnitzgasse'],
    id: 'start'
  },
  {
    name: 'lafnitzgasse ecke gerlosplatz',
    id: 'station1',
    position: {
      latitude: 48.281408326540266,
      longitude: 16.457866619826348
    },
    paragraphs: ['geh zur ecke lafnitzgasse/gerlosplatz']
  },
  {
    name: 'puzzle',
    solution: '1234',
    id: 'station2',
    paragraphs: ['gib 1234 ein']
  },
  {
    name: 'retour',
    position: {
      latitude: 48.279573349700684,
      longitude: 16.457547405366004
    },
    id: 'station3',
    paragraphs: ['geh ueber die ispergasse retour']
  },
  {
    name: 'finale',
    id: 'finale',
    paragraphs: ['super!', 'du hast gewonnen.']

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
