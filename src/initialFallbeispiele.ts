/**
 * Fallbeispiele für § 34a GewO
 */

export interface Fallbeispiel {
  id: string;
  title: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export const INITIAL_FALLBEISPIELE: Fallbeispiel[] = [
  {
    id: "fall_01",
    title: "Der Verdacht an der Kasse",
    question: "Du arbeitest als Sicherheitskraft in einem Elektrofachmarkt. Ein Kunde läuft auffällig nervös durch die Abteilungen. Beim Verlassen des Ladens löst die Warensicherungsanlage Alarm aus. Der Kunde geht stur weiter. Du versperrst ihm den Weg und forderst ihn auf, stehenzubleiben. Er ruft: 'Lassen Sie mich durch, Sie haben mir gar nichts zu sagen, das ist Nötigung!' Welche rechtliche Würdigung deines Handelns trifft zu?",
    options: [
      "A) Dein Handeln ist rechtswidrig und stellt eine strafbare Nötigung (§ 240 StGB) dar, da der Alarm ein bloßer technischer Hinweis ist und keine Straftat beweist.",
      "B) Dein Handeln ist nach § 127 Abs. 1 StPO (vorläufige Festnahme) gerechtfertigt, da der Auslöser der Warnanlage das Vorliegen einer frischen Tat indiziert und Fluchtgefahr besteht.",
      "C) Dein Handeln ist nach § 32 StGB (Notwehr) gerechtfertigt, da der Kunde durch das Weitergehen das Eigentum des Ladens angreift.",
      "D) Dein Handeln ist nur dann rechtmäßig, wenn du den Kunden zuvor ausdrücklich nach § 136 StPO über sein Aussageverweigerungsrecht belehrt hast."
    ],
    correct: 1,
    explanation: "Der Alarm begründet den dringenden Verdacht einer frischen Tat (§ 127 Abs. 1 StPO). Da der Kunde flüchten will, ist das Festhalten/Wegversperren gerechtfertigt."
  },
  {
    id: "fall_02",
    title: "Der freilaufende Hund",
    question: "Auf deiner Nachtstreife im Industriepark kommt plötzlich ein nicht angeleinter, großer Wachhund des Nachbargrundstücks durch eine Lücke im Zaun auf dich zugerannt. Der Hund knurrt furchterregend und setzt zum Sprung an. Du setzt deinen Abwehrspray/Schlagstock ein und verletzt den Hund. Auf welche Rechtfertigungsgrundlage stützt du deine Handlung rechtlich korrekt?",
    options: [
      "A) Notwehr nach § 32 StGB, da ein Notstand gegen Tiere nicht existiert.",
      "B) Notwehr nach § 227 BGB, da Angriffe von Tieren immer als menschliche Angriffe gewertet werden.",
      "C) Defensivnotstand nach § 228 BGB, da die Gefahr von einer fremden Sache (dem Tier) ausging und das Mittel zur Abwehr erforderlich war.",
      "D) Aggressivnotstand nach § 904 BGB, da eine unbeteiligte Sache beschädigt wurde."
    ],
    correct: 2,
    explanation: "Notwehr gilt im Gesetz NUR gegen menschliche Angriffe. Tiere gelten zivilrechtlich als Sachen – da die Gefahr vom Hund selbst ausging, greift der Defensivnotstand (§ 228 BGB)."
  },
  {
    id: "fall_03",
    title: "Der uneinsichtige Diskogast",
    question: "Vor einer Diskothek erteilt der Türsteher (im Auftrag des Betreibers) einem stark alkoholisierten Gast ein mündliches Hausverbot. Der Gast lacht, schubst den Türsteher zur Seite und geht einfach an ihm vorbei in den Eingangsbereich. Welche Handlung der Sicherheitskraft ist rechtlich gedeckt?",
    options: [
      "A) Der Türsteher darf den Gast im Rahmen der Besitzwehr (§ 859 Abs. 1 BGB) mit angemessener körperlicher Gewalt daran hindern, weiter einzudringen, und ihn vom Grundstück verdrängen.",
      "B) Der Türsteher darf den Gast nur dann anfassend verdrängen, wenn der Gast zuvor eine Sachbeschädigung begangen hat.",
      "C) Der Türsteher darf den Gast nur im Rahmen des Notwehrrechts nach § 32 StGB abwehren, wenn der Gast ihn zuvor körperlich verletzt hat.",
      "D) Der Türsteher hat keinerlei Rechte und muss zwingend auf das Eintreffen der Polizei warten."
    ],
    correct: 0,
    explanation: "Das Betreten trotz Hausverbots ist verbotene Eigenmacht. Die Sicherheitskraft darf den Gast im Wege der Besitzwehr (§ 859 BGB) verdrängen."
  },
  {
    id: "fall_04",
    title: "Die verweigerte Taschendurchsuchung",
    question: "Bei einer Einlasskontrolle zu einem Konzert steht in den AGB: 'Taschenkontrollen sind Pflicht'. Ein Besucher weigert sich, seine Tasche zu öffnen. Der Sicherheitsmitarbeiter greift nach der Tasche, reißt sie dem Besucher aus der Hand und durchsucht sie gegen dessen Willen. Wie ist das Verhalten des Sicherheitsmitarbeiters rechtlich zu bewerten?",
    options: [
      "A) Das Handeln war rechtmäßig, da die AGB das Zwangsdurchsuchungsrecht auf das Sicherheitspersonal übertragen.",
      "B) Das Handeln war rechtswidrig und stellt eine strafbare Nötigung (§ 240 StGB) bzw. verbotene Eigenmacht dar; das Personal hätte lediglich den Zutritt verweigern dürfen.",
      "C) Das Handeln war nach § 127 StPO gedeckt, da das Weigern automatisch einen Diebstahlsverdacht begründet.",
      "D) Das Handeln war nach § 34 StGB (Notstand) gedeckt, um die Sicherheit der Veranstaltung zu gewährleisten."
    ],
    correct: 1,
    explanation: "Private Sicherheitskräfte haben KEIN Zwangsdurchsuchungsrecht. Wenn ein Gast die Kontrolle verweigert, darf ihm nur der Zutritt verwehrt werden."
  },
  {
    id: "fall_05",
    title: "Sachbeschädigung am Zaun",
    question: "Während eines Fußballspiels zieht ein Fan eine Sprühdose und beginnt, das Vereinslogo des Gegners auf die Trennwand im Stadion zu sprühen. Du siehst das aus 5 Metern Entfernung. Der Fan bemerkt dich, lässt die Dose fallen und rennt in Richtung Ausgang. Du sprintest hinterher und hältst ihn fest. Ist das Festhalten rechtmäßig?",
    options: [
      "A) Ja, nach § 127 Abs. 1 StPO, da der Fan bei einer Straftat (Sachbeschädigung § 303 StGB) auf frischer Tat betroffen wurde und Fluchtverdacht besteht.",
      "B) Nein, da eine Sachbeschädigung nur eine Ordnungswidrigkeit ist und Festhalten erst ab schweren Verbrechensdelikten erlaubt ist.",
      "C) Ja, aber nur wenn der Sicherheitsmitarbeiter gleichzeitig Polizeibeamter im Nebenamt ist.",
      "D) Nein, da der Fan die Tat abgebrochen hat und somit Straffreiheit genießt."
    ],
    correct: 0,
    explanation: "Sachbeschädigung ist eine Straftat (§ 303 StGB). Da der Täter flüchte, greift das Festnahmerecht nach § 127 Abs. 1 StPO."
  },
  {
    id: "fall_06",
    title: "Die gefundene Geldbörse",
    question: "Bei der Nachtstreife im Bürogebäude findest du auf einem Gang eine Geldbörse mit 500 € Bargeld. Du nimmst sie an dich, steckst sie in deine Dienstkleidung und beschließt, das Geld zu behalten. Welchen Straftatbestand hast du vollendet?",
    options: [
      "A) Diebstahl (§ 242 StGB), da du die Börse entwendet hast.",
      "B) Unterschlagung (§ 246 StGB), da die Sache verloren war und somit fremder Gewahrsam bereits aufgehoben war.",
      "C) Raub (§ 249 StGB), weil du im Dienst gehandelt hast.",
      "D) Betrug (§ 263 StGB) gegenüber deinem Arbeitgeber."
    ],
    correct: 1,
    explanation: "Achtung Prüfungsfalle! Eine verlorene Sache steht nicht mehr unter fremdem Gewahrsam. Deshalb ist es KEIN Diebstahl, sondern eine Unterschlagung (§ 246 StGB)."
  },
  {
    id: "fall_07",
    title: "Flucht mit dem Auto",
    question: "Du beobachtest, wie ein Mann nachts die Scheibe eines parkenden Autos einschlägt und ein Navigationsgerät entwendet. Als du auf ihn zukommst, springt er in sein Fluchtfahrzeug. Du stellst dich vor die Stoßstange. Der Täter gibt Vollgas und fährt direkt auf dich zu. Du ziehst deine zugelassene Dienstpistole und schießt auf die Reifen des Autos. Wie ist der Schusswaffengebrauch rechtlich zu werten?",
    options: [
      "A) Rechtmäßig als Notwehr (§ 32 StGB), da ein gegenwärtiger, rechtswidriger Angriff auf dein Leben vorlag und der Schuss auf die Reifen das erforderliche, mildeste Mittel war.",
      "B) Rechtswidrig, da Schusswaffen von privaten Sicherheitskräften niemals gegen Fahrzeuge eingesetzt werden dürfen.",
      "C) Rechtmäßig als Notstand nach § 34 StGB, da das Eigentum am Navigationsgerät höher wiegt als die Verkehrssicherheit.",
      "D) Rechtswidrig wegen Notwehrexzess, da man Geldwerte nicht mit Waffen verteidigen darf."
    ],
    correct: 0,
    explanation: "Da das Auto gezielt auf die Sicherheitskraft zufährt, liegt ein lebensbedrohlicher Angriff vor. Der gezielte Schuss auf die Reifen ist als Notwehr (§ 32 StGB) gedeckt."
  },
  {
    id: "fall_08",
    title: "Der stumme Einbrecher",
    question: "Du überraschst nachts auf einem Firmengelände einen Einbrecher. Du rufst: 'Halt, Sicherheitsdienst!'. Der Einbrecher dreht sich um, zieht ein langes Küchenmesser und rennt schweigend, mit erhobenem Messer direkt auf dich zu. Du setzt deinen Pfefferspray-Strahl gezielt gegen sein Gesicht ein. Welche rechtliche Prüfung trifft zu?",
    options: [
      "A) Es liegt ein Notstand nach § 228 BGB vor, da das Messer eine Sache ist.",
      "B) Es liegt eine rechtmäßige Notwehrhandlung (§ 32 StGB) vor, da ein gegenwärtiger, rechtswidriger Angriff auf die körperliche Unversehrtheit/das Leben vorliegt.",
      "C) Es liegt ein Notwehrexzess (§ 33 StGB) vor, da Pfefferspray gegen Messer wirkungslos ist.",
      "D) Es liegt eine Amtsanmaßung (§ 132 StGB) vor, da nur die Polizei Pfefferspray einsetzen darf."
    ],
    correct: 1,
    explanation: "Ein Angriff mit einem Messer bedroht Leben und Gesundheit. Der Einsatz von Pfefferspray zur Abwehr ist reine Notwehr nach § 32 StGB."
  },
  {
    id: "fall_09",
    title: "Der Ausweis am Werkstor",
    question: "Ein Lkw-Fahrer möchte auf das Werksgelände deines Auftraggebers fahren. Du verlangst seinen Personalausweis zur Einlassregistrierung. Der Fahrer weigert sich und fordert die Einfahrt. Du verweigerst ihm daraufhin die Einfahrt und das Öffnen der Schranke. Ist deine Verweigerung der Einfahrt rechtmäßig?",
    options: [
      "A) Nein, da Bürger im öffentlichen Leben ein Recht auf freien Zugang zu allen Betriebsgeländen haben.",
      "B) Ja, das Verweigern der Einfahrt basiert auf der Ausübung des Hausrechts (§ 903 / § 858 BGB) des Auftraggebers durch das Bewachungspersonal.",
      "C) Ja, aber nur, weil die Gewerbeordnung dem Sicherheitsdienst ein hoheitliches Ausweisprüfungsrecht überträgt.",
      "D) Nein, du hättest den Fahrer vorläufig festnehmen müssen (§ 127 StPO)."
    ],
    correct: 1,
    explanation: "Das Bewachungspersonal übt das Hausrecht des Auftraggebers aus. Wer die Einlassbedingungen (Ausweis zeigen) nicht erfüllt, darf abgewiesen werden."
  },
  {
    id: "fall_10",
    title: "Notwehrüberschreitung aus Angst",
    question: "Ein randalierender Mann stößt dich auf einer Streife heftig an der Schulter und beleidigt dich. Du gerätst in Panik und Todesangst und schlägst mit deinem Einsatzstock mehrfach auf den Kopf des Randalierers ein, bis dieser schwer verletzt zusammenbricht. Wie ist deine Handlung strafrechtlich zu bewerten?",
    options: [
      "A) Die Handlung ist als vollendete Notwehr nach § 32 StGB gerechtfertigt.",
      "B) Es liegt ein Notwehrexzess (§ 33 StGB) vor. Die Grenzen der Notwehr wurden aus Furcht oder Schrecken überschritten; der Schlagende wird strafrechtlich nicht bestraft.",
      "C) Es liegt eine vorsätzliche Notwehr nach § 227 BGB vor.",
      "D) Die Handlung ist nach § 34 StGB als rechtfertigender Notstand vollständig abgedeckt."
    ],
    correct: 1,
    explanation: "Der Schlag war massiv unverhältnismäßig. Da die Überschreitung aber aus Verwirrung, Furcht oder Schrecken (asthenische Affekte) geschah, entfällt nach § 33 StGB die Strafe."
  }
];
