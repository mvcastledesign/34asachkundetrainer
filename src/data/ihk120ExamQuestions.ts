import { WrittenQuestion } from '../types.ts';

export interface IhkCategoryConfig {
  id: string;
  name: string;
  shortName: string;
  maxPoints: number;
  questionCount: number;
  onePointCount: number;
  twoPointCount: number;
  iconName: string;
  color: string;
}

export const IHK_CATEGORIES_CONFIG: IhkCategoryConfig[] = [
  {
    id: 'oeff_recht',
    name: 'Recht der öffentlichen Sicherheit und Ordnung',
    shortName: 'Öffentl. Sicherheit & Ordnung',
    maxPoints: 10,
    questionCount: 7,
    onePointCount: 4,
    twoPointCount: 3,
    iconName: 'Scale',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    id: 'bgb',
    name: 'Bürgerliches Gesetzbuch (BGB)',
    shortName: 'Bürgerliches Recht (BGB)',
    maxPoints: 28,
    questionCount: 19,
    onePointCount: 10,
    twoPointCount: 9,
    iconName: 'BookOpen',
    color: 'from-amber-500 to-yellow-500'
  },
  {
    id: 'stgb_stpo',
    name: 'Straf- und Strafverfahrensrecht (StGB / StPO)',
    shortName: 'StGB & StPO (§ 127 Festnahme)',
    maxPoints: 28,
    questionCount: 19,
    onePointCount: 10,
    twoPointCount: 9,
    iconName: 'ShieldAlert',
    color: 'from-rose-500 to-red-500'
  },
  {
    id: 'deeskalation',
    name: 'Umgang mit Menschen und Verhalten in Gefahrensituationen',
    shortName: 'Umgang mit Menschen & Deeskalation',
    maxPoints: 20,
    questionCount: 14,
    onePointCount: 8,
    twoPointCount: 6,
    iconName: 'Users',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    id: 'uvv',
    name: 'Unfallverhütungsvorschriften (UVV)',
    shortName: 'UVV (DGUV Vorschrift 23)',
    maxPoints: 10,
    questionCount: 7,
    onePointCount: 4,
    twoPointCount: 3,
    iconName: 'HardHat',
    color: 'from-orange-500 to-amber-600'
  },
  {
    id: 'technik',
    name: 'Grundsätze der Sicherheitstechnik',
    shortName: 'Grundlagen der Sicherheitstechnik',
    maxPoints: 10,
    questionCount: 7,
    onePointCount: 4,
    twoPointCount: 3,
    iconName: 'Cpu',
    color: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'datenschutz',
    name: 'Datenschutzrecht',
    shortName: 'Datenschutz (DSGVO / BDSG)',
    maxPoints: 5,
    questionCount: 3,
    onePointCount: 1,
    twoPointCount: 2,
    iconName: 'Lock',
    color: 'from-purple-500 to-violet-500'
  },
  {
    id: 'waffenrecht',
    name: 'Umgang mit Waffen',
    shortName: 'Waffenrecht (WaffG)',
    maxPoints: 5,
    questionCount: 3,
    onePointCount: 1,
    twoPointCount: 2,
    iconName: 'Crosshair',
    color: 'from-pink-500 to-rose-600'
  },
  {
    id: 'gewerberecht',
    name: 'Gewerberecht (GewO / BewachV)',
    shortName: 'Gewerberecht (§ 34a GewO / BewachV)',
    maxPoints: 4,
    questionCount: 3,
    onePointCount: 2,
    twoPointCount: 1,
    iconName: 'Briefcase',
    color: 'from-lime-500 to-emerald-600'
  }
];

