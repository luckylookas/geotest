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
    id: "ea2b2676c28c0db26d39331a336c6b92",
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
    solution: '04.07'
  },
  {
    name: 'Hunger',
    id: 'g02855d99hub50l35bad274540dfc8bf',
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
  //{noch ein raetsel...}
  {
    name: 'Der Auftrag',
    id: '2028sd3fgd99ybb534uiob274540dfc8kg',
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
    id: '8890sd98v98sd8934nnv894908hvndfg',
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
    id: 'f39c9cmn230nmcn38988dvcjn34n9nncv9',
    position: {
      latitude: 48.20227065199294,
      longitude:  16.39230540974233
    },
    paragraphs: [
      'Ha!',
      'Ihr Narren.',
      'Ihr seid direkt in alle meine Fallen getappt!',
      'Ich bin garnicht Dagobert, ich bin es, CLAUDE, euer Erzfeind!',
      'Jaha ich sehe das Entsetzen auf euren Gesichtern. Wie kann es sein, dass dieser gewiefte Boesewicht, der uns schon so oft begegnet ist und an den wir uns immer erinnern werden, auch hinter dieser Falle steckt!?',
      '',
      'Oh ja! Ich bin wie eine Spinne und ihr zappelt in meinem Netz!',
      'Eine vom Narrativ lange angelegte und aufgebaute Spinne die zurecht am Hoehepunkt der Spannung auftritt!',
      '',
      'Und wie bei jedem guten, boesen, Plan steckt hinter den Fallen in die ich euch geleitet habe ein Hinweis!',
      'Ein Zeichen dass auf den Ort hinweist, an dem ich Dagobert gefangen halte!',
      'Welches Zeichen? So leicht lasse ich mir nicht auf die Karte zeichen.',
      '',
      '',
      'In die Karten schauen!',
      'Ach verdammt.'
    ]
  },
  {
    name: 'CLAUDE!',
    id: '78923bn2345c297234fccwed234sdfgfv',
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
    ],
    solution: 'ponyschlecken'
  },
  {
    name: 'Claude?',
    id: 'asdfbn9pt7345nvp79w4bn0gn78werv',
    paragraphs: [
      'Wahnsinn!',
      'Ihr habt es geschafft!',
      'Ihr habt es geschafft in meine fieseste Falle zu tappen!',
      'AHAHAHAHA',
      'Es gibt keinen Weg weiter zu kommen',
      '',
      'KEINEN!',
      '',
      'Ihr seid hier fuer immer gefangen!',
      'AHAHAHAHAHAHAHAHAHAHAHAHAHAHA'.repeat(100),
    ],
  },
  {
    name: 'AHAHAHAHAHA',
    id: '9247835y9234hcnm2397h0fbn283ndsaf',
    paragraphs: [
      'AHAHAHAHAHAHAHAHAHAHAHAHAHAHA'.repeat(100),
    ],
  },
  {
    name: '*Keuch*',
    id: 'df345trvr3fr43453asdf23423f4c23kltg',
    paragraphs: [
      'Ha...ufff',
      '',
      'Ihr seid ja immernoch da.',
      'Ich werd langsam heiser. Es war nie gedacht, dass ich solange in der Geschichte vorkomme.',
      'Und ihr habt bestimmt noch nicht einmal bemerkt, wie ich euch mit dem Kryptex heimlich erneut gedemuetigt habe!',
      '',
      'Ha, "Herr Doktor Jeremiah Boehring", Sie Schlumpf!',
      'Als Sie die Loesung eingestellt haben, haben sie sich selbst das Schlimmste angetan, dass ihnen jemals jemand antun konnte!',
      '',
      'Ich meine, abgesehen von den Anschlaegen auf ihr Leben.',
      'Und als da ihre Kollegin erschossen wurde.',
      'Ah, und die Suspendierung.',
      'Und als ihr Freund ausgeraubt wurde.',
      'Die Messerstecherei.',
      'Das mit der Wohnung...',
      '',
      'Ja, nein.',
      'Aber trotzdem unter den schlimmsten 7 Dingen die ihnen jemals angetan wurden!',
      'Ah, das mit ihren Eltern und...',
      'Unter den schlimmsten zehn bis zwanzing Dingen die Ihnen jemals angetan wurden!',
      '',
      'Und um zu beweisen, dass Sie meine ultimative Demuetigung gesehen haben, sagen Sie mir doch das, was nach der Demuetigung kommt!'
    ],
    solution: 'QI',
  },
  {
    name: 'Immernoch da?',
    id: '102381902jdj123dnc12012l3kbyercx4',
    paragraphs: [
      'HA!',
      '',
      'Wie, ihr seid immernoch da?',
      'Nach all meinen Fallen und Demuetigungen?',
      '',
      'Sind wir durch unsere ewige Feindschaft irgendwie zusammengewachsen?',
      '',
      'Also ich geb zu, ohne euch wuerde mir schon etwas fehlen im Leben.',
      '',
      'Was sagt ihr, lassen wir das fuer heute und ich lad euch einfach zum Essen ein?',
    ]
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
