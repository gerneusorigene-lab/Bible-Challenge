import type { LocalizedText } from '@/utils/localizedText';

export type { Language } from '@/i18n/translations';
export type { LocalizedText } from '@/utils/localizedText';

export interface Statement {
  id: string;
  text: LocalizedText;
  isTruth: boolean;
}

export interface Level {
  id: string;
  levelNumber: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  difficultyFr: 'Débutant' | 'Intermédiaire' | 'Avancé';
  topic: LocalizedText;
  statements: Statement[];
  explanation: LocalizedText;
  scripture?: LocalizedText;
  teacherNote?: LocalizedText;
  didYouKnow?: LocalizedText;
  lifeApplication?: LocalizedText;
  badgeColor: string;
  testament: 'Old' | 'New';
}



export const LEVELS: Level[] = [
  // ─── BEGINNER ────────────────────────────────────────────────────────────────
  {
    id: 'b1', levelNumber: 1, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Noah's Ark", fr: "L'Arche de Noé" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b1-a', isTruth: true,  text: { en: "God used a rainbow as a sign of His covenant to never flood the entire Earth again.", fr: "Dieu a utilisé l'arc-en-ciel comme signe de son alliance pour ne plus jamais inonder la Terre entière." } },
      { id: 'b1-b', isTruth: true,  text: { en: "Noah brought seven pairs of certain clean animals onto the ark.", fr: "Noé a fait monter sept couples de certains animaux purs dans l'arche." } },
      { id: 'b1-c', isTruth: false, text: { en: "The ark floated on the floodwaters for exactly 40 days before landing on dry ground.", fr: "L'arche a flotté sur les eaux du déluge pendant exactement 40 jours avant de se poser sur la terre ferme." } },
      { id: 'b1-d', isTruth: true,  text: { en: "Noah sent out both a raven and a dove to check if the waters had dried up.", fr: "Noé a envoyé un corbeau et une colombe pour vérifier si les eaux avaient baissé." } },
    ],
    explanation: { en: "Rain fell for 40 days, but the floodwaters covered the Earth for over 150 days before the ark rested on Mount Ararat (Genesis 7:24 / 8:4).", fr: "La pluie est tombée pendant 40 jours, mais les eaux ont recouvert la Terre pendant plus de 150 jours avant que l'arche ne se pose sur le mont Ararat (Genèse 7:24 / 8:4)." },
    didYouKnow: { en: "Genesis gives the ark's dimensions as 300 cubits long, 50 cubits wide, and 30 cubits high.", fr: "La Genèse donne les dimensions de l'arche : 300 coudées de long, 50 de large et 30 de haut." }
  },
  {
    id: 'b2', levelNumber: 2, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Creation — Days 1–3", fr: "La Création — Jours 1–3" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b2-a', isTruth: true,  text: { en: "God created light on the first day and separated it from darkness.", fr: "Dieu a créé la lumière le premier jour et l'a séparée des ténèbres." } },
      { id: 'b2-b', isTruth: true,  text: { en: "God created the sky (firmament) to separate the waters on the second day.", fr: "Dieu a créé le ciel (firmament) pour séparer les eaux le deuxième jour." } },
      { id: 'b2-c', isTruth: true,  text: { en: "God created dry land and vegetation — plants and fruit trees — on the third day.", fr: "Dieu a créé la terre sèche et la végétation — plantes et arbres fruitiers — le troisième jour." } },
      { id: 'b2-d', isTruth: false, text: { en: "God rested on the third day after completing the sea and sky.", fr: "Dieu s'est reposé le troisième jour après avoir créé la mer et le ciel." } },
    ],
    explanation: { en: "God rested on the seventh day — the Sabbath — not the third. He continued creating through day six, resting only after all creation was complete (Genesis 2:2-3).", fr: "Dieu s'est reposé le septième jour — le Sabbat — et non le troisième. Il a continué de créer jusqu'au sixième jour (Genèse 2:2-3)." },
    didYouKnow: { en: "Genesis 1 repeats the phrase 'and there was evening, and there was morning' as the creation days unfold.", fr: "Genèse 1 répète l'expression « il y eut un soir, et il y eut un matin » au fil des jours de la création." }
  },
  {
    id: 'b3', levelNumber: 3, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Creation — Days 4–7", fr: "La Création — Jours 4–7" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b3-a', isTruth: true,  text: { en: "God created the sun, moon, and stars on the fourth day.", fr: "Dieu a créé le soleil, la lune et les étoiles le quatrième jour." } },
      { id: 'b3-b', isTruth: true,  text: { en: "God created birds and sea creatures on the fifth day.", fr: "Dieu a créé les oiseaux et les créatures marines le cinquième jour." } },
      { id: 'b3-c', isTruth: false, text: { en: "God created human beings on the fifth day alongside the birds and sea animals.", fr: "Dieu a créé les êtres humains le cinquième jour, avec les oiseaux et les animaux marins." } },
      { id: 'b3-d', isTruth: true,  text: { en: "God declared everything He had made to be 'very good' at the end of the sixth day.", fr: "Dieu a déclaré que tout ce qu'Il avait fait était 'très bon' à la fin du sixième jour." } },
    ],
    explanation: { en: "Humans were created on the sixth day, along with land animals — not on the fifth day. The fifth day was for birds and sea creatures (Genesis 1:23-31).", fr: "Les êtres humains ont été créés le sixième jour, avec les animaux terrestres — et non le cinquième jour (Genèse 1:23-31)." },
    didYouKnow: { en: "The seventh day is the only creation day in Genesis 1–2 that is specifically described as blessed and made holy.", fr: "Le septième jour est le seul jour de la création que Genèse 1–2 décrit expressément comme béni et sanctifié." }
  },
  {
    id: 'b4', levelNumber: 4, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Adam and Eve", fr: "Adam et Ève" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b4-a', isTruth: true,  text: { en: "God formed Adam from the dust of the ground and breathed life into him.", fr: "Dieu a formé Adam de la poussière de la terre et lui a insufflé la vie." } },
      { id: 'b4-b', isTruth: true,  text: { en: "God put Adam into a deep sleep to take a rib and form Eve.", fr: "Dieu a plongé Adam dans un profond sommeil pour prendre une côte et former Ève." } },
      { id: 'b4-c', isTruth: false, text: { en: "Adam named all the animals after Eve was created.", fr: "Adam a nommé tous les animaux après la création d'Ève." } },
      { id: 'b4-d', isTruth: true,  text: { en: "God planted the Garden of Eden in the east and placed Adam there to work it.", fr: "Dieu a planté le jardin d'Éden à l'est et y a placé Adam pour le cultiver." } },
    ],
    explanation: { en: "Adam named the animals before Eve was created. God brought the animals to Adam to name, found no suitable helper, then created Eve from Adam's rib (Genesis 2:19-22).", fr: "Adam a nommé les animaux avant la création d'Ève. Dieu amena les animaux à Adam pour qu'il les nomme, ne trouva aucun aide convenable, puis créa Ève (Genèse 2:19-22)." },
    didYouKnow: { en: "Eve is called 'the mother of all the living' in Genesis 3:20.", fr: "Ève est appelée « la mère de tous les vivants » en Genèse 3:20." }
  },
  {
    id: 'b5', levelNumber: 5, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Fall — The Serpent and the Fruit", fr: "La Chute — Le Serpent et le Fruit" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b5-a', isTruth: true,  text: { en: "The serpent was described as more crafty than any other animal God had made.", fr: "Le serpent était décrit comme plus rusé que tous les animaux que Dieu avait faits." } },
      { id: 'b5-b', isTruth: true,  text: { en: "Eve saw that the fruit was good for food, pleasing to the eye, and desirable for gaining wisdom.", fr: "Ève vit que le fruit était bon à manger, agréable à regarder et désirable pour acquérir la sagesse." } },
      { id: 'b5-c', isTruth: true,  text: { en: "God made garments of skin for Adam and Eve after the Fall.", fr: "Dieu a fait des vêtements de peau pour Adam et Ève après la Chute." } },
      { id: 'b5-d', isTruth: false, text: { en: "God gave the serpent, Adam, and Eve exactly the same punishment for the Fall.", fr: "Dieu a infligé exactement la même punition au serpent, à Adam et à Ève après la Chute." } },
    ],
    explanation: { en: "God gave each a distinct punishment: the serpent was cursed to crawl on its belly; Eve received pain in childbearing; Adam was condemned to labor over a cursed ground (Genesis 3:14-19).", fr: "Dieu a donné à chacun une punition distincte : le serpent condamné à ramper, Ève à souffrir lors des accouchements, Adam à peiner sur une terre maudite (Genèse 3:14-19)." },
    didYouKnow: { en: "Genesis never identifies the forbidden fruit as an apple; it simply calls it fruit from the tree of the knowledge of good and evil.", fr: "La Genèse n'identifie jamais le fruit défendu comme une pomme ; elle parle simplement du fruit de l'arbre de la connaissance du bien et du mal." }
  },
  {
    id: 'b6', levelNumber: 6, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Cain and Abel", fr: "Caïn et Abel" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b6-a', isTruth: true,  text: { en: "Abel kept flocks while Cain worked the soil.", fr: "Abel était berger tandis que Caïn travaillait la terre." } },
      { id: 'b6-b', isTruth: true,  text: { en: "The LORD looked with favor on Abel's offering but not on Cain's.", fr: "L'Éternel porta un regard favorable sur l'offrande d'Abel, mais pas sur celle de Caïn." } },
      { id: 'b6-c', isTruth: true,  text: { en: "God warned Cain that sin was crouching at his door before Cain killed Abel.", fr: "Dieu avertit Caïn que le péché était tapi à sa porte avant qu'il ne tue Abel." } },
      { id: 'b6-d', isTruth: false, text: { en: "After killing Abel, Cain was sentenced by God to be imprisoned for life.", fr: "Après avoir tué Abel, Caïn fut condamné par Dieu à l'emprisonnement à vie." } },
    ],
    explanation: { en: "God punished Cain by making him a restless wanderer. He was not imprisoned. God also put a mark on Cain so that no one would kill him (Genesis 4:12-15).", fr: "Dieu a puni Caïn en le condamnant à être un errant. Il ne fut pas emprisonné. Dieu mit aussi un signe sur Caïn pour que personne ne le tue (Genèse 4:12-15)." },
    didYouKnow: { en: "Abel is the first person in Scripture whose death is recorded, and Hebrews 11 later remembers him for his faith.", fr: "Abel est la première personne dont la mort est rapportée dans l'Écriture, et Hébreux 11 le rappelle plus tard pour sa foi." }
  },
  {
    id: 'b7', levelNumber: 7, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Noah Before the Flood", fr: "Noé Avant le Déluge" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b7-a', isTruth: true,  text: { en: "Noah was 600 years old when the floodwaters came upon the earth.", fr: "Noé avait 600 ans lorsque les eaux du déluge se répandirent sur la terre." } },
      { id: 'b7-b', isTruth: true,  text: { en: "God told Noah to make the ark with three decks.", fr: "Dieu ordonna à Noé de construire l'arche avec trois ponts." } },
      { id: 'b7-c', isTruth: false, text: { en: "God commanded Noah to bring two of every animal — exactly one male and one female of every kind.", fr: "Dieu ordonna à Noé d'amener deux de chaque animal — exactement un mâle et une femelle de chaque espèce." } },
      { id: 'b7-d', isTruth: true,  text: { en: "God told Noah He would establish His covenant with him.", fr: "Dieu dit à Noé qu'Il établirait son alliance avec lui." } },
    ],
    explanation: { en: "For clean animals, God commanded seven pairs. Only unclean animals were limited to one pair each, so the command varied by animal type.", fr: "Pour les animaux purs, Dieu demanda sept couples. Seuls les animaux impurs étaient limités à un couple; le commandement variait donc selon le type d'animal." },
    scripture: { en: "Genesis 7:2–3", fr: "Genèse 7:2–3" },
    teacherNote: {
      en: "The extra clean animals made it possible for Noah to offer sacrifices after leaving the ark without endangering the survival of those kinds.",
      fr: "Les animaux purs supplémentaires permirent à Noé d'offrir des sacrifices après sa sortie de l'arche sans mettre en danger la survie de ces espèces."
    },
    didYouKnow: {
      en: "The distinction between clean and unclean animals appears in Genesis before the Law of Moses was given.",
      fr: "La distinction entre animaux purs et impurs apparaît dans la Genèse avant que la loi de Moïse ne soit donnée."
    },
    lifeApplication: {
      en: "Careful reading matters: a small detail can change the meaning of an entire statement.",
      fr: "Une lecture attentive est importante : un petit détail peut changer le sens d'une affirmation entière."
    }
  },
  {
    id: 'b8', levelNumber: 8, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Tower of Babel", fr: "La Tour de Babel" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b8-a', isTruth: true,  text: { en: "The whole world had one language before the Tower of Babel.", fr: "Le monde entier parlait une seule langue avant la tour de Babel." } },
      { id: 'b8-b', isTruth: true,  text: { en: "The people wanted to build a tower reaching to the heavens to make a name for themselves.", fr: "Le peuple voulait bâtir une tour atteignant les cieux pour se faire un nom." } },
      { id: 'b8-c', isTruth: true,  text: { en: "God confused the people's language so they could not understand each other.", fr: "Dieu a confondu le langage des gens afin qu'ils ne puissent plus se comprendre." } },
      { id: 'b8-d', isTruth: false, text: { en: "God destroyed the Tower of Babel with fire from heaven.", fr: "Dieu a détruit la tour de Babel avec du feu venant du ciel." } },
    ],
    explanation: { en: "The Bible does not record God destroying the tower. God scattered the people by confusing their language. What happened to the tower itself is not stated (Genesis 11:8).", fr: "La Bible ne mentionne pas que Dieu a détruit la tour. Il a simplement dispersé les gens en confondant leur langage (Genèse 11:8)." },
    didYouKnow: { en: "Babel is associated with the confusion of languages, and Genesis says the people were scattered over the face of the earth.", fr: "Babel est associé à la confusion des langues, et la Genèse dit que les peuples furent dispersés sur toute la surface de la terre." }
  },
  {
    id: 'b9', levelNumber: 9, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Abraham's Call", fr: "L'Appel d'Abraham" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b9-a', isTruth: true,  text: { en: "God called Abram to leave his country, his people, and his father's household.", fr: "Dieu appela Abram à quitter son pays, sa parenté et la maison de son père." } },
      { id: 'b9-b', isTruth: true,  text: { en: "Abram was 75 years old when he left Haran in obedience to God's command.", fr: "Abram avait 75 ans lorsqu'il quitta Haran en obéissant à l'ordre de Dieu." } },
      { id: 'b9-c', isTruth: false, text: { en: "Abram went alone to Canaan, leaving his family behind as God commanded.", fr: "Abram s'en alla seul au pays de Canaan, laissant sa famille derrière lui comme Dieu l'avait ordonné." } },
      { id: 'b9-d', isTruth: true,  text: { en: "God promised to make Abram into a great nation and bless those who blessed him.", fr: "Dieu promit de faire d'Abram une grande nation et de bénir ceux qui le béniraient." } },
    ],
    explanation: { en: "Abram took his wife Sarai, his nephew Lot, and all the people and possessions they had acquired in Haran. He did not go alone (Genesis 12:4-5).", fr: "Abram emmena sa femme Saraï, son neveu Lot, et toutes leurs possessions et serviteurs acquis à Haran. Il ne s'en alla pas seul (Genèse 12:4-5)." },
    didYouKnow: { en: "God changed Abram's name to Abraham later in Genesis 17, when He reaffirmed His covenant promises.", fr: "Dieu changea plus tard le nom d'Abram en Abraham dans Genèse 17, lorsqu'il réaffirma les promesses de son alliance." }
  },
  {
    id: 'b10', levelNumber: 10, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Sodom and Gomorrah", fr: "Sodome et Gomorrhe" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b10-a', isTruth: true,  text: { en: "Abraham negotiated with God, asking Him to spare Sodom if ten righteous people were found there.", fr: "Abraham a négocié avec Dieu, lui demandant d'épargner Sodome si dix justes y étaient trouvés." } },
      { id: 'b10-b', isTruth: true,  text: { en: "Two angels visited Lot in Sodom and were threatened by the men of the city.", fr: "Deux anges rendirent visite à Lot à Sodome et furent menacés par les hommes de la ville." } },
      { id: 'b10-c', isTruth: true,  text: { en: "Lot's wife looked back at the burning city and became a pillar of salt.", fr: "La femme de Lot regarda derrière elle la ville en feu et devint une colonne de sel." } },
      { id: 'b10-d', isTruth: false, text: { en: "Lot and all four of his daughters escaped safely from Sodom.", fr: "Lot et ses quatre filles s'échappèrent tous sains et saufs de Sodome." } },
    ],
    explanation: { en: "Lot had two daughters who escaped. His sons-in-law refused to leave, and his wife turned into a pillar of salt. Only Lot and his two daughters survived (Genesis 19:14-26).", fr: "Lot n'avait que deux filles qui s'échappèrent. Ses gendres refusèrent de partir, et sa femme devint une colonne de sel. Seuls Lot et ses deux filles survécurent (Genèse 19:14-26)." },
    didYouKnow: { en: "Abraham's intercession for Sodom moved step by step from fifty righteous people down to ten.", fr: "L'intercession d'Abraham pour Sodome descendit progressivement de cinquante justes jusqu'à dix." }
  },
  {
    id: 'b11', levelNumber: 11, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Abraham and Isaac — The Sacrifice", fr: "Abraham et Isaac — Le Sacrifice" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b11-a', isTruth: true,  text: { en: "God told Abraham to sacrifice his son Isaac on a mountain in the region of Moriah.", fr: "Dieu ordonna à Abraham d'offrir son fils Isaac en sacrifice sur une montagne en pays de Moria." } },
      { id: 'b11-b', isTruth: true,  text: { en: "Isaac himself carried the wood for the burnt offering up the mountain.", fr: "Isaac porta lui-même le bois de l'holocauste jusqu'au sommet de la montagne." } },
      { id: 'b11-c', isTruth: true,  text: { en: "An angel of the LORD called out to stop Abraham just as he raised the knife.", fr: "Un ange de l'Éternel appela Abraham pour l'arrêter au moment où il levait le couteau." } },
      { id: 'b11-d', isTruth: false, text: { en: "God provided a white bull caught in the bushes as the substitute sacrifice for Isaac.", fr: "Dieu fournit un taureau blanc coincé dans les buissons en substitution au sacrifice d'Isaac." } },
    ],
    explanation: { en: "God provided a ram caught by its horns in a thicket — not a bull. Abraham named that place 'The LORD Will Provide' (Genesis 22:13).", fr: "Dieu fournit un bélier pris par les cornes dans un buisson — pas un taureau. Abraham appela cet endroit 'L'Éternel pourvoira' (Genèse 22:13)." },
    didYouKnow: { en: "The place where Abraham was tested is associated with Moriah, a name later connected with the site of Solomon's temple.", fr: "Le lieu où Abraham fut éprouvé est associé à Moria, nom plus tard lié au site du temple de Salomon." }
  },
  {
    id: 'b12', levelNumber: 12, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Jacob and Esau — The Birthright", fr: "Jacob et Ésaü — Le Droit d'Aînesse" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b12-a', isTruth: true,  text: { en: "Esau was born first and came out covered in red hair.", fr: "Ésaü est né en premier et était couvert de poils roux." } },
      { id: 'b12-b', isTruth: true,  text: { en: "Esau sold his birthright to Jacob for bread and lentil stew.", fr: "Ésaü vendit son droit d'aînesse à Jacob pour du pain et de la soupe aux lentilles." } },
      { id: 'b12-c', isTruth: false, text: { en: "Jacob and Esau were born several years apart to different mothers.", fr: "Jacob et Ésaü sont nés à plusieurs années d'intervalle, de mères différentes." } },
      { id: 'b12-d', isTruth: true,  text: { en: "Jacob came out of the womb grasping Esau's heel, which is how he got his name.", fr: "Jacob sortit du ventre maternel en saisissant le talon d'Ésaü, d'où vient son nom." } },
    ],
    explanation: { en: "Jacob and Esau were twins born to the same mother, Rebekah. They were born on the same day, not years apart (Genesis 25:24-26).", fr: "Jacob et Ésaü étaient des jumeaux nés de la même mère, Rébecca. Ils naquirent le même jour, pas à plusieurs années d'intervalle (Genèse 25:24-26)." },
    didYouKnow: { en: "Esau was also called Edom, a name connected with the red stew for which he sold his birthright.", fr: "Ésaü fut aussi appelé Édom, un nom lié au ragoût rouge pour lequel il vendit son droit d'aînesse." }
  },
  {
    id: 'b13', levelNumber: 13, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Jacob's Dream — The Ladder", fr: "Le Rêve de Jacob — L'Échelle" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b13-a', isTruth: true,  text: { en: "Jacob dreamed of a stairway (ladder) reaching from earth to heaven.", fr: "Jacob rêva d'une échelle allant de la terre jusqu'au ciel." } },
      { id: 'b13-b', isTruth: true,  text: { en: "Angels of God were ascending and descending on the stairway in Jacob's dream.", fr: "Des anges de Dieu montaient et descendaient l'échelle dans le rêve de Jacob." } },
      { id: 'b13-c', isTruth: true,  text: { en: "Jacob used a stone as a pillow the night he had this dream.", fr: "Jacob utilisa une pierre comme oreiller la nuit où il fit ce rêve." } },
      { id: 'b13-d', isTruth: false, text: { en: "Jacob had this dream while staying at his uncle Laban's house in Haran.", fr: "Jacob fit ce rêve pendant qu'il séjournait chez son oncle Laban à Haran." } },
    ],
    explanation: { en: "Jacob had this dream at Bethel, while journeying toward Haran. He had not yet arrived at Laban's house when this vision occurred (Genesis 28:10-19).", fr: "Jacob fit ce rêve à Béthel, en route vers Haran. Il n'était pas encore chez Laban quand cette vision se produisit (Genèse 28:10-19)." },
    didYouKnow: { en: "Jacob named the place Bethel, meaning 'house of God,' after his dream of the stairway to heaven.", fr: "Jacob appela ce lieu Béthel, qui signifie « maison de Dieu », après son rêve de l'échelle vers le ciel." }
  },
  {
    id: 'b14', levelNumber: 14, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Joseph — His Brothers' Betrayal", fr: "Joseph — La Trahison de ses Frères" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b14-a', isTruth: true,  text: { en: "Joseph's father gave him a richly ornamented robe (coat of many colors).", fr: "Le père de Joseph lui offrit une tunique de plusieurs couleurs (une robe brodée)." } },
      { id: 'b14-b', isTruth: true,  text: { en: "Joseph dreamed that his brothers' sheaves bowed down to his sheaf.", fr: "Joseph rêva que les gerbes de ses frères se prosternaient devant la sienne." } },
      { id: 'b14-c', isTruth: false, text: { en: "Reuben suggested selling Joseph to merchants; he wanted to get rid of him permanently.", fr: "Ruben suggéra de vendre Joseph à des marchands car il voulait se débarrasser de lui définitivement." } },
      { id: 'b14-d', isTruth: true,  text: { en: "Joseph's brothers dipped his robe in goat's blood to deceive their father.", fr: "Les frères de Joseph trempèrent sa tunique dans du sang de bouc pour tromper leur père." } },
    ],
    explanation: { en: "It was Reuben who saved Joseph from death by suggesting they throw him in a pit — secretly planning to rescue him later. It was Judah who then proposed selling Joseph to merchants (Genesis 37:21-27).", fr: "C'est Ruben qui sauva Joseph de la mort en proposant de le jeter dans une citerne, prévoyant de le secourir ensuite. C'est Juda qui proposa de le vendre aux marchands (Genèse 37:21-27)." },
    didYouKnow: { en: "Joseph was seventeen years old when Genesis first describes him tending his father's flocks with his brothers.", fr: "Joseph avait dix-sept ans lorsque la Genèse le présente pour la première fois en train de garder les troupeaux de son père avec ses frères." }
  },
  {
    id: 'b15', levelNumber: 15, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Joseph — From Prison to Palace", fr: "Joseph — De la Prison au Palais" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b15-a', isTruth: true,  text: { en: "Pharaoh dreamed of seven fat cows devoured by seven thin cows.", fr: "Pharaon rêva de sept vaches grasses dévorées par sept vaches maigres." } },
      { id: 'b15-b', isTruth: true,  text: { en: "Joseph interpreted the dreams as seven years of abundance followed by seven years of famine.", fr: "Joseph interpréta les rêves comme sept années d'abondance suivies de sept années de famine." } },
      { id: 'b15-c', isTruth: true,  text: { en: "Pharaoh gave Joseph his signet ring and put him in charge of all Egypt.", fr: "Pharaon donna son anneau à Joseph et le plaça à la tête de tout l'Égypte." } },
      { id: 'b15-d', isTruth: false, text: { en: "Joseph interpreted Pharaoh's dreams while still sitting in his prison cell.", fr: "Joseph interpréta les rêves de Pharaon tout en étant encore assis dans sa cellule de prison." } },
    ],
    explanation: { en: "Joseph was brought out of prison, shaved, changed his clothes, and was then brought before Pharaoh. He interpreted the dreams in Pharaoh's court, not from prison (Genesis 41:14).", fr: "Joseph fut sorti de prison, se rasa, changea de vêtements, puis fut présenté à Pharaon. Il interpréta les rêves dans la cour de Pharaon, pas depuis la prison (Genèse 41:14)." },
    didYouKnow: { en: "Joseph was thirty years old when Pharaoh placed him in authority over Egypt.", fr: "Joseph avait trente ans lorsque Pharaon lui confia l'autorité sur l'Égypte." }
  },
  {
    id: 'b16', levelNumber: 16, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Baby Moses", fr: "Bébé Moïse" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b16-a', isTruth: true,  text: { en: "Moses' mother hid him for three months after he was born.", fr: "La mère de Moïse l'a caché pendant trois mois après sa naissance." } },
      { id: 'b16-b', isTruth: true,  text: { en: "Moses was placed in a papyrus basket coated with tar and pitch on the Nile River.", fr: "Moïse fut placé dans un panier de papyrus enduit de bitume et de poix sur le Nil." } },
      { id: 'b16-c', isTruth: false, text: { en: "It was Pharaoh's sister who discovered the basket and adopted Moses as her son.", fr: "C'est la sœur de Pharaon qui découvrit le panier et adopta Moïse comme son fils." } },
      { id: 'b16-d', isTruth: true,  text: { en: "Moses' own mother was hired as his wet nurse after Pharaoh's daughter found him.", fr: "La propre mère de Moïse fut engagée comme nourrice après que la fille de Pharaon l'eut trouvé." } },
    ],
    explanation: { en: "It was Pharaoh's daughter, not his sister, who found the basket and had compassion on Moses. She raised him as her own son (Exodus 2:5-10).", fr: "C'est la fille de Pharaon, et non sa sœur, qui trouva le panier et prit Moïse en pitié. Elle l'éleva comme son propre fils (Exode 2:5-10)." },
    didYouKnow: { en: "Moses' sister watched the basket from a distance and helped arrange for their own mother to nurse him.", fr: "La sœur de Moïse surveilla le panier de loin et contribua à faire engager leur propre mère pour l'allaiter." }
  },
  {
    id: 'b17', levelNumber: 17, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Moses and the Burning Bush", fr: "Moïse et le Buisson Ardent" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b17-a', isTruth: true,  text: { en: "Moses saw a bush on fire that was not burning up.", fr: "Moïse vit un buisson en feu qui ne se consumait pas." } },
      { id: 'b17-b', isTruth: true,  text: { en: "God told Moses to remove his sandals because he was standing on holy ground.", fr: "Dieu dit à Moïse d'ôter ses sandales car il se tenait sur une terre sainte." } },
      { id: 'b17-c', isTruth: false, text: { en: "Moses was 40 years old when he encountered the burning bush.", fr: "Moïse avait 40 ans lorsqu'il rencontra le buisson ardent." } },
      { id: 'b17-d', isTruth: true,  text: { en: "God revealed His name to Moses as 'I AM WHO I AM.'", fr: "Dieu révéla son nom à Moïse comme 'Je suis celui qui suis.'" } },
    ],
    explanation: { en: "Moses was approximately 80 years old at the burning bush. He fled Egypt at age 40 after killing an Egyptian, spent 40 years in Midian, then God called him (Acts 7:23, 30; Exodus 7:7).", fr: "Moïse avait environ 80 ans lors du buisson ardent. Il s'enfuit d'Égypte à 40 ans, passa 40 ans à Madian, puis Dieu l'appela (Actes 7:23, 30 ; Exode 7:7)." },
    didYouKnow: { en: "The burning bush encounter took place near Horeb, which Exodus calls the mountain of God.", fr: "La rencontre du buisson ardent eut lieu près de l'Horeb, que l'Exode appelle la montagne de Dieu." }
  },
  {
    id: 'b18', levelNumber: 18, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Ten Plagues — Overview", fr: "Les Dix Plaies — Aperçu" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b18-a', isTruth: true,  text: { en: "The first plague turned all the water of the Nile River into blood.", fr: "La première plaie transforma toute l'eau du Nil en sang." } },
      { id: 'b18-b', isTruth: true,  text: { en: "The ninth plague was three days of total darkness covering all of Egypt.", fr: "La neuvième plaie fut trois jours de ténèbres totales couvrant toute l'Égypte." } },
      { id: 'b18-c', isTruth: true,  text: { en: "During the plague of darkness, the Israelites had light in their dwellings.", fr: "Durant la plaie des ténèbres, les Israélites avaient de la lumière dans leurs demeures." } },
      { id: 'b18-d', isTruth: false, text: { en: "The plague of frogs was the third plague sent on Egypt.", fr: "La plaie des grenouilles était la troisième plaie envoyée sur l'Égypte." } },
    ],
    explanation: { en: "Frogs was the second plague, not the third. The order was: blood, frogs, gnats, flies, livestock disease, boils, hail, locusts, darkness, death of firstborn (Exodus 7-12).", fr: "Les grenouilles étaient la deuxième plaie, pas la troisième. L'ordre était : sang, grenouilles, moustiques, mouches, mort du bétail, ulcères, grêle, sauterelles, ténèbres, mort des premiers-nés (Exode 7-12)." },
    didYouKnow: { en: "Some of the plagues affected Egypt while the Israelites in Goshen were specifically protected.", fr: "Certaines plaies frappèrent l'Égypte tandis que les Israélites vivant à Goshen furent expressément protégés." }
  },
  {
    id: 'b19', levelNumber: 19, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Passover", fr: "La Pâque" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b19-a', isTruth: true,  text: { en: "God commanded the Israelites to smear lamb's blood on their doorposts and lintel.", fr: "Dieu ordonna aux Israélites de mettre le sang d'un agneau sur leurs montants de portes et leur linteau." } },
      { id: 'b19-b', isTruth: true,  text: { en: "The Israelites were to eat the Passover lamb with bitter herbs and unleavened bread.", fr: "Les Israélites devaient manger l'agneau pascal avec des herbes amères et du pain sans levain." } },
      { id: 'b19-c', isTruth: false, text: { en: "The Israelites celebrated the first Passover for seven days before they left Egypt.", fr: "Les Israélites célébrèrent la première Pâque pendant sept jours avant de quitter l'Égypte." } },
      { id: 'b19-d', isTruth: true,  text: { en: "God said He would 'pass over' the houses marked with blood and spare the firstborn inside.", fr: "Dieu dit qu'Il 'passerait' devant les maisons marquées de sang et épargnerait les premiers-nés." } },
    ],
    explanation: { en: "The Israelites ate the Passover meal quickly and left Egypt that very night. The seven-day Feast of Unleavened Bread was a separate memorial celebration (Exodus 12:11-17).", fr: "Les Israélites mangèrent le repas de la Pâque rapidement et quittèrent l'Égypte cette même nuit. La fête des pains sans levain de sept jours était une commémoration distincte (Exode 12:11-17)." },
    didYouKnow: { en: "The Passover became an annual memorial for Israel, recalling deliverance from slavery in Egypt.", fr: "La Pâque devint une commémoration annuelle pour Israël, rappelant la délivrance de l'esclavage en Égypte." }
  },
  {
    id: 'b20', levelNumber: 20, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Crossing the Red Sea", fr: "La Traversée de la Mer Rouge" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b20-a', isTruth: true,  text: { en: "Moses stretched out his hand and God drove the sea back with a strong east wind.", fr: "Moïse étendit la main et Dieu repoussa la mer par un fort vent d'est." } },
      { id: 'b20-b', isTruth: true,  text: { en: "The Israelites walked through the sea on dry ground with walls of water on both sides.", fr: "Les Israélites traversèrent la mer à pied sur la terre sèche, avec des murs d'eau de chaque côté." } },
      { id: 'b20-c', isTruth: true,  text: { en: "God looked through a pillar of fire and cloud and threw the Egyptian army into confusion.", fr: "Dieu regarda depuis la colonne de feu et de nuée et sema la confusion dans l'armée égyptienne." } },
      { id: 'b20-d', isTruth: false, text: { en: "God destroyed the Egyptian army by sending lightning bolts from the sky.", fr: "Dieu détruisit l'armée égyptienne en envoyant des éclairs depuis le ciel." } },
    ],
    explanation: { en: "God caused the sea to flow back and covered the Egyptian chariots and horsemen. There is no mention of lightning — the water itself returned and overwhelmed them (Exodus 14:27-28).", fr: "Dieu fit revenir les eaux qui submergèrent les chars et les cavaliers égyptiens. Il n'est pas question d'éclairs — ce sont les eaux elles-mêmes qui revinrent et les engloutirent (Exode 14:27-28)." },
    didYouKnow: { en: "After crossing the sea, Moses and the Israelites sang a victory song recorded in Exodus 15.", fr: "Après la traversée de la mer, Moïse et les Israélites chantèrent un cantique de victoire rapporté en Exode 15." }
  },
  {
    id: 'b21', levelNumber: 21, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Manna in the Wilderness", fr: "La Manne dans le Désert" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b21-a', isTruth: true,  text: { en: "Manna appeared on the ground like thin flakes or frost each morning.", fr: "La manne apparaissait sur le sol comme de minces flocons ou du givre chaque matin." } },
      { id: 'b21-b', isTruth: true,  text: { en: "The Israelites gathered twice as much manna on the sixth day to prepare for the Sabbath.", fr: "Les Israélites ramassèrent deux fois plus de manne le sixième jour pour préparer le Sabbat." } },
      { id: 'b21-c', isTruth: true,  text: { en: "The manna tasted like wafers made with honey.", fr: "La manne avait le goût de gâteaux au miel." } },
      { id: 'b21-d', isTruth: false, text: { en: "Manna appeared every morning including the Sabbath day.", fr: "La manne apparaissait chaque matin, y compris le jour du Sabbat." } },
    ],
    explanation: { en: "God provided no manna on the Sabbath. On the sixth day, a double portion fell so the Israelites would not need to gather on the seventh day (Exodus 16:25-27).", fr: "Dieu ne fit pas tomber de manne le Sabbat. Le sixième jour, une double portion tomba pour que les Israélites n'aient pas à ramasser le septième jour (Exode 16:25-27)." },
    didYouKnow: { en: "Israel ate manna for forty years, until they reached the border of Canaan.", fr: "Israël mangea la manne pendant quarante ans, jusqu'à son arrivée aux frontières de Canaan." }
  },
  {
    id: 'b22', levelNumber: 22, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Ten Commandments", fr: "Les Dix Commandements" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b22-a', isTruth: true,  text: { en: "God wrote the Ten Commandments on two stone tablets.", fr: "Dieu écrivit les Dix Commandements sur deux tables de pierre." } },
      { id: 'b22-b', isTruth: true,  text: { en: "The Sabbath commandment instructs rest on the seventh day.", fr: "Le commandement du Sabbat ordonne de se reposer le septième jour." } },
      { id: 'b22-c', isTruth: true,  text: { en: "The commandment against idolatry prohibits making any carved image for worship.", fr: "Le commandement contre l'idolâtrie interdit de fabriquer toute image taillée pour l'adorer." } },
      { id: 'b22-d', isTruth: false, text: { en: "Moses received the Ten Commandments on Mount Hermon.", fr: "Moïse reçut les Dix Commandements sur le mont Hermon." } },
    ],
    explanation: { en: "Moses received the Ten Commandments on Mount Sinai (also called Horeb), not Mount Hermon. Mount Hermon is a different northern mountain (Exodus 19:20; 24:12).", fr: "Moïse reçut les Dix Commandements sur le mont Sinaï (aussi appelé Horeb), pas sur le mont Hermon. Le mont Hermon est une montagne différente au nord (Exode 19:20 ; 24:12)." },
    didYouKnow: { en: "The Ten Commandments are recorded in both Exodus 20 and Deuteronomy 5.", fr: "Les Dix Commandements sont rapportés à la fois en Exode 20 et en Deutéronome 5." }
  },
  {
    id: 'b23', levelNumber: 23, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Golden Calf", fr: "Le Veau d'Or" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b23-a', isTruth: true,  text: { en: "The Israelites gave Aaron their gold earrings to make the golden calf.", fr: "Les Israélites remirent à Aaron leurs boucles d'oreilles en or pour fabriquer le veau d'or." } },
      { id: 'b23-b', isTruth: true,  text: { en: "Aaron declared of the calf, 'These are your gods, Israel, who brought you up out of Egypt.'", fr: "Aaron déclara au sujet du veau : 'Israël, voici ton dieu qui t'a fait monter du pays d'Égypte.'" } },
      { id: 'b23-c', isTruth: false, text: { en: "God immediately sent an earthquake to punish the Israelites who worshiped the golden calf.", fr: "Dieu envoya immédiatement un tremblement de terre pour punir les Israélites qui adoraient le veau d'or." } },
      { id: 'b23-d', isTruth: true,  text: { en: "Moses was on Mount Sinai for forty days and forty nights before coming down.", fr: "Moïse fut sur le mont Sinaï pendant quarante jours et quarante nuits avant de descendre." } },
    ],
    explanation: { en: "There was no earthquake. Moses interceded with God, then came down and broke the tablets. Those who didn't repent were put to the sword by the Levites — not killed by an earthquake (Exodus 32:26-28).", fr: "Il n'y eut pas de tremblement de terre. Moïse intercéda auprès de Dieu, puis descendit et brisa les tables. Ceux qui ne se repentirent pas furent mis à mort par l'épée des Lévites (Exode 32:26-28)." },
    didYouKnow: { en: "Moses ground the golden calf into powder, scattered it on water, and made the Israelites drink it.", fr: "Moïse réduisit le veau d'or en poudre, la répandit sur l'eau et fit boire cette eau aux Israélites." }
  },
  {
    id: 'b24', levelNumber: 24, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Joshua and Jericho", fr: "Josué et Jéricho" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b24-a', isTruth: true,  text: { en: "God commanded Israel to march around Jericho once a day for six days.", fr: "Dieu ordonna à Israël de faire le tour de Jéricho une fois par jour pendant six jours." } },
      { id: 'b24-b', isTruth: true,  text: { en: "On the seventh day, the Israelites marched around Jericho seven times.", fr: "Le septième jour, les Israélites firent sept fois le tour de Jéricho." } },
      { id: 'b24-c', isTruth: false, text: { en: "The walls of Jericho fell when Moses blew the final trumpet blast.", fr: "Les murs de Jéricho tombèrent lorsque Moïse sonna la trompette finale." } },
      { id: 'b24-d', isTruth: true,  text: { en: "Rahab's family was saved because she tied a scarlet cord in her window as the spies instructed.", fr: "La famille de Rahab fut sauvée parce qu'elle attacha un cordon écarlate à sa fenêtre comme les espions l'avaient ordonné." } },
    ],
    explanation: { en: "Moses had died before the conquest of Jericho. It was Joshua who led Israel. The people shouted after the priests blew the trumpets, and the walls collapsed (Joshua 6:20).", fr: "Moïse était mort avant la conquête de Jéricho. C'est Josué qui mena Israël. Le peuple poussa un grand cri après que les prêtres eurent sonné des trompettes, et les murs s'effondrèrent (Josué 6:20)." },
    didYouKnow: { en: "Rahab later appears in the genealogy of Jesus recorded in Matthew 1.", fr: "Rahab apparaît plus tard dans la généalogie de Jésus rapportée en Matthieu 1." }
  },
  {
    id: 'b25', levelNumber: 25, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Samson and Delilah", fr: "Samson et Dalila" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b25-a', isTruth: true,  text: { en: "Samson's great strength was connected to his Nazirite vow, which included never cutting his hair.", fr: "La grande force de Samson était liée à son vœu de naziréat, qui incluait de ne jamais couper ses cheveux." } },
      { id: 'b25-b', isTruth: true,  text: { en: "Delilah repeatedly asked Samson the source of his strength on behalf of the Philistine leaders.", fr: "Dalila demanda à plusieurs reprises à Samson la source de sa force au nom des chefs philistins." } },
      { id: 'b25-c', isTruth: true,  text: { en: "When Samson's hair was shaved off, his strength left him.", fr: "Lorsque les cheveux de Samson furent rasés, sa force le quitta." } },
      { id: 'b25-d', isTruth: false, text: { en: "Delilah herself shaved Samson's head while he slept on her lap.", fr: "Dalila elle-même rasa la tête de Samson pendant qu'il dormait sur ses genoux." } },
    ],
    explanation: { en: "Delilah called for someone else to shave Samson's seven braids — she did not cut the hair herself. Judges 16:19 says 'she called for someone to shave off the seven braids of his hair.'", fr: "Dalila appela quelqu'un d'autre pour raser les sept tresses de Samson — elle ne le fit pas elle-même. Juges 16:19 dit qu'elle 'appela quelqu'un pour lui raser les sept tresses de la tête.'", },
    didYouKnow: { en: "Samson is described in Judges as a Nazirite set apart to God from before his birth.", fr: "Samson est présenté dans les Juges comme un naziréen consacré à Dieu dès avant sa naissance." }
  },
  {
    id: 'b26', levelNumber: 26, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Ruth and Naomi", fr: "Ruth et Naomi" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b26-a', isTruth: true,  text: { en: "Naomi's two sons both died in Moab, leaving two Moabite widows.", fr: "Les deux fils de Naomi moururent tous deux à Moab, laissant deux veuves moabites." } },
      { id: 'b26-b', isTruth: true,  text: { en: "Ruth declared: 'Where you go I will go, and where you stay I will stay.'", fr: "Ruth déclara : 'Où tu iras, j'irai, et où tu demeureras, je demeurerai.'" } },
      { id: 'b26-c', isTruth: true,  text: { en: "Naomi asked to be called 'Mara,' meaning 'bitter,' when she returned to Bethlehem.", fr: "Naomi demanda à être appelée 'Mara', signifiant 'amère', à son retour à Bethléhem." } },
      { id: 'b26-d', isTruth: false, text: { en: "Ruth was Naomi's sister who came from the land of Moab.", fr: "Ruth était la sœur de Naomi et venait du pays de Moab." } },
    ],
    explanation: { en: "Ruth was Naomi's daughter-in-law, not her sister. Ruth had been married to Naomi's son Mahlon. Orpah, the other daughter-in-law, returned to her own people (Ruth 1:4-5).", fr: "Ruth était la belle-fille de Naomi, pas sa sœur. Ruth avait épousé Mahlon, le fils de Naomi. Orpa, l'autre belle-fille, retourna chez son peuple (Ruth 1:4-5)." },
    didYouKnow: { en: "Ruth became the mother of Obed, the grandfather of King David.", fr: "Ruth devint la mère d'Obed, le grand-père du roi David." }
  },
  {
    id: 'b27', levelNumber: 27, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Hannah and the Birth of Samuel", fr: "Hannah et la Naissance de Samuel" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b27-a', isTruth: true,  text: { en: "Hannah was one of Elkanah's two wives and had no children.", fr: "Hannah était l'une des deux femmes d'Elqana et n'avait pas d'enfants." } },
      { id: 'b27-b', isTruth: true,  text: { en: "Hannah prayed at the tabernacle in Shiloh and Eli the priest thought she was drunk.", fr: "Hannah pria au tabernacle à Silo et Éli le sacrificateur pensa qu'elle était ivre." } },
      { id: 'b27-c', isTruth: true,  text: { en: "Hannah vowed that if God gave her a son, no razor would ever touch his head.", fr: "Hannah fit le vœu que si Dieu lui donnait un fils, aucun rasoir ne toucherait jamais sa tête." } },
      { id: 'b27-d', isTruth: false, text: { en: "Hannah dedicated Samuel to the temple immediately after he was born.", fr: "Hannah consacra Samuel au temple immédiatement après sa naissance." } },
    ],
    explanation: { en: "Hannah waited until Samuel was weaned before bringing him to the tabernacle. She nursed him first, and only after weaning him did she present him to Eli at Shiloh (1 Samuel 1:22-24).", fr: "Hannah attendit que Samuel soit sevré avant de le présenter au tabernacle. Elle l'allaita d'abord et ne le présenta à Éli à Silo qu'après le sevrage (1 Samuel 1:22-24)." },
    didYouKnow: { en: "Hannah's prayer of praise in 1 Samuel 2 has themes that later resemble Mary's song in Luke 1.", fr: "La prière de louange d'Anne en 1 Samuel 2 contient des thèmes qui rappellent plus tard le cantique de Marie en Luc 1." }
  },
  {
    id: 'b28', levelNumber: 28, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "David and Goliath", fr: "David et Goliath" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b28-a', isTruth: true,  text: { en: "Goliath was from the Philistine city of Gath and stood over nine feet tall.", fr: "Goliath venait de la ville philistine de Gath et mesurait plus de trois mètres." } },
      { id: 'b28-b', isTruth: true,  text: { en: "David chose five smooth stones from a stream before facing Goliath.", fr: "David choisit cinq pierres lisses dans un ruisseau avant d'affronter Goliath." } },
      { id: 'b28-c', isTruth: true,  text: { en: "Goliath challenged Israel for forty days, morning and evening, before David accepted.", fr: "Goliath défia Israël pendant quarante jours, matin et soir, avant que David n'accepte." } },
      { id: 'b28-d', isTruth: false, text: { en: "David struck Goliath on the chest with his first stone, killing him instantly.", fr: "David frappa Goliath à la poitrine avec sa première pierre, le tuant instantanément." } },
    ],
    explanation: { en: "David struck Goliath on the forehead — not the chest — with the first stone, causing him to fall. David then used Goliath's own sword to kill him (1 Samuel 17:49-51).", fr: "David frappa Goliath au front — et non à la poitrine — avec la première pierre, le faisant tomber. David utilisa ensuite l'épée même de Goliath pour l'achever (1 Samuel 17:49-51)." },
    didYouKnow: { en: "David refused Saul's armor before facing Goliath and instead went with his staff, sling, and five stones.", fr: "David refusa l'armure de Saül avant d'affronter Goliath et partit avec son bâton, sa fronde et cinq pierres." }
  },
  {
    id: 'b29', levelNumber: 29, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Solomon's Wisdom", fr: "La Sagesse de Salomon" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b29-a', isTruth: true,  text: { en: "Solomon asked God for wisdom and discernment to govern the people of Israel.", fr: "Salomon demanda à Dieu la sagesse et l'intelligence pour gouverner le peuple d'Israël." } },
      { id: 'b29-b', isTruth: true,  text: { en: "God was pleased with Solomon's request because he did not ask for riches or long life.", fr: "Dieu fut satisfait de la demande de Salomon car il n'avait pas demandé la richesse ni une longue vie." } },
      { id: 'b29-c', isTruth: false, text: { en: "God appeared to Solomon in a vision through an angel on Mount Zion.", fr: "Dieu apparut à Salomon en vision par l'intermédiaire d'un ange sur le mont Sion." } },
      { id: 'b29-d', isTruth: true,  text: { en: "God also promised Solomon riches and honor beyond any other king if he kept God's statutes.", fr: "Dieu promit également à Salomon des richesses et une gloire sans égale si Salomon gardait ses lois." } },
    ],
    explanation: { en: "God appeared to Solomon in a dream at Gibeon — not in a vision through an angel on Mount Zion. It was a direct dream encounter with God (1 Kings 3:5-12).", fr: "Dieu apparut à Salomon en rêve à Gabaon — et non en vision par un ange sur le mont Sion. C'était une rencontre directe avec Dieu dans un rêve (1 Rois 3:5-12)." },
    didYouKnow: { en: "Solomon's wisdom became famous beyond Israel, attracting visitors such as the Queen of Sheba.", fr: "La sagesse de Salomon devint célèbre au-delà d'Israël et attira des visiteurs comme la reine de Saba." }
  },
  {
    id: 'b30', levelNumber: 30, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Elijah and the Prophets of Baal", fr: "Élie et les Prophètes de Baal" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b30-a', isTruth: true,  text: { en: "Elijah challenged 450 prophets of Baal to a contest on Mount Carmel.", fr: "Élie défia 450 prophètes de Baal lors d'un concours sur le mont Carmel." } },
      { id: 'b30-b', isTruth: true,  text: { en: "The prophets of Baal called on their god from morning until noon with no answer.", fr: "Les prophètes de Baal invoquèrent leur dieu depuis le matin jusqu'à midi sans réponse." } },
      { id: 'b30-c', isTruth: true,  text: { en: "Elijah had twelve jars of water poured over his altar and sacrifice before calling on God.", fr: "Élie fit verser douze jarres d'eau sur son autel et son sacrifice avant d'invoquer Dieu." } },
      { id: 'b30-d', isTruth: false, text: { en: "God answered Elijah by sending a mighty wind that swept away the Baal prophets' offering.", fr: "Dieu répondit à Élie en envoyant un vent puissant qui emporta l'offrande des prophètes de Baal." } },
    ],
    explanation: { en: "God sent fire — not wind — that consumed Elijah's burnt offering, the wood, the stones, and even licked up the water in the trench (1 Kings 18:38).", fr: "Dieu envoya du feu — et non du vent — qui consuma l'holocauste d'Élie, le bois, les pierres et absorba même l'eau du fossé (1 Rois 18:38)." },
    didYouKnow: { en: "Elijah repaired an altar of the LORD using twelve stones, representing the twelve tribes of Israel.", fr: "Élie répara un autel de l'Éternel avec douze pierres représentant les douze tribus d'Israël." }
  },
  {
    id: 'b31', levelNumber: 31, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Elijah and the Still Small Voice", fr: "Élie et la Voix Douce et Légère" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b31-a', isTruth: true,  text: { en: "Queen Jezebel threatened to kill Elijah after he slew the prophets of Baal.", fr: "La reine Jézabel menaça de tuer Élie après qu'il eut tué les prophètes de Baal." } },
      { id: 'b31-b', isTruth: true,  text: { en: "Elijah fled into the wilderness and sat under a broom tree, wishing he could die.", fr: "Élie s'enfuit dans le désert et s'assit sous un genêt, souhaitant mourir." } },
      { id: 'b31-c', isTruth: true,  text: { en: "An angel touched Elijah twice, bringing him food for the journey to Mount Horeb.", fr: "Un ange toucha Élie deux fois, lui apportant de la nourriture pour le voyage vers l'Horeb." } },
      { id: 'b31-d', isTruth: false, text: { en: "Elijah heard God's voice in the midst of a great earthquake on Mount Horeb.", fr: "Élie entendit la voix de Dieu au milieu d'un grand tremblement de terre sur le mont Horeb." } },
    ],
    explanation: { en: "There was a great wind, an earthquake, and fire — but God was not in any of these. God spoke to Elijah in a gentle whisper (still small voice) after all those dramatic events (1 Kings 19:12).", fr: "Il y eut un grand vent, un tremblement de terre et du feu — mais Dieu n'était dans aucun de ces éléments. Dieu parla à Élie dans un murmure doux et léger après tous ces événements dramatiques (1 Rois 19:12)." },
    didYouKnow: { en: "Elijah traveled forty days and forty nights on the strength of the food given to him before reaching Horeb.", fr: "Élie marcha quarante jours et quarante nuits grâce à la nourriture qui lui fut donnée avant d'atteindre l'Horeb." }
  },
  {
    id: 'b32', levelNumber: 32, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Jonah and the Great Fish", fr: "Jonas et le Grand Poisson" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b32-a', isTruth: true,  text: { en: "God commanded Jonah to go to Nineveh and preach against it.", fr: "Dieu ordonna à Jonas d'aller à Ninive et de prêcher contre elle." } },
      { id: 'b32-b', isTruth: true,  text: { en: "Jonah boarded a ship to Tarshish, fleeing in the opposite direction from Nineveh.", fr: "Jonas monta à bord d'un bateau pour Tarsis, fuyant dans la direction opposée à Ninive." } },
      { id: 'b32-c', isTruth: true,  text: { en: "The sailors cast lots to find who caused the storm, and the lot fell on Jonah.", fr: "Les marins tirèrent au sort pour trouver qui avait causé la tempête, et le sort tomba sur Jonas." } },
      { id: 'b32-d', isTruth: false, text: { en: "Jonah was inside the great fish for seven days and seven nights.", fr: "Jonas fut dans le ventre du grand poisson pendant sept jours et sept nuits." } },
    ],
    explanation: { en: "Jonah was inside the great fish for three days and three nights — not seven. This is also referenced by Jesus as a sign of His own death and resurrection (Jonah 1:17; Matthew 12:40).", fr: "Jonas fut dans le ventre du grand poisson pendant trois jours et trois nuits — pas sept. Jésus y fait référence comme signe de sa mort et de sa résurrection (Jonas 1:17 ; Matthieu 12:40)." },
    didYouKnow: { en: "After Jonah preached, the people of Nineveh—including the king—responded with fasting and repentance.", fr: "Après la prédication de Jonas, les habitants de Ninive, y compris le roi, répondirent par le jeûne et la repentance." }
  },
  {
    id: 'b33', levelNumber: 33, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Shadrach, Meshach, and Abednego", fr: "Shadrach, Méschac et Abed-Nego" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b33-a', isTruth: true,  text: { en: "Nebuchadnezzar built a golden statue ninety feet high and nine feet wide.", fr: "Nébucadnetsar fit construire une statue d'or de vingt-sept mètres de haut et de deux mètres soixante de large." } },
      { id: 'b33-b', isTruth: true,  text: { en: "The three men refused to bow to the statue and were thrown into a blazing furnace.", fr: "Les trois hommes refusèrent de se prosterner devant la statue et furent jetés dans une fournaise ardente." } },
      { id: 'b33-c', isTruth: false, text: { en: "The furnace was heated to three times its normal temperature as punishment.", fr: "La fournaise fut portée à trois fois sa température habituelle comme punition." } },
      { id: 'b33-d', isTruth: true,  text: { en: "Nebuchadnezzar saw four figures walking in the fire, the fourth looking like a son of the gods.", fr: "Nébucadnetsar vit quatre personnages marcher dans le feu, le quatrième ressemblant à un fils de dieux." } },
    ],
    explanation: { en: "The furnace was heated seven times hotter than usual — not three. The fire was so intense it killed the soldiers who threw the three men in (Daniel 3:19).", fr: "La fournaise fut chauffée sept fois plus que d'habitude — pas trois fois. Le feu était si intense qu'il tua les soldats qui y jetèrent les trois hommes (Daniel 3:19)." },
    didYouKnow: { en: "The Babylonian names Shadrach, Meshach, and Abednego replaced the Hebrew names Hananiah, Mishael, and Azariah.", fr: "Les noms babyloniens Shadrach, Méschac et Abed-Nego remplacèrent les noms hébreux Hanania, Mischaël et Azaria." }
  },
  {
    id: 'b34', levelNumber: 34, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Daniel in the Lions' Den", fr: "Daniel dans la Fosse aux Lions" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b34-a', isTruth: true,  text: { en: "Daniel was thrown into the lions' den because he continued to pray three times a day.", fr: "Daniel fut jeté dans la fosse aux lions parce qu'il continuait à prier trois fois par jour." } },
      { id: 'b34-b', isTruth: true,  text: { en: "King Darius sealed the lions' den with a stone and with his own signet ring.", fr: "Le roi Darius scella la fosse aux lions avec une pierre et son propre anneau." } },
      { id: 'b34-c', isTruth: true,  text: { en: "The king spent the night fasting and could not sleep after throwing Daniel in.", fr: "Le roi passa la nuit à jeûner et ne put dormir après avoir jeté Daniel dans la fosse." } },
      { id: 'b34-d', isTruth: false, text: { en: "Daniel was thrown in because he refused to worship a golden statue.", fr: "Daniel fut jeté dans la fosse parce qu'il refusa d'adorer une statue d'or." } },
    ],
    explanation: { en: "Refusing to worship a statue was the crime of Shadrach, Meshach, and Abednego — not Daniel. Daniel's crime was praying to God after Darius forbade prayer to any god except himself (Daniel 6:7-10).", fr: "Refuser d'adorer une statue était le crime de Shadrach, Méschac et Abed-Nego — pas de Daniel. Le crime de Daniel était de prier Dieu après que Darius eut interdit toute prière à un autre dieu qu'à lui-même (Daniel 6:7-10)." },
    didYouKnow: { en: "Daniel told King Darius that God had sent an angel to shut the lions' mouths.", fr: "Daniel dit au roi Darius que Dieu avait envoyé un ange pour fermer la gueule des lions." }
  },
  {
    id: 'b35', levelNumber: 35, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Esther Saves Her People", fr: "Esther Sauve son Peuple" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b35-a', isTruth: true,  text: { en: "Esther was a Jewish orphan raised by her older cousin Mordecai.", fr: "Esther était une orpheline juive élevée par son cousin aîné Mardochée." } },
      { id: 'b35-b', isTruth: true,  text: { en: "Haman plotted to destroy all Jews because Mordecai refused to bow down to him.", fr: "Haman complota de détruire tous les Juifs parce que Mardochée refusait de s'incliner devant lui." } },
      { id: 'b35-c', isTruth: true,  text: { en: "Esther called for a three-day fast before approaching the king uninvited.", fr: "Esther demanda un jeûne de trois jours avant de se présenter devant le roi sans invitation." } },
      { id: 'b35-d', isTruth: false, text: { en: "Haman was exiled from the kingdom as punishment for his plot against the Jews.", fr: "Haman fut exilé du royaume en punition de son complot contre les Juifs." } },
    ],
    explanation: { en: "Haman was not exiled — he was hanged on the very gallows he had built to execute Mordecai. The king ordered this after Esther revealed Haman's plot (Esther 7:9-10).", fr: "Haman ne fut pas exilé — il fut pendu à la potence même qu'il avait construite pour exécuter Mardochée, sur ordre du roi après qu'Esther eut révélé son complot (Esther 7:9-10)." },
    didYouKnow: { en: "The feast of Purim commemorates the deliverance described in the book of Esther.", fr: "La fête de Pourim commémore la délivrance racontée dans le livre d'Esther." }
  },
  {
    id: 'b36', levelNumber: 36, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Birth of Jesus", fr: "La Naissance de Jésus" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b36-a', isTruth: true,  text: { en: "Jesus was born in Bethlehem of Judea.", fr: "Jésus est né à Bethléhem en Judée." } },
      { id: 'b36-b', isTruth: true,  text: { en: "Mary wrapped the baby Jesus in cloths and laid Him in a manger.", fr: "Marie emmaillota le bébé Jésus et le coucha dans une crèche." } },
      { id: 'b36-c', isTruth: true,  text: { en: "An angel of the Lord announced the birth of Jesus to shepherds in nearby fields.", fr: "Un ange du Seigneur annonça la naissance de Jésus à des bergers dans des champs voisins." } },
      { id: 'b36-d', isTruth: false, text: { en: "The Bible records that an innkeeper personally led Mary and Joseph to the stable.", fr: "La Bible rapporte qu'un aubergiste mena personnellement Marie et Joseph à l'étable." } },
    ],
    explanation: { en: "The Bible never mentions an innkeeper speaking to Mary and Joseph. It simply states there was no room in the inn (Luke 2:7). The innkeeper is a tradition not found in scripture.", fr: "La Bible ne mentionne jamais un aubergiste parlant à Marie et Joseph. Elle indique simplement qu'il n'y avait pas de place dans l'hôtellerie (Luc 2:7). L'aubergiste est une tradition absente des Écritures." },
    didYouKnow: { en: "Luke records that shepherds visited Jesus after His birth, while Matthew records the later visit of the Magi.", fr: "Luc rapporte la visite des bergers après la naissance de Jésus, tandis que Matthieu rapporte plus tard la visite des mages." }
  },
  {
    id: 'b37', levelNumber: 37, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Wise Men", fr: "Les Mages" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b37-a', isTruth: true,  text: { en: "The Magi came from the East and followed a star to find the child Jesus.", fr: "Les mages vinrent de l'Orient et suivirent une étoile pour trouver l'enfant Jésus." } },
      { id: 'b37-b', isTruth: true,  text: { en: "The Magi brought gifts of gold, frankincense, and myrrh.", fr: "Les mages apportèrent des dons d'or, d'encens et de myrrhe." } },
      { id: 'b37-c', isTruth: true,  text: { en: "King Herod was troubled when he heard about the birth of the King of the Jews.", fr: "Le roi Hérode fut troublé en apprenant la naissance du roi des Juifs." } },
      { id: 'b37-d', isTruth: false, text: { en: "The Bible states that exactly three wise men visited the baby Jesus.", fr: "La Bible affirme qu'exactement trois mages visitèrent l'enfant Jésus." } },
    ],
    explanation: { en: "The Bible never specifies the number of Magi. Three gifts are mentioned (gold, frankincense, myrrh), which led to the tradition of three wise men, but the actual number is not given (Matthew 2:1-11).", fr: "La Bible ne précise jamais le nombre de mages. Trois cadeaux sont mentionnés, ce qui a conduit à la tradition des trois mages, mais leur nombre exact n'est pas indiqué (Matthieu 2:1-11)." },
    didYouKnow: { en: "Matthew says the Magi entered a house when they saw the child Jesus; the text does not place them at the manger on the night of His birth.", fr: "Matthieu dit que les mages entrèrent dans une maison lorsqu'ils virent l'enfant Jésus ; le texte ne les place pas à la crèche la nuit de sa naissance." }
  },
  {
    id: 'b38', levelNumber: 38, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Jesus' Baptism", fr: "Le Baptême de Jésus" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b38-a', isTruth: true,  text: { en: "Jesus was baptized by John the Baptist in the Jordan River.", fr: "Jésus fut baptisé par Jean-Baptiste dans le Jourdain." } },
      { id: 'b38-b', isTruth: true,  text: { en: "The Holy Spirit descended on Jesus like a dove after His baptism.", fr: "Le Saint-Esprit descendit sur Jésus comme une colombe après son baptême." } },
      { id: 'b38-c', isTruth: true,  text: { en: "A voice from heaven said, 'This is my Son, whom I love; with him I am well pleased.'", fr: "Une voix du ciel dit : 'Celui-ci est mon Fils bien-aimé, en qui j'ai mis toute mon affection.'" } },
      { id: 'b38-d', isTruth: false, text: { en: "Jesus' twelve disciples witnessed His baptism and celebrated with Him afterward.", fr: "Les douze disciples de Jésus assistèrent à son baptême et célébrèrent avec lui ensuite." } },
    ],
    explanation: { en: "At the time of Jesus' baptism, He had not yet called any disciples. The twelve disciples were gathered later during His ministry. The Gospels make no mention of disciples at the baptism (Matthew 3:13-17).", fr: "Au moment du baptême de Jésus, il n'avait encore appelé aucun disciple. Les douze furent rassemblés plus tard durant son ministère. Les Évangiles ne mentionnent pas de disciples au baptême (Matthieu 3:13-17)." },
    didYouKnow: { en: "John the Baptist initially hesitated to baptize Jesus, saying that he himself needed to be baptized by Jesus.", fr: "Jean-Baptiste hésita d'abord à baptiser Jésus, déclarant que c'était lui qui avait besoin d'être baptisé par Jésus." }
  },
  {
    id: 'b39', levelNumber: 39, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Temptation of Jesus", fr: "La Tentation de Jésus" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b39-a', isTruth: true,  text: { en: "Jesus was led by the Spirit into the wilderness to be tempted by the devil.", fr: "Jésus fut conduit par l'Esprit dans le désert pour être tenté par le diable." } },
      { id: 'b39-b', isTruth: true,  text: { en: "Jesus fasted for forty days and forty nights before the temptation.", fr: "Jésus jeûna quarante jours et quarante nuits avant la tentation." } },
      { id: 'b39-c', isTruth: true,  text: { en: "The devil tempted Jesus to throw Himself from the highest point of the temple.", fr: "Le diable tenta Jésus de se jeter du point le plus élevé du temple." } },
      { id: 'b39-d', isTruth: false, text: { en: "Jesus defeated the devil by performing a miracle to prove His power.", fr: "Jésus vainquit le diable en accomplissant un miracle pour prouver sa puissance." } },
    ],
    explanation: { en: "Jesus defeated each temptation by quoting Scripture from the book of Deuteronomy. He performed no miracles during the temptation (Matthew 4:1-11; Deuteronomy 6 & 8).", fr: "Jésus surmonta chaque tentation en citant des passages du livre du Deutéronome. Il n'accomplit aucun miracle pendant la tentation (Matthieu 4:1-11 ; Deutéronome 6 et 8)." },
    didYouKnow: { en: "The three Scripture quotations Jesus used against the tempter all come from Deuteronomy.", fr: "Les trois passages bibliques que Jésus cita contre le tentateur proviennent tous du Deutéronome." }
  },
  {
    id: 'b40', levelNumber: 40, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Jesus Feeds 5,000", fr: "Jésus Nourrit 5 000 Personnes" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b40-a', isTruth: true,  text: { en: "A boy had five loaves and two fish that Jesus used to feed the multitude.", fr: "Un garçon avait cinq pains et deux poissons que Jésus utilisa pour nourrir la foule." } },
      { id: 'b40-b', isTruth: true,  text: { en: "After everyone ate, the disciples collected twelve basketfuls of leftovers.", fr: "Après que tout le monde eut mangé, les disciples ramassèrent douze corbeilles de restes." } },
      { id: 'b40-c', isTruth: true,  text: { en: "The feeding of the 5,000 is the only miracle recorded in all four Gospels besides the Resurrection.", fr: "La multiplication des pains est le seul miracle rapporté dans les quatre Évangiles avec la Résurrection." } },
      { id: 'b40-d', isTruth: false, text: { en: "The five thousand refers to the total count of everyone who ate, including women and children.", fr: "Les cinq mille désignent le nombre total de tous ceux qui mangèrent, femmes et enfants compris." } },
    ],
    explanation: { en: "The five thousand counted only the men. Matthew 14:21 states 'about five thousand men were fed, besides women and children,' so the total was actually much larger.", fr: "Les cinq mille ne comptaient que les hommes. Matthieu 14:21 précise 'environ cinq mille hommes, sans compter les femmes et les enfants', donc le total était bien plus élevé." },
    didYouKnow: { en: "The feeding of the five thousand is the only miracle of Jesus, apart from the resurrection, narrated in all four Gospels.", fr: "La multiplication des pains pour cinq mille personnes est le seul miracle de Jésus, en dehors de la résurrection, raconté dans les quatre Évangiles." }
  },
  {
    id: 'b41', levelNumber: 41, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Jesus Walks on Water", fr: "Jésus Marche sur l'Eau" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b41-a', isTruth: true,  text: { en: "The disciples thought Jesus was a ghost when they saw Him walking on the water.", fr: "Les disciples pensèrent que Jésus était un fantôme lorsqu'ils le virent marcher sur l'eau." } },
      { id: 'b41-b', isTruth: true,  text: { en: "Peter stepped out of the boat and walked on water toward Jesus.", fr: "Pierre sortit du bateau et marcha sur l'eau en direction de Jésus." } },
      { id: 'b41-c', isTruth: true,  text: { en: "Peter began to sink when he noticed the wind and became afraid.", fr: "Pierre commença à s'enfoncer quand il remarqua le vent et prit peur." } },
      { id: 'b41-d', isTruth: false, text: { en: "Jesus walked on water during a sunny, calm afternoon to demonstrate His power.", fr: "Jésus marcha sur l'eau lors d'un après-midi calme et ensoleillé pour démontrer sa puissance." } },
    ],
    explanation: { en: "Jesus walked on water during the night, in the midst of a storm with strong winds. The disciples had been straining at the oars against the wind all night (Matthew 14:22-25; Mark 6:48).", fr: "Jésus marcha sur l'eau de nuit, au milieu d'une tempête avec de forts vents. Les disciples avaient ramé toute la nuit contre le vent (Matthieu 14:22-25 ; Marc 6:48)." },
    didYouKnow: { en: "Matthew is the Gospel that specifically records Peter also walking on the water toward Jesus.", fr: "Matthieu est l'Évangile qui rapporte expressément que Pierre marcha lui aussi sur l'eau vers Jésus." }
  },
  {
    id: 'b42', levelNumber: 42, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Zacchaeus", fr: "Zachée" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b42-a', isTruth: true,  text: { en: "Zacchaeus was a chief tax collector who was very wealthy.", fr: "Zachée était un chef des publicains et il était très riche." } },
      { id: 'b42-b', isTruth: true,  text: { en: "Zacchaeus climbed a sycamore-fig tree to see Jesus because he was short in stature.", fr: "Zachée grimpa sur un sycomore pour voir Jésus car il était de petite taille." } },
      { id: 'b42-c', isTruth: true,  text: { en: "Zacchaeus promised to give half of his possessions to the poor.", fr: "Zachée promit de donner la moitié de ses biens aux pauvres." } },
      { id: 'b42-d', isTruth: false, text: { en: "Jesus told Zacchaeus to come down from the tree so they could dine at the synagogue.", fr: "Jésus dit à Zachée de descendre de l'arbre pour qu'ils dînent à la synagogue." } },
    ],
    explanation: { en: "Jesus told Zacchaeus He would stay at his house — not the synagogue. The crowd was angry that Jesus chose to be a guest of a 'sinner' (Luke 19:5-7).", fr: "Jésus dit à Zachée qu'Il logerait chez lui — pas à la synagogue. La foule était indignée que Jésus choisisse d'être l'hôte d'un 'pécheur' (Luc 19:5-7)." },
    didYouKnow: { en: "Zacchaeus promised to repay four times the amount if he had cheated anyone.", fr: "Zachée promit de rendre quatre fois la somme s'il avait fraudé quelqu'un." }
  },
  {
    id: 'b43', levelNumber: 43, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Good Samaritan", fr: "Le Bon Samaritain" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b43-a', isTruth: true,  text: { en: "A man was attacked by robbers on the road from Jerusalem to Jericho.", fr: "Un homme fut attaqué par des bandits sur la route de Jérusalem à Jéricho." } },
      { id: 'b43-b', isTruth: true,  text: { en: "A priest and then a Levite both passed by the wounded man without helping.", fr: "Un sacrificateur puis un lévite passèrent tous deux devant l'homme blessé sans l'aider." } },
      { id: 'b43-c', isTruth: true,  text: { en: "The Samaritan bandaged the man, put him on his donkey, and paid the innkeeper to care for him.", fr: "Le Samaritain pansa les plaies de l'homme, le chargea sur son âne et paya l'hôtelier pour le soigner." } },
      { id: 'b43-d', isTruth: false, text: { en: "Jesus told this parable in answer to the question 'Who is God?'", fr: "Jésus raconta cette parabole en réponse à la question 'Qui est Dieu ?'" } },
    ],
    explanation: { en: "Jesus told this parable to answer an expert in the Law who asked 'Who is my neighbor?' — after they discussed how to inherit eternal life (Luke 10:25-29).", fr: "Jésus raconta cette parabole pour répondre à un docteur de la loi qui demandait 'Et qui est mon prochain ?' — après avoir discuté de la façon d'hériter la vie éternelle (Luc 10:25-29)." },
    didYouKnow: { en: "The Samaritan used oil and wine while caring for the wounded traveler before taking him to an inn.", fr: "Le Samaritain utilisa de l'huile et du vin pour soigner le voyageur blessé avant de le conduire dans une auberge." }
  },
  {
    id: 'b44', levelNumber: 44, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Prodigal Son", fr: "Le Fils Prodigue" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b44-a', isTruth: true,  text: { en: "The younger son demanded his share of the inheritance while his father was still alive.", fr: "Le fils cadet réclama sa part d'héritage du vivant de son père." } },
      { id: 'b44-b', isTruth: true,  text: { en: "The younger son squandered his wealth in wild living and ended up feeding pigs.", fr: "Le fils cadet dilapida ses biens dans une vie dissolue et se retrouva à nourrir des porcs." } },
      { id: 'b44-c', isTruth: true,  text: { en: "When the son was still far off, his father ran to meet him and embraced him.", fr: "Alors que le fils était encore loin, son père courut à sa rencontre et l'embrassa." } },
      { id: 'b44-d', isTruth: false, text: { en: "The older son warmly celebrated his brother's return and joined the feast.", fr: "Le fils aîné célébra chaleureusement le retour de son frère et se joignit à la fête." } },
    ],
    explanation: { en: "The older son was angry and refused to go in. He complained to his father that the brother who had wasted his wealth was receiving a feast, while he himself had never been given a party (Luke 15:28-30).", fr: "Le fils aîné était en colère et refusa d'entrer. Il se plaignit à son père que le frère qui avait dilapidé ses biens recevait une fête, alors qu'on ne lui avait jamais donné de festin (Luc 15:28-30)." },
    didYouKnow: { en: "The father ordered a robe, a ring, and sandals for the returning son and celebrated with a feast.", fr: "Le père ordonna qu'on apporte une robe, un anneau et des sandales au fils revenu, puis organisa un festin." }
  },
  {
    id: 'b45', levelNumber: 45, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Last Supper", fr: "La Cène" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b45-a', isTruth: true,  text: { en: "Jesus told his disciples that one of them would betray Him at the Last Supper.", fr: "Jésus dit à ses disciples que l'un d'eux le trahirait lors de la Cène." } },
      { id: 'b45-b', isTruth: true,  text: { en: "Jesus broke bread and said 'This is my body, given for you; do this in remembrance of me.'", fr: "Jésus rompit le pain et dit : 'Ceci est mon corps, livré pour vous ; faites ceci en mémoire de moi.'" } },
      { id: 'b45-c', isTruth: true,  text: { en: "Jesus washed the feet of His disciples before the meal, including Judas.", fr: "Jésus lava les pieds de ses disciples avant le repas, y compris ceux de Judas." } },
      { id: 'b45-d', isTruth: false, text: { en: "Judas left the Last Supper after Jesus openly announced in front of all that Judas was the betrayer.", fr: "Judas quitta la Cène après que Jésus eut ouvertement annoncé devant tous que Judas était le traître." } },
    ],
    explanation: { en: "Jesus gave a sign to John by dipping a piece of bread and handing it to Judas, but this was not a public announcement to all. Judas left, and the others did not understand why (John 13:27-29).", fr: "Jésus donna un signe à Jean en trempant un morceau de pain et en le donnant à Judas, mais ce n'était pas une annonce publique à tous. Judas sortit, et les autres ne comprirent pas pourquoi (Jean 13:27-29)." },
    didYouKnow: { en: "The Gospel of John uniquely records Jesus washing His disciples' feet during the final meal.", fr: "L'Évangile de Jean est le seul à rapporter que Jésus lava les pieds de ses disciples lors du dernier repas." }
  },
  {
    id: 'b46', levelNumber: 46, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Resurrection", fr: "La Résurrection" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b46-a', isTruth: true,  text: { en: "Jesus rose from the dead on the first day of the week — Sunday.", fr: "Jésus ressuscita le premier jour de la semaine — le dimanche." } },
      { id: 'b46-b', isTruth: true,  text: { en: "Mary Magdalene was among the first to discover the empty tomb.", fr: "Marie-Madeleine fut parmi les premières à découvrir le tombeau vide." } },
      { id: 'b46-c', isTruth: true,  text: { en: "An angel told the women not to be afraid because Jesus had risen from the dead.", fr: "Un ange dit aux femmes de ne pas craindre car Jésus était ressuscité d'entre les morts." } },
      { id: 'b46-d', isTruth: false, text: { en: "Jesus immediately appeared to all twelve apostles simultaneously when He rose from the dead.", fr: "Jésus apparut simultanément aux douze apôtres dès sa résurrection." } },
    ],
    explanation: { en: "Judas had died, leaving only eleven apostles. Also, Jesus appeared first to Mary Magdalene, then to two disciples on the road to Emmaus, then to the eleven — not all at once (Luke 24; John 20).", fr: "Judas était mort, ne laissant que onze apôtres. De plus, Jésus apparut d'abord à Marie-Madeleine, puis à deux disciples sur le chemin d'Emmaüs, puis aux onze — pas tous simultanément (Luc 24 ; Jean 20)." },
    didYouKnow: { en: "The Gospels record several resurrection appearances over a period before Jesus' ascension.", fr: "Les Évangiles rapportent plusieurs apparitions de Jésus ressuscité pendant une période précédant son ascension." }
  },
  {
    id: 'b47', levelNumber: 47, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Pentecost", fr: "La Pentecôte" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b47-a', isTruth: true,  text: { en: "The disciples were all together in one place when the Holy Spirit came at Pentecost.", fr: "Les disciples étaient tous réunis au même endroit lorsque le Saint-Esprit vint à la Pentecôte." } },
      { id: 'b47-b', isTruth: true,  text: { en: "What appeared as tongues of fire rested on each of them at Pentecost.", fr: "Ce qui ressemblait à des langues de feu se posa sur chacun d'eux à la Pentecôte." } },
      { id: 'b47-c', isTruth: true,  text: { en: "The disciples spoke in other tongues as the Spirit enabled them.", fr: "Les disciples parlèrent en d'autres langues selon que l'Esprit leur accordait de s'exprimer." } },
      { id: 'b47-d', isTruth: false, text: { en: "The entire crowd immediately believed after witnessing the disciples speak in tongues.", fr: "La foule entière crut immédiatement après avoir vu les disciples parler en d'autres langues." } },
    ],
    explanation: { en: "Many in the crowd were amazed, but others mocked, saying the disciples were drunk on new wine. It was after Peter's sermon that about three thousand believed (Acts 2:13-41).", fr: "Beaucoup dans la foule étaient stupéfaits, mais d'autres se moquaient, disant que les disciples étaient ivres. C'est après le sermon de Pierre qu'environ trois mille personnes crurent (Actes 2:13-41)." },
    didYouKnow: { en: "Acts 2 says visitors from many regions heard the disciples speaking in their own languages at Pentecost.", fr: "Actes 2 dit que des visiteurs venus de nombreuses régions entendirent les disciples parler dans leurs propres langues à la Pentecôte." }
  },
  {
    id: 'b48', levelNumber: 48, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Jesus at the Temple — Age 12", fr: "Jésus au Temple — 12 Ans" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b48-a', isTruth: true,  text: { en: "Jesus' parents found Him in the temple courts sitting among the teachers, listening and asking questions.", fr: "Les parents de Jésus le trouvèrent dans le temple, assis au milieu des docteurs, les écoutant et les interrogeant." } },
      { id: 'b48-b', isTruth: true,  text: { en: "Mary and Joseph searched for Jesus for three days before finding Him in Jerusalem.", fr: "Marie et Joseph cherchèrent Jésus pendant trois jours avant de le trouver à Jérusalem." } },
      { id: 'b48-c', isTruth: true,  text: { en: "Jesus told his mother that He must be in His Father's house.", fr: "Jésus dit à sa mère qu'il devait être chez son Père." } },
      { id: 'b48-d', isTruth: false, text: { en: "This event happened when Jesus was about eight years old.", fr: "Cet événement se produisit lorsque Jésus avait environ huit ans." } },
    ],
    explanation: { en: "Jesus was twelve years old when His parents found Him in the temple. This is the only recorded event from Jesus' childhood between His birth and the start of His ministry (Luke 2:42).", fr: "Jésus avait douze ans lorsque ses parents le trouvèrent au temple. C'est le seul événement enregistré de l'enfance de Jésus entre sa naissance et le début de son ministère (Luc 2:42)." },
    didYouKnow: { en: "Luke 2 is the only Gospel passage that describes an event from Jesus' boyhood between infancy and adulthood.", fr: "Luc 2 est le seul passage des Évangiles qui décrit un événement de l'enfance de Jésus entre sa petite enfance et l'âge adulte." }
  },
  {
    id: 'b49', levelNumber: 49, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Lost Sheep", fr: "La Brebis Perdue" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b49-a', isTruth: true,  text: { en: "In the parable, a shepherd left ninety-nine sheep to search for one lost sheep.", fr: "Dans la parabole, un berger laissa les quatre-vingt-dix-neuf brebis pour en chercher une seule perdue." } },
      { id: 'b49-b', isTruth: true,  text: { en: "When the shepherd found the lost sheep, he joyfully put it on his shoulders and carried it home.", fr: "Quand le berger trouva la brebis perdue, il la posa joyeusement sur ses épaules et la ramena chez lui." } },
      { id: 'b49-c', isTruth: true,  text: { en: "Jesus said there is more joy in heaven over one sinner who repents than over ninety-nine righteous people.", fr: "Jésus dit qu'il y a plus de joie dans le ciel pour un pécheur qui se repent que pour quatre-vingt-dix-neuf justes." } },
      { id: 'b49-d', isTruth: false, text: { en: "The parable of the Lost Sheep is found only in the Gospel of Luke.", fr: "La parabole de la brebis perdue se trouve uniquement dans l'Évangile de Luc." } },
    ],
    explanation: { en: "The parable of the Lost Sheep appears in both Luke 15 and Matthew 18 — though with slightly different emphasis. It is not exclusive to Luke.", fr: "La parabole de la brebis perdue apparaît à la fois dans Luc 15 et Matthieu 18 — bien qu'avec des nuances différentes. Elle n'est pas exclusive à Luc." },
    didYouKnow: { en: "The parable of the lost sheep appears in both Matthew 18 and Luke 15, but in different teaching contexts.", fr: "La parabole de la brebis perdue apparaît en Matthieu 18 et en Luc 15, mais dans des contextes d'enseignement différents." }
  },
  {
    id: 'b50', levelNumber: 50, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Wedding at Cana", fr: "Les Noces de Cana" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b50-a', isTruth: true,  text: { en: "The wedding at Cana was the first of Jesus' miracles recorded in the Gospel of John.", fr: "Les noces de Cana marquent le premier miracle de Jésus rapporté dans l'Évangile de Jean." } },
      { id: 'b50-b', isTruth: true,  text: { en: "Mary told the servants to do whatever Jesus said when the wine ran out.", fr: "Marie dit aux serviteurs de faire tout ce que Jésus leur dirait lorsque le vin manqua." } },
      { id: 'b50-c', isTruth: true,  text: { en: "Jesus told servants to fill six stone water jars used for Jewish purification with water.", fr: "Jésus demanda aux serviteurs de remplir d'eau six jarres de pierre utilisées pour la purification juive." } },
      { id: 'b50-d', isTruth: false, text: { en: "Jesus turned water into wine so He could prove His identity to the Pharisees who were present.", fr: "Jésus changea l'eau en vin pour prouver son identité aux Pharisiens présents." } },
    ],
    explanation: { en: "The miracle at Cana was performed for the joy of the wedding couple and revealed Jesus' glory to His disciples. There is no mention of Pharisees being present at this wedding (John 2:1-11).", fr: "Le miracle de Cana fut accompli pour la joie des mariés et révéla la gloire de Jésus à ses disciples. Il n'est pas question de Pharisiens présents à ce mariage (Jean 2:1-11)." },
    didYouKnow: { en: "John calls the miracle at Cana the first of the signs through which Jesus revealed His glory.", fr: "Jean appelle le miracle de Cana le premier des signes par lesquels Jésus manifesta sa gloire." }
  },
  {
    id: 'b51', levelNumber: 51, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Lazarus Raised from the Dead", fr: "Lazare Ressuscité" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b51-a', isTruth: true,  text: { en: "Lazarus had been in the tomb for four days when Jesus arrived.", fr: "Lazare était dans le tombeau depuis quatre jours quand Jésus arriva." } },
      { id: 'b51-b', isTruth: true,  text: { en: "Jesus wept when He saw the grief of Mary and those with her.", fr: "Jésus pleura en voyant le deuil de Marie et de ceux qui l'accompagnaient." } },
      { id: 'b51-c', isTruth: true,  text: { en: "Jesus prayed aloud to the Father before calling Lazarus out of the tomb.", fr: "Jésus pria à voix haute pour le Père avant d'appeler Lazare à sortir du tombeau." } },
      { id: 'b51-d', isTruth: false, text: { en: "Lazarus came out of the tomb walking freely, wearing only a white robe.", fr: "Lazare sortit du tombeau en marchant librement, vêtu uniquement d'une robe blanche." } },
    ],
    explanation: { en: "Lazarus came out still bound in grave clothes (strips of linen with a cloth around his face). Jesus told the bystanders to unwrap him and let him go (John 11:44).", fr: "Lazare sortit encore enveloppé dans ses bandelettes de lin, avec un linge autour du visage. Jésus dit aux assistants de le délier et de le laisser aller (Jean 11:44)." },
    didYouKnow: { en: "John 11 says Lazarus had been in the tomb four days when Jesus arrived at Bethany.", fr: "Jean 11 dit que Lazare était dans le tombeau depuis quatre jours lorsque Jésus arriva à Béthanie." }
  },
  {
    id: 'b52', levelNumber: 52, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Palm Sunday", fr: "Le Dimanche des Rameaux" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b52-a', isTruth: true,  text: { en: "Jesus rode into Jerusalem on a donkey to fulfill the prophecy of Zechariah.", fr: "Jésus entra dans Jérusalem sur un âne pour accomplir la prophétie de Zacharie." } },
      { id: 'b52-b', isTruth: true,  text: { en: "The crowds spread their cloaks and palm branches on the road before Jesus.", fr: "Les foules étendirent leurs manteaux et des branches de palmiers sur la route devant Jésus." } },
      { id: 'b52-c', isTruth: true,  text: { en: "The crowd shouted 'Hosanna! Blessed is he who comes in the name of the Lord!'", fr: "La foule criait : 'Hosanna ! Béni soit celui qui vient au nom du Seigneur !'" } },
      { id: 'b52-d', isTruth: false, text: { en: "The Pharisees supported the crowd's praise of Jesus on Palm Sunday.", fr: "Les Pharisiens approuvèrent les louanges de la foule envers Jésus le dimanche des Rameaux." } },
    ],
    explanation: { en: "The Pharisees told Jesus to rebuke His disciples for their shouts of praise. Jesus replied that if they were silent, the stones would cry out (Luke 19:39-40).", fr: "Les Pharisiens demandèrent à Jésus de faire taire ses disciples. Jésus répondit que si ceux-ci se taisaient, les pierres crieraient (Luc 19:39-40)." },
    didYouKnow: { en: "The crowd's palm branches are specifically mentioned in John's account of Jesus' entry into Jerusalem.", fr: "Les branches de palmier de la foule sont expressément mentionnées dans le récit de Jean sur l'entrée de Jésus à Jérusalem." }
  },
  {
    id: 'b53', levelNumber: 53, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Peter's Denial", fr: "Le Reniement de Pierre" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b53-a', isTruth: true,  text: { en: "Jesus predicted Peter would deny Him three times before the rooster crowed.", fr: "Jésus prédit que Pierre le renierait trois fois avant que le coq ne chante." } },
      { id: 'b53-b', isTruth: true,  text: { en: "Peter denied knowing Jesus to a servant girl and then to others by the fire.", fr: "Pierre nia connaître Jésus devant une servante, puis devant d'autres personnes près du feu." } },
      { id: 'b53-c', isTruth: true,  text: { en: "After the rooster crowed, Peter went outside and wept bitterly.", fr: "Après le chant du coq, Pierre sortit et pleura amèrement." } },
      { id: 'b53-d', isTruth: false, text: { en: "Peter denied Jesus only once before realizing what he had done.", fr: "Pierre nia Jésus une seule fois avant de réaliser ce qu'il avait fait." } },
    ],
    explanation: { en: "Peter denied Jesus exactly three times, just as Jesus had predicted. The third denial was accompanied by cursing and swearing to emphasize he did not know Jesus (Matthew 26:69-75).", fr: "Pierre nia Jésus exactement trois fois, comme Jésus l'avait prédit. Le troisième reniement fut accompagné de serments et d'imprécations (Matthieu 26:69-75)." },
    didYouKnow: { en: "All four Gospels record Peter denying Jesus, though they differ in some surrounding details.", fr: "Les quatre Évangiles rapportent le reniement de Pierre, avec certaines différences dans les détails qui l'entourent." }
  },
  {
    id: 'b54', levelNumber: 54, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Sermon on the Mount — The Beatitudes", fr: "Le Sermon sur la Montagne — Les Béatitudes" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b54-a', isTruth: true,  text: { en: "Jesus taught the Beatitudes on a mountainside, beginning with 'Blessed are the poor in spirit.'", fr: "Jésus enseigna les Béatitudes sur une montagne, en commençant par 'Heureux les pauvres en esprit.'" } },
      { id: 'b54-b', isTruth: true,  text: { en: "Jesus declared 'Blessed are the peacemakers, for they will be called children of God.'", fr: "Jésus déclara : 'Heureux les artisans de paix, car ils seront appelés fils de Dieu.'" } },
      { id: 'b54-c', isTruth: true,  text: { en: "Jesus said 'Blessed are the pure in heart, for they will see God.'", fr: "Jésus dit : 'Heureux les cœurs purs, car ils verront Dieu.'" } },
      { id: 'b54-d', isTruth: false, text: { en: "The Sermon on the Mount was preached inside the synagogue in Capernaum.", fr: "Le Sermon sur la Montagne fut prêché à l'intérieur de la synagogue de Capharnaüm." } },
    ],
    explanation: { en: "Jesus gave the Sermon on the Mount on a mountainside (hillside), not inside a synagogue. Seeing the crowds, He went up on a mountain and sat down to teach (Matthew 5:1).", fr: "Jésus prononça le Sermon sur la Montagne sur un versant de montagne, pas dans une synagogue. Voyant les foules, il monta sur la montagne et s'assit pour enseigner (Matthieu 5:1)." },
    didYouKnow: { en: "The Beatitudes open the Sermon on the Mount in Matthew 5 and describe people Jesus calls blessed.", fr: "Les Béatitudes ouvrent le Sermon sur la montagne en Matthieu 5 et décrivent des personnes que Jésus appelle heureuses." }
  },
  {
    id: 'b55', levelNumber: 55, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Transfiguration", fr: "La Transfiguration" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b55-a', isTruth: true,  text: { en: "Jesus' face shone like the sun and His clothes became as white as light during the Transfiguration.", fr: "Le visage de Jésus brilla comme le soleil et ses vêtements devinrent blancs comme la lumière lors de la Transfiguration." } },
      { id: 'b55-b', isTruth: true,  text: { en: "Moses and Elijah appeared with Jesus and talked with Him during the Transfiguration.", fr: "Moïse et Élie apparurent avec Jésus et s'entretinrent avec lui lors de la Transfiguration." } },
      { id: 'b55-c', isTruth: true,  text: { en: "Peter, James, and John witnessed the Transfiguration.", fr: "Pierre, Jacques et Jean furent témoins de la Transfiguration." } },
      { id: 'b55-d', isTruth: false, text: { en: "During the Transfiguration, the angel Gabriel appeared and announced Jesus as the Messiah.", fr: "Lors de la Transfiguration, l'ange Gabriel apparut et annonça Jésus comme le Messie." } },
    ],
    explanation: { en: "Gabriel did not appear at the Transfiguration. Instead, a bright cloud covered them and a voice from the cloud said, 'This is my Son, whom I love; with him I am well pleased. Listen to him!' (Matthew 17:5).", fr: "Gabriel n'apparut pas lors de la Transfiguration. Une nuée lumineuse les couvrit et une voix dit : 'Celui-ci est mon Fils bien-aimé, en qui j'ai mis toute mon affection ; écoutez-le !' (Matthieu 17:5)." },
    didYouKnow: { en: "Moses and Elijah appeared with Jesus at the Transfiguration, representing major figures of the Law and the Prophets.", fr: "Moïse et Élie apparurent avec Jésus lors de la Transfiguration, représentant de grandes figures de la Loi et des Prophètes." }
  },
  {
    id: 'b56', levelNumber: 56, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Healing of Ten Lepers", fr: "La Guérison de Dix Lépreux" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b56-a', isTruth: true,  text: { en: "Jesus healed ten lepers who called out to Him for mercy.", fr: "Jésus guérit dix lépreux qui l'appelèrent à l'aide." } },
      { id: 'b56-b', isTruth: true,  text: { en: "Only one of the ten healed lepers returned to thank Jesus.", fr: "Un seul des dix lépreux guéris revint remercier Jésus." } },
      { id: 'b56-c', isTruth: true,  text: { en: "The leper who returned to thank Jesus was a Samaritan.", fr: "Le lépreux qui revint remercier Jésus était un Samaritain." } },
      { id: 'b56-d', isTruth: false, text: { en: "Jesus healed the lepers by touching each one individually on the forehead.", fr: "Jésus guérit les lépreux en touchant le front de chacun individuellement." } },
    ],
    explanation: { en: "Jesus did not touch them. He simply told the ten lepers to 'Go, show yourselves to the priests.' As they went, they were cleansed — their healing came while they were walking in obedience (Luke 17:14).", fr: "Jésus ne les toucha pas. Il dit simplement aux dix lépreux : 'Allez, montrez-vous aux sacrificateurs.' En chemin, ils furent purifiés — leur guérison vint pendant qu'ils marchaient dans l'obéissance (Luc 17:14)." },
    didYouKnow: { en: "The one healed leper who returned to thank Jesus was a Samaritan.", fr: "Le seul lépreux guéri qui revint remercier Jésus était un Samaritain." }
  },
  {
    id: 'b57', levelNumber: 57, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Lord's Prayer", fr: "La Prière du Seigneur" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b57-a', isTruth: true,  text: { en: "Jesus taught His disciples to pray 'Our Father in heaven, hallowed be your name.'", fr: "Jésus apprit à ses disciples à prier : 'Notre Père qui es aux cieux, que ton nom soit sanctifié.'" } },
      { id: 'b57-b', isTruth: true,  text: { en: "The Lord's Prayer includes asking for daily bread and forgiveness of debts/sins.", fr: "La Prière du Seigneur comprend une demande de pain quotidien et de pardon des dettes/péchés." } },
      { id: 'b57-c', isTruth: false, text: { en: "Jesus first taught the Lord's Prayer to the crowd on the Mount during His Sermon on the Mount only.", fr: "Jésus enseigna la Prière du Seigneur uniquement à la foule lors du Sermon sur la Montagne." } },
      { id: 'b57-d', isTruth: true,  text: { en: "The Lord's Prayer includes the petition 'Lead us not into temptation, but deliver us from evil.'", fr: "La Prière du Seigneur comprend la demande : 'Ne nous induis pas en tentation, mais délivre-nous du mal.'" } },
    ],
    explanation: { en: "A version of the Lord's Prayer appears in Matthew 5-7 (Sermon on the Mount), but Luke 11:1-4 records Jesus teaching it again privately to His disciples after one of them asked Him to teach them to pray.", fr: "Une version de la Prière du Seigneur apparaît dans Matthieu 5-7 (Sermon sur la Montagne), mais Luc 11:1-4 rapporte que Jésus l'enseigna aussi en privé à ses disciples après qu'un d'eux lui demanda comment prier." },
    didYouKnow: { en: "The Lord's Prayer appears in Matthew 6 and in a shorter form in Luke 11.", fr: "La prière du Seigneur apparaît en Matthieu 6 et sous une forme plus courte en Luc 11." }
  },
  {
    id: 'b58', levelNumber: 58, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Jacob's Blessing — Disguise of Isaac", fr: "La Bénédiction de Jacob — La Ruse d'Isaac" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b58-a', isTruth: true,  text: { en: "Rebekah helped Jacob deceive his father Isaac to steal Esau's blessing.", fr: "Rébecca aida Jacob à tromper son père Isaac pour lui voler la bénédiction d'Ésaü." } },
      { id: 'b58-b', isTruth: true,  text: { en: "Jacob wore goatskins on his arms and neck to feel like the hairy Esau to his blind father.", fr: "Jacob mit des peaux de chevreau sur ses bras et son cou pour paraître poilu comme Ésaü à son père aveugle." } },
      { id: 'b58-c', isTruth: true,  text: { en: "Isaac gave Jacob the blessing that made him lord over his brothers and nations would serve him.", fr: "Isaac donna à Jacob la bénédiction qui en faisait le seigneur de ses frères et que des nations lui serviraient." } },
      { id: 'b58-d', isTruth: false, text: { en: "When Esau discovered the deception, he immediately forgave Jacob and shared the blessing.", fr: "Quand Ésaü découvrit la tromperie, il pardonna immédiatement à Jacob et partagea la bénédiction." } },
    ],
    explanation: { en: "Esau was furious and wept bitterly. He planned to kill Jacob after their father died. Jacob had to flee to his uncle Laban's house to escape Esau's rage (Genesis 27:41-43).", fr: "Ésaü était furieux et pleura amèrement. Il projetait de tuer Jacob après la mort de leur père. Jacob dut fuir chez son oncle Laban pour échapper à la colère d'Ésaü (Genèse 27:41-43)." },
    didYouKnow: { en: "Rebekah helped Jacob prepare the disguise and the meal used to obtain Isaac's blessing.", fr: "Rébecca aida Jacob à préparer le déguisement et le repas utilisés pour obtenir la bénédiction d'Isaac." }
  },
  {
    id: 'b59', levelNumber: 59, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Balaam's Donkey", fr: "L'Ânesse de Balaam" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b59-a', isTruth: true,  text: { en: "Balaam was a prophet hired by King Balak to curse the Israelites.", fr: "Balaam était un prophète engagé par le roi Balak pour maudire les Israélites." } },
      { id: 'b59-b', isTruth: true,  text: { en: "An angel of the LORD stood in the road with a drawn sword, and Balaam's donkey saw it but Balaam did not.", fr: "Un ange de l'Éternel se tint sur le chemin avec une épée nue ; l'ânesse de Balaam le vit, mais pas Balaam." } },
      { id: 'b59-c', isTruth: true,  text: { en: "God opened the donkey's mouth so it spoke to Balaam.", fr: "Dieu ouvrit la bouche de l'ânesse qui parla à Balaam." } },
      { id: 'b59-d', isTruth: false, text: { en: "Balaam successfully cursed the Israelites four times as Balak requested.", fr: "Balaam maudit avec succès les Israélites quatre fois comme Balak l'avait demandé." } },
    ],
    explanation: { en: "Balaam blessed Israel instead of cursing them — repeatedly! Every time Balak brought him to a new vantage point, God put blessings in Balaam's mouth instead of curses (Numbers 22-24).", fr: "Balaam bénit Israël au lieu de le maudire — à plusieurs reprises ! Chaque fois que Balak l'amenait à un nouveau point de vue, Dieu mettait des bénédictions dans sa bouche au lieu de malédictions (Nombres 22-24)." },
    didYouKnow: { en: "Balaam's donkey is one of the rare animals in Scripture described as speaking with human words.", fr: "L'ânesse de Balaam est l'un des rares animaux de l'Écriture décrits comme parlant avec des paroles humaines." }
  },
  {
    id: 'b60', levelNumber: 60, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Saul Becomes King", fr: "Saül Devient Roi" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b60-a', isTruth: true,  text: { en: "The Israelites asked Samuel for a king so they could be like other nations.", fr: "Les Israélites demandèrent à Samuel un roi pour être comme les autres nations." } },
      { id: 'b60-b', isTruth: true,  text: { en: "Saul was from the tribe of Benjamin and was taller than anyone else in Israel.", fr: "Saül appartenait à la tribu de Benjamin et était plus grand que quiconque en Israël." } },
      { id: 'b60-c', isTruth: true,  text: { en: "God warned the Israelites that a king would take their sons for his army and their daughters for his service.", fr: "Dieu avertit les Israélites qu'un roi prendrait leurs fils pour son armée et leurs filles pour son service." } },
      { id: 'b60-d', isTruth: false, text: { en: "Saul was anointed king by the prophet Elijah.", fr: "Saül fut oint roi par le prophète Élie." } },
    ],
    explanation: { en: "Saul was anointed king by Samuel, not Elijah. Elijah lived centuries later during the reign of King Ahab. Samuel was Israel's last judge and first prophet-kingmaker (1 Samuel 10:1).", fr: "Saül fut oint roi par Samuel, pas par Élie. Élie vécut des siècles plus tard sous le règne du roi Achab. Samuel était le dernier juge et le premier prophète à désigner un roi en Israël (1 Samuel 10:1)." },
    didYouKnow: { en: "Saul was from the tribe of Benjamin and was described as taller than the other Israelites.", fr: "Saül appartenait à la tribu de Benjamin et il est décrit comme plus grand que les autres Israélites." }
  },
  {
    id: 'b61', levelNumber: 61, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Crucifixion", fr: "La Crucifixion" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b61-a', isTruth: true,  text: { en: "Jesus was crucified at a place called Golgotha, meaning 'The Place of the Skull.'", fr: "Jésus fut crucifié en un lieu appelé Golgotha, signifiant 'Le Lieu du Crâne.'" } },
      { id: 'b61-b', isTruth: true,  text: { en: "Darkness covered the land for three hours during the crucifixion.", fr: "Les ténèbres couvrirent le pays pendant trois heures lors de la crucifixion." } },
      { id: 'b61-c', isTruth: true,  text: { en: "A Roman soldier pierced Jesus' side with a spear after He died.", fr: "Un soldat romain perça le côté de Jésus avec une lance après sa mort." } },
      { id: 'b61-d', isTruth: false, text: { en: "All of Jesus' twelve apostles stood at the foot of the cross when He died.", fr: "Les douze apôtres de Jésus se tenaient tous au pied de la croix quand il mourut." } },
    ],
    explanation: { en: "Most of the disciples had fled. At the cross stood Jesus' mother Mary, Mary Magdalene, other women, and the beloved disciple (John). Judas was already dead, and most male disciples had scattered (John 19:25-27).", fr: "La plupart des disciples avaient fui. Au pied de la croix se tenaient Marie, Marie-Madeleine, d'autres femmes et le disciple bien-aimé (Jean). Judas était déjà mort, et la plupart des disciples hommes s'étaient dispersés (Jean 19:25-27)." },
    didYouKnow: { en: "The Gospels say darkness covered the land for about three hours during Jesus' crucifixion.", fr: "Les Évangiles disent que les ténèbres couvrirent le pays pendant environ trois heures lors de la crucifixion de Jésus." }
  },
  {
    id: 'b62', levelNumber: 62, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Gideon's Army", fr: "L'Armée de Gédéon" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b62-a', isTruth: true,  text: { en: "God told Gideon his army of 32,000 was too large to defeat the Midianites, so God would get no glory.", fr: "Dieu dit à Gédéon que son armée de 32 000 hommes était trop grande, sinon Dieu n'en recevrait aucune gloire." } },
      { id: 'b62-b', isTruth: true,  text: { en: "God reduced Gideon's army to 300 men by observing how they drank water from a stream.", fr: "Dieu réduisit l'armée de Gédéon à 300 hommes en observant comment ils buvaient l'eau d'un ruisseau." } },
      { id: 'b62-c', isTruth: true,  text: { en: "Gideon's 300 men used trumpets, empty jars, and torches to rout the Midianite army.", fr: "Les 300 hommes de Gédéon utilisèrent des trompettes, des cruches vides et des torches pour mettre l'armée madianite en déroute." } },
      { id: 'b62-d', isTruth: false, text: { en: "Gideon's army of 300 defeated the Midianites by fighting them in a traditional sword battle.", fr: "L'armée de 300 hommes de Gédéon vainquit les Madianites dans une bataille traditionnelle à l'épée." } },
    ],
    explanation: { en: "The victory came through a surprise psychological attack — torches, jars, and trumpets in the night caused the Midianite army to panic and turn on each other. No conventional battle took place (Judges 7:19-22).", fr: "La victoire vint d'une attaque psychologique surprise — des torches, des cruches et des trompettes dans la nuit paniquèrent l'armée madianite qui se retourna contre elle-même. Il n'y eut pas de bataille conventionnelle (Juges 7:19-22)." },
    didYouKnow: { en: "Gideon's three hundred men carried trumpets and jars with torches during the surprise attack on Midian.", fr: "Les trois cents hommes de Gédéon portaient des trompettes et des cruches contenant des torches lors de l'attaque surprise contre Madian." }
  },
  {
    id: 'b63', levelNumber: 63, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Parable of the Talents", fr: "La Parabole des Talents" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b63-a', isTruth: true,  text: { en: "A master gave talents (large sums of money) to his three servants before going on a journey.", fr: "Un maître donna des talents (grandes sommes d'argent) à ses trois serviteurs avant de partir en voyage." } },
      { id: 'b63-b', isTruth: true,  text: { en: "The servant who received five talents doubled his master's investment to ten.", fr: "Le serviteur qui reçut cinq talents doubla l'investissement de son maître jusqu'à dix." } },
      { id: 'b63-c', isTruth: false, text: { en: "The servant who buried his talent was praised for keeping it safe.", fr: "Le serviteur qui enfouit son talent fut félicité pour l'avoir gardé en sécurité." } },
      { id: 'b63-d', isTruth: true,  text: { en: "The talent that was buried was taken away and given to the servant who had ten.", fr: "Le talent enfoui fut ôté au serviteur et donné à celui qui en avait dix." } },
    ],
    explanation: { en: "The servant who buried his talent was condemned as wicked and lazy. He was cast into outer darkness. His talent was taken from him and given to the one who had ten (Matthew 25:26-30).", fr: "Le serviteur qui enfouit son talent fut condamné comme méchant et paresseux. Il fut jeté dans les ténèbres du dehors. Son talent lui fut ôté et donné à celui qui en avait dix (Matthieu 25:26-30)." },
    didYouKnow: { en: "In the parable, a 'talent' was a very large unit of money, not a reference to a personal skill as the English word often means today.", fr: "Dans la parabole, un « talent » était une très grande unité monétaire, et non une aptitude personnelle comme le mot peut le signifier aujourd'hui." }
  },
  {
    id: 'b64', levelNumber: 64, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Job's Suffering", fr: "La Souffrance de Job" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b64-a', isTruth: true,  text: { en: "God allowed Satan to test Job, but initially Satan was forbidden to touch Job's body.", fr: "Dieu permit à Satan d'éprouver Job, mais Satan ne put d'abord pas toucher son corps." } },
      { id: 'b64-b', isTruth: true,  text: { en: "Job lost his children, his livestock, and his servants in sudden disasters.", fr: "Job perdit ses enfants, son bétail et ses serviteurs dans des catastrophes soudaines." } },
      { id: 'b64-c', isTruth: true,  text: { en: "Job's three friends sat with him in silence for seven days before speaking.", fr: "Les trois amis de Job restèrent assis en silence avec lui pendant sept jours avant de prendre la parole." } },
      { id: 'b64-d', isTruth: false, text: { en: "Job cursed God and abandoned his faith after losing everything.", fr: "Job maudit Dieu et abandonna sa foi après avoir tout perdu." } },
    ],
    explanation: { en: "Job never cursed God. He did curse the day of his birth and questioned God intensely, but throughout the book Job maintained his integrity and ultimately affirmed his trust in God (Job 2:10; 19:25).", fr: "Job ne maudit jamais Dieu. Il maudit le jour de sa naissance et questionna intensément Dieu, mais tout au long du livre il maintint son intégrité et affirma finalement sa confiance en Dieu (Job 2:10 ; 19:25)." },
    didYouKnow: { en: "Job's three friends first sat with him in silence for seven days and seven nights before beginning their speeches.", fr: "Les trois amis de Job restèrent d'abord assis avec lui en silence pendant sept jours et sept nuits avant de commencer leurs discours." }
  },
  {
    id: 'b65', levelNumber: 65, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Solomon and the Baby — Judgment", fr: "Salomon et le Bébé — Le Jugement" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b65-a', isTruth: true,  text: { en: "Two women came before Solomon, each claiming to be the mother of a living baby.", fr: "Deux femmes se présentèrent devant Salomon, chacune se disant la mère d'un bébé vivant." } },
      { id: 'b65-b', isTruth: true,  text: { en: "Solomon commanded that a sword be brought and the living child cut in two.", fr: "Salomon ordonna qu'on apporte une épée et qu'on coupe l'enfant vivant en deux." } },
      { id: 'b65-c', isTruth: true,  text: { en: "The true mother gave up her claim to save the child's life, while the other agreed to the cutting.", fr: "La vraie mère renonça à sa réclamation pour sauver la vie de l'enfant, tandis que l'autre accepta de le couper." } },
      { id: 'b65-d', isTruth: false, text: { en: "Solomon made his judgment only after consulting with his council of elders for three days.", fr: "Salomon ne rendit son jugement qu'après avoir consulté son conseil d'anciens pendant trois jours." } },
    ],
    explanation: { en: "Solomon made his wise judgment immediately and on his own — no council of elders is mentioned. This display of wisdom caused all Israel to see that God's wisdom was in him (1 Kings 3:27-28).", fr: "Salomon rendit son jugement immédiatement et seul — aucun conseil d'anciens n'est mentionné. Cette démonstration de sagesse fit voir à tout Israël que la sagesse de Dieu était en lui (1 Rois 3:27-28)." },
    didYouKnow: { en: "Solomon's judgment about the two women and the baby appears soon after God grants him wisdom in 1 Kings 3.", fr: "Le jugement de Salomon concernant les deux femmes et le bébé apparaît peu après que Dieu lui accorde la sagesse en 1 Rois 3." }
  },
  {
    id: 'b66', levelNumber: 66, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Isaac and Rebekah", fr: "Isaac et Rébecca" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b66-a', isTruth: true,  text: { en: "Abraham sent his servant to find a wife for Isaac from his own relatives in Mesopotamia.", fr: "Abraham envoya son serviteur trouver une épouse pour Isaac parmi ses propres proches en Mésopotamie." } },
      { id: 'b66-b', isTruth: true,  text: { en: "Abraham's servant prayed at a well and asked God to show him the right woman through a specific sign.", fr: "Le serviteur d'Abraham pria près d'un puits et demanda à Dieu de lui indiquer la bonne femme par un signe précis." } },
      { id: 'b66-c', isTruth: true,  text: { en: "Rebekah was a virgin who drew water for the servant and all his camels at the well.", fr: "Rébecca était une vierge qui puisa de l'eau pour le serviteur et tous ses chameaux au puits." } },
      { id: 'b66-d', isTruth: false, text: { en: "Isaac met Rebekah for the first time at Abraham's campsite when she arrived.", fr: "Isaac rencontra Rébecca pour la première fois au campement d'Abraham à son arrivée." } },
    ],
    explanation: { en: "Isaac was out in the field meditating at evening when he saw the camels coming. He met Rebekah in the field, not at a campsite. He brought her into his mother Sarah's tent (Genesis 24:62-67).", fr: "Isaac se promenait dans les champs au soir et vit les chameaux arriver. Il rencontra Rébecca dans les champs, pas à un campement. Il l'amena dans la tente de sa mère Sara (Genèse 24:62-67)." },
    didYouKnow: { en: "Abraham's servant gave Rebekah jewelry after she offered water to him and his camels.", fr: "Le serviteur d'Abraham donna des bijoux à Rébecca après qu'elle eut offert de l'eau à lui et à ses chameaux." }
  },
  {
    id: 'b67', levelNumber: 67, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Deborah the Judge", fr: "Déborah la Juge" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b67-a', isTruth: true,  text: { en: "Deborah was a prophetess and the only female judge mentioned in the book of Judges.", fr: "Déborah était une prophétesse et la seule femme juge mentionnée dans le livre des Juges." } },
      { id: 'b67-b', isTruth: true,  text: { en: "Deborah summoned Barak to lead Israel's army against Sisera, commander of Canaan's forces.", fr: "Déborah convoqua Barak pour conduire l'armée d'Israël contre Sisera, commandant des forces cananéennes." } },
      { id: 'b67-c', isTruth: true,  text: { en: "Barak refused to go unless Deborah went with him.", fr: "Barak refusa de partir à moins que Déborah ne l'accompagne." } },
      { id: 'b67-d', isTruth: false, text: { en: "Deborah herself killed Sisera at the end of the battle.", fr: "Déborah elle-même tua Sisera à la fin de la bataille." } },
    ],
    explanation: { en: "Sisera was killed by Jael, a woman from the Kenite clan, not by Deborah. Jael drove a tent peg through Sisera's head while he slept in her tent (Judges 4:21).", fr: "Sisera fut tué par Yaël, une femme du clan des Qénites, et non par Déborah. Yaël enfonça un piquet de tente dans la tempe de Sisera pendant qu'il dormait dans sa tente (Juges 4:21)." },
    didYouKnow: { en: "Deborah is both a prophetess and a judge in Judges 4–5, and she worked alongside Barak in Israel's deliverance.", fr: "Débora est à la fois prophétesse et juge dans Juges 4–5, et elle œuvra avec Barak pour la délivrance d'Israël." }
  },
  {
    id: 'b68', levelNumber: 68, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Abraham and the Covenant of Circumcision", fr: "Abraham et l'Alliance de la Circoncision" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b68-a', isTruth: true,  text: { en: "God changed Abram's name to Abraham when He established the covenant of circumcision.", fr: "Dieu changea le nom d'Abram en Abraham lorsqu'Il établit l'alliance de la circoncision." } },
      { id: 'b68-b', isTruth: true,  text: { en: "God also changed Sarai's name to Sarah at the same time.", fr: "Dieu changea aussi le nom de Saraï en Sarah au même moment." } },
      { id: 'b68-c', isTruth: true,  text: { en: "God promised Abraham that Sarah would bear a son even though she was 90 years old.", fr: "Dieu promit à Abraham que Sara porterait un fils même si elle avait 90 ans." } },
      { id: 'b68-d', isTruth: false, text: { en: "Abraham was 80 years old when God established the covenant of circumcision with him.", fr: "Abraham avait 80 ans lorsque Dieu établit avec lui l'alliance de la circoncision." } },
    ],
    explanation: { en: "Abraham was 99 years old when God appeared to him and established the covenant of circumcision — not 80. The text says specifically 'Abram was ninety-nine years old' (Genesis 17:1).", fr: "Abraham avait 99 ans lorsque Dieu lui apparut et établit l'alliance de la circoncision — pas 80. Le texte dit précisément : 'Abram était âgé de quatre-vingt-dix-neuf ans' (Genèse 17:1)." },
    didYouKnow: { en: "Circumcision was given as the sign of God's covenant with Abraham and his household in Genesis 17.", fr: "La circoncision fut donnée comme signe de l'alliance de Dieu avec Abraham et sa maison en Genèse 17." }
  },


  // ─── BEGINNER EXPANSION b69–b167 ─────────────────────────────────────────────
  {
    id: 'b69', levelNumber: 69, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Genesis", fr: "Le livre de Genèse" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b69-a', isTruth: true, text: { en: "Genesis belongs to the Old Testament.", fr: "Genèse appartient à l’Ancien Testament." } },
      { id: 'b69-b', isTruth: true, text: { en: "Genesis has 50 chapters.", fr: "Genèse compte 50 chapitres." } },
      { id: 'b69-c', isTruth: true, text: { en: "Exodus follows Genesis in the usual Protestant ordering of the Bible.", fr: "Exode suit Genèse dans l’ordre protestant habituel de la Bible." } },
      { id: 'b69-d', isTruth: false, text: { en: "Genesis is followed immediately by Revelation in that ordering.", fr: "Genèse est suivi immédiatement de Apocalypse dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Genesis is followed by Exodus. Genesis contains 50 chapters.", fr: "Dans l’ordre protestant habituel, Genèse est suivi de Exode. Genèse compte 50 chapitres." },
    scripture: { en: "Genesis", fr: "Genèse" },
    didYouKnow: { en: "Genesis opens with creation and ends with Joseph's death in Egypt.", fr: "La Genèse commence par la création et se termine par la mort de Joseph en Égypte." }
  },
  {
    id: 'b70', levelNumber: 70, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Exodus", fr: "Le livre de Exode" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b70-a', isTruth: true, text: { en: "Exodus belongs to the Old Testament.", fr: "Exode appartient à l’Ancien Testament." } },
      { id: 'b70-b', isTruth: true, text: { en: "Exodus has 40 chapters.", fr: "Exode compte 40 chapitres." } },
      { id: 'b70-c', isTruth: true, text: { en: "Leviticus follows Exodus in the usual Protestant ordering of the Bible.", fr: "Lévitique suit Exode dans l’ordre protestant habituel de la Bible." } },
      { id: 'b70-d', isTruth: false, text: { en: "Exodus is followed immediately by Genesis in that ordering.", fr: "Exode est suivi immédiatement de Genèse dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Exodus is followed by Leviticus. Exodus contains 40 chapters.", fr: "Dans l’ordre protestant habituel, Exode est suivi de Lévitique. Exode compte 40 chapitres." },
    scripture: { en: "Exodus", fr: "Exode" },
    didYouKnow: { en: "The name Exodus reflects Israel's departure from slavery in Egypt.", fr: "Le nom Exode évoque la sortie d’Israël de l’esclavage en Égypte." }
  },
  {
    id: 'b71', levelNumber: 71, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Leviticus", fr: "Le livre de Lévitique" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b71-a', isTruth: true, text: { en: "Leviticus belongs to the Old Testament.", fr: "Lévitique appartient à l’Ancien Testament." } },
      { id: 'b71-b', isTruth: true, text: { en: "Leviticus has 27 chapters.", fr: "Lévitique compte 27 chapitres." } },
      { id: 'b71-c', isTruth: true, text: { en: "Numbers follows Leviticus in the usual Protestant ordering of the Bible.", fr: "Nombres suit Lévitique dans l’ordre protestant habituel de la Bible." } },
      { id: 'b71-d', isTruth: false, text: { en: "Leviticus is followed immediately by Exodus in that ordering.", fr: "Lévitique est suivi immédiatement de Exode dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Leviticus is followed by Numbers. Leviticus contains 27 chapters.", fr: "Dans l’ordre protestant habituel, Lévitique est suivi de Nombres. Lévitique compte 27 chapitres." },
    scripture: { en: "Leviticus", fr: "Lévitique" },
    didYouKnow: { en: "Leviticus contains many instructions connected with Israel's priests, sacrifices, and holiness.", fr: "Le Lévitique contient de nombreuses instructions concernant les prêtres d’Israël, les sacrifices et la sainteté." }
  },
  {
    id: 'b72', levelNumber: 72, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Numbers", fr: "Le livre de Nombres" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b72-a', isTruth: true, text: { en: "Numbers belongs to the Old Testament.", fr: "Nombres appartient à l’Ancien Testament." } },
      { id: 'b72-b', isTruth: true, text: { en: "Numbers has 36 chapters.", fr: "Nombres compte 36 chapitres." } },
      { id: 'b72-c', isTruth: true, text: { en: "Deuteronomy follows Numbers in the usual Protestant ordering of the Bible.", fr: "Deutéronome suit Nombres dans l’ordre protestant habituel de la Bible." } },
      { id: 'b72-d', isTruth: false, text: { en: "Numbers is followed immediately by Leviticus in that ordering.", fr: "Nombres est suivi immédiatement de Lévitique dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Numbers is followed by Deuteronomy. Numbers contains 36 chapters.", fr: "Dans l’ordre protestant habituel, Nombres est suivi de Deutéronome. Nombres compte 36 chapitres." },
    scripture: { en: "Numbers", fr: "Nombres" },
    didYouKnow: { en: "Numbers records two censuses of Israel, one near the beginning and another near the end of the wilderness journey.", fr: "Les Nombres rapportent deux recensements d’Israël, l’un près du début et l’autre vers la fin du séjour au désert." }
  },
  {
    id: 'b73', levelNumber: 73, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Deuteronomy", fr: "Le livre de Deutéronome" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b73-a', isTruth: true, text: { en: "Deuteronomy belongs to the Old Testament.", fr: "Deutéronome appartient à l’Ancien Testament." } },
      { id: 'b73-b', isTruth: true, text: { en: "Deuteronomy has 34 chapters.", fr: "Deutéronome compte 34 chapitres." } },
      { id: 'b73-c', isTruth: true, text: { en: "Joshua follows Deuteronomy in the usual Protestant ordering of the Bible.", fr: "Josué suit Deutéronome dans l’ordre protestant habituel de la Bible." } },
      { id: 'b73-d', isTruth: false, text: { en: "Deuteronomy is followed immediately by Numbers in that ordering.", fr: "Deutéronome est suivi immédiatement de Nombres dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Deuteronomy is followed by Joshua. Deuteronomy contains 34 chapters.", fr: "Dans l’ordre protestant habituel, Deutéronome est suivi de Josué. Deutéronome compte 34 chapitres." },
    scripture: { en: "Deuteronomy", fr: "Deutéronome" },
    didYouKnow: { en: "Deuteronomy records Moses' final speeches to Israel before the people entered the Promised Land.", fr: "Le Deutéronome rapporte les derniers discours de Moïse à Israël avant l’entrée du peuple dans la Terre promise." }
  },
  {
    id: 'b74', levelNumber: 74, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Joshua", fr: "Le livre de Josué" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b74-a', isTruth: true, text: { en: "Joshua belongs to the Old Testament.", fr: "Josué appartient à l’Ancien Testament." } },
      { id: 'b74-b', isTruth: true, text: { en: "Joshua has 24 chapters.", fr: "Josué compte 24 chapitres." } },
      { id: 'b74-c', isTruth: true, text: { en: "Judges follows Joshua in the usual Protestant ordering of the Bible.", fr: "Juges suit Josué dans l’ordre protestant habituel de la Bible." } },
      { id: 'b74-d', isTruth: false, text: { en: "Joshua is followed immediately by Deuteronomy in that ordering.", fr: "Josué est suivi immédiatement de Deutéronome dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Joshua is followed by Judges. Joshua contains 24 chapters.", fr: "Dans l’ordre protestant habituel, Josué est suivi de Juges. Josué compte 24 chapitres." },
    scripture: { en: "Joshua", fr: "Josué" },
    didYouKnow: { en: "Joshua describes Israel crossing the Jordan River on dry ground before the conquest of Jericho.", fr: "Josué décrit Israël traversant le Jourdain à pied sec avant la conquête de Jéricho." }
  },
  {
    id: 'b75', levelNumber: 75, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Judges", fr: "Le livre de Juges" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b75-a', isTruth: true, text: { en: "Judges belongs to the Old Testament.", fr: "Juges appartient à l’Ancien Testament." } },
      { id: 'b75-b', isTruth: true, text: { en: "Judges has 21 chapters.", fr: "Juges compte 21 chapitres." } },
      { id: 'b75-c', isTruth: true, text: { en: "Ruth follows Judges in the usual Protestant ordering of the Bible.", fr: "Ruth suit Juges dans l’ordre protestant habituel de la Bible." } },
      { id: 'b75-d', isTruth: false, text: { en: "Judges is followed immediately by Joshua in that ordering.", fr: "Juges est suivi immédiatement de Josué dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Judges is followed by Ruth. Judges contains 21 chapters.", fr: "Dans l’ordre protestant habituel, Juges est suivi de Ruth. Juges compte 21 chapitres." },
    scripture: { en: "Judges", fr: "Juges" },
    didYouKnow: { en: "Judges repeatedly shows a cycle of rebellion, oppression, crying out to God, and deliverance.", fr: "Le livre des Juges montre à plusieurs reprises un cycle de rébellion, d’oppression, d’appel à Dieu et de délivrance." }
  },
  {
    id: 'b76', levelNumber: 76, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Ruth", fr: "Le livre de Ruth" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b76-a', isTruth: true, text: { en: "Ruth belongs to the Old Testament.", fr: "Ruth appartient à l’Ancien Testament." } },
      { id: 'b76-b', isTruth: true, text: { en: "Ruth has 4 chapters.", fr: "Ruth compte 4 chapitres." } },
      { id: 'b76-c', isTruth: true, text: { en: "1 Samuel follows Ruth in the usual Protestant ordering of the Bible.", fr: "1 Samuel suit Ruth dans l’ordre protestant habituel de la Bible." } },
      { id: 'b76-d', isTruth: false, text: { en: "Ruth is followed immediately by Judges in that ordering.", fr: "Ruth est suivi immédiatement de Juges dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Ruth is followed by 1 Samuel. Ruth contains 4 chapters.", fr: "Dans l’ordre protestant habituel, Ruth est suivi de 1 Samuel. Ruth compte 4 chapitres." },
    scripture: { en: "Ruth", fr: "Ruth" },
    didYouKnow: { en: "Ruth, a Moabite woman, became the great-grandmother of King David.", fr: "Ruth, une femme moabite, devint l’arrière-grand-mère du roi David." }
  },
  {
    id: 'b77', levelNumber: 77, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "1 Samuel", fr: "1 Samuel" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b77-a', isTruth: true, text: { en: "1 Samuel belongs to the Old Testament.", fr: "1 Samuel appartient à l’Ancien Testament." } },
      { id: 'b77-b', isTruth: true, text: { en: "1 Samuel has 31 chapters.", fr: "1 Samuel compte 31 chapitres." } },
      { id: 'b77-c', isTruth: true, text: { en: "2 Samuel follows 1 Samuel in the usual Protestant ordering of the Bible.", fr: "2 Samuel suit 1 Samuel dans l’ordre protestant habituel de la Bible." } },
      { id: 'b77-d', isTruth: false, text: { en: "1 Samuel is followed immediately by Ruth in that ordering.", fr: "1 Samuel est suivi immédiatement de Ruth dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, 1 Samuel is followed by 2 Samuel. 1 Samuel contains 31 chapters.", fr: "Dans l’ordre protestant habituel, 1 Samuel est suivi de 2 Samuel. 1 Samuel compte 31 chapitres." },
    scripture: { en: "1 Samuel", fr: "1 Samuel" },
    didYouKnow: { en: "First Samuel records Israel's transition from the period of the judges to the monarchy.", fr: "1 Samuel raconte le passage d’Israël de l’époque des juges à la monarchie." }
  },
  {
    id: 'b78', levelNumber: 78, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "2 Samuel", fr: "2 Samuel" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b78-a', isTruth: true, text: { en: "2 Samuel belongs to the Old Testament.", fr: "2 Samuel appartient à l’Ancien Testament." } },
      { id: 'b78-b', isTruth: true, text: { en: "2 Samuel has 24 chapters.", fr: "2 Samuel compte 24 chapitres." } },
      { id: 'b78-c', isTruth: true, text: { en: "1 Kings follows 2 Samuel in the usual Protestant ordering of the Bible.", fr: "1 Rois suit 2 Samuel dans l’ordre protestant habituel de la Bible." } },
      { id: 'b78-d', isTruth: false, text: { en: "2 Samuel is followed immediately by 1 Samuel in that ordering.", fr: "2 Samuel est suivi immédiatement de 1 Samuel dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, 2 Samuel is followed by 1 Kings. 2 Samuel contains 24 chapters.", fr: "Dans l’ordre protestant habituel, 2 Samuel est suivi de 1 Rois. 2 Samuel compte 24 chapitres." },
    scripture: { en: "2 Samuel", fr: "2 Samuel" },
    didYouKnow: { en: "Second Samuel focuses largely on the reign of King David.", fr: "2 Samuel porte en grande partie sur le règne du roi David." }
  },
  {
    id: 'b79', levelNumber: 79, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "1 Kings", fr: "1 Rois" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b79-a', isTruth: true, text: { en: "1 Kings belongs to the Old Testament.", fr: "1 Rois appartient à l’Ancien Testament." } },
      { id: 'b79-b', isTruth: true, text: { en: "1 Kings has 22 chapters.", fr: "1 Rois compte 22 chapitres." } },
      { id: 'b79-c', isTruth: true, text: { en: "2 Kings follows 1 Kings in the usual Protestant ordering of the Bible.", fr: "2 Rois suit 1 Rois dans l’ordre protestant habituel de la Bible." } },
      { id: 'b79-d', isTruth: false, text: { en: "1 Kings is followed immediately by 2 Samuel in that ordering.", fr: "1 Rois est suivi immédiatement de 2 Samuel dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, 1 Kings is followed by 2 Kings. 1 Kings contains 22 chapters.", fr: "Dans l’ordre protestant habituel, 1 Rois est suivi de 2 Rois. 1 Rois compte 22 chapitres." },
    scripture: { en: "1 Kings", fr: "1 Rois" },
    didYouKnow: { en: "First Kings begins with Solomon becoming king and later describes the division of the kingdom.", fr: "1 Rois commence avec l’accession de Salomon au trône et décrit ensuite la division du royaume." }
  },
  {
    id: 'b80', levelNumber: 80, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "2 Kings", fr: "2 Rois" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b80-a', isTruth: true, text: { en: "2 Kings belongs to the Old Testament.", fr: "2 Rois appartient à l’Ancien Testament." } },
      { id: 'b80-b', isTruth: true, text: { en: "2 Kings has 25 chapters.", fr: "2 Rois compte 25 chapitres." } },
      { id: 'b80-c', isTruth: true, text: { en: "1 Chronicles follows 2 Kings in the usual Protestant ordering of the Bible.", fr: "1 Chroniques suit 2 Rois dans l’ordre protestant habituel de la Bible." } },
      { id: 'b80-d', isTruth: false, text: { en: "2 Kings is followed immediately by 1 Kings in that ordering.", fr: "2 Rois est suivi immédiatement de 1 Rois dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, 2 Kings is followed by 1 Chronicles. 2 Kings contains 25 chapters.", fr: "Dans l’ordre protestant habituel, 2 Rois est suivi de 1 Chroniques. 2 Rois compte 25 chapitres." },
    scripture: { en: "2 Kings", fr: "2 Rois" },
    didYouKnow: { en: "Second Kings ends with Jerusalem fallen and many people of Judah taken into Babylonian exile.", fr: "2 Rois se termine après la chute de Jérusalem et la déportation de nombreux habitants de Juda à Babylone." }
  },
  {
    id: 'b81', levelNumber: 81, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "1 Chronicles", fr: "1 Chroniques" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b81-a', isTruth: true, text: { en: "1 Chronicles belongs to the Old Testament.", fr: "1 Chroniques appartient à l’Ancien Testament." } },
      { id: 'b81-b', isTruth: true, text: { en: "1 Chronicles has 29 chapters.", fr: "1 Chroniques compte 29 chapitres." } },
      { id: 'b81-c', isTruth: true, text: { en: "2 Chronicles follows 1 Chronicles in the usual Protestant ordering of the Bible.", fr: "2 Chroniques suit 1 Chroniques dans l’ordre protestant habituel de la Bible." } },
      { id: 'b81-d', isTruth: false, text: { en: "1 Chronicles is followed immediately by 2 Kings in that ordering.", fr: "1 Chroniques est suivi immédiatement de 2 Rois dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, 1 Chronicles is followed by 2 Chronicles. 1 Chronicles contains 29 chapters.", fr: "Dans l’ordre protestant habituel, 1 Chroniques est suivi de 2 Chroniques. 1 Chroniques compte 29 chapitres." },
    scripture: { en: "1 Chronicles", fr: "1 Chroniques" },
    didYouKnow: { en: "First Chronicles begins with extensive genealogies before focusing on David's reign.", fr: "1 Chroniques commence par de longues généalogies avant de se concentrer sur le règne de David." }
  },
  {
    id: 'b82', levelNumber: 82, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "2 Chronicles", fr: "2 Chroniques" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b82-a', isTruth: true, text: { en: "2 Chronicles belongs to the Old Testament.", fr: "2 Chroniques appartient à l’Ancien Testament." } },
      { id: 'b82-b', isTruth: true, text: { en: "2 Chronicles has 36 chapters.", fr: "2 Chroniques compte 36 chapitres." } },
      { id: 'b82-c', isTruth: true, text: { en: "Ezra follows 2 Chronicles in the usual Protestant ordering of the Bible.", fr: "Esdras suit 2 Chroniques dans l’ordre protestant habituel de la Bible." } },
      { id: 'b82-d', isTruth: false, text: { en: "2 Chronicles is followed immediately by 1 Chronicles in that ordering.", fr: "2 Chroniques est suivi immédiatement de 1 Chroniques dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, 2 Chronicles is followed by Ezra. 2 Chronicles contains 36 chapters.", fr: "Dans l’ordre protestant habituel, 2 Chroniques est suivi de Esdras. 2 Chroniques compte 36 chapitres." },
    scripture: { en: "2 Chronicles", fr: "2 Chroniques" },
    didYouKnow: { en: "Second Chronicles gives special attention to the kings of Judah and the temple in Jerusalem.", fr: "2 Chroniques accorde une attention particulière aux rois de Juda et au temple de Jérusalem." }
  },
  {
    id: 'b83', levelNumber: 83, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Ezra", fr: "Le livre de Esdras" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b83-a', isTruth: true, text: { en: "Ezra belongs to the Old Testament.", fr: "Esdras appartient à l’Ancien Testament." } },
      { id: 'b83-b', isTruth: true, text: { en: "Ezra has 10 chapters.", fr: "Esdras compte 10 chapitres." } },
      { id: 'b83-c', isTruth: true, text: { en: "Nehemiah follows Ezra in the usual Protestant ordering of the Bible.", fr: "Néhémie suit Esdras dans l’ordre protestant habituel de la Bible." } },
      { id: 'b83-d', isTruth: false, text: { en: "Ezra is followed immediately by 2 Chronicles in that ordering.", fr: "Esdras est suivi immédiatement de 2 Chroniques dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Ezra is followed by Nehemiah. Ezra contains 10 chapters.", fr: "Dans l’ordre protestant habituel, Esdras est suivi de Néhémie. Esdras compte 10 chapitres." },
    scripture: { en: "Ezra", fr: "Esdras" },
    didYouKnow: { en: "Ezra describes groups of Jewish exiles returning from Babylon and the rebuilding of the temple.", fr: "Esdras décrit le retour de groupes d’exilés juifs de Babylone et la reconstruction du temple." }
  },
  {
    id: 'b84', levelNumber: 84, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Nehemiah", fr: "Le livre de Néhémie" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b84-a', isTruth: true, text: { en: "Nehemiah belongs to the Old Testament.", fr: "Néhémie appartient à l’Ancien Testament." } },
      { id: 'b84-b', isTruth: true, text: { en: "Nehemiah has 13 chapters.", fr: "Néhémie compte 13 chapitres." } },
      { id: 'b84-c', isTruth: true, text: { en: "Esther follows Nehemiah in the usual Protestant ordering of the Bible.", fr: "Esther suit Néhémie dans l’ordre protestant habituel de la Bible." } },
      { id: 'b84-d', isTruth: false, text: { en: "Nehemiah is followed immediately by Ezra in that ordering.", fr: "Néhémie est suivi immédiatement de Esdras dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Nehemiah is followed by Esther. Nehemiah contains 13 chapters.", fr: "Dans l’ordre protestant habituel, Néhémie est suivi de Esther. Néhémie compte 13 chapitres." },
    scripture: { en: "Nehemiah", fr: "Néhémie" },
    didYouKnow: { en: "Nehemiah records that Jerusalem's wall was rebuilt in fifty-two days despite opposition.", fr: "Néhémie rapporte que la muraille de Jérusalem fut reconstruite en cinquante-deux jours malgré l’opposition." }
  },
  {
    id: 'b85', levelNumber: 85, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Esther", fr: "Le livre de Esther" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b85-a', isTruth: true, text: { en: "Esther belongs to the Old Testament.", fr: "Esther appartient à l’Ancien Testament." } },
      { id: 'b85-b', isTruth: true, text: { en: "Esther has 10 chapters.", fr: "Esther compte 10 chapitres." } },
      { id: 'b85-c', isTruth: true, text: { en: "Job follows Esther in the usual Protestant ordering of the Bible.", fr: "Job suit Esther dans l’ordre protestant habituel de la Bible." } },
      { id: 'b85-d', isTruth: false, text: { en: "Esther is followed immediately by Nehemiah in that ordering.", fr: "Esther est suivi immédiatement de Néhémie dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Esther is followed by Job. Esther contains 10 chapters.", fr: "Dans l’ordre protestant habituel, Esther est suivi de Job. Esther compte 10 chapitres." },
    scripture: { en: "Esther", fr: "Esther" },
    didYouKnow: { en: "Esther is one of the biblical books in which God's name is not explicitly mentioned in the Hebrew text.", fr: "Esther est l’un des livres bibliques où le nom de Dieu n’est pas explicitement mentionné dans le texte hébreu." }
  },
  {
    id: 'b86', levelNumber: 86, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Job", fr: "Le livre de Job" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b86-a', isTruth: true, text: { en: "Job belongs to the Old Testament.", fr: "Job appartient à l’Ancien Testament." } },
      { id: 'b86-b', isTruth: true, text: { en: "Job has 42 chapters.", fr: "Job compte 42 chapitres." } },
      { id: 'b86-c', isTruth: true, text: { en: "Psalms follows Job in the usual Protestant ordering of the Bible.", fr: "Psaumes suit Job dans l’ordre protestant habituel de la Bible." } },
      { id: 'b86-d', isTruth: false, text: { en: "Job is followed immediately by Esther in that ordering.", fr: "Job est suivi immédiatement de Esther dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Job is followed by Psalms. Job contains 42 chapters.", fr: "Dans l’ordre protestant habituel, Job est suivi de Psaumes. Job compte 42 chapitres." },
    scripture: { en: "Job", fr: "Job" },
    didYouKnow: { en: "Most of Job is written as dialogue between Job and others as they wrestle with suffering and God's justice.", fr: "La plus grande partie de Job est composée de dialogues entre Job et d’autres personnes sur la souffrance et la justice de Dieu." }
  },
  {
    id: 'b87', levelNumber: 87, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Psalms", fr: "Le livre de Psaumes" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b87-a', isTruth: true, text: { en: "Psalms belongs to the Old Testament.", fr: "Psaumes appartient à l’Ancien Testament." } },
      { id: 'b87-b', isTruth: true, text: { en: "Psalms has 150 chapters.", fr: "Psaumes compte 150 chapitres." } },
      { id: 'b87-c', isTruth: true, text: { en: "Proverbs follows Psalms in the usual Protestant ordering of the Bible.", fr: "Proverbes suit Psaumes dans l’ordre protestant habituel de la Bible." } },
      { id: 'b87-d', isTruth: false, text: { en: "Psalms is followed immediately by Job in that ordering.", fr: "Psaumes est suivi immédiatement de Job dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Psalms is followed by Proverbs. Psalms contains 150 chapters.", fr: "Dans l’ordre protestant habituel, Psaumes est suivi de Proverbes. Psaumes compte 150 chapitres." },
    scripture: { en: "Psalms", fr: "Psaumes" },
    didYouKnow: { en: "Psalm 119 is the longest chapter in the Bible, with 176 verses.", fr: "Le Psaume 119 est le plus long chapitre de la Bible, avec 176 versets." }
  },
  {
    id: 'b88', levelNumber: 88, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Proverbs", fr: "Le livre de Proverbes" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b88-a', isTruth: true, text: { en: "Proverbs belongs to the Old Testament.", fr: "Proverbes appartient à l’Ancien Testament." } },
      { id: 'b88-b', isTruth: true, text: { en: "Proverbs has 31 chapters.", fr: "Proverbes compte 31 chapitres." } },
      { id: 'b88-c', isTruth: true, text: { en: "Ecclesiastes follows Proverbs in the usual Protestant ordering of the Bible.", fr: "Ecclésiaste suit Proverbes dans l’ordre protestant habituel de la Bible." } },
      { id: 'b88-d', isTruth: false, text: { en: "Proverbs is followed immediately by Psalms in that ordering.", fr: "Proverbes est suivi immédiatement de Psaumes dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Proverbs is followed by Ecclesiastes. Proverbs contains 31 chapters.", fr: "Dans l’ordre protestant habituel, Proverbes est suivi de Ecclésiaste. Proverbes compte 31 chapitres." },
    scripture: { en: "Proverbs", fr: "Proverbes" },
    didYouKnow: { en: "Many Proverbs are associated with Solomon, though the book also names other contributors.", fr: "De nombreux proverbes sont associés à Salomon, bien que le livre mentionne aussi d’autres auteurs." }
  },
  {
    id: 'b89', levelNumber: 89, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Ecclesiastes", fr: "Le livre de Ecclésiaste" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b89-a', isTruth: true, text: { en: "Ecclesiastes belongs to the Old Testament.", fr: "Ecclésiaste appartient à l’Ancien Testament." } },
      { id: 'b89-b', isTruth: true, text: { en: "Ecclesiastes has 12 chapters.", fr: "Ecclésiaste compte 12 chapitres." } },
      { id: 'b89-c', isTruth: true, text: { en: "Song of Songs follows Ecclesiastes in the usual Protestant ordering of the Bible.", fr: "Cantique des Cantiques suit Ecclésiaste dans l’ordre protestant habituel de la Bible." } },
      { id: 'b89-d', isTruth: false, text: { en: "Ecclesiastes is followed immediately by Proverbs in that ordering.", fr: "Ecclésiaste est suivi immédiatement de Proverbes dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Ecclesiastes is followed by Song of Songs. Ecclesiastes contains 12 chapters.", fr: "Dans l’ordre protestant habituel, Ecclésiaste est suivi de Cantique des Cantiques. Ecclésiaste compte 12 chapitres." },
    scripture: { en: "Ecclesiastes", fr: "Ecclésiaste" },
    didYouKnow: { en: "Ecclesiastes repeatedly uses the expression 'under the sun' while reflecting on life in this world.", fr: "L’Ecclésiaste emploie souvent l’expression « sous le soleil » dans sa réflexion sur la vie dans ce monde." }
  },
  {
    id: 'b90', levelNumber: 90, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Song of Songs", fr: "Le livre de Cantique des Cantiques" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b90-a', isTruth: true, text: { en: "Song of Songs belongs to the Old Testament.", fr: "Cantique des Cantiques appartient à l’Ancien Testament." } },
      { id: 'b90-b', isTruth: true, text: { en: "Song of Songs has 8 chapters.", fr: "Cantique des Cantiques compte 8 chapitres." } },
      { id: 'b90-c', isTruth: true, text: { en: "Isaiah follows Song of Songs in the usual Protestant ordering of the Bible.", fr: "Ésaïe suit Cantique des Cantiques dans l’ordre protestant habituel de la Bible." } },
      { id: 'b90-d', isTruth: false, text: { en: "Song of Songs is followed immediately by Ecclesiastes in that ordering.", fr: "Cantique des Cantiques est suivi immédiatement de Ecclésiaste dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Song of Songs is followed by Isaiah. Song of Songs contains 8 chapters.", fr: "Dans l’ordre protestant habituel, Cantique des Cantiques est suivi de Ésaïe. Cantique des Cantiques compte 8 chapitres." },
    scripture: { en: "Song of Songs", fr: "Cantique des Cantiques" },
    didYouKnow: { en: "Song of Songs is a collection of poetic love songs traditionally associated with Solomon.", fr: "Le Cantique des cantiques est un recueil de poèmes d’amour traditionnellement associé à Salomon." }
  },
  {
    id: 'b91', levelNumber: 91, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Isaiah", fr: "Le livre de Ésaïe" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b91-a', isTruth: true, text: { en: "Isaiah belongs to the Old Testament.", fr: "Ésaïe appartient à l’Ancien Testament." } },
      { id: 'b91-b', isTruth: true, text: { en: "Isaiah has 66 chapters.", fr: "Ésaïe compte 66 chapitres." } },
      { id: 'b91-c', isTruth: true, text: { en: "Jeremiah follows Isaiah in the usual Protestant ordering of the Bible.", fr: "Jérémie suit Ésaïe dans l’ordre protestant habituel de la Bible." } },
      { id: 'b91-d', isTruth: false, text: { en: "Isaiah is followed immediately by Song of Songs in that ordering.", fr: "Ésaïe est suivi immédiatement de Cantique des Cantiques dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Isaiah is followed by Jeremiah. Isaiah contains 66 chapters.", fr: "Dans l’ordre protestant habituel, Ésaïe est suivi de Jérémie. Ésaïe compte 66 chapitres." },
    scripture: { en: "Isaiah", fr: "Ésaïe" },
    didYouKnow: { en: "Isaiah contains the prophecy that a ruler would come from Bethlehem's region and many passages Christians connect with the Messiah.", fr: "Ésaïe contient de nombreux passages que les chrétiens associent au Messie et à son œuvre." }
  },
  {
    id: 'b92', levelNumber: 92, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Jeremiah", fr: "Le livre de Jérémie" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b92-a', isTruth: true, text: { en: "Jeremiah belongs to the Old Testament.", fr: "Jérémie appartient à l’Ancien Testament." } },
      { id: 'b92-b', isTruth: true, text: { en: "Jeremiah has 52 chapters.", fr: "Jérémie compte 52 chapitres." } },
      { id: 'b92-c', isTruth: true, text: { en: "Lamentations follows Jeremiah in the usual Protestant ordering of the Bible.", fr: "Lamentations suit Jérémie dans l’ordre protestant habituel de la Bible." } },
      { id: 'b92-d', isTruth: false, text: { en: "Jeremiah is followed immediately by Isaiah in that ordering.", fr: "Jérémie est suivi immédiatement de Ésaïe dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Jeremiah is followed by Lamentations. Jeremiah contains 52 chapters.", fr: "Dans l’ordre protestant habituel, Jérémie est suivi de Lamentations. Jérémie compte 52 chapitres." },
    scripture: { en: "Jeremiah", fr: "Jérémie" },
    didYouKnow: { en: "Jeremiah served during the final decades of the kingdom of Judah before Jerusalem fell to Babylon.", fr: "Jérémie exerça son ministère durant les dernières décennies du royaume de Juda avant la chute de Jérusalem devant Babylone." }
  },
  {
    id: 'b93', levelNumber: 93, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Lamentations", fr: "Le livre de Lamentations" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b93-a', isTruth: true, text: { en: "Lamentations belongs to the Old Testament.", fr: "Lamentations appartient à l’Ancien Testament." } },
      { id: 'b93-b', isTruth: true, text: { en: "Lamentations has 5 chapters.", fr: "Lamentations compte 5 chapitres." } },
      { id: 'b93-c', isTruth: true, text: { en: "Ezekiel follows Lamentations in the usual Protestant ordering of the Bible.", fr: "Ézéchiel suit Lamentations dans l’ordre protestant habituel de la Bible." } },
      { id: 'b93-d', isTruth: false, text: { en: "Lamentations is followed immediately by Jeremiah in that ordering.", fr: "Lamentations est suivi immédiatement de Jérémie dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Lamentations is followed by Ezekiel. Lamentations contains 5 chapters.", fr: "Dans l’ordre protestant habituel, Lamentations est suivi de Ézéchiel. Lamentations compte 5 chapitres." },
    scripture: { en: "Lamentations", fr: "Lamentations" },
    didYouKnow: { en: "Lamentations is a collection of poetic laments over the destruction of Jerusalem.", fr: "Les Lamentations sont un recueil de complaintes poétiques sur la destruction de Jérusalem." }
  },
  {
    id: 'b94', levelNumber: 94, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Ezekiel", fr: "Le livre de Ézéchiel" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b94-a', isTruth: true, text: { en: "Ezekiel belongs to the Old Testament.", fr: "Ézéchiel appartient à l’Ancien Testament." } },
      { id: 'b94-b', isTruth: true, text: { en: "Ezekiel has 48 chapters.", fr: "Ézéchiel compte 48 chapitres." } },
      { id: 'b94-c', isTruth: true, text: { en: "Daniel follows Ezekiel in the usual Protestant ordering of the Bible.", fr: "Daniel suit Ézéchiel dans l’ordre protestant habituel de la Bible." } },
      { id: 'b94-d', isTruth: false, text: { en: "Ezekiel is followed immediately by Lamentations in that ordering.", fr: "Ézéchiel est suivi immédiatement de Lamentations dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Ezekiel is followed by Daniel. Ezekiel contains 48 chapters.", fr: "Dans l’ordre protestant habituel, Ézéchiel est suivi de Daniel. Ézéchiel compte 48 chapitres." },
    scripture: { en: "Ezekiel", fr: "Ézéchiel" },
    didYouKnow: { en: "Ezekiel received many of his visions while living among the Jewish exiles in Babylon.", fr: "Ézéchiel reçut plusieurs de ses visions alors qu’il vivait parmi les exilés juifs à Babylone." }
  },
  {
    id: 'b95', levelNumber: 95, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Daniel", fr: "Le livre de Daniel" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b95-a', isTruth: true, text: { en: "Daniel belongs to the Old Testament.", fr: "Daniel appartient à l’Ancien Testament." } },
      { id: 'b95-b', isTruth: true, text: { en: "Daniel has 12 chapters.", fr: "Daniel compte 12 chapitres." } },
      { id: 'b95-c', isTruth: true, text: { en: "Hosea follows Daniel in the usual Protestant ordering of the Bible.", fr: "Osée suit Daniel dans l’ordre protestant habituel de la Bible." } },
      { id: 'b95-d', isTruth: false, text: { en: "Daniel is followed immediately by Ezekiel in that ordering.", fr: "Daniel est suivi immédiatement de Ézéchiel dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Daniel is followed by Hosea. Daniel contains 12 chapters.", fr: "Dans l’ordre protestant habituel, Daniel est suivi de Osée. Daniel compte 12 chapitres." },
    scripture: { en: "Daniel", fr: "Daniel" },
    didYouKnow: { en: "Daniel contains both court narratives and symbolic visions about kingdoms and God's rule.", fr: "Daniel contient à la fois des récits de cour et des visions symboliques sur les royaumes et la souveraineté de Dieu." }
  },
  {
    id: 'b96', levelNumber: 96, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Hosea", fr: "Le livre de Osée" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b96-a', isTruth: true, text: { en: "Hosea belongs to the Old Testament.", fr: "Osée appartient à l’Ancien Testament." } },
      { id: 'b96-b', isTruth: true, text: { en: "Hosea has 14 chapters.", fr: "Osée compte 14 chapitres." } },
      { id: 'b96-c', isTruth: true, text: { en: "Joel follows Hosea in the usual Protestant ordering of the Bible.", fr: "Joël suit Osée dans l’ordre protestant habituel de la Bible." } },
      { id: 'b96-d', isTruth: false, text: { en: "Hosea is followed immediately by Daniel in that ordering.", fr: "Osée est suivi immédiatement de Daniel dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Hosea is followed by Joel. Hosea contains 14 chapters.", fr: "Dans l’ordre protestant habituel, Osée est suivi de Joël. Osée compte 14 chapitres." },
    scripture: { en: "Hosea", fr: "Osée" },
    didYouKnow: { en: "Hosea's marriage and family life were used as a prophetic sign concerning Israel's unfaithfulness and God's steadfast love.", fr: "Le mariage et la vie familiale d’Osée servirent de signe prophétique concernant l’infidélité d’Israël et l’amour fidèle de Dieu." }
  },
  {
    id: 'b97', levelNumber: 97, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Joel", fr: "Le livre de Joël" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b97-a', isTruth: true, text: { en: "Joel belongs to the Old Testament.", fr: "Joël appartient à l’Ancien Testament." } },
      { id: 'b97-b', isTruth: true, text: { en: "Joel has 3 chapters.", fr: "Joël compte 3 chapitres." } },
      { id: 'b97-c', isTruth: true, text: { en: "Amos follows Joel in the usual Protestant ordering of the Bible.", fr: "Amos suit Joël dans l’ordre protestant habituel de la Bible." } },
      { id: 'b97-d', isTruth: false, text: { en: "Joel is followed immediately by Hosea in that ordering.", fr: "Joël est suivi immédiatement de Osée dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Joel is followed by Amos. Joel contains 3 chapters.", fr: "Dans l’ordre protestant habituel, Joël est suivi de Amos. Joël compte 3 chapitres." },
    scripture: { en: "Joel", fr: "Joël" },
    didYouKnow: { en: "Joel describes a devastating locust plague and promises that God will pour out His Spirit.", fr: "Joël décrit une invasion dévastatrice de sauterelles et promet que Dieu répandra son Esprit." }
  },
  {
    id: 'b98', levelNumber: 98, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Amos", fr: "Le livre de Amos" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b98-a', isTruth: true, text: { en: "Amos belongs to the Old Testament.", fr: "Amos appartient à l’Ancien Testament." } },
      { id: 'b98-b', isTruth: true, text: { en: "Amos has 9 chapters.", fr: "Amos compte 9 chapitres." } },
      { id: 'b98-c', isTruth: true, text: { en: "Obadiah follows Amos in the usual Protestant ordering of the Bible.", fr: "Abdias suit Amos dans l’ordre protestant habituel de la Bible." } },
      { id: 'b98-d', isTruth: false, text: { en: "Amos is followed immediately by Joel in that ordering.", fr: "Amos est suivi immédiatement de Joël dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Amos is followed by Obadiah. Amos contains 9 chapters.", fr: "Dans l’ordre protestant habituel, Amos est suivi de Abdias. Amos compte 9 chapitres." },
    scripture: { en: "Amos", fr: "Amos" },
    didYouKnow: { en: "Amos said he was a shepherd and a dresser of sycamore figs before God called him to prophesy.", fr: "Amos déclara qu’il était berger et cultivateur de sycomores avant que Dieu ne l’appelle à prophétiser." }
  },
  {
    id: 'b99', levelNumber: 99, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Obadiah", fr: "Le livre de Abdias" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b99-a', isTruth: true, text: { en: "Obadiah belongs to the Old Testament.", fr: "Abdias appartient à l’Ancien Testament." } },
      { id: 'b99-b', isTruth: true, text: { en: "Obadiah has 1 chapter.", fr: "Abdias compte 1 chapitre." } },
      { id: 'b99-c', isTruth: true, text: { en: "Jonah follows Obadiah in the usual Protestant ordering of the Bible.", fr: "Jonas suit Abdias dans l’ordre protestant habituel de la Bible." } },
      { id: 'b99-d', isTruth: false, text: { en: "Obadiah is followed immediately by Amos in that ordering.", fr: "Abdias est suivi immédiatement de Amos dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Obadiah is followed by Jonah. Obadiah contains 1 chapter.", fr: "Dans l’ordre protestant habituel, Abdias est suivi de Jonas. Abdias compte 1 chapitre." },
    scripture: { en: "Obadiah", fr: "Abdias" },
    didYouKnow: { en: "Obadiah is the shortest book of the Old Testament by number of verses.", fr: "Abdias est le livre le plus court de l’Ancien Testament par le nombre de versets." }
  },
  {
    id: 'b100', levelNumber: 100, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Jonah", fr: "Le livre de Jonas" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b100-a', isTruth: true, text: { en: "Jonah belongs to the Old Testament.", fr: "Jonas appartient à l’Ancien Testament." } },
      { id: 'b100-b', isTruth: true, text: { en: "Jonah has 4 chapters.", fr: "Jonas compte 4 chapitres." } },
      { id: 'b100-c', isTruth: true, text: { en: "Micah follows Jonah in the usual Protestant ordering of the Bible.", fr: "Michée suit Jonas dans l’ordre protestant habituel de la Bible." } },
      { id: 'b100-d', isTruth: false, text: { en: "Jonah is followed immediately by Obadiah in that ordering.", fr: "Jonas est suivi immédiatement de Abdias dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Jonah is followed by Micah. Jonah contains 4 chapters.", fr: "Dans l’ordre protestant habituel, Jonas est suivi de Michée. Jonas compte 4 chapitres." },
    scripture: { en: "Jonah", fr: "Jonas" },
    didYouKnow: { en: "Jonah is unusual among prophetic books because much of it tells the story of the prophet himself.", fr: "Jonas se distingue parmi les livres prophétiques parce qu’une grande partie du livre raconte l’histoire du prophète lui-même." }
  },
  {
    id: 'b101', levelNumber: 101, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Micah", fr: "Le livre de Michée" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b101-a', isTruth: true, text: { en: "Micah belongs to the Old Testament.", fr: "Michée appartient à l’Ancien Testament." } },
      { id: 'b101-b', isTruth: true, text: { en: "Micah has 7 chapters.", fr: "Michée compte 7 chapitres." } },
      { id: 'b101-c', isTruth: true, text: { en: "Nahum follows Micah in the usual Protestant ordering of the Bible.", fr: "Nahum suit Michée dans l’ordre protestant habituel de la Bible." } },
      { id: 'b101-d', isTruth: false, text: { en: "Micah is followed immediately by Jonah in that ordering.", fr: "Michée est suivi immédiatement de Jonas dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Micah is followed by Nahum. Micah contains 7 chapters.", fr: "Dans l’ordre protestant habituel, Michée est suivi de Nahum. Michée compte 7 chapitres." },
    scripture: { en: "Micah", fr: "Michée" },
    didYouKnow: { en: "Micah 5:2 names Bethlehem in a prophecy about a future ruler of Israel.", fr: "Michée 5:2 nomme Bethléhem dans une prophétie concernant un futur chef d’Israël." }
  },
  {
    id: 'b102', levelNumber: 102, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Nahum", fr: "Le livre de Nahum" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b102-a', isTruth: true, text: { en: "Nahum belongs to the Old Testament.", fr: "Nahum appartient à l’Ancien Testament." } },
      { id: 'b102-b', isTruth: true, text: { en: "Nahum has 3 chapters.", fr: "Nahum compte 3 chapitres." } },
      { id: 'b102-c', isTruth: true, text: { en: "Habakkuk follows Nahum in the usual Protestant ordering of the Bible.", fr: "Habacuc suit Nahum dans l’ordre protestant habituel de la Bible." } },
      { id: 'b102-d', isTruth: false, text: { en: "Nahum is followed immediately by Micah in that ordering.", fr: "Nahum est suivi immédiatement de Michée dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Nahum is followed by Habakkuk. Nahum contains 3 chapters.", fr: "Dans l’ordre protestant habituel, Nahum est suivi de Habacuc. Nahum compte 3 chapitres." },
    scripture: { en: "Nahum", fr: "Nahum" },
    didYouKnow: { en: "Nahum's prophecy focuses largely on the coming fall of Nineveh, capital of Assyria.", fr: "La prophétie de Nahum porte en grande partie sur la chute prochaine de Ninive, capitale de l’Assyrie." }
  },
  {
    id: 'b103', levelNumber: 103, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Habakkuk", fr: "Le livre de Habacuc" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b103-a', isTruth: true, text: { en: "Habakkuk belongs to the Old Testament.", fr: "Habacuc appartient à l’Ancien Testament." } },
      { id: 'b103-b', isTruth: true, text: { en: "Habakkuk has 3 chapters.", fr: "Habacuc compte 3 chapitres." } },
      { id: 'b103-c', isTruth: true, text: { en: "Zephaniah follows Habakkuk in the usual Protestant ordering of the Bible.", fr: "Sophonie suit Habacuc dans l’ordre protestant habituel de la Bible." } },
      { id: 'b103-d', isTruth: false, text: { en: "Habakkuk is followed immediately by Nahum in that ordering.", fr: "Habacuc est suivi immédiatement de Nahum dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Habakkuk is followed by Zephaniah. Habakkuk contains 3 chapters.", fr: "Dans l’ordre protestant habituel, Habacuc est suivi de Sophonie. Habacuc compte 3 chapitres." },
    scripture: { en: "Habakkuk", fr: "Habacuc" },
    didYouKnow: { en: "Habakkuk includes a dialogue in which the prophet questions God and learns to live by faith.", fr: "Habacuc contient un dialogue dans lequel le prophète interroge Dieu et apprend à vivre par la foi." }
  },
  {
    id: 'b104', levelNumber: 104, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Zephaniah", fr: "Le livre de Sophonie" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b104-a', isTruth: true, text: { en: "Zephaniah belongs to the Old Testament.", fr: "Sophonie appartient à l’Ancien Testament." } },
      { id: 'b104-b', isTruth: true, text: { en: "Zephaniah has 3 chapters.", fr: "Sophonie compte 3 chapitres." } },
      { id: 'b104-c', isTruth: true, text: { en: "Haggai follows Zephaniah in the usual Protestant ordering of the Bible.", fr: "Aggée suit Sophonie dans l’ordre protestant habituel de la Bible." } },
      { id: 'b104-d', isTruth: false, text: { en: "Zephaniah is followed immediately by Habakkuk in that ordering.", fr: "Sophonie est suivi immédiatement de Habacuc dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Zephaniah is followed by Haggai. Zephaniah contains 3 chapters.", fr: "Dans l’ordre protestant habituel, Sophonie est suivi de Aggée. Sophonie compte 3 chapitres." },
    scripture: { en: "Zephaniah", fr: "Sophonie" },
    didYouKnow: { en: "Zephaniah repeatedly speaks about the 'day of the LORD' and also ends with promises of restoration.", fr: "Sophonie parle à plusieurs reprises du « jour de l’Éternel » et se termine aussi par des promesses de restauration." }
  },
  {
    id: 'b105', levelNumber: 105, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Haggai", fr: "Le livre de Aggée" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b105-a', isTruth: true, text: { en: "Haggai belongs to the Old Testament.", fr: "Aggée appartient à l’Ancien Testament." } },
      { id: 'b105-b', isTruth: true, text: { en: "Haggai has 2 chapters.", fr: "Aggée compte 2 chapitres." } },
      { id: 'b105-c', isTruth: true, text: { en: "Zechariah follows Haggai in the usual Protestant ordering of the Bible.", fr: "Zacharie suit Aggée dans l’ordre protestant habituel de la Bible." } },
      { id: 'b105-d', isTruth: false, text: { en: "Haggai is followed immediately by Zephaniah in that ordering.", fr: "Aggée est suivi immédiatement de Sophonie dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Haggai is followed by Zechariah. Haggai contains 2 chapters.", fr: "Dans l’ordre protestant habituel, Aggée est suivi de Zacharie. Aggée compte 2 chapitres." },
    scripture: { en: "Haggai", fr: "Aggée" },
    didYouKnow: { en: "Haggai urged the returned exiles to resume rebuilding God's temple in Jerusalem.", fr: "Aggée exhorta les exilés revenus à reprendre la reconstruction du temple de Dieu à Jérusalem." }
  },
  {
    id: 'b106', levelNumber: 106, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Zechariah", fr: "Le livre de Zacharie" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b106-a', isTruth: true, text: { en: "Zechariah belongs to the Old Testament.", fr: "Zacharie appartient à l’Ancien Testament." } },
      { id: 'b106-b', isTruth: true, text: { en: "Zechariah has 14 chapters.", fr: "Zacharie compte 14 chapitres." } },
      { id: 'b106-c', isTruth: true, text: { en: "Malachi follows Zechariah in the usual Protestant ordering of the Bible.", fr: "Malachie suit Zacharie dans l’ordre protestant habituel de la Bible." } },
      { id: 'b106-d', isTruth: false, text: { en: "Zechariah is followed immediately by Haggai in that ordering.", fr: "Zacharie est suivi immédiatement de Aggée dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Zechariah is followed by Malachi. Zechariah contains 14 chapters.", fr: "Dans l’ordre protestant habituel, Zacharie est suivi de Malachie. Zacharie compte 14 chapitres." },
    scripture: { en: "Zechariah", fr: "Zacharie" },
    didYouKnow: { en: "Zechariah contains a series of vivid night visions, including horses, lampstands, and a flying scroll.", fr: "Zacharie contient une série de visions nocturnes saisissantes, notamment des chevaux, un chandelier et un rouleau volant." }
  },
  {
    id: 'b107', levelNumber: 107, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Malachi", fr: "Le livre de Malachie" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b107-a', isTruth: true, text: { en: "Malachi belongs to the Old Testament.", fr: "Malachie appartient à l’Ancien Testament." } },
      { id: 'b107-b', isTruth: true, text: { en: "Malachi has 4 chapters.", fr: "Malachie compte 4 chapitres." } },
      { id: 'b107-c', isTruth: true, text: { en: "Malachi is the last book of the Old Testament.", fr: "Malachie est le dernier livre de l’Ancien Testament." } },
      { id: 'b107-d', isTruth: false, text: { en: "Malachi is the first book of the Old Testament.", fr: "Malachie est le premier livre de l’Ancien Testament." } },
    ],
    explanation: { en: "Malachi closes the Old Testament in the usual Protestant ordering. Malachi contains 4 chapters.", fr: "Malachie termine l’Ancien Testament dans l’ordre protestant habituel. Malachie compte 4 chapitres." },
    scripture: { en: "Malachi", fr: "Malachie" },
    didYouKnow: { en: "Malachi is the final book in the usual Protestant ordering of the Old Testament.", fr: "Malachie est le dernier livre dans l’ordre protestant habituel de l’Ancien Testament." }
  },
  {
    id: 'b108', levelNumber: 108, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Matthew", fr: "Le livre de Matthieu" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b108-a', isTruth: true, text: { en: "Matthew belongs to the New Testament.", fr: "Matthieu appartient au Nouveau Testament." } },
      { id: 'b108-b', isTruth: true, text: { en: "Matthew has 28 chapters.", fr: "Matthieu compte 28 chapitres." } },
      { id: 'b108-c', isTruth: true, text: { en: "Mark follows Matthew in the usual Protestant ordering of the Bible.", fr: "Marc suit Matthieu dans l’ordre protestant habituel de la Bible." } },
      { id: 'b108-d', isTruth: false, text: { en: "Matthew is followed immediately by Malachi in that ordering.", fr: "Matthieu est suivi immédiatement de Malachie dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Matthew is followed by Mark. Matthew contains 28 chapters.", fr: "Dans l’ordre protestant habituel, Matthieu est suivi de Marc. Matthieu compte 28 chapitres." },
    scripture: { en: "Matthew", fr: "Matthieu" },
    didYouKnow: { en: "Matthew begins with a genealogy tracing Jesus' ancestry through David and Abraham.", fr: "Matthieu commence par une généalogie qui retrace l’ascendance de Jésus jusqu’à David et Abraham." }
  },
  {
    id: 'b109', levelNumber: 109, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Mark", fr: "Le livre de Marc" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b109-a', isTruth: true, text: { en: "Mark belongs to the New Testament.", fr: "Marc appartient au Nouveau Testament." } },
      { id: 'b109-b', isTruth: true, text: { en: "Mark has 16 chapters.", fr: "Marc compte 16 chapitres." } },
      { id: 'b109-c', isTruth: true, text: { en: "Luke follows Mark in the usual Protestant ordering of the Bible.", fr: "Luc suit Marc dans l’ordre protestant habituel de la Bible." } },
      { id: 'b109-d', isTruth: false, text: { en: "Mark is followed immediately by Matthew in that ordering.", fr: "Marc est suivi immédiatement de Matthieu dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Mark is followed by Luke. Mark contains 16 chapters.", fr: "Dans l’ordre protestant habituel, Marc est suivi de Luc. Marc compte 16 chapitres." },
    scripture: { en: "Mark", fr: "Marc" },
    didYouKnow: { en: "Mark is the shortest of the four Gospels by chapter count, with sixteen chapters.", fr: "Marc est le plus court des quatre Évangiles par le nombre de chapitres, avec seize chapitres." }
  },
  {
    id: 'b110', levelNumber: 110, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Luke", fr: "Le livre de Luc" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b110-a', isTruth: true, text: { en: "Luke belongs to the New Testament.", fr: "Luc appartient au Nouveau Testament." } },
      { id: 'b110-b', isTruth: true, text: { en: "Luke has 24 chapters.", fr: "Luc compte 24 chapitres." } },
      { id: 'b110-c', isTruth: true, text: { en: "John follows Luke in the usual Protestant ordering of the Bible.", fr: "Jean suit Luc dans l’ordre protestant habituel de la Bible." } },
      { id: 'b110-d', isTruth: false, text: { en: "Luke is followed immediately by Mark in that ordering.", fr: "Luc est suivi immédiatement de Marc dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Luke is followed by John. Luke contains 24 chapters.", fr: "Dans l’ordre protestant habituel, Luc est suivi de Jean. Luc compte 24 chapitres." },
    scripture: { en: "Luke", fr: "Luc" },
    didYouKnow: { en: "Luke and Acts are addressed to the same person, Theophilus, and form a two-part account.", fr: "Luc et les Actes sont adressés à la même personne, Théophile, et forment un récit en deux parties." }
  },
  {
    id: 'b111', levelNumber: 111, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of John", fr: "Le livre de Jean" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b111-a', isTruth: true, text: { en: "John belongs to the New Testament.", fr: "Jean appartient au Nouveau Testament." } },
      { id: 'b111-b', isTruth: true, text: { en: "John has 21 chapters.", fr: "Jean compte 21 chapitres." } },
      { id: 'b111-c', isTruth: true, text: { en: "Acts follows John in the usual Protestant ordering of the Bible.", fr: "Actes suit Jean dans l’ordre protestant habituel de la Bible." } },
      { id: 'b111-d', isTruth: false, text: { en: "John is followed immediately by Luke in that ordering.", fr: "Jean est suivi immédiatement de Luc dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, John is followed by Acts. John contains 21 chapters.", fr: "Dans l’ordre protestant habituel, Jean est suivi de Actes. Jean compte 21 chapitres." },
    scripture: { en: "John", fr: "Jean" },
    didYouKnow: { en: "John organizes many of Jesus' miracles as 'signs' pointing to who He is.", fr: "Jean présente plusieurs miracles de Jésus comme des « signes » révélant qui il est." }
  },
  {
    id: 'b112', levelNumber: 112, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Acts", fr: "Le livre de Actes" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b112-a', isTruth: true, text: { en: "Acts belongs to the New Testament.", fr: "Actes appartient au Nouveau Testament." } },
      { id: 'b112-b', isTruth: true, text: { en: "Acts has 28 chapters.", fr: "Actes compte 28 chapitres." } },
      { id: 'b112-c', isTruth: true, text: { en: "Romans follows Acts in the usual Protestant ordering of the Bible.", fr: "Romains suit Actes dans l’ordre protestant habituel de la Bible." } },
      { id: 'b112-d', isTruth: false, text: { en: "Acts is followed immediately by John in that ordering.", fr: "Actes est suivi immédiatement de Jean dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Acts is followed by Romans. Acts contains 28 chapters.", fr: "Dans l’ordre protestant habituel, Actes est suivi de Romains. Actes compte 28 chapitres." },
    scripture: { en: "Acts", fr: "Actes" },
    didYouKnow: { en: "Acts begins with Jesus' ascension and follows the spread of the gospel from Jerusalem toward Rome.", fr: "Les Actes commencent par l’ascension de Jésus et suivent la propagation de l’Évangile de Jérusalem jusqu’en direction de Rome." }
  },
  {
    id: 'b113', levelNumber: 113, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Romans", fr: "Le livre de Romains" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b113-a', isTruth: true, text: { en: "Romans belongs to the New Testament.", fr: "Romains appartient au Nouveau Testament." } },
      { id: 'b113-b', isTruth: true, text: { en: "Romans has 16 chapters.", fr: "Romains compte 16 chapitres." } },
      { id: 'b113-c', isTruth: true, text: { en: "1 Corinthians follows Romans in the usual Protestant ordering of the Bible.", fr: "1 Corinthiens suit Romains dans l’ordre protestant habituel de la Bible." } },
      { id: 'b113-d', isTruth: false, text: { en: "Romans is followed immediately by Acts in that ordering.", fr: "Romains est suivi immédiatement de Actes dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Romans is followed by 1 Corinthians. Romans contains 16 chapters.", fr: "Dans l’ordre protestant habituel, Romains est suivi de 1 Corinthiens. Romains compte 16 chapitres." },
    scripture: { en: "Romans", fr: "Romains" },
    didYouKnow: { en: "Romans was written to believers in Rome before Paul had personally visited their church.", fr: "Romains fut écrit aux croyants de Rome avant que Paul n’ait personnellement visité leur Église." }
  },
  {
    id: 'b114', levelNumber: 114, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "1 Corinthians", fr: "1 Corinthiens" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b114-a', isTruth: true, text: { en: "1 Corinthians belongs to the New Testament.", fr: "1 Corinthiens appartient au Nouveau Testament." } },
      { id: 'b114-b', isTruth: true, text: { en: "1 Corinthians has 16 chapters.", fr: "1 Corinthiens compte 16 chapitres." } },
      { id: 'b114-c', isTruth: true, text: { en: "2 Corinthians follows 1 Corinthians in the usual Protestant ordering of the Bible.", fr: "2 Corinthiens suit 1 Corinthiens dans l’ordre protestant habituel de la Bible." } },
      { id: 'b114-d', isTruth: false, text: { en: "1 Corinthians is followed immediately by Romans in that ordering.", fr: "1 Corinthiens est suivi immédiatement de Romains dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, 1 Corinthians is followed by 2 Corinthians. 1 Corinthians contains 16 chapters.", fr: "Dans l’ordre protestant habituel, 1 Corinthiens est suivi de 2 Corinthiens. 1 Corinthiens compte 16 chapitres." },
    scripture: { en: "1 Corinthians", fr: "1 Corinthiens" },
    didYouKnow: { en: "First Corinthians contains Paul's famous chapter on love in chapter 13.", fr: "1 Corinthiens contient le célèbre chapitre de Paul sur l’amour au chapitre 13." }
  },
  {
    id: 'b115', levelNumber: 115, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "2 Corinthians", fr: "2 Corinthiens" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b115-a', isTruth: true, text: { en: "2 Corinthians belongs to the New Testament.", fr: "2 Corinthiens appartient au Nouveau Testament." } },
      { id: 'b115-b', isTruth: true, text: { en: "2 Corinthians has 13 chapters.", fr: "2 Corinthiens compte 13 chapitres." } },
      { id: 'b115-c', isTruth: true, text: { en: "Galatians follows 2 Corinthians in the usual Protestant ordering of the Bible.", fr: "Galates suit 2 Corinthiens dans l’ordre protestant habituel de la Bible." } },
      { id: 'b115-d', isTruth: false, text: { en: "2 Corinthians is followed immediately by 1 Corinthians in that ordering.", fr: "2 Corinthiens est suivi immédiatement de 1 Corinthiens dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, 2 Corinthians is followed by Galatians. 2 Corinthians contains 13 chapters.", fr: "Dans l’ordre protestant habituel, 2 Corinthiens est suivi de Galates. 2 Corinthiens compte 13 chapitres." },
    scripture: { en: "2 Corinthians", fr: "2 Corinthiens" },
    didYouKnow: { en: "Second Corinthians includes Paul's teaching that God's power is made perfect in weakness.", fr: "2 Corinthiens contient l’enseignement de Paul selon lequel la puissance de Dieu s’accomplit dans la faiblesse." }
  },
  {
    id: 'b116', levelNumber: 116, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Galatians", fr: "Le livre de Galates" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b116-a', isTruth: true, text: { en: "Galatians belongs to the New Testament.", fr: "Galates appartient au Nouveau Testament." } },
      { id: 'b116-b', isTruth: true, text: { en: "Galatians has 6 chapters.", fr: "Galates compte 6 chapitres." } },
      { id: 'b116-c', isTruth: true, text: { en: "Ephesians follows Galatians in the usual Protestant ordering of the Bible.", fr: "Éphésiens suit Galates dans l’ordre protestant habituel de la Bible." } },
      { id: 'b116-d', isTruth: false, text: { en: "Galatians is followed immediately by 2 Corinthians in that ordering.", fr: "Galates est suivi immédiatement de 2 Corinthiens dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Galatians is followed by Ephesians. Galatians contains 6 chapters.", fr: "Dans l’ordre protestant habituel, Galates est suivi de Éphésiens. Galates compte 6 chapitres." },
    scripture: { en: "Galatians", fr: "Galates" },
    didYouKnow: { en: "Galatians recounts Paul's confrontation with Peter at Antioch over conduct related to Gentile believers.", fr: "Galates raconte la confrontation de Paul avec Pierre à Antioche au sujet de son comportement envers les croyants non juifs." }
  },
  {
    id: 'b117', levelNumber: 117, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Ephesians", fr: "Le livre de Éphésiens" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b117-a', isTruth: true, text: { en: "Ephesians belongs to the New Testament.", fr: "Éphésiens appartient au Nouveau Testament." } },
      { id: 'b117-b', isTruth: true, text: { en: "Ephesians has 6 chapters.", fr: "Éphésiens compte 6 chapitres." } },
      { id: 'b117-c', isTruth: true, text: { en: "Philippians follows Ephesians in the usual Protestant ordering of the Bible.", fr: "Philippiens suit Éphésiens dans l’ordre protestant habituel de la Bible." } },
      { id: 'b117-d', isTruth: false, text: { en: "Ephesians is followed immediately by Galatians in that ordering.", fr: "Éphésiens est suivi immédiatement de Galates dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Ephesians is followed by Philippians. Ephesians contains 6 chapters.", fr: "Dans l’ordre protestant habituel, Éphésiens est suivi de Philippiens. Éphésiens compte 6 chapitres." },
    scripture: { en: "Ephesians", fr: "Éphésiens" },
    didYouKnow: { en: "Ephesians 6 contains the well-known description of the 'armor of God.'", fr: "Éphésiens 6 contient la célèbre description de « l’armure de Dieu »." }
  },
  {
    id: 'b118', levelNumber: 118, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Philippians", fr: "Le livre de Philippiens" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b118-a', isTruth: true, text: { en: "Philippians belongs to the New Testament.", fr: "Philippiens appartient au Nouveau Testament." } },
      { id: 'b118-b', isTruth: true, text: { en: "Philippians has 4 chapters.", fr: "Philippiens compte 4 chapitres." } },
      { id: 'b118-c', isTruth: true, text: { en: "Colossians follows Philippians in the usual Protestant ordering of the Bible.", fr: "Colossiens suit Philippiens dans l’ordre protestant habituel de la Bible." } },
      { id: 'b118-d', isTruth: false, text: { en: "Philippians is followed immediately by Ephesians in that ordering.", fr: "Philippiens est suivi immédiatement de Éphésiens dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Philippians is followed by Colossians. Philippians contains 4 chapters.", fr: "Dans l’ordre protestant habituel, Philippiens est suivi de Colossiens. Philippiens compte 4 chapitres." },
    scripture: { en: "Philippians", fr: "Philippiens" },
    didYouKnow: { en: "Paul wrote Philippians while imprisoned, yet the letter repeatedly emphasizes joy and rejoicing.", fr: "Paul écrivit Philippiens alors qu’il était emprisonné, mais la lettre insiste à plusieurs reprises sur la joie." }
  },
  {
    id: 'b119', levelNumber: 119, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Colossians", fr: "Le livre de Colossiens" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b119-a', isTruth: true, text: { en: "Colossians belongs to the New Testament.", fr: "Colossiens appartient au Nouveau Testament." } },
      { id: 'b119-b', isTruth: true, text: { en: "Colossians has 4 chapters.", fr: "Colossiens compte 4 chapitres." } },
      { id: 'b119-c', isTruth: true, text: { en: "1 Thessalonians follows Colossians in the usual Protestant ordering of the Bible.", fr: "1 Thessaloniciens suit Colossiens dans l’ordre protestant habituel de la Bible." } },
      { id: 'b119-d', isTruth: false, text: { en: "Colossians is followed immediately by Philippians in that ordering.", fr: "Colossiens est suivi immédiatement de Philippiens dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Colossians is followed by 1 Thessalonians. Colossians contains 4 chapters.", fr: "Dans l’ordre protestant habituel, Colossiens est suivi de 1 Thessaloniciens. Colossiens compte 4 chapitres." },
    scripture: { en: "Colossians", fr: "Colossiens" },
    didYouKnow: { en: "Colossians strongly emphasizes the supremacy of Christ over creation and every spiritual power.", fr: "Colossiens souligne fortement la suprématie de Christ sur la création et toute puissance spirituelle." }
  },
  {
    id: 'b120', levelNumber: 120, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "1 Thessalonians", fr: "1 Thessaloniciens" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b120-a', isTruth: true, text: { en: "1 Thessalonians belongs to the New Testament.", fr: "1 Thessaloniciens appartient au Nouveau Testament." } },
      { id: 'b120-b', isTruth: true, text: { en: "1 Thessalonians has 5 chapters.", fr: "1 Thessaloniciens compte 5 chapitres." } },
      { id: 'b120-c', isTruth: true, text: { en: "2 Thessalonians follows 1 Thessalonians in the usual Protestant ordering of the Bible.", fr: "2 Thessaloniciens suit 1 Thessaloniciens dans l’ordre protestant habituel de la Bible." } },
      { id: 'b120-d', isTruth: false, text: { en: "1 Thessalonians is followed immediately by Colossians in that ordering.", fr: "1 Thessaloniciens est suivi immédiatement de Colossiens dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, 1 Thessalonians is followed by 2 Thessalonians. 1 Thessalonians contains 5 chapters.", fr: "Dans l’ordre protestant habituel, 1 Thessaloniciens est suivi de 2 Thessaloniciens. 1 Thessaloniciens compte 5 chapitres." },
    scripture: { en: "1 Thessalonians", fr: "1 Thessaloniciens" },
    didYouKnow: { en: "First Thessalonians contains an extended passage about believers who have died and the Lord's return.", fr: "1 Thessaloniciens contient un passage développé sur les croyants décédés et le retour du Seigneur." }
  },
  {
    id: 'b121', levelNumber: 121, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "2 Thessalonians", fr: "2 Thessaloniciens" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b121-a', isTruth: true, text: { en: "2 Thessalonians belongs to the New Testament.", fr: "2 Thessaloniciens appartient au Nouveau Testament." } },
      { id: 'b121-b', isTruth: true, text: { en: "2 Thessalonians has 3 chapters.", fr: "2 Thessaloniciens compte 3 chapitres." } },
      { id: 'b121-c', isTruth: true, text: { en: "1 Timothy follows 2 Thessalonians in the usual Protestant ordering of the Bible.", fr: "1 Timothée suit 2 Thessaloniciens dans l’ordre protestant habituel de la Bible." } },
      { id: 'b121-d', isTruth: false, text: { en: "2 Thessalonians is followed immediately by 1 Thessalonians in that ordering.", fr: "2 Thessaloniciens est suivi immédiatement de 1 Thessaloniciens dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, 2 Thessalonians is followed by 1 Timothy. 2 Thessalonians contains 3 chapters.", fr: "Dans l’ordre protestant habituel, 2 Thessaloniciens est suivi de 1 Timothée. 2 Thessaloniciens compte 3 chapitres." },
    scripture: { en: "2 Thessalonians", fr: "2 Thessaloniciens" },
    didYouKnow: { en: "Second Thessalonians addresses confusion about the day of the Lord and encourages steadfastness.", fr: "2 Thessaloniciens traite de la confusion concernant le jour du Seigneur et encourage la persévérance." }
  },
  {
    id: 'b122', levelNumber: 122, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "1 Timothy", fr: "1 Timothée" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b122-a', isTruth: true, text: { en: "1 Timothy belongs to the New Testament.", fr: "1 Timothée appartient au Nouveau Testament." } },
      { id: 'b122-b', isTruth: true, text: { en: "1 Timothy has 6 chapters.", fr: "1 Timothée compte 6 chapitres." } },
      { id: 'b122-c', isTruth: true, text: { en: "2 Timothy follows 1 Timothy in the usual Protestant ordering of the Bible.", fr: "2 Timothée suit 1 Timothée dans l’ordre protestant habituel de la Bible." } },
      { id: 'b122-d', isTruth: false, text: { en: "1 Timothy is followed immediately by 2 Thessalonians in that ordering.", fr: "1 Timothée est suivi immédiatement de 2 Thessaloniciens dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, 1 Timothy is followed by 2 Timothy. 1 Timothy contains 6 chapters.", fr: "Dans l’ordre protestant habituel, 1 Timothée est suivi de 2 Timothée. 1 Timothée compte 6 chapitres." },
    scripture: { en: "1 Timothy", fr: "1 Timothée" },
    didYouKnow: { en: "First Timothy contains instructions about church leadership, worship, and caring for different groups in the congregation.", fr: "1 Timothée contient des instructions sur les responsables de l’Église, le culte et l’attention portée aux différents groupes de l’assemblée." }
  },
  {
    id: 'b123', levelNumber: 123, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "2 Timothy", fr: "2 Timothée" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b123-a', isTruth: true, text: { en: "2 Timothy belongs to the New Testament.", fr: "2 Timothée appartient au Nouveau Testament." } },
      { id: 'b123-b', isTruth: true, text: { en: "2 Timothy has 4 chapters.", fr: "2 Timothée compte 4 chapitres." } },
      { id: 'b123-c', isTruth: true, text: { en: "Titus follows 2 Timothy in the usual Protestant ordering of the Bible.", fr: "Tite suit 2 Timothée dans l’ordre protestant habituel de la Bible." } },
      { id: 'b123-d', isTruth: false, text: { en: "2 Timothy is followed immediately by 1 Timothy in that ordering.", fr: "2 Timothée est suivi immédiatement de 1 Timothée dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, 2 Timothy is followed by Titus. 2 Timothy contains 4 chapters.", fr: "Dans l’ordre protestant habituel, 2 Timothée est suivi de Tite. 2 Timothée compte 4 chapitres." },
    scripture: { en: "2 Timothy", fr: "2 Timothée" },
    didYouKnow: { en: "Second Timothy includes Paul's statement that all Scripture is God-breathed and useful for teaching.", fr: "2 Timothée contient l’affirmation de Paul selon laquelle toute Écriture est inspirée de Dieu et utile pour enseigner." }
  },
  {
    id: 'b124', levelNumber: 124, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Titus", fr: "Le livre de Tite" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b124-a', isTruth: true, text: { en: "Titus belongs to the New Testament.", fr: "Tite appartient au Nouveau Testament." } },
      { id: 'b124-b', isTruth: true, text: { en: "Titus has 3 chapters.", fr: "Tite compte 3 chapitres." } },
      { id: 'b124-c', isTruth: true, text: { en: "Philemon follows Titus in the usual Protestant ordering of the Bible.", fr: "Philémon suit Tite dans l’ordre protestant habituel de la Bible." } },
      { id: 'b124-d', isTruth: false, text: { en: "Titus is followed immediately by 2 Timothy in that ordering.", fr: "Tite est suivi immédiatement de 2 Timothée dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Titus is followed by Philemon. Titus contains 3 chapters.", fr: "Dans l’ordre protestant habituel, Tite est suivi de Philémon. Tite compte 3 chapitres." },
    scripture: { en: "Titus", fr: "Tite" },
    didYouKnow: { en: "Titus was left in Crete to help put churches in order and appoint elders.", fr: "Tite fut laissé en Crète pour aider à mettre les Églises en ordre et établir des anciens." }
  },
  {
    id: 'b125', levelNumber: 125, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Philemon", fr: "Le livre de Philémon" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b125-a', isTruth: true, text: { en: "Philemon belongs to the New Testament.", fr: "Philémon appartient au Nouveau Testament." } },
      { id: 'b125-b', isTruth: true, text: { en: "Philemon has 1 chapter.", fr: "Philémon compte 1 chapitre." } },
      { id: 'b125-c', isTruth: true, text: { en: "Hebrews follows Philemon in the usual Protestant ordering of the Bible.", fr: "Hébreux suit Philémon dans l’ordre protestant habituel de la Bible." } },
      { id: 'b125-d', isTruth: false, text: { en: "Philemon is followed immediately by Titus in that ordering.", fr: "Philémon est suivi immédiatement de Tite dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Philemon is followed by Hebrews. Philemon contains 1 chapter.", fr: "Dans l’ordre protestant habituel, Philémon est suivi de Hébreux. Philémon compte 1 chapitre." },
    scripture: { en: "Philemon", fr: "Philémon" },
    didYouKnow: { en: "Philemon is a short personal letter in which Paul appeals on behalf of Onesimus.", fr: "Philémon est une courte lettre personnelle dans laquelle Paul intervient en faveur d’Onésime." }
  },
  {
    id: 'b126', levelNumber: 126, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Hebrews", fr: "Le livre de Hébreux" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b126-a', isTruth: true, text: { en: "Hebrews belongs to the New Testament.", fr: "Hébreux appartient au Nouveau Testament." } },
      { id: 'b126-b', isTruth: true, text: { en: "Hebrews has 13 chapters.", fr: "Hébreux compte 13 chapitres." } },
      { id: 'b126-c', isTruth: true, text: { en: "James follows Hebrews in the usual Protestant ordering of the Bible.", fr: "Jacques suit Hébreux dans l’ordre protestant habituel de la Bible." } },
      { id: 'b126-d', isTruth: false, text: { en: "Hebrews is followed immediately by Philemon in that ordering.", fr: "Hébreux est suivi immédiatement de Philémon dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Hebrews is followed by James. Hebrews contains 13 chapters.", fr: "Dans l’ordre protestant habituel, Hébreux est suivi de Jacques. Hébreux compte 13 chapitres." },
    scripture: { en: "Hebrews", fr: "Hébreux" },
    didYouKnow: { en: "Hebrews repeatedly presents Jesus as the great High Priest and compares His priesthood with the Old Testament system.", fr: "Hébreux présente à plusieurs reprises Jésus comme le grand Souverain Sacrificateur et compare son sacerdoce au système de l’Ancien Testament." }
  },
  {
    id: 'b127', levelNumber: 127, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of James", fr: "Le livre de Jacques" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b127-a', isTruth: true, text: { en: "James belongs to the New Testament.", fr: "Jacques appartient au Nouveau Testament." } },
      { id: 'b127-b', isTruth: true, text: { en: "James has 5 chapters.", fr: "Jacques compte 5 chapitres." } },
      { id: 'b127-c', isTruth: true, text: { en: "1 Peter follows James in the usual Protestant ordering of the Bible.", fr: "1 Pierre suit Jacques dans l’ordre protestant habituel de la Bible." } },
      { id: 'b127-d', isTruth: false, text: { en: "James is followed immediately by Hebrews in that ordering.", fr: "Jacques est suivi immédiatement de Hébreux dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, James is followed by 1 Peter. James contains 5 chapters.", fr: "Dans l’ordre protestant habituel, Jacques est suivi de 1 Pierre. Jacques compte 5 chapitres." },
    scripture: { en: "James", fr: "Jacques" },
    didYouKnow: { en: "James uses practical examples such as controlling the tongue, caring for the needy, and putting faith into action.", fr: "Jacques utilise des exemples pratiques comme maîtriser la langue, prendre soin des nécessiteux et mettre la foi en action." }
  },
  {
    id: 'b128', levelNumber: 128, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "1 Peter", fr: "1 Pierre" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b128-a', isTruth: true, text: { en: "1 Peter belongs to the New Testament.", fr: "1 Pierre appartient au Nouveau Testament." } },
      { id: 'b128-b', isTruth: true, text: { en: "1 Peter has 5 chapters.", fr: "1 Pierre compte 5 chapitres." } },
      { id: 'b128-c', isTruth: true, text: { en: "2 Peter follows 1 Peter in the usual Protestant ordering of the Bible.", fr: "2 Pierre suit 1 Pierre dans l’ordre protestant habituel de la Bible." } },
      { id: 'b128-d', isTruth: false, text: { en: "1 Peter is followed immediately by James in that ordering.", fr: "1 Pierre est suivi immédiatement de Jacques dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, 1 Peter is followed by 2 Peter. 1 Peter contains 5 chapters.", fr: "Dans l’ordre protestant habituel, 1 Pierre est suivi de 2 Pierre. 1 Pierre compte 5 chapitres." },
    scripture: { en: "1 Peter", fr: "1 Pierre" },
    didYouKnow: { en: "First Peter describes believers as 'living stones' being built into a spiritual house.", fr: "1 Pierre décrit les croyants comme des « pierres vivantes » édifiées pour former une maison spirituelle." }
  },
  {
    id: 'b129', levelNumber: 129, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "2 Peter", fr: "2 Pierre" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b129-a', isTruth: true, text: { en: "2 Peter belongs to the New Testament.", fr: "2 Pierre appartient au Nouveau Testament." } },
      { id: 'b129-b', isTruth: true, text: { en: "2 Peter has 3 chapters.", fr: "2 Pierre compte 3 chapitres." } },
      { id: 'b129-c', isTruth: true, text: { en: "1 John follows 2 Peter in the usual Protestant ordering of the Bible.", fr: "1 Jean suit 2 Pierre dans l’ordre protestant habituel de la Bible." } },
      { id: 'b129-d', isTruth: false, text: { en: "2 Peter is followed immediately by 1 Peter in that ordering.", fr: "2 Pierre est suivi immédiatement de 1 Pierre dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, 2 Peter is followed by 1 John. 2 Peter contains 3 chapters.", fr: "Dans l’ordre protestant habituel, 2 Pierre est suivi de 1 Jean. 2 Pierre compte 3 chapitres." },
    scripture: { en: "2 Peter", fr: "2 Pierre" },
    didYouKnow: { en: "Second Peter ends by encouraging believers to grow in the grace and knowledge of Jesus Christ.", fr: "2 Pierre se termine en encourageant les croyants à croître dans la grâce et la connaissance de Jésus-Christ." }
  },
  {
    id: 'b130', levelNumber: 130, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "1 John", fr: "1 Jean" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b130-a', isTruth: true, text: { en: "1 John belongs to the New Testament.", fr: "1 Jean appartient au Nouveau Testament." } },
      { id: 'b130-b', isTruth: true, text: { en: "1 John has 5 chapters.", fr: "1 Jean compte 5 chapitres." } },
      { id: 'b130-c', isTruth: true, text: { en: "2 John follows 1 John in the usual Protestant ordering of the Bible.", fr: "2 Jean suit 1 Jean dans l’ordre protestant habituel de la Bible." } },
      { id: 'b130-d', isTruth: false, text: { en: "1 John is followed immediately by 2 Peter in that ordering.", fr: "1 Jean est suivi immédiatement de 2 Pierre dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, 1 John is followed by 2 John. 1 John contains 5 chapters.", fr: "Dans l’ordre protestant habituel, 1 Jean est suivi de 2 Jean. 1 Jean compte 5 chapitres." },
    scripture: { en: "1 John", fr: "1 Jean" },
    didYouKnow: { en: "First John repeatedly connects love for God with love for fellow believers.", fr: "1 Jean relie à plusieurs reprises l’amour pour Dieu à l’amour envers les autres croyants." }
  },
  {
    id: 'b131', levelNumber: 131, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "2 John", fr: "2 Jean" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b131-a', isTruth: true, text: { en: "2 John belongs to the New Testament.", fr: "2 Jean appartient au Nouveau Testament." } },
      { id: 'b131-b', isTruth: true, text: { en: "2 John has 1 chapter.", fr: "2 Jean compte 1 chapitre." } },
      { id: 'b131-c', isTruth: true, text: { en: "3 John follows 2 John in the usual Protestant ordering of the Bible.", fr: "3 Jean suit 2 Jean dans l’ordre protestant habituel de la Bible." } },
      { id: 'b131-d', isTruth: false, text: { en: "2 John is followed immediately by 1 John in that ordering.", fr: "2 Jean est suivi immédiatement de 1 Jean dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, 2 John is followed by 3 John. 2 John contains 1 chapter.", fr: "Dans l’ordre protestant habituel, 2 Jean est suivi de 3 Jean. 2 Jean compte 1 chapitre." },
    scripture: { en: "2 John", fr: "2 Jean" },
    didYouKnow: { en: "Second John is only thirteen verses long and warns against supporting teachers who deny the truth about Christ.", fr: "2 Jean ne compte que treize versets et met en garde contre le soutien aux enseignants qui nient la vérité concernant Christ." }
  },
  {
    id: 'b132', levelNumber: 132, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "3 John", fr: "3 Jean" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b132-a', isTruth: true, text: { en: "3 John belongs to the New Testament.", fr: "3 Jean appartient au Nouveau Testament." } },
      { id: 'b132-b', isTruth: true, text: { en: "3 John has 1 chapter.", fr: "3 Jean compte 1 chapitre." } },
      { id: 'b132-c', isTruth: true, text: { en: "Jude follows 3 John in the usual Protestant ordering of the Bible.", fr: "Jude suit 3 Jean dans l’ordre protestant habituel de la Bible." } },
      { id: 'b132-d', isTruth: false, text: { en: "3 John is followed immediately by 2 John in that ordering.", fr: "3 Jean est suivi immédiatement de 2 Jean dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, 3 John is followed by Jude. 3 John contains 1 chapter.", fr: "Dans l’ordre protestant habituel, 3 Jean est suivi de Jude. 3 Jean compte 1 chapitre." },
    scripture: { en: "3 John", fr: "3 Jean" },
    didYouKnow: { en: "Third John mentions Gaius, Diotrephes, and Demetrius by name.", fr: "3 Jean mentionne nommément Gaïus, Diotrèphe et Démétrius." }
  },
  {
    id: 'b133', levelNumber: 133, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Jude", fr: "Le livre de Jude" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b133-a', isTruth: true, text: { en: "Jude belongs to the New Testament.", fr: "Jude appartient au Nouveau Testament." } },
      { id: 'b133-b', isTruth: true, text: { en: "Jude has 1 chapter.", fr: "Jude compte 1 chapitre." } },
      { id: 'b133-c', isTruth: true, text: { en: "Revelation follows Jude in the usual Protestant ordering of the Bible.", fr: "Apocalypse suit Jude dans l’ordre protestant habituel de la Bible." } },
      { id: 'b133-d', isTruth: false, text: { en: "Jude is followed immediately by 3 John in that ordering.", fr: "Jude est suivi immédiatement de 3 Jean dans cet ordre." } },
    ],
    explanation: { en: "In the usual Protestant ordering, Jude is followed by Revelation. Jude contains 1 chapter.", fr: "Dans l’ordre protestant habituel, Jude est suivi de Apocalypse. Jude compte 1 chapitre." },
    scripture: { en: "Jude", fr: "Jude" },
    didYouKnow: { en: "Jude refers to Michael the archangel in its warning against arrogant false teachers.", fr: "Jude mentionne Michel l’archange dans sa mise en garde contre des faux enseignants arrogants." }
  },
  {
    id: 'b134', levelNumber: 134, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Book of Revelation", fr: "Le livre de l'Apocalypse" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b134-a', isTruth: true, text: { en: "Revelation belongs to the New Testament.", fr: "Apocalypse appartient au Nouveau Testament." } },
      { id: 'b134-b', isTruth: true, text: { en: "Revelation has 22 chapters.", fr: "Apocalypse compte 22 chapitres." } },
      { id: 'b134-c', isTruth: true, text: { en: "Revelation is the last book of the New Testament.", fr: "Apocalypse est le dernier livre du Nouveau Testament." } },
      { id: 'b134-d', isTruth: false, text: { en: "Revelation is the first book of the New Testament.", fr: "Apocalypse est le premier livre du Nouveau Testament." } },
    ],
    explanation: { en: "Revelation closes the New Testament in the usual Protestant ordering. Revelation contains 22 chapters.", fr: "Apocalypse termine le Nouveau Testament dans l’ordre protestant habituel. Apocalypse compte 22 chapitres." },
    scripture: { en: "Revelation", fr: "Apocalypse" },
    didYouKnow: { en: "Revelation was addressed to seven churches in the Roman province of Asia.", fr: "L’Apocalypse fut adressée à sept Églises de la province romaine d’Asie." }
  },
  {
    id: 'b135', levelNumber: 135, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Hagar and Ishmael", fr: "Agar et Ismaël" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b135-a', isTruth: true, text: { en: "Hagar was Sarah’s Egyptian servant.", fr: "Agar était la servante égyptienne de Sara." } },
      { id: 'b135-b', isTruth: true, text: { en: "An angel of the LORD found Hagar near a spring in the wilderness.", fr: "Un ange de l’Éternel trouva Agar près d’une source dans le désert." } },
      { id: 'b135-c', isTruth: true, text: { en: "Ishmael was Abraham’s son.", fr: "Ismaël était le fils d’Abraham." } },
      { id: 'b135-d', isTruth: false, text: { en: "Hagar was Isaac’s mother.", fr: "Agar était la mère d’Isaac." } },
    ],
    explanation: { en: "Sarah, not Hagar, was Isaac’s mother. Hagar was the mother of Ishmael. (Genesis 16; 21).", fr: "Sara, et non Agar, était la mère d’Isaac. Agar était la mère d’Ismaël. (Genèse 16 ; 21)." },
    scripture: { en: "Genesis 16; 21", fr: "Genèse 16 ; 21" },
    didYouKnow: { en: "The name Ishmael is connected with God hearing Hagar's distress.", fr: "Le nom Ismaël est lié au fait que Dieu entendit la détresse d’Agar." }
  },
  {
    id: 'b136', levelNumber: 136, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Jacob Wrestles at Peniel", fr: "Jacob lutte à Peniel" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b136-a', isTruth: true, text: { en: "Jacob wrestled with a mysterious man through the night.", fr: "Jacob lutta toute la nuit avec un homme mystérieux." } },
      { id: 'b136-b', isTruth: true, text: { en: "Jacob received the name Israel.", fr: "Jacob reçut le nom d’Israël." } },
      { id: 'b136-c', isTruth: true, text: { en: "Jacob’s hip was injured during the encounter.", fr: "La hanche de Jacob fut blessée pendant cette rencontre." } },
      { id: 'b136-d', isTruth: false, text: { en: "Jacob received the name Moses.", fr: "Jacob reçut le nom de Moïse." } },
    ],
    explanation: { en: "Jacob was given the name Israel, not Moses. (Genesis 32:22–32).", fr: "Jacob reçut le nom d’Israël, et non celui de Moïse. (Genesis 32:22–32)." },
    scripture: { en: "Genesis 32:22–32", fr: "Genesis 32:22–32" },
    didYouKnow: { en: "After Jacob wrestled at Peniel, he was given the name Israel.", fr: "Après avoir lutté à Peniel, Jacob reçut le nom d’Israël." }
  },
  {
    id: 'b137', levelNumber: 137, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Joseph Forgives His Brothers", fr: "Joseph pardonne à ses frères" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b137-a', isTruth: true, text: { en: "Joseph revealed his identity to his brothers in Egypt.", fr: "Joseph révéla son identité à ses frères en Égypte." } },
      { id: 'b137-b', isTruth: true, text: { en: "Joseph wept when he made himself known.", fr: "Joseph pleura lorsqu’il se fit connaître." } },
      { id: 'b137-c', isTruth: true, text: { en: "Joseph told his brothers that God had sent him ahead to preserve life.", fr: "Joseph dit à ses frères que Dieu l’avait envoyé devant eux pour préserver la vie." } },
      { id: 'b137-d', isTruth: false, text: { en: "Joseph ordered all his brothers imprisoned for life.", fr: "Joseph ordonna que tous ses frères soient emprisonnés à vie." } },
    ],
    explanation: { en: "Joseph forgave his brothers and arranged for his family to come to Egypt. (Genesis 45).", fr: "Joseph pardonna à ses frères et organisa la venue de sa famille en Égypte. (Genesis 45)." },
    scripture: { en: "Genesis 45", fr: "Genesis 45" },
    didYouKnow: { en: "Joseph told his brothers that although they intended evil against him, God intended it for good.", fr: "Joseph dit à ses frères que, même s’ils avaient projeté le mal contre lui, Dieu l’avait changé en bien." }
  },
  {
    id: 'b138', levelNumber: 138, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Miriam and the Song of the Sea", fr: "Myriam et le cantique de la mer" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b138-a', isTruth: true, text: { en: "Miriam is called a prophetess.", fr: "Myriam est appelée prophétesse." } },
      { id: 'b138-b', isTruth: true, text: { en: "Miriam took a tambourine after the crossing of the sea.", fr: "Myriam prit un tambourin après la traversée de la mer." } },
      { id: 'b138-c', isTruth: true, text: { en: "Women followed Miriam with tambourines and dancing.", fr: "Des femmes suivirent Myriam avec des tambourins et des danses." } },
      { id: 'b138-d', isTruth: false, text: { en: "Miriam was the daughter of Pharaoh.", fr: "Myriam était la fille de Pharaon." } },
    ],
    explanation: { en: "Miriam belonged to Moses’ family; she was not Pharaoh’s daughter. (Exodus 15:20–21).", fr: "Myriam appartenait à la famille de Moïse; elle n’était pas la fille de Pharaon. (Exodus 15:20–21)." },
    scripture: { en: "Exodus 15:20–21", fr: "Exodus 15:20–21" },
    didYouKnow: { en: "Miriam is called a prophetess when she leads the women with tambourines after the Red Sea crossing.", fr: "Miriam est appelée prophétesse lorsqu’elle conduit les femmes avec des tambourins après la traversée de la mer Rouge." }
  },
  {
    id: 'b139', levelNumber: 139, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Twelve Spies", fr: "Les douze espions" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b139-a', isTruth: true, text: { en: "Moses sent twelve men to explore Canaan.", fr: "Moïse envoya douze hommes explorer Canaan." } },
      { id: 'b139-b', isTruth: true, text: { en: "Joshua and Caleb trusted that God could give Israel the land.", fr: "Josué et Caleb avaient confiance que Dieu pouvait donner le pays à Israël." } },
      { id: 'b139-c', isTruth: true, text: { en: "Ten spies gave a discouraging report.", fr: "Dix espions firent un rapport décourageant." } },
      { id: 'b139-d', isTruth: false, text: { en: "All twelve spies urged Israel to enter the land immediately.", fr: "Les douze espions exhortèrent Israël à entrer immédiatement dans le pays." } },
    ],
    explanation: { en: "Only Joshua and Caleb gave a faithful, confident report. (Numbers 13–14).", fr: "Seuls Josué et Caleb firent un rapport fidèle et confiant. (Numbers 13–14)." },
    scripture: { en: "Numbers 13–14", fr: "Numbers 13–14" },
    didYouKnow: { en: "Only Joshua and Caleb brought back a report of faith and confidence that Israel could enter the land.", fr: "Seuls Josué et Caleb rapportèrent un message de foi et de confiance qu’Israël pouvait entrer dans le pays." }
  },
  {
    id: 'b140', levelNumber: 140, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Balaam and His Donkey", fr: "Balaam et son ânesse" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b140-a', isTruth: true, text: { en: "Balaam traveled on a donkey.", fr: "Balaam voyageait sur une ânesse." } },
      { id: 'b140-b', isTruth: true, text: { en: "The donkey saw the angel of the LORD before Balaam did.", fr: "L’ânesse vit l’ange de l’Éternel avant Balaam." } },
      { id: 'b140-c', isTruth: true, text: { en: "God enabled the donkey to speak.", fr: "Dieu permit à l’ânesse de parler." } },
      { id: 'b140-d', isTruth: false, text: { en: "Balaam’s horse spoke to him.", fr: "Le cheval de Balaam lui parla." } },
    ],
    explanation: { en: "The animal in the account was Balaam’s donkey, not a horse. (Numbers 22).", fr: "L’animal du récit était l’ânesse de Balaam, et non un cheval. (Numbers 22)." },
    scripture: { en: "Numbers 22", fr: "Numbers 22" },
    didYouKnow: { en: "Balaam's donkey is one of the very few animals in Scripture described as speaking with human words.", fr: "L’ânesse de Balaam est l’un des très rares animaux de l’Écriture décrits comme parlant avec des paroles humaines." }
  },
  {
    id: 'b141', levelNumber: 141, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Moses’ Final View of Canaan", fr: "Le dernier regard de Moïse sur Canaan" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b141-a', isTruth: true, text: { en: "Moses viewed the Promised Land from Mount Nebo.", fr: "Moïse contempla la Terre promise depuis le mont Nébo." } },
      { id: 'b141-b', isTruth: true, text: { en: "Moses died in the land of Moab.", fr: "Moïse mourut dans le pays de Moab." } },
      { id: 'b141-c', isTruth: true, text: { en: "Joshua succeeded Moses as Israel’s leader.", fr: "Josué succéda à Moïse comme chef d’Israël." } },
      { id: 'b141-d', isTruth: false, text: { en: "Moses personally led Israel across the Jordan River.", fr: "Moïse conduisit personnellement Israël à travers le Jourdain." } },
    ],
    explanation: { en: "Moses saw the land, but Joshua led Israel across the Jordan after Moses died. (Deuteronomy 34).", fr: "Moïse vit le pays, mais Josué conduisit Israël à travers le Jourdain après la mort de Moïse. (Deuteronomy 34)." },
    scripture: { en: "Deuteronomy 34", fr: "Deuteronomy 34" },
    didYouKnow: { en: "Moses viewed the Promised Land from Mount Nebo but did not cross the Jordan into it.", fr: "Moïse contempla la Terre promise depuis le mont Nébo, mais ne traversa pas le Jourdain pour y entrer." }
  },
  {
    id: 'b142', levelNumber: 142, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Achan’s Sin", fr: "Le péché d’Acan" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b142-a', isTruth: true, text: { en: "Israel was defeated at Ai after the victory at Jericho.", fr: "Israël fut battu à Aï après la victoire de Jéricho." } },
      { id: 'b142-b', isTruth: true, text: { en: "Achan had taken items devoted to destruction.", fr: "Acan avait pris des objets voués à la destruction." } },
      { id: 'b142-c', isTruth: true, text: { en: "Achan hid the stolen items in the ground inside his tent.", fr: "Acan cacha les objets volés dans la terre sous sa tente." } },
      { id: 'b142-d', isTruth: false, text: { en: "Rahab was responsible for Israel’s defeat at Ai.", fr: "Rahab était responsable de la défaite d’Israël à Aï." } },
    ],
    explanation: { en: "Achan’s disobedience, not Rahab, was connected with Israel’s defeat at Ai. (Joshua 7).", fr: "La désobéissance d’Acan, et non Rahab, était liée à la défaite d’Israël à Aï. (Joshua 7)." },
    scripture: { en: "Joshua 7", fr: "Joshua 7" },
    didYouKnow: { en: "Achan's hidden items were discovered after Israel's unexpected defeat at Ai.", fr: "Les objets cachés par Acan furent découverts après la défaite inattendue d’Israël devant Aï." }
  },
  {
    id: 'b143', levelNumber: 143, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Gideon’s Three Hundred", fr: "Les trois cents de Gédéon" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b143-a', isTruth: true, text: { en: "God reduced Gideon’s army before the battle.", fr: "Dieu réduisit l’armée de Gédéon avant la bataille." } },
      { id: 'b143-b', isTruth: true, text: { en: "Gideon went into battle with three hundred men.", fr: "Gédéon partit au combat avec trois cents hommes." } },
      { id: 'b143-c', isTruth: true, text: { en: "The men used trumpets, jars, and torches.", fr: "Les hommes utilisèrent des trompettes, des cruches et des torches." } },
      { id: 'b143-d', isTruth: false, text: { en: "Gideon defeated Midian with thirty thousand chariots.", fr: "Gédéon vainquit Madian avec trente mille chars." } },
    ],
    explanation: { en: "Judges 7 emphasizes a small force of three hundred men, not a huge chariot army. (Judges 7).", fr: "Juges 7 met l’accent sur une petite force de trois cents hommes, et non sur une immense armée de chars. (Judges 7)." },
    scripture: { en: "Judges 7", fr: "Judges 7" },
    didYouKnow: { en: "Gideon's army was reduced to three hundred men before the victory over Midian.", fr: "L’armée de Gédéon fut réduite à trois cents hommes avant la victoire sur Madian." }
  },
  {
    id: 'b144', levelNumber: 144, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Samuel Hears God’s Voice", fr: "Samuel entend la voix de Dieu" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b144-a', isTruth: true, text: { en: "Samuel served under Eli when he was young.", fr: "Samuel servait sous Éli lorsqu’il était jeune." } },
      { id: 'b144-b', isTruth: true, text: { en: "Samuel initially thought Eli was calling him.", fr: "Samuel pensa d’abord qu’Éli l’appelait." } },
      { id: 'b144-c', isTruth: true, text: { en: "Eli told Samuel to answer, “Speak, LORD, for your servant is listening.”", fr: "Éli dit à Samuel de répondre : « Parle, Éternel, car ton serviteur écoute. »" } },
      { id: 'b144-d', isTruth: false, text: { en: "Samuel was serving King David when God first called him.", fr: "Samuel servait le roi David lorsque Dieu l’appela pour la première fois." } },
    ],
    explanation: { en: "Samuel was serving with Eli at Shiloh long before David became king. (1 Samuel 3).", fr: "Samuel servait avec Éli à Silo bien avant que David devienne roi. (1 Samuel 3)." },
    scripture: { en: "1 Samuel 3", fr: "1 Samuel 3" },
    didYouKnow: { en: "When Samuel first heard his name called at night, he thought Eli was calling him.", fr: "Lorsque Samuel entendit son nom pendant la nuit, il pensa d’abord qu’Éli l’appelait." }
  },
  {
    id: 'b145', levelNumber: 145, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Jonathan and David", fr: "Jonathan et David" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b145-a', isTruth: true, text: { en: "Jonathan was King Saul’s son.", fr: "Jonathan était le fils du roi Saül." } },
      { id: 'b145-b', isTruth: true, text: { en: "Jonathan and David formed a close covenant friendship.", fr: "Jonathan et David conclurent une profonde alliance d’amitié." } },
      { id: 'b145-c', isTruth: true, text: { en: "Jonathan warned David when Saul intended to kill him.", fr: "Jonathan avertit David lorsque Saül voulut le tuer." } },
      { id: 'b145-d', isTruth: false, text: { en: "Jonathan betrayed David to Saul for a reward.", fr: "Jonathan trahit David auprès de Saül pour une récompense." } },
    ],
    explanation: { en: "Jonathan protected and supported David rather than betraying him. (1 Samuel 18–20).", fr: "Jonathan protégea et soutint David au lieu de le trahir. (1 Samuel 18–20)." },
    scripture: { en: "1 Samuel 18–20", fr: "1 Samuel 18–20" },
    didYouKnow: { en: "Jonathan gave David his robe, armor, sword, bow, and belt as a sign of their covenant friendship.", fr: "Jonathan donna à David sa tunique, ses armes, son épée, son arc et sa ceinture comme signe de leur alliance d’amitié." }
  },
  {
    id: 'b146', levelNumber: 146, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Abigail and David", fr: "Abigaïl et David" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b146-a', isTruth: true, text: { en: "Abigail was married to Nabal.", fr: "Abigaïl était mariée à Nabal." } },
      { id: 'b146-b', isTruth: true, text: { en: "Abigail brought food to David and his men.", fr: "Abigaïl apporta de la nourriture à David et à ses hommes." } },
      { id: 'b146-c', isTruth: true, text: { en: "Her wise intervention helped prevent bloodshed.", fr: "Son intervention sage contribua à éviter un massacre." } },
      { id: 'b146-d', isTruth: false, text: { en: "Abigail encouraged David to kill Nabal immediately.", fr: "Abigaïl encouragea David à tuer Nabal immédiatement." } },
    ],
    explanation: { en: "Abigail urged David not to take revenge into his own hands. (1 Samuel 25).", fr: "Abigaïl exhorta David à ne pas se venger lui-même. (1 Samuel 25)." },
    scripture: { en: "1 Samuel 25", fr: "1 Samuel 25" },
    didYouKnow: { en: "Abigail later became David's wife after her wise intervention prevented bloodshed.", fr: "Abigaïl devint plus tard l’épouse de David après que son intervention sage eut empêché un bain de sang." }
  },
  {
    id: 'b147', levelNumber: 147, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Solomon Builds the Temple", fr: "Salomon construit le Temple" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b147-a', isTruth: true, text: { en: "Solomon built the temple in Jerusalem.", fr: "Salomon construisit le Temple à Jérusalem." } },
      { id: 'b147-b', isTruth: true, text: { en: "The ark of the covenant was brought into the temple.", fr: "L’arche de l’alliance fut apportée dans le Temple." } },
      { id: 'b147-c', isTruth: true, text: { en: "Solomon prayed at the temple’s dedication.", fr: "Salomon pria lors de la dédicace du Temple." } },
      { id: 'b147-d', isTruth: false, text: { en: "David completed the temple before Solomon became king.", fr: "David acheva le Temple avant que Salomon devienne roi." } },
    ],
    explanation: { en: "David prepared for the temple, but Solomon built it. (1 Kings 6–8).", fr: "David prépara la construction du Temple, mais ce fut Salomon qui le bâtit. (1 Kings 6–8)." },
    scripture: { en: "1 Kings 6–8", fr: "1 Kings 6–8" },
    didYouKnow: { en: "Solomon's temple took seven years to build, while his own palace took thirteen years.", fr: "Le temple de Salomon prit sept ans à construire, tandis que son propre palais en prit treize." }
  },
  {
    id: 'b148', levelNumber: 148, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Naaman Is Healed", fr: "Naaman est guéri" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b148-a', isTruth: true, text: { en: "Naaman was commander of the army of Aram.", fr: "Naaman était chef de l’armée de Syrie." } },
      { id: 'b148-b', isTruth: true, text: { en: "Naaman suffered from leprosy.", fr: "Naaman souffrait de la lèpre." } },
      { id: 'b148-c', isTruth: true, text: { en: "Elisha told Naaman to wash seven times in the Jordan.", fr: "Élisée dit à Naaman de se laver sept fois dans le Jourdain." } },
      { id: 'b148-d', isTruth: false, text: { en: "Naaman was healed after washing once in the Mediterranean Sea.", fr: "Naaman fut guéri après s’être lavé une fois dans la mer Méditerranée." } },
    ],
    explanation: { en: "Naaman obeyed by dipping seven times in the Jordan and was cleansed. (2 Kings 5).", fr: "Naaman obéit en se plongeant sept fois dans le Jourdain et fut purifié. (2 Kings 5)." },
    scripture: { en: "2 Kings 5", fr: "2 Kings 5" },
    didYouKnow: { en: "Naaman was a commander in the Syrian army, and a young Israelite servant girl first pointed him toward the prophet in Israel.", fr: "Naaman était chef de l’armée syrienne, et une jeune servante israélite fut la première à l’orienter vers le prophète en Israël." }
  },
  {
    id: 'b149', levelNumber: 149, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Josiah Finds the Book of the Law", fr: "Josias retrouve le livre de la Loi" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b149-a', isTruth: true, text: { en: "Josiah became king of Judah while still young.", fr: "Josias devint roi de Juda alors qu’il était encore jeune." } },
      { id: 'b149-b', isTruth: true, text: { en: "The Book of the Law was found during temple repairs.", fr: "Le livre de la Loi fut retrouvé pendant les réparations du Temple." } },
      { id: 'b149-c', isTruth: true, text: { en: "Josiah responded with repentance and reform.", fr: "Josias réagit par la repentance et des réformes." } },
      { id: 'b149-d', isTruth: false, text: { en: "Josiah ordered the discovered book to be burned.", fr: "Josias ordonna de brûler le livre retrouvé." } },
    ],
    explanation: { en: "Josiah honored the rediscovered Law and led reforms rather than destroying it. (2 Kings 22–23).", fr: "Josias honora la Loi retrouvée et mena des réformes au lieu de la détruire. (2 Kings 22–23)." },
    scripture: { en: "2 Kings 22–23", fr: "2 Kings 22–23" },
    didYouKnow: { en: "Josiah was only eight years old when he became king of Judah.", fr: "Josias n’avait que huit ans lorsqu’il devint roi de Juda." }
  },
  {
    id: 'b150', levelNumber: 150, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Ezra Reads the Law", fr: "Esdras lit la Loi" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b150-a', isTruth: true, text: { en: "Ezra read the Book of the Law publicly.", fr: "Esdras lut publiquement le livre de la Loi." } },
      { id: 'b150-b', isTruth: true, text: { en: "The people listened attentively.", fr: "Le peuple écouta attentivement." } },
      { id: 'b150-c', isTruth: true, text: { en: "Levites helped the people understand what was read.", fr: "Les Lévites aidèrent le peuple à comprendre ce qui était lu." } },
      { id: 'b150-d', isTruth: false, text: { en: "Ezra read the Law secretly to the king alone.", fr: "Esdras lut la Loi en secret au roi seul." } },
    ],
    explanation: { en: "The reading was a public gathering of the people, not a private royal meeting. (Nehemiah 8).", fr: "La lecture eut lieu devant une assemblée publique, et non lors d’une rencontre privée avec le roi. (Nehemiah 8)." },
    scripture: { en: "Nehemiah 8", fr: "Nehemiah 8" },
    didYouKnow: { en: "When Ezra read the Law publicly, Levites helped the people understand what was being read.", fr: "Lorsque Esdras lut publiquement la Loi, des Lévites aidèrent le peuple à comprendre ce qui était lu." }
  },
  {
    id: 'b151', levelNumber: 151, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Nehemiah Rebuilds Jerusalem’s Wall", fr: "Néhémie reconstruit la muraille de Jérusalem" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b151-a', isTruth: true, text: { en: "Nehemiah served as cupbearer to the Persian king.", fr: "Néhémie servait comme échanson du roi de Perse." } },
      { id: 'b151-b', isTruth: true, text: { en: "Nehemiah received permission to go to Jerusalem.", fr: "Néhémie reçut la permission d’aller à Jérusalem." } },
      { id: 'b151-c', isTruth: true, text: { en: "The wall was rebuilt despite opposition.", fr: "La muraille fut reconstruite malgré l’opposition." } },
      { id: 'b151-d', isTruth: false, text: { en: "Nehemiah rebuilt Noah’s ark in Jerusalem.", fr: "Néhémie reconstruisit l’arche de Noé à Jérusalem." } },
    ],
    explanation: { en: "Nehemiah’s mission concerned Jerusalem’s walls, not Noah’s ark. (Nehemiah 1–6).", fr: "La mission de Néhémie concernait les murailles de Jérusalem, et non l’arche de Noé. (Nehemiah 1–6)." },
    scripture: { en: "Nehemiah 1–6", fr: "Nehemiah 1–6" },
    didYouKnow: { en: "Nehemiah's workers rebuilt while facing threats, and some worked with a weapon ready at hand.", fr: "Les ouvriers de Néhémie reconstruisirent malgré les menaces, et certains travaillaient avec une arme à portée de main." }
  },
  {
    id: 'b152', levelNumber: 152, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Fiery Coal and Isaiah", fr: "Le charbon ardent et Ésaïe" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b152-a', isTruth: true, text: { en: "Isaiah saw the Lord in a vision.", fr: "Ésaïe vit le Seigneur dans une vision." } },
      { id: 'b152-b', isTruth: true, text: { en: "Seraphim cried, “Holy, holy, holy.”", fr: "Les séraphins criaient : « Saint, saint, saint. »" } },
      { id: 'b152-c', isTruth: true, text: { en: "A seraph touched Isaiah’s lips with a burning coal.", fr: "Un séraphin toucha les lèvres d’Ésaïe avec un charbon ardent." } },
      { id: 'b152-d', isTruth: false, text: { en: "Isaiah refused when God asked whom He should send.", fr: "Ésaïe refusa lorsque Dieu demanda qui Il enverrait." } },
    ],
    explanation: { en: "Isaiah answered, “Here am I. Send me!” (Isaiah 6).", fr: "Ésaïe répondit : « Me voici, envoie-moi ! » (Isaiah 6)." },
    scripture: { en: "Isaiah 6", fr: "Isaiah 6" },
    didYouKnow: { en: "Isaiah's lips were touched with a burning coal from the altar before he answered God's call, 'Here am I. Send me!'", fr: "Les lèvres d’Ésaïe furent touchées par une braise prise sur l’autel avant qu’il réponde à l’appel de Dieu : « Me voici, envoie-moi ! »" }
  },
  {
    id: 'b153', levelNumber: 153, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Jeremiah and the Potter", fr: "Jérémie et le potier" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b153-a', isTruth: true, text: { en: "God told Jeremiah to go to a potter’s house.", fr: "Dieu dit à Jérémie d’aller chez un potier." } },
      { id: 'b153-b', isTruth: true, text: { en: "Jeremiah watched the potter reshape a spoiled vessel.", fr: "Jérémie regarda le potier refaire un vase manqué." } },
      { id: 'b153-c', isTruth: true, text: { en: "God used the potter as an illustration concerning Israel.", fr: "Dieu utilisa le potier comme illustration au sujet d’Israël." } },
      { id: 'b153-d', isTruth: false, text: { en: "Jeremiah was commanded to destroy every potter’s wheel in Jerusalem.", fr: "Jérémie reçut l’ordre de détruire tous les tours de potier de Jérusalem." } },
    ],
    explanation: { en: "The potter’s work was an object lesson; Jeremiah was not told to destroy the wheels. (Jeremiah 18).", fr: "Le travail du potier servait de leçon; Jérémie ne reçut pas l’ordre de détruire les tours. (Jeremiah 18)." },
    scripture: { en: "Jeremiah 18", fr: "Jeremiah 18" },
    didYouKnow: { en: "God sent Jeremiah to a potter's house and used the potter reshaping clay as an illustration for Israel.", fr: "Dieu envoya Jérémie chez un potier et utilisa l’argile remodelée par le potier comme illustration pour Israël." }
  },
  {
    id: 'b154', levelNumber: 154, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Ezekiel and the Valley of Dry Bones", fr: "Ézéchiel et la vallée des ossements desséchés" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b154-a', isTruth: true, text: { en: "Ezekiel saw a valley full of dry bones.", fr: "Ézéchiel vit une vallée remplie d’ossements desséchés." } },
      { id: 'b154-b', isTruth: true, text: { en: "God told Ezekiel to prophesy to the bones.", fr: "Dieu dit à Ézéchiel de prophétiser sur les ossements." } },
      { id: 'b154-c', isTruth: true, text: { en: "The bones came together and received breath.", fr: "Les ossements se rapprochèrent et reçurent le souffle." } },
      { id: 'b154-d', isTruth: false, text: { en: "The vision took place during Noah’s flood.", fr: "La vision eut lieu pendant le déluge de Noé." } },
    ],
    explanation: { en: "The dry-bones vision belongs to Ezekiel’s prophetic ministry, not the time of Noah. (Ezekiel 37).", fr: "La vision des ossements desséchés appartient au ministère prophétique d’Ézéchiel, et non à l’époque de Noé. (Ezekiel 37)." },
    scripture: { en: "Ezekiel 37", fr: "Ezekiel 37" },
    didYouKnow: { en: "In Ezekiel's vision, the dry bones came together, received flesh, and then breath entered them.", fr: "Dans la vision d’Ézéchiel, les ossements desséchés se rassemblèrent, furent recouverts de chair, puis reçurent le souffle." }
  },
  {
    id: 'b155', levelNumber: 155, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Hosea’s Family as a Sign", fr: "La famille d’Osée comme signe" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b155-a', isTruth: true, text: { en: "Hosea was an Old Testament prophet.", fr: "Osée était un prophète de l’Ancien Testament." } },
      { id: 'b155-b', isTruth: true, text: { en: "His family life became part of his prophetic message.", fr: "Sa vie familiale devint une partie de son message prophétique." } },
      { id: 'b155-c', isTruth: true, text: { en: "Hosea’s message portrayed God’s faithful love toward an unfaithful people.", fr: "Le message d’Osée illustrait l’amour fidèle de Dieu envers un peuple infidèle." } },
      { id: 'b155-d', isTruth: false, text: { en: "Hosea was one of Jesus’ twelve apostles.", fr: "Osée était l’un des douze apôtres de Jésus." } },
    ],
    explanation: { en: "Hosea lived centuries before Jesus’ earthly ministry and was an Old Testament prophet. (Hosea 1–3).", fr: "Osée vécut des siècles avant le ministère terrestre de Jésus et était un prophète de l’Ancien Testament. (Hosea 1–3)." },
    scripture: { en: "Hosea 1–3", fr: "Hosea 1–3" },
    didYouKnow: { en: "Hosea's children's names carried prophetic messages about God's relationship with Israel.", fr: "Les noms des enfants d’Osée portaient des messages prophétiques concernant la relation de Dieu avec Israël." }
  },
  {
    id: 'b156', levelNumber: 156, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Amos the Shepherd Prophet", fr: "Amos, le prophète berger" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b156-a', isTruth: true, text: { en: "Amos prophesied to the northern kingdom of Israel.", fr: "Amos prophétisa au royaume du nord d’Israël." } },
      { id: 'b156-b', isTruth: true, text: { en: "Amos described himself as a shepherd.", fr: "Amos se décrivit comme berger." } },
      { id: 'b156-c', isTruth: true, text: { en: "Amos called for justice and righteousness.", fr: "Amos appela à la justice et à la droiture." } },
      { id: 'b156-d', isTruth: false, text: { en: "Amos served as high priest in Jerusalem.", fr: "Amos servit comme grand prêtre à Jérusalem." } },
    ],
    explanation: { en: "Amos was a prophet from a pastoral background, not Jerusalem’s high priest. (Amos 1; 7).", fr: "Amos était un prophète issu d’un milieu pastoral, et non le grand prêtre de Jérusalem. (Amos 1; 7)." },
    scripture: { en: "Amos 1; 7", fr: "Amos 1; 7" },
    didYouKnow: { en: "Amos came from Tekoa in Judah but was sent to prophesy mainly to the northern kingdom of Israel.", fr: "Amos venait de Tekoa en Juda, mais fut envoyé prophétiser principalement au royaume du nord, Israël." }
  },
  {
    id: 'b157', levelNumber: 157, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Micah and Bethlehem", fr: "Michée et Bethléhem" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b157-a', isTruth: true, text: { en: "Micah was an Old Testament prophet.", fr: "Michée était un prophète de l’Ancien Testament." } },
      { id: 'b157-b', isTruth: true, text: { en: "Micah named Bethlehem in a prophecy about a future ruler.", fr: "Michée nomma Bethléhem dans une prophétie concernant un futur chef." } },
      { id: 'b157-c', isTruth: true, text: { en: "Matthew later connects this prophecy with Jesus’ birth.", fr: "Matthieu relie plus tard cette prophétie à la naissance de Jésus." } },
      { id: 'b157-d', isTruth: false, text: { en: "Micah said the ruler would come from Rome.", fr: "Michée dit que le chef viendrait de Rome." } },
    ],
    explanation: { en: "Micah 5:2 identifies Bethlehem, not Rome. (Micah 5:2).", fr: "Michée 5:2 désigne Bethléhem, et non Rome. (Micah 5:2)." },
    scripture: { en: "Micah 5:2", fr: "Micah 5:2" },
    didYouKnow: { en: "Micah's prophecy naming Bethlehem was later quoted when the Magi asked where the Messiah would be born.", fr: "La prophétie de Michée nommant Bethléhem fut plus tard citée lorsque les mages demandèrent où le Messie devait naître." }
  },
  {
    id: 'b158', levelNumber: 158, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Habakkuk Learns to Trust", fr: "Habacuc apprend à faire confiance" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b158-a', isTruth: true, text: { en: "Habakkuk questioned God about violence and injustice.", fr: "Habacuc interrogea Dieu au sujet de la violence et de l’injustice." } },
      { id: 'b158-b', isTruth: true, text: { en: "God answered Habakkuk’s complaints.", fr: "Dieu répondit aux plaintes d’Habacuc." } },
      { id: 'b158-c', isTruth: true, text: { en: "Habakkuk ends with an expression of trust and joy in God.", fr: "Habacuc se termine par une expression de confiance et de joie en Dieu." } },
      { id: 'b158-d', isTruth: false, text: { en: "Habakkuk ends by saying he will never trust God again.", fr: "Habacuc se termine en disant qu’il ne fera plus jamais confiance à Dieu." } },
    ],
    explanation: { en: "The book ends with confidence in God even amid hardship. (Habakkuk 1–3).", fr: "Le livre se termine par la confiance en Dieu même au milieu des difficultés. (Habakkuk 1–3)." },
    scripture: { en: "Habakkuk 1–3", fr: "Habakkuk 1–3" },
    didYouKnow: { en: "Habakkuk ends with a declaration of joy in God even if crops fail and livestock disappear.", fr: "Habacuc se termine par une déclaration de joie en Dieu même si les récoltes échouent et que le bétail disparaît." }
  },
  {
    id: 'b159', levelNumber: 159, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Haggai Encourages the Temple Rebuilding", fr: "Aggée encourage la reconstruction du Temple" }, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b159-a', isTruth: true, text: { en: "Haggai prophesied after the exile.", fr: "Aggée prophétisa après l’exil." } },
      { id: 'b159-b', isTruth: true, text: { en: "He urged the returned people to rebuild God’s house.", fr: "Il exhorta le peuple revenu d’exil à reconstruire la maison de Dieu." } },
      { id: 'b159-c', isTruth: true, text: { en: "Zerubbabel was among the leaders addressed in Haggai.", fr: "Zorobabel faisait partie des dirigeants auxquels Aggée s’adressa." } },
      { id: 'b159-d', isTruth: false, text: { en: "Haggai told the people to abandon Jerusalem permanently.", fr: "Aggée dit au peuple d’abandonner définitivement Jérusalem." } },
    ],
    explanation: { en: "Haggai encouraged rebuilding in Jerusalem rather than abandoning it. (Haggai 1–2).", fr: "Aggée encouragea la reconstruction à Jérusalem au lieu de son abandon. (Haggai 1–2)." },
    scripture: { en: "Haggai 1–2", fr: "Haggai 1–2" },
    didYouKnow: { en: "Haggai dated several of his messages precisely by the year, month, and day of King Darius's reign.", fr: "Aggée date plusieurs de ses messages avec précision selon l’année, le mois et le jour du règne du roi Darius." }
  },
  {
    id: 'b160', levelNumber: 160, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Jesus Calms the Storm", fr: "Jésus apaise la tempête" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b160-a', isTruth: true, text: { en: "Jesus and His disciples crossed the lake by boat.", fr: "Jésus et ses disciples traversaient le lac en bateau." } },
      { id: 'b160-b', isTruth: true, text: { en: "A violent storm arose while Jesus was sleeping.", fr: "Une violente tempête se leva pendant que Jésus dormait." } },
      { id: 'b160-c', isTruth: true, text: { en: "Jesus rebuked the wind and told the sea to be still.", fr: "Jésus menaça le vent et ordonna à la mer de se calmer." } },
      { id: 'b160-d', isTruth: false, text: { en: "The disciples calmed the storm without waking Jesus.", fr: "Les disciples calmèrent la tempête sans réveiller Jésus." } },
    ],
    explanation: { en: "The disciples woke Jesus, and He calmed the storm. (Mark 4:35–41).", fr: "Les disciples réveillèrent Jésus, et il calma la tempête. (Mark 4:35–41)." },
    scripture: { en: "Mark 4:35–41", fr: "Mark 4:35–41" },
    didYouKnow: { en: "Jesus was asleep in the boat before the disciples woke Him during the storm.", fr: "Jésus dormait dans la barque avant que les disciples ne le réveillent pendant la tempête." }
  },
  {
    id: 'b161', levelNumber: 161, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Jairus’ Daughter", fr: "La fille de Jaïrus" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b161-a', isTruth: true, text: { en: "Jairus was a synagogue leader.", fr: "Jaïrus était un chef de synagogue." } },
      { id: 'b161-b', isTruth: true, text: { en: "Jairus asked Jesus to help his dying daughter.", fr: "Jaïrus demanda à Jésus de secourir sa fille mourante." } },
      { id: 'b161-c', isTruth: true, text: { en: "Jesus raised the girl after she had died.", fr: "Jésus releva la jeune fille après sa mort." } },
      { id: 'b161-d', isTruth: false, text: { en: "Jairus asked Peter, not Jesus, to heal his daughter.", fr: "Jaïrus demanda à Pierre, et non à Jésus, de guérir sa fille." } },
    ],
    explanation: { en: "Jairus came to Jesus for help, and Jesus restored the girl to life. (Mark 5:21–43).", fr: "Jaïrus vint demander de l’aide à Jésus, et Jésus rendit la vie à la jeune fille. (Mark 5:21–43)." },
    scripture: { en: "Mark 5:21–43", fr: "Mark 5:21–43" },
    didYouKnow: { en: "Jairus was a synagogue leader who pleaded with Jesus to help his dying daughter.", fr: "Jaïrus était un chef de synagogue qui supplia Jésus de venir au secours de sa fille mourante." }
  },
  {
    id: 'b162', levelNumber: 162, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Blind Bartimaeus", fr: "Bartimée l’aveugle" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b162-a', isTruth: true, text: { en: "Bartimaeus was a blind beggar.", fr: "Bartimée était un mendiant aveugle." } },
      { id: 'b162-b', isTruth: true, text: { en: "He called Jesus “Son of David.”", fr: "Il appela Jésus « Fils de David »." } },
      { id: 'b162-c', isTruth: true, text: { en: "Jesus restored his sight.", fr: "Jésus lui rendit la vue." } },
      { id: 'b162-d', isTruth: false, text: { en: "Bartimaeus refused to follow Jesus after being healed.", fr: "Bartimée refusa de suivre Jésus après sa guérison." } },
    ],
    explanation: { en: "After receiving his sight, Bartimaeus followed Jesus along the road. (Mark 10:46–52).", fr: "Après avoir recouvré la vue, Bartimée suivit Jésus sur le chemin. (Mark 10:46–52)." },
    scripture: { en: "Mark 10:46–52", fr: "Mark 10:46–52" },
    didYouKnow: { en: "Bartimaeus threw aside his cloak and came to Jesus when Jesus called him.", fr: "Bartimée jeta son manteau et vint vers Jésus lorsque Jésus l’appela." }
  },
  {
    id: 'b163', levelNumber: 163, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Widow’s Offering", fr: "L’offrande de la veuve" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b163-a', isTruth: true, text: { en: "Jesus watched people putting money into the temple treasury.", fr: "Jésus regardait les gens mettre de l’argent dans le trésor du Temple." } },
      { id: 'b163-b', isTruth: true, text: { en: "A poor widow gave two small coins.", fr: "Une pauvre veuve donna deux petites pièces." } },
      { id: 'b163-c', isTruth: true, text: { en: "Jesus said she had given more than the wealthy contributors because she gave out of her poverty.", fr: "Jésus dit qu’elle avait donné plus que les riches, car elle avait donné de sa pauvreté." } },
      { id: 'b163-d', isTruth: false, text: { en: "Jesus criticized the widow for giving too little.", fr: "Jésus critiqua la veuve parce qu’elle avait donné trop peu." } },
    ],
    explanation: { en: "Jesus praised the widow’s sacrificial giving. (Mark 12:41–44).", fr: "Jésus loua le don sacrificiel de la veuve. (Mark 12:41–44)." },
    scripture: { en: "Mark 12:41–44", fr: "Mark 12:41–44" },
    didYouKnow: { en: "Jesus said the poor widow had given more than the wealthy donors because she gave out of her poverty.", fr: "Jésus déclara que la pauvre veuve avait donné plus que les riches donateurs parce qu’elle avait donné de son indigence." }
  },
  {
    id: 'b164', levelNumber: 164, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Ascension of Jesus", fr: "L’Ascension de Jésus" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b164-a', isTruth: true, text: { en: "Jesus appeared to His disciples after His resurrection.", fr: "Jésus apparut à ses disciples après sa résurrection." } },
      { id: 'b164-b', isTruth: true, text: { en: "Jesus was taken up before their eyes.", fr: "Jésus fut élevé sous leurs yeux." } },
      { id: 'b164-c', isTruth: true, text: { en: "Two men in white told the disciples that Jesus would come again.", fr: "Deux hommes vêtus de blanc dirent aux disciples que Jésus reviendrait." } },
      { id: 'b164-d', isTruth: false, text: { en: "Jesus ascended before His crucifixion.", fr: "Jésus monta au ciel avant sa crucifixion." } },
    ],
    explanation: { en: "The Ascension occurred after Jesus’ death and resurrection. (Acts 1:1–11).", fr: "L’Ascension eut lieu après la mort et la résurrection de Jésus. (Acts 1:1–11)." },
    scripture: { en: "Acts 1:1–11", fr: "Acts 1:1–11" },
    didYouKnow: { en: "Acts says Jesus' disciples watched as He was taken up and a cloud hid Him from their sight.", fr: "Les Actes disent que les disciples regardèrent Jésus être élevé, puis qu’une nuée le déroba à leurs yeux." }
  },
  {
    id: 'b165', levelNumber: 165, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Peter and John at the Beautiful Gate", fr: "Pierre et Jean à la Belle Porte" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b165-a', isTruth: true, text: { en: "Peter and John went to the temple at the time of prayer.", fr: "Pierre et Jean montèrent au Temple à l’heure de la prière." } },
      { id: 'b165-b', isTruth: true, text: { en: "They met a man who had been unable to walk from birth.", fr: "Ils rencontrèrent un homme infirme de naissance." } },
      { id: 'b165-c', isTruth: true, text: { en: "Peter told the man to walk in the name of Jesus Christ.", fr: "Pierre dit à l’homme de marcher au nom de Jésus-Christ." } },
      { id: 'b165-d', isTruth: false, text: { en: "Peter gave the man a large bag of silver before healing him.", fr: "Pierre donna à l’homme un grand sac d’argent avant de le guérir." } },
    ],
    explanation: { en: "Peter said he had no silver or gold, but gave what he had by calling on Jesus’ name. (Acts 3).", fr: "Pierre dit qu’il n’avait ni argent ni or, mais donna ce qu’il avait en invoquant le nom de Jésus. (Acts 3)." },
    scripture: { en: "Acts 3", fr: "Acts 3" },
    didYouKnow: { en: "The man healed at the Beautiful Gate had been unable to walk from birth and was carried there daily.", fr: "L’homme guéri à la Belle Porte était incapable de marcher depuis sa naissance et y était porté chaque jour." }
  },
  {
    id: 'b166', levelNumber: 166, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Dorcas Is Restored to Life", fr: "Dorcas revient à la vie" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b166-a', isTruth: true, text: { en: "Dorcas was also called Tabitha.", fr: "Dorcas était aussi appelée Tabitha." } },
      { id: 'b166-b', isTruth: true, text: { en: "She was known for doing good and helping the poor.", fr: "Elle était connue pour ses bonnes œuvres et son aide aux pauvres." } },
      { id: 'b166-c', isTruth: true, text: { en: "Peter prayed and told her to get up.", fr: "Pierre pria et lui dit de se lever." } },
      { id: 'b166-d', isTruth: false, text: { en: "Paul raised Dorcas in the city of Rome.", fr: "Paul ressuscita Dorcas dans la ville de Rome." } },
    ],
    explanation: { en: "Acts says Peter restored Dorcas to life in Joppa, not Paul in Rome. (Acts 9:36–43).", fr: "Les Actes disent que Pierre rendit la vie à Dorcas à Joppé, et non Paul à Rome. (Acts 9:36–43)." },
    scripture: { en: "Acts 9:36–43", fr: "Acts 9:36–43" },
    didYouKnow: { en: "Dorcas is also called Tabitha, and Acts says she was known for good works and helping the poor.", fr: "Dorcas est aussi appelée Tabitha, et les Actes disent qu’elle était connue pour ses bonnes œuvres et son aide aux pauvres." }
  },
  {
    id: 'b167', levelNumber: 167, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Paul and Silas in Prison", fr: "Paul et Silas en prison" }, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b167-a', isTruth: true, text: { en: "Paul and Silas were imprisoned in Philippi.", fr: "Paul et Silas furent emprisonnés à Philippes." } },
      { id: 'b167-b', isTruth: true, text: { en: "They prayed and sang hymns at midnight.", fr: "Ils priaient et chantaient des cantiques vers minuit." } },
      { id: 'b167-c', isTruth: true, text: { en: "An earthquake opened the prison doors.", fr: "Un tremblement de terre ouvrit les portes de la prison." } },
      { id: 'b167-d', isTruth: false, text: { en: "Paul and Silas escaped secretly and left the jailer behind.", fr: "Paul et Silas s’échappèrent secrètement et abandonnèrent le geôlier." } },
    ],
    explanation: { en: "They remained, spoke the word of the Lord to the jailer, and his household was baptized. (Acts 16:16–40).", fr: "Ils restèrent, annoncèrent la parole du Seigneur au geôlier, et sa famille fut baptisée. (Acts 16:16–40)." },
    scripture: { en: "Acts 16:16–40", fr: "Acts 16:16–40" },
    didYouKnow: { en: "After the earthquake, the Philippian jailer and his household heard the gospel and were baptized that same night.", fr: "Après le tremblement de terre, le geôlier de Philippes et sa famille entendirent l’Évangile et furent baptisés cette même nuit." }
  },

  // ─── INTERMEDIATE ──────────────────────────────────────────────────────────────
  {
    id: 'i1', levelNumber: 1, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "David and Saul", fr: "David et Saül" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i1-a', isTruth: true,  text: { en: "King Saul tried to kill David by throwing a spear at him while David played the harp.", fr: "Le roi Saül tenta de tuer David en lui jetant une lance pendant que David jouait de la harpe." } },
      { id: 'i1-b', isTruth: true,  text: { en: "David spared Saul's life in a cave and only cut off a corner of his robe.", fr: "David épargna la vie de Saül dans une grotte et se contenta de couper le pan de son manteau." } },
      { id: 'i1-c', isTruth: true,  text: { en: "Jonathan, Saul's son, made a covenant of deep friendship with David.", fr: "Jonathan, le fils de Saül, conclut une alliance d'amitié profonde avec David." } },
      { id: 'i1-d', isTruth: false, text: { en: "David immediately became king over all twelve tribes of Israel the day Saul died.", fr: "David devint immédiatement roi sur les douze tribus d'Israël le jour de la mort de Saül." } },
    ],
    explanation: { en: "After Saul died, David was first crowned king only over Judah. He ruled Judah for over seven years before the other tribes united under him (2 Samuel 2:4 / 5:3).", fr: "Après la mort de Saül, David fut d'abord sacré roi uniquement sur Juda. Il régna sur Juda pendant plus de sept ans avant que les autres tribus ne se rallient à lui (2 Samuel 2:4 / 5:3)." },
    didYouKnow: { en: "David composed a lament for Saul and Jonathan after their deaths, even though Saul had repeatedly tried to kill him.", fr: "David composa une complainte pour Saül et Jonathan après leur mort, bien que Saül ait tenté à plusieurs reprises de le tuer." }

  },
  {
    id: 'i2', levelNumber: 2, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Twelve Spies", fr: "Les Douze Espions" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i2-a', isTruth: true,  text: { en: "Moses sent twelve spies, one from each tribe, to explore the land of Canaan.", fr: "Moïse envoya douze espions, un par tribu, pour explorer le pays de Canaan." } },
      { id: 'i2-b', isTruth: true,  text: { en: "The spies were gone for forty days before returning with their report.", fr: "Les espions partirent pendant quarante jours avant de revenir avec leur rapport." } },
      { id: 'i2-c', isTruth: true,  text: { en: "Only Caleb and Joshua gave a positive report and encouraged the people to take the land.", fr: "Seuls Caleb et Josué donnèrent un rapport favorable et encouragèrent le peuple à conquérir le pays." } },
      { id: 'i2-d', isTruth: false, text: { en: "The majority report said the giants in the land were twice the height of ordinary men.", fr: "Le rapport majoritaire disait que les géants du pays étaient deux fois plus grands que les hommes ordinaires." } },
    ],
    explanation: { en: "The majority report said the Israelites felt like grasshoppers compared to the Nephilim — a figure of speech expressing fear and smallness. No specific height comparison like 'twice the height' was given (Numbers 13:33).", fr: "Le rapport majoritaire disait que les Israélites se sentaient comme des sauterelles face aux Nephilim — une figure de style exprimant la peur et la petitesse. Aucune comparaison de taille précise du type 'deux fois plus grand' n'est mentionnée (Nombres 13:33)." },
    didYouKnow: { en: "Joshua and Caleb were the only two spies who urged Israel to trust the LORD and enter the land.", fr: "Josué et Caleb furent les deux seuls espions à exhorter Israël à faire confiance à l’Éternel et à entrer dans le pays." }

  },
  {
    id: 'i3', levelNumber: 3, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "David and Bathsheba", fr: "David et Bethsabée" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i3-a', isTruth: true,  text: { en: "David saw Bathsheba bathing from the roof of his palace and sent for her.", fr: "David vit Bethsabée se baigner depuis le toit de son palais et la fit appeler." } },
      { id: 'i3-b', isTruth: true,  text: { en: "David arranged for Bathsheba's husband Uriah to be placed in the front lines of battle to be killed.", fr: "David fit placer Urie, le mari de Bethsabée, en première ligne de combat pour qu'il soit tué." } },
      { id: 'i3-c', isTruth: true,  text: { en: "God sent the prophet Nathan to confront David using a parable about a stolen lamb.", fr: "Dieu envoya le prophète Nathan confronter David au moyen d'une parabole sur une brebis volée." } },
      { id: 'i3-d', isTruth: false, text: { en: "David confessed his sin, and God immediately removed all consequences as a sign of forgiveness.", fr: "David confessa son péché, et Dieu supprima immédiatement toutes les conséquences en signe de pardon." } },
    ],
    explanation: { en: "Although David was forgiven, God said the sword would never depart from his house. The child born of the affair died, and David faced rebellion, violence, and strife throughout his family (2 Samuel 12:10-14).", fr: "Bien que David soit pardonné, Dieu dit que l'épée ne s'écarterait jamais de sa maison. L'enfant né de la liaison mourut, et David connut la rébellion, la violence et la discorde dans sa famille (2 Samuel 12:10-14)." },
    didYouKnow: { en: "The child born after David and Bathsheba's first son was Solomon, whom the LORD also called Jedidiah through Nathan.", fr: "L’enfant né après le premier fils de David et Bethsabée fut Salomon, que l’Éternel appela aussi Jedidja par l’intermédiaire de Nathan." }

  },
  {
    id: 'i4', levelNumber: 4, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Solomon's Temple", fr: "Le Temple de Salomon" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i4-a', isTruth: true,  text: { en: "Solomon began building the temple in the fourth year of his reign.", fr: "Salomon commença à construire le temple la quatrième année de son règne." } },
      { id: 'i4-b', isTruth: true,  text: { en: "The temple took seven years to build.", fr: "La construction du temple dura sept ans." } },
      { id: 'i4-c', isTruth: true,  text: { en: "King Hiram of Tyre supplied Solomon with cedar and cypress timber for the temple.", fr: "Le roi Hiram de Tyr fournit à Salomon du bois de cèdre et de cyprès pour le temple." } },
      { id: 'i4-d', isTruth: false, text: { en: "Solomon built his own palace in five years — less time than it took to build the temple.", fr: "Salomon construisit son propre palais en cinq ans — moins de temps qu'il n'en fallut pour le temple." } },
    ],
    explanation: { en: "Solomon's palace took thirteen years to build — nearly twice as long as the temple's seven years. The temple was completed first (1 Kings 6:38; 7:1).", fr: "Le palais de Salomon prit treize ans à construire — presque deux fois plus longtemps que les sept ans du temple. Le temple fut achevé en premier (1 Rois 6:38 ; 7:1)." },
    didYouKnow: { en: "Solomon's temple took seven years to build, according to 1 Kings 6:38.", fr: "Selon 1 Rois 6:38, la construction du temple de Salomon dura sept ans." }

  },
  {
    id: 'i5', levelNumber: 5, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Queen of Sheba", fr: "La Reine de Saba" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i5-a', isTruth: true,  text: { en: "The Queen of Sheba visited Solomon to test him with hard questions after hearing of his fame.", fr: "La reine de Saba rendit visite à Salomon pour l'éprouver par des questions difficiles après avoir entendu parler de sa renommée." } },
      { id: 'i5-b', isTruth: true,  text: { en: "She arrived in Jerusalem with a very great caravan — camels carrying spices, gold, and precious stones.", fr: "Elle arriva à Jérusalem avec une très grande caravane — des chameaux chargés d'épices, d'or et de pierres précieuses." } },
      { id: 'i5-c', isTruth: true,  text: { en: "After Solomon answered all her questions, she declared that his wisdom exceeded his fame.", fr: "Après que Salomon eut répondu à toutes ses questions, elle déclara que sa sagesse surpassait sa renommée." } },
      { id: 'i5-d', isTruth: false, text: { en: "The Queen of Sheba remained in Jerusalem and became one of Solomon's wives.", fr: "La reine de Saba resta à Jérusalem et devint l'une des épouses de Salomon." } },
    ],
    explanation: { en: "After giving and receiving gifts, the queen returned to her own country. The Bible does not say she married Solomon or stayed in Jerusalem (1 Kings 10:13).", fr: "Après échange de cadeaux, la reine retourna dans son pays. La Bible ne dit pas qu'elle épousa Salomon ni qu'elle resta à Jérusalem (1 Rois 10:13)." },
    didYouKnow: { en: "The Queen of Sheba brought Solomon spices, large quantities of gold, and precious stones.", fr: "La reine de Saba apporta à Salomon des aromates, une grande quantité d’or et des pierres précieuses." }

  },
  {
    id: 'i6', levelNumber: 6, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Divided Kingdom", fr: "Le Royaume Divisé" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i6-a', isTruth: true,  text: { en: "After Solomon's death, his son Rehoboam refused to lighten the heavy burden of taxes and labor.", fr: "Après la mort de Salomon, son fils Roboam refusa d'alléger le lourd fardeau des impôts et des corvées." } },
      { id: 'i6-b', isTruth: true,  text: { en: "Jeroboam led the ten northern tribes in rebellion against Rehoboam.", fr: "Jéroboam mena les dix tribus du nord à la rébellion contre Roboam." } },
      { id: 'i6-c', isTruth: true,  text: { en: "Jeroboam set up two golden calves and told the people 'Here are your gods, Israel.'", fr: "Jéroboam érigea deux veaux d'or et dit au peuple : 'Voici tes dieux, Israël.'" } },
      { id: 'i6-d', isTruth: false, text: { en: "Rehoboam ruled over all twelve tribes from Jerusalem throughout his reign.", fr: "Roboam régna sur les douze tribus depuis Jérusalem tout au long de son règne." } },
    ],
    explanation: { en: "Rehoboam ruled only over the tribes of Judah and Benjamin — two tribes in the south. The ten northern tribes formed the separate Kingdom of Israel under Jeroboam (1 Kings 12:20-21).", fr: "Roboam ne régna que sur les tribus de Juda et de Benjamin — deux tribus au sud. Les dix tribus du nord formèrent le royaume séparé d'Israël sous Jéroboam (1 Rois 12:20-21)." },
    didYouKnow: { en: "Jeroboam established rival worship centers at Bethel and Dan after the kingdom divided.", fr: "Après la division du royaume, Jéroboam établit des centres de culte rivaux à Béthel et à Dan." }

  },
  {
    id: 'i7', levelNumber: 7, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Elijah and the Widow of Zarephath", fr: "Élie et la Veuve de Sarepta" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i7-a', isTruth: true,  text: { en: "God sent Elijah to Zarephath in Sidon, outside of Israel, to be cared for by a widow.", fr: "Dieu envoya Élie à Sarepta en Sidon, hors d'Israël, pour être pris en charge par une veuve." } },
      { id: 'i7-b', isTruth: true,  text: { en: "The widow's jar of flour and jug of oil did not run out throughout the drought, just as Elijah promised.", fr: "Le pot de farine et la cruche d'huile de la veuve ne s'épuisèrent pas pendant la sécheresse, comme Élie l'avait promis." } },
      { id: 'i7-c', isTruth: true,  text: { en: "The widow's son died, and Elijah stretched himself out on the boy three times before he revived.", fr: "Le fils de la veuve mourut et Élie s'étendit trois fois sur l'enfant avant qu'il ne revive." } },
      { id: 'i7-d', isTruth: false, text: { en: "The widow immediately welcomed Elijah and fed him before he announced God's promise.", fr: "La veuve accueillit immédiatement Élie et le nourrit avant qu'il n'annonce la promesse de Dieu." } },
    ],
    explanation: { en: "The widow initially said she was gathering sticks to make a final meal for herself and her son before they died of starvation. She was not welcoming — it took Elijah's assurance of God's promise before she agreed to feed him first (1 Kings 17:12-13).", fr: "La veuve dit d'abord qu'elle ramassait du bois pour préparer un dernier repas pour elle et son fils avant de mourir de faim. Elle n'était pas accueillante — il fallut la promesse de Dieu par Élie pour qu'elle accepte de le nourrir en premier (1 Rois 17:12-13)." },
    didYouKnow: { en: "During the drought, the widow's flour and oil did not run out until the LORD sent rain again.", fr: "Pendant la sécheresse, la farine et l’huile de la veuve ne s’épuisèrent pas jusqu’à ce que l’Éternel envoie de nouveau la pluie." }

  },
  {
    id: 'i8', levelNumber: 8, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Naaman and the Leprosy", fr: "Naaman et la Lèpre" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i8-a', isTruth: true,  text: { en: "Naaman was commander of the army of Aram and was a great man, but he had leprosy.", fr: "Naaman était le commandant de l'armée d'Aram, un grand homme, mais il était lépreux." } },
      { id: 'i8-b', isTruth: true,  text: { en: "An Israelite slave girl told Naaman's wife that the prophet in Samaria could cure his leprosy.", fr: "Une jeune esclave israélite dit à la femme de Naaman que le prophète en Samarie pourrait guérir sa lèpre." } },
      { id: 'i8-c', isTruth: true,  text: { en: "Elisha told Naaman to wash seven times in the Jordan River to be cured.", fr: "Élisée dit à Naaman de se laver sept fois dans le Jourdain pour être guéri." } },
      { id: 'i8-d', isTruth: false, text: { en: "Naaman's leprosy transferred to Elisha when Naaman was healed.", fr: "La lèpre de Naaman se transféra à Élisée quand Naaman fut guéri." } },
    ],
    explanation: { en: "Naaman's leprosy transferred to Gehazi, Elisha's servant, not to Elisha himself. Gehazi secretly followed Naaman to collect gifts Elisha had refused, and God punished him with Naaman's leprosy (2 Kings 5:27).", fr: "La lèpre de Naaman se transféra à Guéhazi, le serviteur d'Élisée, et non à Élisée lui-même. Guéhazi suivit secrètement Naaman pour recevoir des cadeaux qu'Élisée avait refusés, et Dieu le punit par la lèpre de Naaman (2 Rois 5:27)." },
    didYouKnow: { en: "Naaman initially became angry at Elisha's simple command to wash seven times in the Jordan.", fr: "Naaman se mit d’abord en colère devant l’ordre simple d’Élisée de se laver sept fois dans le Jourdain." }

  },
  {
    id: 'i9', levelNumber: 9, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Hezekiah and Sennacherib", fr: "Ézéchias et Sennachérib" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i9-a', isTruth: true,  text: { en: "The Assyrian king Sennacherib sent messengers to mock God and intimidate Jerusalem's people.", fr: "Le roi assyrien Sennachérib envoya des messagers pour se moquer de Dieu et intimider le peuple de Jérusalem." } },
      { id: 'i9-b', isTruth: true,  text: { en: "Hezekiah spread Sennacherib's letter before the LORD in the temple and prayed.", fr: "Ézéchias étendit la lettre de Sennachérib devant l'Éternel dans le temple et pria." } },
      { id: 'i9-c', isTruth: true,  text: { en: "An angel of the LORD struck down 185,000 Assyrian soldiers in their camp overnight.", fr: "Un ange de l'Éternel frappa 185 000 soldats assyriens dans leur camp en une nuit." } },
      { id: 'i9-d', isTruth: false, text: { en: "Sennacherib was killed in battle after his army was destroyed outside Jerusalem.", fr: "Sennachérib fut tué au combat après la destruction de son armée devant Jérusalem." } },
    ],
    explanation: { en: "Sennacherib returned to Nineveh after his army was destroyed. He was later assassinated by his own sons while worshiping in the temple of his god Nisrok (2 Kings 19:36-37).", fr: "Sennachérib retourna à Ninive après la destruction de son armée. Il fut ensuite assassiné par ses propres fils pendant qu'il adorait dans le temple de son dieu Nisroc (2 Rois 19:36-37)." },
    didYouKnow: { en: "Hezekiah spread Sennacherib's threatening letter before the LORD in the temple and prayed for deliverance.", fr: "Ézéchias déploya devant l’Éternel, dans le temple, la lettre menaçante de Sennachérib et pria pour être délivré." }

  },
  {
    id: 'i10', levelNumber: 10, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Fall of Jerusalem to Babylon", fr: "La Chute de Jérusalem à Babylone" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i10-a', isTruth: true,  text: { en: "Nebuchadnezzar of Babylon destroyed Jerusalem and the temple of Solomon.", fr: "Nébucadnetsar de Babylone détruisit Jérusalem et le temple de Salomon." } },
      { id: 'i10-b', isTruth: true,  text: { en: "Most of the people of Judah were taken into exile in Babylon.", fr: "La plupart des habitants de Juda furent emmenés en exil à Babylone." } },
      { id: 'i10-c', isTruth: true,  text: { en: "Jerusalem fell after a prolonged siege during the reign of King Zedekiah.", fr: "Jérusalem tomba après un long siège sous le règne du roi Sédécias." } },
      { id: 'i10-d', isTruth: false, text: { en: "The prophet Ezekiel was among those taken to Babylon at the very first deportation under Jehoiakim.", fr: "Le prophète Ézéchiel faisait partie de ceux emmenés à Babylone lors de la toute première déportation sous Joïaqim." } },
    ],
    explanation: { en: "Ezekiel was taken to Babylon in the second deportation (597 BC), during the time of King Jehoiachin, not the first under Jehoiakim. Daniel was taken in the first deportation (605 BC) (Ezekiel 1:1-2).", fr: "Ézéchiel fut emmené à Babylone lors de la deuxième déportation (597 av. J.-C.), sous le roi Joïakin, et non lors de la première sous Joïaqim. Daniel fut emmené lors de la première déportation (605 av. J.-C.) (Ézéchiel 1:1-2)." },
    didYouKnow: { en: "After Jerusalem fell, the Babylonians burned the temple and carried many survivors into exile.", fr: "Après la chute de Jérusalem, les Babyloniens brûlèrent le temple et emmenèrent de nombreux survivants en exil." }

  },
  {
    id: 'i11', levelNumber: 11, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Nehemiah and the Wall", fr: "Néhémie et le Mur" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i11-a', isTruth: true,  text: { en: "Nehemiah was the cupbearer to King Artaxerxes of Persia before rebuilding Jerusalem's walls.", fr: "Néhémie était l'échanson du roi Artaxerxès de Perse avant de reconstruire les murs de Jérusalem." } },
      { id: 'i11-b', isTruth: true,  text: { en: "Sanballat and Tobiah mocked the Jews and tried to stop the rebuilding through intimidation and plots.", fr: "Sanballat et Tobiya se moquèrent des Juifs et tentèrent d'arrêter la reconstruction par l'intimidation et les complots." } },
      { id: 'i11-c', isTruth: true,  text: { en: "The wall of Jerusalem was completed in just fifty-two days.", fr: "Le mur de Jérusalem fut achevé en seulement cinquante-deux jours." } },
      { id: 'i11-d', isTruth: false, text: { en: "Nehemiah rebuilt the wall while carrying a sword in one hand at all times during construction.", fr: "Néhémie reconstruisit le mur tout en portant une épée dans une main en permanence pendant la construction." } },
    ],
    explanation: { en: "It was the builders — half of them — who held spears, shields, and bows while the other half worked. Nehemiah's aide carried a trumpet beside him to signal alerts. Workers used both hands to build but kept weapons ready (Nehemiah 4:16-18).", fr: "C'est la moitié des ouvriers qui tenaient des lances, des boucliers et des arcs pendant que l'autre moitié travaillait. L'aide de Néhémie portait une trompette à côté de lui pour donner l'alerte (Néhémie 4:16-18)." },
    didYouKnow: { en: "Nehemiah's builders worked with one hand and held a weapon with the other because of threats from their enemies.", fr: "Les bâtisseurs de Néhémie travaillaient d’une main et tenaient une arme de l’autre à cause des menaces de leurs ennemis." }

  },
  {
    id: 'i12', levelNumber: 12, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "John the Baptist", fr: "Jean-Baptiste" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i12-a', isTruth: true,  text: { en: "John the Baptist wore clothing made of camel's hair and a leather belt around his waist.", fr: "Jean-Baptiste portait des vêtements de poils de chameau et une ceinture de cuir autour de la taille." } },
      { id: 'i12-b', isTruth: true,  text: { en: "John ate locusts and wild honey in the wilderness.", fr: "Jean mangeait des sauterelles et du miel sauvage dans le désert." } },
      { id: 'i12-c', isTruth: true,  text: { en: "John was beheaded at the request of Herodias's daughter, who danced for Herod.", fr: "Jean fut décapité à la demande de la fille d'Hérodias, qui dansa devant Hérode." } },
      { id: 'i12-d', isTruth: false, text: { en: "John the Baptist was born six months after Jesus.", fr: "Jean-Baptiste est né six mois après Jésus." } },
    ],
    explanation: { en: "John the Baptist was born six months before Jesus, not after. When the angel Gabriel appeared to Mary, he noted that Elizabeth (John's mother) was already six months pregnant (Luke 1:26, 36).", fr: "Jean-Baptiste est né six mois avant Jésus, et non après. Lorsque l'ange Gabriel apparut à Marie, il mentionna qu'Élisabeth (la mère de Jean) était déjà enceinte de six mois (Luc 1:26, 36)." },
    didYouKnow: { en: "John the Baptist wore clothing made of camel's hair and ate locusts and wild honey.", fr: "Jean-Baptiste portait un vêtement de poil de chameau et se nourrissait de sauterelles et de miel sauvage." }

  },
  {
    id: 'i13', levelNumber: 13, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Jesus and Nicodemus", fr: "Jésus et Nicodème" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i13-a', isTruth: true,  text: { en: "Nicodemus was a Pharisee and member of the Jewish ruling council who came to Jesus at night.", fr: "Nicodème était un Pharisien et membre du Sanhédrin qui vint trouver Jésus de nuit." } },
      { id: 'i13-b', isTruth: true,  text: { en: "Jesus told Nicodemus that no one can see the kingdom of God unless they are born again.", fr: "Jésus dit à Nicodème que nul ne peut voir le royaume de Dieu s'il ne naît de nouveau." } },
      { id: 'i13-c', isTruth: true,  text: { en: "Nicodemus later helped provide myrrh and aloes for Jesus' burial.", fr: "Nicodème aida plus tard à fournir de la myrrhe et des aloès pour les funérailles de Jésus." } },
      { id: 'i13-d', isTruth: false, text: { en: "Nicodemus openly proclaimed faith in Jesus at the Jerusalem Council right after their night meeting.", fr: "Nicodème proclama ouvertement sa foi en Jésus au Sanhédrin de Jérusalem juste après leur réunion nocturne." } },
    ],
    explanation: { en: "After the night meeting, Nicodemus remained a secret disciple. His open defense of Jesus came later — he spoke cautiously to the Pharisees asking whether Jesus deserved a fair hearing (John 7:50-51).", fr: "Après la réunion nocturne, Nicodème demeura un disciple secret. Sa défense ouverte de Jésus vint plus tard — il parla prudemment aux Pharisiens en demandant si Jésus méritait une audience équitable (Jean 7:50-51)." },
    didYouKnow: { en: "Nicodemus later defended fair treatment for Jesus and helped prepare Jesus' body for burial.", fr: "Nicodème défendit plus tard un traitement équitable pour Jésus et participa à la préparation de son corps pour l’ensevelissement." }

  },
  {
    id: 'i14', levelNumber: 14, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Woman at the Well", fr: "La Femme au Puits" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i14-a', isTruth: true,  text: { en: "Jesus spoke to a Samaritan woman at Jacob's Well in the region of Samaria.", fr: "Jésus s'entretint avec une femme samaritaine au puits de Jacob dans la région de Samarie." } },
      { id: 'i14-b', isTruth: true,  text: { en: "Jesus told the woman He could give her 'living water' so she would never thirst again.", fr: "Jésus dit à la femme qu'il pourrait lui donner 'l'eau vive' afin qu'elle n'ait plus jamais soif." } },
      { id: 'i14-c', isTruth: true,  text: { en: "Jesus revealed that the woman had had five husbands and the man she was with was not her husband.", fr: "Jésus révéla que la femme avait eu cinq maris et que l'homme qu'elle avait n'était pas son mari." } },
      { id: 'i14-d', isTruth: false, text: { en: "The Samaritan woman kept Jesus' identity secret and told no one in her town about Him.", fr: "La femme samaritaine garda secrète l'identité de Jésus et n'en parla à personne dans sa ville." } },
    ],
    explanation: { en: "The woman immediately left her water jar, went back to town, and told everyone. She said, 'Come, see a man who told me everything I ever did. Could this be the Messiah?' (John 4:28-29).", fr: "La femme laissa aussitôt sa cruche, retourna en ville et le dit à tout le monde. Elle dit : 'Venez voir un homme qui m'a dit tout ce que j'ai fait. Ne serait-ce pas le Messie ?' (Jean 4:28-29)." },
    didYouKnow: { en: "The Samaritan woman left her water jar behind when she went into town to tell others about Jesus.", fr: "La femme samaritaine laissa sa cruche lorsqu’elle alla dans la ville parler de Jésus aux autres." }

  },
  {
    id: 'i15', levelNumber: 15, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Ananias and Sapphira", fr: "Ananias et Saphira" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i15-a', isTruth: true,  text: { en: "Ananias and his wife Sapphira sold a piece of property and secretly kept part of the money.", fr: "Ananias et sa femme Saphira vendirent un terrain et gardèrent secrètement une partie de l'argent." } },
      { id: 'i15-b', isTruth: true,  text: { en: "Peter told Ananias that he had not lied to men but to God, and Ananias fell down and died.", fr: "Pierre dit à Ananias qu'il n'avait pas menti aux hommes mais à Dieu, et Ananias tomba et mourut." } },
      { id: 'i15-c', isTruth: true,  text: { en: "Sapphira came in three hours later, unaware of what had happened, and also lied to Peter.", fr: "Saphira entra trois heures plus tard, ignorant ce qui s'était passé, et mentit aussi à Pierre." } },
      { id: 'i15-d', isTruth: false, text: { en: "Peter convicted them because they gave no money at all to the church.", fr: "Pierre les condamna parce qu'ils n'avaient donné aucun argent à l'Église." } },
    ],
    explanation: { en: "Peter specifically said Ananias was free to keep all the money or give any amount. The sin was lying about the amount — claiming to give all of it when they kept some (Acts 5:4).", fr: "Pierre dit explicitement qu'Ananias était libre de garder tout l'argent ou d'en donner n'importe quelle somme. Le péché était de mentir sur le montant — prétendre tout donner alors qu'ils en gardaient une partie (Actes 5:4)." },
    didYouKnow: { en: "Ananias and Sapphira were judged separately, about three hours apart, after lying about the proceeds of their property.", fr: "Ananias et Saphira furent jugés séparément, à environ trois heures d’intervalle, après avoir menti au sujet du prix de leur propriété." }

  },
  {
    id: 'i16', levelNumber: 16, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Stephen's Martyrdom", fr: "Le Martyre d'Étienne" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i16-a', isTruth: true,  text: { en: "Stephen was a man full of faith and the Holy Spirit, chosen as one of the first seven deacons.", fr: "Étienne était un homme plein de foi et du Saint-Esprit, choisi parmi les sept premiers diacres." } },
      { id: 'i16-b', isTruth: true,  text: { en: "Stephen said he saw heaven open and the Son of Man standing at the right hand of God.", fr: "Étienne dit qu'il vit le ciel ouvert et le Fils de l'homme debout à la droite de Dieu." } },
      { id: 'i16-c', isTruth: true,  text: { en: "As Stephen was being stoned, he prayed 'Lord, do not hold this sin against them.'", fr: "Pendant qu'on lapidait Étienne, il pria : 'Seigneur, ne leur impute pas ce péché.'" } },
      { id: 'i16-d', isTruth: false, text: { en: "Saul of Tarsus personally threw stones at Stephen during the execution.", fr: "Saül de Tarse lança personnellement des pierres sur Étienne lors de l'exécution." } },
    ],
    explanation: { en: "Saul did not personally throw stones. He stood nearby and approved of the execution, guarding the cloaks of those who were stoning Stephen. His role was as consenting witness, not as a stone-thrower (Acts 7:58; 8:1).", fr: "Saül ne lança pas personnellement de pierres. Il se tenait nearby et approuvait l'exécution, gardant les manteaux de ceux qui lapidaient Étienne. Son rôle était celui d'un témoin consentant, non d'un lapideur (Actes 7:58 ; 8:1)." },
    didYouKnow: { en: "Stephen saw the glory of God and Jesus standing at God's right hand just before his death.", fr: "Juste avant sa mort, Étienne vit la gloire de Dieu et Jésus debout à la droite de Dieu." }

  },
  {
    id: 'i17', levelNumber: 17, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Saul's Conversion", fr: "La Conversion de Saül" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i17-a', isTruth: true,  text: { en: "Saul was on his way to Damascus to arrest Christians when a light from heaven flashed around him.", fr: "Saül se rendait à Damas pour arrêter des chrétiens quand une lumière venant du ciel l'enveloppa." } },
      { id: 'i17-b', isTruth: true,  text: { en: "Jesus said to Saul, 'I am Jesus, whom you are persecuting.'", fr: "Jésus dit à Saül : 'Je suis Jésus que tu persécutes.'" } },
      { id: 'i17-c', isTruth: true,  text: { en: "Saul was blind for three days and neither ate nor drank anything.", fr: "Saül fut aveugle pendant trois jours et ne mangea ni ne but rien." } },
      { id: 'i17-d', isTruth: false, text: { en: "Peter came to Damascus and restored Saul's sight.", fr: "Pierre vint à Damas et restaura la vue de Saül." } },
    ],
    explanation: { en: "It was a disciple named Ananias (not Peter) who came to Saul in Damascus. God sent Ananias in a vision to lay hands on Saul and restore his sight (Acts 9:10-18).", fr: "C'est un disciple nommé Ananias (et non Pierre) qui vint trouver Saül à Damas. Dieu envoya Ananias en vision pour imposer les mains à Saül et lui rendre la vue (Actes 9:10-18)." },
    didYouKnow: { en: "After Saul's conversion, Ananias addressed him as 'Brother Saul' before his sight was restored.", fr: "Après la conversion de Saül, Ananias l’appela « frère Saül » avant que sa vue ne soit rétablie." }

  },
  {
    id: 'i18', levelNumber: 18, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Peter and Cornelius", fr: "Pierre et Corneille" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i18-a', isTruth: true,  text: { en: "Cornelius was a Roman centurion described as devout, God-fearing, and generous to the poor.", fr: "Corneille était un centurion romain décrit comme pieux, craignant Dieu et généreux envers les pauvres." } },
      { id: 'i18-b', isTruth: true,  text: { en: "Peter had a vision of a sheet filled with unclean animals, and God told him not to call anything impure.", fr: "Pierre eut une vision d'un drap rempli d'animaux impurs, et Dieu lui dit de ne rien appeler impur." } },
      { id: 'i18-c', isTruth: true,  text: { en: "The Holy Spirit fell on Cornelius and his household while Peter was still speaking.", fr: "Le Saint-Esprit tomba sur Corneille et sa maison pendant que Pierre parlait encore." } },
      { id: 'i18-d', isTruth: false, text: { en: "Peter's vision occurred only once before he understood its meaning.", fr: "La vision de Pierre ne se produisit qu'une seule fois avant qu'il en comprenne le sens." } },
    ],
    explanation: { en: "The sheet with animals was shown to Peter three times — not once. Only after the third repetition did Peter wonder what the vision meant (Acts 10:16).", fr: "Le drap avec les animaux fut montré à Pierre trois fois — pas une seule. C'est seulement après la troisième répétition que Pierre se demanda ce que la vision signifiait (Actes 10:16)." },
    didYouKnow: { en: "Cornelius was a Roman centurion of the Italian Regiment who was known for prayer and generosity.", fr: "Corneille était un centurion romain de la cohorte italienne, connu pour ses prières et sa générosité." }

  },
  {
    id: 'i19', levelNumber: 19, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Paul and Silas in Philippi", fr: "Paul et Silas à Philippes" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i19-a', isTruth: true,  text: { en: "Paul and Silas were beaten with rods and thrown into prison in Philippi.", fr: "Paul et Silas furent battus de verges et jetés en prison à Philippes." } },
      { id: 'i19-b', isTruth: true,  text: { en: "At midnight, Paul and Silas were praying and singing hymns to God when a violent earthquake shook the prison.", fr: "À minuit, Paul et Silas priaient et chantaient des cantiques quand un violent tremblement de terre ébranla la prison." } },
      { id: 'i19-c', isTruth: true,  text: { en: "The jailer was about to kill himself thinking all prisoners had escaped, but Paul stopped him.", fr: "Le geôlier allait se tuer pensant que tous les prisonniers s'étaient enfuis, mais Paul l'en empêcha." } },
      { id: 'i19-d', isTruth: false, text: { en: "Paul and Silas were jailed because they healed a blind man in the marketplace.", fr: "Paul et Silas furent emprisonnés parce qu'ils guérirent un aveugle sur la place du marché." } },
    ],
    explanation: { en: "Paul and Silas were jailed because Paul cast out a spirit of divination from a slave girl, which caused her owners to lose their income from fortune-telling. The owners dragged them before the magistrates (Acts 16:16-21).", fr: "Paul et Silas furent emprisonnés parce que Paul chassa un esprit de divination d'une esclave, privant ses maîtres de leur source de revenus. Ses maîtres les traînèrent devant les magistrats (Actes 16:16-21)." },
    didYouKnow: { en: "The Philippian jailer and his household were baptized after Paul and Silas spoke the word of the Lord to them.", fr: "Le geôlier de Philippes et sa famille furent baptisés après que Paul et Silas leur eurent annoncé la parole du Seigneur." }

  },
  {
    id: 'i20', levelNumber: 20, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Paul in Athens — the Areopagus", fr: "Paul à Athènes — l'Aréopage" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i20-a', isTruth: true,  text: { en: "Paul observed that Athens was full of idols, which provoked his spirit to speak out.", fr: "Paul observa qu'Athènes était remplie d'idoles, ce qui l'incita à s'exprimer." } },
      { id: 'i20-b', isTruth: true,  text: { en: "Paul used an altar inscribed 'TO AN UNKNOWN GOD' as the starting point of his sermon.", fr: "Paul utilisa un autel portant l'inscription 'AU DIEU INCONNU' comme point de départ de son discours." } },
      { id: 'i20-c', isTruth: true,  text: { en: "Paul told the Athenians that God does not live in temples built by human hands.", fr: "Paul dit aux Athéniens que Dieu n'habite pas dans des temples construits par des mains humaines." } },
      { id: 'i20-d', isTruth: false, text: { en: "Paul's speech at the Areopagus convinced the entire Athenian Council to believe in Christ.", fr: "Le discours de Paul à l'Aréopage convainquit l'ensemble du Conseil athénien de croire au Christ." } },
    ],
    explanation: { en: "Some sneered when Paul mentioned the resurrection; others wanted to hear more. A few believed, including Dionysius the Areopagite and a woman named Damaris — not the entire council (Acts 17:32-34).", fr: "Certains se moquèrent quand Paul mentionna la résurrection ; d'autres voulurent en entendre plus. Quelques-uns crurent, dont Denys l'Aréopagite et une femme nommée Damaris — pas l'ensemble du conseil (Actes 17:32-34)." },
    didYouKnow: { en: "Paul quoted Greek poets while speaking at the Areopagus, adapting his message to his Athenian audience.", fr: "Paul cita des poètes grecs lors de son discours à l’Aréopage, adaptant son message à son auditoire athénien." }

  },
  {
    id: 'i21', levelNumber: 21, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Paul's Shipwreck", fr: "Le Naufrage de Paul" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i21-a', isTruth: true,  text: { en: "Paul warned the crew before the voyage that the journey would be disastrous, but he was not heeded.", fr: "Paul avertit l'équipage avant le voyage que le trajet serait désastreux, mais on ne l'écouta pas." } },
      { id: 'i21-b', isTruth: true,  text: { en: "An angel appeared to Paul on the ship and told him he must stand before Caesar and all on board would be saved.", fr: "Un ange apparut à Paul sur le bateau et lui dit qu'il devait comparaître devant César et que tous à bord seraient sauvés." } },
      { id: 'i21-c', isTruth: true,  text: { en: "The ship ran aground on the island of Malta, and all 276 people on board survived.", fr: "Le bateau s'échoua sur l'île de Malte, et les 276 personnes à bord survécurent toutes." } },
      { id: 'i21-d', isTruth: false, text: { en: "Paul was bitten by a poisonous snake on Malta and immediately fell dead.", fr: "Paul fut mordu par un serpent venimeux à Malte et tomba mort immédiatement." } },
    ],
    explanation: { en: "Paul was bitten by a snake but did not die. The islanders expected him to swell up and drop dead, but when nothing happened they concluded he was a god (Acts 28:3-6).", fr: "Paul fut mordu par un serpent mais ne mourut pas. Les habitants s'attendaient à le voir gonfler et tomber mort, mais rien ne se passa et ils conclurent qu'il était un dieu (Actes 28:3-6)." },
    didYouKnow: { en: "All 276 people aboard Paul's ship survived the wreck, exactly as Paul had been told.", fr: "Les 276 personnes à bord du navire de Paul survécurent au naufrage, exactement comme cela lui avait été annoncé." }

  },
  {
    id: 'i22', levelNumber: 22, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Isaiah the Prophet", fr: "Le Prophète Ésaïe" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i22-a', isTruth: true,  text: { en: "Isaiah saw a vision of God seated on a high and exalted throne, surrounded by seraphim.", fr: "Ésaïe vit une vision de Dieu assis sur un trône élevé et sublime, entouré de séraphins." } },
      { id: 'i22-b', isTruth: true,  text: { en: "A seraph touched Isaiah's lips with a live coal from the altar to cleanse his sin.", fr: "Un séraphin toucha les lèvres d'Ésaïe avec un charbon ardent pris sur l'autel pour purifier son péché." } },
      { id: 'i22-c', isTruth: true,  text: { en: "Isaiah prophesied during the reigns of Uzziah, Jotham, Ahaz, and Hezekiah.", fr: "Ésaïe prophétisa sous les règnes d'Ozias, de Yotam, d'Achaz et d'Ézéchias." } },
      { id: 'i22-d', isTruth: false, text: { en: "Isaiah responded to God's call by saying 'I am not worthy; send someone else.'", fr: "Ésaïe répondit à l'appel de Dieu en disant : 'Je n'en suis pas digne ; envoie quelqu'un d'autre.'" } },
    ],
    explanation: { en: "Isaiah responded, 'Here am I. Send me!' — a willing and immediate response. It was Moses who famously resisted and said 'Please send someone else' (Isaiah 6:8; Exodus 4:13).", fr: "Ésaïe répondit : 'Me voici, envoie-moi !' — une réponse prompte et volontaire. C'est Moïse qui résista en disant 'De grâce, envoie quelqu'un d'autre' (Ésaïe 6:8 ; Exode 4:13)." },
    didYouKnow: { en: "Isaiah's call vision included seraphim crying, 'Holy, holy, holy,' before the throne of the LORD.", fr: "La vision de l’appel d’Ésaïe présente des séraphins proclamant : « Saint, saint, saint » devant le trône de l’Éternel." }

  },
  {
    id: 'i23', levelNumber: 23, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Jeremiah the Prophet", fr: "Le Prophète Jérémie" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i23-a', isTruth: true,  text: { en: "God told Jeremiah He had known him and set him apart before he was born.", fr: "Dieu dit à Jérémie qu'Il le connaissait et l'avait consacré avant même sa naissance." } },
      { id: 'i23-b', isTruth: true,  text: { en: "Jeremiah is called 'the weeping prophet' because of his laments over Jerusalem's destruction.", fr: "Jérémie est appelé 'le prophète qui pleure' en raison de ses lamentations sur la destruction de Jérusalem." } },
      { id: 'i23-c', isTruth: true,  text: { en: "Jeremiah was thrown into a muddy cistern (pit) by officials who wanted to silence him.", fr: "Jérémie fut jeté dans une citerne boueuse par des fonctionnaires qui voulaient le réduire au silence." } },
      { id: 'i23-d', isTruth: false, text: { en: "Jeremiah eagerly accepted God's call to be a prophet to the nations without hesitation.", fr: "Jérémie accepta avec enthousiasme l'appel de Dieu à être prophète des nations sans hésitation." } },
    ],
    explanation: { en: "Jeremiah initially resisted, saying 'I do not know how to speak; I am too young.' God had to reassure him and touch his mouth. His calling came with protest, not enthusiasm (Jeremiah 1:6-9).", fr: "Jérémie résista d'abord, disant : 'Je ne sais pas parler ; je suis encore jeune.' Dieu dut le rassurer et toucher sa bouche. Sa vocation fut reçue avec protestation, non avec enthousiasme (Jérémie 1:6-9)." },
    didYouKnow: { en: "Jeremiah was told by God that he had been known and set apart before he was born.", fr: "Dieu dit à Jérémie qu’il l’avait connu et consacré avant sa naissance." }

  },
  {
    id: 'i24', levelNumber: 24, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Parable of the Ten Virgins", fr: "La Parabole des Dix Vierges" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i24-a', isTruth: true,  text: { en: "Five virgins were wise and five were foolish, based on whether they brought extra oil.", fr: "Cinq vierges étaient sages et cinq étaient insensées, selon qu'elles avaient apporté de l'huile supplémentaire ou non." } },
      { id: 'i24-b', isTruth: true,  text: { en: "The bridegroom was delayed, and all ten virgins fell asleep waiting.", fr: "Le marié tarda, et les dix vierges s'endormirent toutes en attendant." } },
      { id: 'i24-c', isTruth: true,  text: { en: "When the bridegroom arrived at midnight, the foolish virgins had run out of oil.", fr: "Quand le marié arriva à minuit, les vierges insensées n'avaient plus d'huile." } },
      { id: 'i24-d', isTruth: false, text: { en: "The wise virgins shared their extra oil with the foolish virgins so all could enter together.", fr: "Les vierges sages partagèrent leur huile supplémentaire avec les vierges insensées pour qu'elles entrent toutes ensemble." } },
    ],
    explanation: { en: "The wise virgins refused to share, saying there might not be enough for both. They told the foolish ones to go buy their own oil. By the time they returned, the door was shut (Matthew 25:9-10).", fr: "Les vierges sages refusèrent de partager, craignant de manquer pour tout le monde. Elles dirent aux insensées d'aller en acheter. À leur retour, la porte était fermée (Matthieu 25:9-10)." },
    didYouKnow: { en: "In the parable, the wise virgins refused to give away their oil because there might not be enough for everyone.", fr: "Dans la parabole, les vierges sages refusèrent de partager leur huile, car il risquait de ne pas y en avoir assez pour toutes." }

  },
  {
    id: 'i25', levelNumber: 25, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Rich Young Ruler", fr: "Le Jeune Homme Riche" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i25-a', isTruth: true,  text: { en: "A rich young man asked Jesus what he must do to inherit eternal life.", fr: "Un jeune homme riche demanda à Jésus ce qu'il devait faire pour hériter de la vie éternelle." } },
      { id: 'i25-b', isTruth: true,  text: { en: "Jesus told the man to sell everything, give to the poor, and follow Him.", fr: "Jésus dit à l'homme de tout vendre, de donner aux pauvres et de le suivre." } },
      { id: 'i25-c', isTruth: true,  text: { en: "The young man went away sad because he had great wealth.", fr: "Le jeune homme s'en alla tout triste, car il possédait de grandes richesses." } },
      { id: 'i25-d', isTruth: false, text: { en: "Jesus said it is impossible for a rich man to enter the kingdom of God.", fr: "Jésus dit qu'il est impossible à un homme riche d'entrer dans le royaume de Dieu." } },
    ],
    explanation: { en: "Jesus said it is hard (not impossible) for a rich man to enter the kingdom of God. He then said 'With man this is impossible, but with God all things are possible' — implying it can happen through God's grace (Matthew 19:23-26).", fr: "Jésus dit qu'il est difficile (non impossible) pour un riche d'entrer dans le royaume de Dieu. Il ajouta : 'Aux hommes cela est impossible, mais à Dieu tout est possible' — impliquant que cela peut se produire par la grâce de Dieu (Matthieu 19:23-26)." },
    didYouKnow: { en: "Mark records that Jesus looked at the rich young man and loved him before challenging him about his possessions.", fr: "Marc rapporte que Jésus regarda le jeune homme riche et l’aima avant de le mettre au défi au sujet de ses biens." }

  },
  {
    id: 'i26', levelNumber: 26, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Elisha's Miracles", fr: "Les Miracles d'Élisée" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i26-a', isTruth: true,  text: { en: "Elisha parted the Jordan River by striking it with Elijah's cloak.", fr: "Élisée fendit le Jourdain en le frappant avec le manteau d'Élie." } },
      { id: 'i26-b', isTruth: true,  text: { en: "Elisha multiplied a widow's small jar of olive oil to fill many containers.", fr: "Élisée multiplia la petite cruche d'huile d'olive d'une veuve pour remplir de nombreux récipients." } },
      { id: 'i26-c', isTruth: true,  text: { en: "Elisha raised the Shunammite woman's son from the dead.", fr: "Élisée ressuscita le fils de la femme sunamite." } },
      { id: 'i26-d', isTruth: false, text: { en: "Elisha received a double portion of Elijah's spirit when Elijah was taken up in a chariot of fire.", fr: "Élisée reçut une double portion de l'esprit d'Élie au moment où Élie fut enlevé dans un char de feu." } },
    ],
    explanation: { en: "Elisha requested a double portion of Elijah's spirit and was told he would receive it if he saw Elijah taken up. He did see it, confirming the double portion. But 'receiving' it happened before the departure, conditional on witnessing it (2 Kings 2:9-12).", fr: "Élisée demanda une double portion de l'esprit d'Élie et fut informé qu'il la recevrait s'il voyait Élie partir. Il le vit, confirmant la double portion. Mais 'recevoir' intervint avant le départ, à condition de le voir (2 Rois 2:9-12)." },
    didYouKnow: { en: "Elisha performed a miracle in which an iron axe head floated after he threw a stick into the water.", fr: "Élisée accomplit un miracle au cours duquel un fer de hache remonta à la surface après qu’il eut jeté un morceau de bois dans l’eau." }

  },
  {
    id: 'i27', levelNumber: 27, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Mary and Martha", fr: "Marie et Marthe" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i27-a', isTruth: true,  text: { en: "Martha was distracted by all the preparations while Mary sat at Jesus' feet listening.", fr: "Marthe était absorbée par les préparatifs tandis que Marie était assise aux pieds de Jésus, l'écoutant." } },
      { id: 'i27-b', isTruth: true,  text: { en: "Martha complained to Jesus that Mary had left her to do all the work alone.", fr: "Marthe se plaignit à Jésus que Marie l'avait laissée seule à tout faire." } },
      { id: 'i27-c', isTruth: true,  text: { en: "Jesus told Martha that Mary had chosen 'what is better' and it would not be taken from her.", fr: "Jésus dit à Marthe que Marie avait choisi 'la meilleure part' et qu'elle ne lui serait pas ôtée." } },
      { id: 'i27-d', isTruth: false, text: { en: "This story of Mary and Martha is recorded only in the Gospel of John.", fr: "Cette histoire de Marie et Marthe n'est rapportée que dans l'Évangile de Jean." } },
    ],
    explanation: { en: "The Mary-Martha serving story is recorded in Luke 10:38-42, not John. The Gospel of John features Mary and Martha in the story of Lazarus (John 11) and the anointing at Bethany (John 12).", fr: "L'histoire de Marie et Marthe servant est rapportée dans Luc 10:38-42, pas dans Jean. L'Évangile de Jean présente Marie et Marthe dans l'histoire de Lazare (Jean 11) et l'onction à Béthanie (Jean 12)." },
    didYouKnow: { en: "Mary later anointed Jesus' feet with perfume and wiped them with her hair, according to John 12.", fr: "Marie oignit plus tard les pieds de Jésus avec du parfum et les essuya avec ses cheveux, selon Jean 12." }

  },
  {
    id: 'i28', levelNumber: 28, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Parable of the Sower", fr: "La Parabole du Semeur" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i28-a', isTruth: true,  text: { en: "Some seed fell on the path and birds ate it up, representing those who do not understand the word.", fr: "Une partie de la semence tomba sur le chemin et les oiseaux la mangèrent, représentant ceux qui ne comprennent pas la parole." } },
      { id: 'i28-b', isTruth: true,  text: { en: "Seed on rocky ground sprung up quickly but withered because it had no root.", fr: "La semence sur le sol rocailleux leva rapidement mais sécha faute de racines." } },
      { id: 'i28-c', isTruth: true,  text: { en: "Seed among thorns was choked by the worries of life and the deceitfulness of wealth.", fr: "La semence parmi les épines fut étouffée par les soucis de la vie et la séduction des richesses." } },
      { id: 'i28-d', isTruth: false, text: { en: "Good soil produced a single harvest of sixty times what was sown.", fr: "Le bon sol produisit une récolte unique de soixante fois ce qui avait été semé." } },
    ],
    explanation: { en: "Good soil produced a crop of 100, 60, or 30 times what was sown — not a single fixed amount. The three different yields show varying levels of fruitfulness among true believers (Matthew 13:8).", fr: "Le bon sol produisit une récolte de 100, 60 ou 30 fois ce qui avait été semé — pas un seul montant fixe. Les trois rendements différents montrent des niveaux variés de fécondité parmi les vrais croyants (Matthieu 13:8)." },
    didYouKnow: { en: "Jesus explained that the seed in the parable represents the word, while the different soils represent different responses to it.", fr: "Jésus expliqua que la semence représente la parole, tandis que les différents terrains représentent diverses manières de la recevoir." }

  },
  {
    id: 'i29', levelNumber: 29, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Job's Restoration", fr: "La Restauration de Job" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i29-a', isTruth: true,  text: { en: "God spoke to Job out of a whirlwind and challenged him with a series of unanswerable questions.", fr: "Dieu parla à Job du sein d'un tourbillon et le défia avec une série de questions sans réponse." } },
      { id: 'i29-b', isTruth: true,  text: { en: "God rebuked Job's three friends, saying they had not spoken the truth about Him as Job had.", fr: "Dieu réprimanda les trois amis de Job, disant qu'ils n'avaient pas parlé de Lui avec justesse, comme Job l'avait fait." } },
      { id: 'i29-c', isTruth: true,  text: { en: "God restored Job's fortunes and gave him twice as much as he had before.", fr: "Dieu restaura la fortune de Job et lui donna deux fois plus qu'auparavant." } },
      { id: 'i29-d', isTruth: false, text: { en: "Job received exactly the same number of children he had before his suffering.", fr: "Job reçut exactement le même nombre d'enfants qu'avant sa souffrance." } },
    ],
    explanation: { en: "Job received the same number of children — ten — but they were new children, not the same ones restored to life. His wealth doubled, but his children were new gifts, not resurrection of the old (Job 42:12-13).", fr: "Job reçut le même nombre d'enfants — dix — mais c'étaient de nouveaux enfants, pas les mêmes ressuscités. Sa richesse doubla, mais ses enfants étaient de nouveaux dons, non une résurrection des anciens (Job 42:12-13)." },
    didYouKnow: { en: "After Job's ordeal, his brothers, sisters, and former acquaintances came to comfort him and brought gifts.", fr: "Après l’épreuve de Job, ses frères, ses sœurs et ses anciennes connaissances vinrent le consoler et lui apportèrent des présents." }

  },
  {
    id: 'i30', levelNumber: 30, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Book of Psalms", fr: "Le Livre des Psaumes" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i30-a', isTruth: true,  text: { en: "The Psalms contain 150 songs, poems, and prayers.", fr: "Le Psautier contient 150 chants, poèmes et prières." } },
      { id: 'i30-b', isTruth: true,  text: { en: "The shortest chapter in the Bible is Psalm 117, with only two verses.", fr: "Le chapitre le plus court de la Bible est le Psaume 117, avec seulement deux versets." } },
      { id: 'i30-c', isTruth: true,  text: { en: "Psalm 119 is the longest chapter in the Bible, with 176 verses praising God's word.", fr: "Le Psaume 119 est le chapitre le plus long de la Bible, avec 176 versets louant la Parole de Dieu." } },
      { id: 'i30-d', isTruth: false, text: { en: "David wrote all 150 Psalms in the Bible.", fr: "David a écrit les 150 psaumes de la Bible." } },
    ],
    explanation: { en: "David wrote many Psalms (around 73) but not all of them. Other authors include Asaph, the Sons of Korah, Solomon, Moses, Heman, and Ethan. Many are anonymous (Psalm 90 is by Moses).", fr: "David a écrit de nombreux psaumes (environ 73), mais pas tous. D'autres auteurs incluent Asaph, les fils de Coré, Salomon, Moïse, Héman et Éthan. Beaucoup sont anonymes (le Psaume 90 est de Moïse)." },
    didYouKnow: { en: "Psalm 119 is the longest chapter in the Bible and is arranged as an alphabetic acrostic in Hebrew.", fr: "Le Psaume 119 est le plus long chapitre de la Bible et suit la structure d’un acrostiche alphabétique en hébreu." }

  },
  {
    id: 'i31', levelNumber: 31, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Proverbs and Solomon", fr: "Les Proverbes et Salomon" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i31-a', isTruth: true,  text: { en: "The book of Proverbs begins: 'The fear of the LORD is the beginning of wisdom.'", fr: "Le livre des Proverbes commence par : 'La crainte de l'Éternel est le commencement de la sagesse.'" } },
      { id: 'i31-b', isTruth: true,  text: { en: "Proverbs 31 describes a 'wife of noble character' and is a famous passage about virtue.", fr: "Proverbes 31 décrit une 'femme vaillante' et est un passage célèbre sur la vertu." } },
      { id: 'i31-c', isTruth: true,  text: { en: "The book of Proverbs includes contributions from King Lemuel and Agur, son of Jakeh.", fr: "Le livre des Proverbes comprend des contributions du roi Lemuel et d'Agur, fils de Yakeh." } },
      { id: 'i31-d', isTruth: false, text: { en: "Solomon wrote the book of Proverbs alone, and it is attributed entirely to him.", fr: "Salomon écrivit le livre des Proverbes seul, et il lui est entièrement attribué." } },
    ],
    explanation: { en: "Proverbs is not written by Solomon alone. It includes sayings of Agur (Proverbs 30), words of King Lemuel (Proverbs 31), and collections edited by Hezekiah's men. Solomon is the primary contributor but not the sole author (Proverbs 25:1; 30:1; 31:1).", fr: "Les Proverbes ne sont pas écrits par Salomon seul. Ils comprennent les paroles d'Agur (Proverbes 30), du roi Lemuel (Proverbes 31) et des collections éditées par les hommes d'Ézéchias. Salomon est le principal contributeur mais pas le seul auteur (Proverbes 25:1 ; 30:1 ; 31:1)." },
    didYouKnow: { en: "Proverbs names Agur and King Lemuel as contributors in addition to collections associated with Solomon.", fr: "Le livre des Proverbes nomme Agur et le roi Lemuel parmi ses contributeurs, en plus des collections associées à Salomon." }

  },
  {
    id: 'i32', levelNumber: 32, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Triumphal Entry — Details", fr: "L'Entrée Triomphale — Détails" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i32-a', isTruth: true,  text: { en: "Jesus sent two disciples to fetch a donkey and colt tied in a nearby village.", fr: "Jésus envoya deux disciples chercher une ânesse et un ânon attachés dans un village voisin." } },
      { id: 'i32-b', isTruth: true,  text: { en: "Matthew records that Jesus rode on a donkey with a colt, fulfilling Zechariah 9:9.", fr: "Matthieu rapporte que Jésus monta sur une ânesse avec un ânon, accomplissant Zacharie 9:9." } },
      { id: 'i32-c', isTruth: true,  text: { en: "The crowd spread palm branches and cloaks on the road and shouted praises to Jesus.", fr: "La foule étendit des branches de palmiers et des manteaux sur la route et cria des louanges à Jésus." } },
      { id: 'i32-d', isTruth: false, text: { en: "Jesus entered Jerusalem on a white horse, symbolizing His role as conquering King.", fr: "Jésus entra dans Jérusalem sur un cheval blanc, symbolisant son rôle de Roi conquérant." } },
    ],
    explanation: { en: "Jesus entered on a donkey (or colt), symbolizing peace, humility, and servanthood — not on a white horse. The white horse appears in Revelation 19 as a symbol for His future return in glory (Zechariah 9:9; Matthew 21:5).", fr: "Jésus entra sur un âne (ou ânon), symbolisant la paix, l'humilité et le service — pas sur un cheval blanc. Le cheval blanc apparaît dans Apocalypse 19 comme symbole de son futur retour en gloire (Zacharie 9:9 ; Matthieu 21:5)." },
    didYouKnow: { en: "Jesus' entry into Jerusalem intentionally echoed Zechariah's prophecy of a king coming humbly on a donkey.", fr: "L’entrée de Jésus à Jérusalem faisait écho à la prophétie de Zacharie annonçant un roi venant humblement sur un âne." }

  },
  {
    id: 'i33', levelNumber: 33, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Jesus Cleanses the Temple", fr: "Jésus Purifie le Temple" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i33-a', isTruth: true,  text: { en: "Jesus drove out those who were buying and selling in the temple courts.", fr: "Jésus chassa ceux qui achetaient et vendaient dans le parvis du temple." } },
      { id: 'i33-b', isTruth: true,  text: { en: "Jesus overturned the tables of the money-changers and the benches of those selling doves.", fr: "Jésus renversa les tables des changeurs et les sièges de ceux qui vendaient des colombes." } },
      { id: 'i33-c', isTruth: true,  text: { en: "Jesus quoted Isaiah 56:7, calling the temple 'a house of prayer for all nations.'", fr: "Jésus cita Ésaïe 56:7, appelant le temple 'une maison de prière pour toutes les nations.'" } },
      { id: 'i33-d', isTruth: false, text: { en: "Jesus cleansed the temple only once, according to all four Gospels.", fr: "Jésus purifia le temple une seule fois, selon les quatre Évangiles." } },
    ],
    explanation: { en: "Most scholars believe Jesus cleansed the temple twice. John 2 records a cleansing at the beginning of His ministry; Matthew, Mark, and Luke record one near the end. The details differ enough to suggest two separate events.", fr: "La plupart des érudits croient que Jésus purifia le temple deux fois. Jean 2 rapporte une purification au début de son ministère ; Matthieu, Marc et Luc en rapportent une à la fin. Les détails diffèrent suffisamment pour suggérer deux événements distincts." },
    didYouKnow: { en: "After cleansing the temple, Jesus healed blind and lame people who came to him there.", fr: "Après avoir purifié le temple, Jésus y guérit des aveugles et des boiteux qui vinrent à lui." }

  },
  {
    id: 'i34', levelNumber: 34, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Philip and the Ethiopian Eunuch", fr: "Philippe et l'Eunuque Éthiopien" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i34-a', isTruth: true,  text: { en: "An angel of the Lord told Philip to go south on the desert road from Jerusalem to Gaza.", fr: "Un ange du Seigneur dit à Philippe d'aller vers le sud sur la route du désert menant de Jérusalem à Gaza." } },
      { id: 'i34-b', isTruth: true,  text: { en: "The Ethiopian official was reading aloud from the book of Isaiah when Philip found him.", fr: "Le fonctionnaire éthiopien lisait à voix haute le livre d'Ésaïe quand Philippe le trouva." } },
      { id: 'i34-c', isTruth: true,  text: { en: "Philip baptized the Ethiopian in water they found along the road.", fr: "Philippe baptisa l'Éthiopien dans l'eau qu'ils trouvèrent au bord de la route." } },
      { id: 'i34-d', isTruth: false, text: { en: "After the baptism, Philip walked alongside the chariot to continue teaching the Ethiopian for several more hours.", fr: "Après le baptême, Philippe marcha à côté du char pour continuer à enseigner l'Éthiopien pendant plusieurs heures." } },
    ],
    explanation: { en: "After the baptism, the Spirit of the Lord suddenly took Philip away, and the Ethiopian saw him no more. Philip appeared at Azotus and traveled preaching to all the towns until he reached Caesarea (Acts 8:39-40).", fr: "Après le baptême, l'Esprit du Seigneur enleva soudainement Philippe, et l'Éthiopien ne le vit plus. Philippe se trouva à Azot et continua à prêcher jusqu'à ce qu'il arrive à Césarée (Actes 8:39-40)." },
    didYouKnow: { en: "The Ethiopian official was reading from Isaiah when Philip approached his chariot.", fr: "Le fonctionnaire éthiopien lisait le livre d’Ésaïe lorsque Philippe s’approcha de son char." }

  },
  {
    id: 'i35', levelNumber: 35, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Thomas the Apostle", fr: "Thomas l'Apôtre" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i35-a', isTruth: true,  text: { en: "Thomas was absent when Jesus first appeared to the other disciples after the Resurrection.", fr: "Thomas était absent lorsque Jésus apparut pour la première fois aux autres disciples après la Résurrection." } },
      { id: 'i35-b', isTruth: true,  text: { en: "Thomas said he would not believe unless he saw and touched the nail marks and Jesus' side.", fr: "Thomas dit qu'il ne croirait pas à moins de voir et de toucher les marques des clous et le côté de Jésus." } },
      { id: 'i35-c', isTruth: true,  text: { en: "Jesus appeared to Thomas a week later and invited him to touch His wounds.", fr: "Jésus apparut à Thomas une semaine plus tard et l'invita à toucher ses blessures." } },
      { id: 'i35-d', isTruth: false, text: { en: "The Bible records that Thomas did actually touch Jesus' wounds before declaring faith.", fr: "La Bible rapporte que Thomas toucha effectivement les blessures de Jésus avant de déclarer sa foi." } },
    ],
    explanation: { en: "The text does not say Thomas actually touched Jesus. When Jesus appeared and invited him, Thomas responded 'My Lord and my God!' — without the text recording that he reached out his hand (John 20:27-28).", fr: "Le texte ne dit pas que Thomas toucha réellement Jésus. Quand Jésus apparut et l'invita, Thomas répondit : 'Mon Seigneur et mon Dieu !' — sans que le texte mentionne qu'il tendit la main (Jean 20:27-28)." },
    didYouKnow: { en: "Thomas is also called Didymus, a name meaning 'twin.'", fr: "Thomas est aussi appelé Didyme, un nom qui signifie « jumeau »." }

  },
  {
    id: 'i36', levelNumber: 36, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Council of Jerusalem (Acts 15)", fr: "Le Concile de Jérusalem (Actes 15)" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i36-a', isTruth: true,  text: { en: "The Jerusalem Council debated whether Gentile believers needed to be circumcised to be saved.", fr: "Le Concile de Jérusalem débattit si les croyants d'origine non juive devaient être circoncis pour être sauvés." } },
      { id: 'i36-b', isTruth: true,  text: { en: "Peter argued that God had not distinguished between Jews and Gentiles and gave the Spirit to all.", fr: "Pierre argua que Dieu n'avait pas fait de distinction entre Juifs et non-Juifs et avait donné l'Esprit à tous." } },
      { id: 'i36-c', isTruth: true,  text: { en: "James gave the final ruling and proposed that Gentiles abstain from food polluted by idols and sexual immorality.", fr: "Jacques rendit la décision finale et proposa que les non-Juifs s'abstiennent des aliments souillés par les idoles et de l'immoralité sexuelle." } },
      { id: 'i36-d', isTruth: false, text: { en: "Paul chaired the Jerusalem Council and wrote the final letter sent to the Gentile churches.", fr: "Paul présida le Concile de Jérusalem et rédigea la lettre finale envoyée aux Églises non juives." } },
    ],
    explanation: { en: "James presided over the Jerusalem Council and gave the decisive ruling. The letter was sent in the names of the apostles and elders. Paul and Barnabas were present but did not chair the council (Acts 15:13, 19-23).", fr: "Jacques présida le Concile de Jérusalem et rendit la décision finale. La lettre fut envoyée au nom des apôtres et des anciens. Paul et Barnabas étaient présents mais ne présidèrent pas le concile (Actes 15:13, 19-23)." },
    didYouKnow: { en: "The Jerusalem Council sent Judas Barsabbas and Silas with Paul and Barnabas to communicate its decision.", fr: "Le concile de Jérusalem envoya Judas Barsabbas et Silas avec Paul et Barnabas pour transmettre sa décision." }

  },
  {
    id: 'i37', levelNumber: 37, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Transfiguration — Details", fr: "La Transfiguration — Détails" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i37-a', isTruth: true,  text: { en: "Peter suggested building three shelters — one for Jesus, one for Moses, one for Elijah.", fr: "Pierre proposa de construire trois tentes — une pour Jésus, une pour Moïse, une pour Élie." } },
      { id: 'i37-b', isTruth: true,  text: { en: "The disciples fell facedown to the ground when they heard the voice from the cloud.", fr: "Les disciples tombèrent face contre terre en entendant la voix venant de la nuée." } },
      { id: 'i37-c', isTruth: true,  text: { en: "Jesus told the three disciples to not tell anyone what they had seen until He rose from the dead.", fr: "Jésus dit aux trois disciples de ne parler à personne de ce qu'ils avaient vu jusqu'à ce qu'il ressuscite." } },
      { id: 'i37-d', isTruth: false, text: { en: "Luke records that Moses and Elijah appeared with Jesus for seven days and seven nights on the mountain.", fr: "Luc rapporte que Moïse et Élie apparurent avec Jésus pendant sept jours et sept nuits sur la montagne." } },
    ],
    explanation: { en: "No Gospel mentions Moses and Elijah staying for seven days. They appeared briefly and spoke with Jesus, then were gone. The event appears to have been a short, intense spiritual vision (Matthew 17:8; Luke 9:36).", fr: "Aucun Évangile ne mentionne que Moïse et Élie restèrent sept jours. Ils apparurent brièvement, s'entretinrent avec Jésus, puis disparurent. L'événement semble avoir été une vision spirituelle courte et intense (Matthieu 17:8 ; Luc 9:36)." },
    didYouKnow: { en: "Moses and Elijah appeared with Jesus at the Transfiguration and spoke with him about his departure.", fr: "Moïse et Élie apparurent avec Jésus lors de la Transfiguration et parlèrent avec lui de son départ." }

  },
  {
    id: 'i38', levelNumber: 38, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Jonah in Nineveh", fr: "Jonas à Ninive" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i38-a', isTruth: true,  text: { en: "God gave Nineveh forty days before its judgment, according to Jonah's proclamation.", fr: "Dieu accorda à Ninive quarante jours avant le jugement, selon la proclamation de Jonas." } },
      { id: 'i38-b', isTruth: true,  text: { en: "The king of Nineveh proclaimed a fast and commanded everyone — including animals — to wear sackcloth.", fr: "Le roi de Ninive proclama un jeûne et ordonna à tous — même aux animaux — de porter le sac." } },
      { id: 'i38-c', isTruth: true,  text: { en: "God relented and did not destroy Nineveh when He saw their repentance.", fr: "Dieu se repentit et ne détruisit pas Ninive en voyant leur repentance." } },
      { id: 'i38-d', isTruth: false, text: { en: "Jonah rejoiced and celebrated when God spared Nineveh.", fr: "Jonas se réjouit et célébra quand Dieu épargna Ninive." } },
    ],
    explanation: { en: "Jonah was greatly displeased and angry when God spared Nineveh. He sat outside the city, complained to God, and sulked — even wanting to die (Jonah 4:1-3).", fr: "Jonas fut très mécontent et irrité quand Dieu épargna Ninive. Il s'assit à l'extérieur de la ville, se plaignit à Dieu et bouda — allant jusqu'à vouloir mourir (Jonas 4:1-3)." },
    didYouKnow: { en: "Nineveh's response included fasting and sackcloth, extending from the people to the king's decree.", fr: "La réaction de Ninive comprit le jeûne et le sac, jusqu’au décret proclamé par le roi." }

  },
  {
    id: 'i39', levelNumber: 39, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Sermon on the Mount — Salt and Light", fr: "Le Sermon sur la Montagne — Sel et Lumière" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i39-a', isTruth: true,  text: { en: "Jesus told His followers they were 'the salt of the earth' and 'the light of the world.'", fr: "Jésus dit à ses disciples qu'ils étaient 'le sel de la terre' et 'la lumière du monde.'" } },
      { id: 'i39-b', isTruth: true,  text: { en: "Jesus said a city on a hill cannot be hidden.", fr: "Jésus dit qu'une ville placée sur une montagne ne peut être cachée." } },
      { id: 'i39-c', isTruth: true,  text: { en: "Jesus said He came not to abolish the Law or the Prophets but to fulfill them.", fr: "Jésus dit qu'il n'était pas venu abolir la Loi ni les Prophètes, mais les accomplir." } },
      { id: 'i39-d', isTruth: false, text: { en: "Jesus said salt that loses its saltiness can be made salty again by mixing it with fresh water.", fr: "Jésus dit que le sel qui a perdu son goût peut retrouver sa saveur en le mélangeant à de l'eau fraîche." } },
    ],
    explanation: { en: "Jesus said if salt loses its saltiness, it can no longer be made salty — it is then good for nothing but to be thrown out. He did not suggest any way to restore it (Matthew 5:13).", fr: "Jésus dit que si le sel perd son goût, il ne peut plus être rendu salé — il n'est alors bon qu'à être jeté dehors. Il ne suggéra aucun moyen de le restaurer (Matthieu 5:13)." },
    didYouKnow: { en: "Jesus said a lamp is placed on a stand rather than hidden, so that it gives light to everyone in the house.", fr: "Jésus dit qu’une lampe est placée sur un chandelier plutôt que cachée, afin qu’elle éclaire tous ceux qui sont dans la maison." }

  },
  {
    id: 'i40', levelNumber: 40, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Bartimaeus Healed", fr: "Bartimée Guéri" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i40-a', isTruth: true,  text: { en: "Bartimaeus was a blind beggar sitting by the roadside near Jericho.", fr: "Bartimée était un mendiant aveugle assis au bord de la route près de Jéricho." } },
      { id: 'i40-b', isTruth: true,  text: { en: "Bartimaeus called out 'Jesus, Son of David, have mercy on me!' repeatedly despite being told to be quiet.", fr: "Bartimée cria à plusieurs reprises : 'Jésus, fils de David, aie pitié de moi !' malgré les injonctions de se taire." } },
      { id: 'i40-c', isTruth: true,  text: { en: "Jesus stopped and called for Bartimaeus, who immediately threw his cloak aside and jumped to his feet.", fr: "Jésus s'arrêta et fit appeler Bartimée, qui jeta aussitôt son manteau et sauta sur ses pieds." } },
      { id: 'i40-d', isTruth: false, text: { en: "Jesus healed Bartimaeus by touching his eyes and commanding them to open.", fr: "Jésus guérit Bartimée en touchant ses yeux et en ordonnant qu'ils s'ouvrent." } },
    ],
    explanation: { en: "Jesus healed Bartimaeus by speaking the word — 'Go, your faith has healed you.' He did not touch his eyes. Bartimaeus immediately received his sight and followed Jesus (Mark 10:52).", fr: "Jésus guérit Bartimée par la parole — 'Va, ta foi t'a sauvé.' Il ne toucha pas ses yeux. Bartimée recouvra immédiatement la vue et suivit Jésus (Marc 10:52)." },
    didYouKnow: { en: "Bartimaeus threw aside his cloak and came to Jesus when he was called.", fr: "Bartimée jeta son manteau et vint vers Jésus lorsqu’on l’appela." }

  },
  {
    id: 'i41', levelNumber: 41, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Apostle Paul's Early Ministry", fr: "Le Début du Ministère de l'Apôtre Paul" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i41-a', isTruth: true,  text: { en: "After his conversion, Paul went to Arabia and then returned to Damascus.", fr: "Après sa conversion, Paul alla en Arabie et retourna ensuite à Damas." } },
      { id: 'i41-b', isTruth: true,  text: { en: "Paul first visited Peter in Jerusalem only three years after his conversion.", fr: "Paul ne rendit visite à Pierre à Jérusalem que trois ans après sa conversion." } },
      { id: 'i41-c', isTruth: true,  text: { en: "Barnabas introduced Paul to the Jerusalem apostles and vouched for his genuine conversion.", fr: "Barnabas présenta Paul aux apôtres de Jérusalem et témoigna de la réalité de sa conversion." } },
      { id: 'i41-d', isTruth: false, text: { en: "Paul and Barnabas led the second missionary journey together after the first.", fr: "Paul et Barnabas dirigèrent ensemble le deuxième voyage missionnaire après le premier." } },
    ],
    explanation: { en: "Paul and Barnabas separated sharply before the second journey because they disagreed over taking Mark with them. Paul took Silas, while Barnabas took Mark. They went in different directions (Acts 15:36-41).", fr: "Paul et Barnabas se séparèrent vivement avant le deuxième voyage car ils ne s'entendaient pas sur la question d'emmener Marc. Paul prit Silas, tandis que Barnabas prit Marc. Ils partirent dans des directions différentes (Actes 15:36-41)." },
    didYouKnow: { en: "Barnabas introduced Saul to the apostles in Jerusalem and explained how Saul had seen the Lord and preached boldly.", fr: "Barnabas présenta Saül aux apôtres à Jérusalem et raconta comment il avait vu le Seigneur et prêché avec assurance." }

  },
  {
    id: 'i42', levelNumber: 42, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Widow's Offering", fr: "L'Offrande de la Veuve" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i42-a', isTruth: true,  text: { en: "Jesus sat opposite the temple treasury and watched people putting money in.", fr: "Jésus s'assit en face du trésor du temple et observa les gens y déposer de l'argent." } },
      { id: 'i42-b', isTruth: true,  text: { en: "A poor widow put in two very small copper coins — all she had to live on.", fr: "Une pauvre veuve déposa deux petites pièces de cuivre — tout ce qu'elle avait pour vivre." } },
      { id: 'i42-c', isTruth: true,  text: { en: "Jesus said the widow had put more into the treasury than all the rich people.", fr: "Jésus dit que la veuve avait mis plus dans le trésor que tous les riches." } },
      { id: 'i42-d', isTruth: false, text: { en: "Jesus called the widow up to the front of the crowd to publicly honor her generosity.", fr: "Jésus appela la veuve devant la foule pour honorer publiquement sa générosité." } },
    ],
    explanation: { en: "Jesus did not call the widow forward or make a public scene. He privately called His disciples to Himself and commented on what He had observed. The widow herself is not recorded as hearing Jesus' words (Mark 12:43).", fr: "Jésus n'appela pas la veuve et ne créa pas de scène publique. Il appela ses disciples à lui en privé et commenta ce qu'il avait observé. On ne mentionne pas que la veuve elle-même entendit les paroles de Jésus (Marc 12:43)." },
    didYouKnow: { en: "Jesus said the widow had given more than the wealthy donors because she gave out of her poverty.", fr: "Jésus déclara que la veuve avait donné plus que les riches donateurs, parce qu’elle avait donné de son indigence." }

  },
  {
    id: 'i43', levelNumber: 43, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Parable of the Lost Coin", fr: "La Parabole de la Pièce Perdue" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i43-a', isTruth: true,  text: { en: "A woman had ten silver coins and lost one, so she swept the house and searched carefully.", fr: "Une femme avait dix pièces d'argent et en perdit une ; elle balaya la maison et chercha soigneusement." } },
      { id: 'i43-b', isTruth: true,  text: { en: "When the woman found the lost coin, she called her neighbors and friends to rejoice with her.", fr: "Quand la femme trouva la pièce perdue, elle appela ses voisines et amies pour se réjouir avec elle." } },
      { id: 'i43-c', isTruth: true,  text: { en: "Jesus said the angels of God rejoice over one sinner who repents.", fr: "Jésus dit que les anges de Dieu se réjouissent pour un pécheur qui se repent." } },
      { id: 'i43-d', isTruth: false, text: { en: "The parable says the woman had lost ten coins and found only eight of them.", fr: "La parabole dit que la femme avait perdu dix pièces et n'en retrouva que huit." } },
    ],
    explanation: { en: "The woman had ten silver coins, lost one, and found it. She recovered exactly one missing coin — the story is about the joy of finding the one lost thing, not about partial recovery (Luke 15:8-10).", fr: "La femme avait dix pièces d'argent, en perdit une et la retrouva. Elle récupéra exactement la pièce perdue — l'histoire porte sur la joie de retrouver ce qui était perdu, pas sur une récupération partielle (Luc 15:8-10)." },
    didYouKnow: { en: "The woman in the parable lights a lamp and sweeps the house carefully until she finds the lost coin.", fr: "Dans la parabole, la femme allume une lampe et balaie soigneusement la maison jusqu’à retrouver la pièce perdue." }

  },
  {
    id: 'i44', levelNumber: 44, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Call of Moses' Successor", fr: "La Désignation du Successeur de Moïse" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i44-a', isTruth: true,  text: { en: "God told Moses to commission Joshua before the whole assembly as his successor.", fr: "Dieu dit à Moïse d'établir Josué devant toute l'assemblée comme son successeur." } },
      { id: 'i44-b', isTruth: true,  text: { en: "Moses died on Mount Nebo in the land of Moab after seeing the Promised Land from a distance.", fr: "Moïse mourut sur le mont Nébo au pays de Moab après avoir vu la Terre Promise de loin." } },
      { id: 'i44-c', isTruth: true,  text: { en: "Moses was 120 years old when he died, and his eyes were not weak nor his strength gone.", fr: "Moïse avait 120 ans à sa mort, et ses yeux n'étaient pas éteints et sa vigueur ne l'avait pas abandonné." } },
      { id: 'i44-d', isTruth: false, text: { en: "God allowed Moses to enter the Promised Land for one day before he died.", fr: "Dieu permit à Moïse d'entrer dans la Terre Promise pendant une journée avant sa mort." } },
    ],
    explanation: { en: "Moses was never allowed to enter the Promised Land. God showed him the entire land from Mount Nebo, but Moses died there in Moab and was buried in an unknown location (Deuteronomy 34:4-6).", fr: "Moïse ne put jamais entrer dans la Terre Promise. Dieu lui montra tout le pays depuis le mont Nébo, mais Moïse mourut là au pays de Moab et fut enterré en un lieu inconnu (Deutéronome 34:4-6)." },
    didYouKnow: { en: "Joshua had already served Moses for years before being publicly commissioned as his successor.", fr: "Josué servait déjà Moïse depuis des années avant d’être publiquement établi comme son successeur." }

  },
  {
    id: 'i45', levelNumber: 45, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Jephthah's Vow", fr: "Le Vœu de Jephthah" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i45-a', isTruth: true,  text: { en: "Jephthah was a mighty warrior and judge, the son of Gilead and a prostitute.", fr: "Jephthah était un vaillant guerrier et juge, fils de Galaad et d'une prostituée." } },
      { id: 'i45-b', isTruth: true,  text: { en: "Jephthah vowed to sacrifice whatever came out of his house first if God gave him victory over the Ammonites.", fr: "Jephthah fit le vœu de sacrifier ce qui sortirait en premier de chez lui si Dieu lui donnait la victoire sur les Ammonites." } },
      { id: 'i45-c', isTruth: true,  text: { en: "His only daughter came out dancing and celebrating to greet him after his victory.", fr: "Sa fille unique sortit en dansant et en célébrant pour l'accueillir après sa victoire." } },
      { id: 'i45-d', isTruth: false, text: { en: "The Bible clearly states that Jephthah killed his daughter to fulfill his vow.", fr: "La Bible indique clairement que Jephthah tua sa fille pour accomplir son vœu." } },
    ],
    explanation: { en: "The text in Judges 11 is ambiguous. It says he 'did with her according to his vow.' Many scholars interpret this as dedication to lifelong virginity in service to God rather than literal death, based on the mention of mourning her virginity, not her death (Judges 11:39).", fr: "Le texte de Juges 11 est ambigu. Il dit qu'il 'fit d'elle selon son vœu.' De nombreux érudits interprètent cela comme une dédicace à la virginité perpétuelle au service de Dieu plutôt qu'une mort littérale, sur la base du deuil pour sa virginité, non pour sa mort (Juges 11:39)." },
    didYouKnow: { en: "Jephthah had previously been driven away by his half-brothers before the elders of Gilead later asked him to lead them.", fr: "Jephté avait auparavant été chassé par ses demi-frères avant que les anciens de Galaad ne lui demandent plus tard de les diriger." }

  },
  {
    id: 'i46', levelNumber: 46, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Ark of the Covenant Captured", fr: "L'Arche de l'Alliance Capturée" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i46-a', isTruth: true,  text: { en: "The Philistines captured the Ark of the Covenant in battle and placed it in the temple of Dagon.", fr: "Les Philistins capturèrent l'arche de l'alliance au combat et la placèrent dans le temple de Dagon." } },
      { id: 'i46-b', isTruth: true,  text: { en: "The statue of Dagon fell face down before the Ark, and the next day was found with its head and hands broken off.", fr: "La statue de Dagon tomba face contre terre devant l'arche, et le lendemain on la trouva avec la tête et les mains coupées." } },
      { id: 'i46-c', isTruth: true,  text: { en: "God struck the Philistines with tumors (plagues) in every city the Ark was taken to.", fr: "Dieu frappa les Philistins de tumeurs (plaies) dans chaque ville où l'arche fut amenée." } },
      { id: 'i46-d', isTruth: false, text: { en: "The Philistines kept the Ark for seven months before returning it on a cart with a guilt offering.", fr: "Les Philistins gardèrent l'arche pendant sept ans avant de la rendre sur un chariot avec une offrande expiatoire." } },
    ],
    explanation: { en: "The Philistines kept the Ark for only seven months — not seven years — before they returned it to Israel on a cart accompanied by gold guilt offerings (1 Samuel 6:1).", fr: "Les Philistins ne gardèrent l'arche que sept mois — pas sept ans — avant de la rendre à Israël sur un chariot accompagné d'offrandes expiatoires en or (1 Samuel 6:1)." },
    didYouKnow: { en: "When the captured ark was placed beside the Philistine god Dagon, Dagon's image repeatedly fell before it.", fr: "Lorsque l’arche capturée fut placée près du dieu philistin Dagon, la statue de Dagon tomba à plusieurs reprises devant elle." }

  },
  {
    id: 'i47', levelNumber: 47, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Road to Emmaus", fr: "Le Chemin d'Emmaüs" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i47-a', isTruth: true,  text: { en: "Two disciples were walking to Emmaus when the risen Jesus joined them, but they did not recognize Him.", fr: "Deux disciples marchaient vers Emmaüs quand le Jésus ressuscité les rejoignit, mais ils ne le reconnurent pas." } },
      { id: 'i47-b', isTruth: true,  text: { en: "Jesus explained to them everything in the Scriptures concerning Himself, beginning with Moses and the Prophets.", fr: "Jésus leur expliqua tout ce que les Écritures disaient à son sujet, en commençant par Moïse et les Prophètes." } },
      { id: 'i47-c', isTruth: true,  text: { en: "The two disciples recognized Jesus when He broke bread with them at the table.", fr: "Les deux disciples reconnurent Jésus quand il rompit le pain avec eux à table." } },
      { id: 'i47-d', isTruth: false, text: { en: "One of the two Emmaus disciples was named Clopas, and the other was named James.", fr: "L'un des deux disciples d'Emmaüs s'appelait Cléopas, et l'autre s'appelait Jacques." } },
    ],
    explanation: { en: "One disciple is named Clopas (Luke 24:18), but the other's name is never given in Scripture. 'James' is not mentioned as the second Emmaus disciple anywhere in the Gospels.", fr: "L'un des disciples est nommé Cléopas (Luc 24:18), mais l'autre n'est jamais nommé dans l'Écriture. 'Jacques' n'est mentionné nulle part comme le deuxième disciple d'Emmaüs dans les Évangiles." },
    didYouKnow: { en: "The two disciples recognized Jesus when he broke bread with them, after which he disappeared from their sight.", fr: "Les deux disciples reconnurent Jésus lorsqu’il rompit le pain avec eux, puis il disparut de devant leurs yeux." }

  },
  {
    id: 'i48', levelNumber: 48, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Elisha and the Syrian Army", fr: "Élisée et l'Armée Syrienne" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i48-a', isTruth: true,  text: { en: "The king of Syria sent a great army with chariots and horses to surround the city where Elisha was.", fr: "Le roi de Syrie envoya une grande armée avec des chars et des chevaux pour encercler la ville où se trouvait Élisée." } },
      { id: 'i48-b', isTruth: true,  text: { en: "Elisha prayed that his servant's eyes would be opened to see the spiritual army surrounding them.", fr: "Élisée pria pour que les yeux de son serviteur soient ouverts pour voir l'armée spirituelle qui les entourait." } },
      { id: 'i48-c', isTruth: true,  text: { en: "When the Syrian army came, Elisha prayed they would be struck with blindness.", fr: "Quand l'armée syrienne arriva, Élisée pria pour qu'elle soit frappée de cécité." } },
      { id: 'i48-d', isTruth: false, text: { en: "Elisha had the blinded Syrian army destroyed by the Israelite army at Samaria.", fr: "Élisée fit détruire l'armée syrienne aveuglée par l'armée israélite à Samarie." } },
    ],
    explanation: { en: "Rather than destroying the army, Elisha led the blinded Syrians to Samaria, prayed for their eyes to be restored, and told the king to feed them and let them return home. The king sent them away in peace (2 Kings 6:22-23).", fr: "Au lieu de détruire l'armée, Élisée conduisit les Syriens aveugles à Samarie, pria pour que leurs yeux soient ouverts, et dit au roi de les nourrir et de les laisser rentrer. Le roi les laissa partir en paix (2 Rois 6:22-23)." },
    didYouKnow: { en: "After the Syrian soldiers were struck with blindness, Elisha led them into Samaria, where their sight was restored.", fr: "Après que les soldats syriens eurent été frappés d’aveuglement, Élisée les conduisit à Samarie, où leur vue fut rétablie." }

  },
  {
    id: 'i49', levelNumber: 49, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Absalom's Rebellion", fr: "La Rébellion d'Absalom" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i49-a', isTruth: true,  text: { en: "Absalom was David's son who stole the hearts of the Israelites and declared himself king.", fr: "Absalom était le fils de David qui vola le cœur des Israélites et se déclara roi." } },
      { id: 'i49-b', isTruth: true,  text: { en: "Absalom was famous for his hair, which weighed about five pounds when cut annually.", fr: "Absalom était célèbre pour ses cheveux, qui pesaient environ deux kilos et demi quand on les coupait chaque année." } },
      { id: 'i49-c', isTruth: true,  text: { en: "Absalom died when his head got caught in an oak tree and Joab thrust three javelins into his heart.", fr: "Absalom mourut quand sa tête se prit dans un chêne et que Joab lui enfonça trois lances dans le cœur." } },
      { id: 'i49-d', isTruth: false, text: { en: "David ordered Joab to kill Absalom when they met in battle.", fr: "David ordonna à Joab de tuer Absalom quand ils se rencontrèrent au combat." } },
    ],
    explanation: { en: "David explicitly commanded Joab and his commanders to 'Be gentle with the young man Absalom for my sake.' Joab disobeyed this order by killing Absalom. David mourned deeply when he heard (2 Samuel 18:5, 14).", fr: "David ordonna explicitement à Joab et à ses commandants de 'Ménagez le jeune Absalom pour l'amour de moi.' Joab désobéit à cet ordre en tuant Absalom. David fut profondément affligé en l'apprenant (2 Samuel 18:5, 14)." },
    didYouKnow: { en: "David fled Jerusalem barefoot and weeping during Absalom's rebellion.", fr: "David quitta Jérusalem pieds nus et en pleurant pendant la rébellion d’Absalom." }

  },
  {
    id: 'i50', levelNumber: 50, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Ezra Reads the Law", fr: "Esdras Lit la Loi" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i50-a', isTruth: true,  text: { en: "Ezra the scribe brought the Book of the Law before the assembly of men, women, and children.", fr: "Esdras le scribe apporta le livre de la Loi devant l'assemblée d'hommes, de femmes et d'enfants." } },
      { id: 'i50-b', isTruth: true,  text: { en: "Ezra read the Law from daybreak till noon while the people listened attentively.", fr: "Esdras lut la Loi depuis le lever du jour jusqu'à midi pendant que le peuple écoutait attentivement." } },
      { id: 'i50-c', isTruth: true,  text: { en: "The Levites helped the people understand the Law by reading and giving the meaning.", fr: "Les Lévites aidèrent le peuple à comprendre la Loi en la lisant et en en donnant le sens." } },
      { id: 'i50-d', isTruth: false, text: { en: "The people celebrated and rejoiced immediately upon hearing the Law for the first time.", fr: "Le peuple célébra et se réjouit immédiatement en entendant la Loi pour la première fois." } },
    ],
    explanation: { en: "The people wept when they heard the words of the Law. Nehemiah, Ezra, and the Levites told them not to grieve — to eat, drink, and celebrate, for the day was holy. Their weeping came first (Nehemiah 8:9-10).", fr: "Le peuple pleurait en entendant les paroles de la Loi. Néhémie, Esdras et les Lévites leur dirent de ne pas s'affliger — de manger, de boire et de célébrer, car le jour était saint. Les larmes vinrent d'abord (Néhémie 8:9-10)." },
    didYouKnow: { en: "The people wept when they heard the Law, but Nehemiah and Ezra told them that the day was holy and called them to rejoice.", fr: "Le peuple pleura en entendant la Loi, mais Néhémie et Esdras leur dirent que ce jour était saint et les appelèrent à se réjouir." }

  },
  {
    id: 'i51', levelNumber: 51, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Zechariah — Father of John the Baptist", fr: "Zacharie — Père de Jean-Baptiste" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i51-a', isTruth: true,  text: { en: "Zechariah was a priest who was struck mute by the angel Gabriel for doubting the promise.", fr: "Zacharie était un sacrificateur frappé de mutisme par l'ange Gabriel pour avoir douté de la promesse." } },
      { id: 'i51-b', isTruth: true,  text: { en: "The angel appeared to Zechariah while he was burning incense in the temple.", fr: "L'ange apparut à Zacharie pendant qu'il brûlait de l'encens dans le temple." } },
      { id: 'i51-c', isTruth: true,  text: { en: "Zechariah's speech was restored when he wrote 'His name is John' on a tablet.", fr: "La parole de Zacharie lui fut rendue quand il écrivit 'Son nom est Jean' sur une tablette." } },
      { id: 'i51-d', isTruth: false, text: { en: "Zechariah was struck deaf as well as mute for the duration of Elizabeth's pregnancy.", fr: "Zacharie fut à la fois sourd et muet pendant toute la durée de la grossesse d'Élisabeth." } },
    ],
    explanation: { en: "Zechariah was struck mute but not deaf. He could still hear, as shown when relatives made signs to him to find out what he wanted the child named — indicating he could hear them speaking (Luke 1:62).", fr: "Zacharie fut frappé de mutisme mais pas de surdité. Il pouvait encore entendre, comme le montre le fait que les parents lui firent des signes pour savoir quel nom il voulait donner à l'enfant — indiquant qu'il les entendait parler (Luc 1:62)." },
    didYouKnow: { en: "Zechariah wrote the name 'John' on a tablet, and immediately his speech returned.", fr: "Zacharie écrivit le nom « Jean » sur une tablette, et aussitôt il retrouva la parole." }

  },
  {
    id: 'i52', levelNumber: 52, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Parable of the Mustard Seed", fr: "La Parabole de la Graine de Sénevé" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i52-a', isTruth: true,  text: { en: "Jesus compared the kingdom of heaven to a mustard seed — the smallest of all seeds.", fr: "Jésus compara le royaume des cieux à une graine de sénevé — la plus petite de toutes les graines." } },
      { id: 'i52-b', isTruth: true,  text: { en: "Jesus said the mustard seed grows into the largest of garden plants and becomes a tree.", fr: "Jésus dit que la graine de sénevé pousse jusqu'à devenir la plus grande des plantes du jardin et forme un arbre." } },
      { id: 'i52-c', isTruth: true,  text: { en: "Birds come and perch in the branches of the mustard tree in the parable.", fr: "Des oiseaux viennent se percher dans les branches du sénevé dans la parabole." } },
      { id: 'i52-d', isTruth: false, text: { en: "Jesus said the mustard seed is absolutely the smallest seed in the entire world.", fr: "Jésus dit que la graine de sénevé est absolument la plus petite graine du monde entier." } },
    ],
    explanation: { en: "Jesus said it was 'the smallest of all seeds' in the context of seeds you plant in the ground (a garden context). Scientifically, it's not the world's smallest seed. This was a rhetorical statement for His Jewish audience familiar with mustard cultivation (Matthew 13:32).", fr: "Jésus dit que c'était 'la plus petite de toutes les graines' dans le contexte des semences qu'on plante (contexte de jardin). Ce n'est pas scientifiquement la plus petite graine du monde. C'était une affirmation rhétorique pour son auditoire juif familier avec la culture du sénevé (Matthieu 13:32)." },
    didYouKnow: { en: "Jesus paired the mustard seed with the parable of leaven as another picture of the kingdom's surprising growth.", fr: "Jésus associa la graine de sénevé à la parabole du levain comme autre image de la croissance surprenante du royaume." }

  },
  {
    id: 'i53', levelNumber: 53, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Samuel Anoints Saul", fr: "Samuel Oint Saül" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i53-a', isTruth: true,  text: { en: "Saul was searching for his father's lost donkeys when he came to Samuel.", fr: "Saül cherchait les ânesses perdues de son père quand il rencontra Samuel." } },
      { id: 'i53-b', isTruth: true,  text: { en: "God had told Samuel a day before that He would send a man from Benjamin to be anointed as king.", fr: "Dieu avait dit à Samuel la veille qu'Il lui enverrait un homme de la tribu de Benjamin à oindre comme roi." } },
      { id: 'i53-c', isTruth: true,  text: { en: "Saul was from the tribe of Benjamin, the smallest tribe of Israel.", fr: "Saül était de la tribu de Benjamin, la plus petite tribu d'Israël." } },
      { id: 'i53-d', isTruth: false, text: { en: "The people chose Saul as king by popular vote in a public assembly.", fr: "Le peuple choisit Saül comme roi par vote populaire lors d'une assemblée publique." } },
    ],
    explanation: { en: "Saul was selected by the casting of lots — a form of divine selection — not by popular vote. When lots were cast, the tribe of Benjamin was chosen, then Saul's family, then Saul himself. He was then hidden and had to be brought forward (1 Samuel 10:20-22).", fr: "Saül fut choisi par le tirage au sort — une forme de sélection divine — pas par vote populaire. Le tirage au sort désigna la tribu de Benjamin, puis la famille de Saül, puis Saül lui-même. Il se cachait et dut être amené (1 Samuel 10:20-22)." },
    didYouKnow: { en: "After anointing Saul, Samuel gave him several specific signs that were fulfilled that same day.", fr: "Après avoir oint Saül, Samuel lui donna plusieurs signes précis qui s’accomplirent le même jour." }

  },
  {
    id: 'i54', levelNumber: 54, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Mary Magdalene at the Tomb", fr: "Marie-Madeleine au Tombeau" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i54-a', isTruth: true,  text: { en: "Mary Magdalene went to the tomb early on the first day of the week while it was still dark.", fr: "Marie-Madeleine se rendit au tombeau tôt le premier jour de la semaine, alors qu'il faisait encore sombre." } },
      { id: 'i54-b', isTruth: true,  text: { en: "Mary initially mistook the risen Jesus for the gardener.", fr: "Marie confondit d'abord le Jésus ressuscité avec le jardinier." } },
      { id: 'i54-c', isTruth: true,  text: { en: "Jesus called Mary by name, and she recognized Him and exclaimed 'Rabboni!' (meaning Teacher).", fr: "Jésus appela Marie par son nom, et elle le reconnut et s'écria : 'Rabbouni !' (signifiant Maître)." } },
      { id: 'i54-d', isTruth: false, text: { en: "Mary Magdalene was the only woman present at the tomb on resurrection morning.", fr: "Marie-Madeleine était la seule femme présente au tombeau le matin de la Résurrection." } },
    ],
    explanation: { en: "Multiple women went to the tomb. Matthew mentions Mary Magdalene and 'the other Mary.' Mark mentions Mary Magdalene, Mary the mother of James, and Salome. Luke also mentions several women. She was not alone (Mark 16:1).", fr: "Plusieurs femmes allèrent au tombeau. Matthieu mentionne Marie-Madeleine et 'l'autre Marie'. Marc cite Marie-Madeleine, Marie mère de Jacques et Salomé. Luc mentionne aussi plusieurs femmes. Elle n'était pas seule (Marc 16:1)." },
    didYouKnow: { en: "Mary Magdalene initially thought the risen Jesus was the gardener until he called her by name.", fr: "Marie-Madeleine pensa d’abord que Jésus ressuscité était le jardinier, jusqu’à ce qu’il l’appelle par son nom." }

  },
  {
    id: 'i55', levelNumber: 55, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Nebuchadnezzar's Dream (Daniel 2)", fr: "Le Rêve de Nébucadnetsar (Daniel 2)" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i55-a', isTruth: true,  text: { en: "Nebuchadnezzar dreamed of a great statue with a head of gold, chest of silver, belly of bronze, and legs of iron.", fr: "Nébucadnetsar rêva d'une grande statue avec une tête d'or, une poitrine d'argent, un ventre de bronze et des jambes de fer." } },
      { id: 'i55-b', isTruth: true,  text: { en: "A rock cut out without human hands struck the statue's feet and destroyed it, then became a great mountain.", fr: "Une pierre taillée sans mains frappa les pieds de la statue et la détruisit, puis devint une grande montagne." } },
      { id: 'i55-c', isTruth: true,  text: { en: "Daniel interpreted the gold head as representing Nebuchadnezzar and his kingdom.", fr: "Daniel interpréta la tête d'or comme représentant Nébucadnetsar et son royaume." } },
      { id: 'i55-d', isTruth: false, text: { en: "Nebuchadnezzar's own wise men successfully interpreted his dream before Daniel.", fr: "Les propres sages de Nébucadnetsar interprétèrent avec succès son rêve avant Daniel." } },
    ],
    explanation: { en: "Nebuchadnezzar's wise men could not interpret the dream because the king refused to tell them what it was. He demanded they first tell him the dream, then interpret it — which they could not do. Daniel alone received the answer from God (Daniel 2:10-19).", fr: "Les sages de Nébucadnetsar ne purent interpréter le rêve car le roi refusa de le leur dire. Il exigea qu'ils lui disent d'abord le rêve, puis l'interprètent — ce qu'ils ne purent faire. Daniel seul reçut la réponse de Dieu (Daniel 2:10-19)." },
    didYouKnow: { en: "Daniel praised God for revealing the king's mystery before he went to explain the dream to Nebuchadnezzar.", fr: "Daniel loua Dieu d’avoir révélé le mystère du roi avant d’aller expliquer le rêve à Nébucadnetsar." }

  },
  {
    id: 'i56', levelNumber: 56, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Peter's Restoration by Jesus", fr: "La Restauration de Pierre par Jésus" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i56-a', isTruth: true,  text: { en: "After His resurrection, Jesus appeared to His disciples at the Sea of Galilee.", fr: "Après sa résurrection, Jésus apparut à ses disciples au bord de la mer de Galilée." } },
      { id: 'i56-b', isTruth: true,  text: { en: "Jesus asked Peter three times, 'Do you love me?' and commissioned him to tend His sheep.", fr: "Jésus demanda trois fois à Pierre : 'M'aimes-tu ?' et lui confia le soin de ses brebis." } },
      { id: 'i56-c', isTruth: true,  text: { en: "The disciples caught 153 large fish after Jesus told them to cast their net on the right side.", fr: "Les disciples prirent 153 gros poissons après que Jésus leur eut dit de jeter le filet du côté droit." } },
      { id: 'i56-d', isTruth: false, text: { en: "Jesus asked Peter the same question in the same Greek word 'agape' all three times.", fr: "Jésus posa la question à Pierre en utilisant le même mot grec 'agapé' les trois fois." } },
    ],
    explanation: { en: "The first two times Jesus used 'agapao' (unconditional love), and Peter responded with 'phileo' (brotherly love). The third time, Jesus switched to 'phileo' — matching Peter's word — which hurt Peter deeply. The wordplay matters in the Greek original (John 21:15-17).", fr: "Les deux premières fois, Jésus utilisa 'agapao' (amour inconditionnel), et Pierre répondit avec 'phileo' (amour fraternel). La troisième fois, Jésus passa à 'phileo', correspondant au mot de Pierre — ce qui blessa profondément Pierre. Le jeu de mots est important dans l'original grec (Jean 21:15-17)." },
    didYouKnow: { en: "Jesus' three questions to Peter about love were followed each time by a commission to care for his sheep.", fr: "Les trois questions de Jésus à Pierre au sujet de son amour furent chaque fois suivies d’un appel à prendre soin de ses brebis." }

  },
  {
    id: 'i57', levelNumber: 57, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Pharisee and the Tax Collector", fr: "Le Pharisien et le Percepteur d'Impôts" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i57-a', isTruth: true,  text: { en: "In this parable, the Pharisee stood and prayed about himself — thanking God he was not like others.", fr: "Dans cette parabole, le Pharisien se leva et pria sur lui-même, remerciant Dieu de n'être pas comme les autres." } },
      { id: 'i57-b', isTruth: true,  text: { en: "The tax collector stood at a distance, would not look up, and beat his breast saying 'God, have mercy on me, a sinner.'", fr: "Le percepteur se tenait à distance, n'osait pas lever les yeux et se frappait la poitrine en disant : 'O Dieu, sois apaisé envers moi, pécheur !'" } },
      { id: 'i57-c', isTruth: true,  text: { en: "Jesus said the tax collector, not the Pharisee, went home justified before God.", fr: "Jésus dit que c'est le percepteur, et non le Pharisien, qui rentra chez lui justifié devant Dieu." } },
      { id: 'i57-d', isTruth: false, text: { en: "Jesus told this parable to correct the behavior of a specific Pharisee who was listening to Him.", fr: "Jésus raconta cette parabole pour corriger le comportement d'un Pharisien spécifique qui l'écoutait." } },
    ],
    explanation: { en: "Jesus told this parable to 'some who were confident of their own righteousness and looked down on everyone else' — addressing a general attitude, not correcting a specific identifiable person in the crowd (Luke 18:9).", fr: "Jésus raconta cette parabole à 'certains qui se croyaient justes' et méprisaient les autres — s'adressant à une attitude générale, pas en corrigeant une personne spécifique identifiable (Luc 18:9)." },
    didYouKnow: { en: "The tax collector stood at a distance, would not even look up to heaven, and asked God for mercy.", fr: "Le publicain se tenait à distance, n’osait même pas lever les yeux au ciel et demanda à Dieu d’avoir pitié de lui." }

  },
  {
    id: 'i58', levelNumber: 58, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Book of Ruth — Boaz the Kinsman-Redeemer", fr: "Le Livre de Ruth — Boaz le Racheteur" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i58-a', isTruth: true,  text: { en: "Boaz was a relative of Naomi's dead husband and a man of standing in Bethlehem.", fr: "Boaz était un parent du mari défunt de Naomi et un homme influent à Bethléhem." } },
      { id: 'i58-b', isTruth: true,  text: { en: "Ruth uncovered Boaz's feet at the threshing floor as a sign of appeal for him to fulfill the role of kinsman-redeemer.", fr: "Ruth découvrit les pieds de Boaz à l'aire de battage comme signe d'appel pour qu'il remplisse le rôle de racheteur." } },
      { id: 'i58-c', isTruth: true,  text: { en: "There was a closer relative than Boaz who had the first right to redeem, but he declined.", fr: "Il y avait un parent plus proche que Boaz qui avait le premier droit de rachat, mais il déclina." } },
      { id: 'i58-d', isTruth: false, text: { en: "The closer kinsman-redeemer gave Ruth his ring as a sign that he was giving up his right of redemption.", fr: "Le parent plus proche donna sa bague à Ruth comme signe qu'il renonçait à son droit de rachat." } },
    ],
    explanation: { en: "The legal transfer involved a sandal — not a ring. In the custom of the time, the closer kinsman-redeemer took off his sandal and gave it to Boaz as a legal transaction confirming the transfer of the right of redemption (Ruth 4:7-8).", fr: "Le transfert légal impliquait une sandale — pas une bague. Selon la coutume de l'époque, le parent plus proche ôta sa sandale et la donna à Boaz comme acte légal confirmant le transfert du droit de rachat (Ruth 4:7-8)." },
    didYouKnow: { en: "Boaz was not the closest eligible redeemer; another relative had the first right to redeem the property.", fr: "Boaz n’était pas le plus proche parent ayant droit de rachat ; un autre parent avait la priorité pour racheter la propriété." }

  },
  {
    id: 'i59', levelNumber: 59, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Day of Pentecost — Peter's Sermon", fr: "Le Jour de la Pentecôte — Le Sermon de Pierre" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i59-a', isTruth: true,  text: { en: "Peter quoted the prophet Joel to explain the outpouring of the Holy Spirit at Pentecost.", fr: "Pierre cita le prophète Joël pour expliquer l'effusion du Saint-Esprit à la Pentecôte." } },
      { id: 'i59-b', isTruth: true,  text: { en: "Peter declared that God had raised Jesus from the dead, as testified by the disciples.", fr: "Pierre déclara que Dieu avait ressuscité Jésus d'entre les morts, comme en témoignaient les disciples." } },
      { id: 'i59-c', isTruth: true,  text: { en: "About three thousand people were added to the church the day of Peter's Pentecost sermon.", fr: "Environ trois mille personnes furent ajoutées à l'Église le jour du sermon de Pierre à la Pentecôte." } },
      { id: 'i59-d', isTruth: false, text: { en: "Peter preached the Pentecost sermon entirely in Aramaic, his native tongue.", fr: "Pierre prêcha le sermon de la Pentecôte entièrement en araméen, sa langue maternelle." } },
    ],
    explanation: { en: "The Bible does not specify which language Peter used. Given that the crowd heard the disciples in their own native languages through the miracle of tongues, Peter's direct sermon language is not specified — it may have been Aramaic or Hebrew, or miraculously understood by all (Acts 2:14).", fr: "La Bible ne précise pas dans quelle langue Pierre prêcha. Étant donné que la foule entendait les disciples dans leurs propres langues grâce au miracle des langues, la langue du sermon direct de Pierre n'est pas précisée (Actes 2:14)." },
    didYouKnow: { en: "About three thousand people were added to the believers after Peter's Pentecost sermon.", fr: "Environ trois mille personnes se joignirent aux croyants après le sermon de Pierre à la Pentecôte." }

  },
  {
    id: 'i60', levelNumber: 60, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Fruit of the Spirit (Galatians 5)", fr: "Le Fruit de l'Esprit (Galates 5)" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i60-a', isTruth: true,  text: { en: "The fruit of the Spirit includes love, joy, peace, forbearance, kindness, goodness, faithfulness.", fr: "Le fruit de l'Esprit comprend l'amour, la joie, la paix, la patience, la bienveillance, la bonté, la fidélité." } },
      { id: 'i60-b', isTruth: true,  text: { en: "Gentleness and self-control are also listed as part of the fruit of the Spirit.", fr: "La douceur et la tempérance sont également listées comme faisant partie du fruit de l'Esprit." } },
      { id: 'i60-c', isTruth: true,  text: { en: "Paul says 'against such things there is no law' after listing the fruit of the Spirit.", fr: "Paul dit : 'Contre de telles choses il n'y a pas de loi' après avoir énuméré le fruit de l'Esprit." } },
      { id: 'i60-d', isTruth: false, text: { en: "The Bible refers to the fruit of the Spirit as 'nine fruits' in the plural form.", fr: "La Bible désigne le fruit de l'Esprit comme 'neuf fruits' au pluriel." } },
    ],
    explanation: { en: "Paul uses the singular 'fruit' (karpos), not 'fruits.' The nine qualities are one unified fruit of the Spirit — like a single fruit with many characteristics — not nine separate fruits (Galatians 5:22-23).", fr: "Paul utilise le singulier 'fruit' (karpos), pas 'fruits'. Les neuf qualités sont un seul fruit uni de l'Esprit — comme un seul fruit avec de nombreuses caractéristiques — pas neuf fruits séparés (Galates 5:22-23)." },
    didYouKnow: { en: "Paul uses the singular word 'fruit' before listing the Spirit-produced qualities in Galatians 5:22–23.", fr: "Paul emploie le mot « fruit » au singulier avant d’énumérer les qualités produites par l’Esprit dans Galates 5:22–23." }

  },
  {
    id: 'i61', levelNumber: 61, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Armor of God (Ephesians 6)", fr: "L'Armure de Dieu (Éphésiens 6)" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i61-a', isTruth: true,  text: { en: "Paul lists the belt of truth, breastplate of righteousness, and feet fitted with the readiness of the gospel of peace.", fr: "Paul cite la ceinture de la vérité, la cuirasse de la justice et les pieds chaussés de la préparation de l'Évangile de paix." } },
      { id: 'i61-b', isTruth: true,  text: { en: "The shield of faith is described as able to extinguish all the flaming arrows of the evil one.", fr: "Le bouclier de la foi est décrit comme pouvant éteindre tous les traits enflammés du Malin." } },
      { id: 'i61-c', isTruth: true,  text: { en: "The sword of the Spirit is identified as the word of God.", fr: "L'épée de l'Esprit est identifiée comme la parole de Dieu." } },
      { id: 'i61-d', isTruth: false, text: { en: "Paul lists seven pieces of spiritual armor in Ephesians 6.", fr: "Paul énumère sept pièces d'armure spirituelle dans Éphésiens 6." } },
    ],
    explanation: { en: "Paul lists six pieces of armor: belt, breastplate, shoes, shield, helmet, and sword. Some count prayer as a seventh element, but prayer is added as an accompanying action, not listed as a piece of armor (Ephesians 6:14-17).", fr: "Paul énumère six pièces d'armure : ceinture, cuirasse, chaussures, bouclier, casque et épée. Certains comptent la prière comme un septième élément, mais la prière est ajoutée comme une action d'accompagnement, pas comme une pièce d'armure (Éphésiens 6:14-17)." },
    didYouKnow: { en: "Paul's armor imagery includes prayer immediately after the list, urging believers to pray on all occasions in the Spirit.", fr: "Après la liste de l’armure, Paul parle immédiatement de la prière et exhorte les croyants à prier en tout temps par l’Esprit." }

  },
  {
    id: 'i62', levelNumber: 62, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Pentecost Preparations — Jesus' Promise", fr: "Préparatifs de la Pentecôte — La Promesse de Jésus" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i62-a', isTruth: true,  text: { en: "Jesus told His disciples to wait in Jerusalem until they received the promised Holy Spirit.", fr: "Jésus dit à ses disciples d'attendre à Jérusalem jusqu'à ce qu'ils reçoivent le Saint-Esprit promis." } },
      { id: 'i62-b', isTruth: true,  text: { en: "Jesus told His disciples they would be His witnesses to the ends of the earth after receiving the Spirit.", fr: "Jésus dit à ses disciples qu'ils seraient ses témoins jusqu'aux extrémités de la terre après avoir reçu l'Esprit." } },
      { id: 'i62-c', isTruth: true,  text: { en: "Jesus ascended into heaven from the Mount of Olives forty days after His resurrection.", fr: "Jésus monta au ciel depuis le mont des Oliviers quarante jours après sa résurrection." } },
      { id: 'i62-d', isTruth: false, text: { en: "About 500 people were gathered in the upper room praying when Jesus ascended.", fr: "Environ 500 personnes étaient rassemblées dans la chambre haute en prière quand Jésus monta au ciel." } },
    ],
    explanation: { en: "About 120 believers were together praying in the upper room after the ascension (Acts 1:15). The 500+ who saw the risen Jesus is mentioned separately in 1 Corinthians 15:6 — a different occasion from the Ascension gathering.", fr: "Environ 120 croyants étaient réunis en prière dans la chambre haute après l'ascension (Actes 1:15). Les 500+ qui virent le Jésus ressuscité sont mentionnés séparément dans 1 Corinthiens 15:6 — une occasion différente du rassemblement de l'Ascension." },
    didYouKnow: { en: "Before Pentecost, the believers devoted themselves to prayer together in an upper room in Jerusalem.", fr: "Avant la Pentecôte, les croyants persévéraient ensemble dans la prière dans une chambre haute à Jérusalem." }

  },
  {
    id: 'i63', levelNumber: 63, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Parable of the Wheat and Weeds", fr: "La Parabole du Blé et de l'Ivraie" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i63-a', isTruth: true,  text: { en: "An enemy sowed weeds (tares) among the wheat while everyone was sleeping.", fr: "Un ennemi sema de l'ivraie parmi le blé pendant que tout le monde dormait." } },
      { id: 'i63-b', isTruth: true,  text: { en: "The servants asked the master if they should pull up the weeds, but he said no — they might uproot the wheat.", fr: "Les serviteurs demandèrent au maître s'ils devaient arracher l'ivraie, mais il dit non — de peur d'arracher aussi le blé." } },
      { id: 'i63-c', isTruth: true,  text: { en: "Jesus explained that the harvest represents the end of the age and the reapers are angels.", fr: "Jésus expliqua que la moisson représente la fin du monde et que les moissonneurs sont des anges." } },
      { id: 'i63-d', isTruth: false, text: { en: "The field in this parable represents the visible church institution.", fr: "Le champ dans cette parabole représente l'institution visible de l'Église." } },
    ],
    explanation: { en: "Jesus explicitly stated 'The field is the world' — not the church. The parable is about the co-existence of the righteous and the wicked in the world until the final judgment (Matthew 13:38).", fr: "Jésus déclara explicitement : 'Le champ, c'est le monde' — pas l'Église. La parabole porte sur la coexistence des justes et des méchants dans le monde jusqu'au jugement final (Matthieu 13:38)." },
    didYouKnow: { en: "Jesus explained that the field in the parable represents the world and that the harvest represents the end of the age.", fr: "Jésus expliqua que le champ de la parabole représente le monde et que la moisson représente la fin du siècle." }

  },
  {
    id: 'i64', levelNumber: 64, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "David Brings the Ark to Jerusalem", fr: "David Ramène l'Arche à Jérusalem" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i64-a', isTruth: true,  text: { en: "David danced before the LORD with all his might when bringing the Ark of the Covenant to Jerusalem.", fr: "David dansait de toutes ses forces devant l'Éternel en ramenant l'arche de l'alliance à Jérusalem." } },
      { id: 'i64-b', isTruth: true,  text: { en: "David's wife Michal despised him in her heart for dancing and leaping before the LORD.", fr: "Michal, la femme de David, le méprisa dans son cœur pour avoir dansé et sauté devant l'Éternel." } },
      { id: 'i64-c', isTruth: true,  text: { en: "A man named Uzzah died after touching the Ark to steady it during the first attempt to bring it to Jerusalem.", fr: "Un homme nommé Uzza mourut après avoir touché l'arche pour la stabiliser lors de la première tentative de la ramener à Jérusalem." } },
      { id: 'i64-d', isTruth: false, text: { en: "Michal was blessed with children despite rebuking David for dancing before the LORD.", fr: "Michal fut bénie d'enfants malgré ses reproches à David pour avoir dansé devant l'Éternel." } },
    ],
    explanation: { en: "The Bible says Michal had no children to the day of her death as a consequence of her contempt. The text explicitly connects her childlessness to her mockery of David's worship (2 Samuel 6:23).", fr: "La Bible dit que Michal n'eut pas d'enfants jusqu'au jour de sa mort en raison de son mépris. Le texte relie explicitement son absence d'enfants à sa moquerie envers l'adoration de David (2 Samuel 6:23)." },
    didYouKnow: { en: "David appointed Levites to minister with music before the ark after it was brought to Jerusalem.", fr: "Après avoir amené l’arche à Jérusalem, David établit des Lévites pour exercer leur ministère devant elle avec de la musique." }

  },
  {
    id: 'i65', levelNumber: 65, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Love Chapter — 1 Corinthians 13", fr: "Le Chapitre sur l'Amour — 1 Corinthiens 13" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i65-a', isTruth: true,  text: { en: "Paul says if he speaks in tongues of men and angels but has no love, he is only a resounding gong or clanging cymbal.", fr: "Paul dit que s'il parle les langues des hommes et des anges mais n'a pas l'amour, il est un airain qui sonne ou une cymbale qui retentit." } },
      { id: 'i65-b', isTruth: true,  text: { en: "Paul declares that love never fails, while prophecies will cease, tongues will be stilled, and knowledge will pass away.", fr: "Paul déclare que l'amour ne périra jamais, tandis que les prophéties prendront fin, les langues se tairont et la connaissance disparaîtra." } },
      { id: 'i65-c', isTruth: true,  text: { en: "Paul says now we see 'through a glass, darkly' but then we shall see face to face.", fr: "Paul dit que maintenant nous voyons 'au travers d'un miroir, de manière obscure', mais qu'alors nous verrons face à face." } },
      { id: 'i65-d', isTruth: false, text: { en: "Paul concludes that the greatest of faith, hope, and love is hope, because it endures forever.", fr: "Paul conclut que la plus grande des trois — foi, espérance et amour — est l'espérance, car elle dure éternellement." } },
    ],
    explanation: { en: "Paul concludes 'the greatest of these is love' — not hope. All three — faith, hope, and love — remain, but love is the greatest because it is eternal and the foundation of all (1 Corinthians 13:13).", fr: "Paul conclut que 'la plus grande c'est l'amour' — pas l'espérance. Les trois — foi, espérance et amour — demeurent, mais l'amour est le plus grand car il est éternel et fondement de tout (1 Corinthiens 13:13)." },
    didYouKnow: { en: "First Corinthians 13 sits between Paul's discussions of spiritual gifts in chapters 12 and 14.", fr: "1 Corinthiens 13 se trouve entre les enseignements de Paul sur les dons spirituels aux chapitres 12 et 14." }

  },
  {
    id: 'i66', levelNumber: 66, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Sheep and the Goats (Matthew 25)", fr: "Les Brebis et les Boucs (Matthieu 25)" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i66-a', isTruth: true,  text: { en: "In this parable, the Son of Man separates people as a shepherd separates sheep from goats.", fr: "Dans cette parabole, le Fils de l'homme sépare les hommes comme un berger sépare les brebis des boucs." } },
      { id: 'i66-b', isTruth: true,  text: { en: "The righteous (sheep) are rewarded for feeding the hungry, giving drink to the thirsty, and welcoming strangers.", fr: "Les justes (brebis) sont récompensés pour avoir nourri les affamés, désaltéré les assoiffés et accueilli les étrangers." } },
      { id: 'i66-c', isTruth: true,  text: { en: "Jesus says whatever was done for 'the least of these brothers and sisters of mine' was done for Him.", fr: "Jésus dit que tout ce qui a été fait 'au plus petit de ces frères et sœurs' a été fait pour lui." } },
      { id: 'i66-d', isTruth: false, text: { en: "The goats are sent to a place of temporary purification to learn from their mistakes.", fr: "Les boucs sont envoyés dans un lieu de purification temporaire pour apprendre de leurs erreurs." } },
    ],
    explanation: { en: "The goats are sent to 'eternal fire prepared for the devil and his angels' and 'eternal punishment' — not temporary purification. Jesus presents this as a final, permanent separation (Matthew 25:41, 46).", fr: "Les boucs sont envoyés dans 'le feu éternel préparé pour le diable et ses anges' et dans 'le châtiment éternel' — pas dans une purification temporaire. Jésus présente cela comme une séparation finale et permanente (Matthieu 25:41, 46)." },
    didYouKnow: { en: "In the parable, both groups are surprised by the King's statement that their treatment of 'the least of these' was treatment of him.", fr: "Dans la parabole, les deux groupes sont surpris lorsque le Roi déclare que leur manière de traiter « l’un de ces plus petits » revenait à le traiter lui-même." }

  },
  {
    id: 'i67', levelNumber: 67, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Paul's Letter to Philemon", fr: "La Lettre de Paul à Philémon" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i67-a', isTruth: true,  text: { en: "Philemon was a wealthy Christian in whose house a church met.", fr: "Philémon était un chrétien aisé chez qui se réunissait une Église." } },
      { id: 'i67-b', isTruth: true,  text: { en: "Paul wrote to Philemon on behalf of Onesimus, a runaway slave who had become a Christian.", fr: "Paul écrivit à Philémon au nom d'Onésime, un esclave fugitif qui était devenu chrétien." } },
      { id: 'i67-c', isTruth: true,  text: { en: "Paul offered to pay any debt Onesimus owed Philemon and asked Philemon to receive Onesimus as a brother.", fr: "Paul offrit de payer toute dette qu'Onésime aurait envers Philémon et demanda à Philémon de recevoir Onésime comme un frère." } },
      { id: 'i67-d', isTruth: false, text: { en: "Paul commanded Philemon directly to free Onesimus and threatened him with God's judgment if he refused.", fr: "Paul ordonna directement à Philémon de libérer Onésime et le menaça du jugement de Dieu s'il refusait." } },
    ],
    explanation: { en: "Paul made an appeal — not a command — and said he did not want to do anything without Philemon's consent. He asked him to receive Onesimus voluntarily, trusting his good character (Philemon 1:8-9, 14).", fr: "Paul fit une supplication — pas un commandement — et dit qu'il ne voulait rien faire sans le consentement de Philémon. Il lui demanda de recevoir Onésime volontairement, faisant confiance à sa bonté (Philémon 1:8-9, 14)." },
    didYouKnow: { en: "Paul calls Onesimus his 'child' in the faith and asks Philemon to receive him as he would receive Paul.", fr: "Paul appelle Onésime son « enfant » dans la foi et demande à Philémon de le recevoir comme il recevrait Paul." }

  },
  {
    id: 'i68', levelNumber: 68, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Rich Man and Lazarus", fr: "Le Riche et Lazare" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i68-a', isTruth: true,  text: { en: "In this parable, the poor man Lazarus lay at the rich man's gate, longing to eat what fell from his table.", fr: "Dans cette parabole, le pauvre Lazare était couché à la porte du riche, désirant se nourrir des miettes qui tombaient de sa table." } },
      { id: 'i68-b', isTruth: true,  text: { en: "When both men died, Lazarus went to Abraham's bosom and the rich man went to Hades.", fr: "Quand les deux hommes moururent, Lazare fut emporté dans le sein d'Abraham et le riche alla dans l'Hadès." } },
      { id: 'i68-c', isTruth: true,  text: { en: "The rich man asked Abraham to send Lazarus to warn his five brothers about the place of torment.", fr: "Le riche demanda à Abraham d'envoyer Lazare avertir ses cinq frères du lieu de tourment." } },
      { id: 'i68-d', isTruth: false, text: { en: "Abraham told the rich man that it was impossible for anyone to cross from one side to the other.", fr: "Abraham dit au riche qu'il était impossible à quiconque de passer d'un côté à l'autre." } },
    ],
    explanation: { en: "Abraham said 'a great chasm has been set in place, so that those who want to go from here to you cannot, nor can anyone cross over from there to us.' He described the chasm making crossing impossible — not that it was merely impossible 'for anyone' in an absolute sense, but that the fixed gulf prevents all crossing (Luke 16:26).", fr: "Abraham dit : 'Un grand abîme a été établi entre nous et vous, de sorte que ceux qui voudraient passer d'ici vers vous ne le peuvent pas, et que de là on ne peut pas non plus passer vers nous.' Il décrivit l'abîme comme rendant le passage impossible (Luc 16:26)." },
    didYouKnow: { en: "The rich man asks that Lazarus be sent to warn his five brothers, but Abraham points them to Moses and the Prophets.", fr: "Le riche demande que Lazare soit envoyé avertir ses cinq frères, mais Abraham les renvoie à Moïse et aux Prophètes." }

  },

  {
    id: 'i69', levelNumber: 69, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Melchizedek and Abram", fr: "Melchisédek et Abram" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i69-a', isTruth: true, text: { en: "Melchizedek was king of Salem and priest of God Most High.", fr: "Melchisédek était roi de Salem et prêtre du Dieu Très-Haut." } },
      { id: 'i69-b', isTruth: true, text: { en: "This account is recorded in Genesis 14:18–20.", fr: "Ce récit est rapporté dans Genèse 14:18–20." } },
      { id: 'i69-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i69-d', isTruth: false, text: { en: "Abram gave Melchizedek half of everything.", fr: "Abram donna à Melchisédek la moitié de tout." } },
    ],
    explanation: { en: "Melchizedek brought out bread and wine and blessed Abram. (Genesis 14:18–20).", fr: "Melchisédek apporta du pain et du vin et bénit Abram. (Genèse 14:18–20)." },
    scripture: { en: "Genesis 14:18–20", fr: "Genèse 14:18–20" },
    didYouKnow: { en: "Abram gave Melchizedek a tenth of everything, and Hebrews 7 later discusses Melchizedek extensively in connection with priesthood.", fr: "Abram donna à Melchisédek la dîme de tout, et Hébreux 7 parle ensuite longuement de Melchisédek en lien avec le sacerdoce." }
  },
  {
    id: 'i70', levelNumber: 70, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Hagar at the Spring", fr: "Agar près de la source" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i70-a', isTruth: true, text: { en: "The angel of the LORD found Hagar near a spring in the wilderness.", fr: "L’ange de l’Éternel trouva Agar près d’une source dans le désert." } },
      { id: 'i70-b', isTruth: true, text: { en: "This account is recorded in Genesis 16:7–13.", fr: "Ce récit est rapporté dans Genèse 16:7–13." } },
      { id: 'i70-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i70-d', isTruth: false, text: { en: "Hagar named the place Bethel.", fr: "Agar donna au lieu le nom de Béthel." } },
    ],
    explanation: { en: "Hagar called the LORD who spoke to her “the God who sees me.” (Genesis 16:7–13).", fr: "Agar appela l’Éternel qui lui avait parlé « le Dieu qui me voit ». (Genèse 16:7–13)." },
    scripture: { en: "Genesis 16:7–13", fr: "Genèse 16:7–13" },
    didYouKnow: { en: "The angel of the LORD found Hagar near a spring in the wilderness.", fr: "L’ange de l’Éternel trouva Agar près d’une source dans le désert." }
  },
  {
    id: 'i71', levelNumber: 71, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Abraham and Abimelech", fr: "Abraham et Abimélec" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i71-a', isTruth: true, text: { en: "God warned Abimelech in a dream concerning Sarah.", fr: "Dieu avertit Abimélec dans un songe au sujet de Sara." } },
      { id: 'i71-b', isTruth: true, text: { en: "This account is recorded in Genesis 20:1–18.", fr: "Ce récit est rapporté dans Genèse 20:1–18." } },
      { id: 'i71-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i71-d', isTruth: false, text: { en: "Abimelech was king of Egypt.", fr: "Abimélec était roi d’Égypte." } },
    ],
    explanation: { en: "Abraham prayed for Abimelech, and God healed his household. (Genesis 20:1–18).", fr: "Abraham pria pour Abimélec, et Dieu guérit sa maison. (Genèse 20:1–18)." },
    scripture: { en: "Genesis 20:1–18", fr: "Genèse 20:1–18" },
    didYouKnow: { en: "God warned Abimelech in a dream concerning Sarah.", fr: "Dieu avertit Abimélec dans un songe au sujet de Sara." }
  },
  {
    id: 'i72', levelNumber: 72, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Isaac and the Wells", fr: "Isaac et les puits" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i72-a', isTruth: true, text: { en: "Isaac’s servants dug wells in the valley of Gerar.", fr: "Les serviteurs d’Isaac creusèrent des puits dans la vallée de Guérar." } },
      { id: 'i72-b', isTruth: true, text: { en: "This account is recorded in Genesis 26:17–33.", fr: "Ce récit est rapporté dans Genèse 26:17–33." } },
      { id: 'i72-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i72-d', isTruth: false, text: { en: "Isaac named every disputed well Beersheba.", fr: "Isaac appela tous les puits contestés Beer-Schéba." } },
    ],
    explanation: { en: "Isaac named one uncontested well Rehoboth, saying the LORD had made room for them. (Genesis 26:17–33).", fr: "Isaac appela un puits non contesté Rehoboth, disant que l’Éternel leur avait donné de l’espace. (Genèse 26:17–33)." },
    scripture: { en: "Genesis 26:17–33", fr: "Genèse 26:17–33" },
    didYouKnow: { en: "Isaac’s servants dug wells in the valley of Gerar.", fr: "Les serviteurs d’Isaac creusèrent des puits dans la vallée de Guérar." }
  },
  {
    id: 'i73', levelNumber: 73, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Jacob at Peniel", fr: "Jacob à Péniel" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i73-a', isTruth: true, text: { en: "Jacob wrestled through the night and received the name Israel.", fr: "Jacob lutta pendant la nuit et reçut le nom d’Israël." } },
      { id: 'i73-b', isTruth: true, text: { en: "This account is recorded in Genesis 32:22–32.", fr: "Ce récit est rapporté dans Genèse 32:22–32." } },
      { id: 'i73-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i73-d', isTruth: false, text: { en: "Jacob crossed the Jordan without any injury.", fr: "Jacob traversa le Jourdain sans aucune blessure." } },
    ],
    explanation: { en: "Jacob named the place Peniel because he said he had seen God face to face. (Genesis 32:22–32).", fr: "Jacob appela le lieu Péniel parce qu’il disait avoir vu Dieu face à face. (Genèse 32:22–32)." },
    scripture: { en: "Genesis 32:22–32", fr: "Genèse 32:22–32" },
    didYouKnow: { en: "Jacob wrestled through the night and received the name Israel.", fr: "Jacob lutta pendant la nuit et reçut le nom d’Israël." }
  },
  {
    id: 'i74', levelNumber: 74, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Judah and Tamar", fr: "Juda et Tamar" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i74-a', isTruth: true, text: { en: "Judah acknowledged that Tamar was more righteous than he was.", fr: "Juda reconnut que Tamar était plus juste que lui." } },
      { id: 'i74-b', isTruth: true, text: { en: "This account is recorded in Genesis 38:12–30.", fr: "Ce récit est rapporté dans Genèse 38:12–30." } },
      { id: 'i74-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i74-d', isTruth: false, text: { en: "Tamar gave birth to only one son.", fr: "Tamar donna naissance à un seul fils." } },
    ],
    explanation: { en: "Tamar’s twins were named Perez and Zerah. (Genesis 38:12–30).", fr: "Les jumeaux de Tamar furent nommés Pérets et Zérach. (Genèse 38:12–30)." },
    scripture: { en: "Genesis 38:12–30", fr: "Genèse 38:12–30" },
    didYouKnow: { en: "Judah acknowledged that Tamar was more righteous than he was.", fr: "Juda reconnut que Tamar était plus juste que lui." }
  },
  {
    id: 'i75', levelNumber: 75, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Joseph Tests His Brothers", fr: "Joseph met ses frères à l’épreuve" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i75-a', isTruth: true, text: { en: "Joseph had his silver cup placed in Benjamin’s sack.", fr: "Joseph fit placer sa coupe d’argent dans le sac de Benjamin." } },
      { id: 'i75-b', isTruth: true, text: { en: "This account is recorded in Genesis 44:1–34.", fr: "Ce récit est rapporté dans Genèse 44:1–34." } },
      { id: 'i75-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i75-d', isTruth: false, text: { en: "Reuben offered himself as a slave in Benjamin’s place.", fr: "Ruben s’offrit comme esclave à la place de Benjamin." } },
    ],
    explanation: { en: "Judah pleaded to remain as a slave instead of Benjamin. (Genesis 44:1–34).", fr: "Juda supplia de rester esclave à la place de Benjamin. (Genèse 44:1–34)." },
    scripture: { en: "Genesis 44:1–34", fr: "Genèse 44:1–34" },
    didYouKnow: { en: "Joseph had his silver cup placed in Benjamin’s sack.", fr: "Joseph fit placer sa coupe d’argent dans le sac de Benjamin." }
  },
  {
    id: 'i76', levelNumber: 76, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Moses and Zipporah", fr: "Moïse et Séphora" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i76-a', isTruth: true, text: { en: "Zipporah circumcised her son during the journey to Egypt.", fr: "Séphora circoncit son fils pendant le voyage vers l’Égypte." } },
      { id: 'i76-b', isTruth: true, text: { en: "This account is recorded in Exodus 4:24–26.", fr: "Ce récit est rapporté dans Exode 4:24–26." } },
      { id: 'i76-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i76-d', isTruth: false, text: { en: "Aaron performed the circumcision.", fr: "Aaron accomplit la circoncision." } },
    ],
    explanation: { en: "This brief episode occurs after God commissioned Moses and before his return to Egypt. (Exodus 4:24–26).", fr: "Ce bref épisode se situe après l’appel de Moïse et avant son retour en Égypte. (Exode 4:24–26)." },
    scripture: { en: "Exodus 4:24–26", fr: "Exode 4:24–26" },
    didYouKnow: { en: "Zipporah circumcised her son during the journey to Egypt.", fr: "Séphora circoncit son fils pendant le voyage vers l’Égypte." }
  },
  {
    id: 'i77', levelNumber: 77, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Bitter Water at Marah", fr: "Les eaux amères de Mara" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i77-a', isTruth: true, text: { en: "The Israelites could not drink the water at Marah because it was bitter.", fr: "Les Israélites ne pouvaient boire l’eau de Mara parce qu’elle était amère." } },
      { id: 'i77-b', isTruth: true, text: { en: "This account is recorded in Exodus 15:22–25.", fr: "Ce récit est rapporté dans Exode 15:22–25." } },
      { id: 'i77-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i77-d', isTruth: false, text: { en: "Moses sweetened the water by adding salt.", fr: "Moïse adoucit l’eau en y ajoutant du sel." } },
    ],
    explanation: { en: "The LORD showed Moses a piece of wood, which he threw into the water, and it became fit to drink. (Exodus 15:22–25).", fr: "L’Éternel montra à Moïse un morceau de bois qu’il jeta dans l’eau, et elle devint potable. (Exode 15:22–25)." },
    scripture: { en: "Exodus 15:22–25", fr: "Exode 15:22–25" },
    didYouKnow: { en: "The Israelites could not drink the water at Marah because it was bitter.", fr: "Les Israélites ne pouvaient boire l’eau de Mara parce qu’elle était amère." }
  },
  {
    id: 'i78', levelNumber: 78, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Jethro’s Advice", fr: "Le conseil de Jéthro" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i78-a', isTruth: true, text: { en: "Jethro advised Moses to appoint capable men to judge routine disputes.", fr: "Jéthro conseilla à Moïse d’établir des hommes capables pour juger les affaires ordinaires." } },
      { id: 'i78-b', isTruth: true, text: { en: "This account is recorded in Exodus 18:13–26.", fr: "Ce récit est rapporté dans Exode 18:13–26." } },
      { id: 'i78-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i78-d', isTruth: false, text: { en: "Jethro told Moses to judge every case personally.", fr: "Jéthro dit à Moïse de juger personnellement chaque affaire." } },
    ],
    explanation: { en: "The appointed leaders handled simple cases while difficult matters came to Moses. (Exodus 18:13–26).", fr: "Les chefs établis traitaient les affaires simples tandis que les cas difficiles étaient portés à Moïse. (Exode 18:13–26)." },
    scripture: { en: "Exodus 18:13–26", fr: "Exode 18:13–26" },
    didYouKnow: { en: "Jethro advised Moses to appoint capable men to judge routine disputes.", fr: "Jéthro conseilla à Moïse d’établir des hommes capables pour juger les affaires ordinaires." }
  },
  {
    id: 'i79', levelNumber: 79, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Golden Calf Aftermath", fr: "Après le veau d’or" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i79-a', isTruth: true, text: { en: "Moses broke the stone tablets when he saw the calf and the dancing.", fr: "Moïse brisa les tables de pierre lorsqu’il vit le veau et les danses." } },
      { id: 'i79-b', isTruth: true, text: { en: "This account is recorded in Exodus 32:19–35.", fr: "Ce récit est rapporté dans Exode 32:19–35." } },
      { id: 'i79-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i79-d', isTruth: false, text: { en: "Moses preserved the golden calf in the tabernacle.", fr: "Moïse conserva le veau d’or dans le tabernacle." } },
    ],
    explanation: { en: "Moses burned the calf, ground it to powder, scattered it on water, and made Israel drink it. (Exodus 32:19–35).", fr: "Moïse brûla le veau, le réduisit en poudre, la répandit sur l’eau et la fit boire à Israël. (Exode 32:19–35)." },
    scripture: { en: "Exodus 32:19–35", fr: "Exode 32:19–35" },
    didYouKnow: { en: "Moses broke the stone tablets when he saw the calf and the dancing.", fr: "Moïse brisa les tables de pierre lorsqu’il vit le veau et les danses." }
  },
  {
    id: 'i80', levelNumber: 80, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Nadab and Abihu", fr: "Nadab et Abihu" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i80-a', isTruth: true, text: { en: "Nadab and Abihu offered unauthorized fire before the LORD.", fr: "Nadab et Abihu offrirent devant l’Éternel un feu étranger." } },
      { id: 'i80-b', isTruth: true, text: { en: "This account is recorded in Leviticus 10:1–7.", fr: "Ce récit est rapporté dans Lévitique 10:1–7." } },
      { id: 'i80-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i80-d', isTruth: false, text: { en: "They were sons of Moses.", fr: "Ils étaient fils de Moïse." } },
    ],
    explanation: { en: "Nadab and Abihu were sons of Aaron and died when fire came out from the LORD. (Leviticus 10:1–7).", fr: "Nadab et Abihu étaient fils d’Aaron et moururent lorsqu’un feu sortit de devant l’Éternel. (Lévitique 10:1–7)." },
    scripture: { en: "Leviticus 10:1–7", fr: "Lévitique 10:1–7" },
    didYouKnow: { en: "Nadab and Abihu offered unauthorized fire before the LORD.", fr: "Nadab et Abihu offrirent devant l’Éternel un feu étranger." }
  },
  {
    id: 'i81', levelNumber: 81, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Day of Atonement", fr: "Le jour des expiations" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i81-a', isTruth: true, text: { en: "Two goats were presented, with lots cast for the LORD and for the scapegoat.", fr: "Deux boucs furent présentés, et l’on tira au sort pour l’Éternel et pour le bouc émissaire." } },
      { id: 'i81-b', isTruth: true, text: { en: "This account is recorded in Leviticus 16:6–22.", fr: "Ce récit est rapporté dans Lévitique 16:6–22." } },
      { id: 'i81-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i81-d', isTruth: false, text: { en: "Both goats were sacrificed on the altar.", fr: "Les deux boucs furent sacrifiés sur l’autel." } },
    ],
    explanation: { en: "The live goat symbolically carried Israel’s sins into the wilderness. (Leviticus 16:6–22).", fr: "Le bouc vivant emportait symboliquement les péchés d’Israël dans le désert. (Lévitique 16:6–22)." },
    scripture: { en: "Leviticus 16:6–22", fr: "Lévitique 16:6–22" },
    didYouKnow: { en: "Two goats were presented, with lots cast for the LORD and for the scapegoat.", fr: "Deux boucs furent présentés, et l’on tira au sort pour l’Éternel et pour le bouc émissaire." }
  },
  {
    id: 'i82', levelNumber: 82, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Miriam and Aaron Oppose Moses", fr: "Miriam et Aaron s’opposent à Moïse" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i82-a', isTruth: true, text: { en: "Miriam and Aaron spoke against Moses.", fr: "Miriam et Aaron parlèrent contre Moïse." } },
      { id: 'i82-b', isTruth: true, text: { en: "This account is recorded in Numbers 12:1–15.", fr: "Ce récit est rapporté dans Nombres 12:1–15." } },
      { id: 'i82-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i82-d', isTruth: false, text: { en: "Aaron was struck with leprosy for seven days.", fr: "Aaron fut frappé de lèpre pendant sept jours." } },
    ],
    explanation: { en: "Miriam became leprous and was shut outside the camp for seven days. (Numbers 12:1–15).", fr: "Miriam devint lépreuse et fut exclue du camp pendant sept jours. (Nombres 12:1–15)." },
    scripture: { en: "Numbers 12:1–15", fr: "Nombres 12:1–15" },
    didYouKnow: { en: "Miriam and Aaron spoke against Moses.", fr: "Miriam et Aaron parlèrent contre Moïse." }
  },
  {
    id: 'i83', levelNumber: 83, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Korah’s Rebellion", fr: "La révolte de Koré" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i83-a', isTruth: true, text: { en: "Korah joined a rebellion against Moses and Aaron.", fr: "Koré participa à une révolte contre Moïse et Aaron." } },
      { id: 'i83-b', isTruth: true, text: { en: "This account is recorded in Numbers 16:1–35.", fr: "Ce récit est rapporté dans Nombres 16:1–35." } },
      { id: 'i83-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i83-d', isTruth: false, text: { en: "Korah became high priest after Aaron.", fr: "Koré devint grand prêtre après Aaron." } },
    ],
    explanation: { en: "The earth opened and swallowed members of the rebellious group. (Numbers 16:1–35).", fr: "La terre s’ouvrit et engloutit des membres du groupe rebelle. (Nombres 16:1–35)." },
    scripture: { en: "Numbers 16:1–35", fr: "Nombres 16:1–35" },
    didYouKnow: { en: "Korah joined a rebellion against Moses and Aaron.", fr: "Koré participa à une révolte contre Moïse et Aaron." }
  },
  {
    id: 'i84', levelNumber: 84, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Aaron’s Budding Staff", fr: "La verge d’Aaron qui fleurit" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i84-a', isTruth: true, text: { en: "Aaron’s staff budded, blossomed, and produced almonds.", fr: "La verge d’Aaron bourgeonna, fleurit et produisit des amandes." } },
      { id: 'i84-b', isTruth: true, text: { en: "This account is recorded in Numbers 17:1–11.", fr: "Ce récit est rapporté dans Nombres 17:1–11." } },
      { id: 'i84-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i84-d', isTruth: false, text: { en: "Moses’ staff alone was placed before the ark.", fr: "Seule la verge de Moïse fut placée devant l’arche." } },
    ],
    explanation: { en: "A staff from each tribal leader was placed before the LORD as a sign concerning the priesthood. (Numbers 17:1–11).", fr: "Une verge de chaque chef de tribu fut placée devant l’Éternel comme signe concernant le sacerdoce. (Nombres 17:1–11)." },
    scripture: { en: "Numbers 17:1–11", fr: "Nombres 17:1–11" },
    didYouKnow: { en: "Aaron’s staff budded, blossomed, and produced almonds.", fr: "La verge d’Aaron bourgeonna, fleurit et produisit des amandes." }
  },
  {
    id: 'i85', levelNumber: 85, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Bronze Serpent", fr: "Le serpent d’airain" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i85-a', isTruth: true, text: { en: "Moses made a bronze serpent and put it on a pole.", fr: "Moïse fit un serpent d’airain et le plaça sur une perche." } },
      { id: 'i85-b', isTruth: true, text: { en: "This account is recorded in Numbers 21:4–9.", fr: "Ce récit est rapporté dans Nombres 21:4–9." } },
      { id: 'i85-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i85-d', isTruth: false, text: { en: "Anyone bitten was healed by touching the serpent.", fr: "Toute personne mordue était guérie en touchant le serpent." } },
    ],
    explanation: { en: "Those who were bitten lived when they looked at the bronze serpent. (Numbers 21:4–9).", fr: "Ceux qui avaient été mordus vivaient lorsqu’ils regardaient le serpent d’airain. (Nombres 21:4–9)." },
    scripture: { en: "Numbers 21:4–9", fr: "Nombres 21:4–9" },
    didYouKnow: { en: "Moses made a bronze serpent and put it on a pole.", fr: "Moïse fit un serpent d’airain et le plaça sur une perche." }
  },
  {
    id: 'i86', levelNumber: 86, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Balaam’s Donkey", fr: "L’ânesse de Balaam" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i86-a', isTruth: true, text: { en: "Balaam’s donkey saw the angel of the LORD before Balaam did.", fr: "L’ânesse de Balaam vit l’ange de l’Éternel avant Balaam." } },
      { id: 'i86-b', isTruth: true, text: { en: "This account is recorded in Numbers 22:21–35.", fr: "Ce récit est rapporté dans Nombres 22:21–35." } },
      { id: 'i86-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i86-d', isTruth: false, text: { en: "The donkey struck Balaam three times.", fr: "L’ânesse frappa Balaam trois fois." } },
    ],
    explanation: { en: "Balaam struck his donkey three times before the LORD opened his eyes to see the angel. (Numbers 22:21–35).", fr: "Balaam frappa son ânesse trois fois avant que l’Éternel n’ouvre ses yeux pour voir l’ange. (Nombres 22:21–35)." },
    scripture: { en: "Numbers 22:21–35", fr: "Nombres 22:21–35" },
    didYouKnow: { en: "Balaam’s donkey saw the angel of the LORD before Balaam did.", fr: "L’ânesse de Balaam vit l’ange de l’Éternel avant Balaam." }
  },
  {
    id: 'i87', levelNumber: 87, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Cities of Refuge", fr: "Les villes de refuge" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i87-a', isTruth: true, text: { en: "Cities of refuge provided protection in cases of unintentional killing.", fr: "Les villes de refuge offraient une protection dans les cas d’homicide involontaire." } },
      { id: 'i87-b', isTruth: true, text: { en: "This account is recorded in Deuteronomy 19:1–13.", fr: "Ce récit est rapporté dans Deutéronome 19:1–13." } },
      { id: 'i87-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i87-d', isTruth: false, text: { en: "A deliberate murderer could claim permanent safety there.", fr: "Un meurtrier volontaire pouvait y obtenir une protection permanente." } },
    ],
    explanation: { en: "The law distinguished accidental killing from premeditated murder. (Deuteronomy 19:1–13).", fr: "La loi distinguait l’homicide accidentel du meurtre prémédité. (Deutéronome 19:1–13)." },
    scripture: { en: "Deuteronomy 19:1–13", fr: "Deutéronome 19:1–13" },
    didYouKnow: { en: "Cities of refuge provided protection in cases of unintentional killing.", fr: "Les villes de refuge offraient une protection dans les cas d’homicide involontaire." }
  },
  {
    id: 'i88', levelNumber: 88, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Moses Views the Land", fr: "Moïse contemple le pays" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i88-a', isTruth: true, text: { en: "Moses viewed the Promised Land from Mount Nebo.", fr: "Moïse contempla la Terre promise depuis le mont Nébo." } },
      { id: 'i88-b', isTruth: true, text: { en: "This account is recorded in Deuteronomy 34:1–8.", fr: "Ce récit est rapporté dans Deutéronome 34:1–8." } },
      { id: 'i88-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i88-d', isTruth: false, text: { en: "Moses entered Jericho before he died.", fr: "Moïse entra dans Jéricho avant de mourir." } },
    ],
    explanation: { en: "Deuteronomy says no one knew the location of Moses’ grave. (Deuteronomy 34:1–8).", fr: "Le Deutéronome dit que personne ne connaissait l’emplacement du tombeau de Moïse. (Deutéronome 34:1–8)." },
    scripture: { en: "Deuteronomy 34:1–8", fr: "Deutéronome 34:1–8" },
    didYouKnow: { en: "Moses viewed the Promised Land from Mount Nebo.", fr: "Moïse contempla la Terre promise depuis le mont Nébo." }
  },
  {
    id: 'i89', levelNumber: 89, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Rahab and the Spies", fr: "Rahab et les espions" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i89-a', isTruth: true, text: { en: "Rahab hid the Israelite spies on her roof.", fr: "Rahab cacha les espions israélites sur son toit." } },
      { id: 'i89-b', isTruth: true, text: { en: "This account is recorded in Joshua 2:1–21.", fr: "Ce récit est rapporté dans Josué 2:1–21." } },
      { id: 'i89-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i89-d', isTruth: false, text: { en: "Rahab marked her house with a blue cord.", fr: "Rahab marqua sa maison avec un cordon bleu." } },
    ],
    explanation: { en: "The spies told Rahab to tie a scarlet cord in her window. (Joshua 2:1–21).", fr: "Les espions dirent à Rahab d’attacher un cordon écarlate à sa fenêtre. (Josué 2:1–21)." },
    scripture: { en: "Joshua 2:1–21", fr: "Josué 2:1–21" },
    didYouKnow: { en: "Rahab hid the Israelite spies on her roof.", fr: "Rahab cacha les espions israélites sur son toit." }
  },
  {
    id: 'i90', levelNumber: 90, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Achan’s Sin", fr: "Le péché d’Acan" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i90-a', isTruth: true, text: { en: "Achan took devoted items from Jericho.", fr: "Acan prit des objets voués à l’interdit à Jéricho." } },
      { id: 'i90-b', isTruth: true, text: { en: "This account is recorded in Joshua 7:1–26.", fr: "Ce récit est rapporté dans Josué 7:1–26." } },
      { id: 'i90-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i90-d', isTruth: false, text: { en: "Joshua discovered Achan by following footprints.", fr: "Josué découvrit Acan en suivant des traces de pas." } },
    ],
    explanation: { en: "Achan confessed taking a beautiful robe, silver, and a bar of gold. (Joshua 7:1–26).", fr: "Acan confessa avoir pris un beau manteau, de l’argent et un lingot d’or. (Josué 7:1–26)." },
    scripture: { en: "Joshua 7:1–26", fr: "Josué 7:1–26" },
    didYouKnow: { en: "Achan took devoted items from Jericho.", fr: "Acan prit des objets voués à l’interdit à Jéricho." }
  },
  {
    id: 'i91', levelNumber: 91, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Gibeonite Deception", fr: "La ruse des Gabaonites" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i91-a', isTruth: true, text: { en: "The Gibeonites pretended to come from a distant country.", fr: "Les Gabaonites prétendirent venir d’un pays lointain." } },
      { id: 'i91-b', isTruth: true, text: { en: "This account is recorded in Joshua 9:3–27.", fr: "Ce récit est rapporté dans Josué 9:3–27." } },
      { id: 'i91-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i91-d', isTruth: false, text: { en: "Israel consulted the LORD before making the treaty.", fr: "Israël consulta l’Éternel avant de conclure l’alliance." } },
    ],
    explanation: { en: "Joshua 9 says Israel’s leaders did not inquire of the LORD before making the treaty. (Joshua 9:3–27).", fr: "Josué 9 dit que les chefs d’Israël ne consultèrent pas l’Éternel avant de conclure l’alliance. (Josué 9:3–27)." },
    scripture: { en: "Joshua 9:3–27", fr: "Josué 9:3–27" },
    didYouKnow: { en: "The Gibeonites pretended to come from a distant country.", fr: "Les Gabaonites prétendirent venir d’un pays lointain." }
  },
  {
    id: 'i92', levelNumber: 92, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Deborah and Barak", fr: "Débora et Barak" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i92-a', isTruth: true, text: { en: "Deborah was a prophetess and judge in Israel.", fr: "Débora était prophétesse et juge en Israël." } },
      { id: 'i92-b', isTruth: true, text: { en: "This account is recorded in Judges 4:4–24.", fr: "Ce récit est rapporté dans Juges 4:4–24." } },
      { id: 'i92-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i92-d', isTruth: false, text: { en: "Barak killed Sisera in battle.", fr: "Barak tua Sisera au combat." } },
    ],
    explanation: { en: "Jael killed Sisera after he fled from the battle. (Judges 4:4–24).", fr: "Jaël tua Sisera après sa fuite du champ de bataille. (Juges 4:4–24)." },
    scripture: { en: "Judges 4:4–24", fr: "Juges 4:4–24" },
    didYouKnow: { en: "Deborah was a prophetess and judge in Israel.", fr: "Débora était prophétesse et juge en Israël." }
  },
  {
    id: 'i93', levelNumber: 93, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Gideon’s Fleece", fr: "La toison de Gédéon" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i93-a', isTruth: true, text: { en: "Gideon asked for signs involving dew and a fleece.", fr: "Gédéon demanda des signes concernant la rosée et une toison." } },
      { id: 'i93-b', isTruth: true, text: { en: "This account is recorded in Judges 6:36–40.", fr: "Ce récit est rapporté dans Juges 6:36–40." } },
      { id: 'i93-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i93-d', isTruth: false, text: { en: "Both signs required the fleece to remain dry.", fr: "Les deux signes exigeaient que la toison reste sèche." } },
    ],
    explanation: { en: "In one sign the fleece was wet and the ground dry; in the other, the fleece was dry and the ground wet. (Judges 6:36–40).", fr: "Dans un signe la toison était mouillée et le sol sec ; dans l’autre, la toison était sèche et le sol mouillé. (Juges 6:36–40)." },
    scripture: { en: "Judges 6:36–40", fr: "Juges 6:36–40" },
    didYouKnow: { en: "Gideon asked for signs involving dew and a fleece.", fr: "Gédéon demanda des signes concernant la rosée et une toison." }
  },
  {
    id: 'i94', levelNumber: 94, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Jephthah’s Vow", fr: "Le vœu de Jephté" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i94-a', isTruth: true, text: { en: "Jephthah made a vow before fighting the Ammonites.", fr: "Jephté fit un vœu avant de combattre les Ammonites." } },
      { id: 'i94-b', isTruth: true, text: { en: "This account is recorded in Judges 11:29–40.", fr: "Ce récit est rapporté dans Juges 11:29–40." } },
      { id: 'i94-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i94-d', isTruth: false, text: { en: "His son was the first to come out to meet him.", fr: "Son fils fut le premier à sortir à sa rencontre." } },
    ],
    explanation: { en: "Jephthah’s daughter, his only child, came out to meet him with tambourines and dancing. Judges 11 says that he later fulfilled his vow concerning her, but the precise nature of that fulfillment has been interpreted differently. (Judges 11:29–40).", fr: "Ce fut la fille de Jephté, son enfant unique, qui sortit à sa rencontre avec des tambourins et des danses. Juges 11 indique qu’il accomplit ensuite son vœu à son égard, mais la nature exacte de cet accomplissement a fait l’objet de différentes interprétations. (Juges 11:29–40)." },
    scripture: { en: "Judges 11:29–40", fr: "Juges 11:29–40" },
    didYouKnow: { en: "Jephthah’s only child, his daughter, came out to meet him with tambourines and dancing.", fr: "La fille unique de Jephté sortit à sa rencontre avec des tambourins et des danses." }
  },
  {
    id: 'i95', levelNumber: 95, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Micah’s Household Shrine", fr: "Le sanctuaire domestique de Michée" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i95-a', isTruth: true, text: { en: "Micah made a shrine and installed a Levite as priest.", fr: "Michée fit un sanctuaire et établit un Lévite comme prêtre." } },
      { id: 'i95-b', isTruth: true, text: { en: "This account is recorded in Judges 17:1–13.", fr: "Ce récit est rapporté dans Juges 17:1–13." } },
      { id: 'i95-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i95-d', isTruth: false, text: { en: "The Levite was from the tribe of Benjamin.", fr: "Le Lévite était de la tribu de Benjamin." } },
    ],
    explanation: { en: "The young Levite came from Bethlehem in Judah. (Judges 17:1–13).", fr: "Le jeune Lévite venait de Bethléhem en Juda. (Juges 17:1–13)." },
    scripture: { en: "Judges 17:1–13", fr: "Juges 17:1–13" },
    didYouKnow: { en: "Micah made a shrine and installed a Levite as priest.", fr: "Michée fit un sanctuaire et établit un Lévite comme prêtre." }
  },
  {
    id: 'i96', levelNumber: 96, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Hannah’s Prayer", fr: "La prière d’Anne" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i96-a', isTruth: true, text: { en: "Hannah prayed silently, moving her lips without an audible voice.", fr: "Anne pria silencieusement, remuant les lèvres sans faire entendre sa voix." } },
      { id: 'i96-b', isTruth: true, text: { en: "This account is recorded in 1 Samuel 1:9–20.", fr: "Ce récit est rapporté dans 1 Samuel 1:9–20." } },
      { id: 'i96-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i96-d', isTruth: false, text: { en: "Eli immediately recognized that Hannah was praying.", fr: "Éli reconnut immédiatement qu’Anne priait." } },
    ],
    explanation: { en: "Eli first thought Hannah was drunk because he saw her lips moving without hearing her voice. (1 Samuel 1:9–20).", fr: "Éli pensa d’abord qu’Anne était ivre parce qu’il voyait ses lèvres bouger sans entendre sa voix. (1 Samuel 1:9–20)." },
    scripture: { en: "1 Samuel 1:9–20", fr: "1 Samuel 1:9–20" },
    didYouKnow: { en: "Hannah prayed silently, moving her lips without an audible voice.", fr: "Anne pria silencieusement, remuant les lèvres sans faire entendre sa voix." }
  },
  {
    id: 'i97', levelNumber: 97, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Ark Among the Philistines", fr: "L’arche chez les Philistins" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i97-a', isTruth: true, text: { en: "The Philistines placed the captured ark in the temple of Dagon.", fr: "Les Philistins placèrent l’arche capturée dans le temple de Dagon." } },
      { id: 'i97-b', isTruth: true, text: { en: "This account is recorded in 1 Samuel 5:1–12.", fr: "Ce récit est rapporté dans 1 Samuel 5:1–12." } },
      { id: 'i97-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i97-d', isTruth: false, text: { en: "Dagon remained standing unharmed before the ark.", fr: "Dagon resta debout et intact devant l’arche." } },
    ],
    explanation: { en: "Dagon was found fallen before the ark, and later his head and hands were broken off. (1 Samuel 5:1–12).", fr: "Dagon fut trouvé renversé devant l’arche, puis sa tête et ses mains furent brisées. (1 Samuel 5:1–12)." },
    scripture: { en: "1 Samuel 5:1–12", fr: "1 Samuel 5:1–12" },
    didYouKnow: { en: "The Philistines placed the captured ark in the temple of Dagon.", fr: "Les Philistins placèrent l’arche capturée dans le temple de Dagon." }
  },
  {
    id: 'i98', levelNumber: 98, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Saul and the Medium", fr: "Saül et la nécromancienne" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i98-a', isTruth: true, text: { en: "Saul consulted a medium at Endor before his final battle.", fr: "Saül consulta une nécromancienne à En-Dor avant sa dernière bataille." } },
      { id: 'i98-b', isTruth: true, text: { en: "This account is recorded in 1 Samuel 28:3–25.", fr: "Ce récit est rapporté dans 1 Samuel 28:3–25." } },
      { id: 'i98-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i98-d', isTruth: false, text: { en: "Samuel promised Saul victory over the Philistines.", fr: "Samuel promit à Saül la victoire sur les Philistins." } },
    ],
    explanation: { en: "The message Saul received foretold defeat and his death. (1 Samuel 28:3–25).", fr: "Le message reçu par Saül annonçait la défaite et sa mort. (1 Samuel 28:3–25)." },
    scripture: { en: "1 Samuel 28:3–25", fr: "1 Samuel 28:3–25" },
    didYouKnow: { en: "Saul consulted a medium at Endor before his final battle.", fr: "Saül consulta une nécromancienne à En-Dor avant sa dernière bataille." }
  },
  {
    id: 'i99', levelNumber: 99, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Uzzah and the Ark", fr: "Uzza et l’arche" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i99-a', isTruth: true, text: { en: "Uzzah reached out and took hold of the ark when the oxen stumbled.", fr: "Uzza étendit la main et saisit l’arche lorsque les bœufs trébuchèrent." } },
      { id: 'i99-b', isTruth: true, text: { en: "This account is recorded in 2 Samuel 6:1–11.", fr: "Ce récit est rapporté dans 2 Samuel 6:1–11." } },
      { id: 'i99-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i99-d', isTruth: false, text: { en: "David continued directly to Jerusalem with the ark that day.", fr: "David continua directement vers Jérusalem avec l’arche ce jour-là." } },
    ],
    explanation: { en: "After Uzzah died, the ark stayed three months at the house of Obed-Edom. (2 Samuel 6:1–11).", fr: "Après la mort d’Uzza, l’arche resta trois mois dans la maison d’Obed-Édom. (2 Samuel 6:1–11)." },
    scripture: { en: "2 Samuel 6:1–11", fr: "2 Samuel 6:1–11" },
    didYouKnow: { en: "Uzzah reached out and took hold of the ark when the oxen stumbled.", fr: "Uzza étendit la main et saisit l’arche lorsque les bœufs trébuchèrent." }
  },
  {
    id: 'i100', levelNumber: 100, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Mephibosheth at David’s Table", fr: "Mephibosheth à la table de David" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i100-a', isTruth: true, text: { en: "David showed kindness to Jonathan’s son Mephibosheth.", fr: "David usa de bonté envers Mephibosheth, fils de Jonathan." } },
      { id: 'i100-b', isTruth: true, text: { en: "This account is recorded in 2 Samuel 9:1–13.", fr: "Ce récit est rapporté dans 2 Samuel 9:1–13." } },
      { id: 'i100-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i100-d', isTruth: false, text: { en: "Mephibosheth was from the house of Goliath.", fr: "Mephibosheth appartenait à la maison de Goliath." } },
    ],
    explanation: { en: "David restored Saul’s land to Mephibosheth and gave him a regular place at the royal table. (2 Samuel 9:1–13).", fr: "David rendit à Mephibosheth les terres de Saül et lui donna une place régulière à la table royale. (2 Samuel 9:1–13)." },
    scripture: { en: "2 Samuel 9:1–13", fr: "2 Samuel 9:1–13" },
    didYouKnow: { en: "Mephibosheth was five years old when news of Saul and Jonathan’s deaths arrived; he became disabled in both feet after falling while his nurse fled with him.", fr: "Mephibosheth avait cinq ans lorsque la nouvelle de la mort de Saül et de Jonathan arriva ; il devint infirme des deux pieds après être tombé pendant que sa nourrice fuyait avec lui." }
  },
  {
    id: 'i101', levelNumber: 101, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Absalom’s Rebellion", fr: "La révolte d’Absalom" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i101-a', isTruth: true, text: { en: "Absalom worked to steal the hearts of the people of Israel.", fr: "Absalom chercha à gagner le cœur des Israélites." } },
      { id: 'i101-b', isTruth: true, text: { en: "This account is recorded in 2 Samuel 15:1–14.", fr: "Ce récit est rapporté dans 2 Samuel 15:1–14." } },
      { id: 'i101-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i101-d', isTruth: false, text: { en: "David arrested Absalom before the rebellion began.", fr: "David arrêta Absalom avant le début de la révolte." } },
    ],
    explanation: { en: "David fled Jerusalem when he learned that support for Absalom was growing. (2 Samuel 15:1–14).", fr: "David quitta Jérusalem lorsqu’il apprit que le soutien à Absalom augmentait. (2 Samuel 15:1–14)." },
    scripture: { en: "2 Samuel 15:1–14", fr: "2 Samuel 15:1–14" },
    didYouKnow: { en: "Absalom worked to steal the hearts of the people of Israel.", fr: "Absalom chercha à gagner le cœur des Israélites." }
  },
  {
    id: 'i102', levelNumber: 102, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Solomon and the Two Mothers", fr: "Salomon et les deux mères" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i102-a', isTruth: true, text: { en: "Solomon proposed dividing the living child with a sword to reveal the true mother.", fr: "Salomon proposa de partager l’enfant vivant avec une épée afin de révéler la vraie mère." } },
      { id: 'i102-b', isTruth: true, text: { en: "This account is recorded in 1 Kings 3:16–28.", fr: "Ce récit est rapporté dans 1 Rois 3:16–28." } },
      { id: 'i102-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i102-d', isTruth: false, text: { en: "Both women agreed that the child should be divided.", fr: "Les deux femmes acceptèrent que l’enfant soit partagé." } },
    ],
    explanation: { en: "The true mother begged that the living child be given to the other woman rather than killed. (1 Kings 3:16–28).", fr: "La vraie mère supplia qu’on donne l’enfant vivant à l’autre femme plutôt que de le tuer. (1 Rois 3:16–28)." },
    scripture: { en: "1 Kings 3:16–28", fr: "1 Rois 3:16–28" },
    didYouKnow: { en: "Solomon proposed dividing the living child with a sword to reveal the true mother.", fr: "Salomon proposa de partager l’enfant vivant avec une épée afin de révéler la vraie mère." }
  },
  {
    id: 'i103', levelNumber: 103, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Elijah at Cherith", fr: "Élie au torrent de Kerith" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i103-a', isTruth: true, text: { en: "Ravens brought Elijah bread and meat while he stayed by the brook Cherith.", fr: "Des corbeaux apportèrent à Élie du pain et de la viande pendant qu’il demeurait près du torrent de Kerith." } },
      { id: 'i103-b', isTruth: true, text: { en: "This account is recorded in 1 Kings 17:2–6.", fr: "Ce récit est rapporté dans 1 Rois 17:2–6." } },
      { id: 'i103-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i103-d', isTruth: false, text: { en: "Elijah drank wine supplied by the ravens.", fr: "Élie buvait du vin apporté par les corbeaux." } },
    ],
    explanation: { en: "Elijah drank water from the brook while ravens brought him food morning and evening. (1 Kings 17:2–6).", fr: "Élie buvait l’eau du torrent tandis que les corbeaux lui apportaient de la nourriture matin et soir. (1 Rois 17:2–6)." },
    scripture: { en: "1 Kings 17:2–6", fr: "1 Rois 17:2–6" },
    didYouKnow: { en: "Ravens brought Elijah bread and meat while he stayed by the brook Cherith.", fr: "Des corbeaux apportèrent à Élie du pain et de la viande pendant qu’il demeurait près du torrent de Kerith." }
  },
  {
    id: 'i104', levelNumber: 104, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Naboth’s Vineyard", fr: "La vigne de Naboth" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i104-a', isTruth: true, text: { en: "Naboth refused to sell his ancestral vineyard to Ahab.", fr: "Naboth refusa de vendre à Achab la vigne de ses pères." } },
      { id: 'i104-b', isTruth: true, text: { en: "This account is recorded in 1 Kings 21:1–16.", fr: "Ce récit est rapporté dans 1 Rois 21:1–16." } },
      { id: 'i104-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i104-d', isTruth: false, text: { en: "Elijah wrote the false accusations against Naboth.", fr: "Élie rédigea les fausses accusations contre Naboth." } },
    ],
    explanation: { en: "Jezebel arranged false testimony that led to Naboth’s death. (1 Kings 21:1–16).", fr: "Jézabel organisa de faux témoignages qui conduisirent à la mort de Naboth. (1 Rois 21:1–16)." },
    scripture: { en: "1 Kings 21:1–16", fr: "1 Rois 21:1–16" },
    didYouKnow: { en: "Naboth refused Ahab because the vineyard was his ancestral inheritance, not simply because he disliked the king’s offer.", fr: "Naboth refusa Achab parce que la vigne était l’héritage de ses pères, et non simplement parce qu’il n’aimait pas l’offre du roi." }
  },
  {
    id: 'i105', levelNumber: 105, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Micaiah’s Prophecy", fr: "La prophétie de Michée" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i105-a', isTruth: true, text: { en: "Micaiah foretold disaster for King Ahab despite pressure to agree with the other prophets.", fr: "Michée annonça le désastre au roi Achab malgré la pression exercée sur lui pour qu’il soit d’accord avec les autres prophètes." } },
      { id: 'i105-b', isTruth: true, text: { en: "Jehoshaphat asked whether there was another prophet of the LORD they could consult.", fr: "Josaphat demanda s’il restait un autre prophète de l’Éternel qu’ils pourraient consulter." } },
      { id: 'i105-c', isTruth: true, text: { en: "Micaiah described Israel scattered on the hills like sheep without a shepherd.", fr: "Michée décrivit Israël dispersé sur les montagnes comme des brebis qui n’ont point de berger." } },
      { id: 'i105-d', isTruth: false, text: { en: "Ahab rewarded Micaiah for faithfully delivering his prophecy.", fr: "Achab récompensa Michée pour avoir fidèlement transmis sa prophétie." } },
    ],
    explanation: { en: "Ahab did not reward Micaiah. He ordered him imprisoned and given only bread and water until the king returned safely.", fr: "Achab ne récompensa pas Michée. Il ordonna de l’emprisonner et de ne lui donner que du pain et de l’eau jusqu’au retour sain et sauf du roi." },
    scripture: { en: "1 Kings 22:5–28", fr: "1 Rois 22:5–28" },
    didYouKnow: { en: "Micaiah described a vision in which the LORD permitted a lying spirit to deceive Ahab’s prophets, while Micaiah remained faithful to the message he had received despite threats and imprisonment.", fr: "Michée décrivit une vision dans laquelle l’Éternel permit qu’un esprit de mensonge séduise les prophètes d’Achab, tandis que Michée resta fidèle au message qu’il avait reçu malgré les menaces et l’emprisonnement." }
  },
  {
    id: 'i106', levelNumber: 106, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Elisha and the Widow’s Oil", fr: "Élisée et l’huile de la veuve" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i106-a', isTruth: true, text: { en: "A widow’s small amount of oil multiplied as she poured it into borrowed jars.", fr: "La petite quantité d’huile d’une veuve se multiplia lorsqu’elle la versa dans des vases empruntés." } },
      { id: 'i106-b', isTruth: true, text: { en: "This account is recorded in 2 Kings 4:1–7.", fr: "Ce récit est rapporté dans 2 Rois 4:1–7." } },
      { id: 'i106-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i106-d', isTruth: false, text: { en: "The oil stopped only after the widow closed her door.", fr: "L’huile cessa seulement après que la veuve eut fermé sa porte." } },
    ],
    explanation: { en: "The oil stopped flowing when there were no more empty jars. (2 Kings 4:1–7).", fr: "L’huile cessa de couler lorsqu’il n’y eut plus de vase vide. (2 Rois 4:1–7)." },
    scripture: { en: "2 Kings 4:1–7", fr: "2 Rois 4:1–7" },
    didYouKnow: { en: "A widow’s small amount of oil multiplied as she poured it into borrowed jars.", fr: "La petite quantité d’huile d’une veuve se multiplia lorsqu’elle la versa dans des vases empruntés." }
  },
  {
    id: 'i107', levelNumber: 107, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Naaman’s Healing", fr: "La guérison de Naaman" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i107-a', isTruth: true, text: { en: "Naaman was told to wash seven times in the Jordan.", fr: "Naaman reçut l’ordre de se laver sept fois dans le Jourdain." } },
      { id: 'i107-b', isTruth: true, text: { en: "This account is recorded in 2 Kings 5:1–14.", fr: "Ce récit est rapporté dans 2 Rois 5:1–14." } },
      { id: 'i107-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i107-d', isTruth: false, text: { en: "Elisha personally met Naaman at the door and touched him.", fr: "Élisée rencontra personnellement Naaman à la porte et le toucha." } },
    ],
    explanation: { en: "Elisha sent a messenger with the instruction, which initially angered Naaman. (2 Kings 5:1–14).", fr: "Élisée envoya un messager avec l’instruction, ce qui irrita d’abord Naaman. (2 Rois 5:1–14)." },
    scripture: { en: "2 Kings 5:1–14", fr: "2 Rois 5:1–14" },
    didYouKnow: { en: "Naaman was told to wash seven times in the Jordan.", fr: "Naaman reçut l’ordre de se laver sept fois dans le Jourdain." }
  },
  {
    id: 'i108', levelNumber: 108, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Gehazi’s Greed", fr: "La cupidité de Guéhazi" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i108-a', isTruth: true, text: { en: "Gehazi secretly accepted gifts from Naaman after Elisha had refused them.", fr: "Guéhazi accepta secrètement des présents de Naaman après qu’Élisée les eut refusés." } },
      { id: 'i108-b', isTruth: true, text: { en: "This account is recorded in 2 Kings 5:20–27.", fr: "Ce récit est rapporté dans 2 Rois 5:20–27." } },
      { id: 'i108-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i108-d', isTruth: false, text: { en: "Elisha praised Gehazi for obtaining the gifts.", fr: "Élisée félicita Guéhazi d’avoir obtenu les présents." } },
    ],
    explanation: { en: "Gehazi was struck with Naaman’s leprosy after lying to Elisha. (2 Kings 5:20–27).", fr: "Guéhazi fut frappé de la lèpre de Naaman après avoir menti à Élisée. (2 Rois 5:20–27)." },
    scripture: { en: "2 Kings 5:20–27", fr: "2 Rois 5:20–27" },
    didYouKnow: { en: "Gehazi secretly accepted gifts from Naaman after Elisha had refused them.", fr: "Guéhazi accepta secrètement des présents de Naaman après qu’Élisée les eut refusés." }
  },
  {
    id: 'i109', levelNumber: 109, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Hezekiah and the Sundial", fr: "Ézéchias et l’ombre du cadran" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i109-a', isTruth: true, text: { en: "The shadow went backward ten steps as a sign to Hezekiah.", fr: "L’ombre recula de dix degrés comme signe donné à Ézéchias." } },
      { id: 'i109-b', isTruth: true, text: { en: "This account is recorded in 2 Kings 20:8–11.", fr: "Ce récit est rapporté dans 2 Rois 20:8–11." } },
      { id: 'i109-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i109-d', isTruth: false, text: { en: "The sign was that the sun stood still for three days.", fr: "Le signe fut que le soleil s’arrêta pendant trois jours." } },
    ],
    explanation: { en: "Isaiah called on the LORD, and the shadow moved backward on the steps of Ahaz. (2 Kings 20:8–11).", fr: "Ésaïe invoqua l’Éternel, et l’ombre recula sur les degrés d’Achaz. (2 Rois 20:8–11)." },
    scripture: { en: "2 Kings 20:8–11", fr: "2 Rois 20:8–11" },
    didYouKnow: { en: "The shadow went backward ten steps as a sign to Hezekiah.", fr: "L’ombre recula de dix degrés comme signe donné à Ézéchias." }
  },
  {
    id: 'i110', levelNumber: 110, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Josiah Finds the Book", fr: "Josias retrouve le livre" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i110-a', isTruth: true, text: { en: "The Book of the Law was found during repairs to the temple.", fr: "Le livre de la Loi fut retrouvé pendant les réparations du temple." } },
      { id: 'i110-b', isTruth: true, text: { en: "This account is recorded in 2 Kings 22:8–13.", fr: "Ce récit est rapporté dans 2 Rois 22:8–13." } },
      { id: 'i110-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i110-d', isTruth: false, text: { en: "Josiah burned the book after hearing it read.", fr: "Josias brûla le livre après l’avoir entendu lire." } },
    ],
    explanation: { en: "Josiah tore his clothes when he heard the words of the Law. (2 Kings 22:8–13).", fr: "Josias déchira ses vêtements lorsqu’il entendit les paroles de la Loi. (2 Rois 22:8–13)." },
    scripture: { en: "2 Kings 22:8–13", fr: "2 Rois 22:8–13" },
    didYouKnow: { en: "The Book of the Law was found during repairs to the temple.", fr: "Le livre de la Loi fut retrouvé pendant les réparations du temple." }
  },
  {
    id: 'i111', levelNumber: 111, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Jabez’s Prayer", fr: "La prière de Jaebets" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i111-a', isTruth: true, text: { en: "Jabez asked God to bless him and enlarge his territory.", fr: "Jaebets demanda à Dieu de le bénir et d’élargir son territoire." } },
      { id: 'i111-b', isTruth: true, text: { en: "This account is recorded in 1 Chronicles 4:9–10.", fr: "Ce récit est rapporté dans 1 Chroniques 4:9–10." } },
      { id: 'i111-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i111-d', isTruth: false, text: { en: "God explicitly refused Jabez’s request.", fr: "Dieu refusa explicitement la demande de Jaebets." } },
    ],
    explanation: { en: "The text says God granted what Jabez requested. (1 Chronicles 4:9–10).", fr: "Le texte dit que Dieu accorda ce que Jaebets avait demandé. (1 Chroniques 4:9–10)." },
    scripture: { en: "1 Chronicles 4:9–10", fr: "1 Chroniques 4:9–10" },
    didYouKnow: { en: "Jabez asked God to bless him and enlarge his territory.", fr: "Jaebets demanda à Dieu de le bénir et d’élargir son territoire." }
  },
  {
    id: 'i112', levelNumber: 112, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Jehoshaphat’s Singers", fr: "Les chantres de Josaphat" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i112-a', isTruth: true, text: { en: "Jehoshaphat appointed singers to praise the LORD as the army went out.", fr: "Josaphat établit des chantres pour louer l’Éternel tandis que l’armée avançait." } },
      { id: 'i112-b', isTruth: true, text: { en: "This account is recorded in 2 Chronicles 20:20–23.", fr: "Ce récit est rapporté dans 2 Chroniques 20:20–23." } },
      { id: 'i112-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i112-d', isTruth: false, text: { en: "The singers were ordered to remain silent until after the battle.", fr: "Les chantres reçurent l’ordre de garder le silence jusqu’après la bataille." } },
    ],
    explanation: { en: "As praise began, the LORD set ambushes against Judah’s enemies. (2 Chronicles 20:20–23).", fr: "Lorsque les louanges commencèrent, l’Éternel plaça des embuscades contre les ennemis de Juda. (2 Chroniques 20:20–23)." },
    scripture: { en: "2 Chronicles 20:20–23", fr: "2 Chroniques 20:20–23" },
    didYouKnow: { en: "Jehoshaphat appointed singers to praise the LORD as the army went out.", fr: "Josaphat établit des chantres pour louer l’Éternel tandis que l’armée avançait." }
  },
  {
    id: 'i113', levelNumber: 113, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Ezra’s Journey", fr: "Le voyage d’Esdras" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i113-a', isTruth: true, text: { en: "Ezra proclaimed a fast to seek a safe journey from God.", fr: "Esdras proclama un jeûne afin de demander à Dieu un voyage sûr." } },
      { id: 'i113-b', isTruth: true, text: { en: "This account is recorded in Ezra 8:21–23.", fr: "Ce récit est rapporté dans Esdras 8:21–23." } },
      { id: 'i113-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i113-d', isTruth: false, text: { en: "Ezra requested a large cavalry escort from the king.", fr: "Esdras demanda au roi une importante escorte de cavalerie." } },
    ],
    explanation: { en: "Ezra was ashamed to ask the king for soldiers after declaring that God’s hand was for good on those who seek Him. (Ezra 8:21–23).", fr: "Esdras eut honte de demander au roi des soldats après avoir affirmé que la main de Dieu est favorable à ceux qui le cherchent. (Esdras 8:21–23)." },
    scripture: { en: "Ezra 8:21–23", fr: "Esdras 8:21–23" },
    didYouKnow: { en: "Ezra proclaimed a fast to seek a safe journey from God.", fr: "Esdras proclama un jeûne afin de demander à Dieu un voyage sûr." }
  },
  {
    id: 'i114', levelNumber: 114, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Nehemiah’s Night Inspection", fr: "L’inspection nocturne de Néhémie" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i114-a', isTruth: true, text: { en: "Nehemiah inspected Jerusalem’s walls at night before announcing his plan.", fr: "Néhémie inspecta de nuit les murailles de Jérusalem avant d’annoncer son projet." } },
      { id: 'i114-b', isTruth: true, text: { en: "This account is recorded in Nehemiah 2:11–16.", fr: "Ce récit est rapporté dans Néhémie 2:11–16." } },
      { id: 'i114-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i114-d', isTruth: false, text: { en: "Nehemiah took the entire city council with him.", fr: "Néhémie emmena avec lui tout le conseil de la ville." } },
    ],
    explanation: { en: "Nehemiah initially told neither the officials nor the people what God had put in his heart to do. (Nehemiah 2:11–16).", fr: "Néhémie ne dit d’abord ni aux chefs ni au peuple ce que Dieu avait mis dans son cœur de faire. (Néhémie 2:11–16)." },
    scripture: { en: "Nehemiah 2:11–16", fr: "Néhémie 2:11–16" },
    didYouKnow: { en: "Nehemiah inspected Jerusalem’s walls at night before announcing his plan.", fr: "Néhémie inspecta de nuit les murailles de Jérusalem avant d’annoncer son projet." }
  },
  {
    id: 'i115', levelNumber: 115, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Esther Approaches the King", fr: "Esther se présente devant le roi" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i115-a', isTruth: true, text: { en: "Esther approached the king without being summoned.", fr: "Esther se présenta devant le roi sans avoir été appelée." } },
      { id: 'i115-b', isTruth: true, text: { en: "This account is recorded in Esther 5:1–8.", fr: "Ce récit est rapporté dans Esther 5:1–8." } },
      { id: 'i115-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i115-d', isTruth: false, text: { en: "The king immediately sentenced Esther for entering uninvited.", fr: "Le roi condamna immédiatement Esther pour être entrée sans invitation." } },
    ],
    explanation: { en: "The king extended the golden scepter to Esther and offered to grant her request. (Esther 5:1–8).", fr: "Le roi tendit à Esther le sceptre d’or et lui proposa d’accorder sa demande. (Esther 5:1–8)." },
    scripture: { en: "Esther 5:1–8", fr: "Esther 5:1–8" },
    didYouKnow: { en: "Esther approached the king without being summoned.", fr: "Esther se présenta devant le roi sans avoir été appelée." }
  },
  {
    id: 'i116', levelNumber: 116, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Job’s Friends Sit in Silence", fr: "Les amis de Job gardent le silence" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i116-a', isTruth: true, text: { en: "Job’s three friends sat with him on the ground for seven days and seven nights.", fr: "Les trois amis de Job restèrent avec lui à terre pendant sept jours et sept nuits." } },
      { id: 'i116-b', isTruth: true, text: { en: "This account is recorded in Job 2:11–13.", fr: "Ce récit est rapporté dans Job 2:11–13." } },
      { id: 'i116-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i116-d', isTruth: false, text: { en: "They immediately began debating Job on the first day.", fr: "Ils commencèrent immédiatement à débattre avec Job dès le premier jour." } },
    ],
    explanation: { en: "At first, no one spoke because they saw that Job’s suffering was very great. (Job 2:11–13).", fr: "Au début, personne ne parla parce qu’ils voyaient que la souffrance de Job était très grande. (Job 2:11–13)." },
    scripture: { en: "Job 2:11–13", fr: "Job 2:11–13" },
    didYouKnow: { en: "Job’s three friends sat with him on the ground for seven days and seven nights.", fr: "Les trois amis de Job restèrent avec lui à terre pendant sept jours et sept nuits." }
  },
  {
    id: 'i117', levelNumber: 117, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Voice from the Whirlwind", fr: "La voix du sein de la tempête" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i117-a', isTruth: true, text: { en: "The LORD answered Job out of a whirlwind.", fr: "L’Éternel répondit à Job du sein de la tempête." } },
      { id: 'i117-b', isTruth: true, text: { en: "This account is recorded in Job 38:1–7.", fr: "Ce récit est rapporté dans Job 38:1–7." } },
      { id: 'i117-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i117-d', isTruth: false, text: { en: "God began by explaining every reason for Job’s suffering.", fr: "Dieu commença par expliquer toutes les raisons de la souffrance de Job." } },
    ],
    explanation: { en: "God began with questions about creation, including the foundations of the earth. (Job 38:1–7).", fr: "Dieu commença par des questions sur la création, notamment les fondements de la terre. (Job 38:1–7)." },
    scripture: { en: "Job 38:1–7", fr: "Job 38:1–7" },
    didYouKnow: { en: "The LORD answered Job out of a whirlwind.", fr: "L’Éternel répondit à Job du sein de la tempête." }
  },
  {
    id: 'i118', levelNumber: 118, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Psalm 22", fr: "Le Psaume 22" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i118-a', isTruth: true, text: { en: "Psalm 22 begins with the cry, “My God, my God, why have you forsaken me?”", fr: "Le Psaume 22 commence par le cri : « Mon Dieu, mon Dieu, pourquoi m’as-tu abandonné ? »" } },
      { id: 'i118-b', isTruth: true, text: { en: "This account is recorded in Psalm 22:1–18.", fr: "Ce récit est rapporté dans Psaume 22:1–18." } },
      { id: 'i118-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i118-d', isTruth: false, text: { en: "Psalm 22 contains no reference to dividing garments.", fr: "Le Psaume 22 ne contient aucune référence au partage des vêtements." } },
    ],
    explanation: { en: "Psalm 22 mentions garments being divided and lots cast for clothing. (Psalm 22:1–18).", fr: "Le Psaume 22 mentionne le partage des vêtements et le tirage au sort des habits. (Psaume 22:1–18)." },
    scripture: { en: "Psalm 22:1–18", fr: "Psaume 22:1–18" },
    didYouKnow: { en: "Psalm 22 begins with the cry, “My God, my God, why have you forsaken me?”", fr: "Le Psaume 22 commence par le cri : « Mon Dieu, mon Dieu, pourquoi m’as-tu abandonné ? »" }
  },
  {
    id: 'i119', levelNumber: 119, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Agur’s Sayings", fr: "Les paroles d’Agur" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i119-a', isTruth: true, text: { en: "Proverbs 30 attributes sayings to Agur son of Jakeh.", fr: "Proverbes 30 attribue des paroles à Agur, fils de Jaké." } },
      { id: 'i119-b', isTruth: true, text: { en: "This account is recorded in Proverbs 30:1–9.", fr: "Ce récit est rapporté dans Proverbes 30:1–9." } },
      { id: 'i119-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i119-d', isTruth: false, text: { en: "Agur asked God to make him extremely wealthy.", fr: "Agur demanda à Dieu de le rendre extrêmement riche." } },
    ],
    explanation: { en: "Agur asked for neither poverty nor riches, but for his daily bread. (Proverbs 30:1–9).", fr: "Agur demanda ni pauvreté ni richesse, mais la nourriture qui lui était nécessaire. (Proverbes 30:1–9)." },
    scripture: { en: "Proverbs 30:1–9", fr: "Proverbes 30:1–9" },
    didYouKnow: { en: "Proverbs 30 attributes sayings to Agur son of Jakeh.", fr: "Proverbes 30 attribue des paroles à Agur, fils de Jaké." }
  },
  {
    id: 'i120', levelNumber: 120, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Teacher’s Conclusion", fr: "La conclusion de l’Ecclésiaste" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i120-a', isTruth: true, text: { en: "Ecclesiastes concludes by calling people to fear God and keep His commandments.", fr: "L’Ecclésiaste conclut en appelant à craindre Dieu et à garder ses commandements." } },
      { id: 'i120-b', isTruth: true, text: { en: "This account is recorded in Ecclesiastes 12:13–14.", fr: "Ce récit est rapporté dans Ecclésiaste 12:13–14." } },
      { id: 'i120-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i120-d', isTruth: false, text: { en: "The conclusion says human actions will never be judged.", fr: "La conclusion dit que les actions humaines ne seront jamais jugées." } },
    ],
    explanation: { en: "The final verses say God will bring every deed into judgment, including hidden things. (Ecclesiastes 12:13–14).", fr: "Les derniers versets disent que Dieu amènera toute œuvre en jugement, même ce qui est caché. (Ecclésiaste 12:13–14)." },
    scripture: { en: "Ecclesiastes 12:13–14", fr: "Ecclésiaste 12:13–14" },
    didYouKnow: { en: "Ecclesiastes concludes by calling people to fear God and keep His commandments.", fr: "L’Ecclésiaste conclut en appelant à craindre Dieu et à garder ses commandements." }
  },
  {
    id: 'i121', levelNumber: 121, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Isaiah’s Call", fr: "L’appel d’Ésaïe" }, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i121-a', isTruth: true, text: { en: "Isaiah saw the Lord high and exalted, with seraphim calling “Holy, holy, holy.”", fr: "Ésaïe vit le Seigneur élevé, tandis que les séraphins criaient « Saint, saint, saint »." } },
      { id: 'i121-b', isTruth: true, text: { en: "This account is recorded in Isaiah 6:1–8.", fr: "Ce récit est rapporté dans Ésaïe 6:1–8." } },
      { id: 'i121-c', isTruth: true, text: { en: "This passage belongs to the Old Testament.", fr: "Ce passage appartient à l’Ancien Testament." } },
      { id: 'i121-d', isTruth: false, text: { en: "An angel touched Isaiah’s lips with water.", fr: "Un ange toucha les lèvres d’Ésaïe avec de l’eau." } },
    ],
    explanation: { en: "A seraph touched Isaiah’s lips with a live coal from the altar. (Isaiah 6:1–8).", fr: "Un séraphin toucha les lèvres d’Ésaïe avec une braise prise sur l’autel. (Ésaïe 6:1–8)." },
    scripture: { en: "Isaiah 6:1–8", fr: "Ésaïe 6:1–8" },
    didYouKnow: { en: "Isaiah saw the Lord high and exalted, with seraphim calling “Holy, holy, holy.”", fr: "Ésaïe vit le Seigneur élevé, tandis que les séraphins criaient « Saint, saint, saint »." }
  },
  {
    id: 'i122', levelNumber: 122, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Zechariah in the Temple", fr: "Zacharie dans le temple" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i122-a', isTruth: true, text: { en: "Gabriel announced John’s birth to Zechariah while he served in the temple.", fr: "Gabriel annonça la naissance de Jean à Zacharie pendant son service au temple." } },
      { id: 'i122-b', isTruth: true, text: { en: "This account is recorded in Luke 1:5–23.", fr: "Ce récit est rapporté dans Luc 1:5–23." } },
      { id: 'i122-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i122-d', isTruth: false, text: { en: "Zechariah immediately spoke a song of praise after the announcement.", fr: "Zacharie prononça immédiatement un cantique de louange après l’annonce." } },
    ],
    explanation: { en: "Zechariah became unable to speak until the promised child was born and named. (Luke 1:5–23).", fr: "Zacharie devint incapable de parler jusqu’à la naissance et la nomination de l’enfant promis. (Luc 1:5–23)." },
    scripture: { en: "Luke 1:5–23", fr: "Luc 1:5–23" },
    didYouKnow: { en: "Gabriel announced John’s birth to Zechariah while he served in the temple.", fr: "Gabriel annonça la naissance de Jean à Zacharie pendant son service au temple." }
  },
  {
    id: 'i123', levelNumber: 123, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Simeon and Anna", fr: "Siméon et Anne" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i123-a', isTruth: true, text: { en: "Simeon and Anna encountered the infant Jesus at the temple.", fr: "Siméon et Anne rencontrèrent l’enfant Jésus au temple." } },
      { id: 'i123-b', isTruth: true, text: { en: "This account is recorded in Luke 2:25–38.", fr: "Ce récit est rapporté dans Luc 2:25–38." } },
      { id: 'i123-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i123-d', isTruth: false, text: { en: "Anna was a young unmarried woman from Nazareth.", fr: "Anne était une jeune femme célibataire de Nazareth." } },
    ],
    explanation: { en: "Anna was an elderly prophetess who worshiped with fasting and prayer. (Luke 2:25–38).", fr: "Anne était une prophétesse âgée qui servait Dieu par le jeûne et la prière. (Luc 2:25–38)." },
    scripture: { en: "Luke 2:25–38", fr: "Luc 2:25–38" },
    didYouKnow: { en: "Simeon and Anna encountered the infant Jesus at the temple.", fr: "Siméon et Anne rencontrèrent l’enfant Jésus au temple." }
  },
  {
    id: 'i124', levelNumber: 124, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Jesus at Twelve", fr: "Jésus à douze ans" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i124-a', isTruth: true, text: { en: "At age twelve Jesus stayed behind in Jerusalem after Passover.", fr: "À douze ans, Jésus resta à Jérusalem après la Pâque." } },
      { id: 'i124-b', isTruth: true, text: { en: "This account is recorded in Luke 2:41–52.", fr: "Ce récit est rapporté dans Luc 2:41–52." } },
      { id: 'i124-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i124-d', isTruth: false, text: { en: "His parents found him after one hour.", fr: "Ses parents le retrouvèrent après une heure." } },
    ],
    explanation: { en: "After three days, Mary and Joseph found Jesus in the temple among the teachers. (Luke 2:41–52).", fr: "Après trois jours, Marie et Joseph trouvèrent Jésus dans le temple parmi les docteurs. (Luc 2:41–52)." },
    scripture: { en: "Luke 2:41–52", fr: "Luc 2:41–52" },
    didYouKnow: { en: "At age twelve Jesus stayed behind in Jerusalem after Passover.", fr: "À douze ans, Jésus resta à Jérusalem après la Pâque." }
  },
  {
    id: 'i125', levelNumber: 125, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Temptation Order in Matthew", fr: "L’ordre des tentations dans Matthieu" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i125-a', isTruth: true, text: { en: "Matthew records the temptation to turn stones into bread first.", fr: "Matthieu rapporte d’abord la tentation de changer les pierres en pains." } },
      { id: 'i125-b', isTruth: true, text: { en: "This account is recorded in Matthew 4:1–11.", fr: "Ce récit est rapporté dans Matthieu 4:1–11." } },
      { id: 'i125-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i125-d', isTruth: false, text: { en: "Matthew places the temple temptation last.", fr: "Matthieu place la tentation du temple en dernier." } },
    ],
    explanation: { en: "In Matthew, the temptation involving the kingdoms of the world comes last. (Matthew 4:1–11).", fr: "Dans Matthieu, la tentation concernant les royaumes du monde vient en dernier. (Matthieu 4:1–11)." },
    scripture: { en: "Matthew 4:1–11", fr: "Matthieu 4:1–11" },
    didYouKnow: { en: "Matthew records the temptation to turn stones into bread first.", fr: "Matthieu rapporte d’abord la tentation de changer les pierres en pains." }
  },
  {
    id: 'i126', levelNumber: 126, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Centurion’s Faith", fr: "La foi du centenier" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i126-a', isTruth: true, text: { en: "A centurion asked Jesus to heal his servant.", fr: "Un centenier demanda à Jésus de guérir son serviteur." } },
      { id: 'i126-b', isTruth: true, text: { en: "This account is recorded in Matthew 8:5–13.", fr: "Ce récit est rapporté dans Matthieu 8:5–13." } },
      { id: 'i126-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i126-d', isTruth: false, text: { en: "The centurion insisted Jesus enter his house.", fr: "Le centenier insista pour que Jésus entre dans sa maison." } },
    ],
    explanation: { en: "The centurion said he was not worthy for Jesus to come under his roof and trusted His word alone. (Matthew 8:5–13).", fr: "Le centenier dit qu’il n’était pas digne que Jésus entre sous son toit et se fia à sa parole seule. (Matthieu 8:5–13)." },
    scripture: { en: "Matthew 8:5–13", fr: "Matthieu 8:5–13" },
    didYouKnow: { en: "A centurion asked Jesus to heal his servant.", fr: "Un centenier demanda à Jésus de guérir son serviteur." }
  },
  {
    id: 'i127', levelNumber: 127, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Coin in the Fish", fr: "La pièce dans le poisson" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i127-a', isTruth: true, text: { en: "Jesus told Peter to find a coin in the mouth of the first fish he caught.", fr: "Jésus dit à Pierre de trouver une pièce dans la bouche du premier poisson qu’il prendrait." } },
      { id: 'i127-b', isTruth: true, text: { en: "This account is recorded in Matthew 17:24–27.", fr: "Ce récit est rapporté dans Matthieu 17:24–27." } },
      { id: 'i127-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i127-d', isTruth: false, text: { en: "The coin was used to buy food for the disciples.", fr: "La pièce servit à acheter de la nourriture pour les disciples." } },
    ],
    explanation: { en: "The coin was used to pay the temple tax for Jesus and Peter. (Matthew 17:24–27).", fr: "La pièce servit à payer l’impôt du temple pour Jésus et Pierre. (Matthieu 17:24–27)." },
    scripture: { en: "Matthew 17:24–27", fr: "Matthieu 17:24–27" },
    didYouKnow: { en: "Jesus told Peter to find a coin in the mouth of the first fish he caught.", fr: "Jésus dit à Pierre de trouver une pièce dans la bouche du premier poisson qu’il prendrait." }
  },
  {
    id: 'i128', levelNumber: 128, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Unforgiving Servant", fr: "Le serviteur impitoyable" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i128-a', isTruth: true, text: { en: "A servant forgiven a huge debt refused to forgive a much smaller debt.", fr: "Un serviteur à qui une énorme dette avait été remise refusa de remettre une dette beaucoup plus petite." } },
      { id: 'i128-b', isTruth: true, text: { en: "This account is recorded in Matthew 18:21–35.", fr: "Ce récit est rapporté dans Matthieu 18:21–35." } },
      { id: 'i128-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i128-d', isTruth: false, text: { en: "The master praised the servant for demanding payment.", fr: "Le maître félicita le serviteur d’avoir exigé le paiement." } },
    ],
    explanation: { en: "The master became angry when he learned that the forgiven servant had shown no mercy. (Matthew 18:21–35).", fr: "Le maître se mit en colère lorsqu’il apprit que le serviteur pardonné n’avait montré aucune compassion. (Matthieu 18:21–35)." },
    scripture: { en: "Matthew 18:21–35", fr: "Matthieu 18:21–35" },
    didYouKnow: { en: "A servant forgiven a huge debt refused to forgive a much smaller debt.", fr: "Un serviteur à qui une énorme dette avait été remise refusa de remettre une dette beaucoup plus petite." }
  },
  {
    id: 'i129', levelNumber: 129, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Workers in the Vineyard", fr: "Les ouvriers de la vigne" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i129-a', isTruth: true, text: { en: "Workers hired at different hours received the same daily wage.", fr: "Des ouvriers engagés à différentes heures reçurent le même salaire journalier." } },
      { id: 'i129-b', isTruth: true, text: { en: "This account is recorded in Matthew 20:1–16.", fr: "Ce récit est rapporté dans Matthieu 20:1–16." } },
      { id: 'i129-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i129-d', isTruth: false, text: { en: "Those hired first received ten times more than those hired last.", fr: "Ceux qui furent engagés les premiers reçurent dix fois plus que les derniers." } },
    ],
    explanation: { en: "The landowner defended his right to be generous with what belonged to him. (Matthew 20:1–16).", fr: "Le maître défendit son droit d’être généreux avec ce qui lui appartenait. (Matthieu 20:1–16)." },
    scripture: { en: "Matthew 20:1–16", fr: "Matthieu 20:1–16" },
    didYouKnow: { en: "Workers hired at different hours received the same daily wage.", fr: "Des ouvriers engagés à différentes heures reçurent le même salaire journalier." }
  },
  {
    id: 'i130', levelNumber: 130, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Two Sons", fr: "Les deux fils" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i130-a', isTruth: true, text: { en: "One son initially refused to work but later changed his mind and went.", fr: "Un fils refusa d’abord de travailler, puis changea d’avis et y alla." } },
      { id: 'i130-b', isTruth: true, text: { en: "This account is recorded in Matthew 21:28–32.", fr: "Ce récit est rapporté dans Matthieu 21:28–32." } },
      { id: 'i130-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i130-d', isTruth: false, text: { en: "The son who said yes was the one who obeyed.", fr: "Le fils qui avait dit oui fut celui qui obéit." } },
    ],
    explanation: { en: "Jesus used the parable to contrast words with actual obedience. (Matthew 21:28–32).", fr: "Jésus utilisa la parabole pour opposer les paroles à l’obéissance réelle. (Matthieu 21:28–32)." },
    scripture: { en: "Matthew 21:28–32", fr: "Matthieu 21:28–32" },
    didYouKnow: { en: "Jesus told this parable while addressing the chief priests and elders, and immediately applied it to people who responded to John the Baptist’s message.", fr: "Jésus raconta cette parabole en s’adressant aux principaux sacrificateurs et aux anciens, puis l’appliqua immédiatement à ceux qui avaient répondu au message de Jean-Baptiste." }
  },
  {
    id: 'i131', levelNumber: 131, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Widow’s Offering", fr: "L’offrande de la veuve" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i131-a', isTruth: true, text: { en: "A poor widow put two small coins into the temple treasury.", fr: "Une pauvre veuve mit deux petites pièces dans le tronc du temple." } },
      { id: 'i131-b', isTruth: true, text: { en: "This account is recorded in Mark 12:41–44.", fr: "Ce récit est rapporté dans Marc 12:41–44." } },
      { id: 'i131-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i131-d', isTruth: false, text: { en: "Jesus said her gift was insignificant because it was small.", fr: "Jésus dit que son don était insignifiant parce qu’il était petit." } },
    ],
    explanation: { en: "Jesus said the widow gave more than the others because she gave out of her poverty all she had to live on. (Mark 12:41–44).", fr: "Jésus dit que la veuve avait donné plus que les autres parce qu’elle avait donné de sa pauvreté tout ce qu’elle avait pour vivre. (Marc 12:41–44)." },
    scripture: { en: "Mark 12:41–44", fr: "Marc 12:41–44" },
    didYouKnow: { en: "A poor widow put two small coins into the temple treasury.", fr: "Une pauvre veuve mit deux petites pièces dans le tronc du temple." }
  },
  {
    id: 'i132', levelNumber: 132, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Deaf and Mute Man", fr: "L’homme sourd et muet" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i132-a', isTruth: true, text: { en: "Jesus healed a man who was deaf and had difficulty speaking.", fr: "Jésus guérit un homme sourd qui avait de la difficulté à parler." } },
      { id: 'i132-b', isTruth: true, text: { en: "This account is recorded in Mark 7:31–37.", fr: "Ce récit est rapporté dans Marc 7:31–37." } },
      { id: 'i132-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i132-d', isTruth: false, text: { en: "Jesus healed him from a distant city without seeing him.", fr: "Jésus le guérit depuis une ville lointaine sans le voir." } },
    ],
    explanation: { en: "Mark records Jesus saying “Ephphatha,” meaning “Be opened.” (Mark 7:31–37).", fr: "Marc rapporte que Jésus dit « Éphphatha », ce qui signifie « Ouvre-toi ». (Marc 7:31–37)." },
    scripture: { en: "Mark 7:31–37", fr: "Marc 7:31–37" },
    didYouKnow: { en: "Jesus healed a man who was deaf and had difficulty speaking.", fr: "Jésus guérit un homme sourd qui avait de la difficulté à parler." }
  },
  {
    id: 'i133', levelNumber: 133, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Blind Man at Bethsaida", fr: "L’aveugle de Bethsaïda" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i133-a', isTruth: true, text: { en: "Jesus healed a blind man at Bethsaida in stages.", fr: "Jésus guérit progressivement un aveugle à Bethsaïda." } },
      { id: 'i133-b', isTruth: true, text: { en: "This account is recorded in Mark 8:22–26.", fr: "Ce récit est rapporté dans Marc 8:22–26." } },
      { id: 'i133-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i133-d', isTruth: false, text: { en: "The man saw perfectly after the first touch.", fr: "L’homme vit parfaitement après le premier toucher." } },
    ],
    explanation: { en: "After the first stage, the man said people looked like trees walking around. (Mark 8:22–26).", fr: "Après la première étape, l’homme dit qu’il voyait les gens comme des arbres qui marchaient. (Marc 8:22–26)." },
    scripture: { en: "Mark 8:22–26", fr: "Marc 8:22–26" },
    didYouKnow: { en: "Jesus healed a blind man at Bethsaida in stages.", fr: "Jésus guérit progressivement un aveugle à Bethsaïda." }
  },
  {
    id: 'i134', levelNumber: 134, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Young Man Who Fled", fr: "Le jeune homme qui s’enfuit" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i134-a', isTruth: true, text: { en: "Mark mentions a young man who fled naked when Jesus was arrested.", fr: "Marc mentionne un jeune homme qui s’enfuit nu lors de l’arrestation de Jésus." } },
      { id: 'i134-b', isTruth: true, text: { en: "This account is recorded in Mark 14:51–52.", fr: "Ce récit est rapporté dans Marc 14:51–52." } },
      { id: 'i134-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i134-d', isTruth: false, text: { en: "The text identifies the young man as John.", fr: "Le texte identifie le jeune homme comme Jean." } },
    ],
    explanation: { en: "The young man left his linen garment behind when people seized him. (Mark 14:51–52).", fr: "Le jeune homme abandonna son vêtement de lin lorsqu’on le saisit. (Marc 14:51–52)." },
    scripture: { en: "Mark 14:51–52", fr: "Marc 14:51–52" },
    didYouKnow: { en: "Mark mentions a young man who fled naked when Jesus was arrested.", fr: "Marc mentionne un jeune homme qui s’enfuit nu lors de l’arrestation de Jésus." }
  },
  {
    id: 'i135', levelNumber: 135, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Miraculous Catch Before Peter’s Call", fr: "La pêche miraculeuse avant l’appel de Pierre" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i135-a', isTruth: true, text: { en: "Simon’s nets caught so many fish that they began to break.", fr: "Les filets de Simon prirent tant de poissons qu’ils commencèrent à se rompre." } },
      { id: 'i135-b', isTruth: true, text: { en: "This account is recorded in Luke 5:1–11.", fr: "Ce récit est rapporté dans Luc 5:1–11." } },
      { id: 'i135-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i135-d', isTruth: false, text: { en: "Simon had caught many fish during the previous night.", fr: "Simon avait pris beaucoup de poissons pendant la nuit précédente." } },
    ],
    explanation: { en: "Simon said they had worked all night without catching anything before obeying Jesus’ instruction. (Luke 5:1–11).", fr: "Simon dit qu’ils avaient travaillé toute la nuit sans rien prendre avant d’obéir à l’ordre de Jésus. (Luc 5:1–11)." },
    scripture: { en: "Luke 5:1–11", fr: "Luc 5:1–11" },
    didYouKnow: { en: "Simon’s nets caught so many fish that they began to break.", fr: "Les filets de Simon prirent tant de poissons qu’ils commencèrent à se rompre." }
  },
  {
    id: 'i136', levelNumber: 136, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Widow of Nain", fr: "La veuve de Naïn" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i136-a', isTruth: true, text: { en: "Jesus raised the only son of a widow at Nain.", fr: "Jésus ressuscita le fils unique d’une veuve à Naïn." } },
      { id: 'i136-b', isTruth: true, text: { en: "This account is recorded in Luke 7:11–17.", fr: "Ce récit est rapporté dans Luc 7:11–17." } },
      { id: 'i136-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i136-d', isTruth: false, text: { en: "The widow asked Jesus for money for the funeral.", fr: "La veuve demanda à Jésus de l’argent pour les funérailles." } },
    ],
    explanation: { en: "Jesus was moved with compassion before telling the young man to arise. (Luke 7:11–17).", fr: "Jésus fut ému de compassion avant de dire au jeune homme de se lever. (Luc 7:11–17)." },
    scripture: { en: "Luke 7:11–17", fr: "Luc 7:11–17" },
    didYouKnow: { en: "Jesus raised the only son of a widow at Nain.", fr: "Jésus ressuscita le fils unique d’une veuve à Naïn." }
  },
  {
    id: 'i137', levelNumber: 137, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Seventy-Two Return", fr: "Le retour des soixante-douze" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i137-a', isTruth: true, text: { en: "The disciples returned rejoicing that demons submitted to them in Jesus’ name.", fr: "Les disciples revinrent avec joie parce que les démons leur étaient soumis au nom de Jésus." } },
      { id: 'i137-b', isTruth: true, text: { en: "This account is recorded in Luke 10:17–20.", fr: "Ce récit est rapporté dans Luc 10:17–20." } },
      { id: 'i137-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i137-d', isTruth: false, text: { en: "Jesus told them their greatest joy should be their power over spirits.", fr: "Jésus leur dit que leur plus grande joie devait être leur pouvoir sur les esprits." } },
    ],
    explanation: { en: "Jesus told them to rejoice that their names were written in heaven. (Luke 10:17–20).", fr: "Jésus leur dit de se réjouir de ce que leurs noms étaient écrits dans les cieux. (Luc 10:17–20)." },
    scripture: { en: "Luke 10:17–20", fr: "Luc 10:17–20" },
    didYouKnow: { en: "The disciples returned rejoicing that demons submitted to them in Jesus’ name.", fr: "Les disciples revinrent avec joie parce que les démons leur étaient soumis au nom de Jésus." }
  },
  {
    id: 'i138', levelNumber: 138, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Mary and Martha", fr: "Marie et Marthe" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i138-a', isTruth: true, text: { en: "Mary sat at Jesus’ feet listening while Martha was distracted by serving.", fr: "Marie était assise aux pieds de Jésus et écoutait tandis que Marthe était absorbée par le service." } },
      { id: 'i138-b', isTruth: true, text: { en: "This account is recorded in Luke 10:38–42.", fr: "Ce récit est rapporté dans Luc 10:38–42." } },
      { id: 'i138-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i138-d', isTruth: false, text: { en: "Jesus ordered Mary to help Martha immediately.", fr: "Jésus ordonna à Marie d’aider immédiatement Marthe." } },
    ],
    explanation: { en: "Jesus said Mary had chosen the better part, which would not be taken from her. (Luke 10:38–42).", fr: "Jésus dit que Marie avait choisi la bonne part, qui ne lui serait pas ôtée. (Luc 10:38–42)." },
    scripture: { en: "Luke 10:38–42", fr: "Luc 10:38–42" },
    didYouKnow: { en: "Mary sat at Jesus’ feet listening while Martha was distracted by serving.", fr: "Marie était assise aux pieds de Jésus et écoutait tandis que Marthe était absorbée par le service." }
  },
  {
    id: 'i139', levelNumber: 139, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Bent-Over Woman", fr: "La femme courbée" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i139-a', isTruth: true, text: { en: "Jesus healed a woman who had been bent over for eighteen years.", fr: "Jésus guérit une femme courbée depuis dix-huit ans." } },
      { id: 'i139-b', isTruth: true, text: { en: "This account is recorded in Luke 13:10–17.", fr: "Ce récit est rapporté dans Luc 13:10–17." } },
      { id: 'i139-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i139-d', isTruth: false, text: { en: "The synagogue ruler celebrated because the healing occurred on the Sabbath.", fr: "Le chef de la synagogue se réjouit parce que la guérison eut lieu un sabbat." } },
    ],
    explanation: { en: "The synagogue ruler objected to the Sabbath healing, and Jesus answered by appealing to compassion. (Luke 13:10–17).", fr: "Le chef de la synagogue s’opposa à la guérison le jour du sabbat, et Jésus répondit en faisant appel à la compassion. (Luc 13:10–17)." },
    scripture: { en: "Luke 13:10–17", fr: "Luc 13:10–17" },
    didYouKnow: { en: "Jesus healed a woman who had been bent over for eighteen years.", fr: "Jésus guérit une femme courbée depuis dix-huit ans." }
  },
  {
    id: 'i140', levelNumber: 140, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Ten Lepers", fr: "Les dix lépreux" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i140-a', isTruth: true, text: { en: "Ten lepers were cleansed as they went to show themselves to the priests.", fr: "Dix lépreux furent purifiés en allant se montrer aux prêtres." } },
      { id: 'i140-b', isTruth: true, text: { en: "This account is recorded in Luke 17:11–19.", fr: "Ce récit est rapporté dans Luc 17:11–19." } },
      { id: 'i140-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i140-d', isTruth: false, text: { en: "All ten returned to thank Jesus.", fr: "Les dix revinrent remercier Jésus." } },
    ],
    explanation: { en: "Only one returned to give thanks, and he was a Samaritan. (Luke 17:11–19).", fr: "Un seul revint rendre grâce, et c’était un Samaritain. (Luc 17:11–19)." },
    scripture: { en: "Luke 17:11–19", fr: "Luc 17:11–19" },
    didYouKnow: { en: "Ten lepers were cleansed as they went to show themselves to the priests.", fr: "Dix lépreux furent purifiés en allant se montrer aux prêtres." }
  },
  {
    id: 'i141', levelNumber: 141, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Zacchaeus", fr: "Zachée" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i141-a', isTruth: true, text: { en: "Zacchaeus climbed a sycamore-fig tree to see Jesus.", fr: "Zachée monta sur un sycomore pour voir Jésus." } },
      { id: 'i141-b', isTruth: true, text: { en: "This account is recorded in Luke 19:1–10.", fr: "Ce récit est rapporté dans Luc 19:1–10." } },
      { id: 'i141-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i141-d', isTruth: false, text: { en: "Zacchaeus was a poor fisherman.", fr: "Zachée était un pauvre pêcheur." } },
    ],
    explanation: { en: "Zacchaeus was a chief tax collector and wealthy. (Luke 19:1–10).", fr: "Zachée était chef des publicains et riche. (Luc 19:1–10)." },
    scripture: { en: "Luke 19:1–10", fr: "Luc 19:1–10" },
    didYouKnow: { en: "Zacchaeus climbed a sycamore-fig tree to see Jesus.", fr: "Zachée monta sur un sycomore pour voir Jésus." }
  },
  {
    id: 'i142', levelNumber: 142, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Nicodemus at Night", fr: "Nicodème de nuit" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i142-a', isTruth: true, text: { en: "Nicodemus came to Jesus at night.", fr: "Nicodème vint trouver Jésus de nuit." } },
      { id: 'i142-b', isTruth: true, text: { en: "This account is recorded in John 3:1–21.", fr: "Ce récit est rapporté dans Jean 3:1–21." } },
      { id: 'i142-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i142-d', isTruth: false, text: { en: "Nicodemus was a Sadducee.", fr: "Nicodème était un Sadducéen." } },
    ],
    explanation: { en: "John identifies Nicodemus as a Pharisee and a member of the Jewish ruling council. (John 3:1–21).", fr: "Jean présente Nicodème comme un Pharisien et un chef des Juifs. (Jean 3:1–21)." },
    scripture: { en: "John 3:1–21", fr: "Jean 3:1–21" },
    didYouKnow: { en: "Nicodemus came to Jesus at night.", fr: "Nicodème vint trouver Jésus de nuit." }
  },
  {
    id: 'i143', levelNumber: 143, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Samaritan Woman", fr: "La femme samaritaine" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i143-a', isTruth: true, text: { en: "Jesus spoke with a Samaritan woman at Jacob’s well.", fr: "Jésus parla avec une femme samaritaine au puits de Jacob." } },
      { id: 'i143-b', isTruth: true, text: { en: "This account is recorded in John 4:4–42.", fr: "Ce récit est rapporté dans Jean 4:4–42." } },
      { id: 'i143-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i143-d', isTruth: false, text: { en: "Jesus told her she had never been married.", fr: "Jésus lui dit qu’elle n’avait jamais été mariée." } },
    ],
    explanation: { en: "Jesus told her she had had five husbands and the man she then had was not her husband. (John 4:4–42).", fr: "Jésus lui dit qu’elle avait eu cinq maris et que l’homme qu’elle avait alors n’était pas son mari. (Jean 4:4–42)." },
    scripture: { en: "John 4:4–42", fr: "Jean 4:4–42" },
    didYouKnow: { en: "Jesus spoke with a Samaritan woman at Jacob’s well.", fr: "Jésus parla avec une femme samaritaine au puits de Jacob." }
  },
  {
    id: 'i144', levelNumber: 144, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Pool of Bethesda", fr: "La piscine de Béthesda" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i144-a', isTruth: true, text: { en: "Jesus healed a man who had been disabled for thirty-eight years.", fr: "Jésus guérit un homme infirme depuis trente-huit ans." } },
      { id: 'i144-b', isTruth: true, text: { en: "This account is recorded in John 5:1–15.", fr: "Ce récit est rapporté dans Jean 5:1–15." } },
      { id: 'i144-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i144-d', isTruth: false, text: { en: "The healing occurred during a wedding feast.", fr: "La guérison eut lieu pendant un festin de noces." } },
    ],
    explanation: { en: "The healing occurred on a Sabbath, which became a point of controversy. (John 5:1–15).", fr: "La guérison eut lieu un jour de sabbat, ce qui provoqua une controverse. (Jean 5:1–15)." },
    scripture: { en: "John 5:1–15", fr: "Jean 5:1–15" },
    didYouKnow: { en: "Jesus healed a man who had been disabled for thirty-eight years.", fr: "Jésus guérit un homme infirme depuis trente-huit ans." }
  },
  {
    id: 'i145', levelNumber: 145, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Bread of Life Discourse", fr: "Le discours sur le pain de vie" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i145-a', isTruth: true, text: { en: "Jesus called Himself the bread of life.", fr: "Jésus se présenta comme le pain de vie." } },
      { id: 'i145-b', isTruth: true, text: { en: "This account is recorded in John 6:22–71.", fr: "Ce récit est rapporté dans Jean 6:22–71." } },
      { id: 'i145-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i145-d', isTruth: false, text: { en: "Every disciple continued following Jesus after this teaching.", fr: "Tous les disciples continuèrent à suivre Jésus après cet enseignement." } },
    ],
    explanation: { en: "John says many disciples turned back and no longer followed Jesus after this teaching. (John 6:22–71).", fr: "Jean dit que plusieurs disciples se retirèrent et ne suivirent plus Jésus après cet enseignement. (Jean 6:22–71)." },
    scripture: { en: "John 6:22–71", fr: "Jean 6:22–71" },
    didYouKnow: { en: "Jesus called Himself the bread of life.", fr: "Jésus se présenta comme le pain de vie." }
  },
  {
    id: 'i146', levelNumber: 146, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Man Born Blind", fr: "L’aveugle-né" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i146-a', isTruth: true, text: { en: "Jesus made mud with saliva and put it on the blind man’s eyes.", fr: "Jésus fit de la boue avec sa salive et l’appliqua sur les yeux de l’aveugle." } },
      { id: 'i146-b', isTruth: true, text: { en: "This account is recorded in John 9:1–41.", fr: "Ce récit est rapporté dans Jean 9:1–41." } },
      { id: 'i146-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i146-d', isTruth: false, text: { en: "Jesus told the man to wash in the Jordan River.", fr: "Jésus dit à l’homme de se laver dans le Jourdain." } },
    ],
    explanation: { en: "Jesus told the man to wash in the Pool of Siloam. (John 9:1–41).", fr: "Jésus dit à l’homme de se laver à la piscine de Siloé. (Jean 9:1–41)." },
    scripture: { en: "John 9:1–41", fr: "Jean 9:1–41" },
    didYouKnow: { en: "Jesus made mud with saliva and put it on the blind man’s eyes.", fr: "Jésus fit de la boue avec sa salive et l’appliqua sur les yeux de l’aveugle." }
  },
  {
    id: 'i147', levelNumber: 147, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Lazarus and the Four Days", fr: "Lazare et les quatre jours" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i147-a', isTruth: true, text: { en: "Lazarus had been in the tomb four days when Jesus arrived.", fr: "Lazare était dans le tombeau depuis quatre jours lorsque Jésus arriva." } },
      { id: 'i147-b', isTruth: true, text: { en: "This account is recorded in John 11:17–44.", fr: "Ce récit est rapporté dans Jean 11:17–44." } },
      { id: 'i147-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i147-d', isTruth: false, text: { en: "Jesus asked Martha to roll away the stone by herself.", fr: "Jésus demanda à Marthe de rouler seule la pierre." } },
    ],
    explanation: { en: "Jesus commanded that the stone be removed and then called Lazarus out of the tomb. (John 11:17–44).", fr: "Jésus ordonna d’ôter la pierre puis appela Lazare hors du tombeau. (Jean 11:17–44)." },
    scripture: { en: "John 11:17–44", fr: "Jean 11:17–44" },
    didYouKnow: { en: "Lazarus had been in the tomb four days when Jesus arrived.", fr: "Lazare était dans le tombeau depuis quatre jours lorsque Jésus arriva." }
  },
  {
    id: 'i148', levelNumber: 148, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Jesus Washes the Disciples’ Feet", fr: "Jésus lave les pieds des disciples" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i148-a', isTruth: true, text: { en: "Jesus washed His disciples’ feet during the final meal.", fr: "Jésus lava les pieds de ses disciples pendant le dernier repas." } },
      { id: 'i148-b', isTruth: true, text: { en: "This account is recorded in John 13:1–17.", fr: "Ce récit est rapporté dans Jean 13:1–17." } },
      { id: 'i148-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i148-d', isTruth: false, text: { en: "Peter immediately accepted without objection.", fr: "Pierre accepta immédiatement sans objection." } },
    ],
    explanation: { en: "Peter first objected, but Jesus told him that without being washed he had no share with Him. (John 13:1–17).", fr: "Pierre s’opposa d’abord, mais Jésus lui dit que s’il ne le lavait pas, il n’aurait point de part avec lui. (Jean 13:1–17)." },
    scripture: { en: "John 13:1–17", fr: "Jean 13:1–17" },
    didYouKnow: { en: "Jesus washed His disciples’ feet during the final meal.", fr: "Jésus lava les pieds de ses disciples pendant le dernier repas." }
  },
  {
    id: 'i149', levelNumber: 149, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Malchus’s Ear", fr: "L’oreille de Malchus" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i149-a', isTruth: true, text: { en: "Peter cut off the right ear of the high priest’s servant, Malchus.", fr: "Pierre coupa l’oreille droite de Malchus, serviteur du grand prêtre." } },
      { id: 'i149-b', isTruth: true, text: { en: "This account is recorded in John 18:10–11; Luke 22:50–51.", fr: "Ce récit est rapporté dans Jean 18:10–11 ; Luc 22:50–51." } },
      { id: 'i149-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i149-d', isTruth: false, text: { en: "Jesus praised Peter for defending Him with the sword.", fr: "Jésus félicita Pierre de l’avoir défendu avec l’épée." } },
    ],
    explanation: { en: "Luke records that Jesus touched the servant’s ear and healed him. (John 18:10–11; Luke 22:50–51).", fr: "Luc rapporte que Jésus toucha l’oreille du serviteur et le guérit. (Jean 18:10–11 ; Luc 22:50–51)." },
    scripture: { en: "John 18:10–11; Luke 22:50–51", fr: "Jean 18:10–11 ; Luc 22:50–51" },
    didYouKnow: { en: "Peter cut off the right ear of the high priest’s servant, Malchus.", fr: "Pierre coupa l’oreille droite de Malchus, serviteur du grand prêtre." }
  },
  {
    id: 'i150', levelNumber: 150, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Thomas and the Risen Jesus", fr: "Thomas et Jésus ressuscité" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i150-a', isTruth: true, text: { en: "Thomas was absent when Jesus first appeared to the gathered disciples.", fr: "Thomas était absent lorsque Jésus apparut d’abord aux disciples réunis." } },
      { id: 'i150-b', isTruth: true, text: { en: "This account is recorded in John 20:24–29.", fr: "Ce récit est rapporté dans Jean 20:24–29." } },
      { id: 'i150-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i150-d', isTruth: false, text: { en: "Thomas believed the resurrection without asking for evidence.", fr: "Thomas crut à la résurrection sans demander de preuve." } },
    ],
    explanation: { en: "Thomas said he wanted to see the nail marks and put his hand into Jesus’ side. (John 20:24–29).", fr: "Thomas dit qu’il voulait voir la marque des clous et mettre sa main dans le côté de Jésus. (Jean 20:24–29)." },
    scripture: { en: "John 20:24–29", fr: "Jean 20:24–29" },
    didYouKnow: { en: "Thomas was absent when Jesus first appeared to the gathered disciples.", fr: "Thomas était absent lorsque Jésus apparut d’abord aux disciples réunis." }
  },
  {
    id: 'i151', levelNumber: 151, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Matthias Chosen", fr: "Matthias choisi" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i151-a', isTruth: true, text: { en: "Matthias was chosen to replace Judas among the Twelve.", fr: "Matthias fut choisi pour remplacer Judas parmi les Douze." } },
      { id: 'i151-b', isTruth: true, text: { en: "This account is recorded in Acts 1:15–26.", fr: "Ce récit est rapporté dans Actes 1:15–26." } },
      { id: 'i151-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i151-d', isTruth: false, text: { en: "Paul was the other candidate in the selection.", fr: "Paul était l’autre candidat lors du choix." } },
    ],
    explanation: { en: "The two candidates named were Joseph called Barsabbas and Matthias. (Acts 1:15–26).", fr: "Les deux candidats nommés étaient Joseph appelé Barsabbas et Matthias. (Actes 1:15–26)." },
    scripture: { en: "Acts 1:15–26", fr: "Actes 1:15–26" },
    didYouKnow: { en: "Matthias was chosen to replace Judas among the Twelve.", fr: "Matthias fut choisi pour remplacer Judas parmi les Douze." }
  },
  {
    id: 'i152', levelNumber: 152, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Ananias and Sapphira", fr: "Ananias et Saphira" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i152-a', isTruth: true, text: { en: "Ananias and Sapphira lied about the proceeds from a property sale.", fr: "Ananias et Saphira mentirent au sujet du prix d’une propriété vendue." } },
      { id: 'i152-b', isTruth: true, text: { en: "This account is recorded in Acts 5:1–11.", fr: "Ce récit est rapporté dans Actes 5:1–11." } },
      { id: 'i152-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i152-d', isTruth: false, text: { en: "Peter said their sin was keeping any portion of their own money.", fr: "Pierre dit que leur péché était d’avoir gardé une partie de leur propre argent." } },
    ],
    explanation: { en: "Peter said Ananias had lied to the Holy Spirit; the deception, not mere ownership, was central to the judgment. (Acts 5:1–11).", fr: "Pierre dit qu’Ananias avait menti au Saint-Esprit ; la tromperie, et non la simple possession, était au cœur du jugement. (Actes 5:1–11)." },
    scripture: { en: "Acts 5:1–11", fr: "Actes 5:1–11" },
    didYouKnow: { en: "Ananias and Sapphira lied about the proceeds from a property sale.", fr: "Ananias et Saphira mentirent au sujet du prix d’une propriété vendue." }
  },
  {
    id: 'i153', levelNumber: 153, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Philip and the Ethiopian", fr: "Philippe et l’Éthiopien" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i153-a', isTruth: true, text: { en: "Philip explained a passage from Isaiah to an Ethiopian official.", fr: "Philippe expliqua un passage d’Ésaïe à un fonctionnaire éthiopien." } },
      { id: 'i153-b', isTruth: true, text: { en: "This account is recorded in Acts 8:26–40.", fr: "Ce récit est rapporté dans Actes 8:26–40." } },
      { id: 'i153-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i153-d', isTruth: false, text: { en: "The official was reading from Jeremiah.", fr: "Le fonctionnaire lisait le livre de Jérémie." } },
    ],
    explanation: { en: "The passage being read was from Isaiah, and Philip began there to tell him the good news about Jesus. (Acts 8:26–40).", fr: "Le passage lu venait d’Ésaïe, et Philippe partit de ce texte pour lui annoncer la bonne nouvelle de Jésus. (Actes 8:26–40)." },
    scripture: { en: "Acts 8:26–40", fr: "Actes 8:26–40" },
    didYouKnow: { en: "Philip explained a passage from Isaiah to an Ethiopian official.", fr: "Philippe expliqua un passage d’Ésaïe à un fonctionnaire éthiopien." }
  },
  {
    id: 'i154', levelNumber: 154, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Peter’s Vision", fr: "La vision de Pierre" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i154-a', isTruth: true, text: { en: "Peter saw a sheet containing many kinds of animals lowered from heaven.", fr: "Pierre vit une nappe contenant toutes sortes d’animaux descendre du ciel." } },
      { id: 'i154-b', isTruth: true, text: { en: "This account is recorded in Acts 10:9–23.", fr: "Ce récit est rapporté dans Actes 10:9–23." } },
      { id: 'i154-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i154-d', isTruth: false, text: { en: "The vision occurred once.", fr: "La vision se produisit une seule fois." } },
    ],
    explanation: { en: "Acts says the vision happened three times before the object was taken back to heaven. (Acts 10:9–23).", fr: "Les Actes disent que la vision se produisit trois fois avant que l’objet ne soit retiré au ciel. (Actes 10:9–23)." },
    scripture: { en: "Acts 10:9–23", fr: "Actes 10:9–23" },
    didYouKnow: { en: "Peter saw a sheet containing many kinds of animals lowered from heaven.", fr: "Pierre vit une nappe contenant toutes sortes d’animaux descendre du ciel." }
  },
  {
    id: 'i155', levelNumber: 155, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Herod Agrippa’s Death", fr: "La mort d’Hérode Agrippa" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i155-a', isTruth: true, text: { en: "Herod accepted praise from the crowd that called his voice divine.", fr: "Hérode accepta les acclamations de la foule qui attribuait sa voix à un dieu." } },
      { id: 'i155-b', isTruth: true, text: { en: "This account is recorded in Acts 12:20–23.", fr: "Ce récit est rapporté dans Actes 12:20–23." } },
      { id: 'i155-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i155-d', isTruth: false, text: { en: "Herod immediately gave all glory to God.", fr: "Hérode rendit immédiatement toute la gloire à Dieu." } },
    ],
    explanation: { en: "Acts says an angel struck Herod because he did not give glory to God. (Acts 12:20–23).", fr: "Les Actes disent qu’un ange frappa Hérode parce qu’il n’avait pas donné gloire à Dieu. (Actes 12:20–23)." },
    scripture: { en: "Acts 12:20–23", fr: "Actes 12:20–23" },
    didYouKnow: { en: "Herod accepted praise from the crowd that called his voice divine.", fr: "Hérode accepta les acclamations de la foule qui attribuait sa voix à un dieu." }
  },
  {
    id: 'i156', levelNumber: 156, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Jerusalem Council", fr: "Le concile de Jérusalem" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i156-a', isTruth: true, text: { en: "The Jerusalem council addressed whether Gentile believers had to be circumcised according to Moses’ custom.", fr: "Le concile de Jérusalem examina si les croyants non juifs devaient être circoncis selon la coutume de Moïse." } },
      { id: 'i156-b', isTruth: true, text: { en: "This account is recorded in Acts 15:1–29.", fr: "Ce récit est rapporté dans Actes 15:1–29." } },
      { id: 'i156-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i156-d', isTruth: false, text: { en: "The council required Gentiles to keep the entire Mosaic law for salvation.", fr: "Le concile exigea des non-Juifs qu’ils gardent toute la loi de Moïse pour être sauvés." } },
    ],
    explanation: { en: "The apostles and elders rejected imposing the full yoke of the law on Gentile believers and sent specific instructions. (Acts 15:1–29).", fr: "Les apôtres et les anciens refusèrent d’imposer tout le joug de la loi aux croyants non juifs et envoyèrent des instructions précises. (Actes 15:1–29)." },
    scripture: { en: "Acts 15:1–29", fr: "Actes 15:1–29" },
    didYouKnow: { en: "The Jerusalem council addressed whether Gentile believers had to be circumcised according to Moses’ custom.", fr: "Le concile de Jérusalem examina si les croyants non juifs devaient être circoncis selon la coutume de Moïse." }
  },
  {
    id: 'i157', levelNumber: 157, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Bereans", fr: "Les Béréens" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i157-a', isTruth: true, text: { en: "The Bereans examined the Scriptures daily to test Paul’s message.", fr: "Les Béréens examinaient chaque jour les Écritures pour vérifier le message de Paul." } },
      { id: 'i157-b', isTruth: true, text: { en: "This account is recorded in Acts 17:10–12.", fr: "Ce récit est rapporté dans Actes 17:10–12." } },
      { id: 'i157-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i157-d', isTruth: false, text: { en: "They rejected Paul without examining his teaching.", fr: "Ils rejetèrent Paul sans examiner son enseignement." } },
    ],
    explanation: { en: "Acts describes the Bereans as more noble-minded because they received the message eagerly and checked the Scriptures. (Acts 17:10–12).", fr: "Les Actes décrivent les Béréens comme ayant des sentiments plus nobles parce qu’ils reçurent la parole avec empressement et examinèrent les Écritures. (Actes 17:10–12)." },
    scripture: { en: "Acts 17:10–12", fr: "Actes 17:10–12" },
    didYouKnow: { en: "The Bereans examined the Scriptures daily to test Paul’s message.", fr: "Les Béréens examinaient chaque jour les Écritures pour vérifier le message de Paul." }
  },
  {
    id: 'i158', levelNumber: 158, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Eutychus", fr: "Eutychus" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i158-a', isTruth: true, text: { en: "Eutychus fell from a third-story window while Paul was speaking late into the night.", fr: "Eutychus tomba d’une fenêtre du troisième étage pendant que Paul parlait tard dans la nuit." } },
      { id: 'i158-b', isTruth: true, text: { en: "This account is recorded in Acts 20:7–12.", fr: "Ce récit est rapporté dans Actes 20:7–12." } },
      { id: 'i158-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i158-d', isTruth: false, text: { en: "Eutychus fell while Peter was preaching in Jerusalem.", fr: "Eutychus tomba pendant que Pierre prêchait à Jérusalem." } },
    ],
    explanation: { en: "The incident occurred at Troas during Paul’s ministry. (Acts 20:7–12).", fr: "L’incident eut lieu à Troas pendant le ministère de Paul. (Actes 20:7–12)." },
    scripture: { en: "Acts 20:7–12", fr: "Actes 20:7–12" },
    didYouKnow: { en: "Eutychus fell from a third-story window while Paul was speaking late into the night.", fr: "Eutychus tomba d’une fenêtre du troisième étage pendant que Paul parlait tard dans la nuit." }
  },
  {
    id: 'i159', levelNumber: 159, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Paul’s Shipwreck", fr: "Le naufrage de Paul" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i159-a', isTruth: true, text: { en: "Paul’s ship ran aground on the journey to Rome.", fr: "Le navire de Paul s’échoua pendant le voyage vers Rome." } },
      { id: 'i159-b', isTruth: true, text: { en: "This account is recorded in Acts 27:27–44.", fr: "Ce récit est rapporté dans Actes 27:27–44." } },
      { id: 'i159-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i159-d', isTruth: false, text: { en: "Every prisoner died in the shipwreck.", fr: "Tous les prisonniers moururent dans le naufrage." } },
    ],
    explanation: { en: "Acts says all 276 people aboard reached land safely. (Acts 27:27–44).", fr: "Les Actes disent que les 276 personnes à bord arrivèrent toutes saines et sauves à terre. (Actes 27:27–44)." },
    scripture: { en: "Acts 27:27–44", fr: "Actes 27:27–44" },
    didYouKnow: { en: "Paul’s ship ran aground on the journey to Rome.", fr: "Le navire de Paul s’échoua pendant le voyage vers Rome." }
  },
  {
    id: 'i160', levelNumber: 160, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Paul and the Viper", fr: "Paul et la vipère" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i160-a', isTruth: true, text: { en: "A viper fastened onto Paul’s hand on Malta.", fr: "Une vipère s’accrocha à la main de Paul à Malte." } },
      { id: 'i160-b', isTruth: true, text: { en: "This account is recorded in Acts 28:1–6.", fr: "Ce récit est rapporté dans Actes 28:1–6." } },
      { id: 'i160-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i160-d', isTruth: false, text: { en: "Paul became gravely ill from the bite.", fr: "Paul tomba gravement malade à cause de la morsure." } },
    ],
    explanation: { en: "Paul shook the snake into the fire and suffered no harm. (Acts 28:1–6).", fr: "Paul secoua le serpent dans le feu et ne subit aucun mal. (Actes 28:1–6)." },
    scripture: { en: "Acts 28:1–6", fr: "Actes 28:1–6" },
    didYouKnow: { en: "A viper fastened onto Paul’s hand on Malta.", fr: "Une vipère s’accrocha à la main de Paul à Malte." }
  },
  {
    id: 'i161', levelNumber: 161, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Phoebe", fr: "Phoebé" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i161-a', isTruth: true, text: { en: "Paul commended Phoebe, a servant of the church in Cenchreae.", fr: "Paul recommanda Phoebé, servante de l’Église de Cenchrées." } },
      { id: 'i161-b', isTruth: true, text: { en: "This account is recorded in Romans 16:1–2.", fr: "Ce récit est rapporté dans Romains 16:1–2." } },
      { id: 'i161-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i161-d', isTruth: false, text: { en: "Phoebe is identified as the wife of Peter.", fr: "Phoebé est présentée comme l’épouse de Pierre." } },
    ],
    explanation: { en: "Paul asked the Roman believers to receive Phoebe in the Lord and help her as needed. (Romans 16:1–2).", fr: "Paul demanda aux croyants de Rome de recevoir Phoebé dans le Seigneur et de l’aider selon ses besoins. (Romains 16:1–2)." },
    scripture: { en: "Romans 16:1–2", fr: "Romains 16:1–2" },
    didYouKnow: { en: "Paul commended Phoebe, a servant of the church in Cenchreae.", fr: "Paul recommanda Phoebé, servante de l’Église de Cenchrées." }
  },
  {
    id: 'i162', levelNumber: 162, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Weak and the Strong", fr: "Les faibles et les forts" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i162-a', isTruth: true, text: { en: "Romans 14 warns believers not to quarrel over disputable matters.", fr: "Romains 14 avertit les croyants de ne pas se disputer sur des questions discutables." } },
      { id: 'i162-b', isTruth: true, text: { en: "This account is recorded in Romans 14:1–13.", fr: "Ce récit est rapporté dans Romains 14:1–13." } },
      { id: 'i162-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i162-d', isTruth: false, text: { en: "Paul commands believers to judge one another’s servants.", fr: "Paul ordonne aux croyants de juger les serviteurs les uns des autres." } },
    ],
    explanation: { en: "Paul says each person will give an account of himself to God. (Romans 14:1–13).", fr: "Paul dit que chacun rendra compte de lui-même à Dieu. (Romains 14:1–13)." },
    scripture: { en: "Romans 14:1–13", fr: "Romains 14:1–13" },
    didYouKnow: { en: "Romans 14 warns believers not to quarrel over disputable matters.", fr: "Romains 14 avertit les croyants de ne pas se disputer sur des questions discutables." }
  },
  {
    id: 'i163', levelNumber: 163, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Man in Corinth", fr: "L’homme de Corinthe" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i163-a', isTruth: true, text: { en: "Paul confronted a serious case of sexual immorality in the Corinthian church.", fr: "Paul confronta un grave cas d’immoralité sexuelle dans l’Église de Corinthe." } },
      { id: 'i163-b', isTruth: true, text: { en: "This account is recorded in 1 Corinthians 5:1–13.", fr: "Ce récit est rapporté dans 1 Corinthiens 5:1–13." } },
      { id: 'i163-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i163-d', isTruth: false, text: { en: "Paul told the church to boast about tolerating the situation.", fr: "Paul dit à l’Église de se glorifier de tolérer la situation." } },
    ],
    explanation: { en: "Paul rebuked the Corinthians for being proud instead of mourning and dealing with the offense. (1 Corinthians 5:1–13).", fr: "Paul reprocha aux Corinthiens d’être orgueilleux au lieu de s’attrister et de traiter l’offense. (1 Corinthiens 5:1–13)." },
    scripture: { en: "1 Corinthians 5:1–13", fr: "1 Corinthiens 5:1–13" },
    didYouKnow: { en: "Paul confronted a serious case of sexual immorality in the Corinthian church.", fr: "Paul confronta un grave cas d’immoralité sexuelle dans l’Église de Corinthe." }
  },
  {
    id: 'i164', levelNumber: 164, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Food Offered to Idols", fr: "Les aliments sacrifiés aux idoles" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i164-a', isTruth: true, text: { en: "Paul taught that knowledge must be balanced by love when considering food offered to idols.", fr: "Paul enseigna que la connaissance doit être équilibrée par l’amour concernant les aliments sacrifiés aux idoles." } },
      { id: 'i164-b', isTruth: true, text: { en: "This account is recorded in 1 Corinthians 8:1–13.", fr: "Ce récit est rapporté dans 1 Corinthiens 8:1–13." } },
      { id: 'i164-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i164-d', isTruth: false, text: { en: "Paul said a believer’s freedom should never consider another believer’s conscience.", fr: "Paul dit que la liberté d’un croyant ne devait jamais tenir compte de la conscience d’un autre croyant." } },
    ],
    explanation: { en: "Paul warned that exercising liberty carelessly could become a stumbling block to a weaker believer. (1 Corinthians 8:1–13).", fr: "Paul avertit qu’un usage imprudent de la liberté pouvait devenir une pierre d’achoppement pour un croyant plus faible. (1 Corinthiens 8:1–13)." },
    scripture: { en: "1 Corinthians 8:1–13", fr: "1 Corinthiens 8:1–13" },
    didYouKnow: { en: "Paul taught that knowledge must be balanced by love when considering food offered to idols.", fr: "Paul enseigna que la connaissance doit être équilibrée par l’amour concernant les aliments sacrifiés aux idoles." }
  },
  {
    id: 'i165', levelNumber: 165, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Collection for Jerusalem", fr: "La collecte pour Jérusalem" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i165-a', isTruth: true, text: { en: "Paul used the generosity of the Macedonian churches as an example.", fr: "Paul utilisa la générosité des Églises de Macédoine comme exemple." } },
      { id: 'i165-b', isTruth: true, text: { en: "This account is recorded in 2 Corinthians 8:1–15.", fr: "Ce récit est rapporté dans 2 Corinthiens 8:1–15." } },
      { id: 'i165-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i165-d', isTruth: false, text: { en: "The Macedonians gave only because they were extremely wealthy.", fr: "Les Macédoniens donnèrent seulement parce qu’ils étaient extrêmement riches." } },
    ],
    explanation: { en: "Paul says the Macedonians gave generously despite severe trial and deep poverty. (2 Corinthians 8:1–15).", fr: "Paul dit que les Macédoniens donnèrent généreusement malgré une grande épreuve et une profonde pauvreté. (2 Corinthiens 8:1–15)." },
    scripture: { en: "2 Corinthians 8:1–15", fr: "2 Corinthiens 8:1–15" },
    didYouKnow: { en: "Paul used the generosity of the Macedonian churches as an example.", fr: "Paul utilisa la générosité des Églises de Macédoine comme exemple." }
  },
  {
    id: 'i166', levelNumber: 166, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Paul’s Thorn", fr: "L’écharde de Paul" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i166-a', isTruth: true, text: { en: "Paul pleaded three times for his thorn in the flesh to be removed.", fr: "Paul pria trois fois pour que son écharde dans la chair lui soit ôtée." } },
      { id: 'i166-b', isTruth: true, text: { en: "This account is recorded in 2 Corinthians 12:7–10.", fr: "Ce récit est rapporté dans 2 Corinthiens 12:7–10." } },
      { id: 'i166-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i166-d', isTruth: false, text: { en: "The passage explicitly identifies the thorn as blindness.", fr: "Le passage identifie explicitement l’écharde comme la cécité." } },
    ],
    explanation: { en: "The passage does not specify the thorn’s exact physical nature; Paul emphasizes Christ’s sufficient grace. (2 Corinthians 12:7–10).", fr: "Le passage ne précise pas la nature physique exacte de l’écharde ; Paul souligne la suffisance de la grâce du Christ. (2 Corinthiens 12:7–10)." },
    scripture: { en: "2 Corinthians 12:7–10", fr: "2 Corinthiens 12:7–10" },
    didYouKnow: { en: "Paul says the thorn was given after extraordinary revelations so that he would not become conceited.", fr: "Paul dit que l’écharde lui fut donnée après des révélations extraordinaires afin qu’il ne s’enorgueillisse pas." }
  },
  {
    id: 'i167', levelNumber: 167, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Paul Confronts Peter", fr: "Paul reprend Pierre" }, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i167-a', isTruth: true, text: { en: "Paul opposed Peter to his face at Antioch.", fr: "Paul s’opposa à Pierre en face à Antioche." } },
      { id: 'i167-b', isTruth: true, text: { en: "This account is recorded in Galatians 2:11–14.", fr: "Ce récit est rapporté dans Galates 2:11–14." } },
      { id: 'i167-c', isTruth: true, text: { en: "This passage belongs to the New Testament.", fr: "Ce passage appartient au Nouveau Testament." } },
      { id: 'i167-d', isTruth: false, text: { en: "Paul confronted Peter because Peter refused to preach to Jews.", fr: "Paul reprit Pierre parce que Pierre refusait de prêcher aux Juifs." } },
    ],
    explanation: { en: "Paul confronted Peter over withdrawing from eating with Gentile believers when certain men arrived. (Galatians 2:11–14).", fr: "Paul reprit Pierre parce qu’il se retirait de la table des croyants non juifs lorsque certains hommes arrivèrent. (Galates 2:11–14)." },
    scripture: { en: "Galatians 2:11–14", fr: "Galates 2:11–14" },
    didYouKnow: { en: "Barnabas was also influenced by the withdrawal at Antioch; Paul specifically mentions him when describing how the controversy affected the Jewish believers there.", fr: "Barnabas fut lui aussi entraîné dans ce retrait à Antioche ; Paul le mentionne expressément en décrivant l’effet de cette controverse sur les croyants juifs." }
  },

  // ─── ADVANCED ──────────────────────────────────────────────────────────────────
  {
    id: 'a1', levelNumber: 1, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Epistles of Paul", fr: "Les Épîtres de Paul" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a1-a', isTruth: true,  text: { en: "Paul wrote the letter to Philemon specifically about a runaway enslaved man named Onesimus.", fr: "Paul écrivit la lettre à Philémon spécifiquement au sujet d'un esclave fugitif nommé Onésime." } },
      { id: 'a1-b', isTruth: false, text: { en: "The Epistle to the Romans was written by Paul while he was imprisoned in Rome.", fr: "L'Épître aux Romains fut rédigée par Paul pendant qu'il était emprisonné à Rome." } },
      { id: 'a1-c', isTruth: true,  text: { en: "Paul explicitly mentions being lowered down a city wall in a basket to escape arrest.", fr: "Paul mentionne explicitement avoir été descendu d'un rempart dans une corbeille pour échapper à une arrestation." } },
      { id: 'a1-d', isTruth: true,  text: { en: "In his letter to the Galatians, Paul describes publicly confronting Peter regarding hypocrisy.", fr: "Dans sa lettre aux Galates, Paul décrit avoir affronté publiquement Pierre au sujet de son hypocrisie." } },
    ],
    explanation: { en: "Paul wrote Romans from Corinth while free, planning his journey to Rome — long before his eventual imprisonment there (Romans 15:25-26).", fr: "Paul écrivit l'épître aux Romains depuis Corinthe alors qu'il était libre, planifiant son voyage à Rome — bien avant son emprisonnement là-bas (Romains 15:25-26)." },
    didYouKnow: { en: "Romans was delivered to its recipients by Phoebe, whom Paul commends in Romans 16 as a servant of the church at Cenchreae.", fr: "L’épître aux Romains fut confiée à Phoebé, que Paul recommande dans Romains 16 comme servante de l’Église de Cenchrées." }

  },
  {
    id: 'a2', levelNumber: 2, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Romans — Justification by Faith", fr: "Romains — La Justification par la Foi" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a2-a', isTruth: true,  text: { en: "Paul declares in Romans that all have sinned and fall short of the glory of God.", fr: "Paul déclare dans Romains que tous ont péché et sont privés de la gloire de Dieu." } },
      { id: 'a2-b', isTruth: true,  text: { en: "Paul argues that Abraham was justified by faith before he was circumcised.", fr: "Paul argue qu'Abraham fut justifié par la foi avant d'être circoncis." } },
      { id: 'a2-c', isTruth: true,  text: { en: "Romans 8 declares there is now no condemnation for those who are in Christ Jesus.", fr: "Romains 8 déclare qu'il n'y a plus aucune condamnation pour ceux qui sont en Jésus-Christ." } },
      { id: 'a2-d', isTruth: false, text: { en: "Paul teaches in Romans that justification comes from faith combined with the works of the law.", fr: "Paul enseigne dans Romains que la justification vient de la foi combinée aux œuvres de la loi." } },
    ],
    explanation: { en: "Paul teaches in Romans that justification is by faith alone, apart from the works of the law. He argues this strongly in Romans 3-4, citing Abraham as proof that faith — not law-keeping — is the basis for justification (Romans 3:28).", fr: "Paul enseigne dans Romains que la justification est par la foi seule, indépendamment des œuvres de la loi. Il l'argumente fortement dans Romains 3-4, citant Abraham pour prouver que la foi — et non l'observance de la loi — est le fondement de la justification (Romains 3:28)." },
    didYouKnow: { en: "Paul uses Abraham and David in Romans 4 as scriptural witnesses to righteousness being credited apart from works.", fr: "Dans Romains 4, Paul présente Abraham et David comme témoins scripturaires d’une justice imputée indépendamment des œuvres." }

  },
  {
    id: 'a3', levelNumber: 3, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Romans 8 — The Holy Spirit and Adoption", fr: "Romains 8 — Le Saint-Esprit et l'Adoption" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a3-a', isTruth: true,  text: { en: "Paul says those who are led by the Spirit of God are sons and daughters of God.", fr: "Paul dit que ceux qui sont conduits par l'Esprit de Dieu sont fils et filles de Dieu." } },
      { id: 'a3-b', isTruth: true,  text: { en: "Paul uses the Aramaic word 'Abba' (Father) in Romans 8 to describe the intimacy of the believer's relationship with God.", fr: "Paul utilise le mot araméen 'Abba' (Père) dans Romains 8 pour décrire l'intimité de la relation du croyant avec Dieu." } },
      { id: 'a3-c', isTruth: true,  text: { en: "Paul says the Spirit intercedes for believers with groans that words cannot express.", fr: "Paul dit que l'Esprit intercède pour les croyants avec des gémissements inexprimables." } },
      { id: 'a3-d', isTruth: false, text: { en: "Romans 8 teaches that nothing can separate believers from God's love, except persistent unrepentant sin.", fr: "Romains 8 enseigne que rien ne peut séparer les croyants de l'amour de Dieu, sauf le péché persistant et impénitent." } },
    ],
    explanation: { en: "Paul's list in Romans 8:38-39 is absolute and unconditional: neither death nor life, neither angels nor demons, neither present nor future, nor any powers, nor height nor depth, nor anything else in all creation can separate believers from God's love. No exceptions are given (Romans 8:38-39).", fr: "La liste de Paul dans Romains 8:38-39 est absolue et inconditionnelle : ni la mort ni la vie, ni les anges ni les démons, ni le présent ni l'avenir, ni aucune puissance, ni la hauteur ni la profondeur, ni rien d'autre dans la création ne peut séparer les croyants de l'amour de Dieu (Romains 8:38-39)." },
    didYouKnow: { en: "Romans 8 says the Spirit intercedes for believers with groanings too deep for words.", fr: "Romains 8 affirme que l’Esprit intercède pour les croyants par des soupirs inexprimables." }

  },
  {
    id: 'a4', levelNumber: 4, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "1 Corinthians — The Resurrection Chapter", fr: "1 Corinthiens — Le Chapitre sur la Résurrection" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a4-a', isTruth: true,  text: { en: "Paul says if Christ has not been raised, our faith is futile and we are still in our sins.", fr: "Paul dit que si Christ n'est pas ressuscité, notre foi est vaine et nous sommes encore dans nos péchés." } },
      { id: 'a4-b', isTruth: true,  text: { en: "Paul states that Christ appeared to more than 500 brothers and sisters at one time after His resurrection.", fr: "Paul affirme que Christ est apparu à plus de 500 frères et sœurs en même temps après sa résurrection." } },
      { id: 'a4-c', isTruth: true,  text: { en: "Paul describes the resurrection body as imperishable, in glory, in power, and spiritual.", fr: "Paul décrit le corps de résurrection comme impérissable, glorieux, puissant et spirituel." } },
      { id: 'a4-d', isTruth: false, text: { en: "Paul says in 1 Corinthians 15 that believers will be resurrected with the exact same physical body they had on earth.", fr: "Paul dit dans 1 Corinthiens 15 que les croyants ressusciteront avec exactement le même corps physique qu'ils avaient sur terre." } },
    ],
    explanation: { en: "Paul contrasts the earthly body (perishable, dishonor, weakness, natural) with the resurrection body (imperishable, glory, power, spiritual). He uses the seed analogy — what goes in is not what comes out. The resurrection body is transformed and different (1 Corinthians 15:42-44).", fr: "Paul contraste le corps terrestre (périssable, honte, faiblesse, naturel) avec le corps de résurrection (impérissable, gloire, puissance, spirituel). Il utilise l'analogie de la graine — ce qui entre n'est pas ce qui ressort. Le corps de résurrection est transformé et différent (1 Corinthiens 15:42-44)." },
    didYouKnow: { en: "Paul describes Christ as the 'firstfruits' of those who have fallen asleep, linking his resurrection with the future resurrection of believers.", fr: "Paul décrit Christ comme les « prémices » de ceux qui sont morts, reliant sa résurrection à la résurrection future des croyants." }

  },
  {
    id: 'a5', levelNumber: 5, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Galatians — The Judaizer Controversy", fr: "Galates — La Controverse des Judaïsants" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a5-a', isTruth: true,  text: { en: "Paul rebuked Peter in Antioch to his face because Peter was withdrawing from Gentile believers when circumcised men came from Jerusalem.", fr: "Paul réprimanda Pierre en face à Antioche parce que Pierre se retirait des croyants non-juifs quand des hommes circoncis vinrent de Jérusalem." } },
      { id: 'a5-b', isTruth: true,  text: { en: "Paul says he received the gospel not from men but through a direct revelation of Jesus Christ.", fr: "Paul dit qu'il reçut l'Évangile non de la part des hommes, mais par une révélation directe de Jésus-Christ." } },
      { id: 'a5-c', isTruth: true,  text: { en: "Paul says in Galatians that the law was our guardian until Christ came, so that we might be justified by faith.", fr: "Paul dit dans Galates que la loi était notre gardien jusqu'à ce que Christ vienne, afin que nous soyons justifiés par la foi." } },
      { id: 'a5-d', isTruth: false, text: { en: "Paul taught that circumcision is still required for Gentile believers but not for salvation purposes.", fr: "Paul enseigna que la circoncision est toujours requise pour les croyants d'origine non juive, mais pas dans un but de salut." } },
    ],
    explanation: { en: "Paul taught the opposite — that circumcision means nothing in Christ. He warned in Galatians 5:2 that if Gentiles get circumcised, Christ will be of no value to them. He strongly opposed requiring circumcision of Gentile believers (Galatians 5:2-6).", fr: "Paul enseigna le contraire — que la circoncision n'a aucune valeur en Christ. Il avertit dans Galates 5:2 que si les non-Juifs se font circoncire, Christ ne leur servira à rien. Il s'opposa fermement à l'imposition de la circoncision aux croyants non-Juifs (Galates 5:2-6)." },
    didYouKnow: { en: "Paul recounts confronting Peter at Antioch because Peter withdrew from eating with Gentile believers.", fr: "Paul raconte avoir repris Pierre à Antioche parce que celui-ci s’était retiré des repas avec les croyants d’origine païenne." }

  },
  {
    id: 'a6', levelNumber: 6, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Philippians — Joy in Prison and the Kenosis", fr: "Philippiens — La Joie en Prison et la Kénose" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a6-a', isTruth: true,  text: { en: "Paul wrote Philippians while in prison, yet the letter overflows with joy and rejoicing.", fr: "Paul écrivit aux Philippiens depuis la prison, pourtant la lettre déborde de joie et d'allégresse." } },
      { id: 'a6-b', isTruth: true,  text: { en: "Philippians 2 says Jesus, being in the form of God, did not consider equality with God something to be grasped.", fr: "Philippiens 2 dit que Jésus, étant de condition divine, n'a pas regardé son égalité avec Dieu comme une proie à saisir." } },
      { id: 'a6-c', isTruth: true,  text: { en: "Paul declares he has learned to be content in all circumstances — whether in plenty or in want.", fr: "Paul déclare avoir appris à se contenter dans toutes les situations — dans l'abondance comme dans le besoin." } },
      { id: 'a6-d', isTruth: false, text: { en: "Paul's famous 'I can do all things through Christ who strengthens me' means believers can perform any miracle.", fr: "Le célèbre 'Je puis tout par celui qui me fortifie' de Paul signifie que les croyants peuvent accomplir n'importe quel miracle." } },
    ],
    explanation: { en: "The context of Philippians 4:13 is Paul speaking about contentment in any circumstance — whether hungry or full, in abundance or in need. It refers to enduring and being content, not performing supernatural miracles at will (Philippians 4:11-13).", fr: "Le contexte de Philippiens 4:13 est Paul parlant de se contenter dans toutes les situations — qu'il soit dans le besoin ou dans l'abondance. Cela fait référence à l'endurance et à la contentement, pas à l'accomplissement de miracles surnaturels à volonté (Philippiens 4:11-13)." },
    didYouKnow: { en: "The Christ hymn in Philippians 2 moves from Christ's self-emptying and obedience to his exaltation and the confession that Jesus Christ is Lord.", fr: "L’hymne christologique de Philippiens 2 passe de l’abaissement et de l’obéissance du Christ à son exaltation et à la confession que Jésus-Christ est Seigneur." }

  },
  {
    id: 'a7', levelNumber: 7, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Hebrews — The High Priesthood of Christ", fr: "Hébreux — Le Grand Sacerdoce du Christ" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a7-a', isTruth: true,  text: { en: "The book of Hebrews argues that Jesus is the High Priest who entered the most holy place once for all by his own blood.", fr: "L'épître aux Hébreux argue que Jésus est le Grand Sacrificateur qui est entré une fois pour toutes dans le lieu très saint par son propre sang." } },
      { id: 'a7-b', isTruth: true,  text: { en: "Hebrews describes Jesus as a High Priest after the order of Melchizedek, not the order of Aaron.", fr: "Hébreux décrit Jésus comme un Grand Sacrificateur selon l'ordre de Melchisédek, non selon celui d'Aaron." } },
      { id: 'a7-c', isTruth: true,  text: { en: "Hebrews says Jesus is the mediator of a new covenant, better than the old because it is based on better promises.", fr: "Hébreux dit que Jésus est le médiateur d'une nouvelle alliance, meilleure que l'ancienne car fondée sur de meilleures promesses." } },
      { id: 'a7-d', isTruth: false, text: { en: "The author of Hebrews is definitively identified as Paul in the first verse of the letter.", fr: "L'auteur de l'épître aux Hébreux est définitivement identifié comme Paul dans le premier verset de la lettre." } },
    ],
    explanation: { en: "The authorship of Hebrews is unknown and debated. The letter begins without any author identification. Candidates include Paul, Barnabas, Apollos, or Priscilla. Early church father Origen famously said 'God only knows' who wrote it.", fr: "La paternité de l'épître aux Hébreux est inconnue et débattue. La lettre commence sans identification d'auteur. Les candidats incluent Paul, Barnabas, Apollos ou Priscille. Le père de l'Église Origène a dit avec humour que 'Dieu seul sait' qui l'a écrite." },
    didYouKnow: { en: "Hebrews repeatedly connects Jesus' priesthood with the order of Melchizedek rather than the Levitical line of Aaron.", fr: "Hébreux relie à plusieurs reprises le sacerdoce de Jésus à l’ordre de Melchisédek plutôt qu’à la lignée lévitique d’Aaron." }

  },
  {
    id: 'a8', levelNumber: 8, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Hall of Faith — Hebrews 11", fr: "Le Palmarès de la Foi — Hébreux 11" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a8-a', isTruth: true,  text: { en: "Hebrews 11 defines faith as 'confidence in what we hope for and assurance about what we do not see.'", fr: "Hébreux 11 définit la foi comme 'la certitude des choses qu'on espère et la démonstration de celles qu'on ne voit pas.'" } },
      { id: 'a8-b', isTruth: true,  text: { en: "Abel, Enoch, Noah, Abraham, Sarah, Isaac, Jacob, Moses, and Rahab are all mentioned in Hebrews 11.", fr: "Abel, Énoch, Noé, Abraham, Sara, Isaac, Jacob, Moïse et Rahab sont tous mentionnés dans Hébreux 11." } },
      { id: 'a8-c', isTruth: true,  text: { en: "The chapter says these heroes of faith did not receive what was promised during their lifetimes.", fr: "Le chapitre dit que ces héros de la foi ne reçurent pas ce qui avait été promis de leur vivant." } },
      { id: 'a8-d', isTruth: false, text: { en: "Hebrews 11 mentions Samson as a failure of faith excluded from the 'cloud of witnesses.'", fr: "Hébreux 11 mentionne Samson comme un échec de la foi exclu de la 'nuée de témoins.'" } },
    ],
    explanation: { en: "Samson is actually included in the Hebrews 11 hall of faith — listed alongside Gideon, Barak, Jephthah, David, Samuel, and the prophets. Despite his failures, his faith act of pulling down the temple is recognized (Hebrews 11:32).", fr: "Samson est en fait inclus dans le palmarès de la foi d'Hébreux 11 — mentionné aux côtés de Gédéon, Barak, Jephthah, David, Samuel et les prophètes. Malgré ses échecs, son acte de foi en renversant le temple est reconnu (Hébreux 11:32)." },
    didYouKnow: { en: "Hebrews 11 includes unnamed faithful people as well as famous figures, describing some who suffered without receiving earthly deliverance.", fr: "Hébreux 11 mentionne aussi des fidèles anonymes, décrivant certains qui souffrirent sans recevoir de délivrance terrestre." }

  },
  {
    id: 'a9', levelNumber: 9, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Seven Churches of Revelation", fr: "Les Sept Églises de l'Apocalypse" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a9-a', isTruth: true,  text: { en: "The seven churches addressed in Revelation are Ephesus, Smyrna, Pergamum, Thyatira, Sardis, Philadelphia, and Laodicea.", fr: "Les sept Églises de l'Apocalypse sont Éphèse, Smyrne, Pergame, Thyatire, Sardes, Philadelphie et Laodicée." } },
      { id: 'a9-b', isTruth: true,  text: { en: "The church of Laodicea is rebuked for being 'lukewarm — neither hot nor cold.'", fr: "L'Église de Laodicée est réprimandée pour être 'tiède — ni froide ni chaude.'" } },
      { id: 'a9-c', isTruth: true,  text: { en: "The church of Smyrna receives no rebuke — only encouragement despite poverty and persecution.", fr: "L'Église de Smyrne ne reçoit aucune réprimande — seulement des encouragements malgré la pauvreté et la persécution." } },
      { id: 'a9-d', isTruth: false, text: { en: "The church of Ephesus is praised for leaving its first love and growing in maturity.", fr: "L'Église d'Éphèse est félicitée pour avoir quitté son premier amour et grandi en maturité." } },
    ],
    explanation: { en: "The church of Ephesus is rebuked — not praised — for leaving its first love. Jesus commanded it to repent and do the things it did at first, otherwise He would remove its lampstand (Revelation 2:4-5).", fr: "L'Église d'Éphèse est réprimandée — et non félicitée — pour avoir abandonné son premier amour. Jésus lui ordonna de se repentir et de faire les premières œuvres, sinon Il retirerait son chandelier (Apocalypse 2:4-5)." },
    didYouKnow: { en: "The seven messages in Revelation 2–3 each end with an appeal to hear what the Spirit says to the churches.", fr: "Les sept messages d’Apocalypse 2–3 se terminent chacun par un appel à écouter ce que l’Esprit dit aux Églises." }

  },
  {
    id: 'a10', levelNumber: 10, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Revelation — The New Jerusalem", fr: "L'Apocalypse — La Nouvelle Jérusalem" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a10-a', isTruth: true,  text: { en: "John describes the New Jerusalem coming down out of heaven from God, prepared as a bride for her husband.", fr: "Jean décrit la Nouvelle Jérusalem descendant du ciel d'auprès de Dieu, préparée comme une épouse pour son mari." } },
      { id: 'a10-b', isTruth: true,  text: { en: "The New Jerusalem has twelve gates, each made of a single pearl, and twelve foundations named after the apostles.", fr: "La Nouvelle Jérusalem a douze portes, chacune faite d'une seule perle, et douze fondements portant les noms des apôtres." } },
      { id: 'a10-c', isTruth: true,  text: { en: "John sees no temple in the New Jerusalem because God and the Lamb are its temple.", fr: "Jean ne voit aucun temple dans la Nouvelle Jérusalem parce que Dieu et l'Agneau en sont le temple." } },
      { id: 'a10-d', isTruth: false, text: { en: "The New Jerusalem is described as a perfect cube measuring 100 miles in each direction.", fr: "La Nouvelle Jérusalem est décrite comme un cube parfait mesurant 160 km dans chaque direction." } },
    ],
    explanation: { en: "The New Jerusalem measures 12,000 stadia — approximately 1,380 miles (2,200 km) — in length, width, and height. It is described as a cube or square, not 100 miles but far larger (Revelation 21:16).", fr: "La Nouvelle Jérusalem mesure 12 000 stades — environ 2 200 km — en longueur, largeur et hauteur. Elle est décrite comme un cube ou un carré, non pas de 160 km mais bien plus grande (Apocalypse 21:16)." },
    didYouKnow: { en: "Revelation says the New Jerusalem has no temple because the Lord God Almighty and the Lamb are its temple.", fr: "L’Apocalypse dit que la nouvelle Jérusalem n’a pas de temple, car le Seigneur Dieu Tout-Puissant et l’Agneau en sont le temple." }

  },
  {
    id: 'a11', levelNumber: 11, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Isaiah 53 — The Suffering Servant", fr: "Ésaïe 53 — Le Serviteur Souffrant" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a11-a', isTruth: true,  text: { en: "Isaiah 53 says the Suffering Servant was 'despised and rejected by mankind, a man of suffering, and familiar with pain.'", fr: "Ésaïe 53 dit que le Serviteur souffrant était 'méprisé et abandonné des hommes, homme de douleurs et habitué à la souffrance.'" } },
      { id: 'a11-b', isTruth: true,  text: { en: "Isaiah 53 states the Servant bore our pain and was 'pierced for our transgressions' and 'crushed for our iniquities.'", fr: "Ésaïe 53 déclare que le Serviteur porta nos douleurs et fut 'transpercé à cause de nos péchés' et 'écrasé à cause de nos iniquités.'" } },
      { id: 'a11-c', isTruth: true,  text: { en: "Isaiah 53 says 'he was led like a lamb to the slaughter, and as a sheep before its shearers is silent, so he did not open his mouth.'", fr: "Ésaïe 53 dit : 'Il a été mené comme un agneau à l'abattoir, comme un agneau muet devant celui qui le tond, il n'a pas ouvert la bouche.'" } },
      { id: 'a11-d', isTruth: false, text: { en: "Isaiah 53 predicts the Servant will be buried in the tomb of the poor and wicked.", fr: "Ésaïe 53 prédit que le Serviteur sera enterré dans le tombeau des pauvres et des méchants." } },
    ],
    explanation: { en: "Isaiah 53:9 says 'He was assigned a grave with the wicked, and with the rich in his death.' Jesus was crucified among criminals (the wicked) but buried in the tomb of Joseph of Arimathea — a rich man (Matthew 27:57-60).", fr: "Ésaïe 53:9 dit : 'On lui a assigné un sépulcre avec les méchants, son tombeau est avec le riche.' Jésus fut crucifié parmi les criminels mais enterré dans le tombeau de Joseph d'Arimathée — un homme riche (Matthieu 27:57-60)." },
    didYouKnow: { en: "Isaiah 53 says the Servant would be assigned a grave with the wicked yet be with a rich man in his death.", fr: "Ésaïe 53 annonce que le Serviteur aurait son tombeau avec les méchants, tout en étant avec un riche dans sa mort." }

  },
  {
    id: 'a12', levelNumber: 12, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Daniel's Seventy Weeks (Daniel 9)", fr: "Les Soixante-Dix Semaines de Daniel (Daniel 9)" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a12-a', isTruth: true,  text: { en: "Daniel's 70 Weeks prophecy was given while Daniel was praying and confessing sin on behalf of Israel.", fr: "La prophétie des 70 semaines de Daniel fut donnée pendant que Daniel priait et confessait le péché au nom d'Israël." } },
      { id: 'a12-b', isTruth: true,  text: { en: "The angel Gabriel brought the message of the 70 Weeks to Daniel.", fr: "L'ange Gabriel apporta à Daniel le message des 70 semaines." } },
      { id: 'a12-c', isTruth: true,  text: { en: "The 70th 'week' speaks of a covenant being confirmed for one 'seven' and an abomination of desolation in the middle of the week.", fr: "La 70e 'semaine' parle d'une alliance confirmée pour un 'sept' et d'une abomination de la désolation au milieu de la semaine." } },
      { id: 'a12-d', isTruth: false, text: { en: "Daniel 9 says the seventy weeks began at the decree to rebuild the temple of Solomon.", fr: "Daniel 9 dit que les soixante-dix semaines commencèrent au décret de reconstruire le temple de Salomon." } },
    ],
    explanation: { en: "Daniel 9:25 says the 70 weeks begin 'from the time the word goes out to restore and rebuild Jerusalem' — not to rebuild Solomon's temple specifically, but to rebuild the city of Jerusalem (Daniel 9:25).", fr: "Daniel 9:25 dit que les 70 semaines commencent 'dès la sortie de la parole sur la restauration et la reconstruction de Jérusalem' — pas spécifiquement pour reconstruire le temple de Salomon, mais pour reconstruire la ville de Jérusalem (Daniel 9:25)." },
    didYouKnow: { en: "Daniel's prayer in chapter 9 begins with confession and an appeal to God's covenant mercy before Gabriel explains the seventy weeks.", fr: "La prière de Daniel au chapitre 9 commence par une confession et un appel à la miséricorde de l’alliance avant que Gabriel n’explique les soixante-dix semaines." }

  },
  {
    id: 'a13', levelNumber: 13, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Tabernacle and Its Furnishings", fr: "Le Tabernacle et son Mobilier" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a13-a', isTruth: true,  text: { en: "The Ark of the Covenant was placed in the Most Holy Place (Holy of Holies) behind the inner veil.", fr: "L'arche de l'alliance était placée dans le lieu très saint (Saint des Saints) derrière le voile intérieur." } },
      { id: 'a13-b', isTruth: true,  text: { en: "The altar of incense stood in the Holy Place, in front of the veil that separated it from the Most Holy Place.", fr: "L'autel des parfums se trouvait dans le lieu saint, devant le voile qui le séparait du lieu très saint." } },
      { id: 'a13-c', isTruth: true,  text: { en: "The Menorah (seven-branched lampstand) stood in the Holy Place opposite the table of showbread.", fr: "La Ménorah (chandelier à sept branches) se trouvait dans le lieu saint, en face de la table des pains de proposition." } },
      { id: 'a13-d', isTruth: false, text: { en: "The High Priest entered the Most Holy Place once a month on the Day of Atonement.", fr: "Le Grand Sacrificateur entrait dans le lieu très saint une fois par mois le jour des Expiations." } },
    ],
    explanation: { en: "The High Priest entered the Most Holy Place only once per year — on Yom Kippur (the Day of Atonement) — not once per month. This was the most sacred event in the Jewish calendar (Leviticus 16:34; Hebrews 9:7).", fr: "Le Grand Sacrificateur n'entrait dans le lieu très saint qu'une fois par an — à Yom Kippour (le jour des Expiations) — pas une fois par mois. C'était l'événement le plus sacré du calendrier juif (Lévitique 16:34 ; Hébreux 9:7)." },
    didYouKnow: { en: "The lampstand in the tabernacle was made from one talent of pure gold and fashioned as a single hammered work.", fr: "Le chandelier du tabernacle fut fabriqué avec un talent d’or pur et façonné d’une seule pièce au marteau." }

  },
  {
    id: 'a14', levelNumber: 14, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Davidic Covenant (2 Samuel 7)", fr: "L'Alliance Davidique (2 Samuel 7)" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a14-a', isTruth: true,  text: { en: "God told David through Nathan the prophet that He would establish David's throne forever.", fr: "Dieu dit à David par le prophète Nathan qu'Il établirait son trône pour toujours." } },
      { id: 'a14-b', isTruth: true,  text: { en: "God said David's son would build the temple, and God would be to him a Father and he would be God's son.", fr: "Dieu dit que le fils de David construirait le temple, et que Dieu serait son Père et lui serait le fils de Dieu." } },
      { id: 'a14-c', isTruth: true,  text: { en: "God promised that even if David's descendants sinned, He would discipline them but not take His love from them as He did with Saul.", fr: "Dieu promit que même si les descendants de David péchaient, Il les disciplinerait mais ne leur retirerait pas son amour comme Il l'avait fait avec Saül." } },
      { id: 'a14-d', isTruth: false, text: { en: "David himself proposed the idea to build a temple for God and God enthusiastically approved.", fr: "David proposa lui-même l'idée de construire un temple pour Dieu et Dieu approuva avec enthousiasme." } },
    ],
    explanation: { en: "David proposed building a temple, but God redirected through Nathan. God asked 'Are you the one to build me a house?' and said David's son (Solomon) would build it, not David himself. God's response was not simple enthusiasm but a reorientation (2 Samuel 7:4-13).", fr: "David proposa de construire un temple, mais Dieu redirigea par Nathan. Dieu demanda 'Serais-tu toi qui me bâtirais une maison ?' et dit que le fils de David (Salomon) le construirait, pas David lui-même. La réponse de Dieu n'était pas un simple enthousiasme mais une réorientation (2 Samuel 7:4-13)." },
    didYouKnow: { en: "David wanted to build a house for God, but in the covenant of 2 Samuel 7 God instead promised to establish David's 'house,' meaning his dynasty.", fr: "David voulait bâtir une maison pour Dieu, mais dans l’alliance de 2 Samuel 7, Dieu promit plutôt d’établir la « maison » de David, c’est-à-dire sa dynastie." }

  },
  {
    id: 'a15', levelNumber: 15, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Nazirite Vow (Numbers 6)", fr: "Le Vœu de Naziréat (Nombres 6)" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a15-a', isTruth: true,  text: { en: "A Nazirite vow required abstaining from wine, strong drink, vinegar, and grape products.", fr: "Le vœu de naziréat exigeait de s'abstenir du vin, de toute boisson forte, du vinaigre et de tout produit de la vigne." } },
      { id: 'a15-b', isTruth: true,  text: { en: "A Nazirite was not to cut their hair for the duration of the vow.", fr: "Un naziréen ne devait pas se couper les cheveux pendant la durée de son vœu." } },
      { id: 'a15-c', isTruth: true,  text: { en: "A Nazirite was not to go near a dead body, even if a parent or sibling died during the vow period.", fr: "Un naziréen ne devait pas s'approcher d'un corps mort, même si un parent ou un frère mourait pendant la période de son vœu." } },
      { id: 'a15-d', isTruth: false, text: { en: "The Nazirite vow could only be taken by male members of the priestly tribe of Levi.", fr: "Le vœu de naziréat ne pouvait être pris que par les membres masculins de la tribu sacerdotale de Lévi." } },
    ],
    explanation: { en: "The Nazirite vow was available to both men and women of any tribe, not just Levites. Numbers 6:2 specifically says 'a man or woman' who makes a special vow. Examples include Samson (from the tribe of Dan) (Numbers 6:2).", fr: "Le vœu de naziréat était accessible aux hommes et aux femmes de n'importe quelle tribu, pas seulement aux Lévites. Nombres 6:2 dit spécifiquement 'un homme ou une femme' qui fait un vœu spécial. Samson (de la tribu de Dan) en est un exemple (Nombres 6:2)." },
    didYouKnow: { en: "Numbers 6 concludes the Nazirite regulations with the priestly blessing beginning, 'The LORD bless you and keep you.'", fr: "Nombres 6 conclut les prescriptions du naziréat par la bénédiction sacerdotale qui commence par : « Que l’Éternel te bénisse et te garde. »" }

  },
  {
    id: 'a16', levelNumber: 16, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Melchizedek — Priest-King of Salem", fr: "Melchisédek — Roi-Prêtre de Salem" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a16-a', isTruth: true,  text: { en: "Melchizedek was king of Salem and priest of God Most High who blessed Abraham and received a tithe from him.", fr: "Melchisédek était roi de Salem et sacrificateur de Dieu Très-Haut qui bénit Abraham et reçut de lui la dîme." } },
      { id: 'a16-b', isTruth: true,  text: { en: "Hebrews says Melchizedek was 'without father or mother, without genealogy, without beginning of days or end of life.'", fr: "Hébreux dit que Melchisédek était 'sans père, sans mère, sans généalogie, sans commencement de jours ni fin de vie.'" } },
      { id: 'a16-c', isTruth: true,  text: { en: "Psalm 110:4 declares the Messiah will be 'a priest forever, in the order of Melchizedek.'", fr: "Le Psaume 110:4 déclare que le Messie sera 'sacrificateur pour toujours, selon l'ordre de Melchisédek.'" } },
      { id: 'a16-d', isTruth: false, text: { en: "The name 'Melchizedek' means 'King of the Covenant' in Hebrew.", fr: "Le nom 'Melchisédek' signifie 'Roi de l'Alliance' en hébreu." } },
    ],
    explanation: { en: "Melchizedek means 'King of Righteousness' (Hebrews 7:2 explicitly states this). 'Salem' (his city) means peace, making him also 'King of Peace.' The name does not mean 'King of the Covenant' (Hebrews 7:2).", fr: "Melchisédek signifie 'Roi de Justice' (Hébreux 7:2 le dit explicitement). 'Salem' (sa ville) signifie paix, faisant de lui aussi 'Roi de Paix'. Le nom ne signifie pas 'Roi de l'Alliance' (Hébreux 7:2)." },
    didYouKnow: { en: "Genesis introduces Melchizedek without a genealogy, a feature Hebrews later uses in its argument about his priesthood.", fr: "La Genèse présente Melchisédek sans généalogie, un détail que l’épître aux Hébreux reprend dans son argumentation sur son sacerdoce." }

  },
  {
    id: 'a17', levelNumber: 17, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "James — Faith and Works", fr: "Jacques — La Foi et les Œuvres" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a17-a', isTruth: true,  text: { en: "James says faith without deeds is dead — as the body without the spirit is dead.", fr: "Jacques dit que la foi sans les œuvres est morte — comme le corps sans l'esprit est mort." } },
      { id: 'a17-b', isTruth: true,  text: { en: "James says Abraham was justified by works when he offered Isaac on the altar.", fr: "Jacques dit qu'Abraham fut justifié par les œuvres quand il offrit Isaac sur l'autel." } },
      { id: 'a17-c', isTruth: true,  text: { en: "James says if you claim to have faith but no deeds, your faith cannot save you.", fr: "Jacques dit que si quelqu'un prétend avoir la foi sans en avoir les œuvres, cette foi ne peut le sauver." } },
      { id: 'a17-d', isTruth: false, text: { en: "James directly contradicts Paul by teaching that salvation comes from works plus faith, not faith alone.", fr: "Jacques contredit directement Paul en enseignant que le salut vient des œuvres plus la foi, et non de la seule foi." } },
    ],
    explanation: { en: "James and Paul are addressing different issues. Paul argues against trusting in law-works for justification before God. James argues against a dead, profession-only faith with no evidence. They complement rather than contradict each other — true saving faith produces works (James 2:24; Romans 3:28).", fr: "Jacques et Paul traitent de questions différentes. Paul argumente contre la confiance dans les œuvres de la loi pour la justification devant Dieu. Jacques argumente contre une foi morte, qui ne consiste qu'en profession sans preuve. Ils se complètent plutôt qu'ils ne se contredisent — la vraie foi salvatrice produit des œuvres (Jacques 2:24 ; Romains 3:28)." },
    didYouKnow: { en: "James points to both Abraham and Rahab when illustrating a faith demonstrated through action.", fr: "Jacques cite à la fois Abraham et Rahab pour illustrer une foi qui se manifeste par les actes." }

  },
  {
    id: 'a18', levelNumber: 18, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Seven 'I Am' Statements in John", fr: "Les Sept Déclarations 'Je Suis' dans Jean" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a18-a', isTruth: true,  text: { en: "Jesus declared 'I am the bread of life' — those who come to Him will never go hungry.", fr: "Jésus déclara : 'Je suis le pain de vie' — celui qui vient à lui n'aura plus jamais faim." } },
      { id: 'a18-b', isTruth: true,  text: { en: "Jesus declared 'I am the resurrection and the life' — those who believe in Him will live even if they die.", fr: "Jésus déclara : 'Je suis la résurrection et la vie' — celui qui croit en lui vivra même s'il meurt." } },
      { id: 'a18-c', isTruth: true,  text: { en: "Jesus declared 'I am the way, the truth, and the life — no one comes to the Father except through me.'", fr: "Jésus déclara : 'Je suis le chemin, la vérité et la vie — nul ne vient au Père que par moi.'" } },
      { id: 'a18-d', isTruth: false, text: { en: "Jesus declared 'I am the cornerstone' as one of His seven 'I am' statements in John's Gospel.", fr: "Jésus déclara 'Je suis la pierre angulaire' comme l'une de ses sept déclarations 'Je suis' dans l'Évangile de Jean." } },
    ],
    explanation: { en: "'I am the cornerstone' is not one of Jesus' seven I AM statements in John. The seven are: bread of life (6:35), light of the world (8:12), gate for the sheep (10:7), good shepherd (10:11), resurrection and life (11:25), way/truth/life (14:6), true vine (15:1). Cornerstone is a metaphor used of Jesus elsewhere (Ephesians 2:20) but not as an I AM statement.", fr: "'Je suis la pierre angulaire' ne fait pas partie des sept déclarations 'Je suis' de Jésus dans Jean. Les sept sont : pain de vie (6:35), lumière du monde (8:12), porte des brebis (10:7), bon berger (10:11), résurrection et vie (11:25), chemin/vérité/vie (14:6), vraie vigne (15:1)." },
    didYouKnow: { en: "Before Abraham was born, Jesus declares 'I am' in John 8:58, another major Johannine use of the expression beyond the seven metaphorical sayings.", fr: "Avant qu’Abraham fût, Jésus déclare « Je suis » en Jean 8:58, un autre emploi majeur de cette expression chez Jean au-delà des sept déclarations métaphoriques." }

  },
  {
    id: 'a19', levelNumber: 19, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Paul's 'Thorn in the Flesh'", fr: "L'Épine dans la Chair de Paul" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a19-a', isTruth: true,  text: { en: "Paul says he was given a 'thorn in the flesh' to keep him from being conceited after receiving surpassing revelations.", fr: "Paul dit qu'une 'épine dans la chair' lui fut donnée pour l'empêcher de s'enorgueillir après avoir reçu des révélations supérieures." } },
      { id: 'a19-b', isTruth: true,  text: { en: "Paul says he pleaded with the Lord three times to take the thorn away.", fr: "Paul dit qu'il demanda trois fois au Seigneur de lui retirer cette épine." } },
      { id: 'a19-c', isTruth: true,  text: { en: "God's response was 'My grace is sufficient for you, for my power is made perfect in weakness.'", fr: "La réponse de Dieu fut : 'Ma grâce te suffit, car ma puissance s'accomplit dans la faiblesse.'" } },
      { id: 'a19-d', isTruth: false, text: { en: "Paul clearly identified his 'thorn in the flesh' as an eye disease in 2 Corinthians.", fr: "Paul identifia clairement son 'épine dans la chair' comme une maladie des yeux dans 2 Corinthiens." } },
    ],
    explanation: { en: "Paul never specifically identifies what the thorn is in 2 Corinthians 12. Theories include eye problems (from Galatians 4:15), epilepsy, headaches, or opponents. It remains unidentified in the 2 Corinthians passage itself (2 Corinthians 12:7).", fr: "Paul ne précise jamais ce qu'est l'épine dans 2 Corinthiens 12. Les théories incluent des problèmes oculaires (d'après Galates 4:15), l'épilepsie, les maux de tête ou des adversaires. Elle reste non identifiée dans le passage lui-même (2 Corinthiens 12:7)." },
    didYouKnow: { en: "Paul says he pleaded with the Lord three times for the thorn to leave him before receiving the answer about sufficient grace.", fr: "Paul dit avoir supplié trois fois le Seigneur d’éloigner son écharde avant de recevoir la réponse concernant la grâce suffisante." }

  },
  {
    id: 'a20', levelNumber: 20, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Revelation — The Mark of the Beast", fr: "Apocalypse — La Marque de la Bête" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a20-a', isTruth: true,  text: { en: "Revelation 13 says the mark of the beast is placed on the right hand or the forehead.", fr: "Apocalypse 13 dit que la marque de la bête est placée sur la main droite ou le front." } },
      { id: 'a20-b', isTruth: true,  text: { en: "Revelation says no one could buy or sell unless they had the mark.", fr: "L'Apocalypse dit que nul ne pouvait acheter ou vendre sans avoir la marque." } },
      { id: 'a20-c', isTruth: true,  text: { en: "Revelation calls for wisdom to calculate the number of the beast, which is 666.", fr: "L'Apocalypse appelle à la sagesse pour calculer le nombre de la bête, qui est 666." } },
      { id: 'a20-d', isTruth: false, text: { en: "Revelation 13 explicitly states the mark of the beast will be a physical tattoo visible to the human eye.", fr: "Apocalypse 13 stipule explicitement que la marque de la bête sera un tatouage physique visible à l'œil humain." } },
    ],
    explanation: { en: "Revelation 13 says the mark will be placed on the right hand or forehead but does not describe its physical form or say it will be a tattoo. The exact nature of the mark — whether literal or symbolic — is a matter of ongoing theological debate (Revelation 13:16-17).", fr: "Apocalypse 13 dit que la marque sera placée sur la main droite ou le front mais ne décrit pas sa forme physique ni ne dit que ce sera un tatouage. La nature exacte de la marque — littérale ou symbolique — est un sujet de débat théologique en cours (Apocalypse 13:16-17)." },
    didYouKnow: { en: "Revelation 13 links the number 666 with the number of the beast and calls for wisdom in calculating it.", fr: "Apocalypse 13 associe le nombre 666 au nombre de la bête et appelle à la sagesse pour le calculer." }

  },
  {
    id: 'a21', levelNumber: 21, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Covenant of Abraham (Genesis 15 & 17)", fr: "L'Alliance d'Abraham (Genèse 15 et 17)" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a21-a', isTruth: true,  text: { en: "In Genesis 15, God made a covenant with Abraham while he was in a deep sleep, represented by a smoking firepot and blazing torch.", fr: "Dans Genèse 15, Dieu établit une alliance avec Abraham pendant qu'il était dans un profond sommeil, représentée par un brasier fumant et une torche enflammée." } },
      { id: 'a21-b', isTruth: true,  text: { en: "God promised Abraham that his descendants would be slaves in a foreign country for 400 years before being freed.", fr: "Dieu promit à Abraham que ses descendants seraient esclaves en pays étranger pendant 400 ans avant d'être libérés." } },
      { id: 'a21-c', isTruth: true,  text: { en: "In the Genesis 15 covenant, only God passed through the pieces of the animals — symbolizing a unilateral covenant.", fr: "Dans l'alliance de Genèse 15, seul Dieu passa entre les morceaux des animaux — symbolisant une alliance unilatérale." } },
      { id: 'a21-d', isTruth: false, text: { en: "Abraham performed animal sacrifices in Genesis 15 using twelve animals representing the twelve tribes of Israel.", fr: "Abraham accomplit des sacrifices d'animaux dans Genèse 15 avec douze animaux représentant les douze tribus d'Israël." } },
    ],
    explanation: { en: "Abraham prepared five animals in Genesis 15: a heifer, a goat, a ram (each cut in two), and a dove and a young pigeon (not cut). There were five animals — not twelve — and no explicit connection to the twelve tribes (Genesis 15:9-10).", fr: "Abraham prépara cinq animaux dans Genèse 15 : une génisse, une chèvre, un bélier (chacun coupé en deux), et une tourterelle et un jeune pigeon (non coupés). Il y avait cinq animaux — pas douze — et aucun lien explicite avec les douze tribus (Genèse 15:9-10)." },
    didYouKnow: { en: "Genesis 15 describes a smoking firepot and a flaming torch passing between the divided pieces when God confirms the covenant with Abram.", fr: "Genèse 15 décrit un four fumant et une torche enflammée passant entre les animaux partagés lorsque Dieu confirme son alliance avec Abram." }

  },
  {
    id: 'a22', levelNumber: 22, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Paul's Letter to the Colossians", fr: "La Lettre de Paul aux Colossiens" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a22-a', isTruth: true,  text: { en: "Colossians 1 says Jesus is 'the firstborn over all creation' and 'in him all things hold together.'", fr: "Colossiens 1 dit que Jésus est 'le premier-né de toute la création' et que 'tout subsiste en lui.'" } },
      { id: 'a22-b', isTruth: true,  text: { en: "Paul warns the Colossians against being captured by hollow and deceptive philosophy, according to human tradition rather than Christ.", fr: "Paul avertit les Colossiens de ne pas se laisser captiver par une philosophie creuse et trompeuse, selon la tradition humaine plutôt que selon Christ." } },
      { id: 'a22-c', isTruth: true,  text: { en: "Paul says in Colossians that God was pleased to have all His fullness dwell in Christ.", fr: "Paul dit dans Colossiens que Dieu a voulu que toute sa plénitude habite en Christ." } },
      { id: 'a22-d', isTruth: false, text: { en: "Paul wrote Colossians specifically to address the heresy of Gnosticism by name.", fr: "Paul écrivit aux Colossiens spécifiquement pour s'opposer nommément à l'hérésie du gnosticisme." } },
    ],
    explanation: { en: "Paul never names 'Gnosticism' in Colossians. He addresses certain practices and beliefs that some scholars associate with proto-Gnostic or syncretistic tendencies, but the letter's target heresy is often called the 'Colossian heresy' — its exact identity is debated and not labeled 'Gnosticism' by Paul (Colossians 2:8).", fr: "Paul ne nomme jamais le 'gnosticisme' dans Colossiens. Il aborde certaines pratiques et croyances que des érudits associent à des tendances proto-gnostiques, mais l'hérésie ciblée, souvent appelée 'hérésie colossienne', n'est pas étiquetée 'gnosticisme' par Paul (Colossiens 2:8)." },
    didYouKnow: { en: "Colossians says the letter should also be read in the church of the Laodiceans, and that the Colossians should read a letter coming from Laodicea.", fr: "Colossiens demande que la lettre soit aussi lue dans l’Église de Laodicée et que les Colossiens lisent également une lettre venant de Laodicée." }

  },
  {
    id: 'a23', levelNumber: 23, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "1 Thessalonians — The Second Coming", fr: "1 Thessaloniciens — Le Second Avènement" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a23-a', isTruth: true,  text: { en: "Paul says the Lord will descend from heaven with a loud command, the archangel's call, and the trumpet of God.", fr: "Paul dit que le Seigneur descendra du ciel avec un signal, la voix d'un archange et la trompette de Dieu." } },
      { id: 'a23-b', isTruth: true,  text: { en: "Paul says those who have died in Christ will rise first, then those who are still alive will be caught up with them in the clouds.", fr: "Paul dit que ceux qui sont morts en Christ ressusciteront d'abord, puis ceux qui seront encore vivants seront emportés avec eux dans les nuées." } },
      { id: 'a23-c', isTruth: true,  text: { en: "Paul wrote 1 Thessalonians partly to reassure believers who were worried that Christians who had died would miss the Second Coming.", fr: "Paul écrivit 1 Thessaloniciens en partie pour rassurer les croyants qui craignaient que les chrétiens morts ratent le Second Avènement." } },
      { id: 'a23-d', isTruth: false, text: { en: "Paul specifies in 1 Thessalonians 4 that the Second Coming will occur exactly seven years after a specific treaty is signed.", fr: "Paul précise dans 1 Thessaloniciens 4 que le Second Avènement aura lieu exactement sept ans après la signature d'un traité spécifique." } },
    ],
    explanation: { en: "Paul says the day of the Lord will come like a thief in the night — unexpectedly. He gives no specific timeline of seven years or connection to a treaty. Such precise timelines come from interpretive traditions applied to other passages, not from 1 Thessalonians itself (1 Thessalonians 5:2).", fr: "Paul dit que le jour du Seigneur viendra comme un voleur dans la nuit — de manière inattendue. Il ne donne aucun calendrier précis de sept ans ni de lien avec un traité. De telles chronologies précises viennent de traditions interprétatives appliquées à d'autres passages, pas de 1 Thessaloniciens lui-même (1 Thessaloniciens 5:2)." },
    didYouKnow: { en: "Paul says the 'dead in Christ' will rise first before living believers are caught up together with them to meet the Lord.", fr: "Paul affirme que les « morts en Christ » ressusciteront premièrement avant que les croyants vivants soient enlevés avec eux à la rencontre du Seigneur." }

  },
  {
    id: 'a24', levelNumber: 24, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Ezekiel's Vision of the Valley of Dry Bones", fr: "La Vision d'Ézéchiel de la Vallée des Ossements" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a24-a', isTruth: true,  text: { en: "The Spirit carried Ezekiel and set him in the middle of a valley full of very dry bones.", fr: "L'Esprit transporta Ézéchiel et le déposa au milieu d'une vallée pleine d'ossements très secs." } },
      { id: 'a24-b', isTruth: true,  text: { en: "God asked Ezekiel 'Son of man, can these bones live?' and Ezekiel replied 'Sovereign LORD, you alone know.'", fr: "Dieu demanda à Ézéchiel : 'Fils de l'homme, ces ossements peuvent-ils revivre ?' et Ézéchiel répondit : 'Seigneur Éternel, toi seul le sais.'" } },
      { id: 'a24-c', isTruth: true,  text: { en: "God explained to Ezekiel that the dry bones represented the whole house of Israel in exile.", fr: "Dieu expliqua à Ézéchiel que les ossements secs représentaient toute la maison d'Israël en exil." } },
      { id: 'a24-d', isTruth: false, text: { en: "Ezekiel was told to pray over the bones, and they came to life through his intercession.", fr: "Ézéchiel reçut l'ordre de prier sur les ossements, et ils revirent à la vie grâce à son intercession." } },
    ],
    explanation: { en: "God told Ezekiel to prophesy — to speak the word of God over the bones. It was the spoken word of prophecy commanded by God, not Ezekiel's prayer of intercession, that caused the bones to come together and receive breath (Ezekiel 37:4-10).", fr: "Dieu ordonna à Ézéchiel de prophétiser — de proclamer la parole de Dieu sur les ossements. C'est la parole de prophétie prononcée sur ordre de Dieu, et non la prière d'intercession d'Ézéchiel, qui fit que les ossements se rejoignirent et reçurent le souffle (Ézéchiel 37:4-10)." },
    didYouKnow: { en: "Ezekiel's dry-bones vision unfolds in stages: bones join together, flesh appears, and only afterward does breath enter them.", fr: "La vision des ossements desséchés d’Ézéchiel se déroule par étapes : les os se rejoignent, la chair apparaît, puis le souffle entre en eux." }

  },
  {
    id: 'a25', levelNumber: 25, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Zechariah's Messianic Prophecies", fr: "Les Prophéties Messianiques de Zacharie" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a25-a', isTruth: true,  text: { en: "Zechariah 9:9 prophesied the Messiah would come riding on a donkey, on a colt, the foal of a donkey.", fr: "Zacharie 9:9 prophétisa que le Messie viendrait monté sur un âne, sur un ânon fils d'ânesse." } },
      { id: 'a25-b', isTruth: true,  text: { en: "Zechariah 11:12-13 prophesied the 30 pieces of silver and the potter's field, which Matthew applies to Judas's betrayal.", fr: "Zacharie 11:12-13 prophétisa les 30 pièces d'argent et le champ du potier, que Matthieu applique à la trahison de Judas." } },
      { id: 'a25-c', isTruth: true,  text: { en: "Zechariah 12:10 speaks of the one who was 'pierced' being mourned like a firstborn son.", fr: "Zacharie 12:10 parle de celui qui a été 'transpercé' et pleuré comme un fils premier-né." } },
      { id: 'a25-d', isTruth: false, text: { en: "Zechariah prophesied that the Messiah would be born in Bethlehem of Ephrathah.", fr: "Zacharie prophétisa que le Messie naîtrait à Bethléhem d'Éphrata." } },
    ],
    explanation: { en: "The prophecy of the Messiah's birth in Bethlehem of Ephrathah is found in Micah 5:2 — not in Zechariah. This is a classic misattribution. Zechariah contains other Messianic prophecies but not the Bethlehem birthplace (Micah 5:2).", fr: "La prophétie de la naissance du Messie à Bethléhem d'Éphrata se trouve dans Michée 5:2 — pas dans Zacharie. C'est une erreur d'attribution classique. Zacharie contient d'autres prophéties messianiques mais pas le lieu de naissance à Bethléhem (Michée 5:2)." },
    didYouKnow: { en: "Zechariah 9:9 portrays Zion's king arriving humble and riding on a donkey, a text the Gospels connect with Jesus' entry into Jerusalem.", fr: "Zacharie 9:9 présente le roi de Sion venant humblement sur un âne, texte que les Évangiles relient à l’entrée de Jésus à Jérusalem." }

  },
  {
    id: 'a26', levelNumber: 26, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Revelation — The Four Living Creatures", fr: "Apocalypse — Les Quatre Êtres Vivants" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a26-a', isTruth: true,  text: { en: "Revelation 4 describes four living creatures around the throne with faces like a lion, an ox, a man, and an eagle.", fr: "Apocalypse 4 décrit quatre êtres vivants autour du trône avec des faces de lion, de bœuf, d'homme et d'aigle." } },
      { id: 'a26-b', isTruth: true,  text: { en: "Each of the four living creatures in Revelation has six wings and is covered with eyes all around.", fr: "Chacun des quatre êtres vivants de l'Apocalypse a six ailes et est couvert d'yeux tout autour." } },
      { id: 'a26-c', isTruth: true,  text: { en: "The four living creatures cry 'Holy, holy, holy is the Lord God Almighty, who was, and is, and is to come.'", fr: "Les quatre êtres vivants crient : 'Saint, saint, saint est le Seigneur Dieu tout-puissant, qui était, qui est et qui vient.'" } },
      { id: 'a26-d', isTruth: false, text: { en: "Ezekiel's four living creatures in Ezekiel 1 are identical in all details to John's four creatures in Revelation 4.", fr: "Les quatre êtres vivants d'Ézéchiel 1 sont identiques en tous points aux quatre êtres de l'Apocalypse 4." } },
    ],
    explanation: { en: "Both describe four living creatures with four faces, but there are differences. Ezekiel's creatures each have four wings and human-like hands; Revelation's have six wings. In Ezekiel they move in straight lines with wheels; in Revelation they stand and cry. The imagery parallels but does not perfectly match (Ezekiel 1:6 vs Revelation 4:8).", fr: "Les deux décrivent quatre êtres avec quatre faces, mais il y a des différences. Les êtres d'Ézéchiel ont chacun quatre ailes et des mains humaines ; ceux de l'Apocalypse en ont six. Chez Ézéchiel ils se déplacent en ligne droite avec des roues ; dans l'Apocalypse ils se tiennent debout et crient (Ézéchiel 1:6 vs Apocalypse 4:8)." },
    didYouKnow: { en: "Revelation's four living creatures continually proclaim God's holiness, echoing the heavenly worship scene of Isaiah 6.", fr: "Les quatre êtres vivants de l’Apocalypse proclament continuellement la sainteté de Dieu, faisant écho à la scène céleste d’Ésaïe 6." }

  },
  {
    id: 'a27', levelNumber: 27, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Levitical Feasts (Leviticus 23)", fr: "Les Fêtes Lévitiques (Lévitique 23)" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a27-a', isTruth: true,  text: { en: "The seven feasts of Israel include Passover, Unleavened Bread, Firstfruits, Pentecost (Weeks), Trumpets, Atonement, and Tabernacles.", fr: "Les sept fêtes d'Israël incluent la Pâque, les Pains sans levain, les Prémices, la Pentecôte, les Trompettes, l'Expiation et les Tabernacles." } },
      { id: 'a27-b', isTruth: true,  text: { en: "The Feast of Tabernacles (Sukkot) lasted seven days and celebrated the wilderness wandering.", fr: "La fête des Tabernacles (Soukkot) durait sept jours et célébrait l'errance dans le désert." } },
      { id: 'a27-c', isTruth: true,  text: { en: "Yom Kippur (Day of Atonement) was the most solemn day in the Jewish calendar, requiring fasting and rest.", fr: "Yom Kippour (Jour des Expiations) était le jour le plus solennel du calendrier juif, exigeant le jeûne et le repos." } },
      { id: 'a27-d', isTruth: false, text: { en: "The Feast of Hanukkah is one of the seven appointed feasts listed in Leviticus 23.", fr: "La fête de Hanoukka est l'une des sept fêtes désignées listées dans Lévitique 23." } },
    ],
    explanation: { en: "Hanukkah is not one of the seven Levitical feasts in Leviticus 23. It was instituted much later to commemorate the rededication of the temple during the Maccabean period (2nd century BC). It is mentioned in John 10:22 as the 'Feast of Dedication.'", fr: "Hanoukka n'est pas l'une des sept fêtes lévitiques de Lévitique 23. Elle fut instituée bien plus tard pour commémorer la rededication du temple lors de la période maccabéenne (2e siècle av. J.-C.). Elle est mentionnée dans Jean 10:22 comme la 'fête de la Dédicace.'" },
    didYouKnow: { en: "Leviticus 23 presents the Sabbath before listing Israel's annual appointed festivals.", fr: "Lévitique 23 présente le sabbat avant d’énumérer les fêtes annuelles fixées pour Israël." }

  },
  {
    id: 'a28', levelNumber: 28, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "2 Peter — False Teachers", fr: "2 Pierre — Les Faux Docteurs" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a28-a', isTruth: true,  text: { en: "Peter warns of false teachers who will secretly introduce destructive heresies, even denying the sovereign Lord who bought them.", fr: "Pierre avertit de faux docteurs qui introduiront secrètement des hérésies destructrices, niant même le Seigneur souverain qui les a rachetés." } },
      { id: 'a28-b', isTruth: true,  text: { en: "Peter says that with the Lord a day is like a thousand years, and a thousand years are like a day.", fr: "Pierre dit qu'auprès du Seigneur un jour est comme mille ans et mille ans sont comme un jour." } },
      { id: 'a28-c', isTruth: true,  text: { en: "2 Peter describes false teachers as 'springs without water and mists driven by a storm.'", fr: "2 Pierre décrit les faux docteurs comme 'des sources sans eau et des brouillards poussés par la tempête.'" } },
      { id: 'a28-d', isTruth: false, text: { en: "Peter says God's reason for delaying judgment is because He is unable to bring it about yet.", fr: "Pierre dit que la raison pour laquelle Dieu tarde à exercer le jugement est qu'Il n'est pas encore en mesure de le faire." } },
    ],
    explanation: { en: "Peter explicitly says God's delay is not because He cannot act — it is because He is patient, not wanting anyone to perish but for everyone to come to repentance. God's delay is a merciful choice, not a limitation (2 Peter 3:9).", fr: "Pierre dit explicitement que le délai de Dieu n'est pas parce qu'Il ne peut pas agir — c'est parce qu'Il est patient, ne voulant pas qu'aucun périsse mais que tous arrivent à la repentance. Le délai de Dieu est un choix miséricordieux, pas une limitation (2 Pierre 3:9)." },
    didYouKnow: { en: "Second Peter compares false teachers with Balaam, who loved the wages of wrongdoing but was rebuked by a donkey.", fr: "2 Pierre compare les faux docteurs à Balaam, qui aima le salaire de l’iniquité mais fut repris par une ânesse." }

  },
  {
    id: 'a29', levelNumber: 29, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The High Priestly Prayer — John 17", fr: "La Prière Sacerdotale — Jean 17" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a29-a', isTruth: true,  text: { en: "Jesus prayed that His disciples would be sanctified by the truth, saying 'Your word is truth.'", fr: "Jésus pria que ses disciples soient sanctifiés par la vérité, disant : 'Ta parole est vérité.'" } },
      { id: 'a29-b', isTruth: true,  text: { en: "Jesus prayed for believers to be one, as He and the Father are one, so the world would believe.", fr: "Jésus pria pour que les croyants soient un, comme lui et le Père sont un, afin que le monde croie." } },
      { id: 'a29-c', isTruth: true,  text: { en: "Jesus explicitly says in John 17 'I am not praying for the world, but for those you have given me.'", fr: "Jésus dit explicitement dans Jean 17 : 'Ce n'est pas pour le monde que je prie, mais pour ceux que tu m'as donnés.'" } },
      { id: 'a29-d', isTruth: false, text: { en: "Jesus prayed in John 17 that His disciples would be taken out of the world to be protected from evil.", fr: "Jésus pria dans Jean 17 que ses disciples soient ôtés du monde pour être protégés du mal." } },
    ],
    explanation: { en: "Jesus explicitly said 'My prayer is not that you take them out of the world but that you protect them from the evil one.' He wanted them to remain in the world as His witnesses while being protected (John 17:15).", fr: "Jésus dit explicitement : 'Je ne prie pas que tu les ôtes du monde, mais que tu les gardes du mal.' Il voulait qu'ils restent dans le monde comme ses témoins tout en étant protégés (Jean 17:15)." },
    didYouKnow: { en: "Jesus' prayer in John 17 includes not only the disciples present with him but also those who would later believe through their message.", fr: "La prière de Jésus en Jean 17 inclut non seulement les disciples présents avec lui, mais aussi ceux qui croiraient plus tard grâce à leur parole." }

  },
  {
    id: 'a30', levelNumber: 30, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Olivet Discourse — Signs of the End", fr: "Le Discours Olivétique — Les Signes de la Fin" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a30-a', isTruth: true,  text: { en: "Jesus predicted the destruction of the temple, saying not one stone would be left on another.", fr: "Jésus prédit la destruction du temple, disant qu'il n'y resterait pas pierre sur pierre." } },
      { id: 'a30-b', isTruth: true,  text: { en: "Jesus warned of false messiahs, wars, earthquakes, and famines as 'the beginning of birth pains.'", fr: "Jésus avertit de faux messies, de guerres, de tremblements de terre et de famines comme 'le commencement des douleurs de l'enfantement.'" } },
      { id: 'a30-c', isTruth: true,  text: { en: "Jesus said 'About that day or hour no one knows, not even the angels in heaven, nor the Son, but only the Father.'", fr: "Jésus dit : 'Ce jour et cette heure-là, personne ne les connaît, pas même les anges dans le ciel, ni le Fils, mais le Père seul.'" } },
      { id: 'a30-d', isTruth: false, text: { en: "Jesus said the generation that sees the sign of the Son of Man in the sky will have three years to repent before judgment.", fr: "Jésus dit que la génération qui verra le signe du Fils de l'homme dans le ciel aura trois ans pour se repentir avant le jugement." } },
    ],
    explanation: { en: "Jesus gave no such three-year window after the sign. He said when the sign appears in the sky, the tribes of the earth will mourn and they will see the Son of Man coming — with power and glory. The text presents this as an immediate, swift event, not a three-year period (Matthew 24:30).", fr: "Jésus ne donna pas de délai de trois ans après le signe. Il dit que quand le signe paraîtra dans le ciel, les tribus de la terre se lamenteront et verront le Fils de l'homme venir avec puissance et gloire — présenté comme immédiat, pas comme une période de trois ans (Matthieu 24:30)." },
    didYouKnow: { en: "In the Olivet Discourse, Jesus repeatedly warns his disciples to stay watchful because the precise time is not disclosed to them.", fr: "Dans le discours sur le mont des Oliviers, Jésus exhorte à plusieurs reprises ses disciples à veiller, puisque le moment précis ne leur est pas révélé." }

  },
  {
    id: 'a31', levelNumber: 31, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Romans 9–11 — Israel and the Gentiles", fr: "Romains 9–11 — Israël et les Nations" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a31-a', isTruth: true,  text: { en: "Paul uses the metaphor of an olive tree in Romans 11, with some natural branches broken off and wild branches grafted in.", fr: "Paul utilise la métaphore d'un olivier dans Romains 11, avec certaines branches naturelles cassées et des branches sauvages greffées." } },
      { id: 'a31-b', isTruth: true,  text: { en: "Paul says 'all Israel will be saved' and a partial hardening has come upon Israel until the full number of Gentiles comes in.", fr: "Paul dit 'tout Israël sera sauvé' et qu'un endurcissement partiel est arrivé à Israël jusqu'à ce que la totalité des nations soit entrée." } },
      { id: 'a31-c', isTruth: true,  text: { en: "Paul concludes this section with a doxology: 'Oh, the depth of the riches of the wisdom and knowledge of God!'", fr: "Paul conclut cette section par une doxologie : 'Ô profondeur des richesses, de la sagesse et de la science de Dieu !'" } },
      { id: 'a31-d', isTruth: false, text: { en: "Paul teaches in Romans 9–11 that God has permanently rejected the Jewish people in favor of Gentiles.", fr: "Paul enseigne dans Romains 9–11 que Dieu a définitivement rejeté le peuple juif en faveur des nations." } },
    ],
    explanation: { en: "Paul explicitly asks 'Did God reject his people?' and answers 'By no means!' He himself is a Jew, and he argues God has not rejected Israel. He says Israel's stumbling has brought salvation to Gentiles, but God's ultimate purpose includes restoring Israel (Romans 11:1-2, 11).", fr: "Paul demande explicitement : 'Dieu a-t-il rejeté son peuple ?' et répond : 'Certes non !' Il est lui-même juif, et il argumente que Dieu n'a pas rejeté Israël. Il dit que la chute d'Israël a apporté le salut aux nations, mais que le dessein ultime de Dieu inclut la restauration d'Israël (Romains 11:1-2, 11)." },
    didYouKnow: { en: "Romans 11 uses the image of an olive tree in which some natural branches are broken off and wild branches are grafted in.", fr: "Romains 11 emploie l’image d’un olivier dont certaines branches naturelles sont retranchées tandis que des branches d’olivier sauvage sont greffées." }

  },
  {
    id: 'a32', levelNumber: 32, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "1 John — Fellowship and the Tests of Faith", fr: "1 Jean — La Communion et les Tests de la Foi" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a32-a', isTruth: true,  text: { en: "1 John says 'God is light; in him there is no darkness at all.'", fr: "1 Jean dit : 'Dieu est lumière et en lui il n'y a pas de ténèbres.'" } },
      { id: 'a32-b', isTruth: true,  text: { en: "John says 'If we claim to be without sin, we deceive ourselves and the truth is not in us.'", fr: "Jean dit : 'Si nous disons que nous n'avons pas de péché, nous nous séduisons nous-mêmes et la vérité n'est pas en nous.'" } },
      { id: 'a32-c', isTruth: true,  text: { en: "John writes that 'God is love' and that perfect love drives out fear.", fr: "Jean écrit que 'Dieu est amour' et que l'amour parfait bannit la crainte." } },
      { id: 'a32-d', isTruth: false, text: { en: "John says in 1 John that anyone who has been born of God is incapable of committing any sin.", fr: "Jean dit dans 1 Jean que quiconque est né de Dieu est incapable de commettre aucun péché." } },
    ],
    explanation: { en: "1 John 3:9 says those born of God do not 'continue to sin' or 'practice sin' (depending on translation). The same letter also says 'if we claim to be without sin, we deceive ourselves' (1:8). John is describing a pattern of life, not absolute sinless perfection (1 John 1:8; 3:9).", fr: "1 Jean 3:9 dit que ceux qui sont nés de Dieu ne 'pratiquent pas le péché' (selon les traductions). La même lettre dit aussi 'si nous disons que nous n'avons pas de péché, nous nous séduisons' (1:8). Jean décrit un mode de vie, non une perfection sans péché absolue (1 Jean 1:8 ; 3:9)." },
    didYouKnow: { en: "First John repeatedly links love for God with love for fellow believers, refusing to separate the two claims.", fr: "1 Jean relie à plusieurs reprises l’amour de Dieu à l’amour des autres croyants, refusant de séparer ces deux réalités." }

  },
  {
    id: 'a33', levelNumber: 33, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Revelation — The 144,000", fr: "Apocalypse — Les 144 000" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a33-a', isTruth: true,  text: { en: "Revelation 7 describes 144,000 sealed from the twelve tribes of Israel — 12,000 from each tribe.", fr: "Apocalypse 7 décrit 144 000 scellés des douze tribus d'Israël — 12 000 de chaque tribu." } },
      { id: 'a33-b', isTruth: true,  text: { en: "Revelation 14 describes the 144,000 as those who had not defiled themselves and followed the Lamb wherever He goes.", fr: "Apocalypse 14 décrit les 144 000 comme ceux qui ne s'étaient pas souillés et qui suivaient l'Agneau partout où il allait." } },
      { id: 'a33-c', isTruth: true,  text: { en: "In Revelation 7, after the 144,000 are mentioned, a great multitude that no one could count appears — from every nation.", fr: "Dans Apocalypse 7, après la mention des 144 000, apparaît une grande foule que personne ne pouvait dénombrer — de toute nation." } },
      { id: 'a33-d', isTruth: false, text: { en: "The tribe of Dan is included in the list of 144,000 in Revelation 7.", fr: "La tribu de Dan est incluse dans la liste des 144 000 dans Apocalypse 7." } },
    ],
    explanation: { en: "The tribe of Dan is notably absent from the list in Revelation 7. Manasseh (Joseph's son) appears instead of Dan. Scholars have debated why Dan is excluded — some link it to Dan's idolatry in Judges (Revelation 7:4-8).", fr: "La tribu de Dan est remarquablement absente de la liste d'Apocalypse 7. Manassé (fils de Joseph) apparaît à sa place. Les érudits ont débattu des raisons de l'exclusion de Dan — certains la relient à l'idolâtrie de Dan dans les Juges (Apocalypse 7:4-8)." },
    didYouKnow: { en: "Revelation 7 describes the 144,000 by twelve named tribes and then immediately presents a great multitude from every nation before the throne.", fr: "Apocalypse 7 décrit les 144 000 selon douze tribus nommées, puis présente immédiatement une grande foule de toute nation devant le trône." }

  },
  {
    id: 'a34', levelNumber: 34, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Jeremiah's New Covenant (Jeremiah 31)", fr: "La Nouvelle Alliance de Jérémie (Jérémie 31)" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a34-a', isTruth: true,  text: { en: "Jeremiah 31 says God will make a new covenant with Israel that is not like the covenant made with their ancestors at the Exodus.", fr: "Jérémie 31 dit que Dieu établira une nouvelle alliance avec Israël qui ne sera pas comme l'alliance faite avec leurs ancêtres lors de l'Exode." } },
      { id: 'a34-b', isTruth: true,  text: { en: "God promises in Jeremiah 31 to put His law in their minds and write it on their hearts.", fr: "Dieu promet dans Jérémie 31 de mettre sa loi dans leur intelligence et de l'écrire sur leur cœur." } },
      { id: 'a34-c', isTruth: true,  text: { en: "Jeremiah 31 promises 'I will be their God and they will be my people' as part of the new covenant.", fr: "Jérémie 31 promet 'Je serai leur Dieu et ils seront mon peuple' dans le cadre de la nouvelle alliance." } },
      { id: 'a34-d', isTruth: false, text: { en: "Jeremiah 31 says the new covenant will only be made with the Gentiles who believe, replacing Israel entirely.", fr: "Jérémie 31 dit que la nouvelle alliance ne sera établie qu'avec les nations qui croient, remplaçant complètement Israël." } },
    ],
    explanation: { en: "Jeremiah 31 explicitly addresses 'the people of Israel and the people of Judah.' The new covenant is made with Israel and Judah — not exclusively with Gentiles. The New Testament teaches Gentiles are included through faith in Christ, but Israel is not replaced (Jeremiah 31:31).", fr: "Jérémie 31 s'adresse explicitement au 'peuple d'Israël et au peuple de Juda'. La nouvelle alliance est établie avec Israël et Juda — pas exclusivement avec les nations. Le Nouveau Testament enseigne que les nations sont incluses par la foi en Christ, mais Israël n'est pas remplacé (Jérémie 31:31)." },
    didYouKnow: { en: "Jeremiah's new-covenant promise includes God's law written on the heart and the forgiveness of iniquity.", fr: "La promesse de la nouvelle alliance dans Jérémie comprend la loi de Dieu écrite dans le cœur et le pardon de l’iniquité." }

  },
  {
    id: 'a35', levelNumber: 35, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Beatitudes in Luke vs. Matthew", fr: "Les Béatitudes dans Luc vs Matthieu" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a35-a', isTruth: true,  text: { en: "Matthew 5 records eight beatitudes, while Luke 6 records four beatitudes paired with four 'woes.'", fr: "Matthieu 5 rapporte huit béatitudes, tandis que Luc 6 en rapporte quatre associées à quatre 'malheurs.'" } },
      { id: 'a35-b', isTruth: true,  text: { en: "Matthew says 'Blessed are the poor in spirit,' while Luke says 'Blessed are the poor' without the qualifier.", fr: "Matthieu dit 'Heureux les pauvres en esprit', tandis que Luc dit simplement 'Heureux les pauvres' sans qualificatif." } },
      { id: 'a35-c', isTruth: true,  text: { en: "Luke's Sermon on the Plain includes 'Woe to you who are rich, for you have already received your comfort.'", fr: "Le sermon dans la plaine de Luc comprend : 'Malheur à vous les riches, car vous avez reçu votre consolation.'" } },
      { id: 'a35-d', isTruth: false, text: { en: "Both Matthew and Luke record the Beatitudes as being preached on a mountaintop.", fr: "Matthieu et Luc rapportent tous deux que les Béatitudes furent prêchées au sommet d'une montagne." } },
    ],
    explanation: { en: "Matthew says Jesus went up on a mountainside and sat down (5:1), while Luke 6:17 says Jesus 'went down with them and stood on a level place' — on a plain. This is why Luke's account is called the 'Sermon on the Plain' (Luke 6:17; Matthew 5:1).", fr: "Matthieu dit que Jésus monta sur la montagne et s'assit (5:1), tandis que Luc 6:17 dit que Jésus 'descendit avec eux et s'arrêta dans un endroit plat'. C'est pourquoi le compte rendu de Luc est appelé 'Sermon dans la plaine' (Luc 6:17 ; Matthieu 5:1)." },
    didYouKnow: { en: "Luke's Beatitudes are followed by corresponding woes, including 'woe to you who are rich,' a feature not presented in the same form in Matthew 5.", fr: "Dans Luc, les béatitudes sont suivies de malheurs correspondants, notamment « malheur à vous, riches », une structure qui n’apparaît pas sous la même forme dans Matthieu 5." }

  },
  {
    id: 'a36', levelNumber: 36, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Jude — Contending for the Faith", fr: "Jude — Défendre la Foi" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a36-a', isTruth: true,  text: { en: "Jude introduces himself as a servant of Jesus Christ and brother of James.", fr: "Jude se présente comme serviteur de Jésus-Christ et frère de Jacques." } },
      { id: 'a36-b', isTruth: true,  text: { en: "Jude references the archangel Michael disputing with the devil about the body of Moses.", fr: "Jude fait référence à l'archange Michel disputant avec le diable au sujet du corps de Moïse." } },
      { id: 'a36-c', isTruth: true,  text: { en: "Jude quotes from the book of Enoch, a non-canonical text, calling Enoch 'the seventh from Adam.'", fr: "Jude cite le livre d'Énoch, un texte non canonique, appelant Énoch 'le septième depuis Adam.'" } },
      { id: 'a36-d', isTruth: false, text: { en: "The Book of Jude is the longest letter in the New Testament.", fr: "L'Épître de Jude est la plus longue lettre du Nouveau Testament." } },
    ],
    explanation: { en: "Jude is one of the shortest books in the New Testament — only 25 verses. The longest letters in the New Testament are Romans (16 chapters) and 1 Corinthians (16 chapters). Jude is a very brief, urgent appeal.", fr: "Jude est l'un des livres les plus courts du Nouveau Testament — seulement 25 versets. Les lettres les plus longues sont Romains (16 chapitres) et 1 Corinthiens (16 chapitres). Jude est un bref appel urgent." },
    didYouKnow: { en: "Jude quotes a prophecy attributed to Enoch and also refers to a dispute between Michael the archangel and the devil over Moses' body.", fr: "Jude cite une prophétie attribuée à Hénoc et mentionne aussi une dispute entre l’archange Michel et le diable au sujet du corps de Moïse." }

  },
  {
    id: 'a37', levelNumber: 37, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Priestly Garments (Exodus 28)", fr: "Les Vêtements du Sacrificateur (Exode 28)" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a37-a', isTruth: true,  text: { en: "The High Priest wore a breastpiece with twelve stones, each engraved with the name of one tribe of Israel.", fr: "Le Grand Sacrificateur portait un pectoral avec douze pierres, chacune gravée du nom d'une tribu d'Israël." } },
      { id: 'a37-b', isTruth: true,  text: { en: "The High Priest wore a robe of blue with golden bells and pomegranates on its hem.", fr: "Le Grand Sacrificateur portait une robe bleue avec des cloches en or et des grenades sur son ourlet." } },
      { id: 'a37-c', isTruth: true,  text: { en: "The High Priest's turban had a gold plate inscribed 'HOLY TO THE LORD.'", fr: "La tiare du Grand Sacrificateur portait une lame d'or gravée 'CONSACRÉ À L'ÉTERNEL.'" } },
      { id: 'a37-d', isTruth: false, text: { en: "The High Priest carried the Urim and Thummim in a special belt worn around the waist.", fr: "Le Grand Sacrificateur portait l'Urim et le Thummim dans une ceinture spéciale autour de la taille." } },
    ],
    explanation: { en: "The Urim and Thummim were carried in the breastpiece — the pouch on the chest — not in a belt around the waist. Exodus 28:30 says 'Also put the Urim and the Thummim in the breastpiece' (Exodus 28:30).", fr: "L'Urim et le Thummim étaient portés dans le pectoral — la poche sur la poitrine — pas dans une ceinture autour de la taille. Exode 28:30 dit : 'Tu mettras aussi dans le pectoral de jugement l'Urim et le Thummim' (Exode 28:30)." },
    didYouKnow: { en: "The high priest's breastpiece contained twelve stones, each engraved with the name of one of Israel's tribes.", fr: "Le pectoral du grand prêtre portait douze pierres, chacune gravée du nom de l’une des tribus d’Israël." }

  },
  {
    id: 'a38', levelNumber: 38, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "1 Timothy — Qualifications for Church Leaders", fr: "1 Timothée — Qualifications des Responsables d'Église" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a38-a', isTruth: true,  text: { en: "Paul says an overseer must be 'above reproach, faithful to his wife, temperate, self-controlled, respectable, hospitable, able to teach.'", fr: "Paul dit qu'un évêque doit être 'sans reproche, mari d'une seule femme, sobre, sensé, digne, hospitalier, propre à enseigner.'" } },
      { id: 'a38-b', isTruth: true,  text: { en: "Paul says an elder must not be a recent convert to avoid becoming conceited and falling into the devil's trap.", fr: "Paul dit qu'un ancien ne doit pas être un converti récent pour ne pas devenir orgueilleux et tomber dans le piège du diable." } },
      { id: 'a38-c', isTruth: true,  text: { en: "Paul lists qualifications for deacons in 1 Timothy 3, including being tested first and proven blameless.", fr: "Paul énumère les qualifications pour les diacres dans 1 Timothée 3, notamment être d'abord éprouvés et trouver irréprochables." } },
      { id: 'a38-d', isTruth: false, text: { en: "Paul requires all church elders to be unmarried and celibate like himself to give full devotion to God.", fr: "Paul exige que tous les anciens de l'Église soient célibataires et sans mariage comme lui-même pour se consacrer pleinement à Dieu." } },
    ],
    explanation: { en: "Paul requires elders to be 'faithful to his wife' (literally 'husband of one wife'). He never requires celibacy as a qualification — quite the opposite. Paul himself chose celibacy but never mandated it for church leaders (1 Timothy 3:2).", fr: "Paul exige que les anciens soient 'mari d'une seule femme'. Il n'exige jamais le célibat comme qualification — bien au contraire. Paul lui-même choisit le célibat mais ne l'imposa jamais aux responsables d'Église (1 Timothée 3:2)." },
    didYouKnow: { en: "First Timothy distinguishes the qualifications for overseers from those for deacons, while emphasizing tested character in both.", fr: "1 Timothée distingue les qualifications des responsables de celles des diacres, tout en insistant dans les deux cas sur un caractère éprouvé." }

  },
  {
    id: 'a39', levelNumber: 39, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Malachi — The Final Prophetic Word", fr: "Malachie — La Dernière Parole Prophétique" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a39-a', isTruth: true,  text: { en: "Malachi is the last book of the Old Testament in the Protestant Bible and ends the prophetic record before the New Testament era.", fr: "Malachie est le dernier livre de l'Ancien Testament de la Bible protestante et clôt le registre prophétique avant l'ère du Nouveau Testament." } },
      { id: 'a39-b', isTruth: true,  text: { en: "God accuses the people in Malachi of robbing Him by withholding tithes and offerings.", fr: "Dieu accuse le peuple dans Malachie de le voler en retenant les dîmes et les offrandes." } },
      { id: 'a39-c', isTruth: true,  text: { en: "Malachi 4 promises the coming of 'Elijah the prophet' before the great and dreadful day of the LORD.", fr: "Malachie 4 promet la venue 'd'Élie le prophète' avant le jour de l'Éternel, grand et redoutable." } },
      { id: 'a39-d', isTruth: false, text: { en: "Malachi says God hates all divorce without exception and commands remarriage after divorce is prohibited.", fr: "Malachie dit que Dieu hait tout divorce sans exception et ordonne qu'aucun remariage après un divorce ne soit permis." } },
    ],
    explanation: { en: "Malachi 2:16 contains the phrase about God hating divorce (though some translations render it differently), but the passage is about treacherous divorce — specifically men divorcing their wives of their youth to marry foreign women. It does not address all remarriage or all divorce without exception (Malachi 2:14-16).", fr: "Malachie 2:16 contient l'expression sur Dieu qui hait le divorce (bien que certaines traductions la rendent différemment), mais le passage porte sur le divorce perfide — spécifiquement des hommes répudiant les femmes de leur jeunesse pour épouser des étrangères. Il ne traite pas de tout remariage ou de tout divorce sans exception (Malachie 2:14-16)." },
    didYouKnow: { en: "Malachi ends with a promise that Elijah will come before the great and dreadful day of the LORD.", fr: "Malachie se termine par la promesse qu’Élie viendra avant le jour grand et redoutable de l’Éternel." }

  },
  {
    id: 'a40', levelNumber: 40, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Pharisees and Sadducees — Key Differences", fr: "Pharisiens et Sadducéens — Différences Clés" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a40-a', isTruth: true,  text: { en: "The Sadducees rejected belief in the resurrection of the dead, angels, and spirits, while the Pharisees affirmed all three.", fr: "Les Sadducéens rejetaient la croyance en la résurrection des morts, aux anges et aux esprits, tandis que les Pharisiens les affirmaient tous les trois." } },
      { id: 'a40-b', isTruth: true,  text: { en: "The Sadducees only accepted the five books of Moses (Pentateuch) as authoritative, not the Prophets or Writings.", fr: "Les Sadducéens n'acceptaient que les cinq livres de Moïse (Pentateuque) comme faisant autorité, pas les Prophètes ni les Écrits." } },
      { id: 'a40-c', isTruth: true,  text: { en: "The Pharisees believed in the oral Torah as a supplemental authority alongside the written Torah.", fr: "Les Pharisiens croyaient en la Torah orale comme autorité complémentaire aux côtés de la Torah écrite." } },
      { id: 'a40-d', isTruth: false, text: { en: "The Sadducees were the dominant group in the synagogues throughout Galilee during Jesus' time.", fr: "Les Sadducéens étaient le groupe dominant dans les synagogues de toute la Galilée au temps de Jésus." } },
    ],
    explanation: { en: "The Pharisees dominated the synagogues in Galilee and throughout Jewish life. The Sadducees were concentrated in Jerusalem, particularly around the temple and priestly aristocracy. The Sadducees had little influence outside Jerusalem (Acts 23:7-8).", fr: "Les Pharisiens dominaient les synagogues en Galilée et dans toute la vie juive. Les Sadducéens étaient concentrés à Jérusalem, notamment autour du temple et de l'aristocratie sacerdotale. Les Sadducéens avaient peu d'influence hors de Jérusalem (Actes 23:7-8)." },
    didYouKnow: { en: "Acts says the Sadducees denied resurrection, angels, and spirits, while the Pharisees affirmed them.", fr: "Les Actes indiquent que les Sadducéens niaient la résurrection, les anges et les esprits, tandis que les Pharisiens les reconnaissaient." }

  },
  {
    id: 'a41', levelNumber: 41, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Revelation — The Millennial Reign", fr: "Apocalypse — Le Règne Millénaire" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a41-a', isTruth: true,  text: { en: "Revelation 20 describes Satan being bound and thrown into the Abyss for a thousand years.", fr: "Apocalypse 20 décrit Satan enchaîné et jeté dans l'abîme pour mille ans." } },
      { id: 'a41-b', isTruth: true,  text: { en: "Revelation 20 says those who reigned with Christ for the thousand years are those who did not worship the beast.", fr: "Apocalypse 20 dit que ceux qui régnèrent avec Christ pendant mille ans sont ceux qui n'adorèrent pas la bête." } },
      { id: 'a41-c', isTruth: true,  text: { en: "After the thousand years, Satan is released briefly before being thrown into the lake of fire.", fr: "Après les mille ans, Satan est brièvement libéré avant d'être jeté dans l'étang de feu." } },
      { id: 'a41-d', isTruth: false, text: { en: "The term 'Millennium' referring to the thousand-year reign is used repeatedly throughout the New Testament.", fr: "Le terme 'Millénium' désignant le règne de mille ans est utilisé à plusieurs reprises dans tout le Nouveau Testament." } },
    ],
    explanation: { en: "The concept of a thousand-year reign appears only in Revelation 20 — specifically in six verses (20:2-7). It is not mentioned elsewhere in the New Testament. All theological debate about the Millennium (pre-, post-, a-) centers on this single passage (Revelation 20:2-7).", fr: "Le concept d'un règne de mille ans n'apparaît que dans Apocalypse 20 — spécifiquement dans six versets (20:2-7). Il n'est mentionné nulle part ailleurs dans le Nouveau Testament. Tout débat théologique sur le Millénium (pré-, post-, a-) est centré sur ce seul passage (Apocalypse 20:2-7)." },
    didYouKnow: { en: "Revelation 20 mentions the thousand years six times within a short passage.", fr: "Apocalypse 20 mentionne les mille ans six fois dans un court passage." }

  },
  {
    id: 'a42', levelNumber: 42, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "2 Timothy — Paul's Final Letter", fr: "2 Timothée — La Dernière Lettre de Paul" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a42-a', isTruth: true,  text: { en: "Paul declares in 2 Timothy 3:16 that all Scripture is God-breathed (theopneustos) and useful for teaching, rebuking, correcting, and training.", fr: "Paul déclare dans 2 Timothée 3:16 que toute Écriture est inspirée de Dieu (theopneustos) et utile pour enseigner, reprendre, corriger et instruire." } },
      { id: 'a42-b', isTruth: true,  text: { en: "Paul tells Timothy to endure hardship 'like a good soldier of Christ Jesus.'", fr: "Paul dit à Timothée de supporter les souffrances 'comme un bon soldat du Christ Jésus.'" } },
      { id: 'a42-c', isTruth: true,  text: { en: "Paul says he has 'fought the good fight, finished the race, kept the faith' near the end of 2 Timothy.", fr: "Paul dit qu'il a 'combattu le bon combat, achevé la course, gardé la foi' vers la fin de 2 Timothée." } },
      { id: 'a42-d', isTruth: false, text: { en: "2 Timothy was written by Paul while he was free and traveling on his fourth missionary journey.", fr: "2 Timothée fut écrit par Paul alors qu'il était libre et voyageait lors de son quatrième voyage missionnaire." } },
    ],
    explanation: { en: "2 Timothy was written during Paul's second Roman imprisonment — believed to be his final imprisonment before execution. Paul writes from prison with a sense of imminent death, saying 'The time for my departure is near' (2 Timothy 4:6).", fr: "2 Timothée fut écrit durant la deuxième emprisonnement de Paul à Rome — considéré comme son dernier avant son exécution. Paul écrit depuis la prison avec le sentiment d'une mort imminente, disant : 'Le moment de mon départ approche' (2 Timothée 4:6)." },
    didYouKnow: { en: "Second Timothy names Onesiphorus as someone who often refreshed Paul and was not ashamed of his chains.", fr: "2 Timothée nomme Onésiphore comme quelqu’un qui réconforta souvent Paul et n’eut pas honte de ses chaînes." }

  },
  {
    id: 'a43', levelNumber: 43, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Parables of the Kingdom — Hidden Treasure and Pearl", fr: "Paraboles du Royaume — Trésor caché et Perle" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a43-a', isTruth: true,  text: { en: "Jesus said the kingdom of heaven is like treasure hidden in a field — a man found it, hid it, then sold everything to buy the field.", fr: "Jésus dit que le royaume des cieux est comme un trésor caché dans un champ — un homme le trouva, le cacha, puis vendit tout pour acheter le champ." } },
      { id: 'a43-b', isTruth: true,  text: { en: "Jesus said the kingdom of heaven is like a merchant looking for fine pearls who found one of great value and sold everything to buy it.", fr: "Jésus dit que le royaume des cieux est comme un négociant qui cherchait de belles perles et en trouva une d'une grande valeur qu'il acheta après avoir tout vendu." } },
      { id: 'a43-c', isTruth: true,  text: { en: "Both the hidden treasure and pearl parables appear in Matthew 13 alongside the parables of the Sower, Mustard Seed, and Yeast.", fr: "Les deux paraboles du trésor caché et de la perle apparaissent dans Matthieu 13 aux côtés des paraboles du Semeur, de la Graine de sénevé et du Levain." } },
      { id: 'a43-d', isTruth: false, text: { en: "In the parable of the pearl, the merchant finds multiple pearls and chooses the best one to keep.", fr: "Dans la parabole de la perle, le négociant trouve plusieurs perles et choisit la meilleure à garder." } },
    ],
    explanation: { en: "In the parable, the merchant found one pearl of great value and sold everything to buy that one pearl — not multiple pearls with one chosen as best. The singularity and supreme value of the one pearl is the point (Matthew 13:45-46).", fr: "Dans la parabole, le négociant trouva une seule perle de grande valeur et vendit tout pour acheter cette seule perle — pas plusieurs perles parmi lesquelles choisir la meilleure. La singularité et la valeur suprême de cette unique perle sont le point de la parabole (Matthieu 13:45-46)." },
    didYouKnow: { en: "Jesus gives the hidden treasure and the pearl parables back-to-back, and both emphasize the surpassing value of the kingdom.", fr: "Jésus raconte successivement les paraboles du trésor caché et de la perle, toutes deux soulignant la valeur incomparable du royaume." }

  },
  {
    id: 'a44', levelNumber: 44, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Mosaic Law — Major Divisions", fr: "La Loi Mosaïque — Divisions Principales" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a44-a', isTruth: true,  text: { en: "Theologians traditionally divide the Mosaic Law into moral, ceremonial, and civil (judicial) categories.", fr: "Les théologiens divisent traditionnellement la Loi mosaïque en catégories morale, cérémonielle et civile (judiciaire)." } },
      { id: 'a44-b', isTruth: true,  text: { en: "The moral law (Ten Commandments) is seen by most Reformed theologians as continuing to bind Christians as a guide to righteous living.", fr: "La loi morale (Dix Commandements) est considérée par la plupart des théologiens réformés comme continuant à lier les chrétiens comme guide de vie juste." } },
      { id: 'a44-c', isTruth: true,  text: { en: "The ceremonial law (sacrifices, feasts, purity laws) is understood in Christian theology as fulfilled and abrogated in Christ.", fr: "La loi cérémonielle (sacrifices, fêtes, lois de pureté) est comprise dans la théologie chrétienne comme accomplie et abrogée en Christ." } },
      { id: 'a44-d', isTruth: false, text: { en: "The division of the Mosaic Law into moral, ceremonial, and civil categories is explicitly stated in the Old Testament text itself.", fr: "La division de la Loi mosaïque en catégories morale, cérémonielle et civile est explicitement énoncée dans le texte de l'Ancien Testament lui-même." } },
    ],
    explanation: { en: "This threefold division of the law is a theological and interpretive framework developed by later theologians (particularly in Reformed theology). The Old Testament itself does not divide the law into these three categories — they are imposed by interpreters to help understand how the law applies to Christians (a useful but man-made framework).", fr: "Cette division tripartite de la loi est un cadre théologique et interprétatif développé par des théologiens ultérieurs (particulièrement dans la théologie réformée). L'Ancien Testament lui-même ne divise pas la loi en ces trois catégories — elles sont imposées par les interprètes pour aider à comprendre comment la loi s'applique aux chrétiens." },
    didYouKnow: { en: "The traditional categories 'moral, civil, and ceremonial' are theological classifications; the Torah itself does not label its laws using those three headings.", fr: "Les catégories traditionnelles « morale, civile et cérémonielle » sont des classifications théologiques ; la Torah elle-même ne classe pas ses lois sous ces trois titres." }

  },
  {
    id: 'a45', levelNumber: 45, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Book of Job — God Speaks from the Whirlwind", fr: "Le Livre de Job — Dieu Parle du Tourbillon" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a45-a', isTruth: true,  text: { en: "God's speech to Job includes the question 'Where were you when I laid the earth's foundation?'", fr: "Le discours de Dieu à Job comprend la question : 'Où étais-tu quand j'ai posé les fondements de la terre ?'" } },
      { id: 'a45-b', isTruth: true,  text: { en: "God rebuked Eliphaz and his two friends, saying they had not spoken what was right about God as Job had.", fr: "Dieu réprimanda Éliphaz et ses deux amis, disant qu'ils n'avaient pas dit de lui ce qui est juste, comme Job l'avait fait." } },
      { id: 'a45-c', isTruth: true,  text: { en: "A young man named Elihu spoke before God appeared, offering a different perspective than Job's three older friends.", fr: "Un jeune homme nommé Élihu parla avant que Dieu n'apparaisse, offrant une perspective différente de celle des trois amis plus âgés de Job." } },
      { id: 'a45-d', isTruth: false, text: { en: "After God spoke, Job admitted he had sinned by being proud, which was the real cause of his suffering all along.", fr: "Après que Dieu eut parlé, Job admit qu'il avait péché par orgueil, ce qui était la vraie cause de ses souffrances depuis le début." } },
    ],
    explanation: { en: "God never says Job's suffering was caused by pride or sin. Job repented of his limited understanding — not of specific sins. The book's point is that suffering is not always punishment for sin. God rebuked the friends for claiming it was (Job 42:7-8).", fr: "Dieu ne dit jamais que les souffrances de Job étaient causées par l'orgueil ou le péché. Job se repentit de sa compréhension limitée — pas de péchés spécifiques. Le point du livre est que la souffrance n'est pas toujours une punition pour le péché. Dieu réprimanda les amis pour l'avoir affirmé (Job 42:7-8)." },
    didYouKnow: { en: "God's speeches to Job mention Behemoth and Leviathan after a long series of questions about creation and providence.", fr: "Les discours de Dieu à Job mentionnent Béhémoth et Léviathan après une longue série de questions sur la création et la providence." }

  },
  {
    id: 'a46', levelNumber: 46, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Paul's Letter to the Ephesians — The Church", fr: "La Lettre de Paul aux Éphésiens — L'Église" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a46-a', isTruth: true,  text: { en: "Ephesians 2 describes believers as 'God's handiwork (masterpiece), created in Christ Jesus to do good works.'", fr: "Éphésiens 2 décrit les croyants comme 'l'ouvrage de Dieu (chef-d'œuvre), créés en Jésus-Christ pour des œuvres bonnes.'" } },
      { id: 'a46-b', isTruth: true,  text: { en: "Ephesians 4 lists five ministry gifts: apostles, prophets, evangelists, pastors, and teachers.", fr: "Éphésiens 4 énumère cinq dons ministériels : apôtres, prophètes, évangélistes, pasteurs et docteurs." } },
      { id: 'a46-c', isTruth: true,  text: { en: "Ephesians 5 instructs husbands to love their wives as Christ loved the church and gave himself up for her.", fr: "Éphésiens 5 exhorte les maris à aimer leurs femmes comme Christ a aimé l'Église et s'est livré lui-même pour elle." } },
      { id: 'a46-d', isTruth: false, text: { en: "Paul's letter to the Ephesians was specifically addressed to problems of immorality in the church at Ephesus.", fr: "La lettre de Paul aux Éphésiens était spécifiquement adressée aux problèmes d'immoralité dans l'Église d'Éphèse." } },
    ],
    explanation: { en: "Ephesians is notably generic compared to other Pauline letters — it lacks personal greetings, specific problems, or named individuals (except Tychicus). It reads as a circular letter about the nature and calling of the church in general, not a corrective letter addressing specific Ephesian sins (Ephesians 1:1).", fr: "Éphésiens est remarquablement générale par rapport aux autres lettres pauliniennes — elle manque de salutations personnelles, de problèmes spécifiques ou de personnes nommées (sauf Tychique). Elle ressemble à une lettre circulaire sur la nature et la vocation de l'Église en général, pas à une lettre corrective adressant des péchés éphésiens spécifiques (Éphésiens 1:1)." },
    didYouKnow: { en: "Ephesians calls the church Christ's body and also compares its unity to a building growing into a holy temple.", fr: "Éphésiens appelle l’Église le corps du Christ et compare aussi son unité à un édifice qui s’élève pour former un temple saint." }

  },
  {
    id: 'a47', levelNumber: 47, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Abrahamic Covenant — Land Promise", fr: "L'Alliance Abrahamique — La Promesse du Pays" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a47-a', isTruth: true,  text: { en: "God promised Abraham's descendants land 'from the Wadi of Egypt to the great river, the Euphrates.'", fr: "Dieu promit aux descendants d'Abraham la terre 'depuis le torrent d'Égypte jusqu'au grand fleuve, l'Euphrate.'" } },
      { id: 'a47-b', isTruth: true,  text: { en: "God also promised Abraham that all peoples on earth would be blessed through him.", fr: "Dieu promit aussi à Abraham que toutes les familles de la terre seraient bénies en lui." } },
      { id: 'a47-c', isTruth: true,  text: { en: "The book of Galatians applies the 'seed of Abraham' promise to Jesus Christ and those who belong to Christ.", fr: "Le livre des Galates applique la promesse de la 'descendance d'Abraham' à Jésus-Christ et à ceux qui lui appartiennent." } },
      { id: 'a47-d', isTruth: false, text: { en: "The land promise to Abraham was fully and completely fulfilled during the reign of David.", fr: "La promesse du pays à Abraham fut pleinement et complètement accomplie sous le règne de David." } },
    ],
    explanation: { en: "Solomon's reign is often cited as the closest to fulfillment of the geographic promise — Israel controlled from the Euphrates to Egypt (1 Kings 4:21). David's reign was slightly smaller. But debate continues about ultimate fulfillment, especially regarding eschatological promises. Neither reign is described as complete and final fulfillment (1 Kings 4:21).", fr: "Le règne de Salomon est souvent cité comme le plus proche de l'accomplissement de la promesse géographique — Israël contrôlait de l'Euphrate jusqu'à l'Égypte (1 Rois 4:21). Le règne de David était légèrement plus petit. Mais le débat sur l'accomplissement ultime, notamment concernant les promesses eschatologiques, se poursuit (1 Rois 4:21)." },
    didYouKnow: { en: "Abraham purchased the field and cave of Machpelah as a burial property even though the broader land had been promised to his descendants.", fr: "Abraham acheta le champ et la caverne de Macpéla comme propriété funéraire, bien que le pays dans son ensemble eût été promis à sa descendance." }

  },
  {
    id: 'a48', levelNumber: 48, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Sanhedrin and Jewish Trial of Jesus", fr: "Le Sanhédrin et le Procès Juif de Jésus" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a48-a', isTruth: true,  text: { en: "The Sanhedrin was the supreme Jewish council in Jerusalem, composed of 71 members including chief priests, elders, and teachers of the law.", fr: "Le Sanhédrin était le suprême conseil juif de Jérusalem, composé de 71 membres dont des grands sacrificateurs, des anciens et des scribes." } },
      { id: 'a48-b', isTruth: true,  text: { en: "The high priest Caiaphas presided over the Sanhedrin that condemned Jesus.", fr: "Le grand sacrificateur Caïphe présida le Sanhédrin qui condamna Jésus." } },
      { id: 'a48-c', isTruth: true,  text: { en: "Nicodemus and Joseph of Arimathea were both members of the Sanhedrin who did not consent to the decision to condemn Jesus.", fr: "Nicodème et Joseph d'Arimathée étaient tous deux membres du Sanhédrin qui n'approuvèrent pas la décision de condamner Jésus." } },
      { id: 'a48-d', isTruth: false, text: { en: "Under Roman rule, the Sanhedrin had full authority to carry out the death penalty for religious crimes.", fr: "Sous la domination romaine, le Sanhédrin avait pleine autorité pour appliquer la peine de mort pour les crimes religieux." } },
    ],
    explanation: { en: "Under Roman rule, the Sanhedrin could not execute anyone without Roman approval (ius gladii — the right of the sword). This is why the Jewish leaders had to bring Jesus to Pilate. John 18:31 records the Jews saying 'We have no right to execute anyone' (John 18:31).", fr: "Sous la domination romaine, le Sanhédrin ne pouvait pas exécuter quelqu'un sans l'approbation romaine (ius gladii — le droit du glaive). C'est pourquoi les chefs juifs durent amener Jésus à Pilate. Jean 18:31 rapporte les Juifs disant : 'Il ne nous est pas permis de mettre quelqu'un à mort' (Jean 18:31)." },
    didYouKnow: { en: "The Gospel accounts distinguish the Jewish proceedings against Jesus from the later Roman proceedings before Pilate.", fr: "Les récits évangéliques distinguent les procédures juives contre Jésus des procédures romaines ultérieures devant Pilate." }

  },
  {
    id: 'a49', levelNumber: 49, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Women Prophets in the Bible", fr: "Les Femmes Prophètes dans la Bible" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a49-a', isTruth: true,  text: { en: "Miriam, the sister of Moses, is called a prophetess in the Old Testament.", fr: "Myriam, la sœur de Moïse, est appelée prophétesse dans l'Ancien Testament." } },
      { id: 'a49-b', isTruth: true,  text: { en: "Huldah the prophetess authenticated the Book of the Law found in Josiah's temple renovation.", fr: "La prophétesse Hulda authentifia le Livre de la Loi trouvé lors de la rénovation du temple sous Josias." } },
      { id: 'a49-c', isTruth: true,  text: { en: "Philip the evangelist had four unmarried daughters who were prophetesses, mentioned in Acts 21.", fr: "Philippe l'évangéliste avait quatre filles non mariées qui étaient prophétesses, mentionnées dans Actes 21." } },
      { id: 'a49-d', isTruth: false, text: { en: "Anna, the prophetess who saw the baby Jesus in the temple, was 84 years old at the time.", fr: "Anna, la prophétesse qui vit le bébé Jésus au temple, avait 84 ans à ce moment-là." } },
    ],
    explanation: { en: "Luke 2:36-37 says Anna had lived with her husband seven years after her marriage, then was a widow 'until she was eighty-four.' Some translations interpret this as she was a widow for 84 years (making her over 100), not that she was 84 years old. The Greek is ambiguous, and the exact age is debated (Luke 2:36-37).", fr: "Luc 2:36-37 dit qu'Anna avait vécu avec son mari sept ans après son mariage, puis était veuve 'jusqu'à l'âge de quatre-vingt-quatre ans'. Certaines traductions interprètent cela comme elle était veuve depuis 84 ans (la faisant dépasser 100 ans), pas qu'elle avait 84 ans. Le grec est ambigu (Luc 2:36-37)." },
    didYouKnow: { en: "Acts identifies Philip the evangelist as having four unmarried daughters who prophesied.", fr: "Les Actes indiquent que Philippe l’évangéliste avait quatre filles non mariées qui prophétisaient." }

  },
  {
    id: 'a50', levelNumber: 50, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Daniel 4 — Nebuchadnezzar's Madness", fr: "Daniel 4 — La Folie de Nébucadnetsar" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a50-a', isTruth: true,  text: { en: "Nebuchadnezzar dreamed of a great tree that was cut down, leaving only a stump bound with iron and bronze.", fr: "Nébucadnetsar rêva d'un grand arbre qui fut abattu, ne laissant qu'une souche liée de fer et de bronze." } },
      { id: 'a50-b', isTruth: true,  text: { en: "Daniel interpreted the dream to mean Nebuchadnezzar would lose his sanity and live like an animal until he acknowledged God's sovereignty.", fr: "Daniel interpréta le rêve comme signifiant que Nébucadnetsar perdrait sa raison et vivrait comme un animal jusqu'à ce qu'il reconnaisse la souveraineté de Dieu." } },
      { id: 'a50-c', isTruth: true,  text: { en: "Nebuchadnezzar was driven away from people and ate grass like an ox, with his hair growing like eagles' feathers.", fr: "Nébucadnetsar fut chassé d'auprès des hommes et mangea de l'herbe comme les bœufs, ses cheveux poussant comme des plumes d'aigle." } },
      { id: 'a50-d', isTruth: false, text: { en: "Nebuchadnezzar's madness lasted exactly one year before his sanity returned.", fr: "La folie de Nébucadnetsar dura exactement un an avant que sa raison ne lui revienne." } },
    ],
    explanation: { en: "Daniel 4 says Nebuchadnezzar's punishment lasted 'seven times' — traditionally interpreted as seven years — not exactly one year. The precise duration is described as 'seven periods' in the text (Daniel 4:32-33).", fr: "Daniel 4 dit que la punition de Nébucadnetsar dura 'sept temps' — traditionnellement interprété comme sept ans — pas exactement un an. La durée précise est décrite comme 'sept périodes' dans le texte (Daniel 4:32-33)." },
    didYouKnow: { en: "Daniel 4 is framed as a proclamation from Nebuchadnezzar himself, recounting his humiliation and restoration.", fr: "Daniel 4 est présenté comme une proclamation de Nébucadnetsar lui-même, racontant son humiliation et son rétablissement." }

  },
  {
    id: 'a51', levelNumber: 51, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Spiritual Gifts in 1 Corinthians 12", fr: "Les Dons Spirituels dans 1 Corinthiens 12" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a51-a', isTruth: true,  text: { en: "Paul lists wisdom, knowledge, faith, healing, miraculous powers, prophecy, distinguishing spirits, tongues, and interpretation of tongues.", fr: "Paul énumère la sagesse, la connaissance, la foi, les guérisons, les miracles, la prophétie, le discernement des esprits, les langues et l'interprétation des langues." } },
      { id: 'a51-b', isTruth: true,  text: { en: "Paul says all these gifts are worked by one and the same Spirit, who distributes them just as He determines.", fr: "Paul dit que tous ces dons sont l'œuvre d'un seul et même Esprit, qui les distribue à chacun en particulier comme il le veut." } },
      { id: 'a51-c', isTruth: true,  text: { en: "Paul uses the metaphor of the human body — with many parts but one body — to explain the diversity and unity of spiritual gifts.", fr: "Paul utilise la métaphore du corps humain — avec de nombreux membres mais un seul corps — pour expliquer la diversité et l'unité des dons spirituels." } },
      { id: 'a51-d', isTruth: false, text: { en: "Paul teaches that speaking in tongues is the highest spiritual gift and all believers should seek it above all others.", fr: "Paul enseigne que le parler en langues est le don spirituel le plus élevé et que tous les croyants devraient le rechercher avant tout autre." } },
    ],
    explanation: { en: "Paul says 'Are all apostles? Are all prophets? Are all workers of miracles? Do all speak in tongues?' (rhetorically expecting 'no') and then says 'eagerly desire the greater gifts' — placing tongues near the end of his lists. He later calls prophecy greater than tongues (1 Corinthians 12:29-30; 14:5).", fr: "Paul dit : 'Tous sont-ils apôtres ? tous prophètes ? tous docteurs ? tous opèrent-ils des miracles ? Tous parlent-ils en langues ?' (attendant rhétoriquement 'non') et dit ensuite de 'rechercher ardemment les dons les plus excellents' — plaçant les langues vers la fin de ses listes (1 Corinthiens 12:29-30 ; 14:5)." },
    didYouKnow: { en: "Paul follows his discussion of diverse gifts in 1 Corinthians 12 with the 'more excellent way' of love in chapter 13.", fr: "Paul fait suivre son enseignement sur la diversité des dons dans 1 Corinthiens 12 par la « voie par excellence » de l’amour au chapitre 13." }

  },
  {
    id: 'a52', levelNumber: 52, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Isaiah 7:14 — The Virgin Birth Prophecy", fr: "Ésaïe 7:14 — La Prophétie de la Naissance Virginale" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a52-a', isTruth: true,  text: { en: "Isaiah 7:14 says 'the virgin will conceive and give birth to a son, and will call him Immanuel.'", fr: "Ésaïe 7:14 dit : 'la vierge (ou jeune femme) sera enceinte et enfantera un fils, et elle lui donnera le nom d'Emmanuel.'" } },
      { id: 'a52-b', isTruth: true,  text: { en: "Matthew 1:22-23 quotes Isaiah 7:14 as fulfilled in the virgin birth of Jesus.", fr: "Matthieu 1:22-23 cite Ésaïe 7:14 comme accompli dans la naissance virginale de Jésus." } },
      { id: 'a52-c', isTruth: true,  text: { en: "The Hebrew word in Isaiah 7:14 is 'almah,' which typically means 'young woman' or 'maiden,' not the specific word 'betulah' meaning virgin.", fr: "Le mot hébreu dans Ésaïe 7:14 est 'almah', qui signifie généralement 'jeune femme' ou 'jeune fille', pas le mot spécifique 'betulah' signifiant vierge." } },
      { id: 'a52-d', isTruth: false, text: { en: "The name 'Immanuel' means 'God protects us' in Hebrew.", fr: "Le nom 'Emmanuel' signifie 'Dieu nous protège' en hébreu." } },
    ],
    explanation: { en: "'Immanuel' (or Emmanuel) means 'God with us' — not 'God protects us.' Matthew 1:23 explicitly translates it as 'God with us.' This is a core affirmation of the incarnation — that God has come to dwell with humanity (Matthew 1:23; Isaiah 7:14).", fr: "'Emmanuel' signifie 'Dieu avec nous' — pas 'Dieu nous protège'. Matthieu 1:23 le traduit explicitement par 'Dieu avec nous'. C'est une affirmation fondamentale de l'incarnation — que Dieu est venu habiter avec l'humanité (Matthieu 1:23 ; Ésaïe 7:14)." },
    didYouKnow: { en: "Matthew 1:23 explicitly quotes Isaiah 7:14 and gives the meaning of Immanuel as 'God with us.'", fr: "Matthieu 1:23 cite explicitement Ésaïe 7:14 et donne le sens d’Emmanuel : « Dieu avec nous »." }

  },
  {
    id: 'a53', levelNumber: 53, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Book of Revelation — Opening Vision", fr: "Le Livre de l'Apocalypse — La Vision d'Ouverture" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a53-a', isTruth: true,  text: { en: "John received the Revelation while exiled on the island of Patmos because of the word of God and his testimony about Jesus.", fr: "Jean reçut l'Apocalypse alors qu'il était exilé sur l'île de Patmos à cause de la parole de Dieu et du témoignage de Jésus." } },
      { id: 'a53-b', isTruth: true,  text: { en: "The vision begins with John seeing seven golden lampstands and one 'like a son of man' with a two-edged sword coming from His mouth.", fr: "La vision commence par Jean voyant sept chandeliers d'or et un 'semblable à un fils de l'homme' avec une épée à deux tranchants sortant de sa bouche." } },
      { id: 'a53-c', isTruth: true,  text: { en: "Jesus identifies Himself in Revelation 1 as 'the Alpha and the Omega, who is and who was and who is to come, the Almighty.'", fr: "Jésus se désigne dans Apocalypse 1 comme 'l'Alpha et l'Oméga, celui qui est, qui était et qui vient, le Tout-Puissant.'" } },
      { id: 'a53-d', isTruth: false, text: { en: "John was alone on Patmos as a missionary, having chosen to retreat there for a period of prayer and fasting.", fr: "Jean était seul à Patmos en tant que missionnaire, ayant choisi de s'y retirer pour une période de prière et de jeûne." } },
    ],
    explanation: { en: "John was exiled to Patmos as a punishment — not as a voluntary retreat for prayer and fasting. He was there 'because of the word of God and the testimony of Jesus' — meaning Roman persecution sent him there (Revelation 1:9).", fr: "Jean était exilé à Patmos comme punition — pas comme retraite volontaire pour prier et jeûner. Il s'y trouvait 'à cause de la parole de Dieu et du témoignage de Jésus' — c'est-à-dire que la persécution romaine l'y envoya (Apocalypse 1:9)." },
    didYouKnow: { en: "In Revelation 1, John says he was on the island of Patmos because of the word of God and the testimony of Jesus.", fr: "Dans Apocalypse 1, Jean dit qu’il se trouvait sur l’île de Patmos à cause de la parole de Dieu et du témoignage de Jésus." }

  },

  // ─── ADVANCED EXPANSION a54–a166 ─────────────────────────────────────────────
  {
    id: 'a54', levelNumber: 54, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Cities of Refuge", fr: "Les villes de refuge" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a54-a', isTruth: false, text: { en: "A person convicted of intentional murder could remain permanently protected simply by reaching a city of refuge.", fr: "Une personne reconnue coupable de meurtre volontaire pouvait rester protégée définitivement simplement en atteignant une ville de refuge." } },
      { id: 'a54-b', isTruth: true, text: { en: "The cities of refuge were intended to protect someone who killed another person unintentionally from immediate vengeance.", fr: "Les villes de refuge devaient protéger celui qui avait tué quelqu’un involontairement contre une vengeance immédiate." } },
      { id: 'a54-c', isTruth: true, text: { en: "The accused manslayer was to stand before the congregation for judgment.", fr: "L’homicide accusé devait comparaître devant l’assemblée pour être jugé." } },
      { id: 'a54-d', isTruth: true, text: { en: "The unintentional manslayer was to remain in the city of refuge until the death of the high priest.", fr: "L’homicide involontaire devait demeurer dans la ville de refuge jusqu’à la mort du souverain sacrificateur." } },
    ],
    explanation: { en: "Numbers 35 distinguishes accidental killing from murder. A murderer was not protected merely by entering a city of refuge; intentional murder remained subject to judgment.", fr: "Nombres 35 distingue l’homicide involontaire du meurtre. Un meurtrier n’était pas protégé simplement parce qu’il entrait dans une ville de refuge ; le meurtre volontaire restait soumis au jugement." },
    scripture: { en: "Numbers 35:9–34", fr: "Numbers 35:9–34" },
    didYouKnow: { en: "Reading Numbers 6:1–21 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Numbers 6:1–21 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a55', levelNumber: 55, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Balaam and Balak", fr: "Balaam et Balak" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a55-a', isTruth: true, text: { en: "Balak king of Moab sent messengers to summon Balaam to curse Israel.", fr: "Balak, roi de Moab, envoya des messagers chercher Balaam afin qu’il maudisse Israël." } },
      { id: 'a55-b', isTruth: false, text: { en: "Balaam immediately cursed Israel three times exactly as Balak requested.", fr: "Balaam maudit immédiatement Israël trois fois exactement comme Balak le lui avait demandé." } },
      { id: 'a55-c', isTruth: true, text: { en: "Balaam’s donkey spoke after the LORD opened its mouth.", fr: "L’ânesse de Balaam parla après que l’Éternel lui eut ouvert la bouche." } },
      { id: 'a55-d', isTruth: true, text: { en: "Instead of cursing Israel, Balaam repeatedly pronounced blessings.", fr: "Au lieu de maudire Israël, Balaam prononça à plusieurs reprises des bénédictions." } },
    ],
    explanation: { en: "Although Balak hired Balaam to curse Israel, Numbers 23–24 records Balaam blessing Israel rather than delivering the curse Balak wanted.", fr: "Bien que Balak ait fait venir Balaam pour maudire Israël, Nombres 23–24 rapporte que Balaam bénit Israël au lieu de prononcer la malédiction souhaitée par Balak." },
    scripture: { en: "Numbers 22–24", fr: "Numbers 22–24" },
    didYouKnow: { en: "Reading Numbers 35:9–34 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Numbers 35:9–34 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a56', levelNumber: 56, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Bronze Serpent", fr: "Le serpent d’airain" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a56-a', isTruth: true, text: { en: "Israel complained against God and Moses during the wilderness journey.", fr: "Israël murmura contre Dieu et Moïse pendant le voyage dans le désert." } },
      { id: 'a56-b', isTruth: true, text: { en: "The LORD sent fiery serpents among the people, and many Israelites were bitten.", fr: "L’Éternel envoya des serpents brûlants parmi le peuple, et beaucoup d’Israélites furent mordus." } },
      { id: 'a56-c', isTruth: false, text: { en: "Anyone who was bitten had to touch the bronze serpent in order to live.", fr: "Toute personne mordue devait toucher le serpent d’airain pour vivre." } },
      { id: 'a56-d', isTruth: true, text: { en: "Moses made a bronze serpent and placed it on a pole.", fr: "Moïse fabriqua un serpent d’airain et le plaça sur une perche." } },
    ],
    explanation: { en: "The text says the bitten person lived by looking at the bronze serpent, not by touching it.", fr: "Le texte dit que la personne mordue vivait en regardant le serpent d’airain, et non en le touchant." },
    scripture: { en: "Numbers 21:4–9", fr: "Numbers 21:4–9" },
    didYouKnow: { en: "Reading Numbers 22–24 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Numbers 22–24 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a57', levelNumber: 57, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Daughters of Zelophehad", fr: "Les filles de Tselophchad" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a57-a', isTruth: true, text: { en: "Zelophehad’s five daughters brought their case before Moses, Eleazar, the leaders, and the congregation.", fr: "Les cinq filles de Tselophchad présentèrent leur cause devant Moïse, Éléazar, les chefs et l’assemblée." } },
      { id: 'a57-b', isTruth: true, text: { en: "They argued that their father’s name should not disappear from his clan merely because he had no son.", fr: "Elles affirmèrent que le nom de leur père ne devait pas disparaître de son clan simplement parce qu’il n’avait pas de fils." } },
      { id: 'a57-c', isTruth: true, text: { en: "The LORD told Moses that the daughters’ claim was right and established inheritance provisions for such cases.", fr: "L’Éternel dit à Moïse que la demande des filles était juste et établit des règles d’héritage pour de tels cas." } },
      { id: 'a57-d', isTruth: false, text: { en: "Zelophehad had five sons who disputed the inheritance with his daughters.", fr: "Tselophchad avait cinq fils qui disputèrent l’héritage à ses filles." } },
    ],
    explanation: { en: "Numbers 27 states that Zelophehad had no sons. His five daughters—Mahlah, Noah, Hoglah, Milcah, and Tirzah—brought the inheritance case.", fr: "Nombres 27 précise que Tselophchad n’avait pas de fils. Ses cinq filles — Machla, Noa, Hogla, Milca et Thirtsa — présentèrent la demande d’héritage." },
    scripture: { en: "Numbers 27:1–11", fr: "Numbers 27:1–11" },
    didYouKnow: { en: "Reading Numbers 21:4–9 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Numbers 21:4–9 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a58', levelNumber: 58, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Korah’s Rebellion", fr: "La révolte de Koré" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a58-a', isTruth: false, text: { en: "Korah and his followers were rewarded with permanent priestly authority after Moses accepted their complaint.", fr: "Koré et ses partisans reçurent une autorité sacerdotale permanente après que Moïse eut accepté leur plainte." } },
      { id: 'a58-b', isTruth: true, text: { en: "Korah joined with Dathan, Abiram, and other leaders in challenging Moses and Aaron.", fr: "Koré s’unit à Dathan, Abiram et d’autres chefs pour contester Moïse et Aaron." } },
      { id: 'a58-c', isTruth: true, text: { en: "Moses instructed Korah and his company to bring censers with incense before the LORD.", fr: "Moïse demanda à Koré et à son groupe d’apporter des brasiers avec de l’encens devant l’Éternel." } },
      { id: 'a58-d', isTruth: true, text: { en: "The earth opened and swallowed Dathan and Abiram with their households.", fr: "La terre s’ouvrit et engloutit Dathan et Abiram avec leurs maisons." } },
    ],
    explanation: { en: "The rebellion ended in judgment, not promotion. Numbers 16 records the earth swallowing some rebels and fire consuming the 250 men offering incense.", fr: "La révolte se termina par un jugement, non par une promotion. Nombres 16 rapporte que la terre engloutit certains rebelles et que le feu consuma les 250 hommes qui offraient l’encens." },
    scripture: { en: "Numbers 16", fr: "Numbers 16" },
    didYouKnow: { en: "Reading Numbers 27:1–11 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Numbers 27:1–11 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a59', levelNumber: 59, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Aaron’s Budding Staff", fr: "La verge d’Aaron qui bourgeonna" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a59-a', isTruth: true, text: { en: "A staff was collected for each ancestral tribe and placed before the LORD.", fr: "Une verge fut recueillie pour chaque tribu ancestrale et placée devant l’Éternel." } },
      { id: 'a59-b', isTruth: false, text: { en: "Every tribal staff budded in exactly the same way, showing that all tribes had equal priestly authority.", fr: "Toutes les verges des tribus bourgeonnèrent de la même manière, montrant que toutes les tribus avaient la même autorité sacerdotale." } },
      { id: 'a59-c', isTruth: true, text: { en: "Aaron’s name was written on the staff representing Levi.", fr: "Le nom d’Aaron fut écrit sur la verge représentant Lévi." } },
      { id: 'a59-d', isTruth: true, text: { en: "Aaron’s staff budded, blossomed, and produced ripe almonds.", fr: "La verge d’Aaron bourgeonna, fleurit et produisit des amandes mûres." } },
    ],
    explanation: { en: "Only Aaron’s staff is described as budding, flowering, and producing almonds. It served as a sign confirming God’s choice.", fr: "Seule la verge d’Aaron est décrite comme ayant bourgeonné, fleuri et produit des amandes. Elle servit de signe confirmant le choix de Dieu." },
    scripture: { en: "Numbers 17", fr: "Numbers 17" },
    didYouKnow: { en: "Reading Numbers 16 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Numbers 16 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a60', levelNumber: 60, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Shema", fr: "Le Shema" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a60-a', isTruth: true, text: { en: "The Shema begins, “Hear, O Israel,” and declares the LORD as Israel’s God.", fr: "Le Shema commence par « Écoute, Israël » et déclare que l’Éternel est le Dieu d’Israël." } },
      { id: 'a60-b', isTruth: true, text: { en: "Israel was commanded to teach these words diligently to their children.", fr: "Israël reçut l’ordre d’enseigner soigneusement ces paroles à ses enfants." } },
      { id: 'a60-c', isTruth: false, text: { en: "The passage commands Israel to love God only with the mind, not with the heart or strength.", fr: "Le passage ordonne à Israël d’aimer Dieu seulement avec l’intelligence, et non avec le cœur ou la force." } },
      { id: 'a60-d', isTruth: true, text: { en: "The words were to be discussed at home, on the road, when lying down, and when rising.", fr: "Ces paroles devaient être répétées à la maison, en chemin, au coucher et au lever." } },
    ],
    explanation: { en: "Deuteronomy 6:5 commands wholehearted love for God—with all the heart, soul, and strength—not merely intellectual devotion.", fr: "Deutéronome 6:5 commande d’aimer Dieu de tout son être — de tout son cœur, de toute son âme et de toute sa force — et non seulement avec l’intelligence." },
    scripture: { en: "Deuteronomy 6:4–9", fr: "Deuteronomy 6:4–9" },
    didYouKnow: { en: "Reading Numbers 17 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Numbers 17 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a61', levelNumber: 61, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Blessings and Curses", fr: "Les bénédictions et les malédictions" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a61-a', isTruth: true, text: { en: "Israel was instructed to pronounce blessings on Mount Gerizim and curses on Mount Ebal.", fr: "Israël reçut l’ordre de prononcer les bénédictions sur le mont Garizim et les malédictions sur le mont Ébal." } },
      { id: 'a61-b', isTruth: true, text: { en: "Deuteronomy 28 connects covenant blessings with obedience to the LORD.", fr: "Deutéronome 28 relie les bénédictions de l’alliance à l’obéissance à l’Éternel." } },
      { id: 'a61-c', isTruth: true, text: { en: "The curses include defeat, disease, drought, exile, and other covenant judgments.", fr: "Les malédictions comprennent la défaite, la maladie, la sécheresse, l’exil et d’autres jugements de l’alliance." } },
      { id: 'a61-d', isTruth: false, text: { en: "The covenant curses were shorter and less detailed than the section describing the blessings.", fr: "Les malédictions de l’alliance étaient plus courtes et moins détaillées que la section décrivant les bénédictions." } },
    ],
    explanation: { en: "In Deuteronomy 28, the section of curses is considerably longer and more detailed than the preceding blessings.", fr: "Dans Deutéronome 28, la section des malédictions est beaucoup plus longue et détaillée que celle des bénédictions qui la précède." },
    scripture: { en: "Deuteronomy 27–28", fr: "Deuteronomy 27–28" },
    didYouKnow: { en: "Reading Deuteronomy 6:4–9 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Deuteronomy 6:4–9 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a62', levelNumber: 62, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Moses’ Final Song", fr: "Le dernier cantique de Moïse" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a62-a', isTruth: false, text: { en: "The song concludes by saying that God will permanently reject His people and never show compassion again.", fr: "Le cantique conclut que Dieu rejettera définitivement son peuple et ne lui montrera plus jamais de compassion." } },
      { id: 'a62-b', isTruth: true, text: { en: "Moses’ song calls heaven and earth to hear his words.", fr: "Le cantique de Moïse appelle les cieux et la terre à écouter ses paroles." } },
      { id: 'a62-c', isTruth: true, text: { en: "The song describes God as the Rock whose work is perfect.", fr: "Le cantique décrit Dieu comme le Rocher dont l’œuvre est parfaite." } },
      { id: 'a62-d', isTruth: true, text: { en: "It recalls Israel’s unfaithfulness despite God’s care.", fr: "Il rappelle l’infidélité d’Israël malgré les soins de Dieu." } },
    ],
    explanation: { en: "Deuteronomy 32 does warn of severe judgment, but it also speaks of the LORD vindicating His people and having compassion on His servants.", fr: "Deutéronome 32 annonce un jugement sévère, mais parle aussi de l’Éternel qui fera justice à son peuple et aura compassion de ses serviteurs." },
    scripture: { en: "Deuteronomy 32", fr: "Deuteronomy 32" },
    didYouKnow: { en: "Reading Deuteronomy 27–28 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Deuteronomy 27–28 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a63', levelNumber: 63, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Caleb’s Inheritance", fr: "L’héritage de Caleb" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a63-a', isTruth: true, text: { en: "Caleb recalled that he had been forty years old when Moses sent him from Kadesh-barnea to spy out the land.", fr: "Caleb rappela qu’il avait quarante ans lorsque Moïse l’envoya de Kadès-Barnéa explorer le pays." } },
      { id: 'a63-b', isTruth: false, text: { en: "Caleb was forty years old when he asked Joshua to give him Hebron as his inheritance.", fr: "Caleb avait quarante ans lorsqu’il demanda à Josué de lui donner Hébron comme héritage." } },
      { id: 'a63-c', isTruth: true, text: { en: "Caleb said he was eighty-five years old when he made his request to Joshua.", fr: "Caleb déclara avoir quatre-vingt-cinq ans lorsqu’il fit sa demande à Josué." } },
      { id: 'a63-d', isTruth: true, text: { en: "Caleb asked for the hill country associated with the Anakim and fortified cities.", fr: "Caleb demanda la région montagneuse associée aux Anakim et aux villes fortifiées." } },
    ],
    explanation: { en: "Caleb was eighty-five when he requested the inheritance. He had been forty at the time of the spying mission forty-five years earlier.", fr: "Caleb avait quatre-vingt-cinq ans lorsqu’il demanda son héritage. Il avait quarante ans au moment de la mission d’exploration, quarante-cinq ans auparavant." },
    scripture: { en: "Joshua 14:6–15", fr: "Joshua 14:6–15" },
    didYouKnow: { en: "Reading Deuteronomy 32 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Deuteronomy 32 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a64', levelNumber: 64, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Gibeonite Deception", fr: "La ruse des Gabaonites" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a64-a', isTruth: true, text: { en: "The Gibeonites wore worn-out clothing and carried old provisions to appear as though they had traveled from far away.", fr: "Les Gabaonites portèrent des vêtements usés et prirent de vieilles provisions pour faire croire qu’ils venaient de très loin." } },
      { id: 'a64-b', isTruth: true, text: { en: "Israel’s leaders sampled their provisions but did not inquire of the LORD.", fr: "Les chefs d’Israël examinèrent leurs provisions mais ne consultèrent pas l’Éternel." } },
      { id: 'a64-c', isTruth: false, text: { en: "Joshua discovered the deception before making any covenant and immediately attacked Gibeon.", fr: "Josué découvrit la ruse avant de conclure toute alliance et attaqua immédiatement Gabaon." } },
      { id: 'a64-d', isTruth: true, text: { en: "After discovering the deception, Israel kept its oath but made the Gibeonites woodcutters and water carriers.", fr: "Après avoir découvert la ruse, Israël respecta son serment mais fit des Gabaonites des coupeurs de bois et des porteurs d’eau." } },
    ],
    explanation: { en: "Joshua 9 says Israel made a treaty and swore an oath before discovering the deception three days later.", fr: "Josué 9 dit qu’Israël conclut une alliance et prêta serment avant de découvrir la ruse trois jours plus tard." },
    scripture: { en: "Joshua 9", fr: "Joshua 9" },
    didYouKnow: { en: "Reading Joshua 14:6–15 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Joshua 14:6–15 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a65', levelNumber: 65, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Sun Stands Still", fr: "Le soleil s’arrête" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a65-a', isTruth: true, text: { en: "Joshua marched to help Gibeon after a coalition of Amorite kings attacked it.", fr: "Josué marcha au secours de Gabaon après l’attaque d’une coalition de rois amoréens." } },
      { id: 'a65-b', isTruth: true, text: { en: "The LORD threw large hailstones on Israel’s enemies during the battle.", fr: "L’Éternel fit tomber de grosses pierres de grêle sur les ennemis d’Israël pendant la bataille." } },
      { id: 'a65-c', isTruth: true, text: { en: "Joshua spoke concerning the sun over Gibeon and the moon over the Valley of Aijalon.", fr: "Josué parla au sujet du soleil sur Gabaon et de la lune sur la vallée d’Ajalon." } },
      { id: 'a65-d', isTruth: false, text: { en: "The text says the sun stood still for exactly seven full days.", fr: "Le texte dit que le soleil s’arrêta exactement pendant sept jours complets." } },
    ],
    explanation: { en: "Joshua 10 describes an extraordinary prolongation of the day, saying the sun did not hurry to set for about a whole day—not seven days.", fr: "Josué 10 décrit une prolongation extraordinaire du jour, disant que le soleil ne se hâta pas de se coucher pendant environ un jour entier — et non sept jours." },
    scripture: { en: "Joshua 10:1–15", fr: "Joshua 10:1–15" },
    didYouKnow: { en: "Reading Joshua 9 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Joshua 9 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a66', levelNumber: 66, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Deborah and Barak", fr: "Débora et Barak" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a66-a', isTruth: false, text: { en: "Barak agreed to go into battle only on the condition that Sisera personally accompany him.", fr: "Barak accepta d’aller au combat seulement à condition que Sisera l’accompagne personnellement." } },
      { id: 'a66-b', isTruth: true, text: { en: "Deborah is described as a prophetess who was judging Israel.", fr: "Débora est décrite comme une prophétesse qui jugeait Israël." } },
      { id: 'a66-c', isTruth: true, text: { en: "Deborah told Barak that the honor of the victory would go to a woman.", fr: "Débora dit à Barak que l’honneur de la victoire reviendrait à une femme." } },
      { id: 'a66-d', isTruth: true, text: { en: "Jael killed Sisera after he fled from the battle and entered her tent.", fr: "Jaël tua Sisera après qu’il eut fui la bataille et soit entré dans sa tente." } },
    ],
    explanation: { en: "Barak’s condition was that Deborah go with him, not Sisera. Deborah agreed but said the honor concerning Sisera would go to a woman.", fr: "La condition de Barak était que Débora l’accompagne, et non Sisera. Débora accepta mais annonça que l’honneur concernant Sisera reviendrait à une femme." },
    scripture: { en: "Judges 4–5", fr: "Judges 4–5" },
    didYouKnow: { en: "Reading Joshua 10:1–15 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Joshua 10:1–15 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a67', levelNumber: 67, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Jephthah and the Ammonites", fr: "Jephté et les Ammonites" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a67-a', isTruth: true, text: { en: "Jephthah had been driven away by his brothers before the elders of Gilead later asked him to lead them against Ammon.", fr: "Jephté avait été chassé par ses frères avant que les anciens de Galaad ne lui demandent plus tard de les conduire contre Ammon." } },
      { id: 'a67-b', isTruth: false, text: { en: "The king of Ammon accepted Jephthah’s explanation and withdrew without a battle.", fr: "Le roi des Ammonites accepta l’explication de Jephté et se retira sans bataille." } },
      { id: 'a67-c', isTruth: true, text: { en: "Before fighting, Jephthah sent messengers arguing Israel’s historical claim to the disputed land.", fr: "Avant de combattre, Jephté envoya des messagers défendant la revendication historique d’Israël sur le territoire contesté." } },
      { id: 'a67-d', isTruth: true, text: { en: "The Spirit of the LORD came upon Jephthah before he advanced against the Ammonites.", fr: "L’Esprit de l’Éternel vint sur Jephté avant qu’il ne marche contre les Ammonites." } },
    ],
    explanation: { en: "Judges 11 says the king of Ammon did not listen to Jephthah’s message. Jephthah then fought, and the LORD gave the Ammonites into his hand.", fr: "Juges 11 dit que le roi des Ammonites n’écouta pas le message de Jephté. Jephté combattit alors, et l’Éternel livra les Ammonites entre ses mains." },
    scripture: { en: "Judges 11", fr: "Judges 11" },
    didYouKnow: { en: "Reading Judges 4–5 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Judges 4–5 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a68', levelNumber: 68, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Micah’s Idol and the Danites", fr: "L’idole de Michée et les Danites" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a68-a', isTruth: true, text: { en: "Micah made a shrine and installed one of his sons as priest before later hiring a Levite.", fr: "Michée établit un sanctuaire et consacra d’abord l’un de ses fils comme prêtre avant d’engager plus tard un Lévite." } },
      { id: 'a68-b', isTruth: true, text: { en: "Danite spies recognized the voice of the young Levite when they visited Micah’s house.", fr: "Les espions danites reconnurent la voix du jeune Lévite lorsqu’ils visitèrent la maison de Michée." } },
      { id: 'a68-c', isTruth: false, text: { en: "Micah’s household shrine was located in Jerusalem beside Solomon’s temple.", fr: "Le sanctuaire familial de Michée se trouvait à Jérusalem près du temple de Salomon." } },
      { id: 'a68-d', isTruth: true, text: { en: "The Danites eventually took Micah’s carved image, other sacred objects, and the priest with them.", fr: "Les Danites emportèrent finalement l’image taillée de Michée, d’autres objets sacrés et le prêtre avec eux." } },
    ],
    explanation: { en: "Judges 17–18 places Micah’s shrine in the hill country of Ephraim, long before Solomon’s temple was built.", fr: "Juges 17–18 situe le sanctuaire de Michée dans la région montagneuse d’Éphraïm, bien avant la construction du temple de Salomon." },
    scripture: { en: "Judges 17–18", fr: "Judges 17–18" },
    didYouKnow: { en: "Reading Judges 11 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Judges 11 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a69', levelNumber: 69, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Hannah’s Prayer and Samuel", fr: "La prière d’Anne et Samuel" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a69-a', isTruth: true, text: { en: "Hannah prayed silently at the sanctuary while Eli initially thought she was drunk.", fr: "Anne pria silencieusement au sanctuaire tandis qu’Éli pensa d’abord qu’elle était ivre." } },
      { id: 'a69-b', isTruth: true, text: { en: "Hannah vowed that if given a son, she would give him to the LORD for his lifetime.", fr: "Anne fit le vœu que, si elle recevait un fils, elle le donnerait à l’Éternel pour toute sa vie." } },
      { id: 'a69-c', isTruth: true, text: { en: "After Samuel was weaned, Hannah brought him to serve before the LORD under Eli.", fr: "Après le sevrage de Samuel, Anne l’amena pour servir devant l’Éternel sous la direction d’Éli." } },
      { id: 'a69-d', isTruth: false, text: { en: "Hannah’s song in 1 Samuel 2 praises Saul as Israel’s first king by name.", fr: "Le cantique d’Anne dans 1 Samuel 2 loue Saül, premier roi d’Israël, en le nommant." } },
    ],
    explanation: { en: "Hannah’s song contains themes of God’s sovereignty and speaks of His king and anointed, but it does not name Saul.", fr: "Le cantique d’Anne contient des thèmes sur la souveraineté de Dieu et parle de son roi et de son oint, mais il ne nomme pas Saül." },
    scripture: { en: "1 Samuel 1–2", fr: "1 Samuel 1–2" },
    didYouKnow: { en: "Reading Judges 17–18 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Judges 17–18 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a70', levelNumber: 70, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Ark among the Philistines", fr: "L’arche chez les Philistins" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a70-a', isTruth: false, text: { en: "When the ark was placed in Dagon’s temple, the statue of Dagon remained standing untouched for seven days.", fr: "Lorsque l’arche fut placée dans le temple de Dagon, la statue de Dagon resta debout et intacte pendant sept jours." } },
      { id: 'a70-b', isTruth: true, text: { en: "The Philistines captured the ark of God after defeating Israel.", fr: "Les Philistins capturèrent l’arche de Dieu après avoir vaincu Israël." } },
      { id: 'a70-c', isTruth: true, text: { en: "Dagon was found fallen before the ark, and later his head and hands were found cut off.", fr: "Dagon fut trouvé tombé devant l’arche, puis sa tête et ses mains furent retrouvées coupées." } },
      { id: 'a70-d', isTruth: true, text: { en: "The Philistines returned the ark on a new cart drawn by cows that had not been yoked.", fr: "Les Philistins rendirent l’arche sur un char neuf tiré par des vaches qui n’avaient pas porté le joug." } },
    ],
    explanation: { en: "Dagon did not remain untouched. He first fell face down before the ark; after being set up again, his head and hands were found cut off.", fr: "Dagon ne resta pas intact. Il tomba d’abord face contre terre devant l’arche ; après avoir été relevé, sa tête et ses mains furent retrouvées coupées." },
    scripture: { en: "1 Samuel 4–6", fr: "1 Samuel 4–6" },
    didYouKnow: { en: "Reading 1 Samuel 1–2 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de 1 Samuel 1–2 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a71', levelNumber: 71, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Saul and the Medium of Endor", fr: "Saül et la médium d’En-Dor" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a71-a', isTruth: true, text: { en: "Saul had previously removed mediums and spiritists from the land.", fr: "Saül avait auparavant fait disparaître du pays les médiums et les spirites." } },
      { id: 'a71-b', isTruth: false, text: { en: "The medium immediately recognized Saul before he spoke and publicly welcomed him as king.", fr: "La médium reconnut immédiatement Saül avant qu’il ne parle et l’accueillit publiquement comme roi." } },
      { id: 'a71-c', isTruth: true, text: { en: "When Saul received no answer through dreams, Urim, or prophets, he sought a woman who was a medium.", fr: "Lorsque Saül ne reçut aucune réponse par les rêves, l’Urim ou les prophètes, il chercha une femme qui était médium." } },
      { id: 'a71-d', isTruth: true, text: { en: "The figure of Samuel announced that Israel would be defeated and that Saul and his sons would die.", fr: "La figure de Samuel annonça qu’Israël serait vaincu et que Saül et ses fils mourraient." } },
    ],
    explanation: { en: "Saul disguised himself when he visited the medium. The narrative says she recognized who he was only after Samuel appeared.", fr: "Saül se déguisa lorsqu’il alla voir la médium. Le récit dit qu’elle reconnut qui il était seulement après l’apparition de Samuel." },
    scripture: { en: "1 Samuel 28", fr: "1 Samuel 28" },
    didYouKnow: { en: "Reading 1 Samuel 4–6 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de 1 Samuel 4–6 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a72', levelNumber: 72, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "David’s Mighty Men", fr: "Les vaillants hommes de David" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a72-a', isTruth: true, text: { en: "The list of David’s mighty men includes warriors remembered for extraordinary feats in battle.", fr: "La liste des vaillants hommes de David comprend des guerriers connus pour des exploits extraordinaires au combat." } },
      { id: 'a72-b', isTruth: true, text: { en: "Three mighty men broke through the Philistine camp to draw water for David from the well of Bethlehem.", fr: "Trois vaillants hommes traversèrent le camp philistin pour puiser de l’eau à David au puits de Bethléhem." } },
      { id: 'a72-c', isTruth: false, text: { en: "Uriah the Hittite is deliberately omitted from every list of David’s mighty men.", fr: "Urie le Hittite est volontairement omis de toutes les listes des vaillants hommes de David." } },
      { id: 'a72-d', isTruth: true, text: { en: "David refused to drink that water and poured it out to the LORD because the men had risked their lives for it.", fr: "David refusa de boire cette eau et la répandit devant l’Éternel parce que ces hommes avaient risqué leur vie pour l’obtenir." } },
    ],
    explanation: { en: "Uriah the Hittite is explicitly named near the end of the list in 2 Samuel 23:39.", fr: "Urie le Hittite est explicitement nommé vers la fin de la liste dans 2 Samuel 23:39." },
    scripture: { en: "2 Samuel 23:8–39", fr: "2 Samuel 23:8–39" },
    didYouKnow: { en: "Reading 1 Samuel 28 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de 1 Samuel 28 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a73', levelNumber: 73, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Absalom’s Rebellion", fr: "La révolte d’Absalom" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a73-a', isTruth: true, text: { en: "Absalom won support by presenting himself as someone who would give people justice.", fr: "Absalom gagna des partisans en se présentant comme celui qui rendrait justice au peuple." } },
      { id: 'a73-b', isTruth: true, text: { en: "David fled Jerusalem when news came that the hearts of Israel had turned toward Absalom.", fr: "David quitta Jérusalem lorsqu’il apprit que le cœur des hommes d’Israël s’était tourné vers Absalom." } },
      { id: 'a73-c', isTruth: true, text: { en: "David instructed his commanders to deal gently with Absalom for his sake.", fr: "David ordonna à ses chefs de traiter Absalom avec douceur à cause de lui." } },
      { id: 'a73-d', isTruth: false, text: { en: "Absalom began his rebellion by seizing the ark of the covenant and carrying it away from Jerusalem.", fr: "Absalom commença sa révolte en s’emparant de l’arche de l’alliance et en l’emportant hors de Jérusalem." } },
    ],
    explanation: { en: "David’s priests initially carried the ark out with him, but David told Zadok to return it to Jerusalem. Absalom did not seize and carry away the ark.", fr: "Les prêtres de David sortirent d’abord avec l’arche, mais David dit à Tsadok de la ramener à Jérusalem. Absalom ne s’empara pas de l’arche pour l’emporter." },
    scripture: { en: "2 Samuel 15–18", fr: "2 Samuel 15–18" },
    didYouKnow: { en: "Reading 2 Samuel 23:8–39 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de 2 Samuel 23:8–39 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a74', levelNumber: 74, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Araunah’s Threshing Floor", fr: "L’aire d’Arauna" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a74-a', isTruth: false, text: { en: "David accepted everything free of charge because he believed a sacrifice should cost the worshiper nothing.", fr: "David accepta tout gratuitement parce qu’il croyait qu’un sacrifice ne devait rien coûter à celui qui l’offrait." } },
      { id: 'a74-b', isTruth: true, text: { en: "Gad told David to build an altar to the LORD on the threshing floor of Araunah the Jebusite.", fr: "Gad dit à David de bâtir un autel à l’Éternel sur l’aire d’Arauna le Jébusien." } },
      { id: 'a74-c', isTruth: true, text: { en: "Araunah offered to give David the threshing floor, oxen, and wood for the sacrifice.", fr: "Arauna proposa de donner à David l’aire, les bœufs et le bois pour le sacrifice." } },
      { id: 'a74-d', isTruth: true, text: { en: "David insisted on paying, saying he would not offer burnt offerings to the LORD that cost him nothing.", fr: "David insista pour payer, disant qu’il n’offrirait pas à l’Éternel des holocaustes qui ne lui coûteraient rien." } },
    ],
    explanation: { en: "David explicitly refused to offer to the LORD something that cost him nothing, so he purchased the threshing floor and the oxen.", fr: "David refusa explicitement d’offrir à l’Éternel quelque chose qui ne lui coûterait rien ; il acheta donc l’aire et les bœufs." },
    scripture: { en: "2 Samuel 24:18–25", fr: "2 Samuel 24:18–25" },
    didYouKnow: { en: "Reading 2 Samuel 15–18 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de 2 Samuel 15–18 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a75', levelNumber: 75, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Queen of Sheba", fr: "La reine de Séba" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a75-a', isTruth: true, text: { en: "The queen of Sheba came to Jerusalem to test Solomon with difficult questions.", fr: "La reine de Séba vint à Jérusalem pour éprouver Salomon par des questions difficiles." } },
      { id: 'a75-b', isTruth: false, text: { en: "Solomon was unable to answer several of her questions and asked the priests to respond for him.", fr: "Salomon fut incapable de répondre à plusieurs de ses questions et demanda aux prêtres de répondre à sa place." } },
      { id: 'a75-c', isTruth: true, text: { en: "She was overwhelmed by Solomon’s wisdom, palace, officials, servants, and worship arrangements.", fr: "Elle fut impressionnée par la sagesse de Salomon, son palais, ses fonctionnaires, ses serviteurs et l’organisation du culte." } },
      { id: 'a75-d', isTruth: true, text: { en: "She gave Solomon large quantities of gold, spices, and precious stones.", fr: "Elle donna à Salomon de grandes quantités d’or, d’aromates et de pierres précieuses." } },
    ],
    explanation: { en: "1 Kings 10 says Solomon answered all her questions; nothing was too difficult for him to explain.", fr: "1 Rois 10 dit que Salomon répondit à toutes ses questions ; rien n’était trop difficile pour lui." },
    scripture: { en: "1 Kings 10:1–13", fr: "1 Kings 10:1–13" },
    didYouKnow: { en: "Reading 2 Samuel 24:18–25 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de 2 Samuel 24:18–25 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a76', levelNumber: 76, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Rehoboam and the Divided Kingdom", fr: "Roboam et le royaume divisé" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a76-a', isTruth: true, text: { en: "The people asked Rehoboam to lighten the heavy yoke Solomon had placed on them.", fr: "Le peuple demanda à Roboam d’alléger le joug lourd que Salomon avait imposé." } },
      { id: 'a76-b', isTruth: true, text: { en: "The older advisers counseled Rehoboam to serve the people and answer them favorably.", fr: "Les anciens conseillèrent à Roboam de servir le peuple et de lui répondre favorablement." } },
      { id: 'a76-c', isTruth: false, text: { en: "All twelve tribes accepted Rehoboam’s harsh answer and remained united under him.", fr: "Les douze tribus acceptèrent la réponse dure de Roboam et restèrent unies sous son autorité." } },
      { id: 'a76-d', isTruth: true, text: { en: "Rehoboam rejected the elders’ advice and followed the harsher advice of the younger men.", fr: "Roboam rejeta le conseil des anciens et suivit le conseil plus dur des jeunes gens." } },
    ],
    explanation: { en: "The northern tribes rejected Rehoboam’s rule, and the kingdom divided. Rehoboam retained Judah while Jeroboam became king over the northern kingdom.", fr: "Les tribus du nord rejetèrent l’autorité de Roboam, et le royaume fut divisé. Roboam conserva Juda tandis que Jéroboam devint roi du royaume du nord." },
    scripture: { en: "1 Kings 12:1–20", fr: "1 Kings 12:1–20" },
    didYouKnow: { en: "Reading 1 Kings 10:1–13 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de 1 Kings 10:1–13 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a77', levelNumber: 77, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Elijah at Horeb", fr: "Élie à Horeb" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a77-a', isTruth: true, text: { en: "Elijah fled after Jezebel threatened his life following the events on Mount Carmel.", fr: "Élie s’enfuit après que Jézabel eut menacé sa vie à la suite des événements du mont Carmel." } },
      { id: 'a77-b', isTruth: true, text: { en: "At Horeb, Elijah experienced a great wind, an earthquake, and a fire.", fr: "À Horeb, Élie connut un grand vent, un tremblement de terre et un feu." } },
      { id: 'a77-c', isTruth: true, text: { en: "The LORD’s communication to Elijah came after those dramatic phenomena in a gentle, low voice.", fr: "La communication de l’Éternel à Élie vint après ces phénomènes impressionnants dans une voix douce et légère." } },
      { id: 'a77-d', isTruth: false, text: { en: "Elijah fled to Horeb because King Ahab had ordered him to become commander of Israel’s army.", fr: "Élie s’enfuit à Horeb parce que le roi Achab lui avait ordonné de devenir chef de l’armée d’Israël." } },
    ],
    explanation: { en: "Elijah fled because Jezebel threatened to kill him, not because Ahab offered him military command.", fr: "Élie s’enfuit parce que Jézabel menaça de le tuer, et non parce qu’Achab lui offrit un commandement militaire." },
    scripture: { en: "1 Kings 19:1–18", fr: "1 Kings 19:1–18" },
    didYouKnow: { en: "Reading 1 Kings 12:1–20 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de 1 Kings 12:1–20 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a78', levelNumber: 78, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Naboth’s Vineyard", fr: "La vigne de Naboth" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a78-a', isTruth: false, text: { en: "Naboth voluntarily sold the vineyard to Jezebel for twice its market value.", fr: "Naboth vendit volontairement la vigne à Jézabel pour le double de sa valeur." } },
      { id: 'a78-b', isTruth: true, text: { en: "Ahab wanted Naboth’s vineyard because it was close to the royal palace in Jezreel.", fr: "Achab voulait la vigne de Naboth parce qu’elle était proche du palais royal à Jizreel." } },
      { id: 'a78-c', isTruth: true, text: { en: "Naboth refused to give Ahab his ancestral inheritance.", fr: "Naboth refusa de céder à Achab l’héritage de ses pères." } },
      { id: 'a78-d', isTruth: true, text: { en: "Jezebel arranged false accusations of blasphemy against Naboth, leading to his execution.", fr: "Jézabel organisa de fausses accusations de blasphème contre Naboth, ce qui conduisit à son exécution." } },
    ],
    explanation: { en: "Naboth refused to sell or exchange the vineyard. Jezebel obtained it for Ahab only after arranging Naboth’s death through false witnesses.", fr: "Naboth refusa de vendre ou d’échanger la vigne. Jézabel ne l’obtint pour Achab qu’après avoir organisé la mort de Naboth au moyen de faux témoins." },
    scripture: { en: "1 Kings 21", fr: "1 Kings 21" },
    didYouKnow: { en: "Reading 1 Kings 19:1–18 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de 1 Kings 19:1–18 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a79', levelNumber: 79, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Micaiah and Ahab", fr: "Michée et Achab" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a79-a', isTruth: true, text: { en: "Ahab and Jehoshaphat considered going to war for Ramoth-gilead.", fr: "Achab et Josaphat envisagèrent d’aller en guerre pour Ramoth en Galaad." } },
      { id: 'a79-b', isTruth: false, text: { en: "Ahab honored Micaiah for his warning and appointed him chief prophet of the royal court.", fr: "Achab honora Michée pour son avertissement et le nomma chef des prophètes de la cour royale." } },
      { id: 'a79-c', isTruth: true, text: { en: "Many prophets predicted success, but Jehoshaphat asked whether there was still a prophet of the LORD to consult.", fr: "De nombreux prophètes annoncèrent le succès, mais Josaphat demanda s’il restait un prophète de l’Éternel à consulter." } },
      { id: 'a79-d', isTruth: true, text: { en: "Micaiah ultimately foretold disaster and described Israel scattered like sheep without a shepherd.", fr: "Michée annonça finalement le désastre et décrivit Israël dispersé comme des brebis sans berger." } },
    ],
    explanation: { en: "Ahab did not honor Micaiah. He ordered that the prophet be imprisoned and given reduced bread and water until the king returned safely.", fr: "Achab n’honora pas Michée. Il ordonna qu’on l’emprisonne et qu’on lui donne peu de pain et d’eau jusqu’au retour sain et sauf du roi." },
    scripture: { en: "1 Kings 22", fr: "1 Kings 22" },
    didYouKnow: { en: "Reading 1 Kings 21 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de 1 Kings 21 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a80', levelNumber: 80, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Elisha and Naaman", fr: "Élisée et Naaman" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a80-a', isTruth: true, text: { en: "Naaman was commander of the army of the king of Aram and suffered from a serious skin disease.", fr: "Naaman était chef de l’armée du roi d’Aram et souffrait d’une grave maladie de peau." } },
      { id: 'a80-b', isTruth: true, text: { en: "Elisha sent a messenger telling Naaman to wash seven times in the Jordan.", fr: "Élisée envoya un messager dire à Naaman de se laver sept fois dans le Jourdain." } },
      { id: 'a80-c', isTruth: false, text: { en: "Elisha personally met Naaman at the door and performed an elaborate ceremony over him.", fr: "Élisée rencontra personnellement Naaman à la porte et accomplit sur lui une cérémonie élaborée." } },
      { id: 'a80-d', isTruth: true, text: { en: "After initially becoming angry, Naaman followed the instruction and was healed.", fr: "Après s’être d’abord mis en colère, Naaman suivit l’instruction et fut guéri." } },
    ],
    explanation: { en: "Elisha did not come out to perform a ceremony. He sent a messenger with the simple instruction to wash seven times in the Jordan.", fr: "Élisée ne sortit pas pour accomplir une cérémonie. Il envoya un messager avec la simple instruction de se laver sept fois dans le Jourdain." },
    scripture: { en: "2 Kings 5", fr: "2 Kings 5" },
    didYouKnow: { en: "Reading 1 Kings 22 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de 1 Kings 22 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a81', levelNumber: 81, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Floating Axe Head", fr: "Le fer de hache qui flotte" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a81-a', isTruth: true, text: { en: "The sons of the prophets asked Elisha for permission to build a larger place to live near the Jordan.", fr: "Les fils des prophètes demandèrent à Élisée la permission de construire un lieu plus grand près du Jourdain." } },
      { id: 'a81-b', isTruth: true, text: { en: "While one man was cutting a tree, the borrowed iron axe head fell into the water.", fr: "Pendant qu’un homme abattait un arbre, le fer de la hache empruntée tomba dans l’eau." } },
      { id: 'a81-c', isTruth: true, text: { en: "Elisha cut a stick, threw it where the iron had fallen, and the iron floated.", fr: "Élisée coupa un morceau de bois, le jeta à l’endroit où le fer était tombé, et le fer flotta." } },
      { id: 'a81-d', isTruth: false, text: { en: "Elisha recovered the axe head by diving into the Jordan and bringing it up by hand.", fr: "Élisée récupéra le fer de hache en plongeant dans le Jourdain et en le remontant à la main." } },
    ],
    explanation: { en: "Elisha did not dive for the iron. The text says he threw a stick into the water and made the iron float.", fr: "Élisée ne plongea pas pour récupérer le fer. Le texte dit qu’il jeta un morceau de bois dans l’eau et fit flotter le fer." },
    scripture: { en: "2 Kings 6:1–7", fr: "2 Kings 6:1–7" },
    didYouKnow: { en: "Reading 2 Kings 5 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de 2 Kings 5 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a82', levelNumber: 82, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Hezekiah and the Assyrian Threat", fr: "Ézéchias et la menace assyrienne" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a82-a', isTruth: false, text: { en: "Hezekiah answered the Assyrian threat by surrendering Jerusalem immediately without seeking the LORD.", fr: "Ézéchias répondit à la menace assyrienne en livrant immédiatement Jérusalem sans chercher l’Éternel." } },
      { id: 'a82-b', isTruth: true, text: { en: "Sennacherib king of Assyria sent officials to threaten Jerusalem during Hezekiah’s reign.", fr: "Sennachérib, roi d’Assyrie, envoya des officiers menacer Jérusalem sous le règne d’Ézéchias." } },
      { id: 'a82-c', isTruth: true, text: { en: "Hezekiah went to the house of the LORD and sent messengers to the prophet Isaiah.", fr: "Ézéchias se rendit dans la maison de l’Éternel et envoya des messagers au prophète Ésaïe." } },
      { id: 'a82-d', isTruth: true, text: { en: "The narrative says an angel of the LORD struck 185,000 in the Assyrian camp.", fr: "Le récit dit qu’un ange de l’Éternel frappa 185 000 hommes dans le camp assyrien." } },
    ],
    explanation: { en: "Hezekiah did not simply surrender. He sought the LORD, consulted Isaiah, and prayed concerning Sennacherib’s threat.", fr: "Ézéchias ne se rendit pas simplement. Il chercha l’Éternel, consulta Ésaïe et pria au sujet de la menace de Sennachérib." },
    scripture: { en: "2 Kings 18–19", fr: "2 Kings 18–19" },
    didYouKnow: { en: "Reading 2 Kings 6:1–7 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de 2 Kings 6:1–7 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a83', levelNumber: 83, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Josiah Finds the Book of the Law", fr: "Josias retrouve le livre de la Loi" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a83-a', isTruth: true, text: { en: "During temple repairs, Hilkiah the high priest found the Book of the Law.", fr: "Pendant les réparations du temple, Hilkija le souverain sacrificateur retrouva le livre de la Loi." } },
      { id: 'a83-b', isTruth: false, text: { en: "Josiah ordered the newly found book burned because it contradicted the customs of Judah.", fr: "Josias ordonna de brûler le livre retrouvé parce qu’il contredisait les coutumes de Juda." } },
      { id: 'a83-c', isTruth: true, text: { en: "When Josiah heard the words of the book, he tore his clothes.", fr: "Lorsque Josias entendit les paroles du livre, il déchira ses vêtements." } },
      { id: 'a83-d', isTruth: true, text: { en: "The prophetess Huldah was consulted concerning the words that had been found.", fr: "La prophétesse Hulda fut consultée au sujet des paroles qui avaient été retrouvées." } },
    ],
    explanation: { en: "Josiah responded with humility and reform, not destruction of the book. He gathered the people, read the covenant, and renewed obedience.", fr: "Josias répondit par l’humilité et la réforme, non par la destruction du livre. Il rassembla le peuple, lut l’alliance et renouvela l’obéissance." },
    scripture: { en: "2 Kings 22–23", fr: "2 Kings 22–23" },
    didYouKnow: { en: "Reading 2 Kings 18–19 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de 2 Kings 18–19 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a84', levelNumber: 84, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Jabez’s Prayer", fr: "La prière de Jaebets" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a84-a', isTruth: true, text: { en: "Jabez is described as more honorable than his brothers.", fr: "Jaebets est décrit comme plus honorable que ses frères." } },
      { id: 'a84-b', isTruth: true, text: { en: "His mother named him Jabez because she bore him in pain.", fr: "Sa mère le nomma Jaebets parce qu’elle l’avait enfanté dans la douleur." } },
      { id: 'a84-c', isTruth: false, text: { en: "Jabez asked God to make him king over Judah and defeat all neighboring nations.", fr: "Jaebets demanda à Dieu de le faire roi de Juda et de vaincre toutes les nations voisines." } },
      { id: 'a84-d', isTruth: true, text: { en: "Jabez asked for blessing, enlarged territory, God’s hand with him, and protection from harm.", fr: "Jaebets demanda la bénédiction, un territoire élargi, la main de Dieu avec lui et la protection contre le mal." } },
    ],
    explanation: { en: "Jabez’s recorded prayer contains no request to become king. It asks for blessing, enlarged territory, divine presence, and protection.", fr: "La prière rapportée de Jaebets ne contient aucune demande de devenir roi. Elle demande la bénédiction, un territoire élargi, la présence divine et la protection." },
    scripture: { en: "1 Chronicles 4:9–10", fr: "1 Chronicles 4:9–10" },
    didYouKnow: { en: "Reading 2 Kings 22–23 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de 2 Kings 22–23 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a85', levelNumber: 85, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Jehoshaphat’s Choir", fr: "Le chœur de Josaphat" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a85-a', isTruth: true, text: { en: "A large coalition came against Judah during Jehoshaphat’s reign.", fr: "Une grande coalition marcha contre Juda sous le règne de Josaphat." } },
      { id: 'a85-b', isTruth: true, text: { en: "Jehoshaphat proclaimed a fast and sought the LORD with the people of Judah.", fr: "Josaphat proclama un jeûne et chercha l’Éternel avec le peuple de Juda." } },
      { id: 'a85-c', isTruth: true, text: { en: "Singers went before the army praising the LORD for His enduring mercy.", fr: "Des chantres marchèrent devant l’armée en louant l’Éternel pour sa miséricorde éternelle." } },
      { id: 'a85-d', isTruth: false, text: { en: "Judah won because Jehoshaphat personally defeated all three enemy armies in single combat.", fr: "Juda remporta la victoire parce que Josaphat vainquit personnellement les trois armées ennemies en combat singulier." } },
    ],
    explanation: { en: "The victory is attributed to the LORD causing the enemy forces to turn against one another; Jehoshaphat did not defeat them in single combat.", fr: "La victoire est attribuée à l’Éternel, qui fit se retourner les forces ennemies les unes contre les autres ; Josaphat ne les vainquit pas en combat singulier." },
    scripture: { en: "2 Chronicles 20", fr: "2 Chronicles 20" },
    didYouKnow: { en: "Reading 1 Chronicles 4:9–10 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de 1 Chronicles 4:9–10 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a86', levelNumber: 86, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Ezra Reads the Law", fr: "Esdras lit la Loi" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a86-a', isTruth: false, text: { en: "The people were forbidden to ask questions because only Ezra was permitted to understand the Law.", fr: "Il était interdit au peuple de poser des questions parce que seul Esdras avait le droit de comprendre la Loi." } },
      { id: 'a86-b', isTruth: true, text: { en: "Ezra read from the Book of the Law before an assembled crowd in Jerusalem.", fr: "Esdras lut le livre de la Loi devant une foule rassemblée à Jérusalem." } },
      { id: 'a86-c', isTruth: true, text: { en: "Levites helped the people understand the Law while it was being read.", fr: "Les Lévites aidèrent le peuple à comprendre la Loi pendant sa lecture." } },
      { id: 'a86-d', isTruth: true, text: { en: "The people celebrated the Feast of Booths after rediscovering its instructions in the Law.", fr: "Le peuple célébra la fête des Tabernacles après avoir redécouvert ses instructions dans la Loi." } },
    ],
    explanation: { en: "Nehemiah 8 emphasizes explanation and understanding. Levites helped the people grasp the meaning of what was read.", fr: "Néhémie 8 met l’accent sur l’explication et la compréhension. Les Lévites aidèrent le peuple à saisir le sens de ce qui était lu." },
    scripture: { en: "Nehemiah 8", fr: "Nehemiah 8" },
    didYouKnow: { en: "Reading 2 Chronicles 20 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de 2 Chronicles 20 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a87', levelNumber: 87, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Nehemiah and Sanballat", fr: "Néhémie et Sanballat" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a87-a', isTruth: true, text: { en: "Sanballat mocked the rebuilding work and opposed Nehemiah.", fr: "Sanballat se moqua de la reconstruction et s’opposa à Néhémie." } },
      { id: 'a87-b', isTruth: false, text: { en: "Nehemiah repeatedly left Jerusalem to meet Sanballat privately on the plain of Ono.", fr: "Néhémie quitta à plusieurs reprises Jérusalem pour rencontrer Sanballat en privé dans la vallée d’Ono." } },
      { id: 'a87-c', isTruth: true, text: { en: "Nehemiah stationed people by families with swords, spears, and bows when threats increased.", fr: "Néhémie plaça des hommes par familles avec des épées, des lances et des arcs lorsque les menaces augmentèrent." } },
      { id: 'a87-d', isTruth: true, text: { en: "Nehemiah refused invitations to meet on the plain of Ono because he believed his enemies intended harm.", fr: "Néhémie refusa les invitations à se rencontrer dans la vallée d’Ono parce qu’il croyait que ses ennemis voulaient lui faire du mal." } },
    ],
    explanation: { en: "Nehemiah refused Sanballat’s repeated invitations, answering that he was doing a great work and could not come down.", fr: "Néhémie refusa les invitations répétées de Sanballat, répondant qu’il accomplissait un grand travail et ne pouvait pas descendre." },
    scripture: { en: "Nehemiah 4; 6", fr: "Nehemiah 4; 6" },
    didYouKnow: { en: "Reading Nehemiah 8 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Nehemiah 8 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a88', levelNumber: 88, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Esther’s Banquets", fr: "Les banquets d’Esther" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a88-a', isTruth: true, text: { en: "Esther invited the king and Haman to a banquet before revealing her full request.", fr: "Esther invita le roi et Haman à un banquet avant de révéler entièrement sa demande." } },
      { id: 'a88-b', isTruth: true, text: { en: "Esther invited them to a second banquet on the following day.", fr: "Esther les invita à un deuxième banquet le lendemain." } },
      { id: 'a88-c', isTruth: false, text: { en: "At the first banquet Esther immediately accused Haman and demanded his execution before the king could speak.", fr: "Au premier banquet, Esther accusa immédiatement Haman et exigea son exécution avant que le roi puisse parler." } },
      { id: 'a88-d', isTruth: true, text: { en: "At the second banquet Esther identified Haman as the adversary who threatened her people.", fr: "Au second banquet, Esther identifia Haman comme l’adversaire qui menaçait son peuple." } },
    ],
    explanation: { en: "Esther delayed the decisive accusation until the second banquet. Her careful timing is a key feature of the narrative.", fr: "Esther retarda l’accusation décisive jusqu’au second banquet. Son choix du moment est un élément important du récit." },
    scripture: { en: "Esther 5–7", fr: "Esther 5–7" },
    didYouKnow: { en: "Reading Nehemiah 4; 6 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Nehemiah 4; 6 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a89', levelNumber: 89, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Job’s Friends", fr: "Les amis de Job" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a89-a', isTruth: true, text: { en: "Eliphaz, Bildad, and Zophar came to comfort Job after hearing of his suffering.", fr: "Éliphaz, Bildad et Tsophar vinrent consoler Job après avoir appris ses souffrances." } },
      { id: 'a89-b', isTruth: true, text: { en: "They sat with Job on the ground for seven days and seven nights before speaking.", fr: "Ils restèrent assis avec Job par terre pendant sept jours et sept nuits avant de parler." } },
      { id: 'a89-c', isTruth: true, text: { en: "God told the friends to offer sacrifices and said Job would pray for them.", fr: "Dieu dit aux amis d’offrir des sacrifices et déclara que Job prierait pour eux." } },
      { id: 'a89-d', isTruth: false, text: { en: "At the end of the book God commended all three friends for speaking more accurately about Him than Job did.", fr: "À la fin du livre, Dieu félicita les trois amis d’avoir parlé de lui avec plus de justesse que Job." } },
    ],
    explanation: { en: "God rebuked Eliphaz and his companions because they had not spoken rightly about Him as Job had.", fr: "Dieu reprit Éliphaz et ses compagnons parce qu’ils n’avaient pas parlé de lui avec droiture comme Job." },
    scripture: { en: "Job 2:11–13; 42:7–9", fr: "Job 2:11–13; 42:7–9" },
    didYouKnow: { en: "Reading Esther 5–7 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Esther 5–7 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a90', levelNumber: 90, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "God Answers Job", fr: "Dieu répond à Job" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a90-a', isTruth: false, text: { en: "God’s answer consisted mainly of revealing the exact identity and motives of the accuser in the heavenly council.", fr: "La réponse de Dieu consistait principalement à révéler l’identité exacte et les motivations de l’accusateur dans le conseil céleste." } },
      { id: 'a90-b', isTruth: true, text: { en: "The LORD answered Job out of the whirlwind.", fr: "L’Éternel répondit à Job du milieu de la tempête." } },
      { id: 'a90-c', isTruth: true, text: { en: "God questioned Job about the foundations of the earth, the sea, weather, stars, and animals.", fr: "Dieu interrogea Job sur les fondements de la terre, la mer, le climat, les étoiles et les animaux." } },
      { id: 'a90-d', isTruth: true, text: { en: "The speeches include extended descriptions of Behemoth and Leviathan.", fr: "Les discours comprennent de longues descriptions de Béhémoth et de Léviathan." } },
    ],
    explanation: { en: "God does not explain Job’s suffering by revealing the heavenly scenes to him. Instead, He confronts Job with questions displaying divine wisdom and sovereignty.", fr: "Dieu n’explique pas les souffrances de Job en lui révélant les scènes célestes. Il l’interpelle plutôt par des questions manifestant sa sagesse et sa souveraineté." },
    scripture: { en: "Job 38–41", fr: "Job 38–41" },
    didYouKnow: { en: "Reading Job 2:11–13; 42:7–9 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Job 2:11–13; 42:7–9 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a91', levelNumber: 91, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Psalm 22", fr: "Le Psaume 22" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a91-a', isTruth: true, text: { en: "Psalm 22 opens with the cry, “My God, my God, why have you forsaken me?”", fr: "Le Psaume 22 s’ouvre par le cri : « Mon Dieu, mon Dieu, pourquoi m’as-tu abandonné ? »" } },
      { id: 'a91-b', isTruth: false, text: { en: "The entire psalm remains a lament and never turns toward praise or confidence in God.", fr: "Tout le psaume reste une lamentation et ne se tourne jamais vers la louange ou la confiance en Dieu." } },
      { id: 'a91-c', isTruth: true, text: { en: "The psalm describes mockers shaking their heads and challenging the sufferer to trust in the LORD.", fr: "Le psaume décrit des moqueurs secouant la tête et défiant celui qui souffre de se confier en l’Éternel." } },
      { id: 'a91-d', isTruth: true, text: { en: "It mentions garments being divided and lots being cast for clothing.", fr: "Il mentionne le partage des vêtements et le tirage au sort des habits." } },
    ],
    explanation: { en: "The latter part of Psalm 22 turns toward praise, proclamation, and worldwide worship of the LORD.", fr: "La dernière partie du Psaume 22 se tourne vers la louange, la proclamation et l’adoration universelle de l’Éternel." },
    scripture: { en: "Psalm 22", fr: "Psalm 22" },
    didYouKnow: { en: "Reading Job 38–41 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Job 38–41 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a92', levelNumber: 92, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Psalm 119", fr: "Le Psaume 119" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a92-a', isTruth: true, text: { en: "Psalm 119 is organized as an alphabetic acrostic using the Hebrew alphabet.", fr: "Le Psaume 119 est organisé comme un acrostiche alphabétique utilisant l’alphabet hébreu." } },
      { id: 'a92-b', isTruth: true, text: { en: "The psalm repeatedly uses terms such as law, testimonies, precepts, statutes, commandments, and word.", fr: "Le psaume utilise à plusieurs reprises des termes comme loi, témoignages, préceptes, statuts, commandements et parole." } },
      { id: 'a92-c', isTruth: false, text: { en: "Every stanza contains exactly one verse and corresponds to one Hebrew letter.", fr: "Chaque strophe contient exactement un verset et correspond à une lettre hébraïque." } },
      { id: 'a92-d', isTruth: true, text: { en: "It contains 176 verses arranged in twenty-two sections.", fr: "Il contient 176 versets répartis en vingt-deux sections." } },
    ],
    explanation: { en: "Psalm 119 has twenty-two stanzas of eight verses each, not one verse per Hebrew letter.", fr: "Le Psaume 119 comporte vingt-deux strophes de huit versets chacune, et non un seul verset par lettre hébraïque." },
    scripture: { en: "Psalm 119", fr: "Psalm 119" },
    didYouKnow: { en: "Reading Psalm 22 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Psalm 22 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a93', levelNumber: 93, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Agur’s Sayings", fr: "Les paroles d’Agur" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a93-a', isTruth: true, text: { en: "Proverbs 30 identifies its sayings with Agur son of Jakeh.", fr: "Proverbes 30 attribue ses paroles à Agur, fils de Jaké." } },
      { id: 'a93-b', isTruth: true, text: { en: "Agur asks God for neither poverty nor riches, but for the food allotted to him.", fr: "Agur demande à Dieu de ne lui donner ni pauvreté ni richesse, mais la nourriture qui lui est nécessaire." } },
      { id: 'a93-c', isTruth: true, text: { en: "The chapter contains several numerical sayings structured around “three things” and “four.”", fr: "Le chapitre contient plusieurs proverbes numériques structurés autour de « trois choses » et « quatre »." } },
      { id: 'a93-d', isTruth: false, text: { en: "Agur claims to possess perfect wisdom and says he has no need to learn anything further.", fr: "Agur affirme posséder une sagesse parfaite et n’avoir plus rien à apprendre." } },
    ],
    explanation: { en: "Agur begins with striking humility, confessing his limited understanding rather than claiming perfect wisdom.", fr: "Agur commence par une remarquable humilité, reconnaissant la limite de son intelligence au lieu de prétendre posséder une sagesse parfaite." },
    scripture: { en: "Proverbs 30", fr: "Proverbs 30" },
    didYouKnow: { en: "Reading Psalm 119 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Psalm 119 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a94', levelNumber: 94, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Virtuous Woman", fr: "La femme vertueuse" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a94-a', isTruth: false, text: { en: "The poem praises physical beauty as the only reliable measure of a woman’s worth.", fr: "Le poème présente la beauté physique comme l’unique mesure fiable de la valeur d’une femme." } },
      { id: 'a94-b', isTruth: true, text: { en: "The poem praises a capable woman whose worth is said to exceed precious jewels.", fr: "Le poème loue une femme capable dont la valeur dépasse celle des pierres précieuses." } },
      { id: 'a94-c', isTruth: true, text: { en: "She is portrayed as industrious in household management, trade, and care for the needy.", fr: "Elle est présentée comme active dans la gestion du foyer, le commerce et l’aide aux nécessiteux." } },
      { id: 'a94-d', isTruth: true, text: { en: "The conclusion says a woman who fears the LORD is to be praised.", fr: "La conclusion dit qu’une femme qui craint l’Éternel doit être louée." } },
    ],
    explanation: { en: "Proverbs 31 explicitly says charm is deceptive and beauty is fleeting, while praising the woman who fears the LORD.", fr: "Proverbes 31 dit explicitement que la grâce est trompeuse et la beauté vaine, tout en louant la femme qui craint l’Éternel." },
    scripture: { en: "Proverbs 31:10–31", fr: "Proverbs 31:10–31" },
    didYouKnow: { en: "Reading Proverbs 30 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Proverbs 30 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a95', levelNumber: 95, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Ecclesiastes and the Seasons", fr: "L’Ecclésiaste et les temps" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a95-a', isTruth: true, text: { en: "The passage says there is a season and a time for every matter under heaven.", fr: "Le passage dit qu’il y a un temps et une saison pour toute chose sous le ciel." } },
      { id: 'a95-b', isTruth: false, text: { en: "It concludes that there is never a legitimate time for silence, mourning, or conflict.", fr: "Il conclut qu’il n’existe jamais de temps légitime pour le silence, le deuil ou le conflit." } },
      { id: 'a95-c', isTruth: true, text: { en: "It pairs birth with death and planting with uprooting.", fr: "Il associe la naissance à la mort et le fait de planter à celui d’arracher." } },
      { id: 'a95-d', isTruth: true, text: { en: "It includes a time to weep and a time to laugh.", fr: "Il comprend un temps pour pleurer et un temps pour rire." } },
    ],
    explanation: { en: "Ecclesiastes 3 explicitly names a time to keep silence, a time to mourn, and a time for war among its contrasting seasons.", fr: "Ecclésiaste 3 mentionne explicitement un temps pour se taire, un temps pour pleurer et un temps pour la guerre parmi ses temps opposés." },
    scripture: { en: "Ecclesiastes 3:1–8", fr: "Ecclesiastes 3:1–8" },
    didYouKnow: { en: "Reading Proverbs 31:10–31 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Proverbs 31:10–31 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a96', levelNumber: 96, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Song of Songs", fr: "Le Cantique des cantiques" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a96-a', isTruth: true, text: { en: "Song of Songs is written primarily as poetic dialogue and love poetry.", fr: "Le Cantique des cantiques est principalement écrit sous forme de dialogue poétique et de poésie d’amour." } },
      { id: 'a96-b', isTruth: true, text: { en: "The lovers use imagery drawn from gardens, vineyards, spices, animals, and precious objects.", fr: "Les amoureux utilisent des images tirées des jardins, des vignes, des parfums, des animaux et des objets précieux." } },
      { id: 'a96-c', isTruth: false, text: { en: "The book contains a detailed prose history of Israel’s kings from Saul to the exile.", fr: "Le livre contient une histoire en prose détaillée des rois d’Israël depuis Saül jusqu’à l’exil." } },
      { id: 'a96-d', isTruth: true, text: { en: "The book contains the statement that many waters cannot quench love.", fr: "Le livre contient l’affirmation que les grandes eaux ne peuvent éteindre l’amour." } },
    ],
    explanation: { en: "Song of Songs is not a historical chronicle of Israel’s monarchy. It is poetic literature centered on love and longing.", fr: "Le Cantique des cantiques n’est pas une chronique historique de la monarchie d’Israël. C’est une œuvre poétique centrée sur l’amour et le désir." },
    scripture: { en: "Song of Songs 1–8", fr: "Song of Songs 1–8" },
    didYouKnow: { en: "Reading Ecclesiastes 3:1–8 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Ecclesiastes 3:1–8 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a97', levelNumber: 97, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Isaiah’s Commission", fr: "La vocation d’Ésaïe" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a97-a', isTruth: true, text: { en: "Isaiah saw the Lord seated on a high and exalted throne.", fr: "Ésaïe vit le Seigneur assis sur un trône très élevé." } },
      { id: 'a97-b', isTruth: true, text: { en: "Seraphim cried, “Holy, holy, holy,” and the thresholds shook at their voices.", fr: "Les séraphins criaient : « Saint, saint, saint », et les seuils tremblaient à leurs voix." } },
      { id: 'a97-c', isTruth: true, text: { en: "A seraph touched Isaiah’s lips with a burning coal from the altar before Isaiah responded, “Here am I; send me.”", fr: "Un séraphin toucha les lèvres d’Ésaïe avec une braise ardente prise sur l’autel avant qu’Ésaïe ne réponde : « Me voici, envoie-moi. »" } },
      { id: 'a97-d', isTruth: false, text: { en: "Isaiah declared himself perfectly clean and immediately volunteered before any act of purification.", fr: "Ésaïe se déclara parfaitement pur et se porta immédiatement volontaire avant tout acte de purification." } },
    ],
    explanation: { en: "Isaiah first confessed that he was a man of unclean lips. His lips were then symbolically cleansed before he volunteered.", fr: "Ésaïe confessa d’abord qu’il était un homme aux lèvres impures. Ses lèvres furent ensuite symboliquement purifiées avant qu’il ne se porte volontaire." },
    scripture: { en: "Isaiah 6", fr: "Isaiah 6" },
    didYouKnow: { en: "Reading Song of Songs 1–8 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Song of Songs 1–8 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a98', levelNumber: 98, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Suffering Servant", fr: "Le serviteur souffrant" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a98-a', isTruth: false, text: { en: "The servant suffers because he confesses his own many crimes and asks Israel for forgiveness.", fr: "Le serviteur souffre parce qu’il confesse ses nombreux crimes personnels et demande pardon à Israël." } },
      { id: 'a98-b', isTruth: true, text: { en: "The servant is described as despised and rejected, a man of sorrows acquainted with grief.", fr: "Le serviteur est décrit comme méprisé et abandonné, homme de douleur habitué à la souffrance." } },
      { id: 'a98-c', isTruth: true, text: { en: "The passage says he was wounded for transgressions and crushed for iniquities.", fr: "Le passage dit qu’il fut blessé pour les transgressions et brisé pour les iniquités." } },
      { id: 'a98-d', isTruth: true, text: { en: "The servant is said to bear the sin of many and make intercession for transgressors.", fr: "Il est dit que le serviteur porte le péché de beaucoup et intercède pour les transgresseurs." } },
    ],
    explanation: { en: "The servant is portrayed as innocent—having done no violence and spoken no deceit—while bearing the sins of others.", fr: "Le serviteur est présenté comme innocent — n’ayant commis aucune violence et aucune fraude — tout en portant les péchés des autres." },
    scripture: { en: "Isaiah 52:13–53:12", fr: "Isaiah 52:13–53:12" },
    didYouKnow: { en: "Reading Isaiah 6 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Isaiah 6 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a99', levelNumber: 99, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Jeremiah’s Yoke", fr: "Le joug de Jérémie" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a99-a', isTruth: true, text: { en: "Jeremiah wore bonds and yoke-bars as a prophetic sign concerning submission to Babylon.", fr: "Jérémie porta des liens et des barres de joug comme signe prophétique concernant la soumission à Babylone." } },
      { id: 'a99-b', isTruth: false, text: { en: "Jeremiah immediately agreed with Hananiah and announced that Babylon would fall within a few weeks.", fr: "Jérémie approuva immédiatement Hanania et annonça que Babylone tomberait en quelques semaines." } },
      { id: 'a99-c', isTruth: true, text: { en: "Hananiah publicly broke the yoke from Jeremiah’s neck and predicted a quick end to Babylonian domination.", fr: "Hanania brisa publiquement le joug du cou de Jérémie et annonça une fin rapide de la domination babylonienne." } },
      { id: 'a99-d', isTruth: true, text: { en: "Jeremiah later announced that Hananiah would die that same year, and the narrative says he did.", fr: "Jérémie annonça ensuite qu’Hanania mourrait cette même année, et le récit dit que cela arriva." } },
    ],
    explanation: { en: "Jeremiah did not endorse Hananiah’s prophecy. He warned that Hananiah was speaking falsely and later announced judgment on him.", fr: "Jérémie n’approuva pas la prophétie d’Hanania. Il avertit qu’Hanania parlait faussement et annonça ensuite son jugement." },
    scripture: { en: "Jeremiah 27–28", fr: "Jeremiah 27–28" },
    didYouKnow: { en: "Reading Isaiah 52:13–53:12 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Isaiah 52:13–53:12 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a100', levelNumber: 100, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The New Covenant", fr: "La nouvelle alliance" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a100-a', isTruth: true, text: { en: "Jeremiah speaks of a coming new covenant with the house of Israel and the house of Judah.", fr: "Jérémie parle d’une nouvelle alliance à venir avec la maison d’Israël et la maison de Juda." } },
      { id: 'a100-b', isTruth: true, text: { en: "The new covenant is contrasted with the covenant made when God brought their ancestors out of Egypt.", fr: "La nouvelle alliance est mise en contraste avec l’alliance conclue lorsque Dieu fit sortir leurs pères d’Égypte." } },
      { id: 'a100-c', isTruth: false, text: { en: "The passage says forgiveness will no longer be available because every sin will be remembered forever.", fr: "Le passage dit que le pardon ne sera plus disponible parce que chaque péché sera gardé en mémoire pour toujours." } },
      { id: 'a100-d', isTruth: true, text: { en: "God says He will put His law within them and write it on their hearts.", fr: "Dieu dit qu’il mettra sa loi au-dedans d’eux et l’écrira sur leur cœur." } },
    ],
    explanation: { en: "Jeremiah 31:34 says the opposite: God will forgive their iniquity and remember their sin no more.", fr: "Jérémie 31:34 dit le contraire : Dieu pardonnera leur iniquité et ne se souviendra plus de leur péché." },
    scripture: { en: "Jeremiah 31:31–34", fr: "Jeremiah 31:31–34" },
    didYouKnow: { en: "Reading Jeremiah 27–28 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Jeremiah 27–28 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a101', levelNumber: 101, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Ezekiel the Watchman", fr: "Ézéchiel la sentinelle" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a101-a', isTruth: true, text: { en: "Ezekiel is compared to a watchman responsible for warning the people.", fr: "Ézéchiel est comparé à une sentinelle chargée d’avertir le peuple." } },
      { id: 'a101-b', isTruth: true, text: { en: "If the watchman sees danger and fails to warn, responsibility is placed upon the watchman.", fr: "Si la sentinelle voit le danger et n’avertit pas, la responsabilité retombe sur elle." } },
      { id: 'a101-c', isTruth: true, text: { en: "If the warning is given and the hearer refuses it, the hearer bears responsibility for the outcome.", fr: "Si l’avertissement est donné et que l’auditeur le refuse, celui-ci porte la responsabilité du résultat." } },
      { id: 'a101-d', isTruth: false, text: { en: "The watchman is held guilty whenever anyone ignores a clear warning and suffers the consequences.", fr: "La sentinelle est tenue coupable chaque fois que quelqu’un ignore un avertissement clair et en subit les conséquences." } },
    ],
    explanation: { en: "The passage distinguishes failure to warn from rejection of a warning. A faithful watchman is not blamed when the hearer refuses a clear warning.", fr: "Le passage distingue le défaut d’avertir du refus d’un avertissement. Une sentinelle fidèle n’est pas blâmée lorsque l’auditeur refuse un avertissement clair." },
    scripture: { en: "Ezekiel 33:1–9", fr: "Ezekiel 33:1–9" },
    didYouKnow: { en: "Reading Jeremiah 31:31–34 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Jeremiah 31:31–34 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a102', levelNumber: 102, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Valley of Dry Bones", fr: "La vallée des ossements desséchés" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a102-a', isTruth: false, text: { en: "The bodies immediately came alive before Ezekiel prophesied to the breath.", fr: "Les corps reprirent immédiatement vie avant qu’Ézéchiel ne prophétise au souffle." } },
      { id: 'a102-b', isTruth: true, text: { en: "Ezekiel was set down in a valley full of very dry bones.", fr: "Ézéchiel fut déposé dans une vallée remplie d’ossements très desséchés." } },
      { id: 'a102-c', isTruth: true, text: { en: "At God’s command Ezekiel prophesied to the bones, and they came together with sinews, flesh, and skin.", fr: "Sur l’ordre de Dieu, Ézéchiel prophétisa aux ossements, qui se rapprochèrent et se couvrirent de nerfs, de chair et de peau." } },
      { id: 'a102-d', isTruth: true, text: { en: "After Ezekiel prophesied to the breath, breath entered them and they stood as a vast army.", fr: "Après qu’Ézéchiel eut prophétisé au souffle, le souffle entra en eux et ils se tinrent debout comme une immense armée." } },
    ],
    explanation: { en: "The bodies were formed first but had no breath in them. Life came only after Ezekiel prophesied to the breath.", fr: "Les corps furent d’abord formés mais n’avaient pas de souffle. La vie vint seulement après qu’Ézéchiel eut prophétisé au souffle." },
    scripture: { en: "Ezekiel 37:1–14", fr: "Ezekiel 37:1–14" },
    didYouKnow: { en: "Reading Ezekiel 33:1–9 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Ezekiel 33:1–9 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a103', levelNumber: 103, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Daniel’s Seventy Weeks", fr: "Les soixante-dix semaines de Daniel" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a103-a', isTruth: true, text: { en: "Gabriel came to Daniel while Daniel was praying and confessing sin.", fr: "Gabriel vint auprès de Daniel pendant qu’il priait et confessait le péché." } },
      { id: 'a103-b', isTruth: false, text: { en: "Daniel received the prophecy while celebrating a military victory over Persia in Jerusalem.", fr: "Daniel reçut la prophétie alors qu’il célébrait une victoire militaire sur la Perse à Jérusalem." } },
      { id: 'a103-c', isTruth: true, text: { en: "The prophecy speaks of seventy weeks decreed concerning Daniel’s people and holy city.", fr: "La prophétie parle de soixante-dix semaines décrétées au sujet du peuple de Daniel et de la ville sainte." } },
      { id: 'a103-d', isTruth: true, text: { en: "The passage speaks of an anointed one, the city and sanctuary, covenant language, and a desolating abomination.", fr: "Le passage parle d’un oint, de la ville et du sanctuaire, d’une alliance et d’une abomination dévastatrice." } },
    ],
    explanation: { en: "Daniel received the revelation during prayer in exile, not during a military victory in Jerusalem.", fr: "Daniel reçut cette révélation pendant la prière en exil, et non lors d’une victoire militaire à Jérusalem." },
    scripture: { en: "Daniel 9:20–27", fr: "Daniel 9:20–27" },
    didYouKnow: { en: "Reading Ezekiel 37:1–14 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Ezekiel 37:1–14 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a104', levelNumber: 104, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Hosea and Gomer", fr: "Osée et Gomer" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a104-a', isTruth: true, text: { en: "Hosea’s marriage and children function as prophetic signs concerning Israel.", fr: "Le mariage d’Osée et ses enfants servent de signes prophétiques concernant Israël." } },
      { id: 'a104-b', isTruth: true, text: { en: "The children receive symbolic names including Jezreel, Lo-Ruhamah, and Lo-Ammi.", fr: "Les enfants reçoivent des noms symboliques, notamment Jizreel, Lo-Ruchama et Lo-Ammi." } },
      { id: 'a104-c', isTruth: false, text: { en: "Hosea is told to end all contact with Gomer permanently and never seek restoration.", fr: "Il est ordonné à Osée de rompre définitivement tout contact avec Gomer et de ne jamais rechercher la restauration." } },
      { id: 'a104-d', isTruth: true, text: { en: "Hosea 3 portrays Hosea loving a woman again as an enacted picture connected with God’s love for Israel.", fr: "Osée 3 montre Osée aimant de nouveau une femme comme image vécue liée à l’amour de Dieu pour Israël." } },
    ],
    explanation: { en: "Hosea’s story includes pursuit and restoration rather than permanent abandonment, reflecting the book’s covenant-love theme.", fr: "L’histoire d’Osée comprend la poursuite et la restauration plutôt qu’un abandon définitif, reflétant le thème de l’amour d’alliance du livre." },
    scripture: { en: "Hosea 1–3", fr: "Hosea 1–3" },
    didYouKnow: { en: "Reading Daniel 9:20–27 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Daniel 9:20–27 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a105', levelNumber: 105, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Joel and the Spirit", fr: "Joël et l’Esprit" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a105-a', isTruth: true, text: { en: "Joel foretells that God will pour out His Spirit on all flesh.", fr: "Joël annonce que Dieu répandra son Esprit sur toute chair." } },
      { id: 'a105-b', isTruth: true, text: { en: "Sons and daughters are said to prophesy, while old men dream dreams and young men see visions.", fr: "Il est dit que les fils et les filles prophétiseront, que les vieillards auront des songes et les jeunes gens des visions." } },
      { id: 'a105-c', isTruth: true, text: { en: "The passage also mentions wonders in the heavens and earth before the great and awesome day of the LORD.", fr: "Le passage mentionne aussi des prodiges dans les cieux et sur la terre avant le grand et redoutable jour de l’Éternel." } },
      { id: 'a105-d', isTruth: false, text: { en: "The prophecy limits the Spirit exclusively to priests from the tribe of Levi.", fr: "La prophétie limite l’Esprit exclusivement aux prêtres de la tribu de Lévi." } },
    ],
    explanation: { en: "Joel explicitly broadens the promise across sons, daughters, old, young, male servants, and female servants; it is not limited to Levitical priests.", fr: "Joël élargit explicitement la promesse aux fils, filles, vieillards, jeunes gens, serviteurs et servantes ; elle n’est pas limitée aux prêtres lévitiques." },
    scripture: { en: "Joel 2:28–32", fr: "Joel 2:28–32" },
    didYouKnow: { en: "Reading Hosea 1–3 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Hosea 1–3 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a106', levelNumber: 106, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Amos and the Plumb Line", fr: "Amos et le fil à plomb" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a106-a', isTruth: false, text: { en: "The plumb line vision is presented as a promise that Israel’s sanctuaries would never face judgment.", fr: "La vision du fil à plomb est présentée comme une promesse que les sanctuaires d’Israël ne connaîtraient jamais le jugement." } },
      { id: 'a106-b', isTruth: true, text: { en: "Amos saw the Lord standing beside a wall with a plumb line.", fr: "Amos vit le Seigneur se tenant près d’un mur avec un fil à plomb." } },
      { id: 'a106-c', isTruth: true, text: { en: "The LORD says He is setting a plumb line in the midst of His people Israel.", fr: "L’Éternel dit qu’il place un fil à plomb au milieu de son peuple Israël." } },
      { id: 'a106-d', isTruth: true, text: { en: "The vision is followed by language of desolated high places and judgment against the house of Jeroboam.", fr: "La vision est suivie de paroles annonçant la désolation des hauts lieux et le jugement contre la maison de Jéroboam." } },
    ],
    explanation: { en: "The plumb line is associated with judgment, not immunity from judgment. Amos 7 announces that Israel’s sanctuaries will be laid waste.", fr: "Le fil à plomb est associé au jugement, et non à l’immunité contre le jugement. Amos 7 annonce que les sanctuaires d’Israël seront dévastés." },
    scripture: { en: "Amos 7:7–9", fr: "Amos 7:7–9" },
    didYouKnow: { en: "Reading Joel 2:28–32 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Joel 2:28–32 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a107', levelNumber: 107, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Obadiah and Edom", fr: "Abdias et Édom" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a107-a', isTruth: true, text: { en: "Obadiah announces judgment against Edom for pride and violence against Jacob.", fr: "Abdias annonce le jugement contre Édom à cause de son orgueil et de sa violence envers Jacob." } },
      { id: 'a107-b', isTruth: false, text: { en: "Obadiah praises Edom for protecting Judean refugees and refusing to hand fugitives over to enemies.", fr: "Abdias félicite Édom d’avoir protégé les réfugiés judéens et refusé de livrer les fugitifs aux ennemis." } },
      { id: 'a107-c', isTruth: true, text: { en: "Edom is condemned for standing aloof when strangers carried off Jerusalem’s wealth.", fr: "Édom est condamné pour être resté à l’écart lorsque des étrangers emportaient les richesses de Jérusalem." } },
      { id: 'a107-d', isTruth: true, text: { en: "The prophecy ends with the declaration that the kingdom shall be the LORD’s.", fr: "La prophétie se termine par la déclaration que le règne appartiendra à l’Éternel." } },
    ],
    explanation: { en: "Obadiah condemns Edom for the opposite behavior: blocking fugitives and handing survivors over in the day of distress.", fr: "Abdias condamne Édom pour le comportement opposé : arrêter les fugitifs et livrer les survivants au jour de la détresse." },
    scripture: { en: "Obadiah 1", fr: "Obadiah 1" },
    didYouKnow: { en: "Reading Amos 7:7–9 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Amos 7:7–9 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a108', levelNumber: 108, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Micah’s Bethlehem Prophecy", fr: "La prophétie de Michée sur Bethléhem" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a108-a', isTruth: true, text: { en: "Micah names Bethlehem Ephrathah as small among the clans of Judah.", fr: "Michée nomme Bethléhem Éphrata comme petite parmi les familles de Juda." } },
      { id: 'a108-b', isTruth: true, text: { en: "The passage says from Bethlehem will come forth a ruler in Israel.", fr: "Le passage dit que de Bethléhem sortira un chef en Israël." } },
      { id: 'a108-c', isTruth: false, text: { en: "Micah says the future ruler will come from Samaria and will have no connection with Bethlehem.", fr: "Michée dit que le futur chef viendra de Samarie et n’aura aucun lien avec Bethléhem." } },
      { id: 'a108-d', isTruth: true, text: { en: "The ruler is portrayed as shepherding his flock in the strength of the LORD.", fr: "Le chef est présenté comme paissant son troupeau par la force de l’Éternel." } },
    ],
    explanation: { en: "Micah explicitly identifies Bethlehem Ephrathah as the place from which the ruler will come.", fr: "Michée identifie explicitement Bethléhem Éphrata comme le lieu d’où sortira le chef." },
    scripture: { en: "Micah 5:2–5", fr: "Micah 5:2–5" },
    didYouKnow: { en: "Reading Obadiah 1 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Obadiah 1 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a109', levelNumber: 109, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Nahum and Nineveh", fr: "Nahum et Ninive" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a109-a', isTruth: true, text: { en: "Nahum’s prophecy is an oracle concerning Nineveh.", fr: "La prophétie de Nahum est un oracle concernant Ninive." } },
      { id: 'a109-b', isTruth: true, text: { en: "The book portrays the LORD as slow to anger yet great in power.", fr: "Le livre présente l’Éternel comme lent à la colère mais grand par sa puissance." } },
      { id: 'a109-c', isTruth: true, text: { en: "The prophecy describes Nineveh’s downfall with imagery of siege, violence, and shame.", fr: "La prophétie décrit la chute de Ninive avec des images de siège, de violence et de honte." } },
      { id: 'a109-d', isTruth: false, text: { en: "Nahum predicts that Nineveh will become the permanent center of worship for Judah.", fr: "Nahum prédit que Ninive deviendra le centre permanent du culte de Juda." } },
    ],
    explanation: { en: "Nahum announces Nineveh’s destruction, not its promotion as a worship center for Judah.", fr: "Nahum annonce la destruction de Ninive, et non son élévation comme centre de culte pour Juda." },
    scripture: { en: "Nahum 1–3", fr: "Nahum 1–3" },
    didYouKnow: { en: "Reading Micah 5:2 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Micah 5:2 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a110', levelNumber: 110, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Habakkuk’s Questions", fr: "Les questions d’Habacuc" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a110-a', isTruth: false, text: { en: "Habakkuk is immediately satisfied and never questions how God can use a more wicked nation to judge Judah.", fr: "Habacuc est immédiatement satisfait et ne demande jamais comment Dieu peut utiliser une nation plus méchante pour juger Juda." } },
      { id: 'a110-b', isTruth: true, text: { en: "Habakkuk begins by asking how long he must cry for help because of violence and injustice.", fr: "Habacuc commence en demandant jusqu’à quand il devra crier à cause de la violence et de l’injustice." } },
      { id: 'a110-c', isTruth: true, text: { en: "God announces that He is raising up the Chaldeans as an instrument of judgment.", fr: "Dieu annonce qu’il suscite les Chaldéens comme instrument de jugement." } },
      { id: 'a110-d', isTruth: true, text: { en: "The book includes the statement that the righteous shall live by faith.", fr: "Le livre contient l’affirmation que le juste vivra par la foi." } },
    ],
    explanation: { en: "Habakkuk does question God again, specifically wrestling with how a holy God can use the Chaldeans to swallow up those more righteous than themselves.", fr: "Habacuc interroge de nouveau Dieu, précisément sur la manière dont un Dieu saint peut utiliser les Chaldéens pour engloutir ceux qui sont plus justes qu’eux." },
    scripture: { en: "Habakkuk 1–3", fr: "Habakkuk 1–3" },
    didYouKnow: { en: "Reading Nahum 1–3 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Nahum 1–3 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a111', levelNumber: 111, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Zechariah’s Lampstand", fr: "Le chandelier de Zacharie" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a111-a', isTruth: true, text: { en: "Zechariah saw a golden lampstand with a bowl and lamps in his vision.", fr: "Zacharie vit dans sa vision un chandelier d’or avec un réservoir et des lampes." } },
      { id: 'a111-b', isTruth: false, text: { en: "The vision teaches that Zerubbabel will complete the work solely by military strength and political power.", fr: "La vision enseigne que Zorobabel achèvera l’œuvre uniquement par la force militaire et le pouvoir politique." } },
      { id: 'a111-c', isTruth: true, text: { en: "Two olive trees stood beside the lampstand.", fr: "Deux oliviers se tenaient près du chandelier." } },
      { id: 'a111-d', isTruth: true, text: { en: "The message includes, “Not by might, nor by power, but by my Spirit.”", fr: "Le message comprend : « Ce n’est ni par la puissance ni par la force, mais c’est par mon Esprit. »" } },
    ],
    explanation: { en: "Zechariah 4 explicitly contrasts human might and power with accomplishment by the LORD’s Spirit.", fr: "Zacharie 4 oppose explicitement la puissance et la force humaines à l’accomplissement par l’Esprit de l’Éternel." },
    scripture: { en: "Zechariah 4", fr: "Zechariah 4" },
    didYouKnow: { en: "Reading Habakkuk 1–3 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Habakkuk 1–3 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a112', levelNumber: 112, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Malachi and the Messenger", fr: "Malachie et le messager" }, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a112-a', isTruth: true, text: { en: "Malachi speaks of a messenger who will prepare the way before the Lord.", fr: "Malachie parle d’un messager qui préparera le chemin devant le Seigneur." } },
      { id: 'a112-b', isTruth: true, text: { en: "The Lord whom the people seek is described as suddenly coming to His temple.", fr: "Le Seigneur que le peuple cherche est décrit comme venant soudainement dans son temple." } },
      { id: 'a112-c', isTruth: false, text: { en: "The passage says the coming one will abolish all judgment and never confront injustice.", fr: "Le passage dit que celui qui vient abolira tout jugement et ne confrontera jamais l’injustice." } },
      { id: 'a112-d', isTruth: true, text: { en: "The passage compares purification to a refiner’s fire and fuller’s soap.", fr: "Le passage compare la purification au feu du fondeur et à la potasse des foulons." } },
    ],
    explanation: { en: "Malachi 3 speaks of purification and judgment, including testimony against sorcerers, adulterers, false swearers, and oppressors.", fr: "Malachie 3 parle de purification et de jugement, notamment contre les enchanteurs, les adultères, les faux témoins et les oppresseurs." },
    scripture: { en: "Malachi 3:1–5", fr: "Malachi 3:1–5" },
    didYouKnow: { en: "Reading Zechariah 4 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Zechariah 4 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a113', levelNumber: 113, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Zechariah and Elizabeth", fr: "Zacharie et Élisabeth" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a113-a', isTruth: true, text: { en: "Zechariah was a priest, and Elizabeth was descended from Aaron.", fr: "Zacharie était prêtre, et Élisabeth descendait d’Aaron." } },
      { id: 'a113-b', isTruth: true, text: { en: "Gabriel announced that Elizabeth would bear a son who was to be named John.", fr: "Gabriel annonça qu’Élisabeth enfanterait un fils qui devait être appelé Jean." } },
      { id: 'a113-c', isTruth: true, text: { en: "Zechariah’s speech returned after he confirmed in writing that the child’s name was John.", fr: "Zacharie retrouva la parole après avoir confirmé par écrit que l’enfant s’appelait Jean." } },
      { id: 'a113-d', isTruth: false, text: { en: "Zechariah immediately believed Gabriel without hesitation and remained able to speak throughout Elizabeth’s pregnancy.", fr: "Zacharie crut immédiatement Gabriel sans hésitation et conserva la parole pendant toute la grossesse d’Élisabeth." } },
    ],
    explanation: { en: "Because Zechariah questioned the sign, Gabriel told him he would be silent until the promise was fulfilled.", fr: "Parce que Zacharie demanda un signe, Gabriel lui annonça qu’il resterait muet jusqu’à l’accomplissement de la promesse." },
    scripture: { en: "Luke 1:5–25; 57–80", fr: "Luke 1:5–25; 57–80" },
    didYouKnow: { en: "Reading Malachi 3:1 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Malachi 3:1 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a114', levelNumber: 114, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Simeon and Anna", fr: "Siméon et Anne" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a114-a', isTruth: false, text: { en: "Anna was a young newly married woman who left the temple immediately after seeing Jesus.", fr: "Anne était une jeune femme nouvellement mariée qui quitta immédiatement le temple après avoir vu Jésus." } },
      { id: 'a114-b', isTruth: true, text: { en: "Simeon was told by the Holy Spirit that he would not see death before seeing the Lord’s Christ.", fr: "Le Saint-Esprit avait révélé à Siméon qu’il ne mourrait pas avant d’avoir vu le Christ du Seigneur." } },
      { id: 'a114-c', isTruth: true, text: { en: "Simeon took the infant Jesus in his arms and blessed God.", fr: "Siméon prit Jésus enfant dans ses bras et bénit Dieu." } },
      { id: 'a114-d', isTruth: true, text: { en: "Anna is described as an elderly prophetess who spoke about Jesus to those awaiting Jerusalem’s redemption.", fr: "Anne est décrite comme une prophétesse âgée qui parla de Jésus à ceux qui attendaient la délivrance de Jérusalem." } },
    ],
    explanation: { en: "Luke describes Anna as an elderly widow devoted to worship, fasting, and prayer, not as a newly married young woman.", fr: "Luc décrit Anne comme une veuve âgée consacrée au culte, au jeûne et à la prière, et non comme une jeune femme nouvellement mariée." },
    scripture: { en: "Luke 2:22–38", fr: "Luke 2:22–38" },
    didYouKnow: { en: "Reading Luke 1:5–25 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Luke 1:5–25 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a115', levelNumber: 115, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Jesus at Nazareth", fr: "Jésus à Nazareth" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a115-a', isTruth: true, text: { en: "Jesus read from the scroll of Isaiah in the synagogue at Nazareth.", fr: "Jésus lut le rouleau d’Ésaïe dans la synagogue de Nazareth." } },
      { id: 'a115-b', isTruth: false, text: { en: "The congregation unanimously crowned Jesus king after hearing His message.", fr: "L’assemblée couronna unanimement Jésus roi après avoir entendu son message." } },
      { id: 'a115-c', isTruth: true, text: { en: "He declared that the Scripture had been fulfilled in their hearing.", fr: "Il déclara que cette Écriture était accomplie devant eux." } },
      { id: 'a115-d', isTruth: true, text: { en: "The people eventually became furious and drove Jesus toward the brow of the hill, intending to throw Him down.", fr: "Le peuple finit par se mettre en colère et conduisit Jésus jusqu’au sommet de la colline avec l’intention de le précipiter en bas." } },
    ],
    explanation: { en: "The response turned hostile, not royal. The crowd attempted to drive Jesus out and throw Him from the hill.", fr: "La réaction devint hostile, et non royale. La foule tenta de chasser Jésus et de le précipiter du haut de la colline." },
    scripture: { en: "Luke 4:16–30", fr: "Luke 4:16–30" },
    didYouKnow: { en: "Reading Luke 2:22–38 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Luke 2:22–38 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a116', levelNumber: 116, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Centurion’s Servant", fr: "Le serviteur du centurion" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a116-a', isTruth: true, text: { en: "A centurion sought Jesus’ help for a seriously ill servant.", fr: "Un centurion demanda l’aide de Jésus pour un serviteur gravement malade." } },
      { id: 'a116-b', isTruth: true, text: { en: "The centurion expressed confidence that Jesus could heal by speaking a word.", fr: "Le centurion exprima sa confiance que Jésus pouvait guérir par une simple parole." } },
      { id: 'a116-c', isTruth: false, text: { en: "Jesus rebuked the centurion for lacking faith and refused to help because he was a Gentile.", fr: "Jésus reprit le centurion pour son manque de foi et refusa de l’aider parce qu’il était non juif." } },
      { id: 'a116-d', isTruth: true, text: { en: "Jesus marveled at the centurion’s faith and the servant was healed.", fr: "Jésus admira la foi du centurion et le serviteur fut guéri." } },
    ],
    explanation: { en: "Jesus praised the centurion’s extraordinary faith rather than rebuking him for unbelief.", fr: "Jésus loua la foi remarquable du centurion au lieu de le reprendre pour incrédulité." },
    scripture: { en: "Matthew 8:5–13; Luke 7:1–10", fr: "Matthew 8:5–13; Luke 7:1–10" },
    didYouKnow: { en: "Reading Luke 4:16–30 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Luke 4:16–30 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a117', levelNumber: 117, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Transfiguration", fr: "La transfiguration" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a117-a', isTruth: true, text: { en: "Jesus took Peter, James, and John up a high mountain.", fr: "Jésus prit Pierre, Jacques et Jean avec lui sur une haute montagne." } },
      { id: 'a117-b', isTruth: true, text: { en: "Moses and Elijah appeared and spoke with Jesus.", fr: "Moïse et Élie apparurent et parlèrent avec Jésus." } },
      { id: 'a117-c', isTruth: true, text: { en: "A voice from the cloud identified Jesus as the beloved Son and commanded the disciples to listen to Him.", fr: "Une voix venant de la nuée identifia Jésus comme le Fils bien-aimé et ordonna aux disciples de l’écouter." } },
      { id: 'a117-d', isTruth: false, text: { en: "Peter proposed building four shelters—one each for Jesus, Moses, Elijah, and himself.", fr: "Pierre proposa de construire quatre tentes — une pour Jésus, une pour Moïse, une pour Élie et une pour lui-même." } },
    ],
    explanation: { en: "Peter proposed three shelters: one for Jesus, one for Moses, and one for Elijah—not four.", fr: "Pierre proposa trois tentes : une pour Jésus, une pour Moïse et une pour Élie — et non quatre." },
    scripture: { en: "Matthew 17:1–8", fr: "Matthew 17:1–8" },
    didYouKnow: { en: "Reading Matthew 8:5–13 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Matthew 8:5–13 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a118', levelNumber: 118, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Temple Tax", fr: "L’impôt du temple" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a118-a', isTruth: false, text: { en: "Jesus instructed Peter to sell his fishing boat to pay the tax for the entire group of disciples.", fr: "Jésus ordonna à Pierre de vendre sa barque afin de payer l’impôt pour tout le groupe des disciples." } },
      { id: 'a118-b', isTruth: true, text: { en: "Collectors asked Peter whether Jesus paid the temple tax.", fr: "Les collecteurs demandèrent à Pierre si Jésus payait l’impôt du temple." } },
      { id: 'a118-c', isTruth: true, text: { en: "Jesus discussed with Peter whether kings collect duties from their sons or from others.", fr: "Jésus parla avec Pierre de la question de savoir si les rois perçoivent les taxes de leurs fils ou des autres." } },
      { id: 'a118-d', isTruth: true, text: { en: "Jesus told Peter to find a coin in the mouth of the first fish he caught and use it for both of them.", fr: "Jésus dit à Pierre de trouver une pièce dans la bouche du premier poisson qu’il prendrait et de l’utiliser pour eux deux." } },
    ],
    explanation: { en: "Jesus did not tell Peter to sell his boat. The payment was supplied through the coin found in the fish’s mouth.", fr: "Jésus ne dit pas à Pierre de vendre sa barque. Le paiement fut fourni par la pièce trouvée dans la bouche du poisson." },
    scripture: { en: "Matthew 17:24–27", fr: "Matthew 17:24–27" },
    didYouKnow: { en: "Reading Matthew 17:1–8 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Matthew 17:1–8 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a119', levelNumber: 119, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Unforgiving Servant", fr: "Le serviteur impitoyable" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a119-a', isTruth: true, text: { en: "Jesus told the parable after Peter asked how often he should forgive a brother who sins against him.", fr: "Jésus raconta la parabole après que Pierre eut demandé combien de fois il devait pardonner à un frère qui péchait contre lui." } },
      { id: 'a119-b', isTruth: false, text: { en: "The forgiven servant then immediately forgave a fellow servant’s much smaller debt.", fr: "Le serviteur pardonné remit immédiatement la dette beaucoup plus petite d’un autre serviteur." } },
      { id: 'a119-c', isTruth: true, text: { en: "A king forgave a servant an enormous debt after the servant pleaded for patience.", fr: "Un roi remit une dette énorme à un serviteur après que celui-ci eut demandé patience." } },
      { id: 'a119-d', isTruth: true, text: { en: "When the king learned what happened, he condemned the unforgiving servant.", fr: "Lorsque le roi apprit ce qui s’était passé, il condamna le serviteur impitoyable." } },
    ],
    explanation: { en: "The servant who had received mercy refused to extend mercy. He seized his fellow servant and had him imprisoned over the smaller debt.", fr: "Le serviteur qui avait reçu miséricorde refusa de faire miséricorde. Il saisit son compagnon et le fit jeter en prison pour la dette beaucoup plus petite." },
    scripture: { en: "Matthew 18:21–35", fr: "Matthew 18:21–35" },
    didYouKnow: { en: "Reading Matthew 17:24–27 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Matthew 17:24–27 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a120', levelNumber: 120, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Workers in the Vineyard", fr: "Les ouvriers de la vigne" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a120-a', isTruth: true, text: { en: "A landowner hired workers at several different times during the day.", fr: "Un propriétaire embaucha des ouvriers à plusieurs moments différents de la journée." } },
      { id: 'a120-b', isTruth: true, text: { en: "Those hired last worked only a short time but received the same standard daily wage as those hired first.", fr: "Ceux qui furent embauchés les derniers ne travaillèrent que peu de temps mais reçurent le même salaire journalier que les premiers." } },
      { id: 'a120-c', isTruth: false, text: { en: "The workers hired first received twelve times more money than those hired last.", fr: "Les ouvriers embauchés les premiers reçurent douze fois plus d’argent que ceux embauchés les derniers." } },
      { id: 'a120-d', isTruth: true, text: { en: "The landowner defended his generosity and said he had not wronged those who agreed to the original wage.", fr: "Le propriétaire défendit sa générosité et déclara n’avoir fait aucun tort à ceux qui avaient accepté le salaire convenu." } },
    ],
    explanation: { en: "The central surprise of the parable is that the workers received the same wage despite very different hours worked.", fr: "La surprise centrale de la parabole est que les ouvriers reçurent le même salaire malgré des durées de travail très différentes." },
    scripture: { en: "Matthew 20:1–16", fr: "Matthew 20:1–16" },
    didYouKnow: { en: "Reading Matthew 18:21–35 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Matthew 18:21–35 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a121', levelNumber: 121, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Ten Virgins", fr: "Les dix vierges" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a121-a', isTruth: true, text: { en: "Ten virgins took their lamps to meet the bridegroom.", fr: "Dix vierges prirent leurs lampes pour aller à la rencontre de l’époux." } },
      { id: 'a121-b', isTruth: true, text: { en: "Five were wise and brought extra oil, while five were foolish and did not.", fr: "Cinq étaient sages et prirent de l’huile supplémentaire, tandis que cinq étaient folles et n’en prirent pas." } },
      { id: 'a121-c', isTruth: true, text: { en: "The bridegroom arrived at midnight, and the unprepared virgins were away buying oil when the door was shut.", fr: "L’époux arriva à minuit, et les vierges non préparées étaient parties acheter de l’huile lorsque la porte fut fermée." } },
      { id: 'a121-d', isTruth: false, text: { en: "The bridegroom arrived at sunrise exactly when everyone expected him.", fr: "L’époux arriva au lever du soleil exactement au moment où tout le monde l’attendait." } },
    ],
    explanation: { en: "The parable emphasizes delay and unexpected arrival. The cry announcing the bridegroom came at midnight.", fr: "La parabole souligne le retard et l’arrivée inattendue. Le cri annonçant l’époux retentit à minuit." },
    scripture: { en: "Matthew 25:1–13", fr: "Matthew 25:1–13" },
    didYouKnow: { en: "Reading Matthew 20:1–16 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Matthew 20:1–16 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a122', levelNumber: 122, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Sheep and the Goats", fr: "Les brebis et les boucs" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a122-a', isTruth: false, text: { en: "The judgment is based on whether people correctly predicted the exact date of the Son of Man’s return.", fr: "Le jugement repose sur la capacité des personnes à prédire correctement la date exacte du retour du Fils de l’homme." } },
      { id: 'a122-b', isTruth: true, text: { en: "The Son of Man is pictured coming in glory and sitting on His glorious throne.", fr: "Le Fils de l’homme est présenté venant dans sa gloire et s’asseyant sur son trône glorieux." } },
      { id: 'a122-c', isTruth: true, text: { en: "People are separated as a shepherd separates sheep from goats.", fr: "Les personnes sont séparées comme un berger sépare les brebis des boucs." } },
      { id: 'a122-d', isTruth: true, text: { en: "The passage highlights acts such as feeding the hungry, welcoming strangers, clothing the naked, and visiting the sick or imprisoned.", fr: "Le passage met en avant des actes comme nourrir ceux qui ont faim, accueillir l’étranger, vêtir celui qui est nu et visiter les malades ou les prisonniers." } },
    ],
    explanation: { en: "The passage does not test date-setting. It focuses on how people treated “the least of these” in concrete acts of mercy.", fr: "Le passage ne porte pas sur la fixation d’une date. Il met l’accent sur la manière dont les personnes ont traité « les plus petits » par des actes concrets de miséricorde." },
    scripture: { en: "Matthew 25:31–46", fr: "Matthew 25:31–46" },
    didYouKnow: { en: "Reading Matthew 25:1–13 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Matthew 25:1–13 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a123', levelNumber: 123, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Widow’s Offering", fr: "L’offrande de la veuve" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a123-a', isTruth: true, text: { en: "Jesus watched people putting money into the temple treasury.", fr: "Jésus regardait les gens déposer de l’argent dans le trésor du temple." } },
      { id: 'a123-b', isTruth: false, text: { en: "Jesus said the rich contributors had given more than the widow because their total amount was larger.", fr: "Jésus dit que les riches avaient donné davantage que la veuve parce que leur montant total était plus élevé." } },
      { id: 'a123-c', isTruth: true, text: { en: "Many rich people put in large sums.", fr: "Beaucoup de riches déposèrent de grosses sommes." } },
      { id: 'a123-d', isTruth: true, text: { en: "Jesus said the widow gave more because she gave out of her poverty, all she had to live on.", fr: "Jésus dit que la veuve avait donné davantage parce qu’elle avait donné de sa pauvreté, tout ce qu’elle possédait pour vivre." } },
    ],
    explanation: { en: "Jesus evaluated the gift by sacrifice, not merely by amount. The widow’s two small coins represented all she had.", fr: "Jésus évalua le don selon le sacrifice, et non seulement selon le montant. Les deux petites pièces de la veuve représentaient tout ce qu’elle possédait." },
    scripture: { en: "Mark 12:41–44", fr: "Mark 12:41–44" },
    didYouKnow: { en: "Reading Matthew 25:31–46 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Matthew 25:31–46 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a124', levelNumber: 124, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Road to Emmaus", fr: "Le chemin d’Emmaüs" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a124-a', isTruth: true, text: { en: "Two disciples were traveling to Emmaus on the day of the resurrection.", fr: "Deux disciples se rendaient à Emmaüs le jour de la résurrection." } },
      { id: 'a124-b', isTruth: true, text: { en: "Jesus joined them, but they were initially kept from recognizing Him.", fr: "Jésus les rejoignit, mais ils furent d’abord empêchés de le reconnaître." } },
      { id: 'a124-c', isTruth: false, text: { en: "They recognized Jesus immediately when He first asked what they were discussing.", fr: "Ils reconnurent Jésus immédiatement lorsqu’il leur demanda de quoi ils parlaient." } },
      { id: 'a124-d', isTruth: true, text: { en: "Their eyes were opened and they recognized Him when He broke bread with them.", fr: "Leurs yeux s’ouvrirent et ils le reconnurent lorsqu’il rompit le pain avec eux." } },
    ],
    explanation: { en: "The disciples did not recognize Jesus at first. Recognition came later, at the breaking of bread.", fr: "Les disciples ne reconnurent pas Jésus au début. La reconnaissance vint plus tard, lors de la fraction du pain." },
    scripture: { en: "Luke 24:13–35", fr: "Luke 24:13–35" },
    didYouKnow: { en: "Reading Mark 12:41–44 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Mark 12:41–44 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a125', levelNumber: 125, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Nicodemus", fr: "Nicodème" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a125-a', isTruth: true, text: { en: "Nicodemus was a Pharisee and a ruler of the Jews.", fr: "Nicodème était pharisien et chef des Juifs." } },
      { id: 'a125-b', isTruth: true, text: { en: "He came to Jesus by night.", fr: "Il vint de nuit auprès de Jésus." } },
      { id: 'a125-c', isTruth: true, text: { en: "Jesus spoke to him about being born of water and Spirit and about the Son of Man being lifted up.", fr: "Jésus lui parla de naître d’eau et d’Esprit et du Fils de l’homme qui devait être élevé." } },
      { id: 'a125-d', isTruth: false, text: { en: "Nicodemus immediately understood Jesus’ teaching about being born again and needed no clarification.", fr: "Nicodème comprit immédiatement l’enseignement de Jésus sur la nouvelle naissance et n’eut besoin d’aucune clarification." } },
    ],
    explanation: { en: "Nicodemus was confused by the language of being born again and asked how such a birth could happen.", fr: "Nicodème fut déconcerté par le langage de la nouvelle naissance et demanda comment une telle naissance pouvait avoir lieu." },
    scripture: { en: "John 3:1–21", fr: "John 3:1–21" },
    didYouKnow: { en: "Reading Luke 24:13–35 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Luke 24:13–35 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a126', levelNumber: 126, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Samaritan Woman", fr: "La femme samaritaine" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a126-a', isTruth: false, text: { en: "The woman kept the encounter secret and refused to tell anyone in her town about Jesus.", fr: "La femme garda la rencontre secrète et refusa de parler de Jésus à qui que ce soit dans sa ville." } },
      { id: 'a126-b', isTruth: true, text: { en: "Jesus spoke with a Samaritan woman at Jacob’s well near Sychar.", fr: "Jésus parla avec une Samaritaine au puits de Jacob près de Sychar." } },
      { id: 'a126-c', isTruth: true, text: { en: "Jesus revealed knowledge of her marital history.", fr: "Jésus manifesta une connaissance de son histoire conjugale." } },
      { id: 'a126-d', isTruth: true, text: { en: "Many Samaritans from the town believed because of her testimony and later because of Jesus’ own words.", fr: "Beaucoup de Samaritains de la ville crurent à cause de son témoignage, puis à cause des paroles de Jésus lui-même." } },
    ],
    explanation: { en: "The woman left her water jar, went into the town, and invited people to come see the man who had told her what she had done.", fr: "La femme laissa sa cruche, alla dans la ville et invita les gens à venir voir l’homme qui lui avait dit ce qu’elle avait fait." },
    scripture: { en: "John 4:1–42", fr: "John 4:1–42" },
    didYouKnow: { en: "Reading John 3:1–21 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de John 3:1–21 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a127', levelNumber: 127, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Pool of Bethesda", fr: "La piscine de Béthesda" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a127-a', isTruth: true, text: { en: "Jesus met a man who had been disabled for thirty-eight years.", fr: "Jésus rencontra un homme malade depuis trente-huit ans." } },
      { id: 'a127-b', isTruth: false, text: { en: "Jesus told the man to wait until an angel stirred the water and then be the first to enter the pool.", fr: "Jésus dit à l’homme d’attendre qu’un ange agite l’eau puis d’être le premier à entrer dans la piscine." } },
      { id: 'a127-c', isTruth: true, text: { en: "Jesus asked the man whether he wanted to be healed.", fr: "Jésus demanda à l’homme s’il voulait être guéri." } },
      { id: 'a127-d', isTruth: true, text: { en: "Jesus told him to get up, take his mat, and walk, and the man was healed.", fr: "Jésus lui dit de se lever, de prendre son lit et de marcher, et l’homme fut guéri." } },
    ],
    explanation: { en: "Jesus did not base the healing on entering the pool. He healed the man directly by His command.", fr: "Jésus ne fit pas dépendre la guérison de l’entrée dans la piscine. Il guérit directement l’homme par sa parole." },
    scripture: { en: "John 5:1–18", fr: "John 5:1–18" },
    didYouKnow: { en: "Reading John 4:1–42 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de John 4:1–42 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a128', levelNumber: 128, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Bread of Life", fr: "Le pain de vie" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a128-a', isTruth: true, text: { en: "Jesus spoke about the bread of life after the feeding of the multitude.", fr: "Jésus parla du pain de vie après avoir nourri la foule." } },
      { id: 'a128-b', isTruth: true, text: { en: "He contrasted perishable food with food that endures to eternal life.", fr: "Il opposa la nourriture qui périt à celle qui subsiste pour la vie éternelle." } },
      { id: 'a128-c', isTruth: false, text: { en: "Every disciple welcomed the teaching enthusiastically, and none stopped following Jesus afterward.", fr: "Tous les disciples accueillirent l’enseignement avec enthousiasme, et aucun ne cessa ensuite de suivre Jésus." } },
      { id: 'a128-d', isTruth: true, text: { en: "John says many disciples turned back and no longer walked with Jesus after the difficult teaching.", fr: "Jean dit que beaucoup de disciples se retirèrent et ne marchèrent plus avec Jésus après cet enseignement difficile." } },
    ],
    explanation: { en: "The discourse produced division. John 6:66 explicitly says many disciples turned back and no longer followed Jesus.", fr: "Le discours provoqua une division. Jean 6:66 dit explicitement que beaucoup de disciples se retirèrent et ne suivirent plus Jésus." },
    scripture: { en: "John 6:22–71", fr: "John 6:22–71" },
    didYouKnow: { en: "Reading John 5:1–18 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de John 5:1–18 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a129', levelNumber: 129, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Man Born Blind", fr: "L’aveugle-né" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a129-a', isTruth: true, text: { en: "The man had been blind from birth.", fr: "L’homme était aveugle de naissance." } },
      { id: 'a129-b', isTruth: true, text: { en: "Jesus made mud, put it on the man’s eyes, and told him to wash in the pool of Siloam.", fr: "Jésus fit de la boue, l’appliqua sur les yeux de l’homme et lui dit d’aller se laver à la piscine de Siloé." } },
      { id: 'a129-c', isTruth: true, text: { en: "The healed man was questioned repeatedly and eventually put out.", fr: "L’homme guéri fut interrogé à plusieurs reprises et finit par être chassé." } },
      { id: 'a129-d', isTruth: false, text: { en: "The Pharisees immediately accepted the healing as proof that Jesus must be from God.", fr: "Les pharisiens acceptèrent immédiatement la guérison comme preuve que Jésus devait venir de Dieu." } },
    ],
    explanation: { en: "The healing intensified controversy. Some Pharisees objected because it occurred on the Sabbath, and the healed man was eventually expelled.", fr: "La guérison intensifia la controverse. Certains pharisiens s’opposèrent parce qu’elle avait eu lieu le sabbat, et l’homme guéri fut finalement chassé." },
    scripture: { en: "John 9", fr: "John 9" },
    didYouKnow: { en: "Reading John 6:22–71 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de John 6:22–71 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a130', levelNumber: 130, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Jesus Washes the Disciples’ Feet", fr: "Jésus lave les pieds des disciples" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a130-a', isTruth: false, text: { en: "Peter immediately insisted that Jesus wash not only his feet but also the feet of every person in Jerusalem.", fr: "Pierre insista immédiatement pour que Jésus lave non seulement ses pieds mais aussi ceux de tous les habitants de Jérusalem." } },
      { id: 'a130-b', isTruth: true, text: { en: "Jesus rose from supper, laid aside His outer garments, and wrapped a towel around Himself.", fr: "Jésus se leva du repas, ôta ses vêtements de dessus et se ceignit d’un linge." } },
      { id: 'a130-c', isTruth: true, text: { en: "Peter first objected to Jesus washing his feet, then asked for hands and head as well after Jesus responded.", fr: "Pierre s’opposa d’abord à ce que Jésus lui lave les pieds, puis demanda aussi les mains et la tête après la réponse de Jésus." } },
      { id: 'a130-d', isTruth: true, text: { en: "Jesus presented His action as an example that the disciples should follow in serving one another.", fr: "Jésus présenta son geste comme un exemple que les disciples devaient suivre en se servant les uns les autres." } },
    ],
    explanation: { en: "Peter’s reaction concerned himself: he first refused, then asked for his hands and head also. He did not ask Jesus to wash all Jerusalem.", fr: "La réaction de Pierre le concernait lui-même : il refusa d’abord, puis demanda aussi les mains et la tête. Il ne demanda pas à Jésus de laver les pieds de tout Jérusalem." },
    scripture: { en: "John 13:1–17", fr: "John 13:1–17" },
    didYouKnow: { en: "Reading John 9 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de John 9 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a131', levelNumber: 131, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Matthias Chosen", fr: "Matthias choisi" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a131-a', isTruth: true, text: { en: "Peter addressed about 120 believers concerning the vacancy left by Judas.", fr: "Pierre s’adressa à environ 120 croyants au sujet de la place laissée vacante par Judas." } },
      { id: 'a131-b', isTruth: false, text: { en: "The apostles elected Matthias by a public majority vote after several days of campaigning.", fr: "Les apôtres élurent Matthias par un vote public majoritaire après plusieurs jours de campagne." } },
      { id: 'a131-c', isTruth: true, text: { en: "Two men were put forward: Joseph called Barsabbas, surnamed Justus, and Matthias.", fr: "Deux hommes furent présentés : Joseph appelé Barsabbas, surnommé Justus, et Matthias." } },
      { id: 'a131-d', isTruth: true, text: { en: "After prayer, lots were cast, and the lot fell to Matthias.", fr: "Après la prière, on tira au sort, et le sort tomba sur Matthias." } },
    ],
    explanation: { en: "Acts describes prayer and casting lots, not political campaigning or a majority election.", fr: "Les Actes décrivent la prière et le tirage au sort, et non une campagne politique ou une élection à la majorité." },
    scripture: { en: "Acts 1:15–26", fr: "Acts 1:15–26" },
    didYouKnow: { en: "Reading John 13:1–17 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de John 13:1–17 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a132', levelNumber: 132, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Ananias and Sapphira", fr: "Ananias et Saphira" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a132-a', isTruth: true, text: { en: "Ananias and Sapphira sold a piece of property.", fr: "Ananias et Saphira vendirent une propriété." } },
      { id: 'a132-b', isTruth: true, text: { en: "They kept back part of the proceeds while presenting the gift in a misleading way.", fr: "Ils gardèrent une partie du prix tout en présentant le don de manière trompeuse." } },
      { id: 'a132-c', isTruth: false, text: { en: "Peter condemned them because Christians were absolutely forbidden to own or sell private property.", fr: "Pierre les condamna parce qu’il était absolument interdit aux chrétiens de posséder ou de vendre des biens privés." } },
      { id: 'a132-d', isTruth: true, text: { en: "Both Ananias and Sapphira died after separately lying about the transaction.", fr: "Ananias et Saphira moururent tous deux après avoir menti séparément au sujet de la transaction." } },
    ],
    explanation: { en: "Peter explicitly says the property was theirs before it was sold and the money was at their disposal afterward. The sin was deceit, not private ownership.", fr: "Pierre dit explicitement que la propriété leur appartenait avant la vente et que l’argent restait à leur disposition après. Le péché était la tromperie, non la propriété privée." },
    scripture: { en: "Acts 5:1–11", fr: "Acts 5:1–11" },
    didYouKnow: { en: "Reading Acts 1:15–26 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Acts 1:15–26 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a133', levelNumber: 133, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Gamaliel’s Counsel", fr: "Le conseil de Gamaliel" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a133-a', isTruth: true, text: { en: "Gamaliel was a Pharisee and respected teacher of the law.", fr: "Gamaliel était pharisien et docteur de la loi respecté." } },
      { id: 'a133-b', isTruth: true, text: { en: "He referred to earlier movements associated with Theudas and Judas the Galilean.", fr: "Il évoqua des mouvements antérieurs associés à Theudas et Judas le Galiléen." } },
      { id: 'a133-c', isTruth: true, text: { en: "He reasoned that if the movement were merely human it would fail, but if it were from God they could not overthrow it.", fr: "Il raisonna que si le mouvement était d’origine humaine, il échouerait, mais que s’il venait de Dieu, ils ne pourraient le renverser." } },
      { id: 'a133-d', isTruth: false, text: { en: "Gamaliel urged the council to execute the apostles immediately before their movement could grow.", fr: "Gamaliel exhorta le conseil à exécuter immédiatement les apôtres avant que leur mouvement ne grandisse." } },
    ],
    explanation: { en: "Gamaliel advised restraint, not immediate execution. The council accepted his advice sufficiently to release the apostles after beating them.", fr: "Gamaliel conseilla la retenue, et non l’exécution immédiate. Le conseil suivit suffisamment son avis pour relâcher les apôtres après les avoir battus." },
    scripture: { en: "Acts 5:33–40", fr: "Acts 5:33–40" },
    didYouKnow: { en: "Reading Acts 5:1–11 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Acts 5:1–11 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a134', levelNumber: 134, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Philip and the Ethiopian", fr: "Philippe et l’Éthiopien" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a134-a', isTruth: false, text: { en: "Philip refused to explain the passage until the official first became circumcised.", fr: "Philippe refusa d’expliquer le passage tant que le fonctionnaire ne se serait pas d’abord fait circoncire." } },
      { id: 'a134-b', isTruth: true, text: { en: "An angel directed Philip toward the road from Jerusalem to Gaza.", fr: "Un ange dirigea Philippe vers la route de Jérusalem à Gaza." } },
      { id: 'a134-c', isTruth: true, text: { en: "The Ethiopian official was reading the prophet Isaiah in his chariot.", fr: "Le fonctionnaire éthiopien lisait le prophète Ésaïe dans son char." } },
      { id: 'a134-d', isTruth: true, text: { en: "Philip began with that Scripture and preached the good news about Jesus, after which the official was baptized.", fr: "Philippe commença par ce passage et annonça la bonne nouvelle de Jésus, après quoi le fonctionnaire fut baptisé." } },
    ],
    explanation: { en: "Acts records Philip explaining Isaiah and proclaiming Jesus without imposing circumcision as a prerequisite.", fr: "Les Actes rapportent que Philippe expliqua Ésaïe et annonça Jésus sans imposer la circoncision comme préalable." },
    scripture: { en: "Acts 8:26–40", fr: "Acts 8:26–40" },
    didYouKnow: { en: "Reading Acts 5:33–40 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Acts 5:33–40 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a135', levelNumber: 135, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Peter and Cornelius", fr: "Pierre et Corneille" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a135-a', isTruth: true, text: { en: "Cornelius was a centurion described as devout and God-fearing.", fr: "Corneille était un centurion décrit comme pieux et craignant Dieu." } },
      { id: 'a135-b', isTruth: false, text: { en: "Peter refused to enter Cornelius’s house because Gentiles could never receive the Holy Spirit.", fr: "Pierre refusa d’entrer chez Corneille parce que les non-Juifs ne pouvaient jamais recevoir le Saint-Esprit." } },
      { id: 'a135-c', isTruth: true, text: { en: "Peter received a vision involving a sheet containing various animals.", fr: "Pierre reçut une vision impliquant une nappe contenant divers animaux." } },
      { id: 'a135-d', isTruth: true, text: { en: "While Peter was speaking, the Holy Spirit fell on the Gentile hearers, astonishing the Jewish believers who had come with him.", fr: "Pendant que Pierre parlait, le Saint-Esprit descendit sur les auditeurs non juifs, étonnant les croyants juifs qui l’accompagnaient." } },
    ],
    explanation: { en: "Peter did enter Cornelius’s house, and Acts emphasizes that the Holy Spirit came upon the Gentile hearers.", fr: "Pierre entra bien chez Corneille, et les Actes soulignent que le Saint-Esprit descendit sur les auditeurs non juifs." },
    scripture: { en: "Acts 10", fr: "Acts 10" },
    didYouKnow: { en: "Reading Acts 8:26–40 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Acts 8:26–40 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a136', levelNumber: 136, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Jerusalem Council", fr: "Le concile de Jérusalem" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a136-a', isTruth: true, text: { en: "The controversy concerned whether Gentile believers had to be circumcised according to the custom of Moses.", fr: "La controverse portait sur la question de savoir si les croyants non juifs devaient être circoncis selon la coutume de Moïse." } },
      { id: 'a136-b', isTruth: true, text: { en: "Peter reminded the assembly that God had given the Holy Spirit to Gentile believers.", fr: "Pierre rappela à l’assemblée que Dieu avait donné le Saint-Esprit aux croyants non juifs." } },
      { id: 'a136-c', isTruth: false, text: { en: "The council concluded that Gentiles could not be saved unless they first became full Jewish proselytes.", fr: "Le concile conclut que les non-Juifs ne pouvaient être sauvés qu’en devenant d’abord des prosélytes juifs à part entière." } },
      { id: 'a136-d', isTruth: true, text: { en: "James proposed a letter asking Gentile believers to abstain from several practices while not imposing circumcision as a condition of salvation.", fr: "Jacques proposa une lettre demandant aux croyants non juifs de s’abstenir de plusieurs pratiques sans imposer la circoncision comme condition du salut." } },
    ],
    explanation: { en: "The council rejected the claim that circumcision was required for Gentile salvation and sent a letter reflecting that decision.", fr: "Le concile rejeta l’idée que la circoncision était nécessaire au salut des non-Juifs et envoya une lettre reflétant cette décision." },
    scripture: { en: "Acts 15", fr: "Acts 15" },
    didYouKnow: { en: "Reading Acts 10 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Acts 10 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a137', levelNumber: 137, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Paul at the Areopagus", fr: "Paul à l’Aréopage" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a137-a', isTruth: true, text: { en: "Paul was distressed by the many idols he saw in Athens.", fr: "Paul fut profondément irrité par le grand nombre d’idoles qu’il vit à Athènes." } },
      { id: 'a137-b', isTruth: true, text: { en: "He referred to an altar bearing the inscription “To an unknown god.”", fr: "Il fit référence à un autel portant l’inscription « À un dieu inconnu »." } },
      { id: 'a137-c', isTruth: true, text: { en: "Paul proclaimed the Creator, called for repentance, and spoke of a coming judgment through a man God raised from the dead.", fr: "Paul proclama le Créateur, appela à la repentance et parla d’un jugement à venir par un homme que Dieu avait ressuscité des morts." } },
      { id: 'a137-d', isTruth: false, text: { en: "Paul praised the Athenians for worshiping idols and told them no change in belief was necessary.", fr: "Paul félicita les Athéniens d’adorer des idoles et leur dit qu’aucun changement de croyance n’était nécessaire." } },
    ],
    explanation: { en: "Paul used the altar as a point of contact but challenged idolatry and called his hearers to repentance.", fr: "Paul utilisa l’autel comme point de contact mais confronta l’idolâtrie et appela ses auditeurs à la repentance." },
    scripture: { en: "Acts 17:16–34", fr: "Acts 17:16–34" },
    didYouKnow: { en: "Reading Acts 15 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Acts 15 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a138', levelNumber: 138, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Eutychus", fr: "Eutychus" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a138-a', isTruth: false, text: { en: "Eutychus fell from a first-floor doorway and suffered only a minor bruise.", fr: "Eutychus tomba d’une porte du rez-de-chaussée et ne souffrit que d’une légère contusion." } },
      { id: 'a138-b', isTruth: true, text: { en: "Paul was speaking to believers at Troas on the first day of the week.", fr: "Paul parlait aux croyants à Troas le premier jour de la semaine." } },
      { id: 'a138-c', isTruth: true, text: { en: "Eutychus was sitting in a window and sank into deep sleep during Paul’s extended speech.", fr: "Eutychus était assis à une fenêtre et tomba dans un profond sommeil pendant le long discours de Paul." } },
      { id: 'a138-d', isTruth: true, text: { en: "He fell from the third story and was taken up dead, but Paul embraced him and he was later brought home alive.", fr: "Il tomba du troisième étage et fut relevé mort, mais Paul le prit dans ses bras et il fut ensuite ramené vivant." } },
    ],
    explanation: { en: "Acts specifies a third-story fall and says Eutychus was taken up dead, making the event far more serious than a minor injury.", fr: "Les Actes précisent une chute du troisième étage et disent qu’Eutychus fut relevé mort, ce qui rend l’événement bien plus grave qu’une simple blessure." },
    scripture: { en: "Acts 20:7–12", fr: "Acts 20:7–12" },
    didYouKnow: { en: "Reading Acts 17:16–34 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Acts 17:16–34 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a139', levelNumber: 139, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Paul Before Agrippa", fr: "Paul devant Agrippa" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a139-a', isTruth: true, text: { en: "Paul presented his defense before King Agrippa and Bernice.", fr: "Paul présenta sa défense devant le roi Agrippa et Bérénice." } },
      { id: 'a139-b', isTruth: false, text: { en: "Agrippa ordered Paul executed immediately after hearing his defense.", fr: "Agrippa ordonna l’exécution immédiate de Paul après avoir entendu sa défense." } },
      { id: 'a139-c', isTruth: true, text: { en: "He recounted his former persecution of believers and his encounter with Jesus on the road.", fr: "Il raconta qu’il avait autrefois persécuté les croyants et sa rencontre avec Jésus sur le chemin." } },
      { id: 'a139-d', isTruth: true, text: { en: "Agrippa, Festus, and the others concluded that Paul had done nothing deserving death or imprisonment.", fr: "Agrippa, Festus et les autres conclurent que Paul n’avait rien fait qui mérite la mort ou l’emprisonnement." } },
    ],
    explanation: { en: "The officials concluded Paul could have been released if he had not appealed to Caesar; Agrippa did not order his execution.", fr: "Les responsables conclurent que Paul aurait pu être relâché s’il n’en avait appelé à César ; Agrippa n’ordonna pas son exécution." },
    scripture: { en: "Acts 25–26", fr: "Acts 25–26" },
    didYouKnow: { en: "Reading Acts 20:7–12 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Acts 20:7–12 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a140', levelNumber: 140, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Shipwreck and Malta", fr: "Le naufrage et Malte" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a140-a', isTruth: true, text: { en: "Paul warned that the voyage would bring danger, but the centurion followed other advice.", fr: "Paul avertit que le voyage serait dangereux, mais le centurion suivit d’autres avis." } },
      { id: 'a140-b', isTruth: true, text: { en: "A violent storm drove the ship for many days, and the passengers eventually lost hope of being saved.", fr: "Une violente tempête emporta le navire pendant plusieurs jours, et les passagers finirent par perdre l’espoir d’être sauvés." } },
      { id: 'a140-c', isTruth: false, text: { en: "Paul drowned during the shipwreck, and Luke continued the journey to Rome without him.", fr: "Paul se noya pendant le naufrage, et Luc poursuivit le voyage vers Rome sans lui." } },
      { id: 'a140-d', isTruth: true, text: { en: "All aboard reached land safely, and the island was identified as Malta.", fr: "Tous ceux qui étaient à bord atteignirent la terre sains et saufs, et l’île fut identifiée comme Malte." } },
    ],
    explanation: { en: "Paul survived the shipwreck along with everyone aboard and continued toward Rome after the stay on Malta.", fr: "Paul survécut au naufrage avec tous ceux qui étaient à bord et poursuivit son voyage vers Rome après le séjour à Malte." },
    scripture: { en: "Acts 27–28", fr: "Acts 27–28" },
    didYouKnow: { en: "Reading Acts 25–26 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Acts 25–26 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a141', levelNumber: 141, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Abraham’s Faith in Romans", fr: "La foi d’Abraham dans Romains" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a141-a', isTruth: true, text: { en: "Paul cites Abraham as an example of righteousness credited through faith.", fr: "Paul cite Abraham comme exemple de justice imputée par la foi." } },
      { id: 'a141-b', isTruth: true, text: { en: "Paul quotes Genesis: Abraham believed God, and it was counted to him as righteousness.", fr: "Paul cite la Genèse : Abraham crut Dieu, et cela lui fut compté comme justice." } },
      { id: 'a141-c', isTruth: true, text: { en: "Paul emphasizes that righteousness was credited to Abraham before he was circumcised.", fr: "Paul souligne que la justice fut imputée à Abraham avant sa circoncision." } },
      { id: 'a141-d', isTruth: false, text: { en: "Paul argues that Abraham was justified only after circumcision and therefore could not be father of uncircumcised believers.", fr: "Paul affirme qu’Abraham fut justifié seulement après la circoncision et ne pouvait donc pas être le père des croyants incirconcis." } },
    ],
    explanation: { en: "Romans 4 specifically stresses that Abraham was counted righteous while uncircumcised, supporting his role as father of believing Gentiles as well.", fr: "Romains 4 souligne précisément qu’Abraham fut déclaré juste alors qu’il était incirconcis, soutenant aussi son rôle de père des croyants non juifs." },
    scripture: { en: "Romans 4", fr: "Romans 4" },
    didYouKnow: { en: "Reading Acts 27–28 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Acts 27–28 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a142', levelNumber: 142, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Olive Tree", fr: "L’olivier" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a142-a', isTruth: false, text: { en: "Paul tells the grafted-in branches to boast proudly over the natural branches because they now support the root.", fr: "Paul dit aux branches greffées de se glorifier orgueilleusement contre les branches naturelles parce qu’elles soutiennent désormais la racine." } },
      { id: 'a142-b', isTruth: true, text: { en: "Paul uses an olive-tree image involving natural branches and wild olive shoots.", fr: "Paul utilise l’image d’un olivier avec des branches naturelles et des rameaux d’olivier sauvage." } },
      { id: 'a142-c', isTruth: true, text: { en: "Some branches are described as broken off, while wild branches are grafted in.", fr: "Certaines branches sont décrites comme retranchées, tandis que des branches sauvages sont greffées." } },
      { id: 'a142-d', isTruth: true, text: { en: "Paul warns the grafted-in branches not to become proud but to stand through faith.", fr: "Paul avertit les branches greffées de ne pas s’enorgueillir mais de demeurer par la foi." } },
    ],
    explanation: { en: "Paul says the branches do not support the root; the root supports them. Therefore they must not boast.", fr: "Paul dit que les branches ne portent pas la racine ; c’est la racine qui les porte. Elles ne doivent donc pas se glorifier." },
    scripture: { en: "Romans 11:11–24", fr: "Romans 11:11–24" },
    didYouKnow: { en: "Reading Romans 4 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Romans 4 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a143', levelNumber: 143, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Spiritual Gifts and One Body", fr: "Les dons spirituels et un seul corps" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a143-a', isTruth: true, text: { en: "Paul says there are varieties of gifts but the same Spirit.", fr: "Paul dit qu’il y a diversité de dons mais le même Esprit." } },
      { id: 'a143-b', isTruth: false, text: { en: "Paul says every believer must possess exactly the same spiritual gift for the body to function properly.", fr: "Paul dit que chaque croyant doit posséder exactement le même don spirituel pour que le corps fonctionne correctement." } },
      { id: 'a143-c', isTruth: true, text: { en: "He compares the church to one body with many members.", fr: "Il compare l’Église à un seul corps composé de plusieurs membres." } },
      { id: 'a143-d', isTruth: true, text: { en: "The chapter emphasizes that apparently weaker members of the body are indispensable.", fr: "Le chapitre souligne que les membres du corps qui paraissent plus faibles sont indispensables." } },
    ],
    explanation: { en: "The body metaphor depends on diversity, not sameness. Paul explicitly asks whether all are apostles, prophets, teachers, or workers of miracles.", fr: "La métaphore du corps dépend de la diversité, et non de l’uniformité. Paul demande explicitement si tous sont apôtres, prophètes, docteurs ou faiseurs de miracles." },
    scripture: { en: "1 Corinthians 12", fr: "1 Corinthians 12" },
    didYouKnow: { en: "Reading Romans 11:11–24 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Romans 11:11–24 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a144', levelNumber: 144, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Resurrection Body", fr: "Le corps de résurrection" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a144-a', isTruth: true, text: { en: "Paul uses the analogy of a seed being sown and then raised in a different form.", fr: "Paul utilise l’analogie d’une semence mise en terre puis relevée sous une autre forme." } },
      { id: 'a144-b', isTruth: true, text: { en: "He contrasts what is sown perishable with what is raised imperishable.", fr: "Il oppose ce qui est semé corruptible à ce qui ressuscite incorruptible." } },
      { id: 'a144-c', isTruth: false, text: { en: "Paul teaches that resurrection means the present mortal body simply continues forever without transformation.", fr: "Paul enseigne que la résurrection signifie que le corps mortel actuel continue simplement pour toujours sans transformation." } },
      { id: 'a144-d', isTruth: true, text: { en: "Paul says the dead will be raised imperishable and the living will be changed.", fr: "Paul dit que les morts ressusciteront incorruptibles et que les vivants seront changés." } },
    ],
    explanation: { en: "Paul’s resurrection teaching explicitly involves transformation: the perishable puts on the imperishable and the mortal puts on immortality.", fr: "L’enseignement de Paul sur la résurrection implique explicitement une transformation : le corruptible revêt l’incorruptibilité et le mortel l’immortalité." },
    scripture: { en: "1 Corinthians 15:35–58", fr: "1 Corinthians 15:35–58" },
    didYouKnow: { en: "Reading 1 Corinthians 12 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de 1 Corinthians 12 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a145', levelNumber: 145, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Paul’s Thorn", fr: "L’écharde de Paul" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a145-a', isTruth: true, text: { en: "Paul speaks of a thorn in the flesh given to keep him from becoming conceited.", fr: "Paul parle d’une écharde dans la chair donnée pour l’empêcher de s’enorgueillir." } },
      { id: 'a145-b', isTruth: true, text: { en: "He pleaded with the Lord three times for it to leave him.", fr: "Il supplia trois fois le Seigneur de l’éloigner de lui." } },
      { id: 'a145-c', isTruth: true, text: { en: "The response Paul received was, “My grace is sufficient for you, for my power is made perfect in weakness.”", fr: "La réponse reçue par Paul fut : « Ma grâce te suffit, car ma puissance s’accomplit dans la faiblesse. »" } },
      { id: 'a145-d', isTruth: false, text: { en: "The Lord removed the thorn immediately and promised Paul that weakness would never trouble him again.", fr: "Le Seigneur retira immédiatement l’écharde et promit à Paul que la faiblesse ne le troublerait plus jamais." } },
    ],
    explanation: { en: "The thorn was not immediately removed. Paul instead received assurance of sufficient grace and divine power in weakness.", fr: "L’écharde ne fut pas immédiatement retirée. Paul reçut plutôt l’assurance d’une grâce suffisante et de la puissance divine dans la faiblesse." },
    scripture: { en: "2 Corinthians 12:7–10", fr: "2 Corinthians 12:7–10" },
    didYouKnow: { en: "Reading 1 Corinthians 15:35–58 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de 1 Corinthians 15:35–58 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a146', levelNumber: 146, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Fruit of the Spirit", fr: "Le fruit de l’Esprit" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a146-a', isTruth: false, text: { en: "Paul lists envy, drunkenness, and fits of anger as fruit produced by the Spirit.", fr: "Paul cite l’envie, l’ivrognerie et les accès de colère comme fruit produit par l’Esprit." } },
      { id: 'a146-b', isTruth: true, text: { en: "Paul contrasts the works of the flesh with the fruit of the Spirit.", fr: "Paul oppose les œuvres de la chair au fruit de l’Esprit." } },
      { id: 'a146-c', isTruth: true, text: { en: "The fruit includes love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control.", fr: "Le fruit comprend l’amour, la joie, la paix, la patience, la bonté, la bienveillance, la fidélité, la douceur et la maîtrise de soi." } },
      { id: 'a146-d', isTruth: true, text: { en: "Paul says those who belong to Christ Jesus have crucified the flesh with its passions and desires.", fr: "Paul dit que ceux qui sont à Jésus-Christ ont crucifié la chair avec ses passions et ses désirs." } },
    ],
    explanation: { en: "Envy, drunkenness, and fits of anger appear among the works of the flesh, not the fruit of the Spirit.", fr: "L’envie, l’ivrognerie et les accès de colère figurent parmi les œuvres de la chair, et non parmi le fruit de l’Esprit." },
    scripture: { en: "Galatians 5:16–26", fr: "Galatians 5:16–26" },
    didYouKnow: { en: "Reading 2 Corinthians 12:7–10 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de 2 Corinthians 12:7–10 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a147', levelNumber: 147, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Armor of God", fr: "L’armure de Dieu" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a147-a', isTruth: true, text: { en: "Paul tells believers to be strong in the Lord and put on the whole armor of God.", fr: "Paul dit aux croyants de se fortifier dans le Seigneur et de revêtir toutes les armes de Dieu." } },
      { id: 'a147-b', isTruth: false, text: { en: "The sword of the Spirit is identified as political authority over earthly governments.", fr: "L’épée de l’Esprit est identifiée comme l’autorité politique sur les gouvernements terrestres." } },
      { id: 'a147-c', isTruth: true, text: { en: "The armor includes the belt of truth, breastplate of righteousness, shield of faith, helmet of salvation, and sword of the Spirit.", fr: "L’armure comprend la ceinture de vérité, la cuirasse de justice, le bouclier de la foi, le casque du salut et l’épée de l’Esprit." } },
      { id: 'a147-d', isTruth: true, text: { en: "Paul identifies the sword of the Spirit as the word of God and repeatedly emphasizes prayer.", fr: "Paul identifie l’épée de l’Esprit comme la parole de Dieu et souligne à plusieurs reprises la prière." } },
    ],
    explanation: { en: "Ephesians 6 explicitly defines the sword of the Spirit as the word of God, not political authority.", fr: "Éphésiens 6 définit explicitement l’épée de l’Esprit comme la parole de Dieu, et non comme l’autorité politique." },
    scripture: { en: "Ephesians 6:10–20", fr: "Ephesians 6:10–20" },
    didYouKnow: { en: "Reading Galatians 5:16–26 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Galatians 5:16–26 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a148', levelNumber: 148, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Christ’s Humility", fr: "L’humilité du Christ" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a148-a', isTruth: true, text: { en: "Paul calls believers to have the mindset exemplified in Christ Jesus.", fr: "Paul appelle les croyants à avoir l’attitude manifestée en Jésus-Christ." } },
      { id: 'a148-b', isTruth: true, text: { en: "The passage says Christ humbled Himself by becoming obedient to the point of death, even death on a cross.", fr: "Le passage dit que Christ s’est humilié en devenant obéissant jusqu’à la mort, même la mort sur une croix." } },
      { id: 'a148-c', isTruth: false, text: { en: "Because of His humility, Christ permanently lost all honor and was never exalted.", fr: "À cause de son humilité, Christ perdit définitivement tout honneur et ne fut jamais élevé." } },
      { id: 'a148-d', isTruth: true, text: { en: "God highly exalted Him and bestowed on Him the name above every name.", fr: "Dieu l’a souverainement élevé et lui a donné le nom qui est au-dessus de tout nom." } },
    ],
    explanation: { en: "The passage moves from humiliation to exaltation. Christ’s obedience is followed by God highly exalting Him.", fr: "Le passage passe de l’humiliation à l’élévation. L’obéissance du Christ est suivie de son élévation souveraine par Dieu." },
    scripture: { en: "Philippians 2:5–11", fr: "Philippians 2:5–11" },
    didYouKnow: { en: "Reading Ephesians 6:10–20 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Ephesians 6:10–20 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a149', levelNumber: 149, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Supremacy of Christ", fr: "La suprématie du Christ" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a149-a', isTruth: true, text: { en: "Christ is called the image of the invisible God and the firstborn of all creation.", fr: "Christ est appelé l’image du Dieu invisible et le premier-né de toute la création." } },
      { id: 'a149-b', isTruth: true, text: { en: "The passage says all things were created through Him and for Him.", fr: "Le passage dit que toutes choses ont été créées par lui et pour lui." } },
      { id: 'a149-c', isTruth: true, text: { en: "He is described as head of the body, the church, and as preeminent in all things.", fr: "Il est décrit comme chef du corps, l’Église, et comme ayant la prééminence en toutes choses." } },
      { id: 'a149-d', isTruth: false, text: { en: "Christ is portrayed as one created angel among many, with no role in creation.", fr: "Christ est présenté comme un ange créé parmi d’autres, sans rôle dans la création." } },
    ],
    explanation: { en: "Colossians presents Christ as the agent and goal of creation, not as a created angel with no role in creation.", fr: "Colossiens présente Christ comme l’agent et le but de la création, et non comme un ange créé sans rôle dans la création." },
    scripture: { en: "Colossians 1:15–20", fr: "Colossians 1:15–20" },
    didYouKnow: { en: "Reading Philippians 2:5–11 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Philippians 2:5–11 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a150', levelNumber: 150, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Man of Lawlessness", fr: "L’homme impie" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a150-a', isTruth: false, text: { en: "Paul says the man of lawlessness will openly worship God in the temple and urge everyone to obey Christ.", fr: "Paul dit que l’homme impie adorera ouvertement Dieu dans le temple et exhortera tout le monde à obéir au Christ." } },
      { id: 'a150-b', isTruth: true, text: { en: "Paul warns believers not to be quickly shaken by claims that the day of the Lord has already come.", fr: "Paul avertit les croyants de ne pas se laisser rapidement ébranler par des affirmations selon lesquelles le jour du Seigneur serait déjà arrivé." } },
      { id: 'a150-c', isTruth: true, text: { en: "He speaks of a rebellion and the revelation of the man of lawlessness.", fr: "Il parle d’une apostasie et de la révélation de l’homme impie." } },
      { id: 'a150-d', isTruth: true, text: { en: "The passage describes him as exalting himself and associating his coming with deceptive signs and wonders.", fr: "Le passage le décrit comme s’élevant lui-même et associe sa venue à des signes et prodiges trompeurs." } },
    ],
    explanation: { en: "The man of lawlessness is portrayed as opposing and exalting himself against what is called God, not as a faithful worshiper of Christ.", fr: "L’homme impie est présenté comme s’opposant et s’élevant contre ce qui est appelé Dieu, et non comme un fidèle adorateur du Christ." },
    scripture: { en: "2 Thessalonians 2:1–12", fr: "2 Thessalonians 2:1–12" },
    didYouKnow: { en: "Reading Colossians 1:15–20 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Colossians 1:15–20 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a151', levelNumber: 151, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Qualifications for Overseers", fr: "Les qualifications des responsables" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a151-a', isTruth: true, text: { en: "An overseer is to be above reproach, self-controlled, respectable, hospitable, and able to teach.", fr: "Un responsable doit être irréprochable, maître de lui-même, respectable, hospitalier et capable d’enseigner." } },
      { id: 'a151-b', isTruth: false, text: { en: "Paul says a recent convert is the ideal candidate because new believers are least likely to become proud.", fr: "Paul dit qu’un nouveau converti est le candidat idéal parce que les nouveaux croyants risquent le moins de devenir orgueilleux." } },
      { id: 'a151-c', isTruth: true, text: { en: "The passage includes qualifications concerning family management.", fr: "Le passage comprend des qualifications concernant la gestion de la famille." } },
      { id: 'a151-d', isTruth: true, text: { en: "The overseer must not be a recent convert, lest he become puffed up with conceit.", fr: "Le responsable ne doit pas être un nouveau converti, de peur qu’il ne s’enfle d’orgueil." } },
    ],
    explanation: { en: "First Timothy says precisely the opposite: an overseer must not be a recent convert because of the danger of conceit.", fr: "Première Timothée dit précisément le contraire : un responsable ne doit pas être un nouveau converti à cause du danger de l’orgueil." },
    scripture: { en: "1 Timothy 3:1–7", fr: "1 Timothy 3:1–7" },
    didYouKnow: { en: "Reading 2 Thessalonians 2:1–12 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de 2 Thessalonians 2:1–12 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a152', levelNumber: 152, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Onesiphorus", fr: "Onésiphore" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a152-a', isTruth: true, text: { en: "Paul says Onesiphorus often refreshed him.", fr: "Paul dit qu’Onésiphore l’a souvent réconforté." } },
      { id: 'a152-b', isTruth: true, text: { en: "Onesiphorus was not ashamed of Paul’s chains.", fr: "Onésiphore n’eut pas honte des chaînes de Paul." } },
      { id: 'a152-c', isTruth: false, text: { en: "Onesiphorus deliberately avoided Paul in Rome so that no one would associate him with a prisoner.", fr: "Onésiphore évita délibérément Paul à Rome afin que personne ne l’associe à un prisonnier." } },
      { id: 'a152-d', isTruth: true, text: { en: "Paul says Onesiphorus searched earnestly for him in Rome and found him.", fr: "Paul dit qu’Onésiphore le chercha avec empressement à Rome et le trouva." } },
    ],
    explanation: { en: "Paul praises Onesiphorus for the opposite behavior: he was not ashamed and searched diligently until he found Paul.", fr: "Paul loue Onésiphore pour le comportement opposé : il n’eut pas honte et chercha avec diligence jusqu’à trouver Paul." },
    scripture: { en: "2 Timothy 1:15–18", fr: "2 Timothy 1:15–18" },
    didYouKnow: { en: "Reading 1 Timothy 3:1–7 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de 1 Timothy 3:1–7 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a153', levelNumber: 153, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Melchizedek in Hebrews", fr: "Melchisédek dans Hébreux" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a153-a', isTruth: true, text: { en: "Hebrews recalls Melchizedek as king of Salem and priest of God Most High.", fr: "Hébreux rappelle que Melchisédek était roi de Salem et prêtre du Dieu Très-Haut." } },
      { id: 'a153-b', isTruth: true, text: { en: "Abraham gave Melchizedek a tenth of the spoils.", fr: "Abraham donna à Melchisédek la dîme du butin." } },
      { id: 'a153-c', isTruth: true, text: { en: "Hebrews contrasts the Melchizedek order with the Levitical priesthood and applies the comparison to Christ.", fr: "Hébreux oppose l’ordre de Melchisédek au sacerdoce lévitique et applique cette comparaison au Christ." } },
      { id: 'a153-d', isTruth: false, text: { en: "Hebrews argues that Melchizedek’s priesthood depends entirely on descent from Levi.", fr: "Hébreux affirme que le sacerdoce de Melchisédek dépend entièrement de sa descendance de Lévi." } },
    ],
    explanation: { en: "Melchizedek precedes Levi historically and is used precisely to discuss a priesthood not grounded in Levitical genealogy.", fr: "Melchisédek précède historiquement Lévi et sert précisément à parler d’un sacerdoce qui n’est pas fondé sur la généalogie lévitique." },
    scripture: { en: "Hebrews 7", fr: "Hebrews 7" },
    didYouKnow: { en: "Reading 2 Timothy 1:15–18 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de 2 Timothy 1:15–18 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a154', levelNumber: 154, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Heroes of Faith", fr: "Les héros de la foi" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a154-a', isTruth: false, text: { en: "The chapter says every faithful person received all promised blessings completely during earthly life.", fr: "Le chapitre dit que chaque personne fidèle reçut complètement toutes les promesses pendant sa vie terrestre." } },
      { id: 'a154-b', isTruth: true, text: { en: "Hebrews 11 defines faith in relation to things hoped for and things not seen.", fr: "Hébreux 11 définit la foi en relation avec les choses qu’on espère et celles qu’on ne voit pas." } },
      { id: 'a154-c', isTruth: true, text: { en: "The chapter mentions Abel, Enoch, Noah, Abraham, Sarah, Moses, Rahab, and many others.", fr: "Le chapitre mentionne Abel, Hénoc, Noé, Abraham, Sara, Moïse, Rahab et beaucoup d’autres." } },
      { id: 'a154-d', isTruth: true, text: { en: "The chapter explicitly says some died in faith without having received the things promised.", fr: "Le chapitre dit explicitement que certains moururent dans la foi sans avoir reçu les choses promises." } },
    ],
    explanation: { en: "Hebrews 11 emphasizes perseverance without full earthly fulfillment; some believers died in faith still awaiting what was promised.", fr: "Hébreux 11 souligne la persévérance sans accomplissement terrestre complet ; certains croyants moururent dans la foi en attendant encore les promesses." },
    scripture: { en: "Hebrews 11", fr: "Hebrews 11" },
    didYouKnow: { en: "Reading Hebrews 7 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Hebrews 7 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a155', levelNumber: 155, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Faith and Works", fr: "La foi et les œuvres" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a155-a', isTruth: true, text: { en: "James asks what good it is if someone claims to have faith but has no works.", fr: "Jacques demande à quoi cela sert si quelqu’un prétend avoir la foi mais n’a pas d’œuvres." } },
      { id: 'a155-b', isTruth: false, text: { en: "James teaches that genuine faith should remain completely invisible and never produce any action.", fr: "Jacques enseigne que la foi véritable doit rester complètement invisible et ne jamais produire d’action." } },
      { id: 'a155-c', isTruth: true, text: { en: "He uses the example of a poorly clothed and hungry brother or sister who receives words but no practical help.", fr: "Il utilise l’exemple d’un frère ou d’une sœur mal vêtus et affamés qui reçoivent des paroles mais aucune aide concrète." } },
      { id: 'a155-d', isTruth: true, text: { en: "James points to Abraham and Rahab as examples in his discussion of faith expressed through action.", fr: "Jacques cite Abraham et Rahab comme exemples dans sa discussion sur la foi exprimée par les actes." } },
    ],
    explanation: { en: "James explicitly argues that faith without works is dead, using practical and biblical examples to make the point.", fr: "Jacques affirme explicitement que la foi sans les œuvres est morte, en utilisant des exemples pratiques et bibliques." },
    scripture: { en: "James 2:14–26", fr: "James 2:14–26" },
    didYouKnow: { en: "Reading Hebrews 11 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de Hebrews 11 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a156', levelNumber: 156, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Tongue", fr: "La langue" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a156-a', isTruth: true, text: { en: "James compares the tongue to a bit that controls a horse and a rudder that directs a ship.", fr: "Jacques compare la langue à un mors qui dirige un cheval et à un gouvernail qui dirige un navire." } },
      { id: 'a156-b', isTruth: true, text: { en: "He compares the tongue’s destructive potential to a small fire setting a great forest ablaze.", fr: "Il compare le pouvoir destructeur de la langue à un petit feu qui embrase une grande forêt." } },
      { id: 'a156-c', isTruth: false, text: { en: "James says human beings have fully mastered the tongue and it no longer presents any spiritual danger.", fr: "Jacques dit que les êtres humains ont parfaitement maîtrisé la langue et qu’elle ne présente plus aucun danger spirituel." } },
      { id: 'a156-d', isTruth: true, text: { en: "James highlights the inconsistency of blessing God while cursing people made in God’s likeness.", fr: "Jacques souligne l’incohérence qui consiste à bénir Dieu tout en maudissant des personnes faites à l’image de Dieu." } },
    ],
    explanation: { en: "James says no human being can tame the tongue and calls it a restless evil, emphasizing rather than minimizing its danger.", fr: "Jacques dit qu’aucun être humain ne peut dompter la langue et la qualifie de mal inquiet, soulignant ainsi son danger." },
    scripture: { en: "James 3:1–12", fr: "James 3:1–12" },
    didYouKnow: { en: "Reading James 2:14–26 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de James 2:14–26 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a157', levelNumber: 157, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Day of the Lord", fr: "Le jour du Seigneur" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a157-a', isTruth: true, text: { en: "Peter says that with the Lord one day is like a thousand years and a thousand years like one day.", fr: "Pierre dit que, devant le Seigneur, un jour est comme mille ans et mille ans comme un jour." } },
      { id: 'a157-b', isTruth: true, text: { en: "He says the Lord is patient, not wishing that any should perish but that all should reach repentance.", fr: "Il dit que le Seigneur use de patience, ne voulant pas qu’aucun périsse mais que tous arrivent à la repentance." } },
      { id: 'a157-c', isTruth: true, text: { en: "Peter says the day of the Lord will come like a thief and points believers toward new heavens and a new earth.", fr: "Pierre dit que le jour du Seigneur viendra comme un voleur et oriente les croyants vers de nouveaux cieux et une nouvelle terre." } },
      { id: 'a157-d', isTruth: false, text: { en: "Peter gives his readers a precise calendar date for the day of the Lord.", fr: "Pierre donne à ses lecteurs une date exacte sur le calendrier pour le jour du Seigneur." } },
    ],
    explanation: { en: "Second Peter offers no date-setting formula. The imagery of coming “like a thief” emphasizes unexpectedness.", fr: "Deuxième Pierre ne fournit aucune formule permettant de fixer une date. L’image d’une venue « comme un voleur » souligne le caractère inattendu." },
    scripture: { en: "2 Peter 3:8–13", fr: "2 Peter 3:8–13" },
    didYouKnow: { en: "Reading James 3:1–12 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de James 3:1–12 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a158', levelNumber: 158, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Testing the Spirits", fr: "Éprouver les esprits" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a158-a', isTruth: false, text: { en: "John says every spiritual message must be accepted without examination because questioning it is always sinful.", fr: "Jean dit que tout message spirituel doit être accepté sans examen parce que le remettre en question est toujours un péché." } },
      { id: 'a158-b', isTruth: true, text: { en: "John tells believers not to believe every spirit but to test the spirits.", fr: "Jean dit aux croyants de ne pas croire tout esprit mais d’éprouver les esprits." } },
      { id: 'a158-c', isTruth: true, text: { en: "He connects the confession that Jesus Christ has come in the flesh with the Spirit of God.", fr: "Il relie la confession que Jésus-Christ est venu en chair à l’Esprit de Dieu." } },
      { id: 'a158-d', isTruth: true, text: { en: "John contrasts the Spirit of truth with the spirit of error.", fr: "Jean oppose l’Esprit de vérité à l’esprit d’erreur." } },
    ],
    explanation: { en: "The command of the passage is precisely to test spiritual claims rather than accept them uncritically.", fr: "Le commandement du passage consiste précisément à éprouver les affirmations spirituelles plutôt qu’à les accepter sans discernement." },
    scripture: { en: "1 John 4:1–6", fr: "1 John 4:1–6" },
    didYouKnow: { en: "Reading 2 Peter 3:8–13 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de 2 Peter 3:8–13 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a159', levelNumber: 159, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Diotrephes and Gaius", fr: "Diotrèphe et Gaïus" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a159-a', isTruth: true, text: { en: "Gaius is commended for faithfulness and hospitality toward traveling brothers.", fr: "Gaïus est félicité pour sa fidélité et son hospitalité envers des frères de passage." } },
      { id: 'a159-b', isTruth: false, text: { en: "Diotrephes is praised for welcoming the brothers and encouraging others to do the same.", fr: "Diotrèphe est loué pour accueillir les frères et encourager les autres à faire de même." } },
      { id: 'a159-c', isTruth: true, text: { en: "Diotrephes is criticized because he loves to be first.", fr: "Diotrèphe est critiqué parce qu’il aime être le premier." } },
      { id: 'a159-d', isTruth: true, text: { en: "The letter says Diotrephes refuses to welcome the brothers and even puts out of the church those who want to receive them.", fr: "La lettre dit que Diotrèphe refuse d’accueillir les frères et chasse même de l’Église ceux qui veulent les recevoir." } },
    ],
    explanation: { en: "Third John criticizes Diotrephes for rejecting the brothers and obstructing those who would welcome them.", fr: "Troisième Jean critique Diotrèphe parce qu’il rejette les frères et empêche ceux qui voudraient les accueillir." },
    scripture: { en: "3 John 1–14", fr: "3 John 1–14" },
    didYouKnow: { en: "Reading 1 John 4:1–6 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de 1 John 4:1–6 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a160', levelNumber: 160, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Jude and Michael", fr: "Jude et Michel" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a160-a', isTruth: true, text: { en: "Jude refers to Michael as the archangel.", fr: "Jude parle de Michel comme de l’archange." } },
      { id: 'a160-b', isTruth: true, text: { en: "Michael is described as disputing with the devil about the body of Moses.", fr: "Michel est décrit comme disputant avec le diable au sujet du corps de Moïse." } },
      { id: 'a160-c', isTruth: false, text: { en: "Michael pronounced an elaborate personal curse against the devil in his own authority.", fr: "Michel prononça une longue malédiction personnelle contre le diable de sa propre autorité." } },
      { id: 'a160-d', isTruth: true, text: { en: "Michael said, “The Lord rebuke you.”", fr: "Michel dit : « Que le Seigneur te réprime ! »" } },
    ],
    explanation: { en: "Jude emphasizes Michael’s restraint: rather than pronounce a reviling judgment himself, he appealed to the Lord’s rebuke.", fr: "Jude souligne la retenue de Michel : au lieu de prononcer lui-même un jugement injurieux, il en appela à la réprimande du Seigneur." },
    scripture: { en: "Jude 8–10", fr: "Jude 8–10" },
    didYouKnow: { en: "Reading 3 John 1–14 in context provides additional details beyond the central event tested in this question.", fr: "La lecture de 3 John 1–14 dans son contexte fournit des détails supplémentaires au-delà de l’événement principal testé dans cette question." }

  },
  {
    id: 'a161', levelNumber: 161, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Seven Churches", fr: "Les sept Églises" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a161-a', isTruth: true, text: { en: "The messages are addressed to Ephesus, Smyrna, Pergamum, Thyatira, Sardis, Philadelphia, and Laodicea.", fr: "Les messages sont adressés à Éphèse, Smyrne, Pergame, Thyatire, Sardes, Philadelphie et Laodicée." } },
      { id: 'a161-b', isTruth: true, text: { en: "Some churches receive both commendation and correction, while others receive sharply different evaluations.", fr: "Certaines Églises reçoivent à la fois des éloges et des corrections, tandis que d’autres reçoivent des évaluations très différentes." } },
      { id: 'a161-c', isTruth: true, text: { en: "Each message concludes with an appeal to hear what the Spirit says to the churches.", fr: "Chaque message se termine par un appel à écouter ce que l’Esprit dit aux Églises." } },
      { id: 'a161-d', isTruth: false, text: { en: "Every one of the seven churches is praised without any warning, rebuke, or call to repent.", fr: "Chacune des sept Églises est félicitée sans aucun avertissement, reproche ni appel à la repentance." } },
    ],
    explanation: { en: "The seven messages are not uniformly positive. Several contain explicit rebukes and calls to repent.", fr: "Les sept messages ne sont pas uniformément positifs. Plusieurs contiennent des reproches explicites et des appels à la repentance." },
    scripture: { en: "Revelation 2–3", fr: "Revelation 2–3" },
    didYouKnow: { en: "The seven churches named are Ephesus, Smyrna, Pergamum, Thyatira, Sardis, Philadelphia, and Laodicea.", fr: "Les sept Églises nommées sont Éphèse, Smyrne, Pergame, Thyatire, Sardes, Philadelphie et Laodicée." }

  },
  {
    id: 'a162', levelNumber: 162, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Sealed Scroll", fr: "Le livre scellé" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a162-a', isTruth: false, text: { en: "The elder told John that the archangel Michael alone was worthy to open the scroll.", fr: "L’ancien dit à Jean que l’archange Michel seul était digne d’ouvrir le livre." } },
      { id: 'a162-b', isTruth: true, text: { en: "John saw a scroll in the right hand of the One seated on the throne, sealed with seven seals.", fr: "Jean vit dans la main droite de celui qui était assis sur le trône un livre scellé de sept sceaux." } },
      { id: 'a162-c', isTruth: true, text: { en: "John wept because no one was initially found worthy to open the scroll or look into it.", fr: "Jean pleura parce que personne ne fut d’abord trouvé digne d’ouvrir le livre ni de le regarder." } },
      { id: 'a162-d', isTruth: true, text: { en: "John heard of the Lion of Judah and then saw a Lamb standing as though it had been slain.", fr: "Jean entendit parler du Lion de Juda puis vit un Agneau debout comme immolé." } },
    ],
    explanation: { en: "The one declared worthy is the victorious Lion/Lamb, not Michael the archangel.", fr: "Celui qui est déclaré digne est le Lion/Agneau victorieux, et non l’archange Michel." },
    scripture: { en: "Revelation 5", fr: "Revelation 5" },
    didYouKnow: { en: "John hears of the Lion of Judah and then sees a Lamb standing as though it had been slain.", fr: "Jean entend parler du Lion de Juda puis voit un Agneau debout comme immolé." }

  },
  {
    id: 'a163', levelNumber: 163, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Seven Trumpets", fr: "Les sept trompettes" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a163-a', isTruth: true, text: { en: "Seven angels are given seven trumpets.", fr: "Sept anges reçoivent sept trompettes." } },
      { id: 'a163-b', isTruth: false, text: { en: "The seventh trumpet is followed by the declaration that Babylon has fallen in a single hour.", fr: "La septième trompette est suivie de la déclaration que Babylone est tombée en une seule heure." } },
      { id: 'a163-c', isTruth: true, text: { en: "The trumpet judgments include events affecting the earth, sea, rivers, heavenly lights, and humanity.", fr: "Les jugements des trompettes comprennent des événements touchant la terre, la mer, les fleuves, les astres et l’humanité." } },
      { id: 'a163-d', isTruth: true, text: { en: "At the seventh trumpet, loud voices in heaven proclaim that the kingdom of the world has become the kingdom of the Lord and of His Christ.", fr: "À la septième trompette, de fortes voix dans le ciel proclament que le royaume du monde est devenu le royaume du Seigneur et de son Christ." } },
    ],
    explanation: { en: "The fall of Babylon belongs to later visions in Revelation 17–18. The seventh trumpet in Revelation 11 is associated with heavenly proclamation of God’s reign.", fr: "La chute de Babylone appartient à des visions ultérieures d’Apocalypse 17–18. La septième trompette d’Apocalypse 11 est associée à la proclamation céleste du règne de Dieu." },
    scripture: { en: "Revelation 8–11", fr: "Revelation 8–11" },
    didYouKnow: { en: "The seventh trumpet sounds in Revelation 11, where heavenly voices proclaim the kingdom of the Lord and of his Christ.", fr: "La septième trompette retentit dans Apocalypse 11, où des voix célestes proclament le règne du Seigneur et de son Christ." }

  },
  {
    id: 'a164', levelNumber: 164, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Dragon and the Beasts", fr: "Le dragon et les bêtes" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a164-a', isTruth: true, text: { en: "Revelation 12 portrays a great red dragon with seven heads and ten horns.", fr: "Apocalypse 12 présente un grand dragon rouge ayant sept têtes et dix cornes." } },
      { id: 'a164-b', isTruth: true, text: { en: "The dragon is explicitly identified as the ancient serpent, called the devil and Satan.", fr: "Le dragon est explicitement identifié comme le serpent ancien, appelé le diable et Satan." } },
      { id: 'a164-c', isTruth: false, text: { en: "The first beast in Revelation 13 rises from the temple in Jerusalem and has no connection with the dragon.", fr: "La première bête d’Apocalypse 13 monte du temple de Jérusalem et n’a aucun lien avec le dragon." } },
      { id: 'a164-d', isTruth: true, text: { en: "The first beast rises from the sea, and the dragon gives it power, throne, and great authority.", fr: "La première bête monte de la mer, et le dragon lui donne sa puissance, son trône et une grande autorité." } },
    ],
    explanation: { en: "Revelation 13 says the beast rises from the sea and receives authority from the dragon.", fr: "Apocalypse 13 dit que la bête monte de la mer et reçoit son autorité du dragon." },
    scripture: { en: "Revelation 12–13", fr: "Revelation 12–13" },
    didYouKnow: { en: "Revelation 12 explicitly identifies the great dragon as the ancient serpent, called the devil and Satan.", fr: "Apocalypse 12 identifie explicitement le grand dragon comme le serpent ancien, appelé le diable et Satan." }

  },
  {
    id: 'a165', levelNumber: 165, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Babylon the Great", fr: "Babylone la grande" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a165-a', isTruth: true, text: { en: "Revelation 17 portrays a woman seated on a scarlet beast with seven heads and ten horns.", fr: "Apocalypse 17 présente une femme assise sur une bête écarlate ayant sept têtes et dix cornes." } },
      { id: 'a165-b', isTruth: true, text: { en: "The woman is called “Babylon the Great” and is associated with luxury, immorality, and persecution.", fr: "La femme est appelée « Babylone la grande » et est associée au luxe, à l’immoralité et à la persécution." } },
      { id: 'a165-c', isTruth: true, text: { en: "Revelation 18 repeatedly portrays kings, merchants, and seafarers mourning Babylon’s sudden fall.", fr: "Apocalypse 18 montre à plusieurs reprises des rois, des marchands et des marins pleurant la chute soudaine de Babylone." } },
      { id: 'a165-d', isTruth: false, text: { en: "Revelation 18 describes the kings and merchants rejoicing because Babylon’s fall greatly increased their wealth.", fr: "Apocalypse 18 décrit les rois et les marchands se réjouissant parce que la chute de Babylone augmenta considérablement leur richesse." } },
    ],
    explanation: { en: "Revelation 18 depicts economic and political mourners lamenting Babylon’s destruction because their wealth and trade are devastated, not increased.", fr: "Apocalypse 18 montre des acteurs économiques et politiques pleurant la destruction de Babylone parce que leur richesse et leur commerce sont ruinés, et non augmentés." },
    scripture: { en: "Revelation 17–18", fr: "Revelation 17–18" },
    didYouKnow: { en: "Revelation 18 portrays kings, merchants, and seafarers mourning Babylon’s fall.", fr: "Apocalypse 18 montre des rois, des marchands et des marins pleurant la chute de Babylone." }

  },
  {
    id: 'a166', levelNumber: 166, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The New Jerusalem", fr: "La nouvelle Jérusalem" }, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a166-a', isTruth: false, text: { en: "John says the city requires a large temple because God and the Lamb remain permanently outside it.", fr: "Jean dit que la ville a besoin d’un grand temple parce que Dieu et l’Agneau restent définitivement à l’extérieur." } },
      { id: 'a166-b', isTruth: true, text: { en: "John sees a new heaven and a new earth and the holy city, New Jerusalem, descending from God.", fr: "Jean voit un nouveau ciel et une nouvelle terre ainsi que la ville sainte, la nouvelle Jérusalem, descendant d’auprès de Dieu." } },
      { id: 'a166-c', isTruth: true, text: { en: "The city has twelve gates associated with the tribes of Israel and twelve foundations associated with the apostles of the Lamb.", fr: "La ville a douze portes associées aux tribus d’Israël et douze fondements associés aux apôtres de l’Agneau." } },
      { id: 'a166-d', isTruth: true, text: { en: "John says he saw no temple in the city because the Lord God Almighty and the Lamb are its temple.", fr: "Jean dit qu’il ne vit pas de temple dans la ville parce que le Seigneur Dieu tout-puissant et l’Agneau en sont le temple." } },
    ],
    explanation: { en: "The vision explicitly says there is no temple building in the city because God and the Lamb are its temple.", fr: "La vision dit explicitement qu’il n’y a pas de bâtiment de temple dans la ville parce que Dieu et l’Agneau en sont le temple." },
    scripture: { en: "Revelation 21:1–22:5", fr: "Revelation 21:1–22:5" },
    didYouKnow: { en: "The city has twelve gates bearing Israel’s tribal names and twelve foundations bearing the apostles’ names.", fr: "La ville a douze portes portant les noms des tribus d’Israël et douze fondements portant les noms des apôtres." }

  }
];
