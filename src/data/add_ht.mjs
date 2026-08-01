// Script to add Haitian Creole translations to questions.ts
// Run with: node add_ht.mjs

import { readFileSync, writeFileSync } from 'fs';

const content = readFileSync('./src/data/questions.ts', 'utf8');

// Map of French text -> Haitian Creole translation
// This covers every unique fr: string in the file
const htMap = {
  // ── Topics ──
  "L'Arche de Noé": "Lacho Noe",
  "La Création — Jours 1–3": "Kreyasyon an — Jou 1–3",
  "La Création — Jours 4–7": "Kreyasyon an — Jou 4–7",
  "Adam et Ève": "Adam ak Èv",
  "La Chute — Le Serpent et le Fruit": "Chit la — Sèpan an ak Fwi a",
  "Caïn et Abel": "Kayen ak Abèl",
  "Noé Avant le Déluge": "Noe Anvan Delij la",
  "La Tour de Babel": "Tou Babèl la",
  "L'Appel d'Abraham": "Apèl Abraram",
  "Sodome et Gomorrhe": "Sodòm ak Gomò",
  "Abraham et Isaac — Le Sacrifice": "Abraram ak Izarak — Sakrifis la",
  "Jacob et Ésaü — Le Droit d'Aînesse": "Jakob ak Ezò — Dwa Premye Pitit",
  "Le Rêve de Jacob — L'Échelle": "Rèv Jakob — Eskalye a",
  "Joseph — La Trahison de ses Frères": "Jozèf — Traizon Frè li yo",
  "Joseph — De la Prison au Palais": "Jozèf — Soti nan Prizon rive Palè",
  "Bébé Moïse": "Ti Bebe Moyiz",
  "Moïse et le Buisson Ardent": "Moyiz ak Bwason ki Boule a",
  "Les Dix Plaies — Aperçu": "Dis Malediksyon yo — Apèsi",
  "La Pâque": "Pak la",
  "La Traversée de la Mer Rouge": "Travèse Lanmè Wouj la",
  "La Manne dans le Désert": "Mann nan Dezè a",
  "Les Dix Commandements": "Dis Kòmandman yo",
  "Le Veau d'Or": "Ti Towo Lò a",
  "Josué et Jéricho": "Jozye ak Jeriko",
  "Samson et Dalila": "Sansòn ak Dalila",
  "Ruth et Naomi": "Rit ak Nawomi",
  "Hannah et la Naissance de Samuel": "Ana ak Nesans Samyèl",
  "David et Goliath": "Davi ak Golyat",
  "La Sagesse de Salomon": "Sajès Solomòn",
  "Élie et les Prophètes de Baal": "Eli ak Pwofèt Baal yo",
  "Élie et la Voix Douce et Légère": "Eli ak Vwa Dousman an",
  "Jonas et le Grand Poisson": "Jonas ak Gwo Pwason an",
  "Shadrach, Méschac et Abed-Nego": "Chadrak, Mechak ak Abèdnego",
  "Daniel dans la Fosse aux Lions": "Danyèl nan Fòs Lyon yo",
  "Esther Sauve son Peuple": "Estè Sove Pèp Li a",
  "Les Mages et l'Étoile": "Maj yo ak Zetwal la",
  "Le Baptême de Jésus": "Batèm Jezi",
  "La Tentation de Jésus": "Tantasyon Jezi",
  "La Naissance de Jésus": "Nesans Jezi",
  "La Samaritaine": "Fanm Samaryèn nan",
  "La Multiplication des Pains": "Miltiplikasyon Pen yo",
  "Pierre Marche sur l'Eau": "Pyè Mache sou Dlo",
  "La Parabole du Fils Prodigue": "Parabòl Pitit Pèdi a",
  "La Résurrection de Jésus": "Rezireksyon Jezi",
  "L'Ascension de Jésus": "Asansyon Jezi",
  "La Pentecôte": "Pannkòt la",
  "L'Enfant Jésus au Temple": "Timoun Jezi nan Tanp lan",
  "La Brebis Perdue": "Mouton Pèdi a",
  "Les Noces de Cana": "Nòs Kana",
  "Lazare Ressuscité": "Laza Resisite",
  "Le Dimanche des Rameaux": "Dimanch Ramo",
  "Le Reniement de Pierre": "Renyeman Pyè",
  "Le Sermon sur la Montagne — Les Béatitudes": "Sèmon sou Mòn nan — Byennere yo",
  "La Transfiguration": "Transfigiration",
  "La Guérison de Dix Lépreux": "Geri Dis Lepwò",
  "La Prière du Seigneur": "Priyè Senyè a",
  "La Bénédiction de Jacob — La Ruse d'Isaac": "Benediksyon Jakob — Riz Izarak",
  "L'Ânesse de Balaam": "Bourik Balaam",
  "Saül Devient Roi": "Sayil Vin Wa",
  "La Crucifixion": "Krisifiksyon an",
  "L'Armée de Gédéon": "Lame Gedyon",
  "La Parabole des Talents": "Parabòl Talan yo",
  "La Souffrance de Job": "Soufrans Jòb",
  "Salomon et le Bébé — Le Jugement": "Solomòn ak Ti Bebe a — Jijman an",
  "Isaac et Rébecca": "Izarak ak Rebeka",
  "Déborah la Juge": "Debora Jij la",
  "Abraham et l'Alliance de la Circoncision": "Abraram ak Alyans Sikonsizyon an",
  "David et Saül": "Davi ak Sayil",
  "Les Douze Espions": "Douz Espyon yo",
  "David et Bethsabée": "Davi ak Batcheba",
  "Le Temple de Salomon": "Tanp Solomòn",
  "La Reine de Saba": "Rèn Cheba",
  "Le Royaume Divisé": "Wayòm Divize a",
  "Élie et la Veuve de Sarepta": "Eli ak Vèv Zarèfat",
  "Naaman et la Lèpre": "Neyaman ak Lalèp",
  "Ézéchias et Sennachérib": "Ezekyas ak Sanakerib",
  "La Chute de Jérusalem à Babylone": "Chit Jerizalèm devan Babilòn",
  "Néhémie et le Mur": "Neyemi ak Mi a",
  "Psaume 23": "Sòm 23",
  "Ésaïe 53 — Le Serviteur Souffrant": "Ezayi 53 — Sèvitè Soufran an",
  "Jérémie — La Nouvelle Alliance": "Jeremi — Nouvo Alyans lan",
  "Ézéchiel et la Nouvelle Alliance": "Ezekyèl ak Nouvo Alyans lan",
  "Michée — La Promesse du Messie": "Miche — Pwomès Mesi a",
  "Les Épîtres de Paul": "Lèt Pòl yo",
  "Romains 8 — Aucune Condamnation": "Women 8 — Pa Gen Kondanasyon",
  "Jean 3:16 — L'Amour de Dieu": "Jan 3:16 — Lanmou Bondye",
  "L'Acte Fondateur de l'Église": "Fondasyon Legliz la",
  "La Dernière Cène": "Dènye Soupè a",
  "Le Bon Samaritain": "Bon Samariten an",
  "La Femme Adultère": "Fanm Adiltè a",
  "La Parabole du Semeur": "Parabòl Semiyo a",
  "Les Béatitudes et l'Amour des Ennemis": "Byennere yo ak Renmen Ennmi yo",
  "L'Offrande de la Veuve": "Ofrann Vèv la",
  "La Parabole de la Pièce Perdue": "Parabòl Pyès Lajan Pèdi a",
  "La Désignation du Successeur de Moïse": "Chwa Siksesè Moyiz",
  "Le Vœu de Jephthah": "Vèv Jèfte",
  "L'Arche de l'Alliance Capturée": "Lach Alyans lan Kaptire",
  "Le Chemin d'Emmaüs": "Wout Emayis",
  "Élisée et l'Armée Syrienne": "Elyize ak Lame Siryen an",
  "La Rébellion d'Absalom": "Revòlt Absalòm",
  "Esdras Lit la Loi": "Ezra Li Lalwa",
  "Zacharie — Père de Jean-Baptiste": "Zakari — Papa Jan Batis",
  "La Parabole de la Graine de Sénevé": "Parabòl Grenn Moutad la",
  "Samuel Oint Saül": "Samyèl Wente Sayil",
  "Marie-Madeleine au Tombeau": "Mari Madelèn nan Tonbo a",
  "Le Rêve de Nébucadnetsar (Daniel 2)": "Rèv Nabikonezò (Danyèl 2)",
  "La Restauration de Pierre par Jésus": "Restòrasyon Pyè pa Jezi",
  "Le Pharisien et le Percepteur d'Impôts": "Farizeyen an ak Pèseptè Taks la",
  "Le Livre de Ruth — Boaz le Racheteur": "Liv Rit la — Boaz Raketè a",
  "Le Jour de la Pentecôte — Le Sermon de Pierre": "Jou Pannkòt la — Sèmon Pyè",
  "Le Fruit de l'Esprit (Galates 5)": "Fwi Lespri a (Galat 5)",
  "L'Armure de Dieu (Éphésiens 6)": "Zam Bondye a (Efezyen 6)",
  "Préparatifs de la Pentecôte — La Promesse de Jésus": "Preparasyon Pannkòt la — Pwomès Jezi",
  "La Parabole du Blé et de l'Ivraie": "Parabòl Ble ak move Zèb",
  "David Ramène l'Arche à Jérusalem": "Davi Renmnen Lach la nan Jerizalèm",
  "Le Chapitre sur l'Amour — 1 Corinthiens 13": "Chapit sou Lanmou a — 1 Korentyen 13",
  "Les Brebis et les Boucs (Matthieu 25)": "Mouton ak Kabrit yo (Matye 25)",
  "La Lettre de Paul à Philémon": "Lèt Pòl bay Filemòn",
  "Le Riche et Lazare": "Moun Rich la ak Laza",
  "Romains 3 et 5 — La Justification par la Foi": "Women 3 ak 5 — Jistifikasyon pa Lafwa",
  "Romains 8 — Rien ne peut séparer": "Women 8 — Anyen pa ka Separe",
  "1 Corinthiens — Le Chapitre sur la Résurrection": "1 Korentyen — Chapit sou Rezireksyon an",
  "Galates — La Controverse des Judaïsants": "Galat — Diskisyon Jwif Tradisyonèl yo",
  "Philippiens — La Joie en Prison et la Kénose": "Filipyen — Lajwa nan Prizon ak Kenòz la",
  "Hébreux — Le Grand Sacerdoce du Christ": "Ebre — Gran Prèt Kris la",
  "Jacques — La Foi et les Œuvres": "Jak — Lafwa ak Zèv",
  "1 Pierre — L'Espérance au Milieu de la Souffrance": "1 Pyè — Espwa nan Soufrans",
  "L'Apocalypse — Les Sept Lettres aux Églises": "Revelasyon — Sèt Lèt bay Legliz yo",
  "Apocalypse — Les Quatre Cavaliers": "Revelasyon — Kat Kavalye yo",
  "Jean 14–17 — Le Discours d'Adieu": "Jan 14–17 — Diskou Adye a",
  "Actes 2 — La Pentecôte": "Travay 2 — Pannkòt la",
  "Actes 10–11 — L'Évangile aux Gentils": "Travay 10–11 — Levanjil bay Moun ki pa Jwif",
  "L'Ascension et la Grande Commission": "Asansyon an ak Gran Misyon an",
  "Jean 1:1-18 — Le Prologue de Jean": "Jan 1:1-18 — Entwodiksyon Jan an",
  "Marc — L'Évangile de l'Action": "Mak — Levanjil Aksyon an",
  "Luc — L'Évangile de la Grâce et de l'Inclusion": "Lik — Levanjil Gras ak Enklizyon",
  "Matthieu — L'Évangile du Roi": "Matye — Levanjil Wa a",
  "L'Acte Fondateur de l'Église (Actes 1-2)": "Fondasyon Legliz la (Travay 1-2)",
  "Étienne — Le Premier Martyr": "Etyen — Premye Maten an",
  "La Conversion de Saül": "Konvèsyon Sayil",
  "Pierre et Corneille": "Pyè ak Kòneyi",
  "Paul et Silas à Philippes": "Pòl ak Silas nan Filipi",
  "Paul à Athènes — l'Aréopage": "Pòl nan Atèn — Areoyaj la",
  "Le Naufrage de Paul": "Nofraj Pòl",
  "Thomas l'Apôtre": "Toma Apòt la",
  "Le Concile de Jérusalem (Actes 15)": "Konsèy Jerizalèm (Travay 15)",
  "La Transfiguration — Détails": "Transfigiration — Detay",
  "Jonas à Ninive": "Jonas nan Niniv",
  "Le Sermon sur la Montagne — Sel et Lumière": "Sèmon sou Mòn nan — Sèl ak Limyè",
  "Lévitique — Le Système des Sacrifices": "Levitik — Sistèm Sakrifis yo",
  "Nombres — Israël dans le Désert": "Nonm — Izrayèl nan Dezè a",
  "Le Livre de l'Ecclésiaste": "Liv Eklezyastik la",
  "Proverbes — La Sagesse Divine": "Pwovèb — Sajès Bondye a",
  "Les Psaumes — David comme Auteur": "Sòm yo — Davi kòm Otè",
  "Ézéchiel — La Vision des Chérubins": "Ezekyèl — Vizyon Cheribis yo",
  "Amos — La Justice pour les Pauvres": "Amòs — Jistis pou Pòv yo",
  "Osée — L'Alliance Brisée": "Ozye — Alyans Kraze a",
  "La Naissance de Jean-Baptiste": "Nesans Jan Batis",
  "Jean — La Femme Samaritaine": "Jan — Fanm Samaryèn nan",
  "Le Discours Olivétique — Les Signes de la Fin": "Diskou Olivet la — Siy Fen Tan an",
  "Romains 9–11 — Israël et les Nations": "Women 9–11 — Izrayèl ak Nasyon yo",
  "1 Jean — La Communion et les Tests de la Foi": "1 Jan — Kominyon ak Eprèv Lafwa",
  "Apocalypse — Les 144 000": "Revelasyon — 144 000 yo",
  "La Nouvelle Alliance de Jérémie (Jérémie 31)": "Nouvo Alyans Jeremi (Jeremi 31)",
  "Les Béatitudes dans Luc vs Matthieu": "Byennere yo nan Lik vs Matye",
  "Jude — Défendre la Foi": "Jid — Defann Lafwa",
  "Les Vêtements du Sacrificateur (Exode 28)": "Rad Prèt la (Egzòd 28)",
  "1 Timothée — Qualifications des Responsables d'Église": "1 Timote — Kalite Lidè Legliz",
  "Malachie — La Dernière Parole Prophétique": "Malachi — Dènye Pawòl Pwofetik",
  "Pharisiens et Sadducéens — Différences Clés": "Farizeyen ak Sadiseyen — Diferans Kle",
  "Apocalypse — Le Règne Millénaire": "Revelasyon — Règn Milenyè a",
  "2 Timothée — La Dernière Lettre de Paul": "2 Timote — Dènye Lèt Pòl",
  "Paraboles du Royaume — Trésor caché et Perle": "Parabòl Wayòm — Trezò Kache ak Pèl",
  "La Loi Mosaïque — Divisions Principales": "Lalwa Moyiz — Gwo Divzyon yo",
  "Le Livre de Job — Dieu Parle du Tourbillon": "Liv Jòb — Bondye Pale nan Toubiyon an",
  "La Lettre de Paul aux Éphésiens — L'Église": "Lèt Pòl bay Efezyen yo — Legliz la",
  "L'Alliance Abrahamique — La Promesse du Pays": "Alyans Abraramik la — Pwomès Tè a",
  "Le Sanhédrin et le Procès Juif de Jésus": "Sanedren an ak Pwosè Jwif Jezi",
  "Les Femmes Prophètes dans la Bible": "Fanm Pwofèt nan Bib la",
  "Daniel 4 — La Folie de Nébucadnetsar": "Danyèl 4 — Foli Nabikonezò",
  "Les Dons Spirituels dans 1 Corinthiens 12": "Don Espirityèl nan 1 Korentyen 12",
  "Ésaïe 7:14 — La Prophétie de la Naissance Virginale": "Ezayi 7:14 — Pwofesi Nesans Vyèj la",
  "Le Livre de l'Apocalypse — La Vision d'Ouverture": "Liv Revelasyon an — Vizyon Ouvèti a",
};

