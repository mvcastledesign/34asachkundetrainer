import { WrittenQuestion } from './types.ts';

export const INITIAL_WRITTEN_QUESTIONS: WrittenQuestion[] = [
  // ==========================================
  // 1. Recht der öffentlichen Sicherheit und Ordnung
  // ==========================================
  {
    id: "wq-oeff-1",
    kategorie: "Recht der öffentlichen Sicherheit und Ordnung",
    frage: "Was umfasst der Begriff 'Öffentliche Sicherheit' im deutschen Recht?",
    optionen: [
      "A) Ausschließlich den Schutz der staatlichen Einrichtungen und Gebäude.",
      "B) Den Schutz der Rechtsordnung, der Individualrechtsgüter (Leben, Gesundheit, Freiheit, Eigentum) und der staatlichen Einrichtungen.",
      "C) Nur die ungeschriebenen Regeln für das Verhalten in der Öffentlichkeit (Sitte und Moral).",
      "D) Die Wahrung der wirtschaftlichen Interessen privater Unternehmen."
    ],
    korrekteAntworten: [1],
    punkte: 1,
    erklaerung: "Erklärung: Die öffentliche Sicherheit umfasst drei Schutzgüter: die geschriebene Rechtsordnung, Individualrechtsgüter und den Staat mit seinen Einrichtungen."
  },
  {
    id: "wq-oeff-2",
    kategorie: "Recht der öffentlichen Sicherheit und Ordnung",
    frage: "Welche der folgenden Befugnisse stehen einer privaten Sicherheitskraft im öffentlichen Raum zur Verfügung?",
    optionen: [
      "A) Das Aussprechen eines polizeilichen Platzverweises.",
      "B) Die vorläufige Festnahme nach § 127 Abs. 1 StPO bei frischer Tat.",
      "C) Die Durchsuchung einer Person zur Feststellung der Identität.",
      "D) Die Notwehr nach § 32 StGB bei einem gegenwärtigen rechtswidrigen Angriff."
    ],
    korrekteAntworten: [1, 3],
    punkte: 2,
    erklaerung: "Erklärung: Private Sicherheitskräfte besitzen im öffentlichen Raum nur die Jedermannsrechte wie § 127 Abs. 1 StPO (Festnahme) und § 32 StGB (Notwehr). Polizeiliche Zwangsmittel stehen ihnen nicht zu."
  },
  {
    id: "wq-oeff-3",
    kategorie: "Recht der öffentlichen Sicherheit und Ordnung",
    frage: "Was bedeutet das staatliche Gewaltmonopol für private Sicherheitsdienste?",
    optionen: [
      "A) Sicherheitskräfte dürfen physische Gewalt nur im Rahmen gesetzlicher Notrechte (z.B. Notwehr, Selbsthilfe) anwenden.",
      "B) Sicherheitskräfte übernehmen hoheitliche Aufgaben und handeln wie die Polizei.",
      "C) Staatliche Stellen dürfen private Sicherheitsdienste nicht kontrollieren.",
      "D) Das Gewaltmonopol gilt nur für die Feuerwehr und das Rettungswesen."
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: "Erklärung: Das Gewaltmonopol liegt beim Staat. Private dürfen Gewalt nur ausnahmsweise im Rahmen von Notrechten (z. B. Notwehr/Besitzwehr) einsetzen."
  },

  // ==========================================
  // 2. Gewerberecht (GewO / BewachV)
  // ==========================================
  {
    id: "wq-gew-1",
    kategorie: "Gewerberecht (GewO / BewachV)",
    frage: "Für welche der folgenden Tätigkeiten ist das Bestehen der Sachkundeprüfung nach § 34a GewO gesetzlich zwingend vorgeschrieben?",
    optionen: [
      "A) Einlasskontrollen im Tūrsteherbereich von Diskotheken.",
      "B) Kontrollgänge im öffentlichen Verkehrsraum (z. B. Citystreifen).",
      "C) Einfacher Pfortendienst in einem normalen Verwaltungsgebäude ohne Publikumsverkehr.",
      "D) Schutz vor Ladendieben (Kaufhausdetektive)."
    ],
    korrekteAntworten: [0, 1, 3],
    punkte: 2,
    erklaerung: "Erklärung: Laut § 34a Abs. 1a GewO ist die Sachkundeprüfung zwingend für Citystreifen, Türsteher, Kaufhausdetektive sowie leitende Funktionen in Asylunterkünften und Großveranstaltungen."
  },
  {
    id: "wq-gew-2",
    kategorie: "Gewerberecht (GewO / BewachV)",
    frage: "Welche Voraussetzungen müssen erfüllt sein, bevor ein Sicherheitsmitarbeiter seinen Dienst aufnehmen darf?",
    optionen: [
      "A) Er muss mindestens 25 Jahre alt sein.",
      "B) Er muss im Bewacherregister eingetragen und durch die Behörde freigegeben (aktiviert) sein.",
      "C) Er muss den geforderten Qualifikationsnachweis (Unterrichtung oder Sachkunde) besitzen.",
      "D) Er muss eine mindestens einjährige Berufserfahrung nachweisen."
    ],
    korrekteAntworten: [1, 2],
    punkte: 2,
    erklaerung: "Erklärung: Vor Dienstantritt muss die Zuverlässigkeit geprüft, die Freigabe im Bewacherregister erteilt und die geforderte Qualifikation vorhanden sein."
  },
  {
    id: "wq-gew-3",
    kategorie: "Gewerberecht (GewO / BewachV)",
    frage: "Welche Angaben muss der Dienstausweis einer Wachperson nach der Bewachungsverordnung (BewachV) enthalten?",
    optionen: [
      "A) Name und Vorname der Wachperson sowie Name und Anschrift des Gewerbetreibenden.",
      "B) Die private Anschrift und Telefonnummer der Wachperson.",
      "C) Das Lichtbild der Wachperson.",
      "D) Die Bewacherregister-Identifikationsnummer (BewR-ID)."
    ],
    korrekteAntworten: [0, 2, 3],
    punkte: 2,
    erklaerung: "Erklärung: Der Dienstausweis erfordert Name/Vorname, Foto, Ausstellerdaten und die Eindeutige ID aus dem Bewacherregister. Die Privatadresse gehört nicht darauf."
  },

  // ==========================================
  // 3. Bürgerliches Gesetzbuch (BGB)
  // ==========================================
  {
    id: "wq-bgb-1",
    kategorie: "Bürgerliches Gesetzbuch (BGB)",
    frage: "Wie unterscheiden sich Eigentum und Besitz im Bürgerlichen Gesetzbuch?",
    optionen: [
      "A) Eigentum ist die tatsächliche Herrschaft über eine Sache (§ 854 BGB).",
      "B) Eigentum ist die rechtliche Herrschaft über eine Sache (§ 903 BGB).",
      "C) Besitz ist die tatsächliche Herrschaft über eine Sache (§ 854 BGB).",
      "D) Besitz und Eigentum sind juristisch vollkommen identisch."
    ],
    korrekteAntworten: [1, 2],
    punkte: 2,
    erklaerung: "Erklärung: Der Eigentümer hat das rechtliche Dürfen (§ 903 BGB), der Besitzer das tatsächliche Können/Körperliche Inhaben (§ 854 BGB)."
  },
  {
    id: "wq-bgb-2",
    kategorie: "Bürgerliches Gesetzbuch (BGB)",
    frage: "Unter welchen Voraussetzungen liegt 'Verbotene Eigenmacht' nach § 858 BGB vor?",
    optionen: [
      "A) Wenn dem Besitzer ohne dessen Willen der Besitz entzogen oder gestört wird.",
      "B) Wenn die Besitzentziehung ohne gesetzliche Gestattung erfolgt.",
      "C) Wenn der Eigentümer seine eigene Sache vom berechtigten Mieter zurückverlangt.",
      "D) Wenn die Polizei einen Beschluss zur Beschlagnahme vorlegt."
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: "Erklärung: Verbotene Eigenmacht ist das widerrechtliche Stören oder Entziehen des Besitzes ohne den Willen des Besitzers."
  },
  {
    id: "wq-bgb-3",
    kategorie: "Bürgerliches Gesetzbuch (BGB)",
    frage: "Was unterscheidet den Defensivnotstand (§ 228 BGB) vom Aggressivnotstand (§ 904 BGB)?",
    optionen: [
      "A) Beim Defensivnotstand geht die Gefahr von der Sache aus, die beschädigt oder zerstört wird.",
      "B) Beim Aggressivnotstand wird auf eine fremde Sache eingewirkt, von der selbst KEINE Gefahr ausgeht.",
      "C) Defensivnotstand gilt nur bei Angriffen durch Menschen.",
      "D) Aggressivnotstand erfordert eine Abwägung, bei der der drohende Schaden den Schaden an der Sache wesentlich überwiegt."
    ],
    korrekteAntworten: [0, 1, 3],
    punkte: 2,
    erklaerung: "Erklärung: § 228 BGB wehrt eine Gefahr ab, die von der Sache selbst ausgeht (z. B. beißender Hund). § 904 BGB nutzt eine unbeteiligte fremde Sache zur Abwehr einer fremden Gefahr."
  },

  // ==========================================
  // 4. Straf- und Strafverfahrensrecht (StGB / StPO)
  // ==========================================
  {
    id: "wq-stgb-1",
    kategorie: "Straf- und Strafverfahrensrecht (StGB / StPO)",
    frage: "Welche Voraussetzungen müssen für das Vorliegen einer Notwehr nach § 32 StGB erfüllt sein?",
    optionen: [
      "A) Es muss ein gegenwärtiger, rechtswidriger Angriff auf ein rechtlich geschütztes Gut vorliegen.",
      "B) Die Abwehrhandlung muss erforderlich und geboten sein.",
      "C) Der Angreifer muss zuvor schriftlich verwarnt worden sein.",
      "D) Es darf nur gegen menschliche Angriffe gehandelt werden."
    ],
    korrekteAntworten: [0, 1, 3],
    punkte: 2,
    erklaerung: "Erklärung: Notwehr verlangt einen gegenwärtigen, rechtswidrigen menschlichen Angriff. Die Abwehr muss erforderlich (mildestes wirksames Mittel) und geboten sein."
  },
  {
    id: "wq-stgb-2",
    kategorie: "Straf- und Strafverfahrensrecht (StGB / StPO)",
    frage: "Wann ist die vorläufige Festnahme nach § 127 Abs. 1 StPO rechtmäßig?",
    optionen: [
      "A) Wenn der Täter bei einer Straftat auf frischer Tat betroffen oder verfolgt wird.",
      "B) Wenn der Täter der Flucht verdächtig ist oder seine Identität nicht sofort festgestellt werden kann.",
      "C) Wenn der Täter eine bloße Ordnungswidrigkeit begangen hat.",
      "D) Jedes Mal, wenn ein Kunde im Laden einen nervösen Eindruck macht."
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: "Erklärung: § 127 Abs. 1 StPO setzt eine frische Tat (Straftat!) sowie Fluchtgefahr oder fehlende Identitätsfeststellbarkeit voraus."
  },
  {
    id: "wq-stgb-3",
    kategorie: "Straf- und Strafverfahrensrecht (StGB / StPO)",
    frage: "Worin unterscheidet sich Diebstahl (§ 242 StGB) von Unterschlagung (§ 246 StGB)?",
    optionen: [
      "A) Beim Diebstahl muss fremder Gewahrsam gebrochen werden.",
      "B) Bei der Unterschlagung liegt die Sache bereits im Gewahrsam des Täters oder ist gewahrsamlos (z. B. Fundsache).",
      "C) Diebstahl ist eine Ordnungswidrigkeit, Unterschlagung ein Verbrechen.",
      "D) Unterschlagung erfordert die Anwendung von Gewalt."
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: "Erklärung: Diebstahl setzt Gewahrsamsbruch voraus. Unterschlagung erfordert keinen Gewahrsamsbruch (z. B. Einbehalten gefundener Gegenstände)."
  },

  // ==========================================
  // 5. Umgang mit Menschen und Verhalten in Gefahrensituationen
  // ==========================================
  {
    id: "wq-mensch-1",
    kategorie: "Umgang mit Menschen und Verhalten in Gefahrensituationen",
    frage: "Welche Verhaltensweisen wirken in einer angespannten Konfliktsituation deeskalierend?",
    optionen: [
      "A) Blickkontakt halten, ohne die Gegenpartei anzustarren.",
      "B) Ruhige, sachliche Stimme nutzen und angemessene Eigensicherungsdistanz wahren.",
      "C) Den Gegenüber laut unterbrechen und mit Verschränkung der Arme dominieren.",
      "D) Ich-Botschaften verwenden statt beschuldigender Du-Botschaften."
    ],
    korrekteAntworten: [0, 1, 3],
    punkte: 2,
    erklaerung: "Erklärung: Deeskalation gelingt durch sachliche Kommunikation, wahren des Sicherheitsabstands und Vermeidung von Provokationen."
  },
  {
    id: "wq-mensch-2",
    kategorie: "Umgang mit Menschen und Verhalten in Gefahrensituationen",
    frage: "Was versteht man unter dem Begriff 'Eigensicherung' im Bewachungsdienst?",
    optionen: [
      "A) Die ständige Wahrnehmung des Umfelds zur Vorbeugung eigener Gefährdungen.",
      "B) Das Einhalten eines Sicherheitsabstandes (mind. Armlänge + Schritt) zu aggressiven Personen.",
      "C) Das sofortige körperliche Angreifen mutmaßlicher Störer.",
      "D) Die Absicherung von Fluchtwegen und Verstärkungsoptionen."
    ],
    korrekteAntworten: [0, 1, 3],
    punkte: 2,
    erklaerung: "Erklärung: Eigensicherung umfasst Prävention, Abstand, Umfeldbeobachtung und Eigenschutz, niemals unüberlegte Selbstjustiz."
  },

  // ==========================================
  // 6. Unfallverhütungsvorschriften (UVV)
  // ==========================================
  {
    id: "wq-uvv-1",
    kategorie: "Unfallverhütungsvorschriften (UVV)",
    frage: "Welche Pflichten ergeben sich aus der DGUV Vorschrift 23 (Bewachungsgewerbe) für Wachpersonen?",
    optionen: [
      "A) Während des Dienstes dürfen keine berauschenden Mittel (Alkohol, Drogen) konsumiert werden.",
      "B) Festgestellte Mängel an Sicherheitseinrichtungen müssen unverzüglich gemeldet werden.",
      "C) Zur Verfügung gestellte persönliche Schutzausrüstung (PSA) ist bestimmungsgemäß zu tragen.",
      "D) Dienstwaffen dürfen privat an Dritte verliehen werden."
    ],
    korrekteAntworten: [0, 1, 2],
    punkte: 2,
    erklaerung: "Erklärung: DGUV Vorschrift 23 verlangt Nüchternheit, Nutzung der PSA und unverzügliche Mängelmeldung zur Vermeidung von Arbeitsunfällen."
  },
  {
    id: "wq-uvv-2",
    kategorie: "Unfallverhütungsvorschriften (UVV)",
    frage: "Wer trägt laut Unfallverhütungsvorschriften die Verantwortung für die Bereitstellung geeigneter Arbeitsmittel und Schutzausrüstung?",
    optionen: [
      "A) Der Gewerbetreibende (Arbeitgeber).",
      "B) Die Berufsgenossenschaft.",
      "C) Der einzelne Kunde vor Ort.",
      "D) Die Polizeibehörde."
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: "Erklärung: Der Arbeitgeber ist verpflichtet, sichere Arbeitsmittel und erforderliche PSA bereitzustellen."
  },

  // ==========================================
  // 7. Grundsätze der Sicherheitstechnik
  // ==========================================
  {
    id: "wq-tech-1",
    kategorie: "Grundsätze der Sicherheitstechnik",
    frage: "Welche Typen von Einbruchmeldern werden zur Außenhautüberwachung eines Gebäudes eingesetzt?",
    optionen: [
      "A) Magnetkontakte an Fenstern und Türen.",
      "B) Glasbruchmelder an Scheiben.",
      "C) Bewegungsmelder im Flur (Fallenüberwachung).",
      "D) Rauchansaugsysteme."
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: "Erklärung: Außenhautüberwachung sichert die Gebäudehülle (Fenster, Türen, Glas). Bewegungsmelder im Innenraum dienen der Schwerpunkt-/Fallenüberwachung."
  },
  {
    id: "wq-tech-2",
    kategorie: "Grundsätze der Sicherheitstechnik",
    frage: "Welche Brandklassen kennzeichnen feste Stoffe (z. B. Holz, Papier) und flüssige Stoffe (z. B. Benzin)?",
    optionen: [
      "A) Brandklasse A für feste Stoffe.",
      "B) Brandklasse B für flüssige Stoffe.",
      "C) Brandklasse C für Metalle.",
      "D) Brandklasse F für Speiseöle."
    ],
    korrekteAntworten: [0, 1, 3],
    punkte: 2,
    erklaerung: "Erklärung: A = feste Stoffe, B = flüssige/flüssig werdende Stoffe, C = Gase, D = Metalle, F = Speiseöle/-fette."
  },

  // ==========================================
  // 8. Datenschutzrecht
  // ==========================================
  {
    id: "wq-dsgvo-1",
    kategorie: "Datenschutzrecht",
    frage: "Welche Grundsätze verlangt die Datenschutz-Grundverordnung (DSGVO) bei der Verarbeitung personenbezogener Daten?",
    optionen: [
      "A) Rechtmäßigkeit, Verarbeitung nach Treu und Glauben, Transparenz.",
      "B) Zweckbindung und Datenminimierung.",
      "C) Unbegrenzte Speicherung aller Besucherdaten ohne Löschfrist.",
      "D) Richtigkeit und Speicherbegrenzung."
    ],
    korrekteAntworten: [0, 1, 3],
    punkte: 2,
    erklaerung: "Erklärung: Art. 5 DSGVO nennt u. a. Rechtmäßigkeit, Transparenz, Zweckbindung, Datenminimierung, Richtigkeit und Speicherbegrenzung."
  },
  {
    id: "wq-dsgvo-2",
    kategorie: "Datenschutzrecht",
    frage: "Welche Anforderungen gelten für den rechtmäßigen Betrieb einer Videoüberwachungsanlage auf privat genutztem Betriebsgelände?",
    optionen: [
      "A) Gut sichtbare Hinweisschilder mit Piktogramm und Kontaktdaten des Verantwortlichen.",
      "B) Berechtigtes Interesse (z. B. Eigentumsschutz) nach Abwägung mit den Interessen der Betroffenen.",
      "C) Heimliche Aufzeichnung von öffentlichen Gehwegen rund um die Uhr.",
      "D) Festgelegte Löscherfristen für die Videodateien (in der Regel spätestens nach 72 Stunden)."
    ],
    korrekteAntworten: [0, 1, 3],
    punkte: 2,
    erklaerung: "Erklärung: Videoüberwachung erfordert Transparenz (Schilder), Abwägung berechtigter Interessen und zeitnahe Löschung. Heimliche Überwachung öffentlichen Raums ist unzulässig."
  },

  // ==========================================
  // 9. Umgang mit Waffen
  // ==========================================
  {
    id: "wq-waffen-1",
    kategorie: "Umgang mit Waffen",
    frage: "Grundsatz des Waffengesetzes (§ 1 WaffG)\nWelchen Hauptzweck verfolgt das Waffengesetz bei der Regulierung von Schusswaffen und Munition?",
    optionen: [
      "A) Den uneingeschränkten Erwerb von Waffen für alle Bürger zu fördern.",
      "B) Den Schutz der öffentlichen Sicherheit und Ordnung durch streng reglementierten Umgang mit Waffen zu gewährleisten.",
      "C) Den Export von Sportwaffen ins Ausland zu verdoppeln.",
      "D) Die Überwachung von Spielzeugwaffen in Kindertagesstätten."
    ],
    korrekteAntworten: [1],
    punkte: 1,
    erklaerung: "Erklärung: Das Waffengesetz dient dem Schutz der Allgemeinheit vor den Gefahren durch Waffen.\nPraxistipp für den Dienst: Der Umgang mit Waffen ist grundsätzlich verboten, außer das Gesetz erlaubt es ausdrücklich."
  },
  {
    id: "wq-waffen-2",
    kategorie: "Umgang mit Waffen",
    frage: "Begriff des Führens einer Waffe (§ 1 Abs. 4 WaffG)\nWann \"führt\" eine Sicherheitskraft eine Schusswaffe im Sinne des Waffengesetzes?",
    optionen: [
      "A) Wenn sie die tatsächliche Gewalt über die Waffe außerhalb der eigenen Wohnung, Geschäftsräume oder des befriedeten Besitztums ausübt.",
      "B) Wenn die Waffe zerlegt und gereinigt im betrieblichen Tresor liegt.",
      "C) Wenn die Waffe verpackt im Koffer von der Behörde nach Hause transportiert wird.",
      "D) Nur dann, wenn die Waffe abgefeuert wird."
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: "Erklärung: Führen bedeutet die Ausübung der tatsächlichen Gewalt außerhalb befriedeter eigener Bereiche.\nPraxistipp für den Dienst: Auch das Tragen im Holster am Koppelschloss im Dienst gilt rechtlich als Führen!"
  },
  {
    id: "wq-waffen-3",
    kategorie: "Umgang mit Waffen",
    frage: "Erwerb und Besitz von Dienstwaffen (§ 19 WaffG)\nWer ist bei bewaffneten Bewachungsaufgaben rechtlich der Inhaber der Waffenbesitzkarte (WBK) für die Dienstwaffen?",
    optionen: [
      "A) Der einzelne Sicherheitsmitarbeiter persönlich.",
      "B) Das Bewachungsunternehmen (Arbeitgeber).",
      "C) Der Auftraggeber des Schutzobjekts.",
      "D) Die örtliche Polizei."
    ],
    korrekteAntworten: [1],
    punkte: 1,
    erklaerung: "Erklärung: Das Unternehmen erhält die waffenrechtliche Erlaubnis zur Anschaffung und Überlassung an Mitarbeiter.\nPraxistipp für den Dienst: Du nutzt die Dienstwaffe nur im Rahmen des konkreten Dienstauftrags deines Arbeitgebers!"
  },
  {
    id: "wq-waffen-4",
    kategorie: "Umgang mit Waffen",
    frage: "Erforderliche Eignung und Zuverlässigkeit (§§ 5, 6 WaffG)\nWelche Personen besitzen in der Regel NICHT die erforderliche Zuverlässigkeit oder Eignung zum Führen einer Waffe?",
    optionen: [
      "A) Personen, die wegen einer vorsätzlichen Straftat zu einer Strafe von mindestens 60 Tagessätzen verurteilt wurden.",
      "B) Personen, die alkohol- oder drogenabhängig sind.",
      "C) Personen, die noch nie einen Führerschein besessen haben.",
      "D) Personen, die im Schützenverein Mitglied sind."
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: "Erklärung: Vorstrafen ab 60 Tagessätzen sowie Suchterkrankungen schließen die waffenrechtliche Eignung/Zuverlässigkeit aus.\nPraxistipp für den Dienst: Alkoholeinfluss im Dienst führt zum sofortigen Verlust der waffenrechtlichen Zuverlässigkeit."
  },
  {
    id: "wq-waffen-5",
    kategorie: "Umgang mit Waffen",
    frage: "Schusswaffengebrauch nach DGUV Vorschrift 23\nWelche Vorgabe macht die DGUV Vorschrift 23 bezüglich der Bereitstellung von Dienstwaffen durch den Arbeitgeber?",
    optionen: [
      "A) Schusswaffen und Munition müssen vom Bewachungsunternehmen gestellt werden.",
      "B) Der Mitarbeiter muss vom Arbeitgeber schriftlich für den bewaffneten Dienst angewiesen und unterwiesen sein.",
      "C) Der Mitarbeiter darf seine private Jagdwaffe im Dienst tragen.",
      "D) Eine mündliche Absprache auf der Baustelle reicht aus."
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: "Erklärung: Private Waffen sind im Dienst verboten. Waffe, Munition und schriftliche Unterweisung müssen vom Betrieb stammen.\nPraxistipp für den Dienst: Trage niemals eine private Waffe im Dienst – das verstößt gegen UVV und Waffengesetz!"
  },
  {
    id: "wq-waffen-6",
    kategorie: "Umgang mit Waffen",
    frage: "Aufbewahrung von Waffen und Munition (§ 36 WaffG)\nWie müssen Dienstwaffen und Munition nach Dienstende im Betrieb aufbewahrt werden?",
    optionen: [
      "A) In zertifizierten Waffenschränken nach den gesetzlichen Normen (z. B. DIN/EN 1143-1).",
      "B) So, dass unbefugte Dritte (z. B. Reinigungskräfte, Besucher) keinen Zugriff darauf haben.",
      "C) Ungeladen in einer unverschlossenen Schreibtischschublade.",
      "D) Im Handschuhfach des unverschlossenen Streifenwagens."
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: "Erklärung: Gesetz und UVV verlangen die gesicherte Trennung und Aufbewahrung in zertifizierten Behältnissen.\nPraxistipp für den Dienst: Nach Dienstende gehört die Waffe sofort in den Tresor der Dienststelle."
  },
  {
    id: "wq-waffen-7",
    kategorie: "Umgang mit Waffen",
    frage: "Notwehr mit der Schusswaffe (§ 32 StGB)\nWelche Anforderung gilt für den Einsatz der Schusswaffe zur Abwehr eines Angriffs im Rahmen der Notwehr?",
    optionen: [
      "A) Der Schusswaffengebrauch muss das erforderlich mildeste Mittel zur Abwehr eines lebensgefährlichen Angriffs sein.",
      "B) Die Schusswaffe darf bei jeder einfachen Sachbeschädigung sofort eingesetzt werden.",
      "C) Ein Warnschuss ist gesetzlich unter allen Umständen verboten.",
      "D) Schusswaffen dürfen nur gegen Sachen gerichtet werden."
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: "Erklärung: Der Schusswaffengebrauch ist das letzte Mittel (Ultima Ratio) bei lebensbedrohlichen Angriffen.\nPraxistipp für den Dienst: Wenn Androhung oder mildere Mittel ausreichen, ist der Schusswaffengebrauch rechtswidrig!"
  },
  {
    id: "wq-waffen-8",
    kategorie: "Umgang mit Waffen",
    frage: "Kleiner Waffenschein\nFür welche Waffenarten wird zum Führen in der Öffentlichkeit der \"Kleine Waffenschein\" benötigt?",
    optionen: [
      "A) Schreckschusswaffen mit PTB-Zeichen im Kreis.",
      "B) Reizstoffwaffen mit PTB-Zeichen im Kreis.",
      "C) Scharfe Dienstpistolen im Geldtransport.",
      "D) Tierabwehrsprays."
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: "Erklärung: Das Führen von PTB-Gas- und Schreckschusswaffen erfordert den Kleinen Waffenschein.\nPraxistipp für den Dienst: Ohne Kleinen Waffenschein ist das Führen von Schreckschusswaffen eine Straftat."
  },
  {
    id: "wq-waffen-9",
    kategorie: "Umgang mit Waffen",
    frage: "Verbotene Waffen nach Anlage 2 WaffG\nWelche der folgenden Gegenstände sind nach dem Waffengesetz in Deutschland absolut verboten?",
    optionen: [
      "A) Schlagringe.",
      "B) Butterflymesser.",
      "C) Pfeffersprays mit Kennzeichnung \"Tierabwehrspray\".",
      "D) Taschenlampen mit Metallgehäuse."
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: "Erklärung: Schlagringe und Butterflymesser sind verbotene Gegenstände laut WaffG.\nPraxistipp für den Dienst: Der Besitz verbotener Waffen ist eine Straftat, keine bloße Ordnungswidrigkeit."
  },
  {
    id: "wq-waffen-10",
    kategorie: "Umgang mit Waffen",
    frage: "Transport von Waffen\nWie wird eine Schusswaffe ordnungsgemäß transportiert, ohne dass dies als \"Führen\" gilt?",
    optionen: [
      "A) Ungeladen und in einem verschlossenen Behältnis (z. B. verschlossener Koffer).",
      "B) Geladen auf dem Beifahrersitz.",
      "C) Griffbereit in der Jackentasche.",
      "D) Ungeladen im Handschuhfach ohne Schloss."
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: "Erklärung: Nicht zugriffsbereit (verschlossen) und ungeladen gilt die Beförderung als Transport.\nPraxistipp für den Dienst: \"Nicht zugriffsbereit\" bedeutet, dass die Waffe nicht mit wenigen Handgriffen einsatzbereit ist."
  }
];
