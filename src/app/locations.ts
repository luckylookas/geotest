export interface Location {
  name?: string;
  position?: Position;
  id: string;
  solution?: string;
  paragraphs: string[];
  skipText?: string[];
  next: Next[],
  hints: string[]
}

export interface Next {
  player: string,
  nextId: string,
}

export interface Position {
  latitude: number;
  longitude: number;
}




export const locations: Location[] = [
  {
    name: "Was passiert hier?",
    id: 'tutorial_nohint1',
    hints: [
      'Nach dem letzten Hinweis, bekommt ihr die Loesung.'
    ],
    paragraphs: [
      'Willkommen zur Ueberbleibselweihnachsraetselsause!',
      '',
      'Ich hab eine kleine Raetselrally durch Wien mit einer Aufregenden und durchdachten Story fuer euch gebastelt.',
      'Als ich es abgefahren bin, hab ich 3 Stunden gebraucht, da ist auch ein bisschen Zeit fuers Nachdenken eingerechnet - aber warscheinlich viel zu wenig.',
      '',
      'Und so funktioniert das ganze:',
      '',
      'Gleich zuerst, wenn etwas nicht funktioniert, habt ihr unten immer den "ueberspringen" button, den ihr zwei Mal durecken muesst, damit ihr nicht unabsichtlich schummelt.',
      'Probiert den jetzt einmal.'
    ],
    next: [
      {
        player: 'any',
        nextId: 'tutorial_nohint2',
      }
    ]
  },
  {
    name: "Ausserdem",
    id: 'tutorial_nohint2',
    hints: [
      'Nach dem letzten Hinweis, bekommt ihr die Loesung.'
    ],
    skipText: [
      'was Anderes'
    ],
    paragraphs: [
      'Manchmal steht auf dem Knopf etwas Anderes, oder mehrmals druecken ist nicht noetig.',
      'Er tut aber immer das Gleiche.'
    ],
    next: [
      {
        player: 'any',
        nextId: 'tutorial3',
      }
    ]
  },
  {
    name: "Ausserdem",
    id: 'tutorial3',
    hints: [
      'So bekommt ihr eine unterschiedliche Anzahl an Hinweisen',
      'Nach dem letzten Hinweis, bekommt ihr die Loesung.',
      'Hier muesst ihr einfach "weiter" druecken.',
    ],
    skipText: ['weiter'],
    paragraphs: [
      'Wenn ihr nicht weiterkommt, aber denkt, dass das Spiel eigentlich funktioniert, koennt ihr auch Hilfe bekommen.',
      'Jedes Mal wenn ihr den Knopf druecken, bekommt ihr einen neuen Hinweis',
      'Der letzte Hinweis ist immer die Loesung.'
    ],
    next: [
      {
        player: 'any',
        nextId: 'tutorial4',
      }
    ]
  },
  {
    name: "Raetsel",
    id: 'tutorial4',
    hints: [
      'Was denn, es steht doch da was du tun sollst.',
      'Gibt "die richtige loesung" ein',
    ],
    paragraphs: [
      'Wenn ihr aber nicht zufrieden damit seid, 5 Minuten nur "ueberspringen" zu durecken, hab ich auch ein paar Raetsel eingebaut!',
      'Wenn es unten eine Moeglichkeit gibt, etwas einzugeben, dann springt das Spiel sofort weiter, wenn ihr die richtige Loesung eingegeben habt.',
      'Ihr muesst nicht Enter oder Weiter oder so druecken.',
      '',
      'WICHTIG:',
      'Weil ich faul bin und eine englishe Tastatur hab, gibt es keine Umlaute und alle Loesungen in deisem Spiel werden immer klein geschrieben.'

    ],
    solution: 'die richtige loesung',
    next: [
      {
        player: 'any',
        nextId: 'tutorial5',
      }
    ]
  },
  {
    name: "Mehr Raetsel",
    id: 'tutorial5',
    hints: [
      'Was denn, es steht doch da was du tun sollst.',
      'Gibt "die richtige loesung" ein',
    ],
    skipText: [
      'weiter'
    ],
    paragraphs: [
      'Zuerst mal, keine Panik. Das Spiel schickt euren Standort nie irgendwo hin, alles passiert nur auf eurem Handy.',
      'Ihr koenntet sobald ihr diese Seite offen habt sogar das Internet abdrehen.',
      'Ausserdem fragt das Spiel den Standort nur einmalig ab, wenn ihr den Knopf drueckt.',
      '',
      'Wo das gesagt ist - fuer einige Raetsel muesst ihr einen Ort in Wien finden.',
      'Dafuer knobelt ihr aus, wo ihr denkt, dass ihr hinmuesst. Dann fahrt ihr dahin und drueckt "bin ich schon da?"',
      '',
      'Wenn ihr 50 Meter an das Ziel herankommt, geht das Spiel weiter.',
      'Davor sagt euch der Knopf wie weit ihr vom Ziel entfernt seid.',
      '',
      'Ihr koennt den Knopf so oft druecken wie ihr wollt um zu checken ob ihr dem Ziel wirklich naeher kommt.',
      'In dem Beispiel ist das Ziel der Stephansdom - da ihr da jetzt nicht hinfahren werdet, benutzt einfach mal "weiter".'
    ],
    position: {
      latitude: 48.2050491798,
      longitude: 16.3701485194,
    },
    next: [
      {
        player: 'any',
        nextId: 'tutorial_nohint6',
      }
    ]
  },
  {
    name: "So.",
    id: 'tutorial_nohint6',
    hints: [
      'Was denn, es steht doch da was du tun sollst.',
      'Gibt "die richtige loesung" ein',
    ],
    skipText: [
      'los gehts!'
    ],
    paragraphs: [
      'Gibt es vielleicht noch andere Raetsel? Wer weiss.',
      '',
      'Wenn ihr etwas nicht versteht oder etwas ueberhaupt nicht funktionieren sollte, muesst ihr mich anrufen!',
      'Und jetzt hoff ich ihr habt Spass!'
    ],
    next: [
      {
        player: 'any',
        nextId: 'start',
      }
    ]
  },
  {
    name: "Am Anfang",
    id: "start",
    hints:[
      'Wo haben wir zum ersten Mal Vampire gespielt?',
      'Ihr muesst zum Yella Yella.'
    ],
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
      'Ja, genau hier war es! Ich kann mich noch erinnern, als wäre es am 4.6.2024 gewesen!',
      'Was sich gut trifft, weil genau da war er ja auch, der Anfang der Geschichte.',
      'Hier wurde ich, Dagobert, das zweite Mal geboren.',
      'Und mit mir begann hier eine lange und verwirrende Konversation.',
      '',
      'Was war denn nochmal das Erste, das in dieser Konversation gesagt wurde?'
    ],
    solution: '04.07',
    hints: [
      'Ihr muesst euch an nichts erinnern koennen.',
      'Die Konversation ist schriftlich fest gehalten.',
      'Ihr habt sie immer dabei.',
      'Es geht um die erste Nachricht in der Viva la Seestadt Gruppe.',
      'Tobi hat als erstes direkt nur "04.07" geschrieben.'
    ],
    next: [
      {
        player: 'any',
        nextId: 'g02855d99hub50l35bad274540dfc8bf',
      }
    ]
  },
  {
    name: 'Hunger',
    hints: [
      'Was kann Dagobert denn essen?',
      'Was waere denn die einfachste Moeglichkeit fuer ihn an Essen zu kommen?',
      'Es hat nicht direkt etwas mit der Kirche zu tun, es kommt aber ein Kreuz vor.',
      'Dagobert koennte das an vielen Orten in Wien bekommen - aber er will zum Zentrum.',
      'Ihr muesst zur Blutspendezentrale im 4. Bezirk.'
    ],
    id: 'g02855d99hub50l35bad274540dfc8bf',
    next: [
      {
        player: 'any',
        nextId: '2028sd3fgd99ybb534uiob274540dfc8kg',
      }
    ],
    position: {
      latitude: 48.1954187026802,
      longitude: 16.366976926984005
    },
    paragraphs: [
      'Genau! manchmal hab ich ein Gedächtnis wie Elena.',
      'Naja wo war ich? Ach ja.',
      'Bei allem was schoen ist an meinem neuen Leben, eines ist doch immer muehseelig',
      'Essen.',
      'Findet einmal einen Ort an dem wir alle drei etwas essen koennten!',
      'Das ist einfach unmoeglich!',
      'Fast.',
      'Ein wahres Buffet, an dem sogar ich mitessen kann!',
      'Wenn es den Namen nicht schon gaebe, waere er wirlich eine gute Wahl fuer ein Restaurant in dem jemand wie ich essen kann.',
      'Sogar das Zentrum dieser Buffetkette, ihr findet da bestimmt auch etwas.',
      'Und wenn nicht, im selben Bezirk ist auch eine Universitaet und ein Markt voller teurer Lokale.',
      'Ich warte also am Buffet.',
      '',
      'Wir haben uebrigens einen wichtigen Auftrag zu erledigen!',
      '',
      'Es geht um eine mysterioese Party...'
    ]
  },
  {
    name: 'Der Auftrag',
    id: '2028sd3fgd99ybb534uiob274540dfc8kg',
    next: [
      {
        player: 'any',
        nextId: '8890sd98v98sd8934nnv894908hvndfg',
      }
    ],
    hints: [
      'Wieviele beruehmte Vampirjaeger kennt ihr denn so?',
      'Es geht nicht um den Hof fuer den er gearbeitet hat.',
      'Die Ruprechtskirche ist die aelteste Kirche in Wien - schaut mal da in der Umgebung nach einem "Hof".',
      'Ihr muesst zum Van Swieten Hof in der Rotenturmstrasse 19.'
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
      'Scheinbar macht ein Vampirjaeger Wien unsicher! Ich bin schoneinmal losgegangen.',
      '',
      'Wie, wohin?',
      'Natuerlich zum Hof des beruehmtesten Vampirjaegers Wiens!',
      'Vielleicht schau ich mir vorher noch die aelteste Kirche Wiens an, die ist da gleich um die Ecke.',
      'Wir treffen uns dann dort, ja?',
    ],
  },
  {
    name: 'Bei Gerard van Swieten',
    id: '8890sd98v98sd8934nnv894908hvndfg',
    next: [
      {
        player: 'any',
        nextId: 'f39c9cmn230nmcn38988dvcjn34n9nncv9',
      }
    ],
    position: {
      latitude: 48.18965209658004,
      longitude: 16.414155250266678
    },
    hints: [
      'Wo waren wir denn schoneinmal eingesperrt?',
      'Und wo ist man hoffentlich weniger als eine Stunde?',
      'Ein Ort von dem man entkommen muss.',
      'Ihr muesst zum Masters of Escape bei der U3 Erdberg.'
    ],
    paragraphs: [
      'Schlechte Nachrichten Leute. Es hat sich herausgestellt, dass es ein Problem mit diesem van Swieten gibt.',
      'Erstens ist er schon lange tot.',
      'Zweitens, hat er hier nie gewohnt und auch sonst kaum etwas mit diesem Haus zu tun.',
      '',
      'Naja, Fehler passieren.',
      '',
      'Das is alles sowieso egal, weil es sich ergeben hat, dass ich von jemandem entfuehrt wurde!',
      'Offenbar ermitteln wir zu einer Verschwoerung. Ich hab gefragt, es hat nichts mit dem Jaeger und auch nichts mit einer Party zu tun.',
      '',
      'Ehrlich gesagt, diese Entfuehrer haben nicht weniger verwirrt gewirkt als ihr gerade.',
      'Das Merkwuerdigste ist ja, dass sie mir gesagt haben wohin sie mich entfuehren!',
      'Hat mich direkt gewundert. Dort waren wir gemeinsam schoneinmal eingesperrt und sind in weniger als einer Stunde entkommen!',
      '',
      'Kommt ihr mich abholen?'
    ],
  },
  {
    name: 'Ein Entkommen',
    id: 'f39c9cmn230nmcn38988dvcjn34n9nncv9',
    next: [
      {
        player: 'any',
        nextId: '78923bn2345c297234fccwed234sdfgfv',
      }
    ],
    position: {
      latitude: 48.20227065199294,
      longitude:  16.39230540974233
    },
    hints: [
      'Paul hat sich verraten - was koenntet ihr denn auf eine Karte zeichnen?',
      'Wenn man Punkte verbindet, ergibt sich ein Bild.',
      'Mit welchem Symbol markiert man ueblicherweise einen Ort?',
      'Wo waren wir schoneinmal, wo ich urspruenglich nicht hinwollte',
      'Ihr muesst zum Ballsaal im dritten Bezirk.'
    ],
    paragraphs: [
      'Ha!',
      'Ihr Narren.',
      'Ihr seid direkt in alle meine Fallen getappt!',
      'Ich bin garnicht Dagobert, ich bin es, PAUL, euer Erzfeind!',
      'Jaha ich sehe das Entsetzen auf euren Gesichtern. Wie kann es sein, dass dieser gewiefte Boesewicht, der uns schon so oft begegnet ist und an den wir uns immer erinnern werden, auch hinter dieser Falle steckt!?',
      '',
      'Oh ja! Ich bin wie eine Spinne und ihr zappelt in meinem Netz!',
      'Eine vom Narrativ lange angelegte und aufgebaute Spinne die zurecht am Hoehepunkt der Spannung auftritt!',
      '',
      'Und wie bei jedem guten, boesen, Plan steckt hinter den Fallen in die ich euch geleitet habe ein Hinweis!',
      'Ein Zeichen dass auf den Ort hinweist, an dem ich Dagobert gefangen halte!',
      'Wie passend von mir, ihn an einem Ort gefangen zu halten an den ihr ihn auch schon einmal entfuehrt habt!',
      'Welches Zeichen? So leicht lasse ich mir nicht auf die Karte zeichen.',
      '',
      '',
      'In die Karten schauen!',
      'Ach verdammt.'
    ]
  },
  {
    name: 'Des Pudels Kern',
    id: '78923bn2345c297234fccwed234sdfgfv',
    hints: [
      'Na wer ist der Meister von Elenas, Jeremiah, Dagoberts und Pauls, ihres Erzfeindes(!), Geschichte?',
      'TOBIAS. Leute. So lang is es jetzt auch nicht her.'
    ],
    next: [
      {
        player: 'any',
        nextId: 'asdfbn9pt7345nvp79w4bn0gn78werv',
      }
    ],
    paragraphs: [
      'Ihr habt mein Raetsel also loesen koennen!?',
      'Damit seit ihr erneut in meine Falle getappt.',
      'Noch tiefer in die Falle.',
      'Eine Falle in der Falle in die man nur fallen kann im Falle, dass die Falle euch nicht zu Fall gebracht haben solle!',
      '',
      'Eine Falle so perfiede, dass nur er sie sich ausdenken konnte',
      'Er, der Meister unserer Geschichte!',
      '',
      'Und nur dieser Name oeffnet das Kryptex!',
      'Das Kryptex, der zentrale Gegenstand um den es in dieser ganzen Geschichte ging, den ihr die ganze Zeit dabei hattet!',
    ],
    solution: 'ponyschlecken'
  },
  {
    next: [
      {
        player: 'any',
        nextId: '9247835y9234hcnm2397h0fbn283ndsaf',
      }
    ],
    hints: [
      'HAHAHAHAHA',
      'Er hat euch nichteinmal eine Aufgabe gestellt. Das ist eigentlich geschummelt...',
      'Warum solltet ihr dann nicht schummeln?',
      'benutzt einfach die Schummelfunktion.'
    ],
    name: 'Paul.',
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
      'AHAHAHAHAHAHAH'.repeat(50),
    ],
    skipText: [
      'nicht einmal hier!',
      'wirklich!',
      'nein, wirklich wirklich!',
      'lass das!',
      'bitte?'
    ]
  },
  {
    name: 'Reingelegt! HAHAHA',
    id: '9247835y9234hcnm2397h0fbn283ndsaf',
    hints: [
      'Scheinbar kommt IHR hier nicht raus.',
      'Woher weiss diese "Falle" denn, wer du bist?',
      'Und wer muesstest du sein um hier raus zu kommen?',
      'Ersetze deinen Namen in der Adresse durch "paul" und versuch nocheinmal zu entkommen.'
    ],
    next: [
      {
        player: 'paul',
        nextId: 'df345trvr3fr43453asdf23423f4c23kltg',
      },
      {
        player: 'any',
        nextId: '9247835y9234hcnm2397h0fbn283ndsaf',
      }
    ],
    paragraphs: [
      'Nur ich selbst kann aus dieser Falle entkommen!',
      'AHAHAHAHAHAHAHAHAHAHAHAHAHAHA'.repeat(50),
    ],
    skipText: [
      'Der Ausweg!',
    ]
  },
  {
    name: 'Liebes Tagebuch',
    next: [
      {
        player: 'any',
        nextId: 'a012838dyb120b3bdn291mwkmd123893d7nm12',
      }
    ],
    hints: [
      'Stellt nocheinmal TOBIAS ein und schaut mal was sonst so auf den Raedern steht.',
      'Ja es ist falsch geschrieben - aber what are the Chances.',
      'Da steht "JERY QI"!'
    ],
    id: 'df345trvr3fr43453asdf23423f4c23kltg',
    paragraphs: [
      'Heute habe ich ein Raetsel fuer Elena und Jeremiah enwickelt, auf das ich wahnsinnig stolz bin.',
      'Sie muessen ein Kryptex auf TOBIAS einstellen!',
      'Was daran so toll sein soll?',
      'Hihi',

      'Ich hoffe "Doktor Boehring" hat es selbst eingestellt.',
      'Der wird sich so aergern wenn ihm auffaellt, was er damit an einer anderen Stelle auch geschrieben hat.',
      'Das wird der schlimmste Moment in seinem Leben!',
      'Ich meine, abgesehen von den Anschlaegen.',
      'Und als da seine Kollegin erschossen wurde.',
      'Ah, und die Suspendierung.',
      'Und als sein alter Freund ausgeraubt wurde.',
      'Die Messerstecherei.',
      'Das mit der Wohnung...',
      '',
      'Ja, nein.',
      'Aber trotzdem unter den schlimmsten 7 Dingen die ihm jemals angetan wurden!',
      'Ah, das mit seinen Eltern und...',
      'Unter den schlimmsten zehn bis zwanzing Dingen die ihm jemals angetan wurden!',
      '',
      'Und im mich immer daran zu erinnern, werde ich diese Seite nur umblaettern wenn ich die Buchstaben eingebe, die nach dieser Bombastischen Demuetigung stehen.'
    ],
    solution: 'qi',
  },
  {
    name: 'Liebes Tagebuch',
    next: [
      {
        player: 'any',
        nextId: '012838dyb120b3bdn291mwkmd123893d7nm12',
      }
    ],
    hints: [
      'umblaettern'
    ],
    skipText: [
      'umblaettern'
    ],
    id: 'a012838dyb120b3bdn291mwkmd123893d7nm12',
    paragraphs: [
      'Ich habe die Fallen fuer Elena, Jeremiah jetzt fertig.',
      'Diesmal bekomme ich sie bestimmt.',
      'Wenn die wuessten!',
      '',
      'Wenn die wuessten wie gern ich sie hab.',
      'Aber so ist nunmal das Leben als Erzfeind.',
      'Wenn ich versuchen muss die zu fangen und zu schickanieren, damit ich Zeit mit ihnen verbringen kann, dann werde ich das eben tun!',
      '',
      'Dabei wollte ich doch immer nur, dass mir jemand einfach sagt "ich hab dich lieb".',
      'So, jetzt muss ich aber weiter - ich muss noch ein paar Leute engagieren, die den bieden sinnlose Auftraege erteilen die zu nichts fuehren.',
    ]
  },
  {
    name: 'Eine leere Seite',
    next: [
      {
        player: 'any',
        nextId: 'gg3g346gh3465h4hgergertg43',
      },
    ],
    hints: [
      'Paul hat noch nicht weitergeschrieben.',
      'Zeit das Buch zuzumachen.'
    ],
    id: '012838dyb120b3bdn291mwkmd123893d7nm12',
    paragraphs: [
      '',
    ],
    skipText: [
      'Buch schliessen'
    ],
  },
  {
    name: 'Hm',
    next: [
      {
        player: 'any',
        nextId: '123o4m346m34ntmdd23snfsdv',
      },
      {
        player: 'paul',
        nextId: 'gg3g346gh3465h4hgergertg43',
      }
    ],
    hints: [
      'Paul muss gerade nichts weiter tun als auf euch zu warten.',
      'Vielleicht solltet ihr mal wieder in eure eigene Geschichte wechseln.'
    ],
    id: 'gg3g346gh3465h4hgergertg43',
    paragraphs: [
      'dum di dum.',
      '',
      '*hust*'
    ],
    skipText: [
      'weitermachen'
    ],
  },
  {
    name: 'Wie habt ihr das geschafft?',
    next: [
      {
        player: 'any',
        nextId: '1hu23oih12fnnsdasdifn34un',
      },
    ],
    hints: [
      'Hier hilft euch wirklich nichts weiter!',
      'Nur wenn ihr mein Tagebuch gelesen haettet, haettet ihr eine Chance!'
    ],
    id: '123o4m346m34ntmdd23snfsdv',
    solution: 'ich hab dich lieb',
    paragraphs: [
      'Nur ich sollte entkommen koennen!',
      '',
      'Ihr Ratten! Aber was ihr nicht wisst, SIE Dr. Boehring, haben sich beim Loesen meines Kryptext selbst auf unglaublich peinliche weise zum Gespoett gemacht!',
      'Sie haben naemlich als die die Loesung eingestellt haben ohne es zu wissen...',
      '',
      'Wie, Sie wussten das schon?',
      'Moment mal! Haben Sie etwa? Nein, das ist zu gut versteckt!',
      '',
      'Offenbar habe ich ihre Faehigkeiten unterschaetzt!',
      'Ihre Faehigkeiten sich selbst zu Demuetigen! HAHA!',
      '',
      'Am Ende bin ich ihnen immernoch in allen Belangen ueberleben und es gibt nichts, dass Sie sagen oder tun koennten um mich zu bezwingen!'
    ]
  },
  {
    name: 'Was?',
    next: [
      {
        player: 'any',
        nextId: 'Motto_am_Fluss',
      }
    ],
    hints: [
    ],
    id: '1hu23oih12fnnsdasdifn34un',
    skipText: [
      'ja!'
    ],
    paragraphs: [
      'Was?',
      'Das ist ja ein geradezu laecherlicher Versuch!',
      '',
      '...',
      'Ein gerade zu laecherlicher Versuch von mir zu tun als waere ich nicht geruehrt!',
      'Aber heisst das, ich muss garkeine komplizierten Fallen stellen, damit wir gemeinsam etwas unternehmen koennen?',
      '',
      'Es macht aber schon Spass irgendwie.',
      'Also wenn ihr moechtet koennen wir das gern trotzdem weiter so machen...',
    ]
  },
  {
    name: 'The End',
    next: [
    ],
    hints: [
      'Woher weiss das Spiel denn wo ihr gerade hinmuesst oder seid?',
      'Schau mal da wo auch steht wer du gerade bist.',
      'Ich hab einen Tisch im Motto am Fluss reserviert.'
    ],
    id: 'Motto_am_Fluss',
    paragraphs: [
      'Und so endet unsere Geschichte.',
      'Da wo alle guten Geschichten enden, an ihrem Ende.',
      '',
      'Ich hoffe es hat alles funktioniert und ihr hattet Spass.',
      '',
      'Nach dem ganzen herumgerenne hat ihr bestimmt Hunger, oder Durst, oder euch ist kalt oder heiss!',
      '',
      'Ich hab mich solange einmal an einen Tisch hier gesetzt und warte auf euch.',
      'Wenn ihr rechtzeitig heir seid, seid ich eingeladen!',
      'Wo ist hier?',
      'Na ein Raetsel muss schon noch sein.'
    ]
  },
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