// Process inline pattern: { en: "...", fr: "..." }
// Add ht: "..." after fr
function getHt(frText) {
  if (htMap[frText]) return htMap[frText];
  // If not found, return a placeholder that we can track
  return `[HT_MISSING: ${frText.substring(0, 30)}]`;
}

let result = content;

// Strategy: use regex to find all { en: "...", fr: "..." } patterns (inline and multiline)
// and add ht: after fr

// First, handle inline single-line patterns:
// { en: "...", fr: "..." }
// We need to add ht: "..." before the closing }

// We'll do this by processing the file and building a translation map
// for all fr values we encounter

// Actually, better approach: extract all fr values from the file,
// then manually provide translations, then do substitution

const frValues = new Set();
const inlinePattern = /\{\s*en:\s*"[^"]*",\s*fr:\s*"([^"]*)"\s*\}/g;
const multilinePattern = /fr:\s*"([^"]*)"\s*\n\s*\}/g;
const multilineFrLinePattern = /fr:\s*"([^"]*)"/g;

let match;
while ((match = multilineFrLinePattern.exec(content)) !== null) {
  frValues.add(match[1]);
}

console.log('Unique fr values found:', frValues.size);
// Output all fr values to stdout so we can see them
const sorted = [...frValues].sort();
sorted.forEach(v => console.log(JSON.stringify(v) + ','));