export const IHK_120_EXAM_QUESTIONS: WrittenQuestion[] = [
  // =========================================================================
  // 1. RECHT DER ÖFFENTLICHEN SICHERHEIT UND ORDNUNG (7 Fragen = 10 Punkte: 4x 1P, 3x 2P)
  // =========================================================================
  {
    id: 'ihk-oeff-1',
    kategorie: 'Recht der öffentlichen Sicherheit und Ordnung',
    frage: 'Was versteht man unter dem Begriff "Öffentliche Sicherheit" im deutschen Recht?',
    optionen: [
      'A) Den Schutz der Unversehrtheit der Rechtsordnung, der Individualrechtsgüter und der Einrichtungen des Staates.',
      'B) Ausschließlich den Schutz vor terroristischen Anschlägen auf Bundesebene.',
      'C) Die Summe aller ungeschriebenen Regeln für das Verhalten in der Öffentlichkeit (Sitte und Moral).',
      'D) Die Gewährleistung von pünktlichen Zügen und öffentlichem Personennahverkehr.'
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Die öffentliche Sicherheit umfasst 3 Schutzbereiche: 1. Die gesamte geschriebene Rechtsordnung (Gesetze, Verordnungen), 2. Individualrechtsgüter (Leben, Gesundheit, Freiheit, Eigentum) und 3. Der Staat mit seinen Einrichtungen und Veranstaltungen.'
  },
  {
    id: 'ihk-oeff-2',
    kategorie: 'Recht der öffentlichen Sicherheit und Ordnung',
    frage: 'Welche Aufgaben obliegen den Ordnungsbehörden und der Polizei im Rahmen der Gefahrenabwehr?',
    optionen: [
      'A) Die Verhängung von Freiheitsstrafen bei schweren Straftaten.',
      'B) Die Abwehr von Gefahren für die öffentliche Sicherheit und Ordnung.',
      'C) Die zivilrechtliche Durchsetzung von Geldforderungen privater Vermieter.',
      'D) Die automatische Übernahme privater Firmenbewachungen.'
    ],
    korrekteAntworten: [1],
    punkte: 1,
    erklaerung: 'Kernaufgabe der Polizei- und Ordnungsbehörden ist die präventive Gefahrenabwehr zum Schutz der Allgemeinheit vor Schäden an der öffentlichen Sicherheit und Ordnung.'
  },
  {
    id: 'ihk-oeff-3',
    kategorie: 'Recht der öffentlichen Sicherheit und Ordnung',
    frage: 'Was bedeutet das "Gewaltmonopol des Staates" für private Sicherheitskräfte?',
    optionen: [
      'A) Private Sicherheitsdienste haben denselben Status und dieselben Zwangsmittel wie die Landespolizei.',
      'B) Der Staat besitzt grundsätzlich das alleinige Recht zur Anwendung physischer Zwangsgewalt; Private dürfen Gewalt nur im Rahmen gesetzlicher Notrechte (z. B. Notwehr, Selbsthilfe) ausüben.',
      'C) Private Sicherheitskräfte dürfen bei Ladendiebstahl Geldstrafen direkt vor Ort vollstrecken.',
      'D) Sicherheitsmitarbeiter sind von den Bestimmungen des Strafgesetzbuches ausgenommen.'
    ],
    korrekteAntworten: [1],
    punkte: 1,
    erklaerung: 'Das staatliche Gewaltmonopol besagt, dass nur staatliche Organe Zwangsgewalt zur Rechtsdurchsetzung anwenden dürfen. Private Personen und Sicherheitskräfte haben nur Jedermannsrechte und Notwehr-/Besitzschutzrechte.'
  },
  {
    id: 'ihk-oeff-4',
    kategorie: 'Recht der öffentlichen Sicherheit und Ordnung',
    frage: 'Welche Grundrechte nach dem Grundgesetz (GG) sind für die Tätigkeit im Sicherheitsdienst besonders relevant?',
    optionen: [
      'A) Art. 1 Abs. 1 GG: Die Würde des Menschen ist unantastbar.',
      'B) Art. 2 Abs. 2 GG: Recht auf Leben, körperliche Unversehrtheit und Freiheit der Person.',
      'C) Art. 102 GG: Abschaffung der Todesstrafe als Dienstanweisung.',
      'D) Art. 13 GG: Recht auf zollfreien Wareneinkauf.'
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: 'Art. 1 (Menschenwürde) und Art. 2 GG (körperliche Unversehrtheit & persönliche Freiheit) sind fundamentale Schutzgüter, die bei jeder Sicherheitsmaßnahme beachtet werden müssen.'
  },
  {
    id: 'ihk-oeff-5',
    kategorie: 'Recht der öffentlichen Sicherheit und Ordnung',
    frage: 'Was versteht man unter "Öffentlicher Ordnung"? (Wählen Sie zwei richtige Antworten)',
    optionen: [
      'A) Die Gesamtheit der ungeschriebenen Regeln für das Verhalten des Einzelnen in der Öffentlichkeit, die nach herrschender Anschauung für ein geordnetes Zusammenleben unerlässlich sind.',
      'B) Alle geschriebenen Gesetze des Bundes und der Länder.',
      'C) Verhaltensregeln, die sich nach den herrschenden gesellschaftlichen Wert- und Moralvorstellungen richten.',
      'D) Die Verkehrsregeln nach der Straßenverkehrsordnung.'
    ],
    korrekteAntworten: [0, 2],
    punkte: 2,
    erklaerung: 'Öffentliche Ordnung umfasst die ungeschriebenen Regeln und ethischen Verhaltensnormen, die nach den jeweiligen Anschauungen für ein geordnetes Zusammenleben der Bürger erforderlich sind.'
  },
  {
    id: 'ihk-oeff-6',
    kategorie: 'Recht der öffentlichen Sicherheit und Ordnung',
    frage: 'Welche rechtliche Stellung hat ein privater Sicherheitsmitarbeiter im Rahmen seines Dienstes?',
    optionen: [
      'A) Er ist Beliehener mit voller polizeilicher Exekutivgewalt.',
      'B) Er ist ein ganz normaler Bürger (Privatperson) mit Jedermannsrechten sowie den ihm vom Auftraggeber übertragenen Hausrechten.',
      'C) Er ist Amtsträger im Sinne von § 11 Abs. 1 Nr. 2 StGB.',
      'D) Er darf polizeiliche Ausweise ausstellen.'
    ],
    korrekteAntworten: [1],
    punkte: 1,
    erklaerung: 'Sicherheitsmitarbeiter sind Privatpersonen. Sie besitzen keine Sonderrechte gegenüber anderen Bürgern, handeln jedoch oft im Auftrag des Hausrechtsinhabers als Besitzdiener (§ 855 BGB).'
  },
  {
    id: 'ihk-oeff-7',
    kategorie: 'Recht der öffentlichen Sicherheit und Ordnung',
    frage: 'Wann darf die Polizei zur Durchsetzung privater Rechte gerufen werden? (Wählen Sie zwei richtige Antworten)',
    optionen: [
      'A) Wenn gerichtlicher Rechtsschutz nicht rechtzeitig erlangt werden kann.',
      'B) Wenn ohne polizeiliche Hilfe die Gefahr besteht, dass die Verwirklichung des Rechts vereitelt oder wesentlich erschwert wird (Subsidiaritätsprinzip).',
      'C) Bei jeder beliebigen Meinungsverschiedenheit über einen Kaufpreis.',
      'D) Immer, um dem Sicherheitsdienst Schreibarbeit zu ersparen.'
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: 'Nach den Polizeigesetzen (z. B. § 1 Abs. 2 PolG) wird die Polizei zum Schutz privater Rechte nur subsidiär tätig, wenn gerichtlicher Schutz nicht rechtzeitig erreichbar ist und Rechtsverlust droht.'
  },

  // =========================================================================
  // 2. BÜRGERLICHES GESETZBUCH (BGB) (19 Fragen = 28 Punkte: 10x 1P, 9x 2P)
  // =========================================================================
  {
    id: 'ihk-bgb-1',
    kategorie: 'Bürgerliches Gesetzbuch (BGB)',
    frage: 'Was ist Notwehr nach § 227 BGB?',
    optionen: [
      'A) Diejenige Verteidigung, welche erforderlich ist, um einen gegenwärtigen rechtswidrigen Angriff von sich oder einem anderen abzuwenden.',
      'B) Das Recht, sich an einer Person zu rächen, die gestern einen Diebstahl begangen hat.',
      'C) Die Festnahme eines flüchtigen Tatverdächtigen auf frischer Tat.',
      'D) Die Zerstörung einer fremden Sache zur Abwendung einer drohenden Naturkatastrophe.'
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: '§ 227 Abs. 2 BGB definiert Notwehr als die erforderliche Verteidigung zur Abwehr eines gegenwärtigen und rechtswidrigen Angriffs auf ein rechtlich geschütztes Gut.'
  },
  {
    id: 'ihk-bgb-2',
    kategorie: 'Bürgerliches Gesetzbuch (BGB)',
    frage: 'Welche Merkmale kennzeichnen einen "Angriff" im Rahmen der Notwehr nach § 227 BGB?',
    optionen: [
      'A) Jede von einem Menschen drohende oder ausgehende Verletzung rechtlich geschützter Güter oder Interessen.',
      'B) Ausschließlich tätliche Schläge gegen das Gesicht.',
      'C) Das Anbellen durch einen frei herumlaufenden Hund.',
      'D) Jeder Regenschauer, der das Dienstgebäude beschädigen könnte.'
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Ein Angriff ist immer ein menschliches Verhalten, das eine drohende oder unmittelbare Verletzung von Rechtsgütern darstellt. Tierangriffe fallen unter Notstand (§ 228 BGB).'
  },
  {
    id: 'ihk-bgb-3',
    kategorie: 'Bürgerliches Gesetzbuch (BGB)',
    frage: 'Wann ist ein Angriff "gegenwärtig"?',
    optionen: [
      'A) Wenn er unmittelbar bevorsteht, gerade stattfindet oder noch fortdauert.',
      'B) Wenn der Täter vor drei Stunden gedroht hat.',
      'C) Erst wenn das Opfer bereits schwere Verletzungen erlitten hat.',
      'D) Wenn der Täter sich bereits mit der Beute sicher im Ausland befindet.'
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Gegenwärtigkeit liegt vor, wenn der Angriff unmittelbar bevorsteht, im Gange ist oder noch andauert.'
  },
  {
    id: 'ihk-bgb-4',
    kategorie: 'Bürgerliches Gesetzbuch (BGB)',
    frage: 'Wann ist eine Notwehrhandlung "erforderlich"?',
    optionen: [
      'A) Wenn sie geeignet ist, den Angriff sicher und endgültig zu beenden, und unter gleich wirksamen Mitteln das relativ mildeste darstellt.',
      'B) Wenn die Notwehrhandlung streng mit dem Wert des angegriffenen Rechtsguts abgewogen wurde.',
      'C) Wenn vorher immer die schriftliche Erlaubnis des Kunden eingeholt wurde.',
      'D) Wenn dem Angreifer maximaler Schaden zugefügt wird.'
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Erforderlich ist das mildeste, gleichermaßen effektive Mittel zur sofortigen und dauerhaften Angriffsbeendigung. Eine Güterabwägung findet bei Notwehr grundsätzlich nicht statt!'
  },
  {
    id: 'ihk-bgb-5',
    kategorie: 'Bürgerliches Gesetzbuch (BGB)',
    frage: 'Worin unterscheidet sich der Defensivnotstand (§ 228 BGB) vom Aggressivnotstand (§ 904 BGB)? (Wählen Sie zwei richtige Antworten)',
    optionen: [
      'A) Bei § 228 BGB geht die Gefahr von der Sache selbst aus, die beschädigt oder zerstört wird.',
      'B) Bei § 904 BGB wird auf eine völlig unbeteiligte Sache eines Dritten zugegriffen, um eine fremde Gefahr abzuwehren.',
      'C) Bei § 228 BGB muss immer Schadensersatz an den Eigentümer gezahlt werden.',
      'D) Bei § 904 BGB darf niemals Schadensersatz verlangt werden.'
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: '§ 228 BGB (Defensivnotstand): Gefahr geht von der Sache aus (z. B. beißender Hund). § 904 BGB (Aggressivnotstand): Zugriff auf unbeteiligte Sache Dritter (z. B. Feuerlöscher des Nachbarn) – hier besteht Schadensersatzpflicht.'
  },
  {
    id: 'ihk-bgb-6',
    kategorie: 'Bürgerliches Gesetzbuch (BGB)',
    frage: 'Was ist "Besitzdiener" nach § 855 BGB und welche Rechte hat er?',
    optionen: [
      'A) Jemand, der die tatsächliche Gewalt über eine Sache für einen anderen in dessen Haushalt oder Erwerbsgeschäft ausübt (z. B. Wachpersonal); er darf die Besitzschutzrechte des Besitzers ausüben.',
      'B) Ein Mieter, der eine Wohnung gemietet hat.',
      'C) Ein Gerichtsvollzieher, der Pfändungen vornimmt.',
      'D) Ein Dienstleister, der keinerlei Weisungen des Auftraggebers befolgen muss.'
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Sicherheitskräfte sind als Angestellte oder Beauftragte Besitzdiener (§ 855 BGB) und dürfen Besitzkehr und Besitzwehr (§ 859 BGB) für den Besitzherrn wahrnehmen.'
  },
  {
    id: 'ihk-bgb-7',
    kategorie: 'Bürgerliches Gesetzbuch (BGB)',
    frage: 'Welche Rechte umfasst das Besitzschutzrecht nach § 859 BGB? (Wählen Sie zwei richtige Antworten)',
    optionen: [
      'A) § 859 Abs. 1 BGB (Besitzwehr): Der Besitzer darf sich verbotener Eigenmacht mit Gewalt erwehren.',
      'B) § 859 Abs. 2 BGB (Besitzkehr): Wird eine bewegliche Sache auf frischer Tat weggenommen, darf sie dem Täter sofort wieder abgenommen werden.',
      'C) Das lebenslange Verbot des Betretens aller Bahnhöfe bundesweit.',
      'D) Die sofortige Einziehung des Reisepasses des Störers.'
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: '§ 859 BGB gewährt dem Besitzer (und Besitzdiener) die Besitzwehr (Abwehr verbotener Eigenmacht) und die Besitzkehr (Wiedererlangung entzogener Sachen auf frischer Tat).'
  },
  {
    id: 'ihk-bgb-8',
    kategorie: 'Bürgerliches Gesetzbuch (BGB)',
    frage: 'Was versteht man unter "Verbotener Eigenmacht" nach § 858 BGB?',
    optionen: [
      'A) Wer dem Besitzer ohne dessen Willen den Besitz entzieht oder ihn im Besitz stört, sofern nicht das Gesetz die Entziehung oder Störung gestattet.',
      'B) Das rechtmäßige Abschleppen eines Falschparkers durch die Polizei.',
      'C) Die Rückgabe einer Fundsache an das Fundbüro.',
      'D) Das ordnungsgemäße Abschließen eines gemieteten Büros.'
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Verbotene Eigenmacht ist jede unbefugte Entziehung oder Störung des tatsächlichen Besitzes ohne den Willen des Besitzers und ohne gesetzliche Ermächtigung.'
  },
  {
    id: 'ihk-bgb-9',
    kategorie: 'Bürgerliches Gesetzbuch (BGB)',
    frage: 'Welche Voraussetzungen müssen für die Selbsthilfe nach § 229 BGB vorliegen? (Wählen Sie zwei richtige Antworten)',
    optionen: [
      'A) Es muss ein zivilrechtlicher Anspruch bestehen.',
      'B) Obrigkeitliche Hilfe (Polizei/Gericht) ist nicht rechtzeitig zu erlangen und ohne sofortiges Eingreifen droht Rechtsverlust.',
      'C) Der Schuldner muss zuvor eine notarielle Schuldanerkennung unterzeichnet haben.',
      'D) Es muss immer ein lebensgefährlicher Angriff vorliegen.'
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: 'Selbsthilfe nach § 229 BGB sichert zivilrechtliche Ansprüche (z. B. Schadensersatz, Zechprellerei), wenn staatliche Hilfe nicht rechtzeitig erreichbar ist und Fluchtgefahr besteht.'
  },
  {
    id: 'ihk-bgb-10',
    kategorie: 'Bürgerliches Gesetzbuch (BGB)',
    frage: 'Wer übt das Hausrecht nach § 903 / § 858 ff. BGB auf einem befriedeten Besitztum aus?',
    optionen: [
      'A) Der Eigentümer, Mieter oder Pächter (Hausrechtsinhaber) sowie von ihm bevollmächtigte Personen wie das Sicherheitspersonal.',
      'B) Jeder Besucher, der eine Eintrittskarte gekauft hat.',
      'C) Ausschließlich die örtliche Stadtverwaltung.',
      'D) Niemand, da alle Gebäude in Deutschland frei zugänglich sein müssen.'
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Das Hausrecht steht dem Inhaber der tatsächlichen Sachherrschaft zu. Durch Dienstanweisung/Vertrag wird das Sicherheitspersonal zur Ausübung bevollmächtigt.'
  },
  {
    id: 'ihk-bgb-11',
    kategorie: 'Bürgerliches Gesetzbuch (BGB)',
    frage: 'Wann erlischt das Hausverbot, das einem Randalierer in einer Diskothek erteilt wurde? (Wählen Sie zwei richtige Antworten)',
    optionen: [
      'A) Mit Ablauf der ausgesprochenen Befristung.',
      'B) Durch ausdrücklichen Widerruf durch den Hausrechtsinhaber.',
      'C) Automatisch am nächsten Morgen um 06:00 Uhr.',
      'D) Sobald der Randalierer sich bei Freunden entschuldigt hat.'
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: 'Ein Hausverbot bleibt solange wirksam, wie es befristet ausgesprochen wurde oder bis es vom Hausrechtsinhaber/Bevollmächtigten widerrufen wird.'
  },
  {
    id: 'ihk-bgb-12',
    kategorie: 'Bürgerliches Gesetzbuch (BGB)',
    frage: 'Darf ein Sicherheitsmitarbeiter einen Besucher am Einlass nach § 903 BGB abweisen, wenn dieser die Einlassbedingungen (z. B. Ausweiskontrolle, Taschenkontrolle) verweigert?',
    optionen: [
      'A) Ja, im Rahmen der Ausübung des Hausrechts kann der Zutritt an Bedingungen geknüpft und bei Verweigerung verwehrt werden.',
      'B) Nein, jeder Bürger hat ein verfassungsrechtliches Recht auf Zutritt zu jeder Veranstaltung.',
      'C) Nur, wenn die Polizei vorher schriftlich zugestimmt hat.',
      'D) Nur, wenn der Besucher bereits handgreiflich geworden ist.'
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Im Rahmen der Privatautonomie und des Hausrechts kann der Inhaber bestimmen, wer sein Grundstück unter welchen Bedingungen betreten darf.'
  },
  {
    id: 'ihk-bgb-13',
    kategorie: 'Bürgerliches Gesetzbuch (BGB)',
    frage: 'Welche rechtliche Folge hat die Überschreitung der Notwehr (Notwehrexzess nach § 33 StGB) im Zivilrecht?',
    optionen: [
      'A) Es kann eine zivilrechtliche Schadensersatzpflicht nach § 823 BGB entstehen, es sei denn, es lag entschuldbare Verwirrung, Furcht oder Schrecken vor.',
      'B) Der Notwehrexzess führt automatisch zum Verlust des Führerscheins.',
      'C) Der Angreifer muss immer die doppelte Schadenssumme zahlen.',
      'D) Es hat keinerlei zivilrechtliche Konsequenzen.'
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Bei Überschreitung der Erforderlichkeit entfällt die Rechtfertigung; der Täter handelt rechtswidrig und haftet grundsätzlich zivilrechtlich auf Schadensersatz (§ 823 BGB).'
  },
  {
    id: 'ihk-bgb-14',
    kategorie: 'Bürgerliches Gesetzbuch (BGB)',
    frage: 'Was regelt § 823 Abs. 1 BGB bezüglich der unerlaubten Handlung? (Wählen Sie zwei richtige Antworten)',
    optionen: [
      'A) Wer vorsätzlich oder fahrlässig das Leben, den Körper, die Gesundheit, die Freiheit, das Eigentum oder ein sonstiges Recht eines anderen widerrechtlich verletzt, ist dem anderen zum Ersatz des daraus entstehenden Schadens verpflichtet.',
      'B) Die Verpflichtung zur Schadenswiedergutmachung bei rechtswidrigen Verletzungshandlungen.',
      'C) Die Mindeststrafe bei einfachem Diebstahl mit Freiheitsentzug.',
      'D) Die Berechnung von Nachtzuschlägen im Wachgewerbe.'
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: '§ 823 Abs. 1 BGB ist die zivilrechtliche Grundnorm für Schadensersatzansprüche bei schuldhafter und rechtswidriger Rechtsgutsverletzung.'
  },
  {
    id: 'ihk-bgb-15',
    kategorie: 'Bürgerliches Gesetzbuch (BGB)',
    frage: 'Ein Sicherheitsmitarbeiter findet auf dem Gelände eine fremde Brieftasche. Welche Pflichten hat er nach dem BGB (§§ 965 ff. BGB)?',
    optionen: [
      'A) Er muss den Fund unverzüglich dem Verlierer, Eigentümer oder der zuständigen Behörde (Fundbüro) bzw. dem Dienststellenleiter anzeigen.',
      'B) Er darf das Bargeld sofort behalten und die Papiere vernichten.',
      'C) Er muss die Fundsache nach 24 Stunden bei eBay versteigern.',
      'D) Er darf Fundsachen grundsätzlich nur der Feuerwehr übergeben.'
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Nach § 965 BGB ist der Finder verpflichtet, den Fund unverzüglich anzuzeigen und die Sache zu verwahren bzw. abzugeben.'
  },
  {
    id: 'ihk-bgb-16',
    kategorie: 'Bürgerliches Gesetzbuch (BGB)',
    frage: 'Welche Rechtsfähigkeit und Geschäftsfähigkeit haben Personen nach dem BGB? (Wählen Sie zwei richtige Antworten)',
    optionen: [
      'A) Die Rechtsfähigkeit des Menschen beginnt mit der Vollendung der Geburt (§ 1 BGB).',
      'B) Personen ab Vollendung des 18. Lebensjahres sind grundsätzlich voll geschäftsfähig (§ 104, § 106 BGB).',
      'C) Kinder unter 7 Jahren sind voll geschäftsfähig.',
      'D) Die Rechtsfähigkeit endet mit der Vollendung des 65. Lebensjahres.'
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: 'Rechtsfähigkeit beginnt mit der Geburt (§ 1 BGB). Volle Geschäftsfähigkeit tritt mit Volljährigkeit (18 Jahre) ein (§ 2, § 106 BGB).'
  },
  {
    id: 'ihk-bgb-17',
    kategorie: 'Bürgerliches Gesetzbuch (BGB)',
    frage: 'Welche Bedeutung hat § 831 BGB (Haftung für den Verrichtungsgehilfen) für Sicherheitsunternehmen?',
    optionen: [
      'A) Der Unternehmer haftet für Schäden, die sein Mitarbeiter einem Dritten widerrechtlich zufügt, es sei denn, er kann sich bezüglich Auswahl und Beaufsichtigung entlasten (Exkulpation).',
      'B) Der Unternehmer haftet niemals für Fehler seiner Wachleute.',
      'C) Wachleute müssen für alle Schäden des Unternehmens mit ihrem Privatvermögen haften.',
      'D) Der Verrichtungsgehilfe muss mindestens Meister für Schutz und Sicherheit sein.'
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: '§ 831 BGB regelt die Haftung des Geschäftsherrn für Verrichtungsgehilfen (Wachpersonal) mit Möglichkeit des Entlastungsbeweises.'
  },
  {
    id: 'ihk-bgb-18',
    kategorie: 'Bürgerliches Gesetzbuch (BGB)',
    frage: 'Welche Handlungen sind im Rahmen des Aggressivnotstands nach § 904 BGB zulässig? (Wählen Sie zwei richtige Antworten)',
    optionen: [
      'A) Die Einwirkung auf eine fremde Sache, von der keine Gefahr ausgeht, wenn dies zur Abwendung einer gegenwärtigen Gefahr notwendig ist.',
      'B) Der Schaden an der Sache darf nicht außer Verhältnis zur drohenden Gefahr stehen.',
      'C) Man darf die Sache zerstören, ohne jemals für den Schaden aufkommen zu müssen.',
      'D) Es darf nur auf Sachen der Polizei zugegriffen werden.'
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: '§ 904 BGB erlaubt die Einwirkung auf unbeteiligte fremde Sachen bei gegenwärtiger Gefahr, sofern der drohende Schaden unverhältnismäßig größer ist. Der Eigentümer kann Schadensersatz verlangen.'
  },
  {
    id: 'ihk-bgb-19',
    kategorie: 'Bürgerliches Gesetzbuch (BGB)',
    frage: 'Darf der Sicherheitsdienst im Rahmen der Selbsthilfe nach § 229 BGB eine flüchtende Person festhalten, die die Zechrechnung im Restaurant nicht bezahlt hat? (Wählen Sie zwei richtige Antworten)',
    optionen: [
      'A) Ja, wenn der Anspruchsteller den Schuldner auf frischer Tat betrifft und die Identität nicht sofort feststellbar ist.',
      'B) Ja, wenn obrigkeitliche Hilfe nicht rechtzeitig erlangt werden kann und Fluchtgefahr besteht.',
      'C) Nein, Zechprellerei darf nur von Richtern verfolgt werden.',
      'D) Ja, aber der Gast muss zur Strafe körperlich gezüchtigt werden.'
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: '§ 229 BGB erlaubt die vorläufige Festnahme des Schuldners zur Sicherung zivilrechtlicher Ansprüche, wenn Fluchtverdacht vorliegt und die Identität nicht festgestellt werden kann.'
  },

  // =========================================================================
  // 3. STRAF- UND STRAFVERFAHRENSRECHT (19 Fragen = 28 Punkte: 10x 1P, 9x 2P)
  // =========================================================================
  {
    id: 'ihk-stgb-1',
    kategorie: 'Straf- und Strafverfahrensrecht (StGB / StPO)',
    frage: 'Welche Voraussetzungen müssen für eine vorläufige Festnahme nach § 127 Abs. 1 StPO (Jedermann-Festnahme) erfüllt sein?',
    optionen: [
      'A) Die Person muss auf frischer Tat betroffen oder verfolgt sein und der Flucht verdächtig sein oder ihre Identität kann nicht sofort festgestellt werden.',
      'B) Es muss ein schriftlicher Haftbefehl des Amtsgerichts vorliegen.',
      'C) Der Festgenommene muss ein Geständnis unterschrieben haben.',
      'D) Die Festnahme ist nur der Polizei gestattet.'
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Voraussetzungen § 127 Abs. 1 StPO: 1. Frische Tat (oder Verfolgung), 2. Festnahmegrund: Fluchtverdacht ODER Identität nicht sofort feststellbar.'
  },
  {
    id: 'ihk-stgb-2',
    kategorie: 'Straf- und Strafverfahrensrecht (StGB / StPO)',
    frage: 'Wann liegt eine "frische Tat" im Sinne von § 127 Abs. 1 StPO vor?',
    optionen: [
      'A) Wenn der Täter während der Tatausführung oder unmittelbar danach am Tatort oder in dessen unmittelbarer Nähe angetroffen wird.',
      'B) Wenn die Tat vor 3 Wochen verübt wurde und der Verdächtige im Supermarkt einkauft.',
      'C) Wenn der Zeuge im Traum gesehen hat, wer der Täter ist.',
      'D) Wenn die Polizei per Großfahndung nach dem Täter sucht.'
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Frische Tat erfordert einen engen räumlichen und zeitlichen Zusammenhang mit der begangenen Straftat.'
  },
  {
    id: 'ihk-stgb-3',
    kategorie: 'Straf- und Strafverfahrensrecht (StGB / StPO)',
    frage: 'Was ist nach einer Festnahme nach § 127 Abs. 1 StPO unverzüglich zu veranlassen?',
    optionen: [
      'A) Die unverzügliche Übergabe des Festgenommenen an die Polizei.',
      'B) Die Verhängung einer Geldstrafe durch den Schichtleiter.',
      'C) Das Festhalten der Person im Betriebskeller für mindestens 24 Stunden.',
      'D) Die Veröffentlichung des Fotos in sozialen Netzwerken.'
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Der Festgenommene muss unverzüglich der Polizei übergeben werden. Eigenmächtiges langes Festhalten stellt eine Freiheitsberaubung (§ 239 StGB) dar.'
  },
  {
    id: 'ihk-stgb-4',
    kategorie: 'Straf- und Strafverfahrensrecht (StGB / StPO)',
    frage: 'Darf eine Sicherheitskraft bei einer Festnahme nach § 127 StPO die Taschen der Person gegen deren Willen durchsuchen?',
    optionen: [
      'A) Nein, ein allgemeines Durchsuchungsrecht steht nur der Polizei zu; es darf lediglich nach Angriffs- und Fluchtmitteln (Eigensicherung) abgetastet werden.',
      'B) Ja, Sicherheitskräfte haben dasselbe Vollstreckungsrecht wie Kriminalbeamte.',
      'C) Ja, bis auf die Unterwäsche.',
      'D) Ja, wenn der Kunde dies telefonisch anordnet.'
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Private haben kein strafprozessuales Durchsuchungsrecht. Lediglich das oberflächliche Abtasten zur Eigensicherung (Waffenauffindung) ist im Rahmen der Notwehr/Festnahmebefugnis gedeckt.'
  },
  {
    id: 'ihk-stgb-5',
    kategorie: 'Straf- und Strafverfahrensrecht (StGB / StPO)',
    frage: 'Welche Delikte stellen ein Vergehen dar? (Wählen Sie zwei richtige Antworten)',
    optionen: [
      'A) Einfacher Diebstahl nach § 242 StGB (Freiheitsstrafe bis zu 5 Jahren oder Geldstrafe).',
      'B) Hausfriedensbruch nach § 123 StGB (Freiheitsstrafe bis zu einem Jahr oder Geldstrafe).',
      'C) Raub nach § 249 StGB (Mindeststrafe 1 Jahr Freiheitsstrafe).',
      'D) Mord nach § 211 StGB (lebenslange Freiheitsstrafe).'
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: 'Nach § 12 Abs. 2 StGB sind Vergehen rechtswidrige Taten, die im Mindestmaß mit einer geringeren Freiheitsstrafe oder mit Geldstrafe bedroht sind.'
  },
  {
    id: 'ihk-stgb-6',
    kategorie: 'Straf- und Strafverfahrensrecht (StGB / StPO)',
    frage: 'Was kennzeichnet ein Verbrechen nach § 12 Abs. 1 StGB?',
    optionen: [
      'A) Taten, die im Mindestmaß mit einer Freiheitsstrafe von einem Jahr oder darüber bedroht sind (z. B. Raub, Brandstiftung, Totschlag).',
      'B) Jede Sachbeschädigung an Dienstfahrzeugen.',
      'C) Alle Ordnungswidrigkeiten nach der StVO.',
      'D) Straftaten, die nur mit Geldstrafe geahndet werden.'
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Verbrechen sind Taten mit einer gesetzlichen Mindeststrafe von 1 Jahr Freiheitsstrafe (§ 12 Abs. 1 StGB).'
  },
  {
    id: 'ihk-stgb-7',
    kategorie: 'Straf- und Strafverfahrensrecht (StGB / StPO)',
    frage: 'Was ist der rechtliche Unterschied zwischen Diebstahl (§ 242 StGB) und Raub (§ 249 StGB)? (Wählen Sie zwei richtige Antworten)',
    optionen: [
      'A) Beim Diebstahl wird eine fremde bewegliche Sache ohne Gewalt weggenommen.',
      'B) Beim Raub wird die Wegnahme durch Gewalt gegen eine Person oder Drohung mit gegenwärtiger Gefahr für Leib oder Leben erzwungen.',
      'C) Diebstahl ist immer ein Verbrechen, Raub ein Vergehen.',
      'D) Raub setzt immer den Einsatz einer Schusswaffe voraus.'
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: 'Raub (§ 249 StGB) ist die qualifizierte Wegnahme unter Einsatz von Gewalt oder Drohung mit Leibesgefahr (Verbrechen). Diebstahl (§ 242 StGB) ist gewaltlos (Vergehen).'
  },
  {
    id: 'ihk-stgb-8',
    kategorie: 'Straf- und Strafverfahrensrecht (StGB / StPO)',
    frage: 'Wann macht sich jemand des Hausfriedensbruchs nach § 123 StGB schuldig? (Wählen Sie zwei richtige Antworten)',
    optionen: [
      'A) Wer in die Wohnung, in die Geschäftsräume oder in das befriedete Besitztum eines anderen widerrechtlich eindringt.',
      'B) Wer ohne Befugnis darin verweilt und auf die Aufforderung des Berechtigten, sich zu entfernen, die Räumlichkeiten nicht verlässt.',
      'C) Wer vor dem Zaun eines Grundstücks auf dem öffentlichen Gehweg steht.',
      'D) Wer einen Parkschein im Parkhaus ordnungsgemäß bezahlt.'
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: 'Hausfriedensbruch (§ 123 StGB) hat 2 Begehungsformen: 1. Widerrechtliches Eindringen (Eindringungsbruch), 2. Nichtverlassen trotz Aufforderung (Verweilungsbruch). Es ist ein relatives Antragsdelikt.'
  },
  {
    id: 'ihk-stgb-9',
    kategorie: 'Straf- und Strafverfahrensrecht (StGB / StPO)',
    frage: 'Was ist ein "befriedetes Besitztum" im Sinne des § 123 StGB?',
    optionen: [
      'A) Ein Bereich, der durch Schutzwehren (z. B. Zaun, Mauer, Hecke, Kette) nach außen hin erkennbar gegen unbefugtes Betreten gesichert ist.',
      'B) Ein offener Acker ohne jegliche Begrenzung.',
      'C) Ausschließlich ein bewohntes Schlafzimmer.',
      'D) Ein staatliches Naturschutzgebiet.'
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Befriedetes Besitztum ist ein Grundstück, das durch zusammenhängende Abgrenzungen (Zaun, Gitter, Schranke) gegen willkürliches Betreten gesichert ist.'
  },
  {
    id: 'ihk-stgb-10',
    kategorie: 'Straf- und Strafverfahrensrecht (StGB / StPO)',
    frage: 'Was versteht man unter dem Begriff "Notstand" nach § 34 StGB (Rechtfertigender Notstand)? (Wählen Sie zwei richtige Antworten)',
    optionen: [
      'A) Wer in einer gegenwärtigen, nicht anders abwendbaren Gefahr für Leben, Leib, Freiheit, Ehre, Eigentum oder ein anderes Rechtsgut eine Tat begeht, um die Gefahr abzuwenden, handelt nicht rechtswidrig.',
      'B) Bei der Abwägung der widerstreitenden Interessen muss das geschützte Interesse das beeinträchtigte wesentlich überwiegen.',
      'C) Notstand erlaubt jede vorsätzliche Tötung eines Menschen, wenn dadurch Eigentum geschützt wird.',
      'D) Notstand darf nur von Beamten geltend gemacht werden.'
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: '§ 34 StGB erfordert eine Güterabwägung: Das geschützte Rechtsgut muss das geopferte Rechtsgut wesentlich überwiegen (z. B. Leben überwiegt Sachbeschädigung).'
  },
  {
    id: 'ihk-stgb-11',
    kategorie: 'Straf- und Strafverfahrensrecht (StGB / StPO)',
    frage: 'Wann liegt eine Körperverletzung nach § 223 StGB vor?',
    optionen: [
      'A) Wer eine andere Person körperlich misshandelt oder an der Gesundheit schädigt.',
      'B) Jede unhöfliche Bemerkung im Gespräch.',
      'C) Das bloße Fotografieren einer Person im Freien.',
      'D) Die Verweigerung von Auskünften über das Wetter.'
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: '§ 223 StGB schützt die körperliche Unversehrtheit. Tatbestände: 1. Körperliche Misshandlung (üble, unangemessene Behandlung), 2. Gesundheitsschädigung (Hervorrufen/Steigern eines krankhaften Zustands).'
  },
  {
    id: 'ihk-stgb-12',
    kategorie: 'Straf- und Strafverfahrensrecht (StGB / StPO)',
    frage: 'Welche Merkmale qualifizieren eine Körperverletzung zur "Gefährlichen Körperverletzung" nach § 224 StGB? (Wählen Sie zwei richtige Antworten)',
    optionen: [
      'A) Begehung mittels einer Waffe oder eines anderen gefährlichen Werkzeugs (z. B. Schlagstock, abgebrochene Flasche, Springerstiefel).',
      'B) Begehung mit einem anderen Beteiligten gemeinschaftlich (z. B. zu zweit auf ein Opfer einprügeln).',
      'C) Wenn der Täter jünger als 21 Jahre ist.',
      'D) Wenn die Tat an einem Sonntag stattfindet.'
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: 'Qualifikationen nach § 224 StGB: Beibringung von Gift, Waffe/Werkzeug, hinterlistiger Überfall, gemeinschaftliche Begehung, lebensgefährdende Behandlung.'
  },
  {
    id: 'ihk-stgb-13',
    kategorie: 'Straf- und Strafverfahrensrecht (StGB / StPO)',
    frage: 'Wann macht sich eine Sicherheitskraft der Freiheitsberaubung nach § 239 StGB schuldig?',
    optionen: [
      'A) Wenn sie einen Kunden ohne rechtfertigenden Grund (z. B. ohne Vorliegen der Voraussetzungen des § 127 StPO) einsperrt oder auf andere Weise der Freiheit beraubt.',
      'B) Wenn sie dem Kunden einen Hausverweis erteilt.',
      'C) Wenn sie einen Dieb bis zum Eintreffen der Polizei für 10 Minuten festhält.',
      'D) Wenn sie die Eingangstür der Dienststelle zur Nachtzeit abschließt.'
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Unberechtigtes Einsperren oder Festhalten ohne gesetzliche Rechtfertigung erfüllt den Straftatbestand der Freiheitsberaubung (§ 239 StGB).'
  },
  {
    id: 'ihk-stgb-14',
    kategorie: 'Straf- und Strafverfahrensrecht (StGB / StPO)',
    frage: 'Was versteht man unter Amtsanmaßung nach § 132 StGB? (Wählen Sie zwei richtige Antworten)',
    optionen: [
      'A) Wer sich unbefugt mit der Ausübung eines öffentlichen Amtes befasst.',
      'B) Wer eine Handlung vornimmt, welche nur kraft eines öffentlichen Amtes vorgenommen werden darf (z. B. Vorgabe, Polizist zu sein und Durchsuchung anordnen).',
      'C) Das Tragen einer vom Arbeitgeber gestellten Sicherheitsdienstuniform mit Firmenlogo.',
      'D) Das Rufen der Notrufnummer 110.'
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: 'Amtsanmaßung begeht, wer hoheitliche Befugnisse vortäuscht oder Amtshandlungen vornimmt, die ausschließlich staatlichen Amtsträgern zustehen.'
  },
  {
    id: 'ihk-stgb-15',
    kategorie: 'Straf- und Strafverfahrensrecht (StGB / StPO)',
    frage: 'Was ist ein Antragsdelikt im Strafrecht?',
    optionen: [
      'A) Eine Straftat, die grundsätzlich nur verfolgt wird, wenn der Geschädigte fristgerecht (innerhalb von 3 Monaten) einen Strafantrag stellt (z. B. Hausfriedensbruch, Beleidigung).',
      'B) Eine Straftat, die immer von Amts wegen verfolgt werden muss.',
      'C) Jede Tat, die im Ausland verübt wurde.',
      'D) Ein Delikt, bei dem der Täter einen Antrag auf Freispruch stellt.'
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Bei Antragsdelikten (§ 77b StGB) ist ein form- und fristgerechter Strafantrag des Verletzten Prozessvoraussetzung (Frist: 3 Monate ab Kenntnis).'
  },
  {
    id: 'ihk-stgb-16',
    kategorie: 'Straf- und Strafverfahrensrecht (StGB / StPO)',
    frage: 'Welche Delikte sind typische Offizialdelikte? (Wählen Sie zwei richtige Antworten)',
    optionen: [
      'A) Raub nach § 249 StGB.',
      'B) Brandstiftung nach § 306 StGB.',
      'C) Einfache Beleidigung nach § 185 StGB.',
      'D) Hausfriedensbruch nach § 123 StGB.'
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: 'Offizialdelikte (wie Raub, Mord, Brandstiftung, Diebstahl) werden von der Staatsanwaltschaft von Amts wegen ohne Strafantrag verfolgt.'
  },
  {
    id: 'ihk-stgb-17',
    kategorie: 'Straf- und Strafverfahrensrecht (StGB / StPO)',
    frage: 'Was regelt § 323c StGB (Unterlassene Hilfeleistung)?',
    optionen: [
      'A) Wer bei Unglücksfällen oder gemeiner Gefahr oder Not nicht Hilfe leistet, obwohl dies erforderlich und ihm nach den Umständen zuzumuten ist.',
      'B) Das Nichtbezahlen von Parkgebühren.',
      'C) Das Verweigern von Überstunden im Sicherheitsdienst.',
      'D) Die unterlassene Anzeige einer einfachen Beleidigung.'
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: '§ 323c StGB verpflichtet jedermann bei Unglücksfällen zur zumutbaren Hilfeleistung. Sicherheitsmitarbeiter haben durch ihre Garantenstellung oft noch gesteigerte Pflichten.'
  },
  {
    id: 'ihk-stgb-18',
    kategorie: 'Straf- und Strafverfahrensrecht (StGB / StPO)',
    frage: 'Was kennzeichnet den Tatbestand der Nötigung nach § 240 StGB? (Wählen Sie zwei richtige Antworten)',
    optionen: [
      'A) Wer einen Menschen rechtswidrig mit Gewalt oder durch Drohung mit einem empfindlichen Übel zu einer Handlung, Duldung oder Unterlassung nötigt.',
      'B) Die Anwendung von Gewalt oder Drohung muss als verwerflich anzusehen sein.',
      'C) Das rechtmäßige Festhalten eines Straftäters nach § 127 StPO.',
      'D) Die Ausübung des Hausrechts durch Aussprechen eines Hausverbots.'
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: 'Nötigung (§ 240 StGB) bestraft die rechtswidrige Willensbeugung mittels Gewalt oder Drohung mit empfindlichem Übel.'
  },
  {
    id: 'ihk-stgb-19',
    kategorie: 'Straf- und Strafverfahrensrecht (StGB / StPO)',
    frage: 'Wann spricht man von Notwehrhilfe im Strafrecht?',
    optionen: [
      'A) Wenn die Notwehrhandlung zugunsten eines Dritten geleistet wird, der gegenwärtig und rechtswidrig angegriffen wird.',
      'B) Wenn die Polizei per Telefon Anweisungen gibt.',
      'C) Wenn man dem Täter bei der Flucht hilft.',
      'D) Wenn man nach der Tat die Spuren beseitigt.'
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Notwehrhilfe (§ 32 Abs. 2 Alt. 2 StGB) ist die Abwehr eines gegenwärtigen rechtswidrigen Angriffs auf die Rechtsgüter einer anderen Person.'
  },

  // =========================================================================
  // 4. UMGANG MIT MENSCHEN & DEESKALATION (14 Fragen = 20 Punkte: 8x 1P, 6x 2P)
  // =========================================================================
  {
    id: 'ihk-menschen-1',
    kategorie: 'Umgang mit Menschen und Verhalten in Gefahrensituationen',
    frage: 'Was ist das oberste Ziel professioneller Kommunikation im Sicherheitsdienst?',
    optionen: [
      'A) Konflikte frühzeitig erkennen und durch deeskalierendes Verhalten gewaltfrei lösen.',
      'B) Dem Gegenüber stets die eigene körperliche Überlegenheit zu demonstrieren.',
      'C) Jedes Streitgespräch sofort mit Schlägen zu beenden.',
      'D) Kunden einzuschüchtern, damit sie keine Fragen mehr stellen.'
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Deeskalation und gewaltfreie Konfliktlösung stehen an erster Stelle, um Gefahren für alle Beteiligten zu minimieren.'
  },
  {
    id: 'ihk-menschen-2',
    kategorie: 'Umgang mit Menschen und Verhalten in Gefahrensituationen',
    frage: 'Welche Faktoren fördern die Entstehung von Frustration und Aggression bei Kunden? (Wählen Sie zwei richtige Antworten)',
    optionen: [
      'A) Lange Wartezeiten, unklare Anweisungen und respektloses Auftreten des Personals.',
      'B) Alkohol- und Drogenkonsum in Kombination mit überfüllten Räumen.',
      'C) Höfliche und transparente Kommunikation.',
      'D) Saubere und gut beleuchtete Eingangsbereiche.'
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: 'Frustration-Aggressions-Hypothese: Hindernisse bei der Zielerreichung (Warten, Abweisung, Alkohol) steigern Frust und Aggressionspotential.'
  },
  {
    id: 'ihk-menschen-3',
    kategorie: 'Umgang mit Menschen und Verhalten in Gefahrensituationen',
    frage: 'Was versteht man unter "Aktivem Zuhören" in der Deeskalation?',
    optionen: [
      'A) Dem Gesprächspartner aufmerksam zuhören, Blickkontakt halten, ausreden lassen und das Verstandene mit eigenen Worten zusammenfassend spiegeln (Paraphrasieren).',
      'B) Dem Gegenüber ständig ins Wort fallen, um die Dienstvorschrift zu zitieren.',
      'C) So tun als ob man zuhört, während man am Smartphone tippt.',
      'D) Nur auf die Fehler des anderen warten, um ihn zu unterbrechen.'
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Aktives Zuhören baut Emotionen ab, signalisiert Wertschätzung und klärt Missverständnisse vor einer Eskalation.'
  },
  {
    id: 'ihk-menschen-4',
    kategorie: 'Umgang mit Menschen und Verhalten in Gefahrensituationen',
    frage: 'Welche Distanzzonen unterscheidet die Körpersprache nach Edward T. Hall? (Wählen Sie zwei richtige Antworten)',
    optionen: [
      'A) Die Intimdistanz (unter ca. 50 cm), die im Dienst grundsätzlich geschützt und nicht unbefugt unterschritten werden sollte.',
      'B) Die persönliche und gesellschaftliche Distanz (ca. 1,20 m bis 3,50 m) für professionelle Kommunikation und Eigensicherung.',
      'C) Die kosmische Distanz von mindestens 50 Kilometern.',
      'D) Die Kampfdistanz von exakt 1 Zentimeter.'
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: 'Das Einhalten der persönlichen Distanzzone (> 1 m) ist zentral für Deeskalation und Eigensicherung (Reaktionszeit bei Angriffen).'
  },
  {
    id: 'ihk-menschen-5',
    kategorie: 'Umgang mit Menschen und Verhalten in Gefahrensituationen',
    frage: 'Wie verhält man sich deeskalierend gegenüber einer hochaggressiven Person?',
    optionen: [
      'A) Ruhig und bestimmt sprechen, offene Körperhaltung einnehmen, Sicherheitsabstand halten und Beleidigungen nicht persönlich nehmen.',
      'B) Die Person anschreien und auslachen.',
      'C) Der Person sofort drohen und sie am Kragen packen.',
      'D) Sich sofort umdrehen und weglaufen.'
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Souveräne Körpersprache, sachliche Sprache und Distanz verhindern die emotionale Aufschaukelung des Konflikts.'
  },
  {
    id: 'ihk-menschen-6',
    kategorie: 'Umgang mit Menschen und Verhalten in Gefahrensituationen',
    frage: 'Was versteht man unter dem "4-Ohren-Modell" von Friedemann Schulz von Thun? (Wählen Sie zwei richtige Antworten)',
    optionen: [
      'A) Eine Nachricht enthält 4 Aspekte: Sachinhalt, Selbstoffenbarung, Beziehung und Appell.',
      'B) Der Empfänger kann eine Nachricht auf verschiedenen Ebenen interpretieren, was häufig zu Missverständnissen führt.',
      'C) Menschen mit Brille hören viermal besser als Menschen ohne.',
      'D) Ein Funkgerät muss 4 Frequenzen gleichzeitig abhören.'
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: 'Schulz von Thun: 1. Sachinhalt, 2. Selbstkundgabe, 3. Beziehungshinweis, 4. Appell. Viele Konflikte entstehen auf der Beziehungsebene.'
  },
  {
    id: 'ihk-menschen-7',
    kategorie: 'Umgang mit Menschen und Verhalten in Gefahrensituationen',
    frage: 'Was kennzeichnet "Interkulturelle Kompetenz" im Sicherheitsdienst?',
    optionen: [
      'A) Das Bewusstsein und der respektvolle Umgang mit kulturellen Unterschieden, Normen und Kommunikationsmustern.',
      'B) Die Beherrschung aller Sprachen der Welt.',
      'C) Die Bevorzugung bestimmter Nationalitäten bei Einlasskontrollen.',
      'D) Das Ignorieren von religiösen Speise- und Verhaltensregeln.'
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Interkulturelle Kompetenz vermeidet Vorurteile und Missverständnisse durch respektvollen Umgang mit Menschen verschiedener Herkunft.'
  },
  {
    id: 'ihk-menschen-8',
    kategorie: 'Umgang mit Menschen und Verhalten in Gefahrensituationen',
    frage: 'Welche psychologischen Phänomene können in einer Menschenmenge (Massenpanik) auftreten? (Wählen Sie zwei richtige Antworten)',
    optionen: [
      'A) Herdenverhalten und Ansteckungseffekte (Nachahmen der Fluchtbewegung ohne Prüfung der Gefahr).',
      'B) Verminderte individuelle Hemmschwelle und herabgesetzte rationale Urteilsfähigkeit.',
      'C) Spontane juristische Fachdiskussionen aller Anwesenden.',
      'D) Vollständiges Einschlafen der Menge.'
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: 'Massenpsychologie: Anonymität senkt die Hemmschwelle, Emotionen und Fluchtimpulse übertragen sich rasend schnell auf die Menge.'
  },
  {
    id: 'ihk-menschen-9',
    kategorie: 'Umgang mit Menschen und Verhalten in Gefahrensituationen',
    frage: 'Was versteht man unter dem Begriff "Vorurteil"?',
    optionen: [
      'A) Ein vorgefasstes, meist negatives Urteil über eine Person oder Gruppe ohne vorherige sachliche Prüfung der Realität.',
      'B) Ein rechtskräftiges Gerichtsurteil des Bundesgerichtshofs.',
      'C) Eine wissenschaftliche Studie über Sicherheitsrisiken.',
      'D) Die Auswertung von Videoaufzeichnungen.'
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Vorurteile sind verallgemeinernde, unreflektierte Einstellungen, die im Sicherheitsdienst durch professionelle Sachlichkeit ersetzt werden müssen.'
  },
  {
    id: 'ihk-menschen-10',
    kategorie: 'Umgang mit Menschen und Verhalten in Gefahrensituationen',
    frage: 'Wie sollte ein Sicherheitsmitarbeiter reagieren, wenn er selbst in einem Konflikt beleidigt wird? (Wählen Sie zwei richtige Antworten)',
    optionen: [
      'A) Sachlich und professionell bleiben, Beleidigungen nicht auf persönlicher Ebene vergelten.',
      'B) Die Grenze klar aufzeigen, die Person verwarnen und bei Fortdauer das Hausrecht durchsetzen oder Strafanzeige erstatten.',
      'C) Den Betreffenden sofort mit doppelter Lautstärke zurückbeleidigen.',
      'D) Sofort körperliche Gewalt anwenden.'
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: 'Professionelle Distanz: Eigene Emotionen kontrollieren, Grenzen sachlich aufzeigen und rechtliche Konsequenzen ruhig ankündigen.'
  },
  {
    id: 'ihk-menschen-11',
    kategorie: 'Umgang mit Menschen und Verhalten in Gefahrensituationen',
    frage: 'Was bedeutet "Eigensicherung" im praktischen Sicherheitsdienst?',
    optionen: [
      'A) Vor jedem Eingreifen die Gefahrenlage einschätzen, Verstärkung anfordern, Abstand wahren und sich nicht leichtfertig in Lebensgefahr begeben.',
      'B) Sich immer vor dem Kunden verstecken und die Arbeit verweigern.',
      'C) Waffen ohne Genehmigung im Holster tragen.',
      'D) Ausschließlich im gepanzerten Fahrzeug sitzen bleiben.'
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Eigensicherung hat stets Vorrang vor Fremdschutz oder dem Schutz von Sachwerten: Lagebeurteilung, Abstand, Funkkontakt und Teamabsprache.'
  },
  {
    id: 'ihk-menschen-12',
    kategorie: 'Umgang mit Menschen und Verhalten in Gefahrensituationen',
    frage: 'Welche nonverbalen Signale deuten auf eine unmittelbar bevorstehende körperliche Aggression hin? (Wählen Sie zwei richtige Antworten)',
    optionen: [
      'A) Geballte Fäuste, vorgeschobenes Kinn, starrer Blickkontakt und schnelles Näherkommen.',
      'B) Muskelanspannung, Zähneknirschen und Entledigen von Kleidungsstücken (z. B. Jacke ausziehen).',
      'C) Ein entspanntes Lächeln und Gähnen.',
      'D) Das Binden der Schnürsenkel im Sitzen.'
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: 'Körperliche Warnsignale (Tunnelblick, Faustbildung, Distanzverringerung) erfordern sofortige Eigensicherungsmaßnahmen (Abstand, Schutzhaltung).'
  },
  {
    id: 'ihk-menschen-13',
    kategorie: 'Umgang mit Menschen und Verhalten in Gefahrensituationen',
    frage: 'Was versteht man unter dem "Halo-Effekt" in der Wahrnehmungspsychologie?',
    optionen: [
      'A) Ein einzelnes auffälliges Merkmal einer Person (z. B. Kleidung, Aussehen) überstrahlt alle anderen Eigenschaften und bestimmt das Gesamturteil.',
      'B) Der Schutzeffekt einer Kevlar-Weste.',
      'C) Das Nachleuchten von Notausgangsschildern.',
      'D) Die Blendwirkung von Taschenlampen im Dunkeln.'
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Der Halo-Effekt (Heiligenschein-Effekt) führt zu Fehleinschätzungen, indem man von einem Merkmal (z. B. Anzug = seriös) voreilig auf das Gesamtverhalten schließt.'
  },
  {
    id: 'ihk-menschen-14',
    kategorie: 'Umgang mit Menschen und Verhalten in Gefahrensituationen',
    frage: 'Wie reagiert man richtig bei einer Bombendrohung am Telefon? (Wählen Sie zwei richtige Antworten)',
    optionen: [
      'A) Ruhe bewahren, Anrufer ausreden lassen, genaue Notizen machen (Hintergrundgeräusche, Stimme, Text) und parallel die Leitstelle / Polizei alarmieren.',
      'B) W-Fragen stellen: Wo ist die Bombe? Wann explodiert sie? Wie sieht sie aus? Warum tun Sie das?',
      'C) Sofort auflegen und die Kollegen im Gebäude lautstark in Panik versetzen.',
      'D) Die Drohung als Scherz abtun und ignorieren.'
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: 'Bei Bombendrohungen: Checkliste nutzen, Stimme/Hintergrundgeräusche analysieren, Ruhe bewahren und unverzüglich nach Alarmplan handeln.'
  },

  // =========================================================================
  // 5. UNFALLVERHÜTUNGSVORSCHRIFTEN (DGUV V23) (7 Fragen = 10 Punkte: 4x 1P, 3x 2P)
  // =========================================================================
  {
    id: 'ihk-uvv-1',
    kategorie: 'Unfallverhütungsvorschriften (UVV)',
    frage: 'Welche DGUV Vorschrift ist die zentrale Unfallverhütungsvorschrift für Wach- und Sicherungsdienste?',
    optionen: [
      'A) DGUV Vorschrift 23 (bisherige BGV C7).',
      'B) DGUV Vorschrift 100 für Straßenbauarbeiten.',
      'C) Straßenverkehrs-Ordnung (StVO).',
      'D) Die Landesbauordnung.'
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'DGUV Vorschrift 23 regelt den Arbeitsschutz und die Unfallverhütung speziell für das Wach- und Sicherheitsgewerbe.'
  },
  {
    id: 'ihk-uvv-2',
    kategorie: 'Unfallverhütungsvorschriften (UVV)',
    frage: 'Welche Pflichten hat der Arbeitgeber bezüglich der Dienstanweisung nach DGUV V23?',
    optionen: [
      'A) Er muss für jede Bewachungsaufgabe eine schriftliche, objektbezogene Dienstanweisung erstellen und den Beschäftigten nachweislich aushändigen.',
      'B) Mündliche Zurufen vor Dienstbeginn reichen stets aus.',
      'C) Dienstanweisungen sind nur für leitende Angestellte erforderlich.',
      'D) Der Kunde muss die Dienstanweisung selbst schreiben.'
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Nach § 3 DGUV V23 muss der Unternehmer eine schriftliche Dienstanweisung aufstellen, die die allgemeinen und objektspezifischen Pflichten regelt.'
  },
  {
    id: 'ihk-uvv-3',
    kategorie: 'Unfallverhütungsvorschriften (UVV)',
    frage: 'Welche Anforderungen gelten nach DGUV V23 für den Einsatz von Diensthunden? (Wählen Sie zwei richtige Antworten)',
    optionen: [
      'A) Es dürfen nur geprüfte Hunde mit nachgewiesener Eignung (z. B. Schutzhundprüfung) von geeigneten Hundeführern geführt werden.',
      'B) Der Hund muss ein sicheres Halsband, Leine und bei Bedarf einen Maulkorb tragen.',
      'C) Jeder private Familienhund darf ohne Prüfung auf Baustellen eingesetzt werden.',
      'D) Diensthunde dürfen im Streifendienst ohne Leine frei herumlaufen.'
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: '§§ 14 ff. DGUV V23: Diensthunde müssen geprüfte Gebrauchshunde sein; sie dürfen nur von befähigten Hundeführern geleint eingesetzt werden.'
  },
  {
    id: 'ihk-uvv-4',
    kategorie: 'Unfallverhütungsvorschriften (UVV)',
    frage: 'Was schreibt die DGUV V23 für den bewaffneten Sicherheitsdienst vor? (Wählen Sie zwei richtige Antworten)',
    optionen: [
      'A) Schusswaffen und Munition müssen vom Arbeitgeber gestellt werden; das Führen privater Waffen im Dienst ist verboten.',
      'B) Der Beschäftigte muss vor der Waffenausgabe theoretisch und praktisch unterwiesen und im Schießen geübt sein.',
      'C) Sicherheitskräfte dürfen jede beliebige Waffe aus dem Internet privat im Dienst tragen.',
      'D) Schusswaffen dürfen nach Dienstende zu Hause unter dem Kopfkissen gelagert werden.'
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: '§§ 18 ff. DGUV V23: Keine privaten Waffen im Dienst! Waffen werden vom Betrieb gestellt, regelmäßige Schießnachweise und sichere Aufbewahrung im Tresor sind Pflicht.'
  },
  {
    id: 'ihk-uvv-5',
    kategorie: 'Unfallverhütungsvorschriften (UVV)',
    frage: 'Was schreibt die UVV für gefährliche Einzelarbeitsplätze (z. B. Nachtstreife auf unübersichtlichem Gelände) vor?',
    optionen: [
      'A) Es müssen geeignete Kontrollmaßnahmen (z. B. Personen-Notsignal-Anlagen / PNA, Totmannmelder oder regelmäßige Meldeintervalle per Funk) eingerichtet sein.',
      'B) Einzelarbeit ist nachts gesetzlich unter allen Umständen verboten.',
      'C) Der Mitarbeiter muss alle 5 Minuten laut rufen.',
      'D) Der Mitarbeiter muss seinen Dienst auf eigene Gefahr ohne Funkgerät versehen.'
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Bei Alleinarbeit nach DGUV Vorschrift 1 / V23 muss durch technische (PNA) oder organisatorische Kontrollen (Meldezeiten) die Rettungskette gewährleistet sein.'
  },
  {
    id: 'ihk-uvv-6',
    kategorie: 'Unfallverhütungsvorschriften (UVV)',
    frage: 'Welche Pflichten hat der Sicherheitsmitarbeiter beim Bemerken von Gefahrenquellen (z. B. offene Schächte, defekte Geländer)?',
    optionen: [
      'A) Er muss die Gefahrenstelle sofort absichern und unverzüglich der Leitstelle / dem Vorgesetzten melden.',
      'B) Er darf die Stelle ignorieren, solange sein Dienstplan nichts dazu sagt.',
      'C) Er muss den Schacht mit Zeitungen zudecken.',
      'D) Er muss bis zum Schichtende warten, bevor er etwas unternimmt.'
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Nach DGUV Vorschrift 1 und Dienstanweisung ist jede erkannte Gefahrenquelle unverzüglich abzusichern und zu protokollieren.'
  },
  {
    id: 'ihk-uvv-7',
    kategorie: 'Unfallverhütungsvorschriften (UVV)',
    frage: 'Welche persönliche Schutzausrüstung (PSA) muss der Arbeitgeber bei Bedarf stellen? (Wählen Sie zwei richtige Antworten)',
    optionen: [
      'A) Sicherheitsschuhe (S3) mit Durchtrittschutz und Zehenschutzkappe sowie Warnweste bei Arbeiten im Verkehrsbereich.',
      'B) Stichschutz- oder ballistische Schutzwesten bei gefährdeten Einsätzen (z. B. Geldtransport, Türsteherdienst).',
      'C) Maßgeschneiderte Luxus-Sonnenbrillen bekannter Modemarken.',
      'D) Private Armbanduhren aus Gold.'
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: 'Der Arbeitgeber muss gemäß Gefährdungsbeurteilung geeignete PSA (Sicherheitsschuhe, Warnwesten, Schutzwesten, Gehörschutz) kostenfrei bereitstellen.'
  },

  // =========================================================================
  // 6. GRUNDLAGEN DER SICHERHEITSTECHNIK (7 Fragen = 10 Punkte: 4x 1P, 3x 2P)
  // =========================================================================
  {
    id: 'ihk-technik-1',
    kategorie: 'Grundsätze der Sicherheitstechnik',
    frage: 'Was versteht man unter dem "Sicherheits-Grundsatz" bei der Verknüpfung technischer und personeller Maßnahmen?',
    optionen: [
      'A) Technik unterstützt und entlastet das Personal, kann jedoch den Menschen und dessen Entscheidungsfähigkeit im Sicherheitsdienst nicht vollständig ersetzen.',
      'B) Technik macht Wachpersonal zu 100 % überflüssig.',
      'C) Personal darf niemals technische Hilfsmittel verwenden.',
      'D) Brandmeldeanlagen ersetzen die Feuerwehr.'
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Sicherheitstechnik (EMA, BMA, CCTV) dient der Detektion und Meldung; die Bewertung und Intervention erfordert qualifiziertes Sicherheitspersonal.'
  },
  {
    id: 'ihk-technik-2',
    kategorie: 'Grundsätze der Sicherheitstechnik',
    frage: 'Welche Komponenten gehören typischerweise zu einer Einbruchmeldeanlage (EMA)? (Wählen Sie zwei richtige Antworten)',
    optionen: [
      'A) Melder (z. B. Bewegungsmelder, Magnetkontakte, Glasbruchmelder) und Zentrale.',
      'B) Signalgeber (optisch/akustisch) und Übertragungseinrichtung zur Notruf- und Serviceleitstelle (NSL).',
      'C) Automatische Sprinkleranlagen zur Flutung mit Wasser.',
      'D) Rauchgasabzugsanlagen im Treppenhaus.'
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: 'Eine EMA besteht aus: Meldern (Sensoren), Zentrale (Auswertung), Signalgebern (Sirene/Blitz) und Übertragungsgerät (ÜG) zur Leitstelle.'
  },
  {
    id: 'ihk-technik-3',
    kategorie: 'Grundsätze der Sicherheitstechnik',
    frage: 'Was ist ein Passiv-Infrarot-Melder (PIR-Melder)?',
    optionen: [
      'A) Ein Bewegungsmelder, der auf Temperaturänderungen (Wärmestrahlung von Körpern) im Erfassungsbereich reagiert.',
      'B) Ein Melder, der aktiv Mikrowellen wie ein Radargerät aussendet.',
      'C) Ein akustischer Schallsensor für brechendes Fensterglas.',
      'D) Ein mechanischer Türkontaktschalter.'
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'PIR-Melder empfangen passiv die Infrarot-Wärmestrahlung von sich bewegenden Personen im Überwachungsbereich.'
  },
  {
    id: 'ihk-technik-4',
    kategorie: 'Grundsätze der Sicherheitstechnik',
    frage: 'Welche Arten von Brandmeldern werden in Brandmeldeanlagen (BMA) eingesetzt? (Wählen Sie zwei richtige Antworten)',
    optionen: [
      'A) Optische Rauchmelder (Streulichtmelder) zur Erkennung von sichtbarem Rauch.',
      'B) Thermomelder (Wärmemelder), die auf Temperaturanstieg oder Maximaltemperatur ansprechen.',
      'C) Magnetkontakte an Fenstern.',
      'D) Erschütterungsmelder an Tresoren.'
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: 'BMA-Melder: Optische Rauchmelder, Thermomelder, Flammenmelder und Mehrsensormelder sowie manuelle Handfeuermelder (Druckknopfmelder).'
  },
  {
    id: 'ihk-technik-5',
    kategorie: 'Grundsätze der Sicherheitstechnik',
    frage: 'Was bedeutet die "Zwangsläufigkeit" bei einer Einbruchmeldeanlage nach VdS-Richtlinien?',
    optionen: [
      'A) Die Anlage kann nur dann scharfgeschaltet werden, wenn alle überwachten Fenster und Türen geschlossen und alle Melder im Ruhezustand sind.',
      'B) Jeder Mitarbeiter muss zwingend alle 10 Minuten den Alarmknopf drücken.',
      'C) Bei Alarm wird automatisch die Polizei gerufen, ohne dass man eingreifen kann.',
      'D) Die EMA schaltet sich um 22:00 Uhr zwangsweise ab.'
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Zwangsläufigkeit verhindert Falschalarme: Scharfschaltung ist nur möglich, wenn alle Sicherungsbereiche verriegelt und fehlerfrei sind.'
  },
  {
    id: 'ihk-technik-6',
    kategorie: 'Grundsätze der Sicherheitstechnik',
    frage: 'Welche mechanischen Sicherungseinrichtungen erhöhen den Einbruchschutz?',
    optionen: [
      'A) Profilzylinder mit Sicherungskarte, Querriegelschlösser, Pilzkopfverriegelungen an Fenstern und Sicherheitsglas (P6B).',
      'B) Einfache Bartschlösser an Holztüren.',
      'C) Deko-Aufkleber "Vorsicht Hund".',
      'D) Plastikriegel an Gartenhütten.'
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Mechanik vor Elektronik: Mechanische Widerstandselemente (Pilzkopfzapfen, Panzerriegel, Einbruchschutzverglasung) verzögern den Täterangriff physikalisch.'
  },
  {
    id: 'ihk-technik-7',
    kategorie: 'Grundsätze der Sicherheitstechnik',
    frage: 'Welche Aufgaben hat eine Notruf- und Serviceleitstelle (NSL) nach DIN EN 50518? (Wählen Sie zwei richtige Antworten)',
    optionen: [
      'A) Empfang, Protokollierung und qualifizierte Bearbeitung von Alarm- und Störmeldungen.',
      'B) Einleitung von Interventionsmaßnahmen gemäß dem vereinbarten Alarmplan (z. B. Entsendung von Interventionskräften, Benachrichtigung der Polizei/Feuerwehr).',
      'C) Automatische Bestrafung der Einbrecher vor Ort.',
      'D) Verkauf von Versicherungsverträgen während der Nachtschicht.'
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: 'Die nach DIN EN 50518 zertifizierte NSL empfängt 24/7 Alarme, verifiziert diese und leitet unverzüglich Interventionen nach Alarmplan ein.'
  },

  // =========================================================================
  // 7. DATENSCHUTZRECHT (DSGVO / BDSG) (3 Fragen = 5 Punkte: 1x 1P, 2x 2P)
  // =========================================================================
  {
    id: 'ihk-datenschutz-1',
    kategorie: 'Datenschutzrecht',
    frage: 'Was sind "personenbezogene Daten" nach Art. 4 Nr. 1 DSGVO?',
    optionen: [
      'A) Alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen (z. B. Name, Videoaufnahmen, Kennzeichen, IP-Adresse).',
      'B) Ausschließlich streng geheime Staatsgeheimnisse.',
      'C) Reine Wetterdaten und Luftdruckmessungen.',
      'D) Statistische Angaben über den Benzinpreis.'
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Personenbezogene Daten sind alle Angaben über persönliche oder sachliche Verhältnisse einer bestimmten oder bestimmbaren lebenden Person.'
  },
  {
    id: 'ihk-datenschutz-2',
    kategorie: 'Datenschutzrecht',
    frage: 'Welche Anforderungen gelten für die Videoüberwachung öffentlich zugänglicher Räume nach § 4 BDSG? (Wählen Sie zwei richtige Antworten)',
    optionen: [
      'A) Der Umstand der Videoüberwachung und die verantwortliche Stelle müssen durch geeignete Hinweisschilder (Piktogramm & Kontaktdaten) sofort erkennbar gemacht werden.',
      'B) Die Überwachung muss zur Wahrnehmung des Hausrechts oder berechtigter Interessen erforderlich sein und schutzwürdige Interessen der Betroffenen dürfen nicht überwiegen.',
      'C) Kameras dürfen heimlich in Umkleidekabinen und Toiletten installiert werden.',
      'D) Aufnahmen müssen für mindestens 10 Jahre im Internet veröffentlicht werden.'
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: 'Transparenzgebot (§ 4 BDSG / Art. 13 DSGVO): Deutliche Hinweisschilder vor Betreten des Erfassungsbereichs; keine Überwachung im Intimbereich.'
  },
  {
    id: 'ihk-datenschutz-3',
    kategorie: 'Datenschutzrecht',
    frage: 'Welche Pflichten treffen einen Sicherheitsmitarbeiter bezüglich des Datenschutzes im Dienst? (Wählen Sie zwei richtige Antworten)',
    optionen: [
      'A) Wahrung des Datengeheimnisses: Keine unbefugte Weitergabe von personenbezogenen Daten (z. B. Besucherlisten, Mitarbeiterdaten, Kamerabilder).',
      'B) Das Datengeheimnis und die Verschwiegenheitspflicht gelten auch nach Beendigung des Arbeitsverhältnisses fort.',
      'C) Er darf interessante Videoaufnahmen auf sein privates Handy kopieren und Freunden zeigen.',
      'D) Er darf Besucherdaten an Werbefirmen verkaufen.'
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: 'Verschwiegenheit und Datengeheimnis sind strikt einzuhalten; Verstöße können strafrechtliche Konsequenzen und Bußgelder nach sich ziehen.'
  },

  // =========================================================================
  // 8. WAFFENRECHT (WAFFG) (3 Fragen = 5 Punkte: 1x 1P, 2x 2P)
  // =========================================================================
  {
    id: 'ihk-waffen-1',
    kategorie: 'Umgang mit Waffen',
    frage: 'Was versteht man unter dem Begriff "Führen" einer Waffe nach dem Waffengesetz?',
    optionen: [
      'A) Die Ausübung der tatsächlichen Gewalt über eine Waffe außerhalb der eigenen Wohnung, Geschäftsräume oder des eigenen befriedeten Besitztums.',
      'B) Die Aufbewahrung der Waffe im verschlossenen Waffenschrank zu Hause.',
      'C) Das Herstellen von Patronen in einer Munitionsfabrik.',
      'D) Das Betrachten von Waffen in einem Museumskatalog.'
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'WaffG Anlage 1: Wer eine Waffe außerhalb der eigenen Räume/des eigenen Besitztums zugriffsbereit bei sich hat, "führt" die Waffe und benötigt in der Regel einen Waffenschein.'
  },
  {
    id: 'ihk-waffen-2',
    kategorie: 'Umgang mit Waffen',
    frage: 'Welche Gegenstände sind nach Anlage 2 Abschnitt 1 WaffG in Deutschland absolut verboten? (Wählen Sie zwei richtige Antworten)',
    optionen: [
      'A) Schlagringe, Wurfsterne und Butterflymesser.',
      'B) Schusswaffen mit Schalldämpfern oder Vorrichtungen, die das Ziel beleuchten / Nachtzielgeräte mit Bildwandler.',
      'C) Pfeffersprays mit der Aufschrift "Tierabwehrspray".',
      'D) Normale Taschenmesser mit zweihändiger Öffnung.'
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: 'Verbotene Waffen laut WaffG: Schlagringe, Wurfsterne, Butterflymesser, Faustmesser, Präzisionsschleudern sowie Zielbeleuchtungseinrichtungen an Schusswaffen.'
  },
  {
    id: 'ihk-waffen-3',
    kategorie: 'Umgang mit Waffen',
    frage: 'Welche Voraussetzungen müssen für den Transport einer Schusswaffe erfüllt sein, damit dies nicht als "Führen" gilt? (Wählen Sie zwei richtige Antworten)',
    optionen: [
      'A) Die Waffe muss ungeladen sein.',
      'B) Die Waffe muss sich in einem verschlossenen Behältnis (z. B. mit Schloss gesicherter Koffer) befinden (nicht zugriffsbereit).',
      'C) Die Waffe darf geladen im Handschuhfach des Autos liegen.',
      'D) Die Waffe muss griffbereit im Holster getragen werden.'
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: 'Erlaubnisfreier Transport (§ 12 WaffG): Ungeladen und in einem fest verschlossenen Behältnis (Schloss) von einem Ort zum anderen befördern.'
  },

  // =========================================================================
  // 9. GEWERBERECHT (§ 34a GewO / BewachV) (3 Fragen = 4 Punkte: 2x 1P, 1x 2P)
  // =========================================================================
  {
    id: 'ihk-gewerbe-1',
    kategorie: 'Gewerberecht (GewO / BewachV)',
    frage: 'Für welche Bewachungstätigkeiten ist der Nachweis der erfolgreichen Sachkundeprüfung (§ 34a GewO) gesetzlich zwingend vorgeschrieben?',
    optionen: [
      'A) Kontrollgänge im öffentlichen Verkehrsraum (z. B. Citystreife), Schutz vor Ladendieben (Kaufhausdetektiv), Einlasskontrollen im Türsteherbereich von Diskotheken sowie leitende Funktionen in Asyl- und Großunterkünften.',
      'B) Für jede beliebige Büroarbeit in einer Hausverwaltung.',
      'C) Ausschließlich für Bundeskanzler-Leibwächter.',
      'D) Nur für Hundeausführer im Park.'
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: '§ 34a Abs. 1a Satz 2 GewO schreibt die Sachkundeprüfung verbindlich vor für: 1. Citystreifen, 2. Kaufhausdetektive, 3. Türsteher (Gaststätten/Diskotheken), 4. Leitung bei Asylheimen und Großveranstaltungen.'
  },
  {
    id: 'ihk-gewerbe-2',
    kategorie: 'Gewerberecht (GewO / BewachV)',
    frage: 'Was ist das Bewacherregister (BWR) nach § 34a GewO?',
    optionen: [
      'A) Ein bundesweites elektronisches Register, in dem alle Bewachungsunternehmer und Wachpersonen erfasst, auf Zuverlässigkeit überprüft und freigegeben werden müssen.',
      'B) Eine private Mitgliederliste eines Sportvereins.',
      'C) Das Telefonbuch der regionalen Polizeiinspektion.',
      'D) Ein Register nur für ausländische Sicherheitsdienste.'
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Das Bewacherregister vernetzt Gewerbebehörden, Polizei und Verfassungsschutz. Wachpersonen dürfen erst nach behördlicher Freigabe im BWR eingesetzt werden.'
  },
  {
    id: 'ihk-gewerbe-3',
    kategorie: 'Gewerberecht (GewO / BewachV)',
    frage: 'Welche Angaben muss der Ausweis einer Wachperson nach § 18 BewachV enthalten? (Wählen Sie zwei richtige Antworten)',
    optionen: [
      'A) Name und Vorname der Wachperson, Lichtbild sowie Name und Anschrift des Gewerbetreibenden.',
      'B) Die Bewacherregister-Identifikationsnummer (BewR-ID) der Wachperson und des Gewerbebetriebs.',
      'C) Die private Wohnanschrift und Kontoverbindung der Wachperson.',
      'D) Die Noten des Schulabschlusszeugnisses.'
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: 'Dienstausweis nach § 18 BewachV: Name, Foto, Arbeitgeberdaten und BewR-ID. Private Daten (Wohnadresse) dürfen zum Schutz der Wachperson nicht auf dem Ausweis stehen!'
  }
];
