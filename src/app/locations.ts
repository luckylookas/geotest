export interface Location {
  name?: string;
  position?: Position;
  id: string;
  solution?: string;
  paragraphs: string[];
  next: Next[]
}

export interface Next {
  player: string,
  nextId: string,
}

export interface Position {
  latitude: number;
  longitude: number;
}

// export const locations: Location[] = [
//   {
//     name: 'iselgasse ecke lafnitzgasse',
//     position: {
//       latitude: 48.28121320422785,
//       longitude: 16.456317145898865
//     },
//     paragraphs: ['geh zur ecke iselgasse/lafnitzgasse'],
//     id: 'start'
//   },
//   {
//     name: 'lafnitzgasse ecke gerlosplatz',
//     id: 'station1',
//     position: {
//       latitude: 48.281408326540266,
//       longitude: 16.457866619826348
//     },
//     paragraphs: ['geh zur ecke lafnitzgasse/gerlosplatz']
//   },
//   {
//     name: 'puzzle',
//     solution: '1234',
//     id: 'station2',
//     paragraphs: ['gib 1234 ein']
//   },
//   {
//     name: 'retour',
//     position: {
//       latitude: 48.279573349700684,
//       longitude: 16.457547405366004
//     },
//     id: 'station3',
//     paragraphs: ['geh ueber die ispergasse retour']
//   },
//   {
//     name: 'finale',
//     id: 'finale',
//     paragraphs: ['super!', 'du hast gewonnen.']
//
//   }
//
// ];

