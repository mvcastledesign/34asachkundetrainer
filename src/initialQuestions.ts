/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question } from './types.ts';

export const INITIAL_QUESTIONS: Question[] = [
  // ==========================================
  // 1. Recht der öffentlichen Sicherheit und Ordnung (15 Fragen)
  // ==========================================
  {
    id: "q-oeff-1",
    kategorie: "Recht der öffentlichen Sicherheit und Ordnung",
    frage: "Definieren Sie die „Öffentliche Sicherheit“.",
    antwort: "Schutz der Unverletzlichkeit der Rechtsordnung (alle Gesetze), Schutz der Individualrechtsgüter (Leben, Gesundheit, Freiheit, Eigentum des Einzelnen) sowie der Schutz der staatlichen Einrichtungen.",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-oeff-2",
    kategorie: "Recht der öffentlichen Sicherheit und Ordnung",
    frage: "Definieren Sie die „Öffentliche Ordnung“.",
    antwort: "Die Gesamtheit der ungeschriebenen Regeln für das Verhalten in der Öffentlichkeit, die nach herrschender Auffassung als unerlässliche Voraussetzung für ein geordnetes Zusammenleben gelten (Sitte, Moral, Anstand).",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-oeff-3",
    kategorie: "Recht der öffentlichen Sicherheit und Ordnung",
    frage: "Welche Rechte hat ein Sicherheitsmitarbeiter im Vergleich zu einem Polizeibeamten?",
    antwort: "Der Sicherheitsmitarbeiter hat keine hoheitlichen Rechte. Er hat dieselben Rechte wie jeder Bürger (Jedermannsrechte) sowie die ihm vom Auftraggeber übertragenen Rechte (z. B. das Hausrecht). Die Polizei hat hoheitliche Befugnisse (Zwangsmittel, Festnahmerecht nach PolG).",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-oeff-4",
    kategorie: "Recht der öffentlichen Sicherheit und Ordnung",
    frage: "Was versteht man unter dem Begriff „Hoheitliche Rechte“?",
    antwort: "Rechte, die exklusiv dem Staat und seinen Behörden (z. B. Polizei, Zoll, Ordnungsamt) zur Durchsetzung von Recht und Gesetz übertragen sind.",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-oeff-5",
    kategorie: "Recht der öffentlichen Sicherheit und Ordnung",
    frage: "Was regelt das Gewaltmonopol des Staates?",
    antwort: "Dass grundsätzlich nur der Staat (durch seine Organe) physische Gewalt zur Durchsetzung von Rechten anwenden darf. Ausnahmen für Privatpersonen sind nur die Notrechte (Notwehr, Notstand, Selbsthilfe).",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-oeff-6",
    kategorie: "Recht der öffentlichen Sicherheit und Ordnung",
    frage: "Was bedeutet „Subsidiarität“ der privaten Sicherheitsdienste?",
    antwort: "Private Sicherheitsdienste arbeiten untergeordnet (subsidiär) zum Staat. Sie ersetzen nicht die Polizei, sondern unterstützen präventiv im privaten Auftrag.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-oeff-7",
    kategorie: "Recht der öffentlichen Sicherheit und Ordnung",
    frage: "Wann liegt eine Gefahr für die öffentliche Sicherheit vor?",
    antwort: "Wenn eine Situation eintritt, bei der mit hinreichender Wahrscheinlichkeit ein Schaden für ein geschütztes Rechtsgut (z. B. Sachbeschädigung, Körperverletzung) droht.",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-oeff-8",
    kategorie: "Recht der öffentlichen Sicherheit und Ordnung",
    frage: "Darf ein Sicherheitsmitarbeiter eine Person im öffentlichen Raum Platzverweise erteilen?",
    antwort: "Nein, Platzverweise im öffentlichen Raum darf nur die Polizei oder das Ordnungsamt erteilen. Auf befriedetem Besitztum (Privatgelände) kann der Sicherheitsmitarbeiter dies jedoch über das Hausrecht (Hausverbot) tun.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-oeff-9",
    kategorie: "Recht der öffentlichen Sicherheit und Ordnung",
    frage: "Was ist ein „Rechtsgut“?",
    antwort: "Ein vom Gesetz geschütztes Interesse oder Gut eines Einzelnen (z. B. Leben, Ehre, Eigentum) oder der Allgemeinheit (z. B. Umweltschutz, Staatsaufbau).",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-oeff-10",
    kategorie: "Recht der öffentlichen Sicherheit und Ordnung",
    frage: "In welchem Verhältnis stehen Sicherheitsdienst und Polizei am Einsatzort bei einer Straftat?",
    antwort: "Die Polizei übernimmt sofort die Einsatzleitung (Sicherungs- und Ermittlungshoheit). Der Sicherheitsdienst ist zeugenpflichtig und muss den Anweisungen der Polizei Folge leisten.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-oeff-11",
    kategorie: "Recht der öffentlichen Sicherheit und Ordnung",
    frage: "Was ist der Unterschied zwischen materiell und formellem Recht?",
    antwort: "Materielles Recht regelt das „Was“ (Inhalte, Pflichten, Strafmaß, z. B. StGB, BGB). Formelles Recht regelt das „Wie“ (Verfahren zur Durchsetzung, z. B. StPO).",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-oeff-12",
    kategorie: "Recht der öffentlichen Sicherheit und Ordnung",
    frage: "Darf ein Sicherheitsmitarbeiter eine Verkehrskontrolle auf einer öffentlichen Straße durchführen?",
    antwort: "Nein, das ist eine hoheitliche Aufgabe und der Polizei vorbehalten.",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-oeff-13",
    kategorie: "Recht der öffentlichen Sicherheit und Ordnung",
    frage: "Gilt die Strafprozessordnung (StPO) auch für private Sicherheitskräfte?",
    antwort: "Ja, bezüglich der Jedermannsrechte (wie § 127 Abs. 1 StPO), ansonsten regelt sie primär die Arbeit von Staatsanwaltschaft und Polizei.",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-oeff-14",
    kategorie: "Recht der öffentlichen Sicherheit und Ordnung",
    frage: "Was ist der Zweck des Privatrechts im Gegensatz zum Öffentlichen Recht?",
    antwort: "Das Privatrecht regelt die Rechtsbeziehungen von rechtlich gleichgestellten Personen (Bürger untereinander). Das Öffentliche Recht regelt das Über- und Unterordnungsverhältnis zwischen Staat und Bürger.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-oeff-15",
    kategorie: "Recht der öffentlichen Sicherheit und Ordnung",
    frage: "Warum ist die Abgrenzung zwischen öffentlichem Raum und privatem Gelände für Sie so wichtig?",
    antwort: "Weil auf privatem Gelände das Hausrecht des Eigentümers gilt, welches mir übertragen werden kann, während im öffentlichen Raum ausschließlich die Jedermannsrechte gelten.",
    schwierigkeit: "Schwer"
  },

  // ==========================================
  // 2. Gewerberecht (GewO / BewachV) (15 Fragen)
  // ==========================================
  {
    id: "q-gew-1",
    kategorie: "Gewerberecht (GewO / BewachV)",
    frage: "Welcher Paragraph der Gewerbeordnung ist das Fundament Ihres Berufs?",
    antwort: "§ 34a GewO (Bewachungsgewerbe).",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-gew-2",
    kategorie: "Gewerberecht (GewO / BewachV)",
    frage: "Was ist der Unterschied zwischen einer Unterrichtungsverfahren und einer Sachkundeprüfung?",
    antwort: "Die Unterrichtung (§ 34a Abs. 1a Satz 2 GewO) beinhaltet nur die Teilnahme an einem Lehrgang ohne Prüfung (reicht für einfache Tätigkeiten wie Revierdienst). Die Sachkundeprüfung erfordert das Bestehen einer schriftlichen und mündlichen Prüfung (vorgeschrieben für u. a. Türsteher, Kaufhausdetektive, Flüchtlingsunterkünfte).",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-gew-3",
    kategorie: "Gewerberecht (GewO / BewachV)",
    frage: "Für welche Tätigkeiten ist die Sachkundeprüfung zwingend erforderlich?",
    antwort: "Bestreifung von Fußgängerzonen/öffentlichen Verkehrsflächen, Kaufhausdetektive, Türsteher bei Diskotheken, leitende Funktionen in Flüchtlingsunterkünften und leitende Funktionen bei Großveranstaltungen.",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-gew-4",
    kategorie: "Gewerberecht (GewO / BewachV)",
    frage: "Was ist das Bewacherregister?",
    antwort: "Ein elektronisches, bundesweites Register, in dem alle Bewachungsunternehmer und das Wachpersonal registriert und behördlich überprüft werden müssen.",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-gew-5",
    kategorie: "Gewerberecht (GewO / BewachV)",
    frage: "Wann darf ein Mitarbeiter mit der Bewachung beginnen?",
    antwort: "Erst nach der erfolgreichen Registrierung und Freigabe (Status „aktiv“) durch die zuständige Behörde im Bewacherregister.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-gew-6",
    kategorie: "Gewerberecht (GewO / BewachV)",
    frage: "Welche Angaben muss der Dienstausweis einer Wachperson enthalten?",
    antwort: "Name und Vorname der Wachperson, Name und Anschrift des Gewerbetreibenden, Lichtbild der Wachperson, Unterschrift des Gewerbetreibenden (oder Bevollmächtigten) und die eindeutige Identifikationsnummer aus dem Bewacherregister.",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-gew-7",
    kategorie: "Gewerberecht (GewO / BewachV)",
    frage: "Wann und wo muss das Namensschild oder die Kennzeichnung getragen werden?",
    antwort: "Wachpersonen, die Tätigkeiten ausführen, für die die Sachkundeprüfung Pflicht ist (z. B. Citystreife, Türsteher), müssen ein sichtbares Schild mit ihrem Namen oder einer Kennnummer sowie dem Namen des Sicherheitsunternehmens tragen.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-gew-8",
    kategorie: "Gewerberecht (GewO / BewachV)",
    frage: "Welche Haftpflichtversicherung muss der Gewerbetreibende nachweisen?",
    antwort: "Eine Haftpflichtversicherung mit gesetzlich vorgeschriebenen Mindestdeckungssummen für Personen-, Sach- und Vermögensschäden sowie das Abhandenkommen bewachter Sachen.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-gew-9",
    kategorie: "Gewerberecht (GewO / BewachV)",
    frage: "Was versteht man unter dem „Beschäftigungsverbot“ im Gewerberecht?",
    antwort: "Der Unternehmer darf Personen nicht beschäftigen, die nicht im Bewacherregister freigegeben sind, denen die Zuverlässigkeit fehlt oder die nicht die nötige Qualifikation (Unterrichtung/Sachkunde) vorweisen.",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-gew-10",
    kategorie: "Gewerberecht (GewO / BewachV)",
    frage: "Welche Pflichten hat der Unternehmer bei der Betriebseinstellung?",
    antwort: "Er muss die Gewerbeabmeldung vornehmen und das Personal im Bewacherregister unverzüglich abmelden.",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-gew-11",
    kategorie: "Gewerberecht (GewO / BewachV)",
    frage: "Welche Behörde überwacht die Einhaltung des § 34a GewO?",
    antwort: "Das zuständige Ordnungsamt, das Landratsamt oder in manchen Bundesländern die Kriminalpolizei bzw. die zuständige Prüfungskommission bezüglich der Prüfungen.",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-gew-12",
    kategorie: "Gewerberecht (GewO / BewachV)",
    frage: "Was regelt § 4 der Bewachungsverordnung (BewachV)?",
    antwort: "Die Pflichten zur Ausstellung und zum Mitführen des Dienstausweises.",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-gew-13",
    kategorie: "Gewerberecht (GewO / BewachV)",
    frage: "Darf die Bekleidung eines Sicherheitsmitarbeiters der einer Polizeivollzugsbeamten ähneln?",
    antwort: "Nein. Die Dienstkleidung darf nicht zu Verwechslungen mit Behörden (Polizei, Zoll) führen. Abzeichen und Uniformteile müssen sich deutlich unterscheiden.",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-gew-14",
    kategorie: "Gewerberecht (GewO / BewachV)",
    frage: "Was passiert, wenn eine Wachperson ihren Dienstausweis verliert?",
    antwort: "Der Verlust muss unverzüglich dem Arbeitgeber gemeldet werden, damit dieser einen Ersatz ausstellt und den Verlust ggf. im Register vermerkt.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-gew-15",
    kategorie: "Gewerberecht (GewO / BewachV)",
    frage: "Ist das Einbehalten eines Personalausweises als Pfand an einer Werkszufahrt gewerberechtlich erlaubt?",
    antwort: "Nein, laut Personalausweisgesetz darf der Ausweis nicht als Pfand genommen werden. Das Notieren der Daten oder das Ausgeben eines Besucherausweises im Tausch gegen eine andere unkritische Karte ist erlaubt.",
    schwierigkeit: "Mittel"
  },

  // ==========================================
  // 3. Bürgerliches Gesetzbuch (BGB) (15 Fragen)
  // ==========================================
  {
    id: "q-bgb-1",
    kategorie: "Bürgerliches Gesetzbuch (BGB)",
    frage: "Erklären Sie den Unterschied zwischen Eigentum und Besitz an einem konkreten Beispiel.",
    antwort: "Das Sicherheitsunternehmen kauft ein Funkgerät (Eigentümer, § 903 BGB). Im Dienst nutzt der Sicherheitsmitarbeiter das Funkgerät (Besitzer, § 854 BGB, hat die tatsächliche Gewalt).",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-bgb-2",
    kategorie: "Bürgerliches Gesetzbuch (BGB)",
    frage: "Was versteht das BGB unter „Verbotener Eigenmacht“ (§ 858 BGB)?",
    antwort: "Die Entziehung oder Störung des Besitzes ohne den Willen des Besitzers und ohne gesetzliche Erlaubnis. Sie ist rechtswidrig.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-bgb-3",
    kategorie: "Bürgerliches Gesetzbuch (BGB)",
    frage: "Wann darf man „Besitzwehr“ anwenden (§ 859 Abs. 1 BGB)?",
    antwort: "Sofort, um sich einer aktuellen verbotenen Eigenmacht (z. B. jemand will mir die Taschenlampe entreißen) mit verhältnismäßiger Gewalt zu erwehren.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-bgb-4",
    kategorie: "Bürgerliches Gesetzbuch (BGB)",
    frage: "Wann darf man „Besitzkehr“ anwenden (§ 859 Abs. 2 BGB)?",
    antwort: "Wenn eine bewegliche Sache durch verbotene Eigenmacht weggenommen wurde, darf sie dem Täter auf frischer Tat oder im Rahmen der direkten Verfolgung wieder abgenommen werden.",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-bgb-5",
    kategorie: "Bürgerliches Gesetzbuch (BGB)",
    frage: "Was regelt das Hausrecht und worauf basiert es im BGB?",
    antwort: "Es basiert on dem Eigentums- (§ 903) und Besitzrecht (§ 854) und erlaubt dem Inhaber zu bestimmen, wer das Grundstück/Gebäude betreten darf und wer es verlassen muss.",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-bgb-6",
    kategorie: "Bürgerliches Gesetzbuch (BGB)",
    frage: "Was ist der „Defensive Notstand“ (§ 228 BGB)?",
    antwort: "Die Beschädigung oder Zerstörung einer fremden Sache, um eine Gefahr abzuwenden, die von dieser Sache selbst ausgeht (z. B. das Erschießen eines angreifenden Kampfhundes). Der Schaden darf nicht außer Verhältnis zur Gefahr stehen.",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-bgb-7",
    kategorie: "Bürgerliches Gesetzbuch (BGB)",
    frage: "Was ist der „Aggressive Notstand“ (§ 904 BGB)?",
    antwort: "Die Einwirkung auf eine fremde, unbeteiligte Sache, um eine gegenwärtige Gefahr abzuwenden (z. B. das Aufbrechen einer fremden Gartenhütte, um sich vor einem schweren Hagelsturm zu retten).",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-bgb-8",
    kategorie: "Bürgerliches Gesetzbuch (BGB)",
    frage: "Was besagt die Allgemeine Selbsthilfe nach § 229 BGB?",
    antwort: "Wer zum Zwecke der Selbsthilfe eine Sache wegnimmt, zerstört oder einen Verpflichteten, der der Flucht verdächtig ist, festnimmt, handelt nicht widerrechtlich, wenn obrigkeitliche Hilfe nicht rechtzeitig zu erlangen ist.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-bgb-9",
    kategorie: "Bürgerliches Gesetzbuch (BGB)",
    frage: "Nennen Sie die Voraussetzungen für die Allgemeine Selbsthilfe (§ 229 BGB).",
    antwort: "Bestehen eines zivilrechtlichen Anspruchs (z. B. Schadensersatz), obrigkeitliche Hilfe ist nicht rechtzeitig erreichbar, Fluchtverdacht des Schuldners und die Gefahr, dass der Anspruch sonst vereitelt wird.",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-bgb-10",
    kategorie: "Bürgerliches Gesetzbuch (BGB)",
    frage: "Was ist der Unterschied zwischen Notwehr im BGB (§ 227) und im StGB (§ 32)?",
    antwort: "Inhaltlich sind sie identisch (Abwehr eines gegenwärtigen, rechtswidrigen Angriffs). § 227 BGB schließt die zivilrechtliche Schadensersatzpflicht aus; § 32 StGB schließt die strafrechtliche Strafbarkeit aus.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-bgb-11",
    kategorie: "Bürgerliches Gesetzbuch (BGB)",
    frage: "Was bedeutet Schikaneverbot (§ 226 BGB)?",
    antwort: "Die Ausübung eines Rechts ist unzulässig, wenn sie nur den Zweck haben kann, einem anderen Schaden zuzufügen (z. B. unbegründete, rein schikanöse Einlasskontrollen).",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-bgb-12",
    kategorie: "Bürgerliches Gesetzbuch (BGB)",
    frage: "Ab welchem Alter ist man deliktsfähig (haftbar für Schäden)?",
    antwort: "Bedingt ab dem 7. Lebensjahr (im Straßenverkehr ab dem 10. Lebensjahr), voll deliktsfähig ab dem 18. Lebensjahr (§ 828 BGB).",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-bgb-13",
    kategorie: "Bürgerliches Gesetzbuch (BGB)",
    frage: "Was ist eine juristische Person?",
    antwort: "Eine Personenvereinigung oder Vermögensmasse, die vom Gesetz als rechtsfähig anerkannt ist (z. B. GmbH, AG, eingetragener Verein).",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-bgb-14",
    kategorie: "Bürgerliches Gesetzbuch (BGB)",
    frage: "Was versteht man unter einer „Sache“ im Sinne des BGB?",
    antwort: "Nach § 90 BGB sind Sachen nur körperliche Gegenstände. (Tiere sind keine Sachen, werden aber rechtlich weitgehend so behandelt, § 90a BGB).",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-bgb-15",
    kategorie: "Bürgerliches Gesetzbuch (BGB)",
    frage: "Sie halten einen Ladendieb fest, der flüchten will, bis die Polizei kommt. Welches Recht nutzen Sie, wenn Sie den Diebstahlschaden sichern wollen?",
    antwort: "Die Allgemeine Selbsthilfe (§ 229 BGB) zur Sicherung des Herausgabeanspruchs der Ware sowie das Festnahmerecht nach § 127 Abs. 1 StPO.",
    schwierigkeit: "Schwer"
  },

  // ==========================================
  // 4. Straf- und Strafverfahrensrecht (StGB / StPO) (15 Fragen)
  // ==========================================
  {
    id: "q-st-1",
    kategorie: "Straf- und Strafverfahrensrecht (StGB / StPO)",
    frage: "Wie lautet die Definition von Notwehr (§ 32 StGB)?",
    antwort: "Notwehr ist die Verteidigung, die erforderlich ist, um einen gegenwärtigen, rechtswidrigen Angriff von sich oder einem anderen (Nothilfe) abzuwenden.",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-st-2",
    kategorie: "Straf- und Strafverfahrensrecht (StGB / StPO)",
    frage: "Wann ist ein Angriff „gegenwärtig“?",
    antwort: "Wenn er unmittelbar bevorsteht, gerade stattfindet oder noch andauert.",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-st-3",
    kategorie: "Straf- und Strafverfahrensrecht (StGB / StPO)",
    frage: "Wann ist ein Angriff „rechtswidrig“?",
    antwort: "Wenn der Angreifer kein Recht zu diesem Angriff hat (d. h. der Angriff steht im Widerspruch zur Rechtsordnung).",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-st-4",
    kategorie: "Straf- und Strafverfahrensrecht (StGB / StPO)",
    frage: "Was versteht man unter dem Recht zur vorläufigen Festnahme (§ 127 Abs. 1 StPO)?",
    antwort: "Das Jedermannsrecht, eine Person ohne richterlichen Befehl vorläufig festzunehmen, wenn sie auf frischer Tat betroffen oder verfolgt wird, fluchtverdächtig ist oder ihre Identität nicht sofort festgestellt werden kann.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-st-5",
    kategorie: "Straf- und Strafverfahrensrecht (StGB / StPO)",
    frage: "Was bedeutet „auf frischer Tat betroffen“?",
    antwort: "Der Täter wird während der Tatausführung oder unmittelbar danach am Tatort wahrgenommen.",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-st-6",
    kategorie: "Straf- und Strafverfahrensrecht (StGB / StPO)",
    frage: "Darf ein Sicherheitsmitarbeiter einen Festgenommenen nach § 127 Abs. 1 StPO durchsuchen?",
    antwort: "Grundsätzlich nein, das ist Sache der Polizei. Ausnahme: Zur Eigensicherung (Suche nach gefährlichen Gegenständen/Waffen), wenn ein konkreter Verdacht besteht.",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-st-7",
    kategorie: "Straf- und Strafverfahrensrecht (StGB / StPO)",
    frage: "Was ist der Unterschied zwischen einem Rechtfertigungsgrund und einem Entschuldigungsgrund?",
    antwort: "Ein Rechtfertigungsgrund (z. B. Notwehr) macht die Tat rechtmäßig. Ein Entschuldigungsgrund (z. B. Notwehrexzess wegen schwerer Furcht) lässt die Tat zwar rechtswidrig, aber der Täter handelt ohne Schuld und wird nicht bestraft.",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-st-8",
    kategorie: "Straf- und Strafverfahrensrecht (StGB / StPO)",
    frage: "Was ist ein Rechtfertigender Notstand (§ 34 StGB)?",
    antwort: "Wer in einer gegenwärtigen, nicht anders abwendbaren Gefahr für Leben, Leib, Freiheit, Ehre, Eigentum oder ein anderes Rechtsgut eine Tat begeht, um die Gefahr von sich oder einem anderen abzuwenden, handelt nicht rechtswidrig, wenn das geschützte Interesse das beeinträchtigte wesentlich überwiegt.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-st-9",
    kategorie: "Straf- und Strafverfahrensrecht (StGB / StPO)",
    frage: "Was ist eine „Körperverletzung im Amt“ (§ 340 StGB)? Kann ein Sicherheitsmitarbeiter diese begehen?",
    antwort: "Nein. Diese Straftat kann nur von Amtsträgern (z. B. Polizisten) begangen werden. Ein Sicherheitsmitarbeiter wird wegen einfacher oder gefährlicher Körperverletzung (§ 223, § 224 StGB) bestraft.",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-st-10",
    kategorie: "Straf- und Strafverfahrensrecht (StGB / StPO)",
    frage: "Was unterscheidet Diebstahl (§ 242 StGB) von Raub (§ 249 StGB)?",
    antwort: "Diebstahl ist die Wegnahme einer fremden beweglichen Sache mit Zueignungsabsicht. Raub ist Diebstahl unter Anwendung von Gewalt gegen eine Person oder unter Anwendung von Drohungen mit gegenwärtiger Gefahr für Leib oder Leben.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-st-11",
    kategorie: "Straf- und Strafverfahrensrecht (StGB / StPO)",
    frage: "Was ist Hausfriedensbruch (§ 123 StGB)?",
    antwort: "Das unbefugte Eindringen in die Wohnung, in die Geschäftsräume oder in das befriedete Besitztum eines anderen oder das Verweilen trotz der Aufforderung des Berechtigten, sich zu entfernen.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-st-12",
    kategorie: "Straf- und Strafverfahrensrecht (StGB / StPO)",
    frage: "Wann ist eine Sachbeschädigung (§ 303 StGB) strafbar?",
    antwort: "Wer rechtswidrig eine fremde Sache beschädigt oder zerstört. Auch die unbefugte Veränderung des Erscheinungsbildes (z. B. Graffiti) fällt darunter. Der Versuch ist strafbar.",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-st-13",
    kategorie: "Straf- und Strafverfahrensrecht (StGB / StPO)",
    frage: "Was versteht man unter „Unterlassener Hilfeleistung“ (§ 323c StGB)?",
    antwort: "Wer bei Unglücksfällen oder gemeiner Gefahr oder Not nicht Hilfe leistet, obwohl dies erforderlich und ihm nach den Umständen zuzumuten ist (insb. ohne erhebliche eigene Gefahr).",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-st-14",
    kategorie: "Straf- und Strafverfahrensrecht (StGB / StPO)",
    frage: "Was ist ein Antragsdelikt? Nennen Sie ein Beispiel.",
    antwort: "Eine Straftat, die grundsätzlich nur strafrechtlich verfolgt wird, wenn der Geschädigte einen Strafantrag stellt (z. B. einfacher Hausfriedensbruch oder Beleidigung).",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-st-15",
    kategorie: "Straf- und Strafverfahrensrecht (StGB / StPO)",
    frage: "Was ist der Unterschied zwischen Mittäterschaft und Beihilfe?",
    antwort: "Mittäter (§ 25 Abs. 2 StGB) führen die Tat gemeinschaftlich aus. Der Gehilfe (§ 27 StGB) leistet lediglich Beihilfe, indem er die Haupttat eines anderen bewusst unterstützt (z. B. Schmiere stehen).",
    schwierigkeit: "Schwer"
  },

  // ==========================================
  // 5. Umgang mit Menschen und Verhalten in Gefahrensituationen (15 Fragen)
  // ==========================================
  {
    id: "q-mensch-1",
    kategorie: "Umgang mit Menschen und Verhalten in Gefahrensituationen",
    frage: "Warum ist das Beherrschen von Deeskalationstechniken für eine Sicherheitskraft essenziell?",
    antwort: "Um Konflikte gewaltfrei zu lösen, den Eigenschutz zu gewährleisten, die Professionalität des Unternehmens zu wahren und rechtliche Konsequenzen durch körperliche Auseinandersetzungen zu vermeiden.",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-mensch-2",
    kategorie: "Umgang mit Menschen und Verhalten in Gefahrensituationen",
    frage: "Welche Rolle spielt die Körpersprache (Nonverbale Kommunikation) im Konflikt?",
    antwort: "Sie macht über 80 % der Kommunikation aus. Eine aggressive Haltung (verschränkte Arme, geballte Fäuste) eskaliert; eine offene, stabile Haltung mit sichtbaren Händen wirkt deeskalierend und schützt gleichzeitig.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-mensch-3",
    kategorie: "Umgang mit Menschen und Verhalten in Gefahrensituationen",
    frage: "Was versteht man unter „Aktivem Zuhören“?",
    antwort: "Dem Gegenüber volle Aufmerksamkeit schenken, ausreden lassen, das Gehörte in eigenen Worten kurz zusammenfassen („Sie sind also verärgert, weil...“) und durch Nicken signalisieren, dass man dem Gespräch folgt.",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-mensch-4",
    kategorie: "Umgang mit Menschen und Verhalten in Gefahrensituationen",
    frage: "Wie verhalten Sie sich gegenüber einer stark alkoholisierten, pöbelnden Person?",
    antwort: "Ruhig und bestimmt sprechen, einfache und kurze Sätze verwenden, ausreichenden Sicherheitsabstand einhalten (wegen unvorhersehbarer Reaktionen) und keine Diskussionen auf intellektueller Ebene anfangen.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-mensch-5",
    kategorie: "Umgang mit Menschen und Verhalten in Gefahrensituationen",
    frage: "Was ist ein „Vorurteil“ und wie beeinflusst es Ihre Arbeit?",
    antwort: "Eine feste, meist negative Meinung über Personengruppen ohne sachliche Grundlage. Im Dienst führt es zu Fehleinschätzungen und unprofessionellem Verhalten. Jeder Kunde/Bürger muss neutral behandelt werden.",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-mensch-6",
    kategorie: "Umgang mit Menschen und Verhalten in Gefahrensituationen",
    frage: "Was beschreibt das „Sender-Empfänger-Modell“?",
    antwort: "Ein Sender kodiert eine Nachricht und schickt sie an einen Empfänger. Der Empfänger dekodiert sie. Missverständnisse entstehen, wenn der Empfänger die Nachricht anders interpretiert, als der Sender es gemeint hat.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-mensch-7",
    kategorie: "Umgang mit Menschen und Verhalten in Gefahrensituationen",
    frage: "Was versteht man unter dem Begriff „Frustrations-Aggressions-Theorie“?",
    antwort: "Frustration (Enttäuschung über ein Hindernis oder Nichterreichen eines Ziels) führt häufig zu Aggression. Wenn der Zugang verweigert wird, entlädt sich dieser Frust an der Sicherheitskraft.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-mensch-8",
    kategorie: "Umgang mit Menschen und Verhalten in Gefahrensituationen",
    frage: "Wie reagieren Sie bei einer Massenpanik während einer Großveranstaltung?",
    antwort: "Ruhe bewahren und über Lautsprecher/Megafon klare, beruhigende Anweisungen geben. Fluchtwege öffnen, Menschenmassen zu den Notausgängen leiten, gestürzte Personen aufrichten und Rettungskräfte einweisen.",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-mensch-9",
    kategorie: "Umgang mit Menschen und Verhalten in Gefahrensituationen",
    frage: "Warum sollten Sie im Dienst aggressive Personen immer mit „Sie“ ansprechen?",
    antwort: "Das „Sie“ schafft psychologische Distanz, drückt Respekt aus und wirkt in der Regel deeskalierend. Ein „Du“ wird oft als Respektlosigkeit oder Provokation empfunden.",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-mensch-10",
    kategorie: "Umgang mit Menschen und Verhalten in Gefahrensituationen",
    frage: "Was versteht man unter der „sozialen Distanzzone“?",
    antwort: "Der Bereich von ca. 1,20 m bis 3,50 m Abstand zum Gegenüber. Das ist der ideale Abstand für Gespräche mit Fremden im Dienst, da er Sicherheit bietet und nicht bedrohlich wirkt.",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-mensch-11",
    kategorie: "Umgang mit Menschen und Verhalten in Gefahrensituationen",
    frage: "Wie gehen Sie mit Beschwerden von Kunden um?",
    antwort: "Sachlich bleiben, die Beschwerde ernst nehmen, Notizen machen, sich nicht persönlich angegriffen fühlen und eine Lösung anbieten oder an den Vorgesetzten verweisen.",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-mensch-12",
    kategorie: "Umgang mit Menschen und Verhalten in Gefahrensituationen",
    frage: "Was ist „Kundenorientiertes Verhalten“ im Sicherheitsdienst?",
    antwort: "Höfliches, hilfsbereites Auftreten, gepflegtes Erscheinungsbild und das Bewusstsein, dass man die „Visitenkarte“ des Auftraggebers ist, ohne dabei die Sicherheit zu vernachlässigen.",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-mensch-13",
    kategorie: "Umgang mit Menschen und Verhalten in Gefahrensituationen",
    frage: "Nennen Sie drei typische Stresssymptome im Dienst.",
    antwort: "Erhöhter Puls/Herzklopfen, feuchte Hände, flache/schnelle Atmung, Tunnelblick.",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-mensch-14",
    kategorie: "Umgang mit Menschen und Verhalten in Gefahrensituationen",
    frage: "Wie verhindern Sie im Ernstfall einen „Tunnelblick“?",
    antwort: "Durch bewusstes, tiefes Ein- und Ausatmen (Atemkontrolle) und gezieltes Bewegen des Kopfes, um das gesamte Umfeld im Auge zu behalten (Situational Awareness).",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-mensch-15",
    kategorie: "Umgang mit Menschen und Verhalten in Gefahrensituationen",
    frage: "Wie verhalten Sie sich, wenn Sie im Dienst massiv beleidigt werden?",
    antwort: "Ignorieren der emotionalen Ebene, professionell und sachlich auf der Sachebene bleiben, die Person auf das Fehlverhalten hinweisen und den Vorfall für eine spätere Strafanzeige (Antragsdelikt) im Dienstbuch dokumentieren.",
    schwierigkeit: "Schwer"
  },

  // ==========================================
  // 6. Unfallverhütungsvorschriften (UVV) (15 Fragen)
  // ==========================================
  {
    id: "q-uvv-1",
    kategorie: "Unfallverhütungsvorschriften (UVV)",
    frage: "Wer erlässt die Unfallverhütungsvorschriften?",
    antwort: "Die Berufsgenossenschaften (Träger der gesetzlichen Unfallversicherung, z. B. VBG).",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-uvv-2",
    kategorie: "Unfallverhütungsvorschriften (UVV)",
    frage: "Welche spezifische UVV gilt primär für das Bewachungs- und Sicherheitsgewerbe?",
    antwort: "Die DGUV Vorschrift 23 (ehemals BGV C7) „Wach- und Sicherungsdienste“.",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-uvv-3",
    kategorie: "Unfallverhütungsvorschriften (UVV)",
    frage: "Welche Pflichten hat eine Wachperson bezüglich ihrer eigenen Sicherheit vor Dienstantritt?",
    antwort: "Überprüfung der persönlichen Schutzausrüstung (PSA) und der Einsatzmittel auf Funktionstüchtigkeit sowie die Pflicht, sich fahrtüchtig und einsatzbereit (kein Alkohol/Drogen) zum Dienst zu melden.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-uvv-4",
    kategorie: "Unfallverhütungsvorschriften (UVV)",
    frage: "Was regelt die DGUV Vorschrift 23 bezüglich der Mitnahme von Hunden?",
    antwort: "Es dürfen nur geprüfte und als tauglich anerkannte Diensthunde mitgeführt werden, die von einem qualifizierten Hundeführer geleitet werden.",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-uvv-5",
    kategorie: "Unfallverhütungsvorschriften (UVV)",
    frage: "Was versteht man unter „Eigenschutz geht vor Fremdschutz“?",
    antwort: "Ein Sicherheitsmitarbeiter darf sich bei Hilfeleistungen oder Sicherungsmaßnahmen nie selbst in Lebensgefahr bringen. Erst absichern, dann handeln.",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-uvv-6",
    kategorie: "Unfallverhütungsvorschriften (UVV)",
    frage: "Wann ist eine Wachperson verpflichtet, eine Warnweste zu tragen?",
    antwort: "Bei Tätigkeiten im Verkehrsraum (z. B. auf Straßen, Parkplätzen, Werksgeländen mit Staplerverkehr) sowie bei Dunkelheit und schlechter Sicht zur besseren Erkennbarkeit.",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-uvv-7",
    kategorie: "Unfallverhütungsvorschriften (UVV)",
    frage: "Was müssen Sie tun, wenn Sie an einem Ausrüstungsgegenstand (z. B. einer defekten Taschenlampe oder einer kaputten Funkantenne) einen Mangel feststellen?",
    antwort: "Den Mangel sofort dem Vorgesetzten oder der Leitstelle melden, den Gegenstand austauschen und den Defekt im Wachbuch protokollieren.",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-uvv-8",
    kategorie: "Unfallverhütungsvorschriften (UVV)",
    frage: "Was schreibt die UVV bei Alleinarbeit (Einzelstreife) in gefährdeten Objekten vor?",
    antwort: "Es muss eine Absicherung durch technische Einrichtungen erfolgen, z. B. durch ein Personen-Notsignal-Anlage (PNA) oder regelmäßige Kontrollanrufe (Meldezeiten) bei der Leitstelle.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-uvv-9",
    kategorie: "Unfallverhütungsvorschriften (UVV)",
    frage: "Wer ist für den Zustand der persönlichen Schutzausrüstung (PSA) verantwortlich?",
    antwort: "Der Arbeitgeber muss sie kostenlos zur Verfügung stellen; der Arbeitnehmer ist verpflichtet, sie bestimmungsgemäß zu tragen und pfleglich zu behandeln.",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-uvv-10",
    kategorie: "Unfallverhütungsvorschriften (UVV)",
    frage: "Was regelt die UVV bezüglich des Konsums von Alkohol und berauschenden Mitteln?",
    antwort: "Es gilt ein absolutes Alkoholisierungs- und Berauschungsverbot vor und während des Dienstes. Auch Medikamente, die die Reaktionsfähigkeit beeinträchtigen, dürfen nicht eingenommen werden.",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-uvv-11",
    kategorie: "Unfallverhütungsvorschriften (UVV)",
    frage: "Wie müssen Erste-Hilfe-Einrichtungen im Objekt gekennzeichnet sein?",
    antwort: "Durch ein weißes Kreuz auf quadratischem, grünem Grund (Rettungszeichen).",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-uvv-12",
    kategorie: "Unfallverhütungsvorschriften (UVV)",
    frage: "Welche Pflicht hat die Wachperson nach einem Arbeitsunfall?",
    antwort: "Erste Hilfe leisten, den Rettungsdienst rufen, den Unfall unverzüglich dem Vorgesetzten melden und den Vorfall im Verbandbuch eintragen (zwecks Absicherung bei Spätfolgen).",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-uvv-13",
    kategorie: "Unfallverhütungsvorschriften (UVV)",
    frage: "Was ist eine Gefährdungsbeurteilung?",
    antwort: "Eine gesetzlich vorgeschriebene Analyse des Arbeitsplatzes durch den Arbeitgeber, um potenzielle Gefahrenquellen für die Mitarbeiter zu ermitteln und Schutzmaßnahmen festzulegen.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-uvv-14",
    kategorie: "Unfallverhütungsvorschriften (UVV)",
    frage: "Welche Vorschrift regelt das Verhalten beim Besteigen von Leitern oder Begehen von Dächern im Objektschutz?",
    antwort: "Allgemeine UVV zur Arbeitssicherheit (DGUV Vorschrift 1 / Arbeitsstättenverordnung). Dächer dürfen nur auf freigegebenen Verkehrswegen und mit Absturzsicherung begangen werden.",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-uvv-15",
    kategorie: "Unfallverhütungsvorschriften (UVV)",
    frage: "Darf eine Wachperson im Dienst private, nicht zugelassene Abwehrsprays führen?",
    antwort: "Nein, laut DGUV Vorschrift 23 dürfen nur vom Arbeitgeber geprüfte und ausdrücklich zugelassene Einsatzmittel mitgeführt werden.",
    schwierigkeit: "Mittel"
  },

  // ==========================================
  // 7. Grundsätze der Sicherheitstechnik (15 Fragen)
  // ==========================================
  {
    id: "q-tech-1",
    kategorie: "Grundsätze der Sicherheitstechnik",
    frage: "Nennen Sie die drei Säulen des klassischen Sicherheitskonzepts.",
    antwort: "Mechanische Sicherheitstechnik, Elektronische Sicherheitstechnik und Organisatorische Maßnahmen.",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-tech-2",
    kategorie: "Grundsätze der Sicherheitstechnik",
    frage: "Welches Ziel verfolgt die mechanische Sicherheitstechnik vorrangig?",
    antwort: "Zeitüberwindungswert erhöhen. Sie soll das Eindringen erschweren und den Täter so lange aufhalten, bis Interventionskräfte eintreffen.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-tech-3",
    kategorie: "Grundsätze der Sicherheitstechnik",
    frage: "Was ist eine EMA und welche Aufgaben hat sie?",
    antwort: "Einbruchmeldeanlagen. Sie dient der Abschreckung, der frühzeitigen Erkennung von Einbrüchen und der Alarmierung von Interventionskräften (z. B. Polizei oder Sicherheitsdienst).",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-tech-4",
    kategorie: "Grundsätze der Sicherheitstechnik",
    frage: "Nennen Sie drei Arten von Meldern einer Einbruchmeldeanlage.",
    antwort: "Bewegungsmelder (Infrarot/Radar), Magnetkontakte (für Fenster/Türen), Glasbruchmelder, Riegelkontakte.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-tech-5",
    kategorie: "Grundsätze der Sicherheitstechnik",
    frage: "Was versteht man unter einer „Zutrittskontrollanlage“ (ZKA)?",
    antwort: "Ein System, das Personen anhand von Identitätsmerkmalen (z. B. RFID-Karte, PIN, Fingerabdruck) prüft und den Zugang zu definierten Bereichen erlaubt oder verweigert.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-tech-6",
    kategorie: "Grundsätze der Sicherheitstechnik",
    frage: "Was ist der Unterschied zwischen einem Sabotagekontakt und einem Alarmkontakt?",
    antwort: "Ein Alarmkontakt löst aus, wenn ein Einbruchversuch stattfindet (z. B. Tür geöffnet). Ein Sabotagekontakt löst sofort aus, wenn jemand versucht, das Gehäuse des Melders oder die Kabel zu beschädigen oder zu öffnen – auch wenn die Anlage unscharf geschaltet ist.",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-tech-7",
    kategorie: "Grundsätze der Sicherheitstechnik",
    frage: "Was versteht man unter einer BMA und woran leitet sie Alarme meist weiter?",
    antwort: "Brandmeldeanlage. Sie leitet Branderkennungen (durch Rauch-, Hitze- oder Flammenmelder) meist direkt an die regionale Feuerwehrleitstelle oder eine ständig besetzte Wachzentrale weiter.",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-tech-8",
    kategorie: "Grundsätze der Sicherheitstechnik",
    frage: "Was ist ein „Stiller Alarm“?",
    antwort: "Ein Alarm, der vor Ort für den Täter unbemerkt bleibt (keine Sirene, kein Blitzlicht), aber sofort an die Polizei oder den Sicherheitsdienst weitergeleitet wird (z. B. bei Banküberfällen).",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-tech-9",
    kategorie: "Grundsätze der Sicherheitstechnik",
    frage: "Was bedeutet das Kürzel „CCTV“?",
    antwort: "Closed Circuit Television (Videoüberwachungsanlage).",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-tech-10",
    kategorie: "Grundsätze der Sicherheitstechnik",
    frage: "Welche organisatorische Maßnahme ist bei Schlüsselverlust in einem großen Objekt wichtig?",
    antwort: "Sofortige Sperrung des Schlüssels/Transponders im System (bei elektronischen Schließanlagen) bzw. Meldung an den Objektleiter zur Einleitung eines Schließzylinder-Austauschs.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-tech-11",
    kategorie: "Grundsätze der Sicherheitstechnik",
    frage: "Was ist ein „Überfallmelder“?",
    antwort: "Ein manuell auslösbarer Melder (z. B. Fußtaster unter dem Tresen oder Handtaster), mit dem eine bedrohte Person sofort Hilfe anfordern kann.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-tech-12",
    kategorie: "Grundsätze der Sicherheitstechnik",
    frage: "Warum ist eine Notstromversorgung (USV) für Sicherheitstechnik notwendig?",
    antwort: "Damit die Überwachungs- und Meldesysteme bei einem Stromausfall oder einer bewussten Sabotage des Stromnetzes durch Einbrecher für einen definierten Zeitraum (meist mindestens 12–24 Stunden) weiterfunktionieren.",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-tech-13",
    kategorie: "Grundsätze der Sicherheitstechnik",
    frage: "Erklären Sie das Prinzip der „Außenhautüberwachung“.",
    antwort: "Die Überwachung aller Öffnungen eines Gebäudes, durch die ein Täter eindringen kann (Türen, Fenster, Dachluken, Kellerfenster).",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-tech-14",
    kategorie: "Grundsätze der Sicherheitstechnik",
    frage: "Was ist ein Linienförmiger Rauchmelder?",
    antwort: "Ein Brandmelder, der mit einem Lichtstrahl arbeitet. Wird der Lichtstrahl durch Rauch unterbrochen oder abgeschwächt, löst die Anlage Alarm aus. Ideal für sehr hohe Hallen.",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-tech-15",
    kategorie: "Grundsätze der Sicherheitstechnik",
    frage: "Was versteht man unter „Zwangsläufigkeit“ bei einer Einbruchmeldeanlage?",
    antwort: "Das Prinzip, dass eine EMA erst scharf geschaltet werden kann, wenn alle überwachten Fenster und Türen fest verschlossen sind. Ein unbeabsichtigter Falschalarm wird dadurch verhindert.",
    schwierigkeit: "Schwer"
  },

  // ==========================================
  // 8. Datenschutzrecht (15 Fragen)
  // ==========================================
  {
    id: "q-dat-1",
    kategorie: "Datenschutzrecht",
    frage: "Welches Gesetz bildet die Hauptgrundlage für den Datenschutz in Deutschland?",
    antwort: "Die Datenschutz-Grundverordnung (DSGVO) der EU sowie ergänzend das Bundesdatenschutzgesetz (BDSG).",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-dat-2",
    kategorie: "Datenschutzrecht",
    frage: "Was sind „personenbezogene Daten“?",
    antwort: "Alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen (z. B. Name, Adresse, Telefonnummer, Kfz-Kennzeichen, IP-Adresse, Videobilder).",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-dat-3",
    kategorie: "Datenschutzrecht",
    frage: "Wann ist die Verarbeitung personenbezogener Daten erlaubt?",
    antwort: "Nur dann, wenn eine gesetzliche Erlaubnis vorliegt (z. B. zur Vertragserfüllung, rechtliche Pflicht) oder wenn die betroffene Person ausdrücklich eingewilligt hat (Verbot mit Erlaubnisvorbehalt).",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-dat-4",
    kategorie: "Datenschutzrecht",
    frage: "Was müssen Sie als Sicherheitskraft bei der Videoüberwachung beachten?",
    antwort: "Sie muss rechtmäßig sein (berechtigtes Interesse des Betreibers), erforderlich sein und durch gut sichtbare Hinweisschilder (inklusive Name des Verantwortlichen und Kontaktdaten des Datenschutzbeauftragten) angekündigt werden.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-dat-5",
    kategorie: "Datenschutzrecht",
    frage: "Darf eine Sicherheitskraft Aufnahmen der Überwachungskamera mit dem privaten Smartphone abfilmen?",
    antwort: "Nein, das ist ein schwerer Verstoß gegen die DSGVO und den Arbeitsvertrag und kann strafrechtliche sowie arbeitsrechtliche Konsequenzen (Kündigung) nach sich ziehen.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-dat-6",
    kategorie: "Datenschutzrecht",
    frage: "Wer ist in einem Sicherheitsunternehmen für den Datenschutz verantwortlich?",
    antwort: "Die Geschäftsführung bzw. der gesetzliche Vertreter des Unternehmens. Ab einer bestimmten Mitarbeiterzahl (in der Regel ab 20 Personen, die ständig mit automatisierter Datenverarbeitung zu tun haben) muss ein Datenschutzbeauftragter bestellt werden.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-dat-7",
    kategorie: "Datenschutzrecht",
    frage: "Was versteht man unter dem Datengeheimnis?",
    antwort: "Die Pflicht von Mitarbeitern, personenbezogene Daten, die ihnen während ihrer beruflichen Tätigkeit bekannt werden, vertraulich zu behandeln und nicht unbefugt zu verarbeiten oder weiterzugeben. Diese Pflicht besteht auch nach dem Ende des Arbeitsverhältisses fort.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-dat-8",
    kategorie: "Datenschutzrecht",
    frage: "Ein Polizist in Zivil kommt in die Werkseinfahrt und verlangt ohne schriftlichen Beschluss Einsicht in das Besucherbuch. Wie reagieren Sie?",
    antwort: "Sie verweisen den Polizisten freundlich an die Einsatzleitung oder den Datenschutzbeauftragten. Ohne rechtliche Grundlage (Gefahr im Verzug oder richterlicher Beschluss) dürfen Daten nicht einfach herausgegeben werden.",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-dat-9",
    kategorie: "Datenschutzrecht",
    frage: "Was versteht man unter dem Prinzip der „Datenminimierung“?",
    antwort: "Es dürfen nur so viele personenbezogene Daten erhoben und gespeichert werden, wie für den jeweiligen Zweck unbedingt erforderlich sind (z. B. im Besucherbuch nur Name und Firma, nicht das Geburtsdatum).",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-dat-10",
    kategorie: "Datenschutzrecht",
    frage: "Wie lange dürfen Videodaten einer Überwachungskamera im Regelfall gespeichert werden?",
    antwort: "Nur so lange, wie es zur Erreichung des Zwecks erforderlich ist. Im Regelfall gilt im Einzelhandel oder Objektschutz ein zeitraum von 48 bis maximal 72 Stunden, danach müssen sie automatisch gelöscht/überschrieben werden.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-dat-11",
    kategorie: "Datenschutzrecht",
    frage: "Welche Rechte haben Betroffene nach der DSGVO (Nennen Sie drei)?",
    antwort: "Recht auf Auskunft, Recht auf Berichtigung, Recht auf Löschung („Recht auf Vergessenwerden“), Recht auf Einschränkung der Verarbeitung.",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-dat-12",
    kategorie: "Datenschutzrecht",
    frage: "Wo müssen ausgefüllte Besucherlisten oder Wachbücher aufbewahrt werden?",
    antwort: "Verschlossen und geschützt vor den Blicken unbefugter Dritter (z. B. in einem abschließbaren Schrank oder einer passwortgeschützten Datei). Sie dürfen nicht offen auf dem Tresen liegen.",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-dat-13",
    kategorie: "Datenschutzrecht",
    frage: "Was ist eine „Datenschutz-Folgenabschätzung“ (DSFA)?",
    antwort: "Eine systematische Untersuchung der Risiken, die eine geplante Datenverarbeitung (z. B. der Einsatz großflächiger, intelligenter Videoüberwachung mit Gesichtserkennung) für die Rechte und Freiheiten der betroffenen Personen hat.",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-dat-14",
    kategorie: "Datenschutzrecht",
    frage: "Was passiert bei Verstößen gegen die DSGVO?",
    antwort: "Es können extrem hohe Bußgelder durch die Aufsichtsbehörden gegen das Unternehmen verhandelt werden (bis zu 20 Millionen Euro oder 4 % des weltweiten Jahresumsatzes) sowie Schadensersatzforderungen der Betroffenen drohen.",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-dat-15",
    kategorie: "Datenschutzrecht",
    frage: "Gilt die DSGVO auch für Notizen, die Sie handschriftlich im Wachbuch machen?",
    antwort: "Ja. Sobald handschriftliche Notizen systematisch geordnet sind (z. B. nach Datum/Uhrzeit in einem Buch) und personenbezogene Daten enthalten, fallen sie unter den Anwendungsbereich der DSGVO.",
    schwierigkeit: "Schwer"
  },
  // ==========================================
  // NEUE KOMPAKTE FRAGEN (50 Fragen aus dem Leitfaden)
  // ==========================================
  {
    id: "q-neu-1",
    kategorie: "Recht der öffentlichen Sicherheit und Ordnung",
    frage: "Welche Bedeutung hat der Föderalismus für das Sicherheits- und Ordnungsrecht?",
    antwort: "• Bundesländer: Zuständig für die Gefahrenabwehr und das Polizeirecht (jedes Bundesland hat ein eigenes Polizeigesetz).\n• Bund: Zuständig für das Strafrecht (StGB), Strafprozessrecht (StPO) und Gewerberecht (GewO).\n• Folge: Die gewerberechtlichen Rahmenbedingungen (§ 34a GewO) sind bundeseinheitlich; die Befugnisse staatlicher Organe hängen vom Landesrecht ab.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-neu-2",
    kategorie: "Recht der öffentlichen Sicherheit und Ordnung",
    frage: "Wie unterscheidet sich das Öffentliche Recht vom Privatrecht, und was bedeutet das für Sicherheitskräfte?",
    antwort: "• Öffentliches Recht: Regelt das Über-/Unterordnungsverhältnis zwischen Staat und Bürger (z. B. Polizeirecht, Strafrecht).\n• Privatrecht (Zivilrecht): Regelt die Gleichordnung zwischen Bürgern (z. B. BGB).\n• Relevanz: Sicherheitskräfte handeln rein im Privatrecht. Sie sind normalen Bürgern gleichgestellt und besitzen keine hoheitlichen Sonderrechte.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-neu-3",
    kategorie: "Recht der öffentlichen Sicherheit und Ordnung",
    frage: "Welche Bedeutung haben die Grundrechte für das Sicherheitsgewerbe, und wie teilen sie sich auf?",
    antwort: "• Bedeutung: Grundrechte binden primär den Staat, entfalten aber im Privatrecht eine mittelbare Drittwirkung. Verstöße führen zu Strafen oder Schadensersatz.\n• Menschenrechte: Stehen jeder natürlichen Person zu (z. B. Art. 1, 2 GG).\n• Bürgerrechte: Stehen nur deutschen Staatsbürgern zu (z. B. Art. 8, 12 GG).\n\nOperative Bedeutung:\n- Art. 1 GG (Menschenwürde): Verbot herabwürdigender Behandlungen bei Festnahmen.\n- Art. 2 GG (Körperliche Unversehrtheit/Freiheit): Schutz vor Gewalt; Festhalten nur über Rechtfertigungsgründe (§ 127 StPO).\n- Art. 3 GG (Gleichheitsgrundsatz): Verbot willkürlicher Einlassselektion nach Herkunft/Religion.\n- Art. 13 GG (Unverletzlichkeit der Wohnung): Schutz befriedeten Besitztums; Basis für das Hausrecht.",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-neu-4",
    kategorie: "Recht der öffentlichen Sicherheit und Ordnung",
    frage: "Was bedeutet das staatliche Gewaltmonopol, und wie grenzen sich private Sicherheitskräfte von staatlichen Organen ab?",
    antwort: "• Staatliches Gewaltmonopol: Die Anwendung physischer Gewalt als Zwangsmaßnahme ist grundsätzlich dem Staat (Exekutive) vorbehalten.\n• Polizei/Ordnungsbehörden: Nehmen hoheitliche Aufgaben wahr und dürfen unmittelbaren Zwang (z. B. Platzverweise, Durchsuchungen) anwenden.\n• Private Sicherheitskräfte: Haben keine hoheitlichen Befugnisse. Sie schützen private Interessen und nutzen nur die Jedermannsrechte (z. B. Notwehr) sowie das übertragene Hausrecht. Durchsuchungen/Kontrollen erfordern immer die freiwillige Einwilligung.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-neu-5",
    kategorie: "Recht der öffentlichen Sicherheit und Ordnung",
    frage: "Was versteht man unter Public-Private-Partnership (PPP) im Sicherheitsbereich?",
    antwort: "• Definition: Vertragliche Zusammenarbeit zwischen staatlichen Sicherheitsbehörden und privaten Dienstleistern.\n• Materielle Privatisierung: Vollständige Übertragung staatlicher Aufgaben auf Private (bei hoheitlichen Kernaufgaben verfassungsrechtlich verboten).\n• Funktionale Privatisierung: Übertragung der Aufgabendurchführung:\n  - Beliehener: Übertragung hoheitlicher Rechte per Gesetz (z. B. Luftsicherheitsassistent nach § 5 LuftSiG, Wachperson der Bundeswehr nach UZwGBw).\n  - Verwaltungs-/Polizeihelfer: Privater handelt weisungsgebunden als Hilfsorgan ohne eigene Hoheitsrechte.",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-neu-6",
    kategorie: "Gewerberecht (GewO / BewachV)",
    frage: "Welche Voraussetzungen gelten für die Erteilung einer Bewachungserlaubnis nach § 34a Abs. 1 GewO?",
    antwort: "• Zuverlässigkeit: Keine relevanten Vorstrafen (Auskunft aus Bundeszentralregister, Gewerbezentralregister, Verfassungsschutz).\n• Finanzielle Mittel: Nachweis geordneter Vermögensverhältnisse (Mittel/Sicherheiten für mindestens die ersten 6 Monate).\n• Sachkunde: Erfolgreich abgelegte Sachkundeprüfung.\n• Haftpflichtversicherung: Bestehen einer Berufshaftpflicht.\n• Mindestalter: Vollendung des 18. Lebensjahres.",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-neu-7",
    kategorie: "Gewerberecht (GewO / BewachV)",
    frage: "Wie grenzen sich das Unterrichtungsverfahren und die Sachkundeprüfung voneinander ab?",
    antwort: "• Gewerbe: Erlaubte, fortgesetzte, selbstständige Tätigkeit mit Gewinnerzielungsabsicht.\n• Bewachungstätigkeit: Schutz des Lebens oder Eigentums fremder Personen vor Eingriffen Dritter.\n• Unterrichtungsverfahren: 40 Unterrichtseinheiten ohne formelle Abschlussprüfung. Reicht für einfache Tätigkeiten (z. B. Objektschutz, Pfortendienst).\n• Sachkundeprüfung: Schriftlich & mündliche Prüfung. Zwingend für: Selbstständige/Betriebsleiter, Citystreifen, Kaufhausdetektive, Türsteher, leitende Funktionen in Asylheimen/Großveranstaltungen.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-neu-8",
    kategorie: "Gewerberecht (GewO / BewachV)",
    frage: "Welche Regeln gelten für den Einsatz von Personal, Praktikanten und Minderjährigen?",
    antwort: "• Wachpersonal/Betriebsleiter: Müssen im Bewacherregister (BWR) registriert, behördlich freigegeben, zuverlässig, volljährig und qualifiziert sein.\n• Minderjährige (unter 18 Jahren): Dürfen keine eigenständigen Bewachungsaufgaben ausführen.\n• Auszubildende/Praktikanten: Einsatz nur zu Lernzwecken unter ständiger Aufsicht.\n• Jugendliche unterliegen dem Jugendarbeitsschutzgesetz (JArbSchG): Beschäftigungsverbot an Wochenenden/Feiertagen (Ausnahme nur unter Aufsicht bei Freizeitausgleich in derselben Woche; max. zwei Samstage pro Monat).",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-neu-9",
    kategorie: "Gewerberecht (GewO / BewachV)",
    frage: "Welche Pflichten erlegt die Bewachungsverordnung (BewachV) dem Unternehmer auf?",
    antwort: "• Haftpflichtversicherung (§ 6 BewachV): Mindestdeckungssummen von 1.000.000 € für Personenschäden, 250.000 € für Sachschäden, 15.000 € für Abhandenkommen bewachter Sachen, 12.500 € für reine Vermögensschäden.\n• Dienstanweisung: Muss vor erstem Dienstantritt schriftlich ausgehändigt werden (regelt Waffengebrauch und Verbot polizeilicher Befugnisse).\n• Dienstkleidung (§ 19 BewachV): Verpflichtend beim Betreten befriedeten Besitztums, keine Verwechslung mit Polizei/Militär.\n• Dienstausweis & Namensschild: Ausweis stets mitzuführen. Sichtbares Trageschild (Name/Kennnummer) bei Citystreifen, Türstehern und Ladendetektiven (Ausnahme: Personenschutz).",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-neu-10",
    kategorie: "Gewerberecht (GewO / BewachV)",
    frage: "Wie ist der Umgang mit Waffen und die Buchführungspflicht geregelt?",
    antwort: "• Waffen: Sicherstellung der ordnungsgemäßen Rückgabe nach Dienstende und zertifizierte Aufbewahrung.\n• Meldung bei Waffengebrauch: Jeder tatsächliche Waffengebrauch im Dienst (auch Reizstoff) ist unverzüglich der Erlaubnisbehörde und der Polizei anzuzeigen.\n• Buchführung/Aufbewahrung: Genaue Aufzeichnung aller Bewachungsverträge und eingesetzten Personen. Aufbewahrungsfrist beträgt mindestens 5 Jahre.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-neu-11",
    kategorie: "Gewerberecht (GewO / BewachV)",
    frage: "Was regelt das Geschäftsgeheimnisgesetz (GeschGehG) für Sicherheitskräfte?",
    antwort: "• Geschäftsgeheimnis (§ 2 Nr. 1): Informationen von wirtschaftlichem Wert, die nicht offenkundig sind und durch angemessene Geheimhaltungsmaßnahmen geschützt werden (z. B. Dienstpläne, Alarmcodes).\n• Verschwiegenheitspflicht: Ergibt sich als vertragliche Nebenpflicht (§ 242 BGB) auch für Azubis (§ 13 BBiG) und gilt uneingeschränkt nach dem Ausscheiden.\n• Strafmaß (§ 23 GeschGehG): Unbefugtes Erlangen, Nutzen oder Offenlegen wird mit Freiheitsstrafe bis zu 3 Jahren (bei Gewerbsmäßigkeit/Auslandsnutzung bis zu 5 Jahren) oder Geldstrafe bestraft.",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-neu-12",
    kategorie: "Gewerberecht (GewO / BewachV)",
    frage: "Welche Kontrollbefugnisse haben Behörden, und welche Sanktionen drohen bei Verstößen?",
    antwort: "• Befugnisse: Zutrittsrecht zu Geschäftsräumen während der Betriebszeit, Einsicht in alle geschäftlichen Unterlagen.\n• Beschäftigungsverbot: Behörde kann den Einsatz unzuverlässiger Wachpersonen untersagen.\n• Sanktionen: Ordnungswidrigkeiten (z. B. Bewachung ohne Erlaubnis, fehlender Ausweis) werden mit Bußgeldern bis zu 50.000 Euro geahndet. Bei anhaltender Unzuverlässigkeit droht die Gewerbeuntersagung (§ 35 GewO).",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-neu-13",
    kategorie: "Datenschutzrecht",
    frage: "Welcher gesetzliche Rahmen gilt für den Datenschutz, und was ist der Anwendungsbereich der DSGVO?",
    antwort: "• Gesetzlicher Rahmen: DSGVO, Bundesdatenschutzgesetz (BDSG), Landesdatenschutzgesetze (LDSG) und Art. 8 EU-Grundrechtecharta.\n• Anwendungsbereich: Ganz oder teilweise automatisierte Verarbeitung personenbezogener Daten (pbD - alle Daten, die eine Person identifizierbar machen, z. B. Videoaufnahmen).\n• Haushaltsausnahme: Gilt nicht für rein persönliche/familiäre Tätigkeiten (Art. 2 Abs. 2 DSGVO). Sobald öffentliche Bereiche erfasst werden oder Personen außerhalb des Familienkreises gefilmt werden, greift die DSGVO.\n• Besondere Kategorien (Art. 9 DSGVO): Gesundheitsdaten, biometrische Daten etc. unterliegen einem strengen Verarbeitungsverbot (Ausnahme: ausdrückliche Einwilligung).",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-neu-14",
    kategorie: "Datenschutzrecht",
    frage: "Welche Grundsätze der Datenverarbeitung regelt Art. 5 DSGVO, und wie ist die Rechtmäßigkeit begründet?",
    antwort: "• Grundsätze (Art. 5): Rechtmäßigkeit, Zweckbindung, Datenminimierung, Richtigkeit, Speicherbegrenzung, Integrität/Vertraulichkeit sowie Rechenschaftspflicht (Accountability).\n• Rechtmäßigkeit (Art. 6): Verarbeitung im Sicherheitsdienst ist rechtmäßig bei:\n  - Vertragserfüllung (Art. 6 Abs. 1 lit. b).\n  - Rechtlicher Verpflichtung (Art. 6 Abs. 1 lit. c).\n  - Berechtigtem Interesse (Art. 6 Abs. 1 lit. f - z. B. Objektschutz), sofern die Interessen des Betroffenen nicht überwiegen.\n• Beschäftigtedaten (§ 26 BDSG): Überwachung von Mitarbeitern darf keine lückenlose Verhaltens- und Leistungskontrolle sein; verdeckte Kameras sind nur bei konkretem Straftatverdacht zulässig.",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-neu-15",
    kategorie: "Datenschutzrecht",
    frage: "Was sind technische und organisatorische Maßnahmen (TOMs), und was gilt bei der Auftragsverarbeitung?",
    antwort: "• TOMs (Art. 32 DSGVO): Maßnahmen zur Gewährleistung der Datensicherheit.\n  - Technisch: Verschlüsselung, Passwortschutz, physische Zutrittskontrollen.\n  - Organisatorisch: Schulung der Mitarbeiter, Berechtigungskonzepte, vertrauliche Aufbewahrung des Wachbuchs.\n• Auftragsverarbeitung (Art. 28 DSGVO): Sicherheitsdienstleister verarbeitet Daten im Auftrag des Kunden. Erfordert einen schriftlichen Auftragsverarbeitungsvertrag (AVV); der Dienstleister ist streng weisungsgebunden.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-neu-16",
    kategorie: "Datenschutzrecht",
    frage: "Welche Betroffenenrechte existieren, und wie ist eine Datenpanne zu melden?",
    antwort: "• Betroffenenrechte (Art. 12-22 DSGVO): Auskunft (Art. 15), Berichtigung (Art. 16), Löschung („Vergessenwerden“, Art. 17), Einschränkung (Art. 18), Datenübertragbarkeit (Art. 20), Widerspruch (Art. 21).\n• Meldepflicht bei Datenpanne:\n  - An Aufsichtsbehörde (Art. 33): Innerhalb von 72 Stunden nach Bekanntwerden, sofern ein Risiko für die Rechte der Betroffenen besteht.\n  - An Betroffene (Art. 34): Unverzüglich, wenn ein hohes Risiko für die persönlichen Rechte besteht.",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-neu-17",
    kategorie: "Datenschutzrecht",
    frage: "Unter welchen Voraussetzungen ist die Videoüberwachung öffentlich zugänglicher Räume zulässig (§ 4 BDSG)?",
    antwort: "• Zweck: Schutz von Eigentum/Leben, Wahrung des Hausrechts.\n• Interessenabwägung: Keine überwiegenden schutzwürdigen Interessen der Betroffenen.\n• Hinweispflicht (Art. 13 DSGVO): Gut sichtbares Schild (inkl. Kontaktdaten des Verantwortlichen, Zweck, Speicherdauer) vor Betreten des Erfassungsbereichs.\n• Speicherdauer: In der Regel maximal 24 bis 72 Stunden, danach automatische Löschung (außer bei konkreten Vorfällen zur Beweissicherung).\n• Datenschutz-Folgenabschätzung (DSFA, Art. 35): Zwingend erforderlich bei systematischer, großflächiger Überwachung.",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-neu-18",
    kategorie: "Datenschutzrecht",
    frage: "Welche Sanktionen drohen bei Verstößen gegen das Datenschutzrecht?",
    antwort: "• Zivilrecht: Schadensersatzpflicht (auch für immaterielle Schäden) nach Art. 82 DSGVO.\n• Verwaltung: Geldbußen bis zu 20 Mio. Euro oder 4 % des weltweiten Jahresumsatzes (Art. 83 DSGVO).\n• Strafrecht:\n  - § 42 BDSG: Gewerbsmäßige unbefugte Weitergabe von Daten (bis zu 3 Jahre Haft).\n  - § 201 StGB: Verletzung der Vertraulichkeit des Wortes (z. B. unbefugte Tonaufzeichnung).\n  - § 201a StGB: Verletzung des höchstpersönlichen Lebensbereichs durch Bildaufnahmen (z. B. Kameras in Umkleiden).\n  - § 202/202a StGB: Ausspähen von Daten (Hacking).",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-neu-19",
    kategorie: "Bürgerliches Gesetzbuch (BGB)",
    frage: "Welche zivilrechtlichen Rechtfertigungsgründe regelt das BGB?",
    antwort: "• Notwehr / Nothilfe (§ 227 BGB): Gegenwärtiger, rechtswidriger Angriff eines Menschen. Abwehr des Angriffs; nur gegen den Angreifer gerichtet.\n• Verteidigungsnotstand (§ 228 BGB): Gefahr droht von einer fremden Sache/Tier. Beschädigung/Zerstörung dieser Sache/Tier zur Gefahrenabwehr.\n• Angriffsnotstand (§ 904 BGB): Gegenwärtige Gefahr; Einwirkung auf eine unbeteiligte Sache. Nutzung/Beschädigung der unbeteiligten Sache (Schaden muss kleiner als die Gefahr sein).\n• Allgemeine Selbsthilfe (§ 229 BGB): Anspruch droht zu vereiteln; staatliche Hilfe ist nicht rechtzeitig erreichbar. Vorläufige Festnahme des Schuldners oder Sicherstellung einer Sache.\n• Selbsthilfe des Besitzers (§ 859 BGB): Gegen verbotene Eigenmacht. Besitzwehr (Abwehr auf frischer Tat) oder Besitzkehr (Wiederabnahme auf frischer Tat).",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-neu-20",
    kategorie: "Bürgerliches Gesetzbuch (BGB)",
    frage: "Wie grenzen sich BGB, StGB und § 127 StPO-Rechtfertigungen voneinander ab?",
    antwort: "• BGB-Rechtfertigung (§§ 227 ff.): Schließt die Widerrechtlichkeit im Zivilrecht aus; verhindert Schadensersatzansprüche.\n• StGB-Rechtfertigung (§§ 32 ff.): Schließt die Rechtswidrigkeit im Strafrecht aus; verhindert Bestrafung.\n• § 127 Abs. 1 StPO: Strafprozessuale Ermächtigung zur vorläufigen Festnahme (Sicherung der Strafverfolgung). Rechtfertigt nur den Freiheitsentzug, keine Sachbeschädigung oder Körperverletzung.",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-neu-21",
    kategorie: "Bürgerliches Gesetzbuch (BGB)",
    frage: "Was ist ein Besitzdiener, und wie wird das Hausrecht ausgeübt?",
    antwort: "• Besitzdiener (§ 855 BGB): Person, die die tatsächliche Sachherrschaft für einen anderen weisungsgebunden ausübt. Sicherheitskräfte im Dienst sind immer Besitzdiener.\n• Hausrecht: Das Recht des Besitzers zu entscheiden, wer das befriedete Besitztum betreten darf. Wird vertraglich auf den Sicherheitsdienst übertragen.\n• Selbsthilfe des Besitzdieners (§ 860 BGB): Der Besitzdiener darf die Selbsthilferechte des Besitzers (§ 859 BGB) eigenständig ausüben (z. B. Störer mittels verhältnismäßiger Gewalt entfernen).\n• Schikaneverbot (§ 226 BGB): Die Ausübung eines Rechts ist unzulässig, wenn sie nur den Zweck hat, einem anderen Schaden zuzufügen.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-neu-22",
    kategorie: "Bürgerliches Gesetzbuch (BGB)",
    frage: "Wann entsteht eine Schadensersatzpflicht, und was gilt für Diensthunde?",
    antwort: "• Schadensersatz (§ 823 BGB): Wer vorsätzlich oder fahrlässig Leben, Körper, Freiheit oder Eigentum eines anderen widerrechtlich verletzt, ist zum Schadensersatz verpflichtet.\n• Deliktsfähigkeit (§ 828 BGB): Unter 7 Jahren absolut deliktsunfähig. 7 bis unter 18 Jahren nur, wenn die nötige Einsichtsfähigkeit zur Schadenserkennung vorlag.\n• Tierhalterhaftung (§ 833 BGB): Grundsätzlich verschuldensunabhängige Haftung (Gefährdungshaftung) des Halters für alle Tier-Schäden.\n• Haftungsprivileg (§ 833 Satz 2 BGB): Gilt für Nutztiere (auch gewerbliche Diensthunde). Die Haftung entfällt, wenn der Halter nachweisen kann, dass er die im Verkehr erforderliche Sorgfalt eingehalten hat (z. B. zertifizierte Ausbildung, Leinenführung).",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-neu-23",
    kategorie: "Bürgerliches Gesetzbuch (BGB)",
    frage: "Wie definiert das BGB Sache, Tier, Eigentum und Besitz, und was regelt das Fundrecht?",
    antwort: "• Sache (§ 90 BGB): Nur körperliche Gegenstände.\n• Tier (§ 90a BGB): Keine Sachen, werden aber rechtlich wie Sachen behandelt, soweit nichts anderes bestimmt ist.\n• Besitz (§ 854 BGB): Tatsächliche Gewalt/Sachherrschaft über eine Sache (z. B. Mieter).\n• Eigentum (§ 903 BGB): Rechtliche Herrschaftsmacht über eine Sache.\n• Fundrecht (§§ 965 ff. BGB): Wer im befriedeten Besitztum des Kunden eine verlorene Sache findet, ist zur unverzüglichen Anzeige und Ablieferung an den Auftraggeber verpflichtet. Kein persönlicher Anspruch auf Finderlohn oder Eigentumserwerb.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-neu-24",
    kategorie: "Straf- und Strafverfahrensrecht (StGB / StPO)",
    frage: "Welche Grundlagen gelten im Strafrecht, und wie ist eine Straftat aufgebaut?",
    antwort: "• Grundsatz: „Keine Strafe ohne Gesetz“ (Nulla poena sine lege – Art. 103 Abs. 2 GG, § 1 StGB).\n• Aufbau StGB: Allgemeiner Teil (AT - Grundlagen für alle Delikte, z. B. Notwehr, Versuch) und Besonderer Teil (BT - die einzelnen Straftatbestände).\n• Systematischer Deliktsaufbau:\n  - Tatbestandsmäßigkeit: Der objektive (äußeres Geschehen) und subjektive (Vorsatz § 15 StGB) Tatbestand müssen erfüllt sein.\n  - Rechtswidrigkeit: Es dürfen keine Rechtfertigungsgründe (z. B. § 32 StGB) vorliegen.\n  - Schuld: Persönliche Vorwerfbarkeit der Tat (Schuldunfähigkeit bei Kindern unter 14 Jahren gemäß § 19 StGB).",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-neu-25",
    kategorie: "Straf- und Strafverfahrensrecht (StGB / StPO)",
    frage: "Wie unterscheiden sich Verbrechen/Vergehen, Unterlassungsdelikte und Täterschaft/Teilnahme?",
    antwort: "• Verbrechen (§ 12 Abs. 1 StGB): Rechtswidrige Taten, die im Mindestmaß mit 1 Jahr Freiheitsstrafe bedroht sind (z. B. Raub). Versuch ist stets strafbar.\n• Vergehen (§ 12 Abs. 2 StGB): Taten mit geringerer Mindeststrafe oder Geldstrafe (z. B. Hausfriedensbruch, Sachbeschädigung). Versuch nur strafbar, wenn gesetzlich bestimmt.\n• Begehen durch Unterlassen (§ 13 StGB): Strafbar nur bei Vorliegen einer Garantenstellung (vertragliche Pflicht zum Schutz von Rechtsgütern). Sicherheitskräfte haben diese Pflicht für ihr Wachobjekt.\n• Täterschaft & Teilnahme:\n  - Täter (§ 25 StGB): Begeht die Tat selbst oder gemeinschaftlich.\n  - Anstifter (§ 26 StGB): Bestimmt einen anderen vorsätzlich zur Tat.\n  - Gehilfe (§ 27 StGB): Leistet dem Täter vorsätzlich Hilfe.",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-neu-26",
    kategorie: "Straf- und Strafverfahrensrecht (StGB / StPO)",
    frage: "Welche strafrechtlichen Rechtfertigungs- und Entschuldigungsgründe gibt es?",
    antwort: "• Notwehr (§ 32 StGB): Verteidigung zur Abwehr eines gegenwärtigen, rechtswidrigen Angriffs von sich oder einem anderen (Nothilfe). Güterabwägung ist nicht erforderlich.\n• Rechtfertigender Notstand (§ 34 StGB): Tat zur Abwendung einer gegenwärtigen Gefahr für ein Rechtsgut. Erfordert eine Interessenabwägung: das geschützte interesse muss das beeinträchtigte Interesse wesentlich überwiegen.\n• Entschuldigender Notstand (§ 35 StGB): Tat zur Abwendung einer Gefahr für Leben/Leib von sich oder nahen Angehörigen. Schließt nicht die Rechtswidrigkeit, sondern die Schuld aus.",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-neu-27",
    kategorie: "Straf- und Strafverfahrensrecht (StGB / StPO)",
    frage: "Welche Straftaten gegen die öffentliche Ordnung, Rechtspflege und Ehre sind praxisrelevant?",
    antwort: "• § 123 StGB (Hausfriedensbruch): Unbefugtes Eindringen oder unberechtigtes Verweilen trotz Aufforderung. Relatives Antragsdelikt.\n• § 132 StGB (Amtsanmaßung): Vornahme einer Handlung, die nur Kraft eines öffentlichen Amtes erlaubt ist (z. B. Platzverweis im öffentlichen Raum erteilen).\n• § 132a StGB: Unbefugtes Tragen von Uniformen, Titeln oder Abzeichen.\n• Aussagedelikte: Falsche uneidliche Aussage (§ 153 StGB - Vergehen, min. 3 Monate Haft), Meineid (§ 154 StGB - Verbrechen, min. 1 Jahr Haft), Falsche Verdächtigung (§ 164 StGB).\n• § 185 StGB (Beleidigung): Kundgabe der Missachtung oder Nichtachtung eines anderen.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-neu-28",
    kategorie: "Straf- und Strafverfahrensrecht (StGB / StPO)",
    frage: "Welche Straftaten gegen die körperliche Unversehrtheit und Freiheit sind wichtig?",
    antwort: "• Einfache Körperverletzung (§ 223 StGB): Körperliche Misshandlung oder Gesundheitsschädigung.\n• Gefährliche Körperverletzung (§ 224 StGB): Mittels Waffe, gefährlichem Werkzeug (auch Reizstoff, Diensthund), gemeinschaftlich oder lebensgefährlicher Behandlung. Mindeststrafe: 6 Monate Haft.\n• Schwere Körperverletzung (§ 226 StGB): Folge ist der dauerhafte Verlust wichtiger Glieder, des Seh-/Hörvermögens oder eine dauerhafte Entstellung. Verbrechen (min. 1 Jahr Haft).\n• Freiheitsberaubung (§ 239 StGB): Unberechtigtes Entziehen der Fortbewegungsfreiheit (z. B. unberechtigtes Festhalten).\n• Nötigung (§ 240 StGB): Aufzwingen eines Verhaltens durch Gewalt oder Drohung mit einem empfindlichen Übel.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-neu-29",
    kategorie: "Straf- und Strafverfahrensrecht (StGB / StPO)",
    frage: "Welche Eigentums-, Vermögens- und Sachbeschädigungsdelikte müssen beherrscht werden?",
    antwort: "• § 242 StGB (Diebstahl): Wegnahme einer fremden beweglichen Sache in Zueignungsabsicht.\n• § 243 StGB: Besonders schwerer Fall des Diebstahls (z. B. Einbruch).\n• § 244 StGB (Diebstahl mit Waffen): Mitführen von Waffen/Werkzeugen beim Diebstahl. Verbrechen.\n• § 246 StGB (Unterschlagung): Rechtswidrige Zueignung einer Sache, die man bereits im Besitz hat.\n• § 248a StGB: Diebstahl geringwertiger Sachen (Wert unter ca. 50 Euro) wird nur auf Strafantrag verfolgt.\n• Raubdelikte: Raub (§ 249 StGB - Wegnahme mit Gewalt/Drohung), Räuberischer Diebstahl (§ 252 StGB - Gewaltanwendung des Diebs zur Behaltsicherung), Erpressung (§ 253 StGB).\n• § 303 StGB (Sachbeschädigung): Rechtswidrige Beschädigung/Zerstörung einer fremden Sache. Erfordert zwingend Vorsatz. Ein fahrlässig verursachter Unfall im Dienstwagen ist keine Straftat, sondern ein reiner Zivilschaden.\n• Weitere Delikte: Betrug (§ 263 StGB), Erschleichen von Leistungen (§ 265a StGB), Urkundenfälschung (§ 267 StGB), Missbrauch von Ausweispapieren (§ 281 StGB), Unterlassene Hilfeleistung (§ 323c StGB).",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-neu-30",
    kategorie: "Straf- und Strafverfahrensrecht (StGB / StPO)",
    frage: "Unter welchen Bedingungen ist die vorläufige Festnahme nach § 127 Abs. 1 StPO zulässig?",
    antwort: "• Frische Tat: Der Täter muss unmittelbar bei oder nach der Begehung einer Straftat (nicht bei Ordnungswidrigkeiten!) angetroffen oder verfolgt werden.\n• Festnahmegrund: Fluchtverdacht (Täter will sich entziehen) oder Identität ist nicht sofort feststellbar.\n• Zulässige Gewalt: Nur verhältnismäßiges Festhalten zur Übergabe an die Polizei. Durchsuchungen gegen den Willen oder schwere Verletzungen sind absolut verboten.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-neu-31",
    kategorie: "Straf- und Strafverfahrensrecht (StGB / StPO)",
    frage: "Welche Pflichten und Rechte hat eine Wachperson als Zeuge oder Beschuldigter im Strafverfahren?",
    antwort: "• Staatsanwaltschaft & Polizei: Staatsanwaltschaft leitet das Verfahren; Polizei ist ihr ausführendes Hilfsorgan.\n• Als Zeuge:\n  - Erscheinungspflicht: Auf Ladung von Gericht oder Staatsanwaltschaft zwingend erscheinen.\n  - Aussagepflicht: Wahrheitspflicht bei der Vernehmung.\n  - Zeugnisverweigerungsrecht (§ 52 StPO): Bei nahen Angehörigen.\n  - Auskunftsverweigerungsrecht (§ 55 StPO): Bei Fragen, die einen selbst oder Angehörige belasten würden.\n• Als Beschuldigter: Hat das Recht zu schweigen (Nemo-tenetur-Prinzip) und jederzeit einen Anwalt hinzuzuziehen.",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-neu-32",
    kategorie: "Straf- und Strafverfahrensrecht (StGB / StPO)",
    frage: "Welche waffenrechtlichen Erlaubnisse gibt es, und was gilt für gewerbliche Bewacher (§ 28 WaffG)?",
    antwort: "• Waffenbesitzkarte (WBK): Berechtigt zu Erwerb und Besitz einer Schusswaffe.\n• Waffenschein: Berechtigt zum Führen einer Schusswaffe außerhalb des befriedeten Besitztums.\n• Kleiner Waffenschein: Berechtigt zum Führen von Schreckschuss-/Reizstoffwaffen mit PTB-Zeichen (im gewerblichen Dienst laut UVV jedoch verboten).\n• Gewerbliches Führen (§ 28 WaffG): Erfordert ein behördlich anerkanntes Bedürfnis (z. B. Geldtransport, Personenschutz). Waffenträger müssen namentlich im Firmenwaffenschein eingetragen sein, das 18. Lebensjahr (unter 25 Jahren ist ein psychologisches Gutachten Pflicht) vollendet haben, zuverlässig, sachkundig und entsprechend haftpflichtversichert sein.",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-neu-33",
    kategorie: "Straf- und Strafverfahrensrecht (StGB / StPO)",
    frage: "Wie definieren sich die Begriffe Erwerben, Führen und Überlassen, und welche Ausweispflichten gelten?",
    antwort: "• Erwerben: Erlangung der tatsächlichen Gewalt über eine Waffe.\n• Führen: Ausübung der tatsächlichen Gewalt über eine Waffe außerhalb der eigenen Wohnung, Geschäftsräume oder des befriedeten Besitztums.\n• Überlassen: Einräumen der tatsächlichen Gewalt an einen anderen.\n• Ausweispflicht: Beim Führen oder Transportieren von Waffen müssen Waffenschein (bzw. WBK), Personalausweis und Dienstausweis stets mitgeführt werden.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-neu-34",
    kategorie: "Straf- und Strafverfahrensrecht (StGB / StPO)",
    frage: "Welche Waffen sind verboten, was gilt auf Veranstaltungen, und wie ist der Einsatz von Pfefferspray geregelt?",
    antwort: "• Verboten: Vollautomaten, Butterflymesser, Wurfsterne, getarnte Waffen (Umgang ist eine Straftat).\n• Öffentliche Veranstaltungen (§ 42 WaffG): Generelles Waffenverbot (gilt auch für Sicherheitskräfte, außer bei behördlicher Ausnahmegenehmigung).\n• Reizstoffsprühgeräte (Pfefferspray): Erlaubt, wenn sie ein amtliches PTB-Zulassungszeichen tragen oder als Tierabwehrspray gekennzeichnet sind. Der Einsatz gegen Menschen erfüllt den Tatbestand der gefährlichen Körperverletzung (§ 224 StGB) und ist nur durch Notwehr (§ 32 StGB) gerechtfertigt.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-neu-35",
    kategorie: "Unfallverhütungsvorschriften (UVV)",
    frage: "Welchen Geltungsbereich hat die DGUV Vorschrift 23, und wie regelt sie Eignung und Rauschmittelkonsum?",
    antwort: "• Geltungsbereich: Verbindliche Unfallverhütungsvorschrift (UVV) für alle Unternehmer und Versicherten (Wachpersonen) im Wach- und Sicherungsdienst.\n• Eignung (§ 3): Einsatz nur von körperlich, geistig und fachlich geeigneten Personen, die zuverlässig und mindestens 18 Jahre alt sind.\n• Rauschmittelverbot (§ 5): Absolutes Verbot von Alkohol und Drogen während des Dienstes. Wachpersonen müssen den Dienst in absolut nüchternem Zustand antreten.",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-neu-36",
    kategorie: "Unfallverhütungsvorschriften (UVV)",
    frage: "Welche sicherheitstechnischen Bestimmungen gelten für Dienstanweisungen, Objekteinweisungen und Ausrüstung?",
    antwort: "• Dienstanweisung (§ 4): Für jedes Objekt ist eine schriftliche Dienstanweisung zu erstellen. Sicherheitswidrige Weisungen des Auftraggebers dürfen nicht befolgt werden.\n• Besondere Gefahren (§ 7): Bei Alleinarbeit in gefährlichen Bereichen ist eine wirksame Überwachung (z. B. durch Funkintervalle oder technische Personen-Notsignal-Anlagen / Totmannschaltung) sicherzustellen.\n• Objekteinweisung (§ 9): Vor Dienstaufnahme im Objekt muss eine dokumentierte Einweisung in alle lokalen Gegebenheiten und Gefahrenstellen erfolgen.\n• Ausrüstung (§§ 10, 11): Kostenlose Bereitstellung notwendiger Ausrüstung (z. B. Handleuchten bei Dunkelheit). Brillenträger müssen im Dienst gegen Verlust gesicherte Brillen tragen (§ 11).",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-neu-37",
    kategorie: "Unfallverhütungsvorschriften (UVV)",
    frage: "Welche Regeln gelten für den Schutzdienst mit Hunden (§§ 12-17)?",
    antwort: "• Prüfungspflicht (§ 12): Für aktive Schutzaufgaben dürfen nur erfolgreich geprüfte Hunde (z. B. Schutzhundprüfung A) eingesetzt werden. Ungeprüfte Hunde sind nur für reine Wahrnehmungs- und Meldeaufgaben zulässig.\n• Hundeführer (§ 15): Muss nachweislich ausgebildet sein und den Hund jederzeit sicher beherrschen. Teamprüfung von Hund und Führer ist erforderlich.\n• Führung (§ 16): Grundsätzlich an der Leine führen; freies Laufenlassen ist nur in sicher eingefriedeten Bereichen erlaubt.\n• Haltung/Transport: Artgerechte Zwingerhaltung (§ 13); Transport im Fahrzeug nur in gesicherten Boxen oder durch Gitter getrennt (§ 17).",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-neu-38",
    kategorie: "Unfallverhütungsvorschriften (UVV)",
    frage: "Welche UVV-Auflagen gelten für Schusswaffen und Munition (§§ 18-22)?",
    antwort: "• Ausgabe/Prüfung: Nur nach ausdrücklicher Anweisung des Unternehmers. Jährliche Prüfung der Waffen auf Handhabungssicherheit durch einen Sachkundigen. Schreckschuss-/Gaswaffen sind im Dienst unzulässig.\n• Führen (§ 20): In geeigneten Holstern mit Verlustsicherung. Munition in Magazinen/Etuis mitführen. Keine Patrone im Patronenlager (Führen im teilgeladenen Zustand), äußere Sicherung muss aktiviert sein.\n• Übergabe (§ 21): Laden/Entladen nur auf eine sichere Kugelfangeinrichtung (z. B. Sandbehälter) gerichtet. Der Übernehmende hat sofort den Ladezustand zu prüfen.\n• Aufbewahrung (§ 22): Nur im vollständig entladenen Zustand, Schusswaffen und Munition getrennt voneinander in verschlossenen Waffenschränken aufbewahren.",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-neu-39",
    kategorie: "Unfallverhütungsvorschriften (UVV)",
    frage: "Welche Bestimmungen gelten für Geld- und Werttransporte (GWT)?",
    antwort: "• Eignung (§ 24): Mindestalter 18 Jahre, persönlich zuverlässig und für die speziellen GWT-Gefahren ausgebildet.\n• Boten-Sicherung (§ 25): Grundsätzlich durch mindestens zwei Boten (Mehrpersonen-Sicherung – einer trägt das Geld, einer sichert ab).\n• Ausnahmen (1 Bote): Nur wenn ausschließlich Hartgeld transportiert wird oder effektive technische Transportsicherungssysteme (z. B. Geldkoffer mit Färbetechnik) verwendet werden.\n• Transportbehältnisse: Dürfen nicht fest mit dem Körper des Boten verbunden sein (Verletzungs-/Geiselgefahr).\n• Fahrzeuge: Einsatz gepanzerter, unauffälliger Sonderschutzfahrzeuge.",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-neu-40",
    kategorie: "Unfallverhütungsvorschriften (UVV)",
    frage: "Welche grundlegenden Pflichten hat der Unternehmer nach der DGUV Vorschrift 1?",
    antwort: "• Gefährdungsbeurteilung (§ 3): Systematische Beurteilung der Arbeitsbedingungen. Das Risiko (R) wird als Produkt aus Eintrittswahrscheinlichkeit (P) und Schadenschwere (S) ermittelt: R = P x S.\n• Unterweisung (§ 4): Vor Arbeitsaufnahme, danach mindestens einmal jährlich nachweislich unterweisen.\n• Zutrittsverbote (§ 9): Sorge tragen, dass Unbefugte Gefahrenbereiche (z. B. Leitstellen, Geldbearbeitung) nicht betreten.\n• Erste Hilfe (§§ 24-26): Bereitstellung von Erste-Hilfe-Material (DIN 13157) und Organisation von Ersthelfern.\n  - 2 bis 20 anwesende Versicherte: 1 Ersthelfer (Auffrischung alle 2 Jahre).\n  - Über 20 Versicherte (Büro/Handel): 5 % der anwesenden Beschäftigten.\n  - Über 20 Versicherte (Sicherheitsdienst): 10 % der anwesenden Beschäftigten (Auffrischung alle 2 Jahre).",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-neu-41",
    kategorie: "Umgang mit Menschen und Verhalten in Gefahrensituationen",
    frage: "Welche körperlichen und mentalen Prozesse laufen bei Stress ab?",
    antwort: "• Kognitiv: Das rationale Denken wird blockiert; es entsteht ein Tunnelblick (Fokussierung rein auf die Gefahr, Ausblenden von Umgebungsreizen).\n• Emotional: Intensive Gefühle wie Angst, Panik oder Wut werden freigesetzt.\n• Körperlich: Adrenalin- und Cortisolausschüttung; Herzfrequenz und Blutdruck steigen massiv, Muskeln spannen sich an zur Vorbereitung auf Kampf oder Flucht (Fight-or-Flight-Response).\n• Sicherheitsrelevanz: Stress erhöht das Risiko für Fehleinschätzungen; Deeskalationstraining hilft zur Selbstkontrolle.",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-neu-42",
    kategorie: "Umgang mit Menschen und Verhalten in Gefahrensituationen",
    frage: "Wie beeinflussen Selbstwertgefühl und Vorurteile das Verhalten in Konflikten?",
    antwort: "• Selbstwertgefühl: Ein stabiles Selbstwertgefühl ermöglicht sachliches und emotional distanziertes Handeln bei Provokationen. Ein gestörtes (minderwertiges oder übersteigertes) Selbstwertgefühl führt oft zu aggressivem oder unsicherem Verhalten.\n• Selbstbild vs. Fremdbild: Weichen oft voneinander ab. Das eigene deeskalierende Auftreten kann vom Gegenüber fälschlich als Bedrohung oder Arroganz wahrgenommen werden.\n• Selektive Wahrnehmung: Unter Stress filtert das Gehirn Informationen und nimmt bevorzugt Reize wahr, die eigene Vorurteile oder Bedrohungsszenarien bestätigen.\n• Vorurteile: Verhindern objektive Lagebeurteilungen und führen zu voreingenommenem Handeln.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-neu-43",
    kategorie: "Umgang mit Menschen und Verhalten in Gefahrensituationen",
    frage: "Welche Kommunikationsregeln und Distanzzonen gelten im Umgang mit Menschen?",
    antwort: "• Sender-Empfänger-Modell: Missverständnisse entstehen, wenn Nachrichten auf einer anderen Ebene (z. B. Beziehungsebene) decodiert werden als beabsichtigt.\n• Aktives Zuhören: Volle Aufmerksamkeit signalisieren, ausreden lassen, Blickkontakt halten, das Gesagte sachlich wiederholen (Spiegeln). Baut emotionale Spannungen ab.\n• Körpersprache: Über 90 % der emotionalen Botschaften verlaufen nonverbal. Deeskalierend wirken eine offene, entspannte Körperhaltung und eine ruhige, feste Stimme.\n• Territorial- und Distanzverhalten:\n  - Intime Distanz (unter 0,5 m): Absoluter Schutzbereich. Unbefugtes Eindringen löst sofortige Abwehrreaktionen aus.\n  - Persönliche Distanz (0,5 m bis 1,2 m): Bereich für normale Gespräche. Bei aggressiven Personen taktisch zu nah (Schlaggefahr).\n  - Soziale Distanz (1,2 m bis 3,6 m): Optimaler Sicherheitsabstand für die Ansprache Fremder; sichert nötige Reaktionszeit.\n  - Öffentliche Distanz (über 3,6 m): Distanz bei Ansprachen vor Gruppen oder der Beobachtung von Menschenmengen.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-neu-44",
    kategorie: "Umgang mit Menschen und Verhalten in Gefahrensituationen",
    frage: "Was ist interkulturelle Kompetenz, und welche Pflichten gelten in Flüchtlingsunterkünften?",
    antwort: "• Interkulturelle Kompetenz: Fähigkeit, kulturell geprägte Verhaltensmuster zu verstehen, zu tolerieren und das eigene Verhalten deeskalierend anzupassen.\n• Diversität: Anerkennung und Wertschätzung gesellschaftlicher Vielfalt (Herkunft, Religion, Geschlecht, sexuelle Identität).\n• Besonders schutzbedürftige Geflüchtete: Alleinreisende Frauen, Schwangere, LGBTIQ*-Personen, Menschen mit Behinderung sowie Opfer von Folter oder Gewalt.\n• Handlungskompetenz:\n  - Durchsuchungen bei Frauen nur durch weibliche Sicherheitskräfte.\n  - Aktiver Schutz von Minderheiten vor Diskriminierung und Übergriffen.\n  - Traumatisierungen erkennen (Angst/Ausbrüche nicht als Böswilligkeit deuten); Hinzuziehen von Sozialdiensten und Dolmetschern.",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-neu-45",
    kategorie: "Umgang mit Menschen und Verhalten in Gefahrensituationen",
    frage: "Welche verbalen Deeskalationstechniken und Eigensicherungsregeln müssen angewendet werden?",
    antwort: "• Fragearten:\n  - Offene Fragen (W-Fragen): Sachliche Berichte fördern, emotionalen Druck abbauen.\n  - Geschlossene Fragen (Ja/Nein): Schnelle Faktenklärung in Gefahrenmomenten.\n  - Suggestiv-/Provokationsfragen: Unbedingt vermeiden (wirken deeskalationshemmend).\n• Gesprächsregeln: Vermeidung von Schuldzuweisungen („Sie-Botschaften“), stattdessen Ich-Botschaften nutzen (z. B. „Ich möchte Ihnen helfen, aber...“).\n• Eigensicherung: Niemals allein einschreiten (Sicherungs- und Kommunikationsposten bilden). Stabilen Stand einnehmen, soziale Distanz wahren und Fluchtwege für sich selbst freihalten.\n• Besondere Gruppen:\n  - Alkoholisierte/Drogenkonsumenten: Unberechenbar, reduziertes Schmerzempfinden. Keine Diskussionen; extrem ruhig und bestimmt auftreten.\n  - Psychisch Auffällige: Nicht auf Wahnvorstellungen einlassen; reizarme, beruhigende Ansprache wählen; sofort Rettungsdienst und Polizei verständigen.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-neu-46",
    kategorie: "Umgang mit Menschen und Verhalten in Gefahrensituationen",
    frage: "Wie verhalten sich Menschen in Gruppen, und was ist das Mitarbeitergespräch?",
    antwort: "• Verhalten in Massen: Sinken des persönlichen Verantwortungsgefühls (Deindividuation), hohe emotionale Ansteckung.\n• Panikverhalten: Irrationales Fluchtverhalten (Drängen zu Ausgängen).\n• Crowd Management: Ruhiges Auftreten, klare Durchsagen (Megafon), gezielte Lenkung der Personenströme, sofortige Öffnung aller Notausgänge. Kooperation mit Polizei/Feuerwehr.\n• Mitarbeitergespräch: Instrument zur Personalsteuerung. Dient der Leistungsbewertung, Konfliktlösung und Zuweisung von Weiterbildungen (z. B. Deeskalation, Waffensachkunde).\n• Ablauf: Vorbereitung (störungsfreier Rahmen) -> Durchführung (Feedback, Sichtweise des Mitarbeiters, Lösungssuche) -> Zielvereinbarung & schriftliche Dokumentation.",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-neu-47",
    kategorie: "Grundsätze der Sicherheitstechnik",
    frage: "Welche mechanischen Sicherungseinrichtungen gibt es, und wie wirken sie?",
    antwort: "• Zweck: Physisches Verhindern oder Verzögern unbefugten Eindringens (Schaffung von Interventionszeit für Sicherheitskräfte).\n• Einfriedungen: Zäune, Mauern und Tore zur Grundstücksabgrenzung.\n• Vereinzelungsanlagen: Drehkreuze, Schranken oder Schleusen zur kontrollierten Einzelidentifikation.\n• Durchlässe: Gitter oder feste Barrieren an Wand- und Deckenöffnungen.\n• Schlösser/Schließanlagen: Mechanische, mechatronische oder elektronische Schließsysteme zur Zutrittssteuerung.\n• Fensterschutz/Sicherheitsverglasung: Fenstergitter und Verbundsicherheitsglas (VSG - erschwert Durchwurf/Einschlagen durch elastische Folien).\n• Wertbehältnisse: Tresore, Safes und Waffenschränke (Klassifizierung in Widerstandsgrade nach EN 1143-1).",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-neu-48",
    kategorie: "Grundsätze der Sicherheitstechnik",
    frage: "Wie arbeiten elektronische Überwachungssysteme zusammen, und wie läuft die Interventionskette ab?",
    antwort: "• Systeme:\n  - Zutrittskontrollsysteme (ZKS): Steuern den Zutritt über Identifikationsmerkmale (RFID-Karten, PIN, Biometrie).\n  - Einbruchmeldeanlagen (EMA): Automatische Einbruchserkennung über Sensoren (Bewegungsmelder, Magnetkontakte, Glasbruchmelder).\n  - Überfallmeldeanlagen (ÜMA): Manuelle, meist stille Alarmauslösung bei Bedrohung (z. B. Panikknopf).\n  - Brandmeldeanlagen (BMA): Automatische Detektion von Rauch, Wärme oder Flammen.\n  - Videoüberwachungsanlagen (VÜA): Visuelle Überwachung, Alarmverifizierung und Beweissicherung.\n  - Totmannschaltung: Personen-Notsignal-Anlage (PNA) für Alleinarbeitsplätze; löst bei Bewegungslosigkeit automatisch Alarm aus.\n• Interventionskette: Alarmauslösung eines Sensors -> Übertragung an die zertifizierte Notruf- und Service-Leitstelle (NSL nach DIN EN 50518) -> Verifizierung durch die Leitstellenkraft (z. B. Kamerabild prüfen) -> Einleitung der vertraglichen Interventionsmaßnahmen (Alarmierung von Polizei, Feuerwehr oder Entsendung eigener Sicherheitskräfte).",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-neu-49",
    kategorie: "Grundsätze der Sicherheitstechnik",
    frage: "Welche Vor- und Nachteile haben analoge und digitale Funksysteme im Sicherheitsdienst?",
    antwort: "• Analoger Betriebsfunk:\n  - Vorteile: Günstige Anschaffung, einfache Handhabung.\n  - Nachteile: Keine Abhörsicherheit (leicht mit Scannern abzuhören); Sprachqualität sinkt mit der Distanz (Rauschen); keine Zusatzdienste.\n• Digitaler Betriebsfunk (z. B. TETRA, DMR):\n  - Vorteile: Sehr hohe Abhörsicherheit (Verschlüsselung, z. B. AES-256); exzellente Sprachqualität mit Rauschunterdrückung; Zusatzfunktionen wie GPS-Ortung, Textübertragung und Notruftasten für die Eigensicherung.\n  - Nachteile: Hohe Anschaffungs- und Infrastrukturkosten; komplexere Frequenzlizenzierung (Bundesnetzagentur).",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-neu-50",
    kategorie: "Grundsätze der Sicherheitstechnik",
    frage: "Welche physikalischen Brandvoraussetzungen und Brandklassen gibt es, und wie verhält sich das Personal?",
    antwort: "• Verbrennungsdreieck: Brennbarer Stoff, Sauerstoff (Oxidationsmittel) und Zündquelle (Wärme) müssen gleichzeitig vorliegen.\n• Brandklassen:\n  - Klasse A: Feste Stoffe (Holz, Papier) -> Wasser, Glutbrandpulver, Schaum.\n  - Klasse B: Flüssige Stoffe (Benzin, Lacke) -> Schaum, CO2, Pulver. (Kein Wasser!)\n  - Klasse C: Gase (Propan, Methan) -> Löschpulver (Gaslöscher).\n  - Klasse D: Metalle (Aluminium, Magnesium) -> Metallbrandpulver, trockener Sand. (Kein Wasser - Knallgasexplosion!)\n  - Klasse F: Speiseöle / Speisefette -> Speziallöschmittel/Fettbrandlöscher. (Kein Wasser - Fettexplosion!)\n• Verhalten des Sicherheitspersonals:\n  - Vorbeugend: Brandschutzkontrollen (Fluchtwege freihalten, Brandschutztüren, Feuerlöscher prüfen).\n  - Abwehrend: Menschenrettung vor Brandbekämpfung -> Alarmierung (112, BMA) -> Entstehungsbrände bekämpfen -> Einweisung der Feuerwehr.",
    schwierigkeit: "Schwer"
  },

  // ==========================================
  // 10. Umgang mit Waffen (10 Fragen)
  // ==========================================
  {
    id: "q-waffen-1",
    kategorie: "Umgang mit Waffen",
    frage: "Welchen Hauptzweck verfolgt das Waffengesetz (§ 1 WaffG) bei der Regulierung von Schusswaffen und Munition?",
    antwort: "Das Waffengesetz dient dem Schutz der öffentlichen Sicherheit und Ordnung durch streng reglementierten Umgang mit Waffen. Der Umgang mit Waffen ist grundsätzlich verboten, außer das Gesetz erlaubt es ausdrücklich.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-waffen-2",
    kategorie: "Umgang mit Waffen",
    frage: "Wann „führt“ eine Sicherheitskraft eine Schusswaffe im Sinne des Waffengesetzes (§ 1 Abs. 4 WaffG)?",
    antwort: "Eine Schusswaffe wird geführt, wenn man die tatsächliche Gewalt über die Waffe außerhalb der eigenen Wohnung, der eigenen Geschäftsräume oder des eigenen befriedeten Besitztums ausübt (z. B. im Holster am Koppel im Dienst).",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-waffen-3",
    kategorie: "Umgang mit Waffen",
    frage: "Wer ist bei bewaffneten Bewachungsaufgaben rechtlich Inhaber der Waffenbesitzkarte (WBK) für Dienstwaffen (§ 19 WaffG)?",
    antwort: "Inhaber der Waffenbesitzkarte ist das Bewachungsunternehmen (der Arbeitgeber). Die Mitarbeiter nutzen die Dienstwaffe lediglich im Rahmen des konkreten Dienstauftrags.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-waffen-4",
    kategorie: "Umgang mit Waffen",
    frage: "Welche Personen besitzen in der Regel NICHT die erforderliche waffenrechtliche Zuverlässigkeit oder Eignung (§§ 5, 6 WaffG)?",
    antwort: "Personen, die wegen einer vorsätzlichen Straftat zu mindestens 60 Tagessätzen verurteilt wurden, sowie alkohol- oder drogenabhängige Personen. Auch Alkoholeinfluss im Dienst führt zum Verlust der Zuverlässigkeit.",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-waffen-5",
    kategorie: "Umgang mit Waffen",
    frage: "Welche Vorgaben macht die DGUV Vorschrift 23 bezüglich der Bereitstellung von Dienstwaffen durch den Arbeitgeber?",
    antwort: "Schusswaffen und Munition müssen vom Bewachungsunternehmen bereitgestellt werden. Der Mitarbeiter muss schriftlich für den bewaffneten Dienst angewiesen und unterwiesen sein. Private Waffen sind im Dienst absolut verboten.",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-waffen-6",
    kategorie: "Umgang mit Waffen",
    frage: "Wie müssen Dienstwaffen und Munition nach Dienstende im Betrieb aufbewahrt werden (§ 36 WaffG)?",
    antwort: "In zertifizierten Waffenschränken nach gesetzlichen Normen (z. B. DIN/EN 1143-1), getrennt von Munition und gesichert gegen den Zugriff unbefugter Dritter.",
    schwierigkeit: "Mittel"
  },
  {
    id: "q-waffen-7",
    kategorie: "Umgang mit Waffen",
    frage: "Welche Anforderung gilt für den Einsatz einer Schusswaffe im Rahmen der Notwehr (§ 32 StGB)?",
    antwort: "Der Schusswaffengebrauch ist das letzte Mittel (Ultima Ratio) und darf nur zur Abwehr eines gegenwärtigen, rechtswidrigen und lebensgefährlichen Angriffs eingesetzt werden, wenn kein milderes Mittel ausreicht.",
    schwierigkeit: "Schwer"
  },
  {
    id: "q-waffen-8",
    kategorie: "Umgang mit Waffen",
    frage: "Für welche Waffenarten wird zum Führen in der Öffentlichkeit der „Kleine Waffenschein“ benötigt?",
    antwort: "Für Schreckschuss-, Reizstoff- und Signalwaffen mit PTB-Zeichen im Kreis. Ohne den Kleinen Waffenschein ist das Führen dieser Waffen in der Öffentlichkeit eine Straftat.",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-waffen-9",
    kategorie: "Umgang mit Waffen",
    frage: "Welche Gegenstände zählen nach Anlage 2 WaffG zu den absolut verbotenen Waffen in Deutschland?",
    antwort: "Unter anderem Schlagringe, Butterflymesser, Wurfsterne und Präzisionsschleudern. Der Besitz dieser Gegenstände ist eine Straftat.",
    schwierigkeit: "Leicht"
  },
  {
    id: "q-waffen-10",
    kategorie: "Umgang mit Waffen",
    frage: "Wie wird eine Schusswaffe ordnungsgemäß transportiert, ohne dass dies rechtlich als „Führen“ gilt?",
    antwort: "Die Schusswaffe muss ungeladen und in einem verschlossenen Behältnis (z. B. verschlossener Koffer oder Futteral) transportiert werden, sodass sie nicht mit wenigen Handgriffen zugriffsbereit ist.",
    schwierigkeit: "Mittel"
  }
];