export const locations: Location[] = [
  {
    name: "Am Anfang",
    id: "start",
    position: {
      latitude: 48.22488081787097,
      longitude: 16.497051648696154
    },
    paragraphs: [
      'Wie jede gute Geschichte beginnt auch diese hier an ihrem Anfang.',
      'An einem lauen Abend, frueh im Sommer, finden sich ein paar Menschen eben da ein, wo ich euch jetzt noch einmal hin schicke.',
      'Und dabei wäre ich damals fast nicht aufgetaucht!',
      'Drei Mal hatte ich solche Treffen schon ausprobiert und drei Mal wäre ich eigentlich lieber woanders gewesen.',
      'Und trotzdem hab’ ich mich aufgerafft.',
      'Einmal noch, hab ich mir gedacht, ein Mal probier’ ich’s noch aus.',
      'Und wisst ihr was? Ich sollte es nicht bereuen.',
      '',
      'Treffen wir uns da?'
    ],
    next: [
      {
        player: 'any',
        nextId: 'b098bad9908b50885bad274880dbc8bc',
      }
    ]
  },
  {
    name: "Yella Yella",
    id: "b098bad9908b50885bad274880dbc8bc",
    paragraphs: [
      'Ja, genau hier wars, ich kann mich noch erinnern, als wäre es am 4.6.2024 gewesen!',
      'Was sich gut trifft, weil genau da war er ja auch,der Anfang der Geschichte.',
      'Hier wurde ich, Dagobert, das zweite Mal geboren.',
      'Und mit mir der begann hier eine lange und verwirrende Konversation.',
      '',
      'Was war denn nochmal das erste, das in dieser Konversation gesagt wurde?'
    ],
    solution: '04.07',
    next: [
      {
        player: 'any',
        nextId: '222',
      }
    ]
  },
  {
    name: 'Hunger',
    id: '222',
    next: [
      {
        player: 'any',
        nextId: '444',
      }
    ],
    position: {
      latitude: 48.1954187026802,
      longitude: 16.366976926984005
    },
    paragraphs: [
      'Ach ja, genau, manchmal hab ich ein Gedächtnis wie Elena',
      'Naja wo war ich. Ach ja.',
      'Bei allem was schoen ist an meinem neuen Leben, eines ist doch immer muehseelig',
      'Essen.',
      'Ich wollte euch ja eigentlich einladen, aber findet einmal einen Ort an dem wir alle drei etwas finden!',
      '',
      'Ist natuerlich ein Scherz, natuerlich habe ich etwas gefunden!',
      'Eine gute Gegend, nicht weit vom Ring, eine Universitaet und ein wahres Buffet fuer meine Ansprueche. Alles im selben Bezirk.',
      '',
      'Ich kann nicht zusehen wie ihr esst, dass ist mir zu brutal. Ich warte da auf euch wo ich etwas finde.',
      'Wir haben naemlich einen wichtigen Auftrag zu erledigen!',
      '',
      'Es geht um eine mysterioese Party...'
    ]
  },

  {
    name: 'Der Auftrag',
    id: '444',
    next: [
      {
        player: 'any',
        nextId: '234f23r234rff3edwf346j67',
      }
    ],
    position: {
      latitude: 48.21061466967007,
      longitude: 16.37470521598213
    },
    paragraphs: [
      'Gut, dass ihr da seid! Mir wurde eben gerade von einem Fremden auf der Strasse ein wichtiger Auftrag erteilt!',
      'Wir sollen niemandem etwas erzaehlen und dringend und konzentriert daran arbeiten. Wie immer also.',
      '',
      'Party? Welche Party? Wir haben jetzt keine Zeit fuer solchen Unsinn!',
      'Scheinbar macht ein Vampirjaeger Wien unsicher! Ich bin natuerlich schoneinmal losgegangen.',
      '',
      'Wie, wohin?',
      'Naja natuerlich zum Hof des beruehmtesten Vampirjaegers Wiens!',
      '',
      'Wir treffen uns dann dort, ja?',
    ],
  },
  {
    name: 'Bei Gerard van Swieten',
    id: '234f23r234rff3edwf346j67',
    next: [
      {
        player: 'any',
        nextId: '01k29j112msms925435129912f1023',
      }
    ],
    position: {
      latitude: 48.18965209658004,
      longitude: 16.414155250266678
    },
    paragraphs: [
      'Schlechte Nachrichten Leute. Es hat sich herausgestellt, dass es ein Problem mit diesem van Swieten gibt.',
      'Erstens ist er offenbar schon lange tot.',
      'Zweitens, hat er hier offenbar nie gewohnt und auch sonst kaum etwas mit diesem Haus zu tun.',
      '',
      'Naja, Fehler passieren.',
      '',
      'Das is alles sowieso egal, weil es sich naemlich ergeben hat, dass ich von jemandem entfuehrt wurde!',
      'Offenbar ermitteln wir zu einer Verschwoerung. Ich hab gefragt, es hat nichts mit dem Jaeger und auch nichts mit einer Party zu tun.',
      '',
      'Ehrlich gesagt, diese Entfuehrer haben nich weniger verwirrt gewirkt als ihr gerade.',
      'Das merkwuerdigste ist ja, dass sie mir gesagt haben wo sie mich hin entfuehren!',
      'Hat mich direkt gewundert, dort waren wir gemeinsam schoneinmal eingesperrt und sind in weniger als einer Stunde entkommen!',
      '',
      'Kommt ihr mich abholen?'
    ],
  },
  {
    name: 'Ein Entkommen',
    id: '01k29j112msms925435129912f1023',
    next: [
      {
        player: 'any',
        nextId: '0812hj0nd123nf453b34yvb1o3yg34rvb1i4fb',
      }
    ],
    position: {
      latitude: 48.20227065199294,
      longitude:  16.39230540974233
    },
    paragraphs: [
      'Ha!',
      'Ihr Narren.',
      'Ihr seid direkt in alle meine Fallen getappt!',
      'Ich bin garnicht Dagobert, ich bin Claude, euer Erzfeind!',
      'Jaha ich sehe das Entsetzen auf euren Gesichtern. Wie kann es sein, dass dieser gewiefte Boesewicht, der uns schon so oft begegnet ist und an den wir uns immer erinnern werden, auch hinter dieser Falle steckt!?',
      '',
      'Oh ja! Ich bin wie eine Spinne und ihr zappelt in meinem Netz!',
      'Eine vom Narrativ lange angelegte und aufgebaute Spinne die zurecht am Hoehepunkt der Spannung auftritt!',
      '',
      'Und wie bei jedem guten, boesen, Plan steckt hinter den Orten an die ich euch geleitet habe ein Hinweis!',
      'Ein Zeichen dass auf den Ort hinweist, an dem ich Dagobert gefangen halte!',
      'Welches Zeichen? So leicht lasse ich mir nicht auf die Karte zeichen.',
      '',
      'In die Karten schauen!',
      'Ach verdammt.'
    ]
  },
  {
    name: 'Des Pudels Kern',
    id: '0812hj0nd123nf453b34yvb1o3yg34rvb1i4fb',
    next: [
      {
        player: 'lukas',
        nextId: '890',
      },
      {
        player: 'paul',
        nextId: '123123123',
      }
    ],
    paragraphs: [
      'Ihr habt mein Raetsel also loesen koennen!?',
      'Damit seit ihr erneut in meine Falle getappt.',
      'Noch tiefer in die Falle.',
      'Eine Falle in der Falle in die man nur fallen kann im Falle, dass die Falle euch nicht zu Fall gebracht haben solle!',
      '',
      'Eine Falle so perfiede, dass nur ICH sie mir ausdenken konnte',
      'Ich, der meister der eurer Geschichte!',
      'Der Herr und Erzfeind alle Vampire!',
      '',
      'Und nur mein Name, den ihr bestimmt wisst und an den ich und ihr euch sicher erinnern koennt, oeffnet das Kryptex!',
      'Das Kryptex, der zentrale Gegenstand um den es in dieser ganzen Geschichte ging, den ihr die ganze Zeit dabei hattet!',
      '',
      'Ihr habt es nicht?',
      '',
      'Jaha! Weil ich es gestohlen und hier her gebracht habe! Fragt doch mal drinnen nach!'
    ],
    solution: 'auf dem zettel im kryptex'
  },
  {
    name: 'Ende Paul',
    id: '123123123',
    next: [],
    paragraphs: [
      'Wahnsinn!',
      'Ihr habt`s geschafft!',
      'Ich hoffe es hat alles funktioniert und ihr hattet Spass!',
      ''
    ],
  },
  {
    name: 'Ende Lukas',
    id: '890',
    next: [],
    paragraphs: [
      'Wahnsinn!',
      'Ihr habt`s geschafft!',
      'Ich hoffe es hat alles funktioniert und ihr hattet Spass!',
      ''
    ],
  }

]


export function metersAway(position: Position, target: Position): number {
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
