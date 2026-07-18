export type Language = 'en' | 'fr';

export interface Statement {
  id: string;
  text: { en: string; fr: string };
  isTruth: boolean;
}

export interface Level {
  id: string;
  levelNumber: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  difficultyFr: 'Débutant' | 'Intermédiaire' | 'Avancé';
  topic: { en: string; fr: string };
  image: string;
  statements: Statement[];
  explanation: { en: string; fr: string };
  badgeColor: string;
  testament: 'Old' | 'New';
}

const B = '/attached_assets/generated_images/noah.jpg';
const I = '/attached_assets/generated_images/david.jpg';
const A = '/attached_assets/generated_images/paul.jpg';

export const LEVELS: Level[] = [
  // ─── BEGINNER ────────────────────────────────────────────────────────────────
  {
    id: 'b1', levelNumber: 1, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Noah's Ark", fr: "L'Arche de Noé" }, image: B, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b1-a', isTruth: true,  text: { en: "God used a rainbow as a sign of His covenant to never flood the entire Earth again.", fr: "Dieu a utilisé l'arc-en-ciel comme signe de son alliance pour ne plus jamais inonder la Terre entière." } },
      { id: 'b1-b', isTruth: true,  text: { en: "Noah brought seven pairs of certain clean animals onto the ark.", fr: "Noé a fait monter sept couples de certains animaux purs dans l'arche." } },
      { id: 'b1-c', isTruth: false, text: { en: "The ark floated on the floodwaters for exactly 40 days before landing on dry ground.", fr: "L'arche a flotté sur les eaux du déluge pendant exactement 40 jours avant de se poser sur la terre ferme." } },
      { id: 'b1-d', isTruth: true,  text: { en: "Noah sent out both a raven and a dove to check if the waters had dried up.", fr: "Noé a envoyé un corbeau et une colombe pour vérifier si les eaux avaient baissé." } },
    ],
    explanation: { en: "Rain fell for 40 days, but the floodwaters covered the Earth for over 150 days before the ark rested on Mount Ararat (Genesis 7:24 / 8:4).", fr: "La pluie est tombée pendant 40 jours, mais les eaux ont recouvert la Terre pendant plus de 150 jours avant que l'arche ne se pose sur le mont Ararat (Genèse 7:24 / 8:4)." }
  },
  {
    id: 'b2', levelNumber: 2, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Creation — Days 1–3", fr: "La Création — Jours 1–3" }, image: B, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b2-a', isTruth: true,  text: { en: "God created light on the first day and separated it from darkness.", fr: "Dieu a créé la lumière le premier jour et l'a séparée des ténèbres." } },
      { id: 'b2-b', isTruth: true,  text: { en: "God created the sky (firmament) to separate the waters on the second day.", fr: "Dieu a créé le ciel (firmament) pour séparer les eaux le deuxième jour." } },
      { id: 'b2-c', isTruth: true,  text: { en: "God created dry land and vegetation — plants and fruit trees — on the third day.", fr: "Dieu a créé la terre sèche et la végétation — plantes et arbres fruitiers — le troisième jour." } },
      { id: 'b2-d', isTruth: false, text: { en: "God rested on the third day after completing the sea and sky.", fr: "Dieu s'est reposé le troisième jour après avoir créé la mer et le ciel." } },
    ],
    explanation: { en: "God rested on the seventh day — the Sabbath — not the third. He continued creating through day six, resting only after all creation was complete (Genesis 2:2-3).", fr: "Dieu s'est reposé le septième jour — le Sabbat — et non le troisième. Il a continué de créer jusqu'au sixième jour (Genèse 2:2-3)." }
  },
  {
    id: 'b3', levelNumber: 3, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Creation — Days 4–7", fr: "La Création — Jours 4–7" }, image: B, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b3-a', isTruth: true,  text: { en: "God created the sun, moon, and stars on the fourth day.", fr: "Dieu a créé le soleil, la lune et les étoiles le quatrième jour." } },
      { id: 'b3-b', isTruth: true,  text: { en: "God created birds and sea creatures on the fifth day.", fr: "Dieu a créé les oiseaux et les créatures marines le cinquième jour." } },
      { id: 'b3-c', isTruth: false, text: { en: "God created human beings on the fifth day alongside the birds and sea animals.", fr: "Dieu a créé les êtres humains le cinquième jour, avec les oiseaux et les animaux marins." } },
      { id: 'b3-d', isTruth: true,  text: { en: "God declared everything He had made to be 'very good' at the end of the sixth day.", fr: "Dieu a déclaré que tout ce qu'Il avait fait était 'très bon' à la fin du sixième jour." } },
    ],
    explanation: { en: "Humans were created on the sixth day, along with land animals — not on the fifth day. The fifth day was for birds and sea creatures (Genesis 1:23-31).", fr: "Les êtres humains ont été créés le sixième jour, avec les animaux terrestres — et non le cinquième jour (Genèse 1:23-31)." }
  },
  {
    id: 'b4', levelNumber: 4, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Adam and Eve", fr: "Adam et Ève" }, image: B, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b4-a', isTruth: true,  text: { en: "God formed Adam from the dust of the ground and breathed life into him.", fr: "Dieu a formé Adam de la poussière de la terre et lui a insufflé la vie." } },
      { id: 'b4-b', isTruth: true,  text: { en: "God put Adam into a deep sleep to take a rib and form Eve.", fr: "Dieu a plongé Adam dans un profond sommeil pour prendre une côte et former Ève." } },
      { id: 'b4-c', isTruth: false, text: { en: "Adam named all the animals after Eve was created.", fr: "Adam a nommé tous les animaux après la création d'Ève." } },
      { id: 'b4-d', isTruth: true,  text: { en: "God planted the Garden of Eden in the east and placed Adam there to work it.", fr: "Dieu a planté le jardin d'Éden à l'est et y a placé Adam pour le cultiver." } },
    ],
    explanation: { en: "Adam named the animals before Eve was created. God brought the animals to Adam to name, found no suitable helper, then created Eve from Adam's rib (Genesis 2:19-22).", fr: "Adam a nommé les animaux avant la création d'Ève. Dieu amena les animaux à Adam pour qu'il les nomme, ne trouva aucun aide convenable, puis créa Ève (Genèse 2:19-22)." }
  },
  {
    id: 'b5', levelNumber: 5, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Fall — The Serpent and the Fruit", fr: "La Chute — Le Serpent et le Fruit" }, image: B, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b5-a', isTruth: true,  text: { en: "The serpent was described as more crafty than any other animal God had made.", fr: "Le serpent était décrit comme plus rusé que tous les animaux que Dieu avait faits." } },
      { id: 'b5-b', isTruth: true,  text: { en: "Eve saw that the fruit was good for food, pleasing to the eye, and desirable for gaining wisdom.", fr: "Ève vit que le fruit était bon à manger, agréable à regarder et désirable pour acquérir la sagesse." } },
      { id: 'b5-c', isTruth: true,  text: { en: "God made garments of skin for Adam and Eve after the Fall.", fr: "Dieu a fait des vêtements de peau pour Adam et Ève après la Chute." } },
      { id: 'b5-d', isTruth: false, text: { en: "God gave the serpent, Adam, and Eve exactly the same punishment for the Fall.", fr: "Dieu a infligé exactement la même punition au serpent, à Adam et à Ève après la Chute." } },
    ],
    explanation: { en: "God gave each a distinct punishment: the serpent was cursed to crawl on its belly; Eve received pain in childbearing; Adam was condemned to labor over a cursed ground (Genesis 3:14-19).", fr: "Dieu a donné à chacun une punition distincte : le serpent condamné à ramper, Ève à souffrir lors des accouchements, Adam à peiner sur une terre maudite (Genèse 3:14-19)." }
  },
  {
    id: 'b6', levelNumber: 6, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Cain and Abel", fr: "Caïn et Abel" }, image: B, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b6-a', isTruth: true,  text: { en: "Abel kept flocks while Cain worked the soil.", fr: "Abel était berger tandis que Caïn travaillait la terre." } },
      { id: 'b6-b', isTruth: true,  text: { en: "The LORD looked with favor on Abel's offering but not on Cain's.", fr: "L'Éternel porta un regard favorable sur l'offrande d'Abel, mais pas sur celle de Caïn." } },
      { id: 'b6-c', isTruth: true,  text: { en: "God warned Cain that sin was crouching at his door before Cain killed Abel.", fr: "Dieu avertit Caïn que le péché était tapi à sa porte avant qu'il ne tue Abel." } },
      { id: 'b6-d', isTruth: false, text: { en: "After killing Abel, Cain was sentenced by God to be imprisoned for life.", fr: "Après avoir tué Abel, Caïn fut condamné par Dieu à l'emprisonnement à vie." } },
    ],
    explanation: { en: "God punished Cain by making him a restless wanderer. He was not imprisoned. God also put a mark on Cain so that no one would kill him (Genesis 4:12-15).", fr: "Dieu a puni Caïn en le condamnant à être un errant. Il ne fut pas emprisonné. Dieu mit aussi un signe sur Caïn pour que personne ne le tue (Genèse 4:12-15)." }
  },
  {
    id: 'b7', levelNumber: 7, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Noah Before the Flood", fr: "Noé Avant le Déluge" }, image: B, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b7-a', isTruth: true,  text: { en: "Noah was 600 years old when the floodwaters came upon the earth.", fr: "Noé avait 600 ans lorsque les eaux du déluge se répandirent sur la terre." } },
      { id: 'b7-b', isTruth: true,  text: { en: "God told Noah to make the ark with three decks.", fr: "Dieu ordonna à Noé de construire l'arche avec trois ponts." } },
      { id: 'b7-c', isTruth: false, text: { en: "God commanded Noah to bring two of every animal — exactly one male and one female of every kind.", fr: "Dieu ordonna à Noé d'amener deux de chaque animal — exactement un mâle et une femelle de chaque espèce." } },
      { id: 'b7-d', isTruth: true,  text: { en: "God told Noah He would establish His covenant with him.", fr: "Dieu dit à Noé qu'Il établirait son alliance avec lui." } },
    ],
    explanation: { en: "For clean animals, God commanded seven pairs (seven of every clean animal). Only unclean animals were limited to one pair each. So the command varied by animal type (Genesis 7:2-3).", fr: "Pour les animaux purs, Dieu en demanda sept couples. Seuls les animaux impurs étaient limités à un couple. La commande variait selon le type d'animal (Genèse 7:2-3)." }
  },
  {
    id: 'b8', levelNumber: 8, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Tower of Babel", fr: "La Tour de Babel" }, image: B, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b8-a', isTruth: true,  text: { en: "The whole world had one language before the Tower of Babel.", fr: "Le monde entier parlait une seule langue avant la tour de Babel." } },
      { id: 'b8-b', isTruth: true,  text: { en: "The people wanted to build a tower reaching to the heavens to make a name for themselves.", fr: "Le peuple voulait bâtir une tour atteignant les cieux pour se faire un nom." } },
      { id: 'b8-c', isTruth: true,  text: { en: "God confused the people's language so they could not understand each other.", fr: "Dieu a confondu le langage des gens afin qu'ils ne puissent plus se comprendre." } },
      { id: 'b8-d', isTruth: false, text: { en: "God destroyed the Tower of Babel with fire from heaven.", fr: "Dieu a détruit la tour de Babel avec du feu venant du ciel." } },
    ],
    explanation: { en: "The Bible does not record God destroying the tower. God scattered the people by confusing their language. What happened to the tower itself is not stated (Genesis 11:8).", fr: "La Bible ne mentionne pas que Dieu a détruit la tour. Il a simplement dispersé les gens en confondant leur langage (Genèse 11:8)." }
  },
  {
    id: 'b9', levelNumber: 9, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Abraham's Call", fr: "L'Appel d'Abraham" }, image: B, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b9-a', isTruth: true,  text: { en: "God called Abram to leave his country, his people, and his father's household.", fr: "Dieu appela Abram à quitter son pays, sa parenté et la maison de son père." } },
      { id: 'b9-b', isTruth: true,  text: { en: "Abram was 75 years old when he left Haran in obedience to God's command.", fr: "Abram avait 75 ans lorsqu'il quitta Haran en obéissant à l'ordre de Dieu." } },
      { id: 'b9-c', isTruth: false, text: { en: "Abram went alone to Canaan, leaving his family behind as God commanded.", fr: "Abram s'en alla seul au pays de Canaan, laissant sa famille derrière lui comme Dieu l'avait ordonné." } },
      { id: 'b9-d', isTruth: true,  text: { en: "God promised to make Abram into a great nation and bless those who blessed him.", fr: "Dieu promit de faire d'Abram une grande nation et de bénir ceux qui le béniraient." } },
    ],
    explanation: { en: "Abram took his wife Sarai, his nephew Lot, and all the people and possessions they had acquired in Haran. He did not go alone (Genesis 12:4-5).", fr: "Abram emmena sa femme Saraï, son neveu Lot, et toutes leurs possessions et serviteurs acquis à Haran. Il ne s'en alla pas seul (Genèse 12:4-5)." }
  },
  {
    id: 'b10', levelNumber: 10, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Sodom and Gomorrah", fr: "Sodome et Gomorrhe" }, image: B, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b10-a', isTruth: true,  text: { en: "Abraham negotiated with God, asking Him to spare Sodom if ten righteous people were found there.", fr: "Abraham a négocié avec Dieu, lui demandant d'épargner Sodome si dix justes y étaient trouvés." } },
      { id: 'b10-b', isTruth: true,  text: { en: "Two angels visited Lot in Sodom and were threatened by the men of the city.", fr: "Deux anges rendirent visite à Lot à Sodome et furent menacés par les hommes de la ville." } },
      { id: 'b10-c', isTruth: true,  text: { en: "Lot's wife looked back at the burning city and became a pillar of salt.", fr: "La femme de Lot regarda derrière elle la ville en feu et devint une colonne de sel." } },
      { id: 'b10-d', isTruth: false, text: { en: "Lot and all four of his daughters escaped safely from Sodom.", fr: "Lot et ses quatre filles s'échappèrent tous sains et saufs de Sodome." } },
    ],
    explanation: { en: "Lot had two daughters who escaped. His sons-in-law refused to leave, and his wife turned into a pillar of salt. Only Lot and his two daughters survived (Genesis 19:14-26).", fr: "Lot n'avait que deux filles qui s'échappèrent. Ses gendres refusèrent de partir, et sa femme devint une colonne de sel. Seuls Lot et ses deux filles survécurent (Genèse 19:14-26)." }
  },
  {
    id: 'b11', levelNumber: 11, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Abraham and Isaac — The Sacrifice", fr: "Abraham et Isaac — Le Sacrifice" }, image: B, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b11-a', isTruth: true,  text: { en: "God told Abraham to sacrifice his son Isaac on a mountain in the region of Moriah.", fr: "Dieu ordonna à Abraham d'offrir son fils Isaac en sacrifice sur une montagne en pays de Moria." } },
      { id: 'b11-b', isTruth: true,  text: { en: "Isaac himself carried the wood for the burnt offering up the mountain.", fr: "Isaac porta lui-même le bois de l'holocauste jusqu'au sommet de la montagne." } },
      { id: 'b11-c', isTruth: true,  text: { en: "An angel of the LORD called out to stop Abraham just as he raised the knife.", fr: "Un ange de l'Éternel appela Abraham pour l'arrêter au moment où il levait le couteau." } },
      { id: 'b11-d', isTruth: false, text: { en: "God provided a white bull caught in the bushes as the substitute sacrifice for Isaac.", fr: "Dieu fournit un taureau blanc coincé dans les buissons en substitution au sacrifice d'Isaac." } },
    ],
    explanation: { en: "God provided a ram caught by its horns in a thicket — not a bull. Abraham named that place 'The LORD Will Provide' (Genesis 22:13).", fr: "Dieu fournit un bélier pris par les cornes dans un buisson — pas un taureau. Abraham appela cet endroit 'L'Éternel pourvoira' (Genèse 22:13)." }
  },
  {
    id: 'b12', levelNumber: 12, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Jacob and Esau — The Birthright", fr: "Jacob et Ésaü — Le Droit d'Aînesse" }, image: B, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b12-a', isTruth: true,  text: { en: "Esau was born first and came out covered in red hair.", fr: "Ésaü est né en premier et était couvert de poils roux." } },
      { id: 'b12-b', isTruth: true,  text: { en: "Esau sold his birthright to Jacob for bread and lentil stew.", fr: "Ésaü vendit son droit d'aînesse à Jacob pour du pain et de la soupe aux lentilles." } },
      { id: 'b12-c', isTruth: false, text: { en: "Jacob and Esau were born several years apart to different mothers.", fr: "Jacob et Ésaü sont nés à plusieurs années d'intervalle, de mères différentes." } },
      { id: 'b12-d', isTruth: true,  text: { en: "Jacob came out of the womb grasping Esau's heel, which is how he got his name.", fr: "Jacob sortit du ventre maternel en saisissant le talon d'Ésaü, d'où vient son nom." } },
    ],
    explanation: { en: "Jacob and Esau were twins born to the same mother, Rebekah. They were born on the same day, not years apart (Genesis 25:24-26).", fr: "Jacob et Ésaü étaient des jumeaux nés de la même mère, Rébecca. Ils naquirent le même jour, pas à plusieurs années d'intervalle (Genèse 25:24-26)." }
  },
  {
    id: 'b13', levelNumber: 13, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Jacob's Dream — The Ladder", fr: "Le Rêve de Jacob — L'Échelle" }, image: B, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b13-a', isTruth: true,  text: { en: "Jacob dreamed of a stairway (ladder) reaching from earth to heaven.", fr: "Jacob rêva d'une échelle allant de la terre jusqu'au ciel." } },
      { id: 'b13-b', isTruth: true,  text: { en: "Angels of God were ascending and descending on the stairway in Jacob's dream.", fr: "Des anges de Dieu montaient et descendaient l'échelle dans le rêve de Jacob." } },
      { id: 'b13-c', isTruth: true,  text: { en: "Jacob used a stone as a pillow the night he had this dream.", fr: "Jacob utilisa une pierre comme oreiller la nuit où il fit ce rêve." } },
      { id: 'b13-d', isTruth: false, text: { en: "Jacob had this dream while staying at his uncle Laban's house in Haran.", fr: "Jacob fit ce rêve pendant qu'il séjournait chez son oncle Laban à Haran." } },
    ],
    explanation: { en: "Jacob had this dream at Bethel, while journeying toward Haran. He had not yet arrived at Laban's house when this vision occurred (Genesis 28:10-19).", fr: "Jacob fit ce rêve à Béthel, en route vers Haran. Il n'était pas encore chez Laban quand cette vision se produisit (Genèse 28:10-19)." }
  },
  {
    id: 'b14', levelNumber: 14, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Joseph — His Brothers' Betrayal", fr: "Joseph — La Trahison de ses Frères" }, image: B, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b14-a', isTruth: true,  text: { en: "Joseph's father gave him a richly ornamented robe (coat of many colors).", fr: "Le père de Joseph lui offrit une tunique de plusieurs couleurs (une robe brodée)." } },
      { id: 'b14-b', isTruth: true,  text: { en: "Joseph dreamed that his brothers' sheaves bowed down to his sheaf.", fr: "Joseph rêva que les gerbes de ses frères se prosternaient devant la sienne." } },
      { id: 'b14-c', isTruth: false, text: { en: "Reuben suggested selling Joseph to merchants; he wanted to get rid of him permanently.", fr: "Ruben suggéra de vendre Joseph à des marchands car il voulait se débarrasser de lui définitivement." } },
      { id: 'b14-d', isTruth: true,  text: { en: "Joseph's brothers dipped his robe in goat's blood to deceive their father.", fr: "Les frères de Joseph trempèrent sa tunique dans du sang de bouc pour tromper leur père." } },
    ],
    explanation: { en: "It was Reuben who saved Joseph from death by suggesting they throw him in a pit — secretly planning to rescue him later. It was Judah who then proposed selling Joseph to merchants (Genesis 37:21-27).", fr: "C'est Ruben qui sauva Joseph de la mort en proposant de le jeter dans une citerne, prévoyant de le secourir ensuite. C'est Juda qui proposa de le vendre aux marchands (Genèse 37:21-27)." }
  },
  {
    id: 'b15', levelNumber: 15, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Joseph — From Prison to Palace", fr: "Joseph — De la Prison au Palais" }, image: B, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b15-a', isTruth: true,  text: { en: "Pharaoh dreamed of seven fat cows devoured by seven thin cows.", fr: "Pharaon rêva de sept vaches grasses dévorées par sept vaches maigres." } },
      { id: 'b15-b', isTruth: true,  text: { en: "Joseph interpreted the dreams as seven years of abundance followed by seven years of famine.", fr: "Joseph interpréta les rêves comme sept années d'abondance suivies de sept années de famine." } },
      { id: 'b15-c', isTruth: true,  text: { en: "Pharaoh gave Joseph his signet ring and put him in charge of all Egypt.", fr: "Pharaon donna son anneau à Joseph et le plaça à la tête de tout l'Égypte." } },
      { id: 'b15-d', isTruth: false, text: { en: "Joseph interpreted Pharaoh's dreams while still sitting in his prison cell.", fr: "Joseph interpréta les rêves de Pharaon tout en étant encore assis dans sa cellule de prison." } },
    ],
    explanation: { en: "Joseph was brought out of prison, shaved, changed his clothes, and was then brought before Pharaoh. He interpreted the dreams in Pharaoh's court, not from prison (Genesis 41:14).", fr: "Joseph fut sorti de prison, se rasa, changea de vêtements, puis fut présenté à Pharaon. Il interpréta les rêves dans la cour de Pharaon, pas depuis la prison (Genèse 41:14)." }
  },
  {
    id: 'b16', levelNumber: 16, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Baby Moses", fr: "Bébé Moïse" }, image: B, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b16-a', isTruth: true,  text: { en: "Moses' mother hid him for three months after he was born.", fr: "La mère de Moïse l'a caché pendant trois mois après sa naissance." } },
      { id: 'b16-b', isTruth: true,  text: { en: "Moses was placed in a papyrus basket coated with tar and pitch on the Nile River.", fr: "Moïse fut placé dans un panier de papyrus enduit de bitume et de poix sur le Nil." } },
      { id: 'b16-c', isTruth: false, text: { en: "It was Pharaoh's sister who discovered the basket and adopted Moses as her son.", fr: "C'est la sœur de Pharaon qui découvrit le panier et adopta Moïse comme son fils." } },
      { id: 'b16-d', isTruth: true,  text: { en: "Moses' own mother was hired as his wet nurse after Pharaoh's daughter found him.", fr: "La propre mère de Moïse fut engagée comme nourrice après que la fille de Pharaon l'eut trouvé." } },
    ],
    explanation: { en: "It was Pharaoh's daughter, not his sister, who found the basket and had compassion on Moses. She raised him as her own son (Exodus 2:5-10).", fr: "C'est la fille de Pharaon, et non sa sœur, qui trouva le panier et prit Moïse en pitié. Elle l'éleva comme son propre fils (Exode 2:5-10)." }
  },
  {
    id: 'b17', levelNumber: 17, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Moses and the Burning Bush", fr: "Moïse et le Buisson Ardent" }, image: B, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b17-a', isTruth: true,  text: { en: "Moses saw a bush on fire that was not burning up.", fr: "Moïse vit un buisson en feu qui ne se consumait pas." } },
      { id: 'b17-b', isTruth: true,  text: { en: "God told Moses to remove his sandals because he was standing on holy ground.", fr: "Dieu dit à Moïse d'ôter ses sandales car il se tenait sur une terre sainte." } },
      { id: 'b17-c', isTruth: false, text: { en: "Moses was 40 years old when he encountered the burning bush.", fr: "Moïse avait 40 ans lorsqu'il rencontra le buisson ardent." } },
      { id: 'b17-d', isTruth: true,  text: { en: "God revealed His name to Moses as 'I AM WHO I AM.'", fr: "Dieu révéla son nom à Moïse comme 'Je suis celui qui suis.'" } },
    ],
    explanation: { en: "Moses was approximately 80 years old at the burning bush. He fled Egypt at age 40 after killing an Egyptian, spent 40 years in Midian, then God called him (Acts 7:23, 30; Exodus 7:7).", fr: "Moïse avait environ 80 ans lors du buisson ardent. Il s'enfuit d'Égypte à 40 ans, passa 40 ans à Madian, puis Dieu l'appela (Actes 7:23, 30 ; Exode 7:7)." }
  },
  {
    id: 'b18', levelNumber: 18, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Ten Plagues — Overview", fr: "Les Dix Plaies — Aperçu" }, image: B, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b18-a', isTruth: true,  text: { en: "The first plague turned all the water of the Nile River into blood.", fr: "La première plaie transforma toute l'eau du Nil en sang." } },
      { id: 'b18-b', isTruth: true,  text: { en: "The ninth plague was three days of total darkness covering all of Egypt.", fr: "La neuvième plaie fut trois jours de ténèbres totales couvrant toute l'Égypte." } },
      { id: 'b18-c', isTruth: true,  text: { en: "During the plague of darkness, the Israelites had light in their dwellings.", fr: "Durant la plaie des ténèbres, les Israélites avaient de la lumière dans leurs demeures." } },
      { id: 'b18-d', isTruth: false, text: { en: "The plague of frogs was the third plague sent on Egypt.", fr: "La plaie des grenouilles était la troisième plaie envoyée sur l'Égypte." } },
    ],
    explanation: { en: "Frogs was the second plague, not the third. The order was: blood, frogs, gnats, flies, livestock disease, boils, hail, locusts, darkness, death of firstborn (Exodus 7-12).", fr: "Les grenouilles étaient la deuxième plaie, pas la troisième. L'ordre était : sang, grenouilles, moustiques, mouches, mort du bétail, ulcères, grêle, sauterelles, ténèbres, mort des premiers-nés (Exode 7-12)." }
  },
  {
    id: 'b19', levelNumber: 19, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Passover", fr: "La Pâque" }, image: B, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b19-a', isTruth: true,  text: { en: "God commanded the Israelites to smear lamb's blood on their doorposts and lintel.", fr: "Dieu ordonna aux Israélites de mettre le sang d'un agneau sur leurs montants de portes et leur linteau." } },
      { id: 'b19-b', isTruth: true,  text: { en: "The Israelites were to eat the Passover lamb with bitter herbs and unleavened bread.", fr: "Les Israélites devaient manger l'agneau pascal avec des herbes amères et du pain sans levain." } },
      { id: 'b19-c', isTruth: false, text: { en: "The Israelites celebrated the first Passover for seven days before they left Egypt.", fr: "Les Israélites célébrèrent la première Pâque pendant sept jours avant de quitter l'Égypte." } },
      { id: 'b19-d', isTruth: true,  text: { en: "God said He would 'pass over' the houses marked with blood and spare the firstborn inside.", fr: "Dieu dit qu'Il 'passerait' devant les maisons marquées de sang et épargnerait les premiers-nés." } },
    ],
    explanation: { en: "The Israelites ate the Passover meal quickly and left Egypt that very night. The seven-day Feast of Unleavened Bread was a separate memorial celebration (Exodus 12:11-17).", fr: "Les Israélites mangèrent le repas de la Pâque rapidement et quittèrent l'Égypte cette même nuit. La fête des pains sans levain de sept jours était une commémoration distincte (Exode 12:11-17)." }
  },
  {
    id: 'b20', levelNumber: 20, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Crossing the Red Sea", fr: "La Traversée de la Mer Rouge" }, image: B, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b20-a', isTruth: true,  text: { en: "Moses stretched out his hand and God drove the sea back with a strong east wind.", fr: "Moïse étendit la main et Dieu repoussa la mer par un fort vent d'est." } },
      { id: 'b20-b', isTruth: true,  text: { en: "The Israelites walked through the sea on dry ground with walls of water on both sides.", fr: "Les Israélites traversèrent la mer à pied sur la terre sèche, avec des murs d'eau de chaque côté." } },
      { id: 'b20-c', isTruth: true,  text: { en: "God looked through a pillar of fire and cloud and threw the Egyptian army into confusion.", fr: "Dieu regarda depuis la colonne de feu et de nuée et sema la confusion dans l'armée égyptienne." } },
      { id: 'b20-d', isTruth: false, text: { en: "God destroyed the Egyptian army by sending lightning bolts from the sky.", fr: "Dieu détruisit l'armée égyptienne en envoyant des éclairs depuis le ciel." } },
    ],
    explanation: { en: "God caused the sea to flow back and covered the Egyptian chariots and horsemen. There is no mention of lightning — the water itself returned and overwhelmed them (Exodus 14:27-28).", fr: "Dieu fit revenir les eaux qui submergèrent les chars et les cavaliers égyptiens. Il n'est pas question d'éclairs — ce sont les eaux elles-mêmes qui revinrent et les engloutirent (Exode 14:27-28)." }
  },
  {
    id: 'b21', levelNumber: 21, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Manna in the Wilderness", fr: "La Manne dans le Désert" }, image: B, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b21-a', isTruth: true,  text: { en: "Manna appeared on the ground like thin flakes or frost each morning.", fr: "La manne apparaissait sur le sol comme de minces flocons ou du givre chaque matin." } },
      { id: 'b21-b', isTruth: true,  text: { en: "The Israelites gathered twice as much manna on the sixth day to prepare for the Sabbath.", fr: "Les Israélites ramassèrent deux fois plus de manne le sixième jour pour préparer le Sabbat." } },
      { id: 'b21-c', isTruth: true,  text: { en: "The manna tasted like wafers made with honey.", fr: "La manne avait le goût de gâteaux au miel." } },
      { id: 'b21-d', isTruth: false, text: { en: "Manna appeared every morning including the Sabbath day.", fr: "La manne apparaissait chaque matin, y compris le jour du Sabbat." } },
    ],
    explanation: { en: "God provided no manna on the Sabbath. On the sixth day, a double portion fell so the Israelites would not need to gather on the seventh day (Exodus 16:25-27).", fr: "Dieu ne fit pas tomber de manne le Sabbat. Le sixième jour, une double portion tomba pour que les Israélites n'aient pas à ramasser le septième jour (Exode 16:25-27)." }
  },
  {
    id: 'b22', levelNumber: 22, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Ten Commandments", fr: "Les Dix Commandements" }, image: B, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b22-a', isTruth: true,  text: { en: "God wrote the Ten Commandments on two stone tablets.", fr: "Dieu écrivit les Dix Commandements sur deux tables de pierre." } },
      { id: 'b22-b', isTruth: true,  text: { en: "The Sabbath commandment instructs rest on the seventh day.", fr: "Le commandement du Sabbat ordonne de se reposer le septième jour." } },
      { id: 'b22-c', isTruth: true,  text: { en: "The commandment against idolatry prohibits making any carved image for worship.", fr: "Le commandement contre l'idolâtrie interdit de fabriquer toute image taillée pour l'adorer." } },
      { id: 'b22-d', isTruth: false, text: { en: "Moses received the Ten Commandments on Mount Hermon.", fr: "Moïse reçut les Dix Commandements sur le mont Hermon." } },
    ],
    explanation: { en: "Moses received the Ten Commandments on Mount Sinai (also called Horeb), not Mount Hermon. Mount Hermon is a different northern mountain (Exodus 19:20; 24:12).", fr: "Moïse reçut les Dix Commandements sur le mont Sinaï (aussi appelé Horeb), pas sur le mont Hermon. Le mont Hermon est une montagne différente au nord (Exode 19:20 ; 24:12)." }
  },
  {
    id: 'b23', levelNumber: 23, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Golden Calf", fr: "Le Veau d'Or" }, image: B, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b23-a', isTruth: true,  text: { en: "The Israelites gave Aaron their gold earrings to make the golden calf.", fr: "Les Israélites remirent à Aaron leurs boucles d'oreilles en or pour fabriquer le veau d'or." } },
      { id: 'b23-b', isTruth: true,  text: { en: "Aaron declared of the calf, 'These are your gods, Israel, who brought you up out of Egypt.'", fr: "Aaron déclara au sujet du veau : 'Israël, voici ton dieu qui t'a fait monter du pays d'Égypte.'" } },
      { id: 'b23-c', isTruth: false, text: { en: "God immediately sent an earthquake to punish the Israelites who worshiped the golden calf.", fr: "Dieu envoya immédiatement un tremblement de terre pour punir les Israélites qui adoraient le veau d'or." } },
      { id: 'b23-d', isTruth: true,  text: { en: "Moses was on Mount Sinai for forty days and forty nights before coming down.", fr: "Moïse fut sur le mont Sinaï pendant quarante jours et quarante nuits avant de descendre." } },
    ],
    explanation: { en: "There was no earthquake. Moses interceded with God, then came down and broke the tablets. Those who didn't repent were put to the sword by the Levites — not killed by an earthquake (Exodus 32:26-28).", fr: "Il n'y eut pas de tremblement de terre. Moïse intercéda auprès de Dieu, puis descendit et brisa les tables. Ceux qui ne se repentirent pas furent mis à mort par l'épée des Lévites (Exode 32:26-28)." }
  },
  {
    id: 'b24', levelNumber: 24, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Joshua and Jericho", fr: "Josué et Jéricho" }, image: B, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b24-a', isTruth: true,  text: { en: "God commanded Israel to march around Jericho once a day for six days.", fr: "Dieu ordonna à Israël de faire le tour de Jéricho une fois par jour pendant six jours." } },
      { id: 'b24-b', isTruth: true,  text: { en: "On the seventh day, the Israelites marched around Jericho seven times.", fr: "Le septième jour, les Israélites firent sept fois le tour de Jéricho." } },
      { id: 'b24-c', isTruth: false, text: { en: "The walls of Jericho fell when Moses blew the final trumpet blast.", fr: "Les murs de Jéricho tombèrent lorsque Moïse sonna la trompette finale." } },
      { id: 'b24-d', isTruth: true,  text: { en: "Rahab's family was saved because she tied a scarlet cord in her window as the spies instructed.", fr: "La famille de Rahab fut sauvée parce qu'elle attacha un cordon écarlate à sa fenêtre comme les espions l'avaient ordonné." } },
    ],
    explanation: { en: "Moses had died before the conquest of Jericho. It was Joshua who led Israel. The people shouted after the priests blew the trumpets, and the walls collapsed (Joshua 6:20).", fr: "Moïse était mort avant la conquête de Jéricho. C'est Josué qui mena Israël. Le peuple poussa un grand cri après que les prêtres eurent sonné des trompettes, et les murs s'effondrèrent (Josué 6:20)." }
  },
  {
    id: 'b25', levelNumber: 25, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Samson and Delilah", fr: "Samson et Dalila" }, image: B, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b25-a', isTruth: true,  text: { en: "Samson's great strength was connected to his Nazirite vow, which included never cutting his hair.", fr: "La grande force de Samson était liée à son vœu de naziréat, qui incluait de ne jamais couper ses cheveux." } },
      { id: 'b25-b', isTruth: true,  text: { en: "Delilah repeatedly asked Samson the source of his strength on behalf of the Philistine leaders.", fr: "Dalila demanda à plusieurs reprises à Samson la source de sa force au nom des chefs philistins." } },
      { id: 'b25-c', isTruth: true,  text: { en: "When Samson's hair was shaved off, his strength left him.", fr: "Lorsque les cheveux de Samson furent rasés, sa force le quitta." } },
      { id: 'b25-d', isTruth: false, text: { en: "Delilah herself shaved Samson's head while he slept on her lap.", fr: "Dalila elle-même rasa la tête de Samson pendant qu'il dormait sur ses genoux." } },
    ],
    explanation: { en: "Delilah called for someone else to shave Samson's seven braids — she did not cut the hair herself. Judges 16:19 says 'she called for someone to shave off the seven braids of his hair.'", fr: "Dalila appela quelqu'un d'autre pour raser les sept tresses de Samson — elle ne le fit pas elle-même. Juges 16:19 dit qu'elle 'appela quelqu'un pour lui raser les sept tresses de la tête.'", }
  },
  {
    id: 'b26', levelNumber: 26, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Ruth and Naomi", fr: "Ruth et Naomi" }, image: B, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b26-a', isTruth: true,  text: { en: "Naomi's two sons both died in Moab, leaving two Moabite widows.", fr: "Les deux fils de Naomi moururent tous deux à Moab, laissant deux veuves moabites." } },
      { id: 'b26-b', isTruth: true,  text: { en: "Ruth declared: 'Where you go I will go, and where you stay I will stay.'", fr: "Ruth déclara : 'Où tu iras, j'irai, et où tu demeureras, je demeurerai.'" } },
      { id: 'b26-c', isTruth: true,  text: { en: "Naomi asked to be called 'Mara,' meaning 'bitter,' when she returned to Bethlehem.", fr: "Naomi demanda à être appelée 'Mara', signifiant 'amère', à son retour à Bethléhem." } },
      { id: 'b26-d', isTruth: false, text: { en: "Ruth was Naomi's sister who came from the land of Moab.", fr: "Ruth était la sœur de Naomi et venait du pays de Moab." } },
    ],
    explanation: { en: "Ruth was Naomi's daughter-in-law, not her sister. Ruth had been married to Naomi's son Mahlon. Orpah, the other daughter-in-law, returned to her own people (Ruth 1:4-5).", fr: "Ruth était la belle-fille de Naomi, pas sa sœur. Ruth avait épousé Mahlon, le fils de Naomi. Orpa, l'autre belle-fille, retourna chez son peuple (Ruth 1:4-5)." }
  },
  {
    id: 'b27', levelNumber: 27, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Hannah and the Birth of Samuel", fr: "Hannah et la Naissance de Samuel" }, image: B, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b27-a', isTruth: true,  text: { en: "Hannah was one of Elkanah's two wives and had no children.", fr: "Hannah était l'une des deux femmes d'Elqana et n'avait pas d'enfants." } },
      { id: 'b27-b', isTruth: true,  text: { en: "Hannah prayed at the tabernacle in Shiloh and Eli the priest thought she was drunk.", fr: "Hannah pria au tabernacle à Silo et Éli le sacrificateur pensa qu'elle était ivre." } },
      { id: 'b27-c', isTruth: true,  text: { en: "Hannah vowed that if God gave her a son, no razor would ever touch his head.", fr: "Hannah fit le vœu que si Dieu lui donnait un fils, aucun rasoir ne toucherait jamais sa tête." } },
      { id: 'b27-d', isTruth: false, text: { en: "Hannah dedicated Samuel to the temple immediately after he was born.", fr: "Hannah consacra Samuel au temple immédiatement après sa naissance." } },
    ],
    explanation: { en: "Hannah waited until Samuel was weaned before bringing him to the tabernacle. She nursed him first, and only after weaning him did she present him to Eli at Shiloh (1 Samuel 1:22-24).", fr: "Hannah attendit que Samuel soit sevré avant de le présenter au tabernacle. Elle l'allaita d'abord et ne le présenta à Éli à Silo qu'après le sevrage (1 Samuel 1:22-24)." }
  },
  {
    id: 'b28', levelNumber: 28, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "David and Goliath", fr: "David et Goliath" }, image: B, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b28-a', isTruth: true,  text: { en: "Goliath was from the Philistine city of Gath and stood over nine feet tall.", fr: "Goliath venait de la ville philistine de Gath et mesurait plus de trois mètres." } },
      { id: 'b28-b', isTruth: true,  text: { en: "David chose five smooth stones from a stream before facing Goliath.", fr: "David choisit cinq pierres lisses dans un ruisseau avant d'affronter Goliath." } },
      { id: 'b28-c', isTruth: true,  text: { en: "Goliath challenged Israel for forty days, morning and evening, before David accepted.", fr: "Goliath défia Israël pendant quarante jours, matin et soir, avant que David n'accepte." } },
      { id: 'b28-d', isTruth: false, text: { en: "David struck Goliath on the chest with his first stone, killing him instantly.", fr: "David frappa Goliath à la poitrine avec sa première pierre, le tuant instantanément." } },
    ],
    explanation: { en: "David struck Goliath on the forehead — not the chest — with the first stone, causing him to fall. David then used Goliath's own sword to kill him (1 Samuel 17:49-51).", fr: "David frappa Goliath au front — et non à la poitrine — avec la première pierre, le faisant tomber. David utilisa ensuite l'épée même de Goliath pour l'achever (1 Samuel 17:49-51)." }
  },
  {
    id: 'b29', levelNumber: 29, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Solomon's Wisdom", fr: "La Sagesse de Salomon" }, image: B, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b29-a', isTruth: true,  text: { en: "Solomon asked God for wisdom and discernment to govern the people of Israel.", fr: "Salomon demanda à Dieu la sagesse et l'intelligence pour gouverner le peuple d'Israël." } },
      { id: 'b29-b', isTruth: true,  text: { en: "God was pleased with Solomon's request because he did not ask for riches or long life.", fr: "Dieu fut satisfait de la demande de Salomon car il n'avait pas demandé la richesse ni une longue vie." } },
      { id: 'b29-c', isTruth: false, text: { en: "God appeared to Solomon in a vision through an angel on Mount Zion.", fr: "Dieu apparut à Salomon en vision par l'intermédiaire d'un ange sur le mont Sion." } },
      { id: 'b29-d', isTruth: true,  text: { en: "God also promised Solomon riches and honor beyond any other king if he kept God's statutes.", fr: "Dieu promit également à Salomon des richesses et une gloire sans égale si Salomon gardait ses lois." } },
    ],
    explanation: { en: "God appeared to Solomon in a dream at Gibeon — not in a vision through an angel on Mount Zion. It was a direct dream encounter with God (1 Kings 3:5-12).", fr: "Dieu apparut à Salomon en rêve à Gabaon — et non en vision par un ange sur le mont Sion. C'était une rencontre directe avec Dieu dans un rêve (1 Rois 3:5-12)." }
  },
  {
    id: 'b30', levelNumber: 30, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Elijah and the Prophets of Baal", fr: "Élie et les Prophètes de Baal" }, image: B, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b30-a', isTruth: true,  text: { en: "Elijah challenged 450 prophets of Baal to a contest on Mount Carmel.", fr: "Élie défia 450 prophètes de Baal lors d'un concours sur le mont Carmel." } },
      { id: 'b30-b', isTruth: true,  text: { en: "The prophets of Baal called on their god from morning until noon with no answer.", fr: "Les prophètes de Baal invoquèrent leur dieu depuis le matin jusqu'à midi sans réponse." } },
      { id: 'b30-c', isTruth: true,  text: { en: "Elijah had twelve jars of water poured over his altar and sacrifice before calling on God.", fr: "Élie fit verser douze jarres d'eau sur son autel et son sacrifice avant d'invoquer Dieu." } },
      { id: 'b30-d', isTruth: false, text: { en: "God answered Elijah by sending a mighty wind that swept away the Baal prophets' offering.", fr: "Dieu répondit à Élie en envoyant un vent puissant qui emporta l'offrande des prophètes de Baal." } },
    ],
    explanation: { en: "God sent fire — not wind — that consumed Elijah's burnt offering, the wood, the stones, and even licked up the water in the trench (1 Kings 18:38).", fr: "Dieu envoya du feu — et non du vent — qui consuma l'holocauste d'Élie, le bois, les pierres et absorba même l'eau du fossé (1 Rois 18:38)." }
  },
  {
    id: 'b31', levelNumber: 31, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Elijah and the Still Small Voice", fr: "Élie et la Voix Douce et Légère" }, image: B, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b31-a', isTruth: true,  text: { en: "Queen Jezebel threatened to kill Elijah after he slew the prophets of Baal.", fr: "La reine Jézabel menaça de tuer Élie après qu'il eut tué les prophètes de Baal." } },
      { id: 'b31-b', isTruth: true,  text: { en: "Elijah fled into the wilderness and sat under a broom tree, wishing he could die.", fr: "Élie s'enfuit dans le désert et s'assit sous un genêt, souhaitant mourir." } },
      { id: 'b31-c', isTruth: true,  text: { en: "An angel touched Elijah twice, bringing him food for the journey to Mount Horeb.", fr: "Un ange toucha Élie deux fois, lui apportant de la nourriture pour le voyage vers l'Horeb." } },
      { id: 'b31-d', isTruth: false, text: { en: "Elijah heard God's voice in the midst of a great earthquake on Mount Horeb.", fr: "Élie entendit la voix de Dieu au milieu d'un grand tremblement de terre sur le mont Horeb." } },
    ],
    explanation: { en: "There was a great wind, an earthquake, and fire — but God was not in any of these. God spoke to Elijah in a gentle whisper (still small voice) after all those dramatic events (1 Kings 19:12).", fr: "Il y eut un grand vent, un tremblement de terre et du feu — mais Dieu n'était dans aucun de ces éléments. Dieu parla à Élie dans un murmure doux et léger après tous ces événements dramatiques (1 Rois 19:12)." }
  },
  {
    id: 'b32', levelNumber: 32, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Jonah and the Great Fish", fr: "Jonas et le Grand Poisson" }, image: B, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b32-a', isTruth: true,  text: { en: "God commanded Jonah to go to Nineveh and preach against it.", fr: "Dieu ordonna à Jonas d'aller à Ninive et de prêcher contre elle." } },
      { id: 'b32-b', isTruth: true,  text: { en: "Jonah boarded a ship to Tarshish, fleeing in the opposite direction from Nineveh.", fr: "Jonas monta à bord d'un bateau pour Tarsis, fuyant dans la direction opposée à Ninive." } },
      { id: 'b32-c', isTruth: true,  text: { en: "The sailors cast lots to find who caused the storm, and the lot fell on Jonah.", fr: "Les marins tirèrent au sort pour trouver qui avait causé la tempête, et le sort tomba sur Jonas." } },
      { id: 'b32-d', isTruth: false, text: { en: "Jonah was inside the great fish for seven days and seven nights.", fr: "Jonas fut dans le ventre du grand poisson pendant sept jours et sept nuits." } },
    ],
    explanation: { en: "Jonah was inside the great fish for three days and three nights — not seven. This is also referenced by Jesus as a sign of His own death and resurrection (Jonah 1:17; Matthew 12:40).", fr: "Jonas fut dans le ventre du grand poisson pendant trois jours et trois nuits — pas sept. Jésus y fait référence comme signe de sa mort et de sa résurrection (Jonas 1:17 ; Matthieu 12:40)." }
  },
  {
    id: 'b33', levelNumber: 33, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Shadrach, Meshach, and Abednego", fr: "Shadrach, Méschac et Abed-Nego" }, image: B, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b33-a', isTruth: true,  text: { en: "Nebuchadnezzar built a golden statue ninety feet high and nine feet wide.", fr: "Nébucadnetsar fit construire une statue d'or de vingt-sept mètres de haut et de deux mètres soixante de large." } },
      { id: 'b33-b', isTruth: true,  text: { en: "The three men refused to bow to the statue and were thrown into a blazing furnace.", fr: "Les trois hommes refusèrent de se prosterner devant la statue et furent jetés dans une fournaise ardente." } },
      { id: 'b33-c', isTruth: false, text: { en: "The furnace was heated to three times its normal temperature as punishment.", fr: "La fournaise fut portée à trois fois sa température habituelle comme punition." } },
      { id: 'b33-d', isTruth: true,  text: { en: "Nebuchadnezzar saw four figures walking in the fire, the fourth looking like a son of the gods.", fr: "Nébucadnetsar vit quatre personnages marcher dans le feu, le quatrième ressemblant à un fils de dieux." } },
    ],
    explanation: { en: "The furnace was heated seven times hotter than usual — not three. The fire was so intense it killed the soldiers who threw the three men in (Daniel 3:19).", fr: "La fournaise fut chauffée sept fois plus que d'habitude — pas trois fois. Le feu était si intense qu'il tua les soldats qui y jetèrent les trois hommes (Daniel 3:19)." }
  },
  {
    id: 'b34', levelNumber: 34, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Daniel in the Lions' Den", fr: "Daniel dans la Fosse aux Lions" }, image: B, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b34-a', isTruth: true,  text: { en: "Daniel was thrown into the lions' den because he continued to pray three times a day.", fr: "Daniel fut jeté dans la fosse aux lions parce qu'il continuait à prier trois fois par jour." } },
      { id: 'b34-b', isTruth: true,  text: { en: "King Darius sealed the lions' den with a stone and with his own signet ring.", fr: "Le roi Darius scella la fosse aux lions avec une pierre et son propre anneau." } },
      { id: 'b34-c', isTruth: true,  text: { en: "The king spent the night fasting and could not sleep after throwing Daniel in.", fr: "Le roi passa la nuit à jeûner et ne put dormir après avoir jeté Daniel dans la fosse." } },
      { id: 'b34-d', isTruth: false, text: { en: "Daniel was thrown in because he refused to worship a golden statue.", fr: "Daniel fut jeté dans la fosse parce qu'il refusa d'adorer une statue d'or." } },
    ],
    explanation: { en: "Refusing to worship a statue was the crime of Shadrach, Meshach, and Abednego — not Daniel. Daniel's crime was praying to God after Darius forbade prayer to any god except himself (Daniel 6:7-10).", fr: "Refuser d'adorer une statue était le crime de Shadrach, Méschac et Abed-Nego — pas de Daniel. Le crime de Daniel était de prier Dieu après que Darius eut interdit toute prière à un autre dieu qu'à lui-même (Daniel 6:7-10)." }
  },
  {
    id: 'b35', levelNumber: 35, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Esther Saves Her People", fr: "Esther Sauve son Peuple" }, image: B, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b35-a', isTruth: true,  text: { en: "Esther was a Jewish orphan raised by her older cousin Mordecai.", fr: "Esther était une orpheline juive élevée par son cousin aîné Mardochée." } },
      { id: 'b35-b', isTruth: true,  text: { en: "Haman plotted to destroy all Jews because Mordecai refused to bow down to him.", fr: "Haman complota de détruire tous les Juifs parce que Mardochée refusait de s'incliner devant lui." } },
      { id: 'b35-c', isTruth: true,  text: { en: "Esther called for a three-day fast before approaching the king uninvited.", fr: "Esther demanda un jeûne de trois jours avant de se présenter devant le roi sans invitation." } },
      { id: 'b35-d', isTruth: false, text: { en: "Haman was exiled from the kingdom as punishment for his plot against the Jews.", fr: "Haman fut exilé du royaume en punition de son complot contre les Juifs." } },
    ],
    explanation: { en: "Haman was not exiled — he was hanged on the very gallows he had built to execute Mordecai. The king ordered this after Esther revealed Haman's plot (Esther 7:9-10).", fr: "Haman ne fut pas exilé — il fut pendu à la potence même qu'il avait construite pour exécuter Mardochée, sur ordre du roi après qu'Esther eut révélé son complot (Esther 7:9-10)." }
  },
  {
    id: 'b36', levelNumber: 36, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Birth of Jesus", fr: "La Naissance de Jésus" }, image: B, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b36-a', isTruth: true,  text: { en: "Jesus was born in Bethlehem of Judea.", fr: "Jésus est né à Bethléhem en Judée." } },
      { id: 'b36-b', isTruth: true,  text: { en: "Mary wrapped the baby Jesus in cloths and laid Him in a manger.", fr: "Marie emmaillota le bébé Jésus et le coucha dans une crèche." } },
      { id: 'b36-c', isTruth: true,  text: { en: "An angel of the Lord announced the birth of Jesus to shepherds in nearby fields.", fr: "Un ange du Seigneur annonça la naissance de Jésus à des bergers dans des champs voisins." } },
      { id: 'b36-d', isTruth: false, text: { en: "The Bible records that an innkeeper personally led Mary and Joseph to the stable.", fr: "La Bible rapporte qu'un aubergiste mena personnellement Marie et Joseph à l'étable." } },
    ],
    explanation: { en: "The Bible never mentions an innkeeper speaking to Mary and Joseph. It simply states there was no room in the inn (Luke 2:7). The innkeeper is a tradition not found in scripture.", fr: "La Bible ne mentionne jamais un aubergiste parlant à Marie et Joseph. Elle indique simplement qu'il n'y avait pas de place dans l'hôtellerie (Luc 2:7). L'aubergiste est une tradition absente des Écritures." }
  },
  {
    id: 'b37', levelNumber: 37, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Wise Men", fr: "Les Mages" }, image: B, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b37-a', isTruth: true,  text: { en: "The Magi came from the East and followed a star to find the child Jesus.", fr: "Les mages vinrent de l'Orient et suivirent une étoile pour trouver l'enfant Jésus." } },
      { id: 'b37-b', isTruth: true,  text: { en: "The Magi brought gifts of gold, frankincense, and myrrh.", fr: "Les mages apportèrent des dons d'or, d'encens et de myrrhe." } },
      { id: 'b37-c', isTruth: true,  text: { en: "King Herod was troubled when he heard about the birth of the King of the Jews.", fr: "Le roi Hérode fut troublé en apprenant la naissance du roi des Juifs." } },
      { id: 'b37-d', isTruth: false, text: { en: "The Bible states that exactly three wise men visited the baby Jesus.", fr: "La Bible affirme qu'exactement trois mages visitèrent l'enfant Jésus." } },
    ],
    explanation: { en: "The Bible never specifies the number of Magi. Three gifts are mentioned (gold, frankincense, myrrh), which led to the tradition of three wise men, but the actual number is not given (Matthew 2:1-11).", fr: "La Bible ne précise jamais le nombre de mages. Trois cadeaux sont mentionnés, ce qui a conduit à la tradition des trois mages, mais leur nombre exact n'est pas indiqué (Matthieu 2:1-11)." }
  },
  {
    id: 'b38', levelNumber: 38, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Jesus' Baptism", fr: "Le Baptême de Jésus" }, image: B, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b38-a', isTruth: true,  text: { en: "Jesus was baptized by John the Baptist in the Jordan River.", fr: "Jésus fut baptisé par Jean-Baptiste dans le Jourdain." } },
      { id: 'b38-b', isTruth: true,  text: { en: "The Holy Spirit descended on Jesus like a dove after His baptism.", fr: "Le Saint-Esprit descendit sur Jésus comme une colombe après son baptême." } },
      { id: 'b38-c', isTruth: true,  text: { en: "A voice from heaven said, 'This is my Son, whom I love; with him I am well pleased.'", fr: "Une voix du ciel dit : 'Celui-ci est mon Fils bien-aimé, en qui j'ai mis toute mon affection.'" } },
      { id: 'b38-d', isTruth: false, text: { en: "Jesus' twelve disciples witnessed His baptism and celebrated with Him afterward.", fr: "Les douze disciples de Jésus assistèrent à son baptême et célébrèrent avec lui ensuite." } },
    ],
    explanation: { en: "At the time of Jesus' baptism, He had not yet called any disciples. The twelve disciples were gathered later during His ministry. The Gospels make no mention of disciples at the baptism (Matthew 3:13-17).", fr: "Au moment du baptême de Jésus, il n'avait encore appelé aucun disciple. Les douze furent rassemblés plus tard durant son ministère. Les Évangiles ne mentionnent pas de disciples au baptême (Matthieu 3:13-17)." }
  },
  {
    id: 'b39', levelNumber: 39, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Temptation of Jesus", fr: "La Tentation de Jésus" }, image: B, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b39-a', isTruth: true,  text: { en: "Jesus was led by the Spirit into the wilderness to be tempted by the devil.", fr: "Jésus fut conduit par l'Esprit dans le désert pour être tenté par le diable." } },
      { id: 'b39-b', isTruth: true,  text: { en: "Jesus fasted for forty days and forty nights before the temptation.", fr: "Jésus jeûna quarante jours et quarante nuits avant la tentation." } },
      { id: 'b39-c', isTruth: true,  text: { en: "The devil tempted Jesus to throw Himself from the highest point of the temple.", fr: "Le diable tenta Jésus de se jeter du point le plus élevé du temple." } },
      { id: 'b39-d', isTruth: false, text: { en: "Jesus defeated the devil by performing a miracle to prove His power.", fr: "Jésus vainquit le diable en accomplissant un miracle pour prouver sa puissance." } },
    ],
    explanation: { en: "Jesus defeated each temptation by quoting Scripture from the book of Deuteronomy. He performed no miracles during the temptation (Matthew 4:1-11; Deuteronomy 6 & 8).", fr: "Jésus surmonta chaque tentation en citant des passages du livre du Deutéronome. Il n'accomplit aucun miracle pendant la tentation (Matthieu 4:1-11 ; Deutéronome 6 et 8)." }
  },
  {
    id: 'b40', levelNumber: 40, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Jesus Feeds 5,000", fr: "Jésus Nourrit 5 000 Personnes" }, image: B, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b40-a', isTruth: true,  text: { en: "A boy had five loaves and two fish that Jesus used to feed the multitude.", fr: "Un garçon avait cinq pains et deux poissons que Jésus utilisa pour nourrir la foule." } },
      { id: 'b40-b', isTruth: true,  text: { en: "After everyone ate, the disciples collected twelve basketfuls of leftovers.", fr: "Après que tout le monde eut mangé, les disciples ramassèrent douze corbeilles de restes." } },
      { id: 'b40-c', isTruth: true,  text: { en: "The feeding of the 5,000 is the only miracle recorded in all four Gospels besides the Resurrection.", fr: "La multiplication des pains est le seul miracle rapporté dans les quatre Évangiles avec la Résurrection." } },
      { id: 'b40-d', isTruth: false, text: { en: "The five thousand refers to the total count of everyone who ate, including women and children.", fr: "Les cinq mille désignent le nombre total de tous ceux qui mangèrent, femmes et enfants compris." } },
    ],
    explanation: { en: "The five thousand counted only the men. Matthew 14:21 states 'about five thousand men were fed, besides women and children,' so the total was actually much larger.", fr: "Les cinq mille ne comptaient que les hommes. Matthieu 14:21 précise 'environ cinq mille hommes, sans compter les femmes et les enfants', donc le total était bien plus élevé." }
  },
  {
    id: 'b41', levelNumber: 41, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Jesus Walks on Water", fr: "Jésus Marche sur l'Eau" }, image: B, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b41-a', isTruth: true,  text: { en: "The disciples thought Jesus was a ghost when they saw Him walking on the water.", fr: "Les disciples pensèrent que Jésus était un fantôme lorsqu'ils le virent marcher sur l'eau." } },
      { id: 'b41-b', isTruth: true,  text: { en: "Peter stepped out of the boat and walked on water toward Jesus.", fr: "Pierre sortit du bateau et marcha sur l'eau en direction de Jésus." } },
      { id: 'b41-c', isTruth: true,  text: { en: "Peter began to sink when he noticed the wind and became afraid.", fr: "Pierre commença à s'enfoncer quand il remarqua le vent et prit peur." } },
      { id: 'b41-d', isTruth: false, text: { en: "Jesus walked on water during a sunny, calm afternoon to demonstrate His power.", fr: "Jésus marcha sur l'eau lors d'un après-midi calme et ensoleillé pour démontrer sa puissance." } },
    ],
    explanation: { en: "Jesus walked on water during the night, in the midst of a storm with strong winds. The disciples had been straining at the oars against the wind all night (Matthew 14:22-25; Mark 6:48).", fr: "Jésus marcha sur l'eau de nuit, au milieu d'une tempête avec de forts vents. Les disciples avaient ramé toute la nuit contre le vent (Matthieu 14:22-25 ; Marc 6:48)." }
  },
  {
    id: 'b42', levelNumber: 42, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Zacchaeus", fr: "Zachée" }, image: B, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b42-a', isTruth: true,  text: { en: "Zacchaeus was a chief tax collector who was very wealthy.", fr: "Zachée était un chef des publicains et il était très riche." } },
      { id: 'b42-b', isTruth: true,  text: { en: "Zacchaeus climbed a sycamore-fig tree to see Jesus because he was short in stature.", fr: "Zachée grimpa sur un sycomore pour voir Jésus car il était de petite taille." } },
      { id: 'b42-c', isTruth: true,  text: { en: "Zacchaeus promised to give half of his possessions to the poor.", fr: "Zachée promit de donner la moitié de ses biens aux pauvres." } },
      { id: 'b42-d', isTruth: false, text: { en: "Jesus told Zacchaeus to come down from the tree so they could dine at the synagogue.", fr: "Jésus dit à Zachée de descendre de l'arbre pour qu'ils dînent à la synagogue." } },
    ],
    explanation: { en: "Jesus told Zacchaeus He would stay at his house — not the synagogue. The crowd was angry that Jesus chose to be a guest of a 'sinner' (Luke 19:5-7).", fr: "Jésus dit à Zachée qu'Il logerait chez lui — pas à la synagogue. La foule était indignée que Jésus choisisse d'être l'hôte d'un 'pécheur' (Luc 19:5-7)." }
  },
  {
    id: 'b43', levelNumber: 43, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Good Samaritan", fr: "Le Bon Samaritain" }, image: B, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b43-a', isTruth: true,  text: { en: "A man was attacked by robbers on the road from Jerusalem to Jericho.", fr: "Un homme fut attaqué par des bandits sur la route de Jérusalem à Jéricho." } },
      { id: 'b43-b', isTruth: true,  text: { en: "A priest and then a Levite both passed by the wounded man without helping.", fr: "Un sacrificateur puis un lévite passèrent tous deux devant l'homme blessé sans l'aider." } },
      { id: 'b43-c', isTruth: true,  text: { en: "The Samaritan bandaged the man, put him on his donkey, and paid the innkeeper to care for him.", fr: "Le Samaritain pansa les plaies de l'homme, le chargea sur son âne et paya l'hôtelier pour le soigner." } },
      { id: 'b43-d', isTruth: false, text: { en: "Jesus told this parable in answer to the question 'Who is God?'", fr: "Jésus raconta cette parabole en réponse à la question 'Qui est Dieu ?'" } },
    ],
    explanation: { en: "Jesus told this parable to answer an expert in the Law who asked 'Who is my neighbor?' — after they discussed how to inherit eternal life (Luke 10:25-29).", fr: "Jésus raconta cette parabole pour répondre à un docteur de la loi qui demandait 'Et qui est mon prochain ?' — après avoir discuté de la façon d'hériter la vie éternelle (Luc 10:25-29)." }
  },
  {
    id: 'b44', levelNumber: 44, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Prodigal Son", fr: "Le Fils Prodigue" }, image: B, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b44-a', isTruth: true,  text: { en: "The younger son demanded his share of the inheritance while his father was still alive.", fr: "Le fils cadet réclama sa part d'héritage du vivant de son père." } },
      { id: 'b44-b', isTruth: true,  text: { en: "The younger son squandered his wealth in wild living and ended up feeding pigs.", fr: "Le fils cadet dilapida ses biens dans une vie dissolue et se retrouva à nourrir des porcs." } },
      { id: 'b44-c', isTruth: true,  text: { en: "When the son was still far off, his father ran to meet him and embraced him.", fr: "Alors que le fils était encore loin, son père courut à sa rencontre et l'embrassa." } },
      { id: 'b44-d', isTruth: false, text: { en: "The older son warmly celebrated his brother's return and joined the feast.", fr: "Le fils aîné célébra chaleureusement le retour de son frère et se joignit à la fête." } },
    ],
    explanation: { en: "The older son was angry and refused to go in. He complained to his father that the brother who had wasted his wealth was receiving a feast, while he himself had never been given a party (Luke 15:28-30).", fr: "Le fils aîné était en colère et refusa d'entrer. Il se plaignit à son père que le frère qui avait dilapidé ses biens recevait une fête, alors qu'on ne lui avait jamais donné de festin (Luc 15:28-30)." }
  },
  {
    id: 'b45', levelNumber: 45, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Last Supper", fr: "La Cène" }, image: B, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b45-a', isTruth: true,  text: { en: "Jesus told his disciples that one of them would betray Him at the Last Supper.", fr: "Jésus dit à ses disciples que l'un d'eux le trahirait lors de la Cène." } },
      { id: 'b45-b', isTruth: true,  text: { en: "Jesus broke bread and said 'This is my body, given for you; do this in remembrance of me.'", fr: "Jésus rompit le pain et dit : 'Ceci est mon corps, livré pour vous ; faites ceci en mémoire de moi.'" } },
      { id: 'b45-c', isTruth: true,  text: { en: "Jesus washed the feet of His disciples before the meal, including Judas.", fr: "Jésus lava les pieds de ses disciples avant le repas, y compris ceux de Judas." } },
      { id: 'b45-d', isTruth: false, text: { en: "Judas left the Last Supper after Jesus openly announced in front of all that Judas was the betrayer.", fr: "Judas quitta la Cène après que Jésus eut ouvertement annoncé devant tous que Judas était le traître." } },
    ],
    explanation: { en: "Jesus gave a sign to John by dipping a piece of bread and handing it to Judas, but this was not a public announcement to all. Judas left, and the others did not understand why (John 13:27-29).", fr: "Jésus donna un signe à Jean en trempant un morceau de pain et en le donnant à Judas, mais ce n'était pas une annonce publique à tous. Judas sortit, et les autres ne comprirent pas pourquoi (Jean 13:27-29)." }
  },
  {
    id: 'b46', levelNumber: 46, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Resurrection", fr: "La Résurrection" }, image: B, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b46-a', isTruth: true,  text: { en: "Jesus rose from the dead on the first day of the week — Sunday.", fr: "Jésus ressuscita le premier jour de la semaine — le dimanche." } },
      { id: 'b46-b', isTruth: true,  text: { en: "Mary Magdalene was among the first to discover the empty tomb.", fr: "Marie-Madeleine fut parmi les premières à découvrir le tombeau vide." } },
      { id: 'b46-c', isTruth: true,  text: { en: "An angel told the women not to be afraid because Jesus had risen from the dead.", fr: "Un ange dit aux femmes de ne pas craindre car Jésus était ressuscité d'entre les morts." } },
      { id: 'b46-d', isTruth: false, text: { en: "Jesus immediately appeared to all twelve apostles simultaneously when He rose from the dead.", fr: "Jésus apparut simultanément aux douze apôtres dès sa résurrection." } },
    ],
    explanation: { en: "Judas had died, leaving only eleven apostles. Also, Jesus appeared first to Mary Magdalene, then to two disciples on the road to Emmaus, then to the eleven — not all at once (Luke 24; John 20).", fr: "Judas était mort, ne laissant que onze apôtres. De plus, Jésus apparut d'abord à Marie-Madeleine, puis à deux disciples sur le chemin d'Emmaüs, puis aux onze — pas tous simultanément (Luc 24 ; Jean 20)." }
  },
  {
    id: 'b47', levelNumber: 47, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Pentecost", fr: "La Pentecôte" }, image: B, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b47-a', isTruth: true,  text: { en: "The disciples were all together in one place when the Holy Spirit came at Pentecost.", fr: "Les disciples étaient tous réunis au même endroit lorsque le Saint-Esprit vint à la Pentecôte." } },
      { id: 'b47-b', isTruth: true,  text: { en: "What appeared as tongues of fire rested on each of them at Pentecost.", fr: "Ce qui ressemblait à des langues de feu se posa sur chacun d'eux à la Pentecôte." } },
      { id: 'b47-c', isTruth: true,  text: { en: "The disciples spoke in other tongues as the Spirit enabled them.", fr: "Les disciples parlèrent en d'autres langues selon que l'Esprit leur accordait de s'exprimer." } },
      { id: 'b47-d', isTruth: false, text: { en: "The entire crowd immediately believed after witnessing the disciples speak in tongues.", fr: "La foule entière crut immédiatement après avoir vu les disciples parler en d'autres langues." } },
    ],
    explanation: { en: "Many in the crowd were amazed, but others mocked, saying the disciples were drunk on new wine. It was after Peter's sermon that about three thousand believed (Acts 2:13-41).", fr: "Beaucoup dans la foule étaient stupéfaits, mais d'autres se moquaient, disant que les disciples étaient ivres. C'est après le sermon de Pierre qu'environ trois mille personnes crurent (Actes 2:13-41)." }
  },
  {
    id: 'b48', levelNumber: 48, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Jesus at the Temple — Age 12", fr: "Jésus au Temple — 12 Ans" }, image: B, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b48-a', isTruth: true,  text: { en: "Jesus' parents found Him in the temple courts sitting among the teachers, listening and asking questions.", fr: "Les parents de Jésus le trouvèrent dans le temple, assis au milieu des docteurs, les écoutant et les interrogeant." } },
      { id: 'b48-b', isTruth: true,  text: { en: "Mary and Joseph searched for Jesus for three days before finding Him in Jerusalem.", fr: "Marie et Joseph cherchèrent Jésus pendant trois jours avant de le trouver à Jérusalem." } },
      { id: 'b48-c', isTruth: true,  text: { en: "Jesus told his mother that He must be in His Father's house.", fr: "Jésus dit à sa mère qu'il devait être chez son Père." } },
      { id: 'b48-d', isTruth: false, text: { en: "This event happened when Jesus was about eight years old.", fr: "Cet événement se produisit lorsque Jésus avait environ huit ans." } },
    ],
    explanation: { en: "Jesus was twelve years old when His parents found Him in the temple. This is the only recorded event from Jesus' childhood between His birth and the start of His ministry (Luke 2:42).", fr: "Jésus avait douze ans lorsque ses parents le trouvèrent au temple. C'est le seul événement enregistré de l'enfance de Jésus entre sa naissance et le début de son ministère (Luc 2:42)." }
  },
  {
    id: 'b49', levelNumber: 49, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Lost Sheep", fr: "La Brebis Perdue" }, image: B, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b49-a', isTruth: true,  text: { en: "In the parable, a shepherd left ninety-nine sheep to search for one lost sheep.", fr: "Dans la parabole, un berger laissa les quatre-vingt-dix-neuf brebis pour en chercher une seule perdue." } },
      { id: 'b49-b', isTruth: true,  text: { en: "When the shepherd found the lost sheep, he joyfully put it on his shoulders and carried it home.", fr: "Quand le berger trouva la brebis perdue, il la posa joyeusement sur ses épaules et la ramena chez lui." } },
      { id: 'b49-c', isTruth: true,  text: { en: "Jesus said there is more joy in heaven over one sinner who repents than over ninety-nine righteous people.", fr: "Jésus dit qu'il y a plus de joie dans le ciel pour un pécheur qui se repent que pour quatre-vingt-dix-neuf justes." } },
      { id: 'b49-d', isTruth: false, text: { en: "The parable of the Lost Sheep is found only in the Gospel of Luke.", fr: "La parabole de la brebis perdue se trouve uniquement dans l'Évangile de Luc." } },
    ],
    explanation: { en: "The parable of the Lost Sheep appears in both Luke 15 and Matthew 18 — though with slightly different emphasis. It is not exclusive to Luke.", fr: "La parabole de la brebis perdue apparaît à la fois dans Luc 15 et Matthieu 18 — bien qu'avec des nuances différentes. Elle n'est pas exclusive à Luc." }
  },
  {
    id: 'b50', levelNumber: 50, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Wedding at Cana", fr: "Les Noces de Cana" }, image: B, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b50-a', isTruth: true,  text: { en: "The wedding at Cana was the first of Jesus' miracles recorded in the Gospel of John.", fr: "Les noces de Cana marquent le premier miracle de Jésus rapporté dans l'Évangile de Jean." } },
      { id: 'b50-b', isTruth: true,  text: { en: "Mary told the servants to do whatever Jesus said when the wine ran out.", fr: "Marie dit aux serviteurs de faire tout ce que Jésus leur dirait lorsque le vin manqua." } },
      { id: 'b50-c', isTruth: true,  text: { en: "Jesus told servants to fill six stone water jars used for Jewish purification with water.", fr: "Jésus demanda aux serviteurs de remplir d'eau six jarres de pierre utilisées pour la purification juive." } },
      { id: 'b50-d', isTruth: false, text: { en: "Jesus turned water into wine so He could prove His identity to the Pharisees who were present.", fr: "Jésus changea l'eau en vin pour prouver son identité aux Pharisiens présents." } },
    ],
    explanation: { en: "The miracle at Cana was performed for the joy of the wedding couple and revealed Jesus' glory to His disciples. There is no mention of Pharisees being present at this wedding (John 2:1-11).", fr: "Le miracle de Cana fut accompli pour la joie des mariés et révéla la gloire de Jésus à ses disciples. Il n'est pas question de Pharisiens présents à ce mariage (Jean 2:1-11)." }
  },
  {
    id: 'b51', levelNumber: 51, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Lazarus Raised from the Dead", fr: "Lazare Ressuscité" }, image: B, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b51-a', isTruth: true,  text: { en: "Lazarus had been in the tomb for four days when Jesus arrived.", fr: "Lazare était dans le tombeau depuis quatre jours quand Jésus arriva." } },
      { id: 'b51-b', isTruth: true,  text: { en: "Jesus wept when He saw the grief of Mary and those with her.", fr: "Jésus pleura en voyant le deuil de Marie et de ceux qui l'accompagnaient." } },
      { id: 'b51-c', isTruth: true,  text: { en: "Jesus prayed aloud to the Father before calling Lazarus out of the tomb.", fr: "Jésus pria à voix haute pour le Père avant d'appeler Lazare à sortir du tombeau." } },
      { id: 'b51-d', isTruth: false, text: { en: "Lazarus came out of the tomb walking freely, wearing only a white robe.", fr: "Lazare sortit du tombeau en marchant librement, vêtu uniquement d'une robe blanche." } },
    ],
    explanation: { en: "Lazarus came out still bound in grave clothes (strips of linen with a cloth around his face). Jesus told the bystanders to unwrap him and let him go (John 11:44).", fr: "Lazare sortit encore enveloppé dans ses bandelettes de lin, avec un linge autour du visage. Jésus dit aux assistants de le délier et de le laisser aller (Jean 11:44)." }
  },
  {
    id: 'b52', levelNumber: 52, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Palm Sunday", fr: "Le Dimanche des Rameaux" }, image: B, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b52-a', isTruth: true,  text: { en: "Jesus rode into Jerusalem on a donkey to fulfill the prophecy of Zechariah.", fr: "Jésus entra dans Jérusalem sur un âne pour accomplir la prophétie de Zacharie." } },
      { id: 'b52-b', isTruth: true,  text: { en: "The crowds spread their cloaks and palm branches on the road before Jesus.", fr: "Les foules étendirent leurs manteaux et des branches de palmiers sur la route devant Jésus." } },
      { id: 'b52-c', isTruth: true,  text: { en: "The crowd shouted 'Hosanna! Blessed is he who comes in the name of the Lord!'", fr: "La foule criait : 'Hosanna ! Béni soit celui qui vient au nom du Seigneur !'" } },
      { id: 'b52-d', isTruth: false, text: { en: "The Pharisees supported the crowd's praise of Jesus on Palm Sunday.", fr: "Les Pharisiens approuvèrent les louanges de la foule envers Jésus le dimanche des Rameaux." } },
    ],
    explanation: { en: "The Pharisees told Jesus to rebuke His disciples for their shouts of praise. Jesus replied that if they were silent, the stones would cry out (Luke 19:39-40).", fr: "Les Pharisiens demandèrent à Jésus de faire taire ses disciples. Jésus répondit que si ceux-ci se taisaient, les pierres crieraient (Luc 19:39-40)." }
  },
  {
    id: 'b53', levelNumber: 53, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Peter's Denial", fr: "Le Reniement de Pierre" }, image: B, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b53-a', isTruth: true,  text: { en: "Jesus predicted Peter would deny Him three times before the rooster crowed.", fr: "Jésus prédit que Pierre le renierait trois fois avant que le coq ne chante." } },
      { id: 'b53-b', isTruth: true,  text: { en: "Peter denied knowing Jesus to a servant girl and then to others by the fire.", fr: "Pierre nia connaître Jésus devant une servante, puis devant d'autres personnes près du feu." } },
      { id: 'b53-c', isTruth: true,  text: { en: "After the rooster crowed, Peter went outside and wept bitterly.", fr: "Après le chant du coq, Pierre sortit et pleura amèrement." } },
      { id: 'b53-d', isTruth: false, text: { en: "Peter denied Jesus only once before realizing what he had done.", fr: "Pierre nia Jésus une seule fois avant de réaliser ce qu'il avait fait." } },
    ],
    explanation: { en: "Peter denied Jesus exactly three times, just as Jesus had predicted. The third denial was accompanied by cursing and swearing to emphasize he did not know Jesus (Matthew 26:69-75).", fr: "Pierre nia Jésus exactement trois fois, comme Jésus l'avait prédit. Le troisième reniement fut accompagné de serments et d'imprécations (Matthieu 26:69-75)." }
  },
  {
    id: 'b54', levelNumber: 54, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Sermon on the Mount — The Beatitudes", fr: "Le Sermon sur la Montagne — Les Béatitudes" }, image: B, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b54-a', isTruth: true,  text: { en: "Jesus taught the Beatitudes on a mountainside, beginning with 'Blessed are the poor in spirit.'", fr: "Jésus enseigna les Béatitudes sur une montagne, en commençant par 'Heureux les pauvres en esprit.'" } },
      { id: 'b54-b', isTruth: true,  text: { en: "Jesus declared 'Blessed are the peacemakers, for they will be called children of God.'", fr: "Jésus déclara : 'Heureux les artisans de paix, car ils seront appelés fils de Dieu.'" } },
      { id: 'b54-c', isTruth: true,  text: { en: "Jesus said 'Blessed are the pure in heart, for they will see God.'", fr: "Jésus dit : 'Heureux les cœurs purs, car ils verront Dieu.'" } },
      { id: 'b54-d', isTruth: false, text: { en: "The Sermon on the Mount was preached inside the synagogue in Capernaum.", fr: "Le Sermon sur la Montagne fut prêché à l'intérieur de la synagogue de Capharnaüm." } },
    ],
    explanation: { en: "Jesus gave the Sermon on the Mount on a mountainside (hillside), not inside a synagogue. Seeing the crowds, He went up on a mountain and sat down to teach (Matthew 5:1).", fr: "Jésus prononça le Sermon sur la Montagne sur un versant de montagne, pas dans une synagogue. Voyant les foules, il monta sur la montagne et s'assit pour enseigner (Matthieu 5:1)." }
  },
  {
    id: 'b55', levelNumber: 55, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Transfiguration", fr: "La Transfiguration" }, image: B, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b55-a', isTruth: true,  text: { en: "Jesus' face shone like the sun and His clothes became as white as light during the Transfiguration.", fr: "Le visage de Jésus brilla comme le soleil et ses vêtements devinrent blancs comme la lumière lors de la Transfiguration." } },
      { id: 'b55-b', isTruth: true,  text: { en: "Moses and Elijah appeared with Jesus and talked with Him during the Transfiguration.", fr: "Moïse et Élie apparurent avec Jésus et s'entretinrent avec lui lors de la Transfiguration." } },
      { id: 'b55-c', isTruth: true,  text: { en: "Peter, James, and John witnessed the Transfiguration.", fr: "Pierre, Jacques et Jean furent témoins de la Transfiguration." } },
      { id: 'b55-d', isTruth: false, text: { en: "During the Transfiguration, the angel Gabriel appeared and announced Jesus as the Messiah.", fr: "Lors de la Transfiguration, l'ange Gabriel apparut et annonça Jésus comme le Messie." } },
    ],
    explanation: { en: "Gabriel did not appear at the Transfiguration. Instead, a bright cloud covered them and a voice from the cloud said, 'This is my Son, whom I love; with him I am well pleased. Listen to him!' (Matthew 17:5).", fr: "Gabriel n'apparut pas lors de la Transfiguration. Une nuée lumineuse les couvrit et une voix dit : 'Celui-ci est mon Fils bien-aimé, en qui j'ai mis toute mon affection ; écoutez-le !' (Matthieu 17:5)." }
  },
  {
    id: 'b56', levelNumber: 56, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Healing of Ten Lepers", fr: "La Guérison de Dix Lépreux" }, image: B, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b56-a', isTruth: true,  text: { en: "Jesus healed ten lepers who called out to Him for mercy.", fr: "Jésus guérit dix lépreux qui l'appelèrent à l'aide." } },
      { id: 'b56-b', isTruth: true,  text: { en: "Only one of the ten healed lepers returned to thank Jesus.", fr: "Un seul des dix lépreux guéris revint remercier Jésus." } },
      { id: 'b56-c', isTruth: true,  text: { en: "The leper who returned to thank Jesus was a Samaritan.", fr: "Le lépreux qui revint remercier Jésus était un Samaritain." } },
      { id: 'b56-d', isTruth: false, text: { en: "Jesus healed the lepers by touching each one individually on the forehead.", fr: "Jésus guérit les lépreux en touchant le front de chacun individuellement." } },
    ],
    explanation: { en: "Jesus did not touch them. He simply told the ten lepers to 'Go, show yourselves to the priests.' As they went, they were cleansed — their healing came while they were walking in obedience (Luke 17:14).", fr: "Jésus ne les toucha pas. Il dit simplement aux dix lépreux : 'Allez, montrez-vous aux sacrificateurs.' En chemin, ils furent purifiés — leur guérison vint pendant qu'ils marchaient dans l'obéissance (Luc 17:14)." }
  },
  {
    id: 'b57', levelNumber: 57, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Lord's Prayer", fr: "La Prière du Seigneur" }, image: B, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b57-a', isTruth: true,  text: { en: "Jesus taught His disciples to pray 'Our Father in heaven, hallowed be your name.'", fr: "Jésus apprit à ses disciples à prier : 'Notre Père qui es aux cieux, que ton nom soit sanctifié.'" } },
      { id: 'b57-b', isTruth: true,  text: { en: "The Lord's Prayer includes asking for daily bread and forgiveness of debts/sins.", fr: "La Prière du Seigneur comprend une demande de pain quotidien et de pardon des dettes/péchés." } },
      { id: 'b57-c', isTruth: false, text: { en: "Jesus first taught the Lord's Prayer to the crowd on the Mount during His Sermon on the Mount only.", fr: "Jésus enseigna la Prière du Seigneur uniquement à la foule lors du Sermon sur la Montagne." } },
      { id: 'b57-d', isTruth: true,  text: { en: "The Lord's Prayer includes the petition 'Lead us not into temptation, but deliver us from evil.'", fr: "La Prière du Seigneur comprend la demande : 'Ne nous induis pas en tentation, mais délivre-nous du mal.'" } },
    ],
    explanation: { en: "A version of the Lord's Prayer appears in Matthew 5-7 (Sermon on the Mount), but Luke 11:1-4 records Jesus teaching it again privately to His disciples after one of them asked Him to teach them to pray.", fr: "Une version de la Prière du Seigneur apparaît dans Matthieu 5-7 (Sermon sur la Montagne), mais Luc 11:1-4 rapporte que Jésus l'enseigna aussi en privé à ses disciples après qu'un d'eux lui demanda comment prier." }
  },
  {
    id: 'b58', levelNumber: 58, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Jacob's Blessing — Disguise of Isaac", fr: "La Bénédiction de Jacob — La Ruse d'Isaac" }, image: B, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b58-a', isTruth: true,  text: { en: "Rebekah helped Jacob deceive his father Isaac to steal Esau's blessing.", fr: "Rébecca aida Jacob à tromper son père Isaac pour lui voler la bénédiction d'Ésaü." } },
      { id: 'b58-b', isTruth: true,  text: { en: "Jacob wore goatskins on his arms and neck to feel like the hairy Esau to his blind father.", fr: "Jacob mit des peaux de chevreau sur ses bras et son cou pour paraître poilu comme Ésaü à son père aveugle." } },
      { id: 'b58-c', isTruth: true,  text: { en: "Isaac gave Jacob the blessing that made him lord over his brothers and nations would serve him.", fr: "Isaac donna à Jacob la bénédiction qui en faisait le seigneur de ses frères et que des nations lui serviraient." } },
      { id: 'b58-d', isTruth: false, text: { en: "When Esau discovered the deception, he immediately forgave Jacob and shared the blessing.", fr: "Quand Ésaü découvrit la tromperie, il pardonna immédiatement à Jacob et partagea la bénédiction." } },
    ],
    explanation: { en: "Esau was furious and wept bitterly. He planned to kill Jacob after their father died. Jacob had to flee to his uncle Laban's house to escape Esau's rage (Genesis 27:41-43).", fr: "Ésaü était furieux et pleura amèrement. Il projetait de tuer Jacob après la mort de leur père. Jacob dut fuir chez son oncle Laban pour échapper à la colère d'Ésaü (Genèse 27:41-43)." }
  },
  {
    id: 'b59', levelNumber: 59, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Balaam's Donkey", fr: "L'Ânesse de Balaam" }, image: B, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b59-a', isTruth: true,  text: { en: "Balaam was a prophet hired by King Balak to curse the Israelites.", fr: "Balaam était un prophète engagé par le roi Balak pour maudire les Israélites." } },
      { id: 'b59-b', isTruth: true,  text: { en: "An angel of the LORD stood in the road with a drawn sword, and Balaam's donkey saw it but Balaam did not.", fr: "Un ange de l'Éternel se tint sur le chemin avec une épée nue ; l'ânesse de Balaam le vit, mais pas Balaam." } },
      { id: 'b59-c', isTruth: true,  text: { en: "God opened the donkey's mouth so it spoke to Balaam.", fr: "Dieu ouvrit la bouche de l'ânesse qui parla à Balaam." } },
      { id: 'b59-d', isTruth: false, text: { en: "Balaam successfully cursed the Israelites four times as Balak requested.", fr: "Balaam maudit avec succès les Israélites quatre fois comme Balak l'avait demandé." } },
    ],
    explanation: { en: "Balaam blessed Israel instead of cursing them — repeatedly! Every time Balak brought him to a new vantage point, God put blessings in Balaam's mouth instead of curses (Numbers 22-24).", fr: "Balaam bénit Israël au lieu de le maudire — à plusieurs reprises ! Chaque fois que Balak l'amenait à un nouveau point de vue, Dieu mettait des bénédictions dans sa bouche au lieu de malédictions (Nombres 22-24)." }
  },
  {
    id: 'b60', levelNumber: 60, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Saul Becomes King", fr: "Saül Devient Roi" }, image: B, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b60-a', isTruth: true,  text: { en: "The Israelites asked Samuel for a king so they could be like other nations.", fr: "Les Israélites demandèrent à Samuel un roi pour être comme les autres nations." } },
      { id: 'b60-b', isTruth: true,  text: { en: "Saul was from the tribe of Benjamin and was taller than anyone else in Israel.", fr: "Saül appartenait à la tribu de Benjamin et était plus grand que quiconque en Israël." } },
      { id: 'b60-c', isTruth: true,  text: { en: "God warned the Israelites that a king would take their sons for his army and their daughters for his service.", fr: "Dieu avertit les Israélites qu'un roi prendrait leurs fils pour son armée et leurs filles pour son service." } },
      { id: 'b60-d', isTruth: false, text: { en: "Saul was anointed king by the prophet Elijah.", fr: "Saül fut oint roi par le prophète Élie." } },
    ],
    explanation: { en: "Saul was anointed king by Samuel, not Elijah. Elijah lived centuries later during the reign of King Ahab. Samuel was Israel's last judge and first prophet-kingmaker (1 Samuel 10:1).", fr: "Saül fut oint roi par Samuel, pas par Élie. Élie vécut des siècles plus tard sous le règne du roi Achab. Samuel était le dernier juge et le premier prophète à désigner un roi en Israël (1 Samuel 10:1)." }
  },
  {
    id: 'b61', levelNumber: 61, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Crucifixion", fr: "La Crucifixion" }, image: B, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b61-a', isTruth: true,  text: { en: "Jesus was crucified at a place called Golgotha, meaning 'The Place of the Skull.'", fr: "Jésus fut crucifié en un lieu appelé Golgotha, signifiant 'Le Lieu du Crâne.'" } },
      { id: 'b61-b', isTruth: true,  text: { en: "Darkness covered the land for three hours during the crucifixion.", fr: "Les ténèbres couvrirent le pays pendant trois heures lors de la crucifixion." } },
      { id: 'b61-c', isTruth: true,  text: { en: "A Roman soldier pierced Jesus' side with a spear after He died.", fr: "Un soldat romain perça le côté de Jésus avec une lance après sa mort." } },
      { id: 'b61-d', isTruth: false, text: { en: "All of Jesus' twelve apostles stood at the foot of the cross when He died.", fr: "Les douze apôtres de Jésus se tenaient tous au pied de la croix quand il mourut." } },
    ],
    explanation: { en: "Most of the disciples had fled. At the cross stood Jesus' mother Mary, Mary Magdalene, other women, and the beloved disciple (John). Judas was already dead, and most male disciples had scattered (John 19:25-27).", fr: "La plupart des disciples avaient fui. Au pied de la croix se tenaient Marie, Marie-Madeleine, d'autres femmes et le disciple bien-aimé (Jean). Judas était déjà mort, et la plupart des disciples hommes s'étaient dispersés (Jean 19:25-27)." }
  },
  {
    id: 'b62', levelNumber: 62, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Gideon's Army", fr: "L'Armée de Gédéon" }, image: B, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b62-a', isTruth: true,  text: { en: "God told Gideon his army of 32,000 was too large to defeat the Midianites, so God would get no glory.", fr: "Dieu dit à Gédéon que son armée de 32 000 hommes était trop grande, sinon Dieu n'en recevrait aucune gloire." } },
      { id: 'b62-b', isTruth: true,  text: { en: "God reduced Gideon's army to 300 men by observing how they drank water from a stream.", fr: "Dieu réduisit l'armée de Gédéon à 300 hommes en observant comment ils buvaient l'eau d'un ruisseau." } },
      { id: 'b62-c', isTruth: true,  text: { en: "Gideon's 300 men used trumpets, empty jars, and torches to rout the Midianite army.", fr: "Les 300 hommes de Gédéon utilisèrent des trompettes, des cruches vides et des torches pour mettre l'armée madianite en déroute." } },
      { id: 'b62-d', isTruth: false, text: { en: "Gideon's army of 300 defeated the Midianites by fighting them in a traditional sword battle.", fr: "L'armée de 300 hommes de Gédéon vainquit les Madianites dans une bataille traditionnelle à l'épée." } },
    ],
    explanation: { en: "The victory came through a surprise psychological attack — torches, jars, and trumpets in the night caused the Midianite army to panic and turn on each other. No conventional battle took place (Judges 7:19-22).", fr: "La victoire vint d'une attaque psychologique surprise — des torches, des cruches et des trompettes dans la nuit paniquèrent l'armée madianite qui se retourna contre elle-même. Il n'y eut pas de bataille conventionnelle (Juges 7:19-22)." }
  },
  {
    id: 'b63', levelNumber: 63, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "The Parable of the Talents", fr: "La Parabole des Talents" }, image: B, badgeColor: 'bg-emerald-700', testament: 'New',
    statements: [
      { id: 'b63-a', isTruth: true,  text: { en: "A master gave talents (large sums of money) to his three servants before going on a journey.", fr: "Un maître donna des talents (grandes sommes d'argent) à ses trois serviteurs avant de partir en voyage." } },
      { id: 'b63-b', isTruth: true,  text: { en: "The servant who received five talents doubled his master's investment to ten.", fr: "Le serviteur qui reçut cinq talents doubla l'investissement de son maître jusqu'à dix." } },
      { id: 'b63-c', isTruth: false, text: { en: "The servant who buried his talent was praised for keeping it safe.", fr: "Le serviteur qui enfouit son talent fut félicité pour l'avoir gardé en sécurité." } },
      { id: 'b63-d', isTruth: true,  text: { en: "The talent that was buried was taken away and given to the servant who had ten.", fr: "Le talent enfoui fut ôté au serviteur et donné à celui qui en avait dix." } },
    ],
    explanation: { en: "The servant who buried his talent was condemned as wicked and lazy. He was cast into outer darkness. His talent was taken from him and given to the one who had ten (Matthew 25:26-30).", fr: "Le serviteur qui enfouit son talent fut condamné comme méchant et paresseux. Il fut jeté dans les ténèbres du dehors. Son talent lui fut ôté et donné à celui qui en avait dix (Matthieu 25:26-30)." }
  },
  {
    id: 'b64', levelNumber: 64, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Job's Suffering", fr: "La Souffrance de Job" }, image: B, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b64-a', isTruth: true,  text: { en: "God allowed Satan to test Job, but initially Satan was forbidden to touch Job's body.", fr: "Dieu permit à Satan d'éprouver Job, mais Satan ne put d'abord pas toucher son corps." } },
      { id: 'b64-b', isTruth: true,  text: { en: "Job lost his children, his livestock, and his servants in sudden disasters.", fr: "Job perdit ses enfants, son bétail et ses serviteurs dans des catastrophes soudaines." } },
      { id: 'b64-c', isTruth: true,  text: { en: "Job's three friends sat with him in silence for seven days before speaking.", fr: "Les trois amis de Job restèrent assis en silence avec lui pendant sept jours avant de prendre la parole." } },
      { id: 'b64-d', isTruth: false, text: { en: "Job cursed God and abandoned his faith after losing everything.", fr: "Job maudit Dieu et abandonna sa foi après avoir tout perdu." } },
    ],
    explanation: { en: "Job never cursed God. He did curse the day of his birth and questioned God intensely, but throughout the book Job maintained his integrity and ultimately affirmed his trust in God (Job 2:10; 19:25).", fr: "Job ne maudit jamais Dieu. Il maudit le jour de sa naissance et questionna intensément Dieu, mais tout au long du livre il maintint son intégrité et affirma finalement sa confiance en Dieu (Job 2:10 ; 19:25)." }
  },
  {
    id: 'b65', levelNumber: 65, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Solomon and the Baby — Judgment", fr: "Salomon et le Bébé — Le Jugement" }, image: B, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b65-a', isTruth: true,  text: { en: "Two women came before Solomon, each claiming to be the mother of a living baby.", fr: "Deux femmes se présentèrent devant Salomon, chacune se disant la mère d'un bébé vivant." } },
      { id: 'b65-b', isTruth: true,  text: { en: "Solomon commanded that a sword be brought and the living child cut in two.", fr: "Salomon ordonna qu'on apporte une épée et qu'on coupe l'enfant vivant en deux." } },
      { id: 'b65-c', isTruth: true,  text: { en: "The true mother gave up her claim to save the child's life, while the other agreed to the cutting.", fr: "La vraie mère renonça à sa réclamation pour sauver la vie de l'enfant, tandis que l'autre accepta de le couper." } },
      { id: 'b65-d', isTruth: false, text: { en: "Solomon made his judgment only after consulting with his council of elders for three days.", fr: "Salomon ne rendit son jugement qu'après avoir consulté son conseil d'anciens pendant trois jours." } },
    ],
    explanation: { en: "Solomon made his wise judgment immediately and on his own — no council of elders is mentioned. This display of wisdom caused all Israel to see that God's wisdom was in him (1 Kings 3:27-28).", fr: "Salomon rendit son jugement immédiatement et seul — aucun conseil d'anciens n'est mentionné. Cette démonstration de sagesse fit voir à tout Israël que la sagesse de Dieu était en lui (1 Rois 3:27-28)." }
  },
  {
    id: 'b66', levelNumber: 66, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Isaac and Rebekah", fr: "Isaac et Rébecca" }, image: B, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b66-a', isTruth: true,  text: { en: "Abraham sent his servant to find a wife for Isaac from his own relatives in Mesopotamia.", fr: "Abraham envoya son serviteur trouver une épouse pour Isaac parmi ses propres proches en Mésopotamie." } },
      { id: 'b66-b', isTruth: true,  text: { en: "Abraham's servant prayed at a well and asked God to show him the right woman through a specific sign.", fr: "Le serviteur d'Abraham pria près d'un puits et demanda à Dieu de lui indiquer la bonne femme par un signe précis." } },
      { id: 'b66-c', isTruth: true,  text: { en: "Rebekah was a virgin who drew water for the servant and all his camels at the well.", fr: "Rébecca était une vierge qui puisa de l'eau pour le serviteur et tous ses chameaux au puits." } },
      { id: 'b66-d', isTruth: false, text: { en: "Isaac met Rebekah for the first time at Abraham's campsite when she arrived.", fr: "Isaac rencontra Rébecca pour la première fois au campement d'Abraham à son arrivée." } },
    ],
    explanation: { en: "Isaac was out in the field meditating at evening when he saw the camels coming. He met Rebekah in the field, not at a campsite. He brought her into his mother Sarah's tent (Genesis 24:62-67).", fr: "Isaac se promenait dans les champs au soir et vit les chameaux arriver. Il rencontra Rébecca dans les champs, pas à un campement. Il l'amena dans la tente de sa mère Sara (Genèse 24:62-67)." }
  },
  {
    id: 'b67', levelNumber: 67, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Deborah the Judge", fr: "Déborah la Juge" }, image: B, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b67-a', isTruth: true,  text: { en: "Deborah was a prophetess and the only female judge mentioned in the book of Judges.", fr: "Déborah était une prophétesse et la seule femme juge mentionnée dans le livre des Juges." } },
      { id: 'b67-b', isTruth: true,  text: { en: "Deborah summoned Barak to lead Israel's army against Sisera, commander of Canaan's forces.", fr: "Déborah convoqua Barak pour conduire l'armée d'Israël contre Sisera, commandant des forces cananéennes." } },
      { id: 'b67-c', isTruth: true,  text: { en: "Barak refused to go unless Deborah went with him.", fr: "Barak refusa de partir à moins que Déborah ne l'accompagne." } },
      { id: 'b67-d', isTruth: false, text: { en: "Deborah herself killed Sisera at the end of the battle.", fr: "Déborah elle-même tua Sisera à la fin de la bataille." } },
    ],
    explanation: { en: "Sisera was killed by Jael, a woman from the Kenite clan, not by Deborah. Jael drove a tent peg through Sisera's head while he slept in her tent (Judges 4:21).", fr: "Sisera fut tué par Yaël, une femme du clan des Qénites, et non par Déborah. Yaël enfonça un piquet de tente dans la tempe de Sisera pendant qu'il dormait dans sa tente (Juges 4:21)." }
  },
  {
    id: 'b68', levelNumber: 68, difficulty: 'Beginner', difficultyFr: 'Débutant',
    topic: { en: "Abraham and the Covenant of Circumcision", fr: "Abraham et l'Alliance de la Circoncision" }, image: B, badgeColor: 'bg-emerald-700', testament: 'Old',
    statements: [
      { id: 'b68-a', isTruth: true,  text: { en: "God changed Abram's name to Abraham when He established the covenant of circumcision.", fr: "Dieu changea le nom d'Abram en Abraham lorsqu'Il établit l'alliance de la circoncision." } },
      { id: 'b68-b', isTruth: true,  text: { en: "God also changed Sarai's name to Sarah at the same time.", fr: "Dieu changea aussi le nom de Saraï en Sarah au même moment." } },
      { id: 'b68-c', isTruth: true,  text: { en: "God promised Abraham that Sarah would bear a son even though she was 90 years old.", fr: "Dieu promit à Abraham que Sara porterait un fils même si elle avait 90 ans." } },
      { id: 'b68-d', isTruth: false, text: { en: "Abraham was 80 years old when God established the covenant of circumcision with him.", fr: "Abraham avait 80 ans lorsque Dieu établit avec lui l'alliance de la circoncision." } },
    ],
    explanation: { en: "Abraham was 99 years old when God appeared to him and established the covenant of circumcision — not 80. The text says specifically 'Abram was ninety-nine years old' (Genesis 17:1).", fr: "Abraham avait 99 ans lorsque Dieu lui apparut et établit l'alliance de la circoncision — pas 80. Le texte dit précisément : 'Abram était âgé de quatre-vingt-dix-neuf ans' (Genèse 17:1)." }
  },

  // ─── INTERMEDIATE ──────────────────────────────────────────────────────────────
  {
    id: 'i1', levelNumber: 1, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "David and Saul", fr: "David et Saül" }, image: I, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i1-a', isTruth: true,  text: { en: "King Saul tried to kill David by throwing a spear at him while David played the harp.", fr: "Le roi Saül tenta de tuer David en lui jetant une lance pendant que David jouait de la harpe." } },
      { id: 'i1-b', isTruth: true,  text: { en: "David spared Saul's life in a cave and only cut off a corner of his robe.", fr: "David épargna la vie de Saül dans une grotte et se contenta de couper le pan de son manteau." } },
      { id: 'i1-c', isTruth: true,  text: { en: "Jonathan, Saul's son, made a covenant of deep friendship with David.", fr: "Jonathan, le fils de Saül, conclut une alliance d'amitié profonde avec David." } },
      { id: 'i1-d', isTruth: false, text: { en: "David immediately became king over all twelve tribes of Israel the day Saul died.", fr: "David devint immédiatement roi sur les douze tribus d'Israël le jour de la mort de Saül." } },
    ],
    explanation: { en: "After Saul died, David was first crowned king only over Judah. He ruled Judah for over seven years before the other tribes united under him (2 Samuel 2:4 / 5:3).", fr: "Après la mort de Saül, David fut d'abord sacré roi uniquement sur Juda. Il régna sur Juda pendant plus de sept ans avant que les autres tribus ne se rallient à lui (2 Samuel 2:4 / 5:3)." }
  },
  {
    id: 'i2', levelNumber: 2, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Twelve Spies", fr: "Les Douze Espions" }, image: I, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i2-a', isTruth: true,  text: { en: "Moses sent twelve spies, one from each tribe, to explore the land of Canaan.", fr: "Moïse envoya douze espions, un par tribu, pour explorer le pays de Canaan." } },
      { id: 'i2-b', isTruth: true,  text: { en: "The spies were gone for forty days before returning with their report.", fr: "Les espions partirent pendant quarante jours avant de revenir avec leur rapport." } },
      { id: 'i2-c', isTruth: true,  text: { en: "Only Caleb and Joshua gave a positive report and encouraged the people to take the land.", fr: "Seuls Caleb et Josué donnèrent un rapport favorable et encouragèrent le peuple à conquérir le pays." } },
      { id: 'i2-d', isTruth: false, text: { en: "The majority report said the giants in the land were twice the height of ordinary men.", fr: "Le rapport majoritaire disait que les géants du pays étaient deux fois plus grands que les hommes ordinaires." } },
    ],
    explanation: { en: "The majority report said the Israelites felt like grasshoppers compared to the Nephilim — a figure of speech expressing fear and smallness. No specific height comparison like 'twice the height' was given (Numbers 13:33).", fr: "Le rapport majoritaire disait que les Israélites se sentaient comme des sauterelles face aux Nephilim — une figure de style exprimant la peur et la petitesse. Aucune comparaison de taille précise du type 'deux fois plus grand' n'est mentionnée (Nombres 13:33)." }
  },
  {
    id: 'i3', levelNumber: 3, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "David and Bathsheba", fr: "David et Bethsabée" }, image: I, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i3-a', isTruth: true,  text: { en: "David saw Bathsheba bathing from the roof of his palace and sent for her.", fr: "David vit Bethsabée se baigner depuis le toit de son palais et la fit appeler." } },
      { id: 'i3-b', isTruth: true,  text: { en: "David arranged for Bathsheba's husband Uriah to be placed in the front lines of battle to be killed.", fr: "David fit placer Urie, le mari de Bethsabée, en première ligne de combat pour qu'il soit tué." } },
      { id: 'i3-c', isTruth: true,  text: { en: "God sent the prophet Nathan to confront David using a parable about a stolen lamb.", fr: "Dieu envoya le prophète Nathan confronter David au moyen d'une parabole sur une brebis volée." } },
      { id: 'i3-d', isTruth: false, text: { en: "David confessed his sin, and God immediately removed all consequences as a sign of forgiveness.", fr: "David confessa son péché, et Dieu supprima immédiatement toutes les conséquences en signe de pardon." } },
    ],
    explanation: { en: "Although David was forgiven, God said the sword would never depart from his house. The child born of the affair died, and David faced rebellion, violence, and strife throughout his family (2 Samuel 12:10-14).", fr: "Bien que David soit pardonné, Dieu dit que l'épée ne s'écarterait jamais de sa maison. L'enfant né de la liaison mourut, et David connut la rébellion, la violence et la discorde dans sa famille (2 Samuel 12:10-14)." }
  },
  {
    id: 'i4', levelNumber: 4, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Solomon's Temple", fr: "Le Temple de Salomon" }, image: I, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i4-a', isTruth: true,  text: { en: "Solomon began building the temple in the fourth year of his reign.", fr: "Salomon commença à construire le temple la quatrième année de son règne." } },
      { id: 'i4-b', isTruth: true,  text: { en: "The temple took seven years to build.", fr: "La construction du temple dura sept ans." } },
      { id: 'i4-c', isTruth: true,  text: { en: "King Hiram of Tyre supplied Solomon with cedar and cypress timber for the temple.", fr: "Le roi Hiram de Tyr fournit à Salomon du bois de cèdre et de cyprès pour le temple." } },
      { id: 'i4-d', isTruth: false, text: { en: "Solomon built his own palace in five years — less time than it took to build the temple.", fr: "Salomon construisit son propre palais en cinq ans — moins de temps qu'il n'en fallut pour le temple." } },
    ],
    explanation: { en: "Solomon's palace took thirteen years to build — nearly twice as long as the temple's seven years. The temple was completed first (1 Kings 6:38; 7:1).", fr: "Le palais de Salomon prit treize ans à construire — presque deux fois plus longtemps que les sept ans du temple. Le temple fut achevé en premier (1 Rois 6:38 ; 7:1)." }
  },
  {
    id: 'i5', levelNumber: 5, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Queen of Sheba", fr: "La Reine de Saba" }, image: I, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i5-a', isTruth: true,  text: { en: "The Queen of Sheba visited Solomon to test him with hard questions after hearing of his fame.", fr: "La reine de Saba rendit visite à Salomon pour l'éprouver par des questions difficiles après avoir entendu parler de sa renommée." } },
      { id: 'i5-b', isTruth: true,  text: { en: "She arrived in Jerusalem with a very great caravan — camels carrying spices, gold, and precious stones.", fr: "Elle arriva à Jérusalem avec une très grande caravane — des chameaux chargés d'épices, d'or et de pierres précieuses." } },
      { id: 'i5-c', isTruth: true,  text: { en: "After Solomon answered all her questions, she declared that his wisdom exceeded his fame.", fr: "Après que Salomon eut répondu à toutes ses questions, elle déclara que sa sagesse surpassait sa renommée." } },
      { id: 'i5-d', isTruth: false, text: { en: "The Queen of Sheba remained in Jerusalem and became one of Solomon's wives.", fr: "La reine de Saba resta à Jérusalem et devint l'une des épouses de Salomon." } },
    ],
    explanation: { en: "After giving and receiving gifts, the queen returned to her own country. The Bible does not say she married Solomon or stayed in Jerusalem (1 Kings 10:13).", fr: "Après échange de cadeaux, la reine retourna dans son pays. La Bible ne dit pas qu'elle épousa Salomon ni qu'elle resta à Jérusalem (1 Rois 10:13)." }
  },
  {
    id: 'i6', levelNumber: 6, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Divided Kingdom", fr: "Le Royaume Divisé" }, image: I, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i6-a', isTruth: true,  text: { en: "After Solomon's death, his son Rehoboam refused to lighten the heavy burden of taxes and labor.", fr: "Après la mort de Salomon, son fils Roboam refusa d'alléger le lourd fardeau des impôts et des corvées." } },
      { id: 'i6-b', isTruth: true,  text: { en: "Jeroboam led the ten northern tribes in rebellion against Rehoboam.", fr: "Jéroboam mena les dix tribus du nord à la rébellion contre Roboam." } },
      { id: 'i6-c', isTruth: true,  text: { en: "Jeroboam set up two golden calves and told the people 'Here are your gods, Israel.'", fr: "Jéroboam érigea deux veaux d'or et dit au peuple : 'Voici tes dieux, Israël.'" } },
      { id: 'i6-d', isTruth: false, text: { en: "Rehoboam ruled over all twelve tribes from Jerusalem throughout his reign.", fr: "Roboam régna sur les douze tribus depuis Jérusalem tout au long de son règne." } },
    ],
    explanation: { en: "Rehoboam ruled only over the tribes of Judah and Benjamin — two tribes in the south. The ten northern tribes formed the separate Kingdom of Israel under Jeroboam (1 Kings 12:20-21).", fr: "Roboam ne régna que sur les tribus de Juda et de Benjamin — deux tribus au sud. Les dix tribus du nord formèrent le royaume séparé d'Israël sous Jéroboam (1 Rois 12:20-21)." }
  },
  {
    id: 'i7', levelNumber: 7, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Elijah and the Widow of Zarephath", fr: "Élie et la Veuve de Sarepta" }, image: I, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i7-a', isTruth: true,  text: { en: "God sent Elijah to Zarephath in Sidon, outside of Israel, to be cared for by a widow.", fr: "Dieu envoya Élie à Sarepta en Sidon, hors d'Israël, pour être pris en charge par une veuve." } },
      { id: 'i7-b', isTruth: true,  text: { en: "The widow's jar of flour and jug of oil did not run out throughout the drought, just as Elijah promised.", fr: "Le pot de farine et la cruche d'huile de la veuve ne s'épuisèrent pas pendant la sécheresse, comme Élie l'avait promis." } },
      { id: 'i7-c', isTruth: true,  text: { en: "The widow's son died, and Elijah stretched himself out on the boy three times before he revived.", fr: "Le fils de la veuve mourut et Élie s'étendit trois fois sur l'enfant avant qu'il ne revive." } },
      { id: 'i7-d', isTruth: false, text: { en: "The widow immediately welcomed Elijah and fed him before he announced God's promise.", fr: "La veuve accueillit immédiatement Élie et le nourrit avant qu'il n'annonce la promesse de Dieu." } },
    ],
    explanation: { en: "The widow initially said she was gathering sticks to make a final meal for herself and her son before they died of starvation. She was not welcoming — it took Elijah's assurance of God's promise before she agreed to feed him first (1 Kings 17:12-13).", fr: "La veuve dit d'abord qu'elle ramassait du bois pour préparer un dernier repas pour elle et son fils avant de mourir de faim. Elle n'était pas accueillante — il fallut la promesse de Dieu par Élie pour qu'elle accepte de le nourrir en premier (1 Rois 17:12-13)." }
  },
  {
    id: 'i8', levelNumber: 8, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Naaman and the Leprosy", fr: "Naaman et la Lèpre" }, image: I, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i8-a', isTruth: true,  text: { en: "Naaman was commander of the army of Aram and was a great man, but he had leprosy.", fr: "Naaman était le commandant de l'armée d'Aram, un grand homme, mais il était lépreux." } },
      { id: 'i8-b', isTruth: true,  text: { en: "An Israelite slave girl told Naaman's wife that the prophet in Samaria could cure his leprosy.", fr: "Une jeune esclave israélite dit à la femme de Naaman que le prophète en Samarie pourrait guérir sa lèpre." } },
      { id: 'i8-c', isTruth: true,  text: { en: "Elisha told Naaman to wash seven times in the Jordan River to be cured.", fr: "Élisée dit à Naaman de se laver sept fois dans le Jourdain pour être guéri." } },
      { id: 'i8-d', isTruth: false, text: { en: "Naaman's leprosy transferred to Elisha when Naaman was healed.", fr: "La lèpre de Naaman se transféra à Élisée quand Naaman fut guéri." } },
    ],
    explanation: { en: "Naaman's leprosy transferred to Gehazi, Elisha's servant, not to Elisha himself. Gehazi secretly followed Naaman to collect gifts Elisha had refused, and God punished him with Naaman's leprosy (2 Kings 5:27).", fr: "La lèpre de Naaman se transféra à Guéhazi, le serviteur d'Élisée, et non à Élisée lui-même. Guéhazi suivit secrètement Naaman pour recevoir des cadeaux qu'Élisée avait refusés, et Dieu le punit par la lèpre de Naaman (2 Rois 5:27)." }
  },
  {
    id: 'i9', levelNumber: 9, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Hezekiah and Sennacherib", fr: "Ézéchias et Sennachérib" }, image: I, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i9-a', isTruth: true,  text: { en: "The Assyrian king Sennacherib sent messengers to mock God and intimidate Jerusalem's people.", fr: "Le roi assyrien Sennachérib envoya des messagers pour se moquer de Dieu et intimider le peuple de Jérusalem." } },
      { id: 'i9-b', isTruth: true,  text: { en: "Hezekiah spread Sennacherib's letter before the LORD in the temple and prayed.", fr: "Ézéchias étendit la lettre de Sennachérib devant l'Éternel dans le temple et pria." } },
      { id: 'i9-c', isTruth: true,  text: { en: "An angel of the LORD struck down 185,000 Assyrian soldiers in their camp overnight.", fr: "Un ange de l'Éternel frappa 185 000 soldats assyriens dans leur camp en une nuit." } },
      { id: 'i9-d', isTruth: false, text: { en: "Sennacherib was killed in battle after his army was destroyed outside Jerusalem.", fr: "Sennachérib fut tué au combat après la destruction de son armée devant Jérusalem." } },
    ],
    explanation: { en: "Sennacherib returned to Nineveh after his army was destroyed. He was later assassinated by his own sons while worshiping in the temple of his god Nisrok (2 Kings 19:36-37).", fr: "Sennachérib retourna à Ninive après la destruction de son armée. Il fut ensuite assassiné par ses propres fils pendant qu'il adorait dans le temple de son dieu Nisroc (2 Rois 19:36-37)." }
  },
  {
    id: 'i10', levelNumber: 10, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Fall of Jerusalem to Babylon", fr: "La Chute de Jérusalem à Babylone" }, image: I, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i10-a', isTruth: true,  text: { en: "Nebuchadnezzar of Babylon destroyed Jerusalem and the temple of Solomon.", fr: "Nébucadnetsar de Babylone détruisit Jérusalem et le temple de Salomon." } },
      { id: 'i10-b', isTruth: true,  text: { en: "Most of the people of Judah were taken into exile in Babylon.", fr: "La plupart des habitants de Juda furent emmenés en exil à Babylone." } },
      { id: 'i10-c', isTruth: true,  text: { en: "Jerusalem fell after a prolonged siege during the reign of King Zedekiah.", fr: "Jérusalem tomba après un long siège sous le règne du roi Sédécias." } },
      { id: 'i10-d', isTruth: false, text: { en: "The prophet Ezekiel was among those taken to Babylon at the very first deportation under Jehoiakim.", fr: "Le prophète Ézéchiel faisait partie de ceux emmenés à Babylone lors de la toute première déportation sous Joïaqim." } },
    ],
    explanation: { en: "Ezekiel was taken to Babylon in the second deportation (597 BC), during the time of King Jehoiachin, not the first under Jehoiakim. Daniel was taken in the first deportation (605 BC) (Ezekiel 1:1-2).", fr: "Ézéchiel fut emmené à Babylone lors de la deuxième déportation (597 av. J.-C.), sous le roi Joïakin, et non lors de la première sous Joïaqim. Daniel fut emmené lors de la première déportation (605 av. J.-C.) (Ézéchiel 1:1-2)." }
  },
  {
    id: 'i11', levelNumber: 11, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Nehemiah and the Wall", fr: "Néhémie et le Mur" }, image: I, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i11-a', isTruth: true,  text: { en: "Nehemiah was the cupbearer to King Artaxerxes of Persia before rebuilding Jerusalem's walls.", fr: "Néhémie était l'échanson du roi Artaxerxès de Perse avant de reconstruire les murs de Jérusalem." } },
      { id: 'i11-b', isTruth: true,  text: { en: "Sanballat and Tobiah mocked the Jews and tried to stop the rebuilding through intimidation and plots.", fr: "Sanballat et Tobiya se moquèrent des Juifs et tentèrent d'arrêter la reconstruction par l'intimidation et les complots." } },
      { id: 'i11-c', isTruth: true,  text: { en: "The wall of Jerusalem was completed in just fifty-two days.", fr: "Le mur de Jérusalem fut achevé en seulement cinquante-deux jours." } },
      { id: 'i11-d', isTruth: false, text: { en: "Nehemiah rebuilt the wall while carrying a sword in one hand at all times during construction.", fr: "Néhémie reconstruisit le mur tout en portant une épée dans une main en permanence pendant la construction." } },
    ],
    explanation: { en: "It was the builders — half of them — who held spears, shields, and bows while the other half worked. Nehemiah's aide carried a trumpet beside him to signal alerts. Workers used both hands to build but kept weapons ready (Nehemiah 4:16-18).", fr: "C'est la moitié des ouvriers qui tenaient des lances, des boucliers et des arcs pendant que l'autre moitié travaillait. L'aide de Néhémie portait une trompette à côté de lui pour donner l'alerte (Néhémie 4:16-18)." }
  },
  {
    id: 'i12', levelNumber: 12, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "John the Baptist", fr: "Jean-Baptiste" }, image: I, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i12-a', isTruth: true,  text: { en: "John the Baptist wore clothing made of camel's hair and a leather belt around his waist.", fr: "Jean-Baptiste portait des vêtements de poils de chameau et une ceinture de cuir autour de la taille." } },
      { id: 'i12-b', isTruth: true,  text: { en: "John ate locusts and wild honey in the wilderness.", fr: "Jean mangeait des sauterelles et du miel sauvage dans le désert." } },
      { id: 'i12-c', isTruth: true,  text: { en: "John was beheaded at the request of Herodias's daughter, who danced for Herod.", fr: "Jean fut décapité à la demande de la fille d'Hérodias, qui dansa devant Hérode." } },
      { id: 'i12-d', isTruth: false, text: { en: "John the Baptist was born six months after Jesus.", fr: "Jean-Baptiste est né six mois après Jésus." } },
    ],
    explanation: { en: "John the Baptist was born six months before Jesus, not after. When the angel Gabriel appeared to Mary, he noted that Elizabeth (John's mother) was already six months pregnant (Luke 1:26, 36).", fr: "Jean-Baptiste est né six mois avant Jésus, et non après. Lorsque l'ange Gabriel apparut à Marie, il mentionna qu'Élisabeth (la mère de Jean) était déjà enceinte de six mois (Luc 1:26, 36)." }
  },
  {
    id: 'i13', levelNumber: 13, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Jesus and Nicodemus", fr: "Jésus et Nicodème" }, image: I, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i13-a', isTruth: true,  text: { en: "Nicodemus was a Pharisee and member of the Jewish ruling council who came to Jesus at night.", fr: "Nicodème était un Pharisien et membre du Sanhédrin qui vint trouver Jésus de nuit." } },
      { id: 'i13-b', isTruth: true,  text: { en: "Jesus told Nicodemus that no one can see the kingdom of God unless they are born again.", fr: "Jésus dit à Nicodème que nul ne peut voir le royaume de Dieu s'il ne naît de nouveau." } },
      { id: 'i13-c', isTruth: true,  text: { en: "Nicodemus later helped provide myrrh and aloes for Jesus' burial.", fr: "Nicodème aida plus tard à fournir de la myrrhe et des aloès pour les funérailles de Jésus." } },
      { id: 'i13-d', isTruth: false, text: { en: "Nicodemus openly proclaimed faith in Jesus at the Jerusalem Council right after their night meeting.", fr: "Nicodème proclama ouvertement sa foi en Jésus au Sanhédrin de Jérusalem juste après leur réunion nocturne." } },
    ],
    explanation: { en: "After the night meeting, Nicodemus remained a secret disciple. His open defense of Jesus came later — he spoke cautiously to the Pharisees asking whether Jesus deserved a fair hearing (John 7:50-51).", fr: "Après la réunion nocturne, Nicodème demeura un disciple secret. Sa défense ouverte de Jésus vint plus tard — il parla prudemment aux Pharisiens en demandant si Jésus méritait une audience équitable (Jean 7:50-51)." }
  },
  {
    id: 'i14', levelNumber: 14, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Woman at the Well", fr: "La Femme au Puits" }, image: I, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i14-a', isTruth: true,  text: { en: "Jesus spoke to a Samaritan woman at Jacob's Well in the region of Samaria.", fr: "Jésus s'entretint avec une femme samaritaine au puits de Jacob dans la région de Samarie." } },
      { id: 'i14-b', isTruth: true,  text: { en: "Jesus told the woman He could give her 'living water' so she would never thirst again.", fr: "Jésus dit à la femme qu'il pourrait lui donner 'l'eau vive' afin qu'elle n'ait plus jamais soif." } },
      { id: 'i14-c', isTruth: true,  text: { en: "Jesus revealed that the woman had had five husbands and the man she was with was not her husband.", fr: "Jésus révéla que la femme avait eu cinq maris et que l'homme qu'elle avait n'était pas son mari." } },
      { id: 'i14-d', isTruth: false, text: { en: "The Samaritan woman kept Jesus' identity secret and told no one in her town about Him.", fr: "La femme samaritaine garda secrète l'identité de Jésus et n'en parla à personne dans sa ville." } },
    ],
    explanation: { en: "The woman immediately left her water jar, went back to town, and told everyone. She said, 'Come, see a man who told me everything I ever did. Could this be the Messiah?' (John 4:28-29).", fr: "La femme laissa aussitôt sa cruche, retourna en ville et le dit à tout le monde. Elle dit : 'Venez voir un homme qui m'a dit tout ce que j'ai fait. Ne serait-ce pas le Messie ?' (Jean 4:28-29)." }
  },
  {
    id: 'i15', levelNumber: 15, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Ananias and Sapphira", fr: "Ananias et Saphira" }, image: I, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i15-a', isTruth: true,  text: { en: "Ananias and his wife Sapphira sold a piece of property and secretly kept part of the money.", fr: "Ananias et sa femme Saphira vendirent un terrain et gardèrent secrètement une partie de l'argent." } },
      { id: 'i15-b', isTruth: true,  text: { en: "Peter told Ananias that he had not lied to men but to God, and Ananias fell down and died.", fr: "Pierre dit à Ananias qu'il n'avait pas menti aux hommes mais à Dieu, et Ananias tomba et mourut." } },
      { id: 'i15-c', isTruth: true,  text: { en: "Sapphira came in three hours later, unaware of what had happened, and also lied to Peter.", fr: "Saphira entra trois heures plus tard, ignorant ce qui s'était passé, et mentit aussi à Pierre." } },
      { id: 'i15-d', isTruth: false, text: { en: "Peter convicted them because they gave no money at all to the church.", fr: "Pierre les condamna parce qu'ils n'avaient donné aucun argent à l'Église." } },
    ],
    explanation: { en: "Peter specifically said Ananias was free to keep all the money or give any amount. The sin was lying about the amount — claiming to give all of it when they kept some (Acts 5:4).", fr: "Pierre dit explicitement qu'Ananias était libre de garder tout l'argent ou d'en donner n'importe quelle somme. Le péché était de mentir sur le montant — prétendre tout donner alors qu'ils en gardaient une partie (Actes 5:4)." }
  },
  {
    id: 'i16', levelNumber: 16, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Stephen's Martyrdom", fr: "Le Martyre d'Étienne" }, image: I, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i16-a', isTruth: true,  text: { en: "Stephen was a man full of faith and the Holy Spirit, chosen as one of the first seven deacons.", fr: "Étienne était un homme plein de foi et du Saint-Esprit, choisi parmi les sept premiers diacres." } },
      { id: 'i16-b', isTruth: true,  text: { en: "Stephen said he saw heaven open and the Son of Man standing at the right hand of God.", fr: "Étienne dit qu'il vit le ciel ouvert et le Fils de l'homme debout à la droite de Dieu." } },
      { id: 'i16-c', isTruth: true,  text: { en: "As Stephen was being stoned, he prayed 'Lord, do not hold this sin against them.'", fr: "Pendant qu'on lapidait Étienne, il pria : 'Seigneur, ne leur impute pas ce péché.'" } },
      { id: 'i16-d', isTruth: false, text: { en: "Saul of Tarsus personally threw stones at Stephen during the execution.", fr: "Saül de Tarse lança personnellement des pierres sur Étienne lors de l'exécution." } },
    ],
    explanation: { en: "Saul did not personally throw stones. He stood nearby and approved of the execution, guarding the cloaks of those who were stoning Stephen. His role was as consenting witness, not as a stone-thrower (Acts 7:58; 8:1).", fr: "Saül ne lança pas personnellement de pierres. Il se tenait nearby et approuvait l'exécution, gardant les manteaux de ceux qui lapidaient Étienne. Son rôle était celui d'un témoin consentant, non d'un lapideur (Actes 7:58 ; 8:1)." }
  },
  {
    id: 'i17', levelNumber: 17, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Saul's Conversion", fr: "La Conversion de Saül" }, image: I, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i17-a', isTruth: true,  text: { en: "Saul was on his way to Damascus to arrest Christians when a light from heaven flashed around him.", fr: "Saül se rendait à Damas pour arrêter des chrétiens quand une lumière venant du ciel l'enveloppa." } },
      { id: 'i17-b', isTruth: true,  text: { en: "Jesus said to Saul, 'I am Jesus, whom you are persecuting.'", fr: "Jésus dit à Saül : 'Je suis Jésus que tu persécutes.'" } },
      { id: 'i17-c', isTruth: true,  text: { en: "Saul was blind for three days and neither ate nor drank anything.", fr: "Saül fut aveugle pendant trois jours et ne mangea ni ne but rien." } },
      { id: 'i17-d', isTruth: false, text: { en: "Peter came to Damascus and restored Saul's sight.", fr: "Pierre vint à Damas et restaura la vue de Saül." } },
    ],
    explanation: { en: "It was a disciple named Ananias (not Peter) who came to Saul in Damascus. God sent Ananias in a vision to lay hands on Saul and restore his sight (Acts 9:10-18).", fr: "C'est un disciple nommé Ananias (et non Pierre) qui vint trouver Saül à Damas. Dieu envoya Ananias en vision pour imposer les mains à Saül et lui rendre la vue (Actes 9:10-18)." }
  },
  {
    id: 'i18', levelNumber: 18, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Peter and Cornelius", fr: "Pierre et Corneille" }, image: I, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i18-a', isTruth: true,  text: { en: "Cornelius was a Roman centurion described as devout, God-fearing, and generous to the poor.", fr: "Corneille était un centurion romain décrit comme pieux, craignant Dieu et généreux envers les pauvres." } },
      { id: 'i18-b', isTruth: true,  text: { en: "Peter had a vision of a sheet filled with unclean animals, and God told him not to call anything impure.", fr: "Pierre eut une vision d'un drap rempli d'animaux impurs, et Dieu lui dit de ne rien appeler impur." } },
      { id: 'i18-c', isTruth: true,  text: { en: "The Holy Spirit fell on Cornelius and his household while Peter was still speaking.", fr: "Le Saint-Esprit tomba sur Corneille et sa maison pendant que Pierre parlait encore." } },
      { id: 'i18-d', isTruth: false, text: { en: "Peter's vision occurred only once before he understood its meaning.", fr: "La vision de Pierre ne se produisit qu'une seule fois avant qu'il en comprenne le sens." } },
    ],
    explanation: { en: "The sheet with animals was shown to Peter three times — not once. Only after the third repetition did Peter wonder what the vision meant (Acts 10:16).", fr: "Le drap avec les animaux fut montré à Pierre trois fois — pas une seule. C'est seulement après la troisième répétition que Pierre se demanda ce que la vision signifiait (Actes 10:16)." }
  },
  {
    id: 'i19', levelNumber: 19, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Paul and Silas in Philippi", fr: "Paul et Silas à Philippes" }, image: I, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i19-a', isTruth: true,  text: { en: "Paul and Silas were beaten with rods and thrown into prison in Philippi.", fr: "Paul et Silas furent battus de verges et jetés en prison à Philippes." } },
      { id: 'i19-b', isTruth: true,  text: { en: "At midnight, Paul and Silas were praying and singing hymns to God when a violent earthquake shook the prison.", fr: "À minuit, Paul et Silas priaient et chantaient des cantiques quand un violent tremblement de terre ébranla la prison." } },
      { id: 'i19-c', isTruth: true,  text: { en: "The jailer was about to kill himself thinking all prisoners had escaped, but Paul stopped him.", fr: "Le geôlier allait se tuer pensant que tous les prisonniers s'étaient enfuis, mais Paul l'en empêcha." } },
      { id: 'i19-d', isTruth: false, text: { en: "Paul and Silas were jailed because they healed a blind man in the marketplace.", fr: "Paul et Silas furent emprisonnés parce qu'ils guérirent un aveugle sur la place du marché." } },
    ],
    explanation: { en: "Paul and Silas were jailed because Paul cast out a spirit of divination from a slave girl, which caused her owners to lose their income from fortune-telling. The owners dragged them before the magistrates (Acts 16:16-21).", fr: "Paul et Silas furent emprisonnés parce que Paul chassa un esprit de divination d'une esclave, privant ses maîtres de leur source de revenus. Ses maîtres les traînèrent devant les magistrats (Actes 16:16-21)." }
  },
  {
    id: 'i20', levelNumber: 20, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Paul in Athens — the Areopagus", fr: "Paul à Athènes — l'Aréopage" }, image: I, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i20-a', isTruth: true,  text: { en: "Paul observed that Athens was full of idols, which provoked his spirit to speak out.", fr: "Paul observa qu'Athènes était remplie d'idoles, ce qui l'incita à s'exprimer." } },
      { id: 'i20-b', isTruth: true,  text: { en: "Paul used an altar inscribed 'TO AN UNKNOWN GOD' as the starting point of his sermon.", fr: "Paul utilisa un autel portant l'inscription 'AU DIEU INCONNU' comme point de départ de son discours." } },
      { id: 'i20-c', isTruth: true,  text: { en: "Paul told the Athenians that God does not live in temples built by human hands.", fr: "Paul dit aux Athéniens que Dieu n'habite pas dans des temples construits par des mains humaines." } },
      { id: 'i20-d', isTruth: false, text: { en: "Paul's speech at the Areopagus convinced the entire Athenian Council to believe in Christ.", fr: "Le discours de Paul à l'Aréopage convainquit l'ensemble du Conseil athénien de croire au Christ." } },
    ],
    explanation: { en: "Some sneered when Paul mentioned the resurrection; others wanted to hear more. A few believed, including Dionysius the Areopagite and a woman named Damaris — not the entire council (Acts 17:32-34).", fr: "Certains se moquèrent quand Paul mentionna la résurrection ; d'autres voulurent en entendre plus. Quelques-uns crurent, dont Denys l'Aréopagite et une femme nommée Damaris — pas l'ensemble du conseil (Actes 17:32-34)." }
  },
  {
    id: 'i21', levelNumber: 21, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Paul's Shipwreck", fr: "Le Naufrage de Paul" }, image: I, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i21-a', isTruth: true,  text: { en: "Paul warned the crew before the voyage that the journey would be disastrous, but he was not heeded.", fr: "Paul avertit l'équipage avant le voyage que le trajet serait désastreux, mais on ne l'écouta pas." } },
      { id: 'i21-b', isTruth: true,  text: { en: "An angel appeared to Paul on the ship and told him he must stand before Caesar and all on board would be saved.", fr: "Un ange apparut à Paul sur le bateau et lui dit qu'il devait comparaître devant César et que tous à bord seraient sauvés." } },
      { id: 'i21-c', isTruth: true,  text: { en: "The ship ran aground on the island of Malta, and all 276 people on board survived.", fr: "Le bateau s'échoua sur l'île de Malte, et les 276 personnes à bord survécurent toutes." } },
      { id: 'i21-d', isTruth: false, text: { en: "Paul was bitten by a poisonous snake on Malta and immediately fell dead.", fr: "Paul fut mordu par un serpent venimeux à Malte et tomba mort immédiatement." } },
    ],
    explanation: { en: "Paul was bitten by a snake but did not die. The islanders expected him to swell up and drop dead, but when nothing happened they concluded he was a god (Acts 28:3-6).", fr: "Paul fut mordu par un serpent mais ne mourut pas. Les habitants s'attendaient à le voir gonfler et tomber mort, mais rien ne se passa et ils conclurent qu'il était un dieu (Actes 28:3-6)." }
  },
  {
    id: 'i22', levelNumber: 22, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Isaiah the Prophet", fr: "Le Prophète Ésaïe" }, image: I, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i22-a', isTruth: true,  text: { en: "Isaiah saw a vision of God seated on a high and exalted throne, surrounded by seraphim.", fr: "Ésaïe vit une vision de Dieu assis sur un trône élevé et sublime, entouré de séraphins." } },
      { id: 'i22-b', isTruth: true,  text: { en: "A seraph touched Isaiah's lips with a live coal from the altar to cleanse his sin.", fr: "Un séraphin toucha les lèvres d'Ésaïe avec un charbon ardent pris sur l'autel pour purifier son péché." } },
      { id: 'i22-c', isTruth: true,  text: { en: "Isaiah prophesied during the reigns of Uzziah, Jotham, Ahaz, and Hezekiah.", fr: "Ésaïe prophétisa sous les règnes d'Ozias, de Yotam, d'Achaz et d'Ézéchias." } },
      { id: 'i22-d', isTruth: false, text: { en: "Isaiah responded to God's call by saying 'I am not worthy; send someone else.'", fr: "Ésaïe répondit à l'appel de Dieu en disant : 'Je n'en suis pas digne ; envoie quelqu'un d'autre.'" } },
    ],
    explanation: { en: "Isaiah responded, 'Here am I. Send me!' — a willing and immediate response. It was Moses who famously resisted and said 'Please send someone else' (Isaiah 6:8; Exodus 4:13).", fr: "Ésaïe répondit : 'Me voici, envoie-moi !' — une réponse prompte et volontaire. C'est Moïse qui résista en disant 'De grâce, envoie quelqu'un d'autre' (Ésaïe 6:8 ; Exode 4:13)." }
  },
  {
    id: 'i23', levelNumber: 23, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Jeremiah the Prophet", fr: "Le Prophète Jérémie" }, image: I, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i23-a', isTruth: true,  text: { en: "God told Jeremiah He had known him and set him apart before he was born.", fr: "Dieu dit à Jérémie qu'Il le connaissait et l'avait consacré avant même sa naissance." } },
      { id: 'i23-b', isTruth: true,  text: { en: "Jeremiah is called 'the weeping prophet' because of his laments over Jerusalem's destruction.", fr: "Jérémie est appelé 'le prophète qui pleure' en raison de ses lamentations sur la destruction de Jérusalem." } },
      { id: 'i23-c', isTruth: true,  text: { en: "Jeremiah was thrown into a muddy cistern (pit) by officials who wanted to silence him.", fr: "Jérémie fut jeté dans une citerne boueuse par des fonctionnaires qui voulaient le réduire au silence." } },
      { id: 'i23-d', isTruth: false, text: { en: "Jeremiah eagerly accepted God's call to be a prophet to the nations without hesitation.", fr: "Jérémie accepta avec enthousiasme l'appel de Dieu à être prophète des nations sans hésitation." } },
    ],
    explanation: { en: "Jeremiah initially resisted, saying 'I do not know how to speak; I am too young.' God had to reassure him and touch his mouth. His calling came with protest, not enthusiasm (Jeremiah 1:6-9).", fr: "Jérémie résista d'abord, disant : 'Je ne sais pas parler ; je suis encore jeune.' Dieu dut le rassurer et toucher sa bouche. Sa vocation fut reçue avec protestation, non avec enthousiasme (Jérémie 1:6-9)." }
  },
  {
    id: 'i24', levelNumber: 24, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Parable of the Ten Virgins", fr: "La Parabole des Dix Vierges" }, image: I, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i24-a', isTruth: true,  text: { en: "Five virgins were wise and five were foolish, based on whether they brought extra oil.", fr: "Cinq vierges étaient sages et cinq étaient insensées, selon qu'elles avaient apporté de l'huile supplémentaire ou non." } },
      { id: 'i24-b', isTruth: true,  text: { en: "The bridegroom was delayed, and all ten virgins fell asleep waiting.", fr: "Le marié tarda, et les dix vierges s'endormirent toutes en attendant." } },
      { id: 'i24-c', isTruth: true,  text: { en: "When the bridegroom arrived at midnight, the foolish virgins had run out of oil.", fr: "Quand le marié arriva à minuit, les vierges insensées n'avaient plus d'huile." } },
      { id: 'i24-d', isTruth: false, text: { en: "The wise virgins shared their extra oil with the foolish virgins so all could enter together.", fr: "Les vierges sages partagèrent leur huile supplémentaire avec les vierges insensées pour qu'elles entrent toutes ensemble." } },
    ],
    explanation: { en: "The wise virgins refused to share, saying there might not be enough for both. They told the foolish ones to go buy their own oil. By the time they returned, the door was shut (Matthew 25:9-10).", fr: "Les vierges sages refusèrent de partager, craignant de manquer pour tout le monde. Elles dirent aux insensées d'aller en acheter. À leur retour, la porte était fermée (Matthieu 25:9-10)." }
  },
  {
    id: 'i25', levelNumber: 25, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Rich Young Ruler", fr: "Le Jeune Homme Riche" }, image: I, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i25-a', isTruth: true,  text: { en: "A rich young man asked Jesus what he must do to inherit eternal life.", fr: "Un jeune homme riche demanda à Jésus ce qu'il devait faire pour hériter de la vie éternelle." } },
      { id: 'i25-b', isTruth: true,  text: { en: "Jesus told the man to sell everything, give to the poor, and follow Him.", fr: "Jésus dit à l'homme de tout vendre, de donner aux pauvres et de le suivre." } },
      { id: 'i25-c', isTruth: true,  text: { en: "The young man went away sad because he had great wealth.", fr: "Le jeune homme s'en alla tout triste, car il possédait de grandes richesses." } },
      { id: 'i25-d', isTruth: false, text: { en: "Jesus said it is impossible for a rich man to enter the kingdom of God.", fr: "Jésus dit qu'il est impossible à un homme riche d'entrer dans le royaume de Dieu." } },
    ],
    explanation: { en: "Jesus said it is hard (not impossible) for a rich man to enter the kingdom of God. He then said 'With man this is impossible, but with God all things are possible' — implying it can happen through God's grace (Matthew 19:23-26).", fr: "Jésus dit qu'il est difficile (non impossible) pour un riche d'entrer dans le royaume de Dieu. Il ajouta : 'Aux hommes cela est impossible, mais à Dieu tout est possible' — impliquant que cela peut se produire par la grâce de Dieu (Matthieu 19:23-26)." }
  },
  {
    id: 'i26', levelNumber: 26, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Elisha's Miracles", fr: "Les Miracles d'Élisée" }, image: I, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i26-a', isTruth: true,  text: { en: "Elisha parted the Jordan River by striking it with Elijah's cloak.", fr: "Élisée fendit le Jourdain en le frappant avec le manteau d'Élie." } },
      { id: 'i26-b', isTruth: true,  text: { en: "Elisha multiplied a widow's small jar of olive oil to fill many containers.", fr: "Élisée multiplia la petite cruche d'huile d'olive d'une veuve pour remplir de nombreux récipients." } },
      { id: 'i26-c', isTruth: true,  text: { en: "Elisha raised the Shunammite woman's son from the dead.", fr: "Élisée ressuscita le fils de la femme sunamite." } },
      { id: 'i26-d', isTruth: false, text: { en: "Elisha received a double portion of Elijah's spirit when Elijah was taken up in a chariot of fire.", fr: "Élisée reçut une double portion de l'esprit d'Élie au moment où Élie fut enlevé dans un char de feu." } },
    ],
    explanation: { en: "Elisha requested a double portion of Elijah's spirit and was told he would receive it if he saw Elijah taken up. He did see it, confirming the double portion. But 'receiving' it happened before the departure, conditional on witnessing it (2 Kings 2:9-12).", fr: "Élisée demanda une double portion de l'esprit d'Élie et fut informé qu'il la recevrait s'il voyait Élie partir. Il le vit, confirmant la double portion. Mais 'recevoir' intervint avant le départ, à condition de le voir (2 Rois 2:9-12)." }
  },
  {
    id: 'i27', levelNumber: 27, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Mary and Martha", fr: "Marie et Marthe" }, image: I, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i27-a', isTruth: true,  text: { en: "Martha was distracted by all the preparations while Mary sat at Jesus' feet listening.", fr: "Marthe était absorbée par les préparatifs tandis que Marie était assise aux pieds de Jésus, l'écoutant." } },
      { id: 'i27-b', isTruth: true,  text: { en: "Martha complained to Jesus that Mary had left her to do all the work alone.", fr: "Marthe se plaignit à Jésus que Marie l'avait laissée seule à tout faire." } },
      { id: 'i27-c', isTruth: true,  text: { en: "Jesus told Martha that Mary had chosen 'what is better' and it would not be taken from her.", fr: "Jésus dit à Marthe que Marie avait choisi 'la meilleure part' et qu'elle ne lui serait pas ôtée." } },
      { id: 'i27-d', isTruth: false, text: { en: "This story of Mary and Martha is recorded only in the Gospel of John.", fr: "Cette histoire de Marie et Marthe n'est rapportée que dans l'Évangile de Jean." } },
    ],
    explanation: { en: "The Mary-Martha serving story is recorded in Luke 10:38-42, not John. The Gospel of John features Mary and Martha in the story of Lazarus (John 11) and the anointing at Bethany (John 12).", fr: "L'histoire de Marie et Marthe servant est rapportée dans Luc 10:38-42, pas dans Jean. L'Évangile de Jean présente Marie et Marthe dans l'histoire de Lazare (Jean 11) et l'onction à Béthanie (Jean 12)." }
  },
  {
    id: 'i28', levelNumber: 28, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Parable of the Sower", fr: "La Parabole du Semeur" }, image: I, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i28-a', isTruth: true,  text: { en: "Some seed fell on the path and birds ate it up, representing those who do not understand the word.", fr: "Une partie de la semence tomba sur le chemin et les oiseaux la mangèrent, représentant ceux qui ne comprennent pas la parole." } },
      { id: 'i28-b', isTruth: true,  text: { en: "Seed on rocky ground sprung up quickly but withered because it had no root.", fr: "La semence sur le sol rocailleux leva rapidement mais sécha faute de racines." } },
      { id: 'i28-c', isTruth: true,  text: { en: "Seed among thorns was choked by the worries of life and the deceitfulness of wealth.", fr: "La semence parmi les épines fut étouffée par les soucis de la vie et la séduction des richesses." } },
      { id: 'i28-d', isTruth: false, text: { en: "Good soil produced a single harvest of sixty times what was sown.", fr: "Le bon sol produisit une récolte unique de soixante fois ce qui avait été semé." } },
    ],
    explanation: { en: "Good soil produced a crop of 100, 60, or 30 times what was sown — not a single fixed amount. The three different yields show varying levels of fruitfulness among true believers (Matthew 13:8).", fr: "Le bon sol produisit une récolte de 100, 60 ou 30 fois ce qui avait été semé — pas un seul montant fixe. Les trois rendements différents montrent des niveaux variés de fécondité parmi les vrais croyants (Matthieu 13:8)." }
  },
  {
    id: 'i29', levelNumber: 29, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Job's Restoration", fr: "La Restauration de Job" }, image: I, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i29-a', isTruth: true,  text: { en: "God spoke to Job out of a whirlwind and challenged him with a series of unanswerable questions.", fr: "Dieu parla à Job du sein d'un tourbillon et le défia avec une série de questions sans réponse." } },
      { id: 'i29-b', isTruth: true,  text: { en: "God rebuked Job's three friends, saying they had not spoken the truth about Him as Job had.", fr: "Dieu réprimanda les trois amis de Job, disant qu'ils n'avaient pas parlé de Lui avec justesse, comme Job l'avait fait." } },
      { id: 'i29-c', isTruth: true,  text: { en: "God restored Job's fortunes and gave him twice as much as he had before.", fr: "Dieu restaura la fortune de Job et lui donna deux fois plus qu'auparavant." } },
      { id: 'i29-d', isTruth: false, text: { en: "Job received exactly the same number of children he had before his suffering.", fr: "Job reçut exactement le même nombre d'enfants qu'avant sa souffrance." } },
    ],
    explanation: { en: "Job received the same number of children — ten — but they were new children, not the same ones restored to life. His wealth doubled, but his children were new gifts, not resurrection of the old (Job 42:12-13).", fr: "Job reçut le même nombre d'enfants — dix — mais c'étaient de nouveaux enfants, pas les mêmes ressuscités. Sa richesse doubla, mais ses enfants étaient de nouveaux dons, non une résurrection des anciens (Job 42:12-13)." }
  },
  {
    id: 'i30', levelNumber: 30, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Book of Psalms", fr: "Le Livre des Psaumes" }, image: I, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i30-a', isTruth: true,  text: { en: "The Psalms contain 150 songs, poems, and prayers.", fr: "Le Psautier contient 150 chants, poèmes et prières." } },
      { id: 'i30-b', isTruth: true,  text: { en: "The shortest chapter in the Bible is Psalm 117, with only two verses.", fr: "Le chapitre le plus court de la Bible est le Psaume 117, avec seulement deux versets." } },
      { id: 'i30-c', isTruth: true,  text: { en: "Psalm 119 is the longest chapter in the Bible, with 176 verses praising God's word.", fr: "Le Psaume 119 est le chapitre le plus long de la Bible, avec 176 versets louant la Parole de Dieu." } },
      { id: 'i30-d', isTruth: false, text: { en: "David wrote all 150 Psalms in the Bible.", fr: "David a écrit les 150 psaumes de la Bible." } },
    ],
    explanation: { en: "David wrote many Psalms (around 73) but not all of them. Other authors include Asaph, the Sons of Korah, Solomon, Moses, Heman, and Ethan. Many are anonymous (Psalm 90 is by Moses).", fr: "David a écrit de nombreux psaumes (environ 73), mais pas tous. D'autres auteurs incluent Asaph, les fils de Coré, Salomon, Moïse, Héman et Éthan. Beaucoup sont anonymes (le Psaume 90 est de Moïse)." }
  },
  {
    id: 'i31', levelNumber: 31, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Proverbs and Solomon", fr: "Les Proverbes et Salomon" }, image: I, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i31-a', isTruth: true,  text: { en: "The book of Proverbs begins: 'The fear of the LORD is the beginning of wisdom.'", fr: "Le livre des Proverbes commence par : 'La crainte de l'Éternel est le commencement de la sagesse.'" } },
      { id: 'i31-b', isTruth: true,  text: { en: "Proverbs 31 describes a 'wife of noble character' and is a famous passage about virtue.", fr: "Proverbes 31 décrit une 'femme vaillante' et est un passage célèbre sur la vertu." } },
      { id: 'i31-c', isTruth: true,  text: { en: "The book of Proverbs includes contributions from King Lemuel and Agur, son of Jakeh.", fr: "Le livre des Proverbes comprend des contributions du roi Lemuel et d'Agur, fils de Yakeh." } },
      { id: 'i31-d', isTruth: false, text: { en: "Solomon wrote the book of Proverbs alone, and it is attributed entirely to him.", fr: "Salomon écrivit le livre des Proverbes seul, et il lui est entièrement attribué." } },
    ],
    explanation: { en: "Proverbs is not written by Solomon alone. It includes sayings of Agur (Proverbs 30), words of King Lemuel (Proverbs 31), and collections edited by Hezekiah's men. Solomon is the primary contributor but not the sole author (Proverbs 25:1; 30:1; 31:1).", fr: "Les Proverbes ne sont pas écrits par Salomon seul. Ils comprennent les paroles d'Agur (Proverbes 30), du roi Lemuel (Proverbes 31) et des collections éditées par les hommes d'Ézéchias. Salomon est le principal contributeur mais pas le seul auteur (Proverbes 25:1 ; 30:1 ; 31:1)." }
  },
  {
    id: 'i32', levelNumber: 32, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Triumphal Entry — Details", fr: "L'Entrée Triomphale — Détails" }, image: I, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i32-a', isTruth: true,  text: { en: "Jesus sent two disciples to fetch a donkey and colt tied in a nearby village.", fr: "Jésus envoya deux disciples chercher une ânesse et un ânon attachés dans un village voisin." } },
      { id: 'i32-b', isTruth: true,  text: { en: "Matthew records that Jesus rode on a donkey with a colt, fulfilling Zechariah 9:9.", fr: "Matthieu rapporte que Jésus monta sur une ânesse avec un ânon, accomplissant Zacharie 9:9." } },
      { id: 'i32-c', isTruth: true,  text: { en: "The crowd spread palm branches and cloaks on the road and shouted praises to Jesus.", fr: "La foule étendit des branches de palmiers et des manteaux sur la route et cria des louanges à Jésus." } },
      { id: 'i32-d', isTruth: false, text: { en: "Jesus entered Jerusalem on a white horse, symbolizing His role as conquering King.", fr: "Jésus entra dans Jérusalem sur un cheval blanc, symbolisant son rôle de Roi conquérant." } },
    ],
    explanation: { en: "Jesus entered on a donkey (or colt), symbolizing peace, humility, and servanthood — not on a white horse. The white horse appears in Revelation 19 as a symbol for His future return in glory (Zechariah 9:9; Matthew 21:5).", fr: "Jésus entra sur un âne (ou ânon), symbolisant la paix, l'humilité et le service — pas sur un cheval blanc. Le cheval blanc apparaît dans Apocalypse 19 comme symbole de son futur retour en gloire (Zacharie 9:9 ; Matthieu 21:5)." }
  },
  {
    id: 'i33', levelNumber: 33, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Jesus Cleanses the Temple", fr: "Jésus Purifie le Temple" }, image: I, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i33-a', isTruth: true,  text: { en: "Jesus drove out those who were buying and selling in the temple courts.", fr: "Jésus chassa ceux qui achetaient et vendaient dans le parvis du temple." } },
      { id: 'i33-b', isTruth: true,  text: { en: "Jesus overturned the tables of the money-changers and the benches of those selling doves.", fr: "Jésus renversa les tables des changeurs et les sièges de ceux qui vendaient des colombes." } },
      { id: 'i33-c', isTruth: true,  text: { en: "Jesus quoted Isaiah 56:7, calling the temple 'a house of prayer for all nations.'", fr: "Jésus cita Ésaïe 56:7, appelant le temple 'une maison de prière pour toutes les nations.'" } },
      { id: 'i33-d', isTruth: false, text: { en: "Jesus cleansed the temple only once, according to all four Gospels.", fr: "Jésus purifia le temple une seule fois, selon les quatre Évangiles." } },
    ],
    explanation: { en: "Most scholars believe Jesus cleansed the temple twice. John 2 records a cleansing at the beginning of His ministry; Matthew, Mark, and Luke record one near the end. The details differ enough to suggest two separate events.", fr: "La plupart des érudits croient que Jésus purifia le temple deux fois. Jean 2 rapporte une purification au début de son ministère ; Matthieu, Marc et Luc en rapportent une à la fin. Les détails diffèrent suffisamment pour suggérer deux événements distincts." }
  },
  {
    id: 'i34', levelNumber: 34, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Philip and the Ethiopian Eunuch", fr: "Philippe et l'Eunuque Éthiopien" }, image: I, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i34-a', isTruth: true,  text: { en: "An angel of the Lord told Philip to go south on the desert road from Jerusalem to Gaza.", fr: "Un ange du Seigneur dit à Philippe d'aller vers le sud sur la route du désert menant de Jérusalem à Gaza." } },
      { id: 'i34-b', isTruth: true,  text: { en: "The Ethiopian official was reading aloud from the book of Isaiah when Philip found him.", fr: "Le fonctionnaire éthiopien lisait à voix haute le livre d'Ésaïe quand Philippe le trouva." } },
      { id: 'i34-c', isTruth: true,  text: { en: "Philip baptized the Ethiopian in water they found along the road.", fr: "Philippe baptisa l'Éthiopien dans l'eau qu'ils trouvèrent au bord de la route." } },
      { id: 'i34-d', isTruth: false, text: { en: "After the baptism, Philip walked alongside the chariot to continue teaching the Ethiopian for several more hours.", fr: "Après le baptême, Philippe marcha à côté du char pour continuer à enseigner l'Éthiopien pendant plusieurs heures." } },
    ],
    explanation: { en: "After the baptism, the Spirit of the Lord suddenly took Philip away, and the Ethiopian saw him no more. Philip appeared at Azotus and traveled preaching to all the towns until he reached Caesarea (Acts 8:39-40).", fr: "Après le baptême, l'Esprit du Seigneur enleva soudainement Philippe, et l'Éthiopien ne le vit plus. Philippe se trouva à Azot et continua à prêcher jusqu'à ce qu'il arrive à Césarée (Actes 8:39-40)." }
  },
  {
    id: 'i35', levelNumber: 35, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Thomas the Apostle", fr: "Thomas l'Apôtre" }, image: I, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i35-a', isTruth: true,  text: { en: "Thomas was absent when Jesus first appeared to the other disciples after the Resurrection.", fr: "Thomas était absent lorsque Jésus apparut pour la première fois aux autres disciples après la Résurrection." } },
      { id: 'i35-b', isTruth: true,  text: { en: "Thomas said he would not believe unless he saw and touched the nail marks and Jesus' side.", fr: "Thomas dit qu'il ne croirait pas à moins de voir et de toucher les marques des clous et le côté de Jésus." } },
      { id: 'i35-c', isTruth: true,  text: { en: "Jesus appeared to Thomas a week later and invited him to touch His wounds.", fr: "Jésus apparut à Thomas une semaine plus tard et l'invita à toucher ses blessures." } },
      { id: 'i35-d', isTruth: false, text: { en: "The Bible records that Thomas did actually touch Jesus' wounds before declaring faith.", fr: "La Bible rapporte que Thomas toucha effectivement les blessures de Jésus avant de déclarer sa foi." } },
    ],
    explanation: { en: "The text does not say Thomas actually touched Jesus. When Jesus appeared and invited him, Thomas responded 'My Lord and my God!' — without the text recording that he reached out his hand (John 20:27-28).", fr: "Le texte ne dit pas que Thomas toucha réellement Jésus. Quand Jésus apparut et l'invita, Thomas répondit : 'Mon Seigneur et mon Dieu !' — sans que le texte mentionne qu'il tendit la main (Jean 20:27-28)." }
  },
  {
    id: 'i36', levelNumber: 36, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Council of Jerusalem (Acts 15)", fr: "Le Concile de Jérusalem (Actes 15)" }, image: I, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i36-a', isTruth: true,  text: { en: "The Jerusalem Council debated whether Gentile believers needed to be circumcised to be saved.", fr: "Le Concile de Jérusalem débattit si les croyants d'origine non juive devaient être circoncis pour être sauvés." } },
      { id: 'i36-b', isTruth: true,  text: { en: "Peter argued that God had not distinguished between Jews and Gentiles and gave the Spirit to all.", fr: "Pierre argua que Dieu n'avait pas fait de distinction entre Juifs et non-Juifs et avait donné l'Esprit à tous." } },
      { id: 'i36-c', isTruth: true,  text: { en: "James gave the final ruling and proposed that Gentiles abstain from food polluted by idols and sexual immorality.", fr: "Jacques rendit la décision finale et proposa que les non-Juifs s'abstiennent des aliments souillés par les idoles et de l'immoralité sexuelle." } },
      { id: 'i36-d', isTruth: false, text: { en: "Paul chaired the Jerusalem Council and wrote the final letter sent to the Gentile churches.", fr: "Paul présida le Concile de Jérusalem et rédigea la lettre finale envoyée aux Églises non juives." } },
    ],
    explanation: { en: "James presided over the Jerusalem Council and gave the decisive ruling. The letter was sent in the names of the apostles and elders. Paul and Barnabas were present but did not chair the council (Acts 15:13, 19-23).", fr: "Jacques présida le Concile de Jérusalem et rendit la décision finale. La lettre fut envoyée au nom des apôtres et des anciens. Paul et Barnabas étaient présents mais ne présidèrent pas le concile (Actes 15:13, 19-23)." }
  },
  {
    id: 'i37', levelNumber: 37, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Transfiguration — Details", fr: "La Transfiguration — Détails" }, image: I, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i37-a', isTruth: true,  text: { en: "Peter suggested building three shelters — one for Jesus, one for Moses, one for Elijah.", fr: "Pierre proposa de construire trois tentes — une pour Jésus, une pour Moïse, une pour Élie." } },
      { id: 'i37-b', isTruth: true,  text: { en: "The disciples fell facedown to the ground when they heard the voice from the cloud.", fr: "Les disciples tombèrent face contre terre en entendant la voix venant de la nuée." } },
      { id: 'i37-c', isTruth: true,  text: { en: "Jesus told the three disciples to not tell anyone what they had seen until He rose from the dead.", fr: "Jésus dit aux trois disciples de ne parler à personne de ce qu'ils avaient vu jusqu'à ce qu'il ressuscite." } },
      { id: 'i37-d', isTruth: false, text: { en: "Luke records that Moses and Elijah appeared with Jesus for seven days and seven nights on the mountain.", fr: "Luc rapporte que Moïse et Élie apparurent avec Jésus pendant sept jours et sept nuits sur la montagne." } },
    ],
    explanation: { en: "No Gospel mentions Moses and Elijah staying for seven days. They appeared briefly and spoke with Jesus, then were gone. The event appears to have been a short, intense spiritual vision (Matthew 17:8; Luke 9:36).", fr: "Aucun Évangile ne mentionne que Moïse et Élie restèrent sept jours. Ils apparurent brièvement, s'entretinrent avec Jésus, puis disparurent. L'événement semble avoir été une vision spirituelle courte et intense (Matthieu 17:8 ; Luc 9:36)." }
  },
  {
    id: 'i38', levelNumber: 38, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Jonah in Nineveh", fr: "Jonas à Ninive" }, image: I, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i38-a', isTruth: true,  text: { en: "God gave Nineveh forty days before its judgment, according to Jonah's proclamation.", fr: "Dieu accorda à Ninive quarante jours avant le jugement, selon la proclamation de Jonas." } },
      { id: 'i38-b', isTruth: true,  text: { en: "The king of Nineveh proclaimed a fast and commanded everyone — including animals — to wear sackcloth.", fr: "Le roi de Ninive proclama un jeûne et ordonna à tous — même aux animaux — de porter le sac." } },
      { id: 'i38-c', isTruth: true,  text: { en: "God relented and did not destroy Nineveh when He saw their repentance.", fr: "Dieu se repentit et ne détruisit pas Ninive en voyant leur repentance." } },
      { id: 'i38-d', isTruth: false, text: { en: "Jonah rejoiced and celebrated when God spared Nineveh.", fr: "Jonas se réjouit et célébra quand Dieu épargna Ninive." } },
    ],
    explanation: { en: "Jonah was greatly displeased and angry when God spared Nineveh. He sat outside the city, complained to God, and sulked — even wanting to die (Jonah 4:1-3).", fr: "Jonas fut très mécontent et irrité quand Dieu épargna Ninive. Il s'assit à l'extérieur de la ville, se plaignit à Dieu et bouda — allant jusqu'à vouloir mourir (Jonas 4:1-3)." }
  },
  {
    id: 'i39', levelNumber: 39, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Sermon on the Mount — Salt and Light", fr: "Le Sermon sur la Montagne — Sel et Lumière" }, image: I, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i39-a', isTruth: true,  text: { en: "Jesus told His followers they were 'the salt of the earth' and 'the light of the world.'", fr: "Jésus dit à ses disciples qu'ils étaient 'le sel de la terre' et 'la lumière du monde.'" } },
      { id: 'i39-b', isTruth: true,  text: { en: "Jesus said a city on a hill cannot be hidden.", fr: "Jésus dit qu'une ville placée sur une montagne ne peut être cachée." } },
      { id: 'i39-c', isTruth: true,  text: { en: "Jesus said He came not to abolish the Law or the Prophets but to fulfill them.", fr: "Jésus dit qu'il n'était pas venu abolir la Loi ni les Prophètes, mais les accomplir." } },
      { id: 'i39-d', isTruth: false, text: { en: "Jesus said salt that loses its saltiness can be made salty again by mixing it with fresh water.", fr: "Jésus dit que le sel qui a perdu son goût peut retrouver sa saveur en le mélangeant à de l'eau fraîche." } },
    ],
    explanation: { en: "Jesus said if salt loses its saltiness, it can no longer be made salty — it is then good for nothing but to be thrown out. He did not suggest any way to restore it (Matthew 5:13).", fr: "Jésus dit que si le sel perd son goût, il ne peut plus être rendu salé — il n'est alors bon qu'à être jeté dehors. Il ne suggéra aucun moyen de le restaurer (Matthieu 5:13)." }
  },
  {
    id: 'i40', levelNumber: 40, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Bartimaeus Healed", fr: "Bartimée Guéri" }, image: I, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i40-a', isTruth: true,  text: { en: "Bartimaeus was a blind beggar sitting by the roadside near Jericho.", fr: "Bartimée était un mendiant aveugle assis au bord de la route près de Jéricho." } },
      { id: 'i40-b', isTruth: true,  text: { en: "Bartimaeus called out 'Jesus, Son of David, have mercy on me!' repeatedly despite being told to be quiet.", fr: "Bartimée cria à plusieurs reprises : 'Jésus, fils de David, aie pitié de moi !' malgré les injonctions de se taire." } },
      { id: 'i40-c', isTruth: true,  text: { en: "Jesus stopped and called for Bartimaeus, who immediately threw his cloak aside and jumped to his feet.", fr: "Jésus s'arrêta et fit appeler Bartimée, qui jeta aussitôt son manteau et sauta sur ses pieds." } },
      { id: 'i40-d', isTruth: false, text: { en: "Jesus healed Bartimaeus by touching his eyes and commanding them to open.", fr: "Jésus guérit Bartimée en touchant ses yeux et en ordonnant qu'ils s'ouvrent." } },
    ],
    explanation: { en: "Jesus healed Bartimaeus by speaking the word — 'Go, your faith has healed you.' He did not touch his eyes. Bartimaeus immediately received his sight and followed Jesus (Mark 10:52).", fr: "Jésus guérit Bartimée par la parole — 'Va, ta foi t'a sauvé.' Il ne toucha pas ses yeux. Bartimée recouvra immédiatement la vue et suivit Jésus (Marc 10:52)." }
  },
  {
    id: 'i41', levelNumber: 41, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Apostle Paul's Early Ministry", fr: "Le Début du Ministère de l'Apôtre Paul" }, image: I, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i41-a', isTruth: true,  text: { en: "After his conversion, Paul went to Arabia and then returned to Damascus.", fr: "Après sa conversion, Paul alla en Arabie et retourna ensuite à Damas." } },
      { id: 'i41-b', isTruth: true,  text: { en: "Paul first visited Peter in Jerusalem only three years after his conversion.", fr: "Paul ne rendit visite à Pierre à Jérusalem que trois ans après sa conversion." } },
      { id: 'i41-c', isTruth: true,  text: { en: "Barnabas introduced Paul to the Jerusalem apostles and vouched for his genuine conversion.", fr: "Barnabas présenta Paul aux apôtres de Jérusalem et témoigna de la réalité de sa conversion." } },
      { id: 'i41-d', isTruth: false, text: { en: "Paul and Barnabas led the second missionary journey together after the first.", fr: "Paul et Barnabas dirigèrent ensemble le deuxième voyage missionnaire après le premier." } },
    ],
    explanation: { en: "Paul and Barnabas separated sharply before the second journey because they disagreed over taking Mark with them. Paul took Silas, while Barnabas took Mark. They went in different directions (Acts 15:36-41).", fr: "Paul et Barnabas se séparèrent vivement avant le deuxième voyage car ils ne s'entendaient pas sur la question d'emmener Marc. Paul prit Silas, tandis que Barnabas prit Marc. Ils partirent dans des directions différentes (Actes 15:36-41)." }
  },
  {
    id: 'i42', levelNumber: 42, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Widow's Offering", fr: "L'Offrande de la Veuve" }, image: I, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i42-a', isTruth: true,  text: { en: "Jesus sat opposite the temple treasury and watched people putting money in.", fr: "Jésus s'assit en face du trésor du temple et observa les gens y déposer de l'argent." } },
      { id: 'i42-b', isTruth: true,  text: { en: "A poor widow put in two very small copper coins — all she had to live on.", fr: "Une pauvre veuve déposa deux petites pièces de cuivre — tout ce qu'elle avait pour vivre." } },
      { id: 'i42-c', isTruth: true,  text: { en: "Jesus said the widow had put more into the treasury than all the rich people.", fr: "Jésus dit que la veuve avait mis plus dans le trésor que tous les riches." } },
      { id: 'i42-d', isTruth: false, text: { en: "Jesus called the widow up to the front of the crowd to publicly honor her generosity.", fr: "Jésus appela la veuve devant la foule pour honorer publiquement sa générosité." } },
    ],
    explanation: { en: "Jesus did not call the widow forward or make a public scene. He privately called His disciples to Himself and commented on what He had observed. The widow herself is not recorded as hearing Jesus' words (Mark 12:43).", fr: "Jésus n'appela pas la veuve et ne créa pas de scène publique. Il appela ses disciples à lui en privé et commenta ce qu'il avait observé. On ne mentionne pas que la veuve elle-même entendit les paroles de Jésus (Marc 12:43)." }
  },
  {
    id: 'i43', levelNumber: 43, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Parable of the Lost Coin", fr: "La Parabole de la Pièce Perdue" }, image: I, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i43-a', isTruth: true,  text: { en: "A woman had ten silver coins and lost one, so she swept the house and searched carefully.", fr: "Une femme avait dix pièces d'argent et en perdit une ; elle balaya la maison et chercha soigneusement." } },
      { id: 'i43-b', isTruth: true,  text: { en: "When the woman found the lost coin, she called her neighbors and friends to rejoice with her.", fr: "Quand la femme trouva la pièce perdue, elle appela ses voisines et amies pour se réjouir avec elle." } },
      { id: 'i43-c', isTruth: true,  text: { en: "Jesus said the angels of God rejoice over one sinner who repents.", fr: "Jésus dit que les anges de Dieu se réjouissent pour un pécheur qui se repent." } },
      { id: 'i43-d', isTruth: false, text: { en: "The parable says the woman had lost ten coins and found only eight of them.", fr: "La parabole dit que la femme avait perdu dix pièces et n'en retrouva que huit." } },
    ],
    explanation: { en: "The woman had ten silver coins, lost one, and found it. She recovered exactly one missing coin — the story is about the joy of finding the one lost thing, not about partial recovery (Luke 15:8-10).", fr: "La femme avait dix pièces d'argent, en perdit une et la retrouva. Elle récupéra exactement la pièce perdue — l'histoire porte sur la joie de retrouver ce qui était perdu, pas sur une récupération partielle (Luc 15:8-10)." }
  },
  {
    id: 'i44', levelNumber: 44, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Call of Moses' Successor", fr: "La Désignation du Successeur de Moïse" }, image: I, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i44-a', isTruth: true,  text: { en: "God told Moses to commission Joshua before the whole assembly as his successor.", fr: "Dieu dit à Moïse d'établir Josué devant toute l'assemblée comme son successeur." } },
      { id: 'i44-b', isTruth: true,  text: { en: "Moses died on Mount Nebo in the land of Moab after seeing the Promised Land from a distance.", fr: "Moïse mourut sur le mont Nébo au pays de Moab après avoir vu la Terre Promise de loin." } },
      { id: 'i44-c', isTruth: true,  text: { en: "Moses was 120 years old when he died, and his eyes were not weak nor his strength gone.", fr: "Moïse avait 120 ans à sa mort, et ses yeux n'étaient pas éteints et sa vigueur ne l'avait pas abandonné." } },
      { id: 'i44-d', isTruth: false, text: { en: "God allowed Moses to enter the Promised Land for one day before he died.", fr: "Dieu permit à Moïse d'entrer dans la Terre Promise pendant une journée avant sa mort." } },
    ],
    explanation: { en: "Moses was never allowed to enter the Promised Land. God showed him the entire land from Mount Nebo, but Moses died there in Moab and was buried in an unknown location (Deuteronomy 34:4-6).", fr: "Moïse ne put jamais entrer dans la Terre Promise. Dieu lui montra tout le pays depuis le mont Nébo, mais Moïse mourut là au pays de Moab et fut enterré en un lieu inconnu (Deutéronome 34:4-6)." }
  },
  {
    id: 'i45', levelNumber: 45, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Jephthah's Vow", fr: "Le Vœu de Jephthah" }, image: I, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i45-a', isTruth: true,  text: { en: "Jephthah was a mighty warrior and judge, the son of Gilead and a prostitute.", fr: "Jephthah était un vaillant guerrier et juge, fils de Galaad et d'une prostituée." } },
      { id: 'i45-b', isTruth: true,  text: { en: "Jephthah vowed to sacrifice whatever came out of his house first if God gave him victory over the Ammonites.", fr: "Jephthah fit le vœu de sacrifier ce qui sortirait en premier de chez lui si Dieu lui donnait la victoire sur les Ammonites." } },
      { id: 'i45-c', isTruth: true,  text: { en: "His only daughter came out dancing and celebrating to greet him after his victory.", fr: "Sa fille unique sortit en dansant et en célébrant pour l'accueillir après sa victoire." } },
      { id: 'i45-d', isTruth: false, text: { en: "The Bible clearly states that Jephthah killed his daughter to fulfill his vow.", fr: "La Bible indique clairement que Jephthah tua sa fille pour accomplir son vœu." } },
    ],
    explanation: { en: "The text in Judges 11 is ambiguous. It says he 'did with her according to his vow.' Many scholars interpret this as dedication to lifelong virginity in service to God rather than literal death, based on the mention of mourning her virginity, not her death (Judges 11:39).", fr: "Le texte de Juges 11 est ambigu. Il dit qu'il 'fit d'elle selon son vœu.' De nombreux érudits interprètent cela comme une dédicace à la virginité perpétuelle au service de Dieu plutôt qu'une mort littérale, sur la base du deuil pour sa virginité, non pour sa mort (Juges 11:39)." }
  },
  {
    id: 'i46', levelNumber: 46, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Ark of the Covenant Captured", fr: "L'Arche de l'Alliance Capturée" }, image: I, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i46-a', isTruth: true,  text: { en: "The Philistines captured the Ark of the Covenant in battle and placed it in the temple of Dagon.", fr: "Les Philistins capturèrent l'arche de l'alliance au combat et la placèrent dans le temple de Dagon." } },
      { id: 'i46-b', isTruth: true,  text: { en: "The statue of Dagon fell face down before the Ark, and the next day was found with its head and hands broken off.", fr: "La statue de Dagon tomba face contre terre devant l'arche, et le lendemain on la trouva avec la tête et les mains coupées." } },
      { id: 'i46-c', isTruth: true,  text: { en: "God struck the Philistines with tumors (plagues) in every city the Ark was taken to.", fr: "Dieu frappa les Philistins de tumeurs (plaies) dans chaque ville où l'arche fut amenée." } },
      { id: 'i46-d', isTruth: false, text: { en: "The Philistines kept the Ark for seven months before returning it on a cart with a guilt offering.", fr: "Les Philistins gardèrent l'arche pendant sept ans avant de la rendre sur un chariot avec une offrande expiatoire." } },
    ],
    explanation: { en: "The Philistines kept the Ark for only seven months — not seven years — before they returned it to Israel on a cart accompanied by gold guilt offerings (1 Samuel 6:1).", fr: "Les Philistins ne gardèrent l'arche que sept mois — pas sept ans — avant de la rendre à Israël sur un chariot accompagné d'offrandes expiatoires en or (1 Samuel 6:1)." }
  },
  {
    id: 'i47', levelNumber: 47, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Road to Emmaus", fr: "Le Chemin d'Emmaüs" }, image: I, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i47-a', isTruth: true,  text: { en: "Two disciples were walking to Emmaus when the risen Jesus joined them, but they did not recognize Him.", fr: "Deux disciples marchaient vers Emmaüs quand le Jésus ressuscité les rejoignit, mais ils ne le reconnurent pas." } },
      { id: 'i47-b', isTruth: true,  text: { en: "Jesus explained to them everything in the Scriptures concerning Himself, beginning with Moses and the Prophets.", fr: "Jésus leur expliqua tout ce que les Écritures disaient à son sujet, en commençant par Moïse et les Prophètes." } },
      { id: 'i47-c', isTruth: true,  text: { en: "The two disciples recognized Jesus when He broke bread with them at the table.", fr: "Les deux disciples reconnurent Jésus quand il rompit le pain avec eux à table." } },
      { id: 'i47-d', isTruth: false, text: { en: "One of the two Emmaus disciples was named Clopas, and the other was named James.", fr: "L'un des deux disciples d'Emmaüs s'appelait Cléopas, et l'autre s'appelait Jacques." } },
    ],
    explanation: { en: "One disciple is named Clopas (Luke 24:18), but the other's name is never given in Scripture. 'James' is not mentioned as the second Emmaus disciple anywhere in the Gospels.", fr: "L'un des disciples est nommé Cléopas (Luc 24:18), mais l'autre n'est jamais nommé dans l'Écriture. 'Jacques' n'est mentionné nulle part comme le deuxième disciple d'Emmaüs dans les Évangiles." }
  },
  {
    id: 'i48', levelNumber: 48, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Elisha and the Syrian Army", fr: "Élisée et l'Armée Syrienne" }, image: I, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i48-a', isTruth: true,  text: { en: "The king of Syria sent a great army with chariots and horses to surround the city where Elisha was.", fr: "Le roi de Syrie envoya une grande armée avec des chars et des chevaux pour encercler la ville où se trouvait Élisée." } },
      { id: 'i48-b', isTruth: true,  text: { en: "Elisha prayed that his servant's eyes would be opened to see the spiritual army surrounding them.", fr: "Élisée pria pour que les yeux de son serviteur soient ouverts pour voir l'armée spirituelle qui les entourait." } },
      { id: 'i48-c', isTruth: true,  text: { en: "When the Syrian army came, Elisha prayed they would be struck with blindness.", fr: "Quand l'armée syrienne arriva, Élisée pria pour qu'elle soit frappée de cécité." } },
      { id: 'i48-d', isTruth: false, text: { en: "Elisha had the blinded Syrian army destroyed by the Israelite army at Samaria.", fr: "Élisée fit détruire l'armée syrienne aveuglée par l'armée israélite à Samarie." } },
    ],
    explanation: { en: "Rather than destroying the army, Elisha led the blinded Syrians to Samaria, prayed for their eyes to be restored, and told the king to feed them and let them return home. The king sent them away in peace (2 Kings 6:22-23).", fr: "Au lieu de détruire l'armée, Élisée conduisit les Syriens aveugles à Samarie, pria pour que leurs yeux soient ouverts, et dit au roi de les nourrir et de les laisser rentrer. Le roi les laissa partir en paix (2 Rois 6:22-23)." }
  },
  {
    id: 'i49', levelNumber: 49, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Absalom's Rebellion", fr: "La Rébellion d'Absalom" }, image: I, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i49-a', isTruth: true,  text: { en: "Absalom was David's son who stole the hearts of the Israelites and declared himself king.", fr: "Absalom était le fils de David qui vola le cœur des Israélites et se déclara roi." } },
      { id: 'i49-b', isTruth: true,  text: { en: "Absalom was famous for his hair, which weighed about five pounds when cut annually.", fr: "Absalom était célèbre pour ses cheveux, qui pesaient environ deux kilos et demi quand on les coupait chaque année." } },
      { id: 'i49-c', isTruth: true,  text: { en: "Absalom died when his head got caught in an oak tree and Joab thrust three javelins into his heart.", fr: "Absalom mourut quand sa tête se prit dans un chêne et que Joab lui enfonça trois lances dans le cœur." } },
      { id: 'i49-d', isTruth: false, text: { en: "David ordered Joab to kill Absalom when they met in battle.", fr: "David ordonna à Joab de tuer Absalom quand ils se rencontrèrent au combat." } },
    ],
    explanation: { en: "David explicitly commanded Joab and his commanders to 'Be gentle with the young man Absalom for my sake.' Joab disobeyed this order by killing Absalom. David mourned deeply when he heard (2 Samuel 18:5, 14).", fr: "David ordonna explicitement à Joab et à ses commandants de 'Ménagez le jeune Absalom pour l'amour de moi.' Joab désobéit à cet ordre en tuant Absalom. David fut profondément affligé en l'apprenant (2 Samuel 18:5, 14)." }
  },
  {
    id: 'i50', levelNumber: 50, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Ezra Reads the Law", fr: "Esdras Lit la Loi" }, image: I, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i50-a', isTruth: true,  text: { en: "Ezra the scribe brought the Book of the Law before the assembly of men, women, and children.", fr: "Esdras le scribe apporta le livre de la Loi devant l'assemblée d'hommes, de femmes et d'enfants." } },
      { id: 'i50-b', isTruth: true,  text: { en: "Ezra read the Law from daybreak till noon while the people listened attentively.", fr: "Esdras lut la Loi depuis le lever du jour jusqu'à midi pendant que le peuple écoutait attentivement." } },
      { id: 'i50-c', isTruth: true,  text: { en: "The Levites helped the people understand the Law by reading and giving the meaning.", fr: "Les Lévites aidèrent le peuple à comprendre la Loi en la lisant et en en donnant le sens." } },
      { id: 'i50-d', isTruth: false, text: { en: "The people celebrated and rejoiced immediately upon hearing the Law for the first time.", fr: "Le peuple célébra et se réjouit immédiatement en entendant la Loi pour la première fois." } },
    ],
    explanation: { en: "The people wept when they heard the words of the Law. Nehemiah, Ezra, and the Levites told them not to grieve — to eat, drink, and celebrate, for the day was holy. Their weeping came first (Nehemiah 8:9-10).", fr: "Le peuple pleurait en entendant les paroles de la Loi. Néhémie, Esdras et les Lévites leur dirent de ne pas s'affliger — de manger, de boire et de célébrer, car le jour était saint. Les larmes vinrent d'abord (Néhémie 8:9-10)." }
  },
  {
    id: 'i51', levelNumber: 51, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Zechariah — Father of John the Baptist", fr: "Zacharie — Père de Jean-Baptiste" }, image: I, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i51-a', isTruth: true,  text: { en: "Zechariah was a priest who was struck mute by the angel Gabriel for doubting the promise.", fr: "Zacharie était un sacrificateur frappé de mutisme par l'ange Gabriel pour avoir douté de la promesse." } },
      { id: 'i51-b', isTruth: true,  text: { en: "The angel appeared to Zechariah while he was burning incense in the temple.", fr: "L'ange apparut à Zacharie pendant qu'il brûlait de l'encens dans le temple." } },
      { id: 'i51-c', isTruth: true,  text: { en: "Zechariah's speech was restored when he wrote 'His name is John' on a tablet.", fr: "La parole de Zacharie lui fut rendue quand il écrivit 'Son nom est Jean' sur une tablette." } },
      { id: 'i51-d', isTruth: false, text: { en: "Zechariah was struck deaf as well as mute for the duration of Elizabeth's pregnancy.", fr: "Zacharie fut à la fois sourd et muet pendant toute la durée de la grossesse d'Élisabeth." } },
    ],
    explanation: { en: "Zechariah was struck mute but not deaf. He could still hear, as shown when relatives made signs to him to find out what he wanted the child named — indicating he could hear them speaking (Luke 1:62).", fr: "Zacharie fut frappé de mutisme mais pas de surdité. Il pouvait encore entendre, comme le montre le fait que les parents lui firent des signes pour savoir quel nom il voulait donner à l'enfant — indiquant qu'il les entendait parler (Luc 1:62)." }
  },
  {
    id: 'i52', levelNumber: 52, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Parable of the Mustard Seed", fr: "La Parabole de la Graine de Sénevé" }, image: I, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i52-a', isTruth: true,  text: { en: "Jesus compared the kingdom of heaven to a mustard seed — the smallest of all seeds.", fr: "Jésus compara le royaume des cieux à une graine de sénevé — la plus petite de toutes les graines." } },
      { id: 'i52-b', isTruth: true,  text: { en: "Jesus said the mustard seed grows into the largest of garden plants and becomes a tree.", fr: "Jésus dit que la graine de sénevé pousse jusqu'à devenir la plus grande des plantes du jardin et forme un arbre." } },
      { id: 'i52-c', isTruth: true,  text: { en: "Birds come and perch in the branches of the mustard tree in the parable.", fr: "Des oiseaux viennent se percher dans les branches du sénevé dans la parabole." } },
      { id: 'i52-d', isTruth: false, text: { en: "Jesus said the mustard seed is absolutely the smallest seed in the entire world.", fr: "Jésus dit que la graine de sénevé est absolument la plus petite graine du monde entier." } },
    ],
    explanation: { en: "Jesus said it was 'the smallest of all seeds' in the context of seeds you plant in the ground (a garden context). Scientifically, it's not the world's smallest seed. This was a rhetorical statement for His Jewish audience familiar with mustard cultivation (Matthew 13:32).", fr: "Jésus dit que c'était 'la plus petite de toutes les graines' dans le contexte des semences qu'on plante (contexte de jardin). Ce n'est pas scientifiquement la plus petite graine du monde. C'était une affirmation rhétorique pour son auditoire juif familier avec la culture du sénevé (Matthieu 13:32)." }
  },
  {
    id: 'i53', levelNumber: 53, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Samuel Anoints Saul", fr: "Samuel Oint Saül" }, image: I, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i53-a', isTruth: true,  text: { en: "Saul was searching for his father's lost donkeys when he came to Samuel.", fr: "Saül cherchait les ânesses perdues de son père quand il rencontra Samuel." } },
      { id: 'i53-b', isTruth: true,  text: { en: "God had told Samuel a day before that He would send a man from Benjamin to be anointed as king.", fr: "Dieu avait dit à Samuel la veille qu'Il lui enverrait un homme de la tribu de Benjamin à oindre comme roi." } },
      { id: 'i53-c', isTruth: true,  text: { en: "Saul was from the tribe of Benjamin, the smallest tribe of Israel.", fr: "Saül était de la tribu de Benjamin, la plus petite tribu d'Israël." } },
      { id: 'i53-d', isTruth: false, text: { en: "The people chose Saul as king by popular vote in a public assembly.", fr: "Le peuple choisit Saül comme roi par vote populaire lors d'une assemblée publique." } },
    ],
    explanation: { en: "Saul was selected by the casting of lots — a form of divine selection — not by popular vote. When lots were cast, the tribe of Benjamin was chosen, then Saul's family, then Saul himself. He was then hidden and had to be brought forward (1 Samuel 10:20-22).", fr: "Saül fut choisi par le tirage au sort — une forme de sélection divine — pas par vote populaire. Le tirage au sort désigna la tribu de Benjamin, puis la famille de Saül, puis Saül lui-même. Il se cachait et dut être amené (1 Samuel 10:20-22)." }
  },
  {
    id: 'i54', levelNumber: 54, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Mary Magdalene at the Tomb", fr: "Marie-Madeleine au Tombeau" }, image: I, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i54-a', isTruth: true,  text: { en: "Mary Magdalene went to the tomb early on the first day of the week while it was still dark.", fr: "Marie-Madeleine se rendit au tombeau tôt le premier jour de la semaine, alors qu'il faisait encore sombre." } },
      { id: 'i54-b', isTruth: true,  text: { en: "Mary initially mistook the risen Jesus for the gardener.", fr: "Marie confondit d'abord le Jésus ressuscité avec le jardinier." } },
      { id: 'i54-c', isTruth: true,  text: { en: "Jesus called Mary by name, and she recognized Him and exclaimed 'Rabboni!' (meaning Teacher).", fr: "Jésus appela Marie par son nom, et elle le reconnut et s'écria : 'Rabbouni !' (signifiant Maître)." } },
      { id: 'i54-d', isTruth: false, text: { en: "Mary Magdalene was the only woman present at the tomb on resurrection morning.", fr: "Marie-Madeleine était la seule femme présente au tombeau le matin de la Résurrection." } },
    ],
    explanation: { en: "Multiple women went to the tomb. Matthew mentions Mary Magdalene and 'the other Mary.' Mark mentions Mary Magdalene, Mary the mother of James, and Salome. Luke also mentions several women. She was not alone (Mark 16:1).", fr: "Plusieurs femmes allèrent au tombeau. Matthieu mentionne Marie-Madeleine et 'l'autre Marie'. Marc cite Marie-Madeleine, Marie mère de Jacques et Salomé. Luc mentionne aussi plusieurs femmes. Elle n'était pas seule (Marc 16:1)." }
  },
  {
    id: 'i55', levelNumber: 55, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Nebuchadnezzar's Dream (Daniel 2)", fr: "Le Rêve de Nébucadnetsar (Daniel 2)" }, image: I, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i55-a', isTruth: true,  text: { en: "Nebuchadnezzar dreamed of a great statue with a head of gold, chest of silver, belly of bronze, and legs of iron.", fr: "Nébucadnetsar rêva d'une grande statue avec une tête d'or, une poitrine d'argent, un ventre de bronze et des jambes de fer." } },
      { id: 'i55-b', isTruth: true,  text: { en: "A rock cut out without human hands struck the statue's feet and destroyed it, then became a great mountain.", fr: "Une pierre taillée sans mains frappa les pieds de la statue et la détruisit, puis devint une grande montagne." } },
      { id: 'i55-c', isTruth: true,  text: { en: "Daniel interpreted the gold head as representing Nebuchadnezzar and his kingdom.", fr: "Daniel interpréta la tête d'or comme représentant Nébucadnetsar et son royaume." } },
      { id: 'i55-d', isTruth: false, text: { en: "Nebuchadnezzar's own wise men successfully interpreted his dream before Daniel.", fr: "Les propres sages de Nébucadnetsar interprétèrent avec succès son rêve avant Daniel." } },
    ],
    explanation: { en: "Nebuchadnezzar's wise men could not interpret the dream because the king refused to tell them what it was. He demanded they first tell him the dream, then interpret it — which they could not do. Daniel alone received the answer from God (Daniel 2:10-19).", fr: "Les sages de Nébucadnetsar ne purent interpréter le rêve car le roi refusa de le leur dire. Il exigea qu'ils lui disent d'abord le rêve, puis l'interprètent — ce qu'ils ne purent faire. Daniel seul reçut la réponse de Dieu (Daniel 2:10-19)." }
  },
  {
    id: 'i56', levelNumber: 56, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Peter's Restoration by Jesus", fr: "La Restauration de Pierre par Jésus" }, image: I, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i56-a', isTruth: true,  text: { en: "After His resurrection, Jesus appeared to His disciples at the Sea of Galilee.", fr: "Après sa résurrection, Jésus apparut à ses disciples au bord de la mer de Galilée." } },
      { id: 'i56-b', isTruth: true,  text: { en: "Jesus asked Peter three times, 'Do you love me?' and commissioned him to tend His sheep.", fr: "Jésus demanda trois fois à Pierre : 'M'aimes-tu ?' et lui confia le soin de ses brebis." } },
      { id: 'i56-c', isTruth: true,  text: { en: "The disciples caught 153 large fish after Jesus told them to cast their net on the right side.", fr: "Les disciples prirent 153 gros poissons après que Jésus leur eut dit de jeter le filet du côté droit." } },
      { id: 'i56-d', isTruth: false, text: { en: "Jesus asked Peter the same question in the same Greek word 'agape' all three times.", fr: "Jésus posa la question à Pierre en utilisant le même mot grec 'agapé' les trois fois." } },
    ],
    explanation: { en: "The first two times Jesus used 'agapao' (unconditional love), and Peter responded with 'phileo' (brotherly love). The third time, Jesus switched to 'phileo' — matching Peter's word — which hurt Peter deeply. The wordplay matters in the Greek original (John 21:15-17).", fr: "Les deux premières fois, Jésus utilisa 'agapao' (amour inconditionnel), et Pierre répondit avec 'phileo' (amour fraternel). La troisième fois, Jésus passa à 'phileo', correspondant au mot de Pierre — ce qui blessa profondément Pierre. Le jeu de mots est important dans l'original grec (Jean 21:15-17)." }
  },
  {
    id: 'i57', levelNumber: 57, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Pharisee and the Tax Collector", fr: "Le Pharisien et le Percepteur d'Impôts" }, image: I, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i57-a', isTruth: true,  text: { en: "In this parable, the Pharisee stood and prayed about himself — thanking God he was not like others.", fr: "Dans cette parabole, le Pharisien se leva et pria sur lui-même, remerciant Dieu de n'être pas comme les autres." } },
      { id: 'i57-b', isTruth: true,  text: { en: "The tax collector stood at a distance, would not look up, and beat his breast saying 'God, have mercy on me, a sinner.'", fr: "Le percepteur se tenait à distance, n'osait pas lever les yeux et se frappait la poitrine en disant : 'O Dieu, sois apaisé envers moi, pécheur !'" } },
      { id: 'i57-c', isTruth: true,  text: { en: "Jesus said the tax collector, not the Pharisee, went home justified before God.", fr: "Jésus dit que c'est le percepteur, et non le Pharisien, qui rentra chez lui justifié devant Dieu." } },
      { id: 'i57-d', isTruth: false, text: { en: "Jesus told this parable to correct the behavior of a specific Pharisee who was listening to Him.", fr: "Jésus raconta cette parabole pour corriger le comportement d'un Pharisien spécifique qui l'écoutait." } },
    ],
    explanation: { en: "Jesus told this parable to 'some who were confident of their own righteousness and looked down on everyone else' — addressing a general attitude, not correcting a specific identifiable person in the crowd (Luke 18:9).", fr: "Jésus raconta cette parabole à 'certains qui se croyaient justes' et méprisaient les autres — s'adressant à une attitude générale, pas en corrigeant une personne spécifique identifiable (Luc 18:9)." }
  },
  {
    id: 'i58', levelNumber: 58, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Book of Ruth — Boaz the Kinsman-Redeemer", fr: "Le Livre de Ruth — Boaz le Racheteur" }, image: I, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i58-a', isTruth: true,  text: { en: "Boaz was a relative of Naomi's dead husband and a man of standing in Bethlehem.", fr: "Boaz était un parent du mari défunt de Naomi et un homme influent à Bethléhem." } },
      { id: 'i58-b', isTruth: true,  text: { en: "Ruth uncovered Boaz's feet at the threshing floor as a sign of appeal for him to fulfill the role of kinsman-redeemer.", fr: "Ruth découvrit les pieds de Boaz à l'aire de battage comme signe d'appel pour qu'il remplisse le rôle de racheteur." } },
      { id: 'i58-c', isTruth: true,  text: { en: "There was a closer relative than Boaz who had the first right to redeem, but he declined.", fr: "Il y avait un parent plus proche que Boaz qui avait le premier droit de rachat, mais il déclina." } },
      { id: 'i58-d', isTruth: false, text: { en: "The closer kinsman-redeemer gave Ruth his ring as a sign that he was giving up his right of redemption.", fr: "Le parent plus proche donna sa bague à Ruth comme signe qu'il renonçait à son droit de rachat." } },
    ],
    explanation: { en: "The legal transfer involved a sandal — not a ring. In the custom of the time, the closer kinsman-redeemer took off his sandal and gave it to Boaz as a legal transaction confirming the transfer of the right of redemption (Ruth 4:7-8).", fr: "Le transfert légal impliquait une sandale — pas une bague. Selon la coutume de l'époque, le parent plus proche ôta sa sandale et la donna à Boaz comme acte légal confirmant le transfert du droit de rachat (Ruth 4:7-8)." }
  },
  {
    id: 'i59', levelNumber: 59, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Day of Pentecost — Peter's Sermon", fr: "Le Jour de la Pentecôte — Le Sermon de Pierre" }, image: I, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i59-a', isTruth: true,  text: { en: "Peter quoted the prophet Joel to explain the outpouring of the Holy Spirit at Pentecost.", fr: "Pierre cita le prophète Joël pour expliquer l'effusion du Saint-Esprit à la Pentecôte." } },
      { id: 'i59-b', isTruth: true,  text: { en: "Peter declared that God had raised Jesus from the dead, as testified by the disciples.", fr: "Pierre déclara que Dieu avait ressuscité Jésus d'entre les morts, comme en témoignaient les disciples." } },
      { id: 'i59-c', isTruth: true,  text: { en: "About three thousand people were added to the church the day of Peter's Pentecost sermon.", fr: "Environ trois mille personnes furent ajoutées à l'Église le jour du sermon de Pierre à la Pentecôte." } },
      { id: 'i59-d', isTruth: false, text: { en: "Peter preached the Pentecost sermon entirely in Aramaic, his native tongue.", fr: "Pierre prêcha le sermon de la Pentecôte entièrement en araméen, sa langue maternelle." } },
    ],
    explanation: { en: "The Bible does not specify which language Peter used. Given that the crowd heard the disciples in their own native languages through the miracle of tongues, Peter's direct sermon language is not specified — it may have been Aramaic or Hebrew, or miraculously understood by all (Acts 2:14).", fr: "La Bible ne précise pas dans quelle langue Pierre prêcha. Étant donné que la foule entendait les disciples dans leurs propres langues grâce au miracle des langues, la langue du sermon direct de Pierre n'est pas précisée (Actes 2:14)." }
  },
  {
    id: 'i60', levelNumber: 60, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Fruit of the Spirit (Galatians 5)", fr: "Le Fruit de l'Esprit (Galates 5)" }, image: I, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i60-a', isTruth: true,  text: { en: "The fruit of the Spirit includes love, joy, peace, forbearance, kindness, goodness, faithfulness.", fr: "Le fruit de l'Esprit comprend l'amour, la joie, la paix, la patience, la bienveillance, la bonté, la fidélité." } },
      { id: 'i60-b', isTruth: true,  text: { en: "Gentleness and self-control are also listed as part of the fruit of the Spirit.", fr: "La douceur et la tempérance sont également listées comme faisant partie du fruit de l'Esprit." } },
      { id: 'i60-c', isTruth: true,  text: { en: "Paul says 'against such things there is no law' after listing the fruit of the Spirit.", fr: "Paul dit : 'Contre de telles choses il n'y a pas de loi' après avoir énuméré le fruit de l'Esprit." } },
      { id: 'i60-d', isTruth: false, text: { en: "The Bible refers to the fruit of the Spirit as 'nine fruits' in the plural form.", fr: "La Bible désigne le fruit de l'Esprit comme 'neuf fruits' au pluriel." } },
    ],
    explanation: { en: "Paul uses the singular 'fruit' (karpos), not 'fruits.' The nine qualities are one unified fruit of the Spirit — like a single fruit with many characteristics — not nine separate fruits (Galatians 5:22-23).", fr: "Paul utilise le singulier 'fruit' (karpos), pas 'fruits'. Les neuf qualités sont un seul fruit uni de l'Esprit — comme un seul fruit avec de nombreuses caractéristiques — pas neuf fruits séparés (Galates 5:22-23)." }
  },
  {
    id: 'i61', levelNumber: 61, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Armor of God (Ephesians 6)", fr: "L'Armure de Dieu (Éphésiens 6)" }, image: I, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i61-a', isTruth: true,  text: { en: "Paul lists the belt of truth, breastplate of righteousness, and feet fitted with the readiness of the gospel of peace.", fr: "Paul cite la ceinture de la vérité, la cuirasse de la justice et les pieds chaussés de la préparation de l'Évangile de paix." } },
      { id: 'i61-b', isTruth: true,  text: { en: "The shield of faith is described as able to extinguish all the flaming arrows of the evil one.", fr: "Le bouclier de la foi est décrit comme pouvant éteindre tous les traits enflammés du Malin." } },
      { id: 'i61-c', isTruth: true,  text: { en: "The sword of the Spirit is identified as the word of God.", fr: "L'épée de l'Esprit est identifiée comme la parole de Dieu." } },
      { id: 'i61-d', isTruth: false, text: { en: "Paul lists seven pieces of spiritual armor in Ephesians 6.", fr: "Paul énumère sept pièces d'armure spirituelle dans Éphésiens 6." } },
    ],
    explanation: { en: "Paul lists six pieces of armor: belt, breastplate, shoes, shield, helmet, and sword. Some count prayer as a seventh element, but prayer is added as an accompanying action, not listed as a piece of armor (Ephesians 6:14-17).", fr: "Paul énumère six pièces d'armure : ceinture, cuirasse, chaussures, bouclier, casque et épée. Certains comptent la prière comme un septième élément, mais la prière est ajoutée comme une action d'accompagnement, pas comme une pièce d'armure (Éphésiens 6:14-17)." }
  },
  {
    id: 'i62', levelNumber: 62, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Pentecost Preparations — Jesus' Promise", fr: "Préparatifs de la Pentecôte — La Promesse de Jésus" }, image: I, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i62-a', isTruth: true,  text: { en: "Jesus told His disciples to wait in Jerusalem until they received the promised Holy Spirit.", fr: "Jésus dit à ses disciples d'attendre à Jérusalem jusqu'à ce qu'ils reçoivent le Saint-Esprit promis." } },
      { id: 'i62-b', isTruth: true,  text: { en: "Jesus told His disciples they would be His witnesses to the ends of the earth after receiving the Spirit.", fr: "Jésus dit à ses disciples qu'ils seraient ses témoins jusqu'aux extrémités de la terre après avoir reçu l'Esprit." } },
      { id: 'i62-c', isTruth: true,  text: { en: "Jesus ascended into heaven from the Mount of Olives forty days after His resurrection.", fr: "Jésus monta au ciel depuis le mont des Oliviers quarante jours après sa résurrection." } },
      { id: 'i62-d', isTruth: false, text: { en: "About 500 people were gathered in the upper room praying when Jesus ascended.", fr: "Environ 500 personnes étaient rassemblées dans la chambre haute en prière quand Jésus monta au ciel." } },
    ],
    explanation: { en: "About 120 believers were together praying in the upper room after the ascension (Acts 1:15). The 500+ who saw the risen Jesus is mentioned separately in 1 Corinthians 15:6 — a different occasion from the Ascension gathering.", fr: "Environ 120 croyants étaient réunis en prière dans la chambre haute après l'ascension (Actes 1:15). Les 500+ qui virent le Jésus ressuscité sont mentionnés séparément dans 1 Corinthiens 15:6 — une occasion différente du rassemblement de l'Ascension." }
  },
  {
    id: 'i63', levelNumber: 63, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Parable of the Wheat and Weeds", fr: "La Parabole du Blé et de l'Ivraie" }, image: I, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i63-a', isTruth: true,  text: { en: "An enemy sowed weeds (tares) among the wheat while everyone was sleeping.", fr: "Un ennemi sema de l'ivraie parmi le blé pendant que tout le monde dormait." } },
      { id: 'i63-b', isTruth: true,  text: { en: "The servants asked the master if they should pull up the weeds, but he said no — they might uproot the wheat.", fr: "Les serviteurs demandèrent au maître s'ils devaient arracher l'ivraie, mais il dit non — de peur d'arracher aussi le blé." } },
      { id: 'i63-c', isTruth: true,  text: { en: "Jesus explained that the harvest represents the end of the age and the reapers are angels.", fr: "Jésus expliqua que la moisson représente la fin du monde et que les moissonneurs sont des anges." } },
      { id: 'i63-d', isTruth: false, text: { en: "The field in this parable represents the visible church institution.", fr: "Le champ dans cette parabole représente l'institution visible de l'Église." } },
    ],
    explanation: { en: "Jesus explicitly stated 'The field is the world' — not the church. The parable is about the co-existence of the righteous and the wicked in the world until the final judgment (Matthew 13:38).", fr: "Jésus déclara explicitement : 'Le champ, c'est le monde' — pas l'Église. La parabole porte sur la coexistence des justes et des méchants dans le monde jusqu'au jugement final (Matthieu 13:38)." }
  },
  {
    id: 'i64', levelNumber: 64, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "David Brings the Ark to Jerusalem", fr: "David Ramène l'Arche à Jérusalem" }, image: I, badgeColor: 'bg-blue-700', testament: 'Old',
    statements: [
      { id: 'i64-a', isTruth: true,  text: { en: "David danced before the LORD with all his might when bringing the Ark of the Covenant to Jerusalem.", fr: "David dansait de toutes ses forces devant l'Éternel en ramenant l'arche de l'alliance à Jérusalem." } },
      { id: 'i64-b', isTruth: true,  text: { en: "David's wife Michal despised him in her heart for dancing and leaping before the LORD.", fr: "Michal, la femme de David, le méprisa dans son cœur pour avoir dansé et sauté devant l'Éternel." } },
      { id: 'i64-c', isTruth: true,  text: { en: "A man named Uzzah died after touching the Ark to steady it during the first attempt to bring it to Jerusalem.", fr: "Un homme nommé Uzza mourut après avoir touché l'arche pour la stabiliser lors de la première tentative de la ramener à Jérusalem." } },
      { id: 'i64-d', isTruth: false, text: { en: "Michal was blessed with children despite rebuking David for dancing before the LORD.", fr: "Michal fut bénie d'enfants malgré ses reproches à David pour avoir dansé devant l'Éternel." } },
    ],
    explanation: { en: "The Bible says Michal had no children to the day of her death as a consequence of her contempt. The text explicitly connects her childlessness to her mockery of David's worship (2 Samuel 6:23).", fr: "La Bible dit que Michal n'eut pas d'enfants jusqu'au jour de sa mort en raison de son mépris. Le texte relie explicitement son absence d'enfants à sa moquerie envers l'adoration de David (2 Samuel 6:23)." }
  },
  {
    id: 'i65', levelNumber: 65, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Love Chapter — 1 Corinthians 13", fr: "Le Chapitre sur l'Amour — 1 Corinthiens 13" }, image: I, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i65-a', isTruth: true,  text: { en: "Paul says if he speaks in tongues of men and angels but has no love, he is only a resounding gong or clanging cymbal.", fr: "Paul dit que s'il parle les langues des hommes et des anges mais n'a pas l'amour, il est un airain qui sonne ou une cymbale qui retentit." } },
      { id: 'i65-b', isTruth: true,  text: { en: "Paul declares that love never fails, while prophecies will cease, tongues will be stilled, and knowledge will pass away.", fr: "Paul déclare que l'amour ne périra jamais, tandis que les prophéties prendront fin, les langues se tairont et la connaissance disparaîtra." } },
      { id: 'i65-c', isTruth: true,  text: { en: "Paul says now we see 'through a glass, darkly' but then we shall see face to face.", fr: "Paul dit que maintenant nous voyons 'au travers d'un miroir, de manière obscure', mais qu'alors nous verrons face à face." } },
      { id: 'i65-d', isTruth: false, text: { en: "Paul concludes that the greatest of faith, hope, and love is hope, because it endures forever.", fr: "Paul conclut que la plus grande des trois — foi, espérance et amour — est l'espérance, car elle dure éternellement." } },
    ],
    explanation: { en: "Paul concludes 'the greatest of these is love' — not hope. All three — faith, hope, and love — remain, but love is the greatest because it is eternal and the foundation of all (1 Corinthians 13:13).", fr: "Paul conclut que 'la plus grande c'est l'amour' — pas l'espérance. Les trois — foi, espérance et amour — demeurent, mais l'amour est le plus grand car il est éternel et fondement de tout (1 Corinthiens 13:13)." }
  },
  {
    id: 'i66', levelNumber: 66, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Sheep and the Goats (Matthew 25)", fr: "Les Brebis et les Boucs (Matthieu 25)" }, image: I, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i66-a', isTruth: true,  text: { en: "In this parable, the Son of Man separates people as a shepherd separates sheep from goats.", fr: "Dans cette parabole, le Fils de l'homme sépare les hommes comme un berger sépare les brebis des boucs." } },
      { id: 'i66-b', isTruth: true,  text: { en: "The righteous (sheep) are rewarded for feeding the hungry, giving drink to the thirsty, and welcoming strangers.", fr: "Les justes (brebis) sont récompensés pour avoir nourri les affamés, désaltéré les assoiffés et accueilli les étrangers." } },
      { id: 'i66-c', isTruth: true,  text: { en: "Jesus says whatever was done for 'the least of these brothers and sisters of mine' was done for Him.", fr: "Jésus dit que tout ce qui a été fait 'au plus petit de ces frères et sœurs' a été fait pour lui." } },
      { id: 'i66-d', isTruth: false, text: { en: "The goats are sent to a place of temporary purification to learn from their mistakes.", fr: "Les boucs sont envoyés dans un lieu de purification temporaire pour apprendre de leurs erreurs." } },
    ],
    explanation: { en: "The goats are sent to 'eternal fire prepared for the devil and his angels' and 'eternal punishment' — not temporary purification. Jesus presents this as a final, permanent separation (Matthew 25:41, 46).", fr: "Les boucs sont envoyés dans 'le feu éternel préparé pour le diable et ses anges' et dans 'le châtiment éternel' — pas dans une purification temporaire. Jésus présente cela comme une séparation finale et permanente (Matthieu 25:41, 46)." }
  },
  {
    id: 'i67', levelNumber: 67, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "Paul's Letter to Philemon", fr: "La Lettre de Paul à Philémon" }, image: I, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i67-a', isTruth: true,  text: { en: "Philemon was a wealthy Christian in whose house a church met.", fr: "Philémon était un chrétien aisé chez qui se réunissait une Église." } },
      { id: 'i67-b', isTruth: true,  text: { en: "Paul wrote to Philemon on behalf of Onesimus, a runaway slave who had become a Christian.", fr: "Paul écrivit à Philémon au nom d'Onésime, un esclave fugitif qui était devenu chrétien." } },
      { id: 'i67-c', isTruth: true,  text: { en: "Paul offered to pay any debt Onesimus owed Philemon and asked Philemon to receive Onesimus as a brother.", fr: "Paul offrit de payer toute dette qu'Onésime aurait envers Philémon et demanda à Philémon de recevoir Onésime comme un frère." } },
      { id: 'i67-d', isTruth: false, text: { en: "Paul commanded Philemon directly to free Onesimus and threatened him with God's judgment if he refused.", fr: "Paul ordonna directement à Philémon de libérer Onésime et le menaça du jugement de Dieu s'il refusait." } },
    ],
    explanation: { en: "Paul made an appeal — not a command — and said he did not want to do anything without Philemon's consent. He asked him to receive Onesimus voluntarily, trusting his good character (Philemon 1:8-9, 14).", fr: "Paul fit une supplication — pas un commandement — et dit qu'il ne voulait rien faire sans le consentement de Philémon. Il lui demanda de recevoir Onésime volontairement, faisant confiance à sa bonté (Philémon 1:8-9, 14)." }
  },
  {
    id: 'i68', levelNumber: 68, difficulty: 'Intermediate', difficultyFr: 'Intermédiaire',
    topic: { en: "The Rich Man and Lazarus", fr: "Le Riche et Lazare" }, image: I, badgeColor: 'bg-blue-700', testament: 'New',
    statements: [
      { id: 'i68-a', isTruth: true,  text: { en: "In this parable, the poor man Lazarus lay at the rich man's gate, longing to eat what fell from his table.", fr: "Dans cette parabole, le pauvre Lazare était couché à la porte du riche, désirant se nourrir des miettes qui tombaient de sa table." } },
      { id: 'i68-b', isTruth: true,  text: { en: "When both men died, Lazarus went to Abraham's bosom and the rich man went to Hades.", fr: "Quand les deux hommes moururent, Lazare fut emporté dans le sein d'Abraham et le riche alla dans l'Hadès." } },
      { id: 'i68-c', isTruth: true,  text: { en: "The rich man asked Abraham to send Lazarus to warn his five brothers about the place of torment.", fr: "Le riche demanda à Abraham d'envoyer Lazare avertir ses cinq frères du lieu de tourment." } },
      { id: 'i68-d', isTruth: false, text: { en: "Abraham told the rich man that it was impossible for anyone to cross from one side to the other.", fr: "Abraham dit au riche qu'il était impossible à quiconque de passer d'un côté à l'autre." } },
    ],
    explanation: { en: "Abraham said 'a great chasm has been set in place, so that those who want to go from here to you cannot, nor can anyone cross over from there to us.' He described the chasm making crossing impossible — not that it was merely impossible 'for anyone' in an absolute sense, but that the fixed gulf prevents all crossing (Luke 16:26).", fr: "Abraham dit : 'Un grand abîme a été établi entre nous et vous, de sorte que ceux qui voudraient passer d'ici vers vous ne le peuvent pas, et que de là on ne peut pas non plus passer vers nous.' Il décrivit l'abîme comme rendant le passage impossible (Luc 16:26)." }
  },

  // ─── ADVANCED ──────────────────────────────────────────────────────────────────
  {
    id: 'a1', levelNumber: 1, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Epistles of Paul", fr: "Les Épîtres de Paul" }, image: A, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a1-a', isTruth: true,  text: { en: "Paul wrote the letter to Philemon specifically about a runaway enslaved man named Onesimus.", fr: "Paul écrivit la lettre à Philémon spécifiquement au sujet d'un esclave fugitif nommé Onésime." } },
      { id: 'a1-b', isTruth: false, text: { en: "The Epistle to the Romans was written by Paul while he was imprisoned in Rome.", fr: "L'Épître aux Romains fut rédigée par Paul pendant qu'il était emprisonné à Rome." } },
      { id: 'a1-c', isTruth: true,  text: { en: "Paul explicitly mentions being lowered down a city wall in a basket to escape arrest.", fr: "Paul mentionne explicitement avoir été descendu d'un rempart dans une corbeille pour échapper à une arrestation." } },
      { id: 'a1-d', isTruth: true,  text: { en: "In his letter to the Galatians, Paul describes publicly confronting Peter regarding hypocrisy.", fr: "Dans sa lettre aux Galates, Paul décrit avoir affronté publiquement Pierre au sujet de son hypocrisie." } },
    ],
    explanation: { en: "Paul wrote Romans from Corinth while free, planning his journey to Rome — long before his eventual imprisonment there (Romans 15:25-26).", fr: "Paul écrivit l'épître aux Romains depuis Corinthe alors qu'il était libre, planifiant son voyage à Rome — bien avant son emprisonnement là-bas (Romains 15:25-26)." }
  },
  {
    id: 'a2', levelNumber: 2, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Romans — Justification by Faith", fr: "Romains — La Justification par la Foi" }, image: A, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a2-a', isTruth: true,  text: { en: "Paul declares in Romans that all have sinned and fall short of the glory of God.", fr: "Paul déclare dans Romains que tous ont péché et sont privés de la gloire de Dieu." } },
      { id: 'a2-b', isTruth: true,  text: { en: "Paul argues that Abraham was justified by faith before he was circumcised.", fr: "Paul argue qu'Abraham fut justifié par la foi avant d'être circoncis." } },
      { id: 'a2-c', isTruth: true,  text: { en: "Romans 8 declares there is now no condemnation for those who are in Christ Jesus.", fr: "Romains 8 déclare qu'il n'y a plus aucune condamnation pour ceux qui sont en Jésus-Christ." } },
      { id: 'a2-d', isTruth: false, text: { en: "Paul teaches in Romans that justification comes from faith combined with the works of the law.", fr: "Paul enseigne dans Romains que la justification vient de la foi combinée aux œuvres de la loi." } },
    ],
    explanation: { en: "Paul teaches in Romans that justification is by faith alone, apart from the works of the law. He argues this strongly in Romans 3-4, citing Abraham as proof that faith — not law-keeping — is the basis for justification (Romans 3:28).", fr: "Paul enseigne dans Romains que la justification est par la foi seule, indépendamment des œuvres de la loi. Il l'argumente fortement dans Romains 3-4, citant Abraham pour prouver que la foi — et non l'observance de la loi — est le fondement de la justification (Romains 3:28)." }
  },
  {
    id: 'a3', levelNumber: 3, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Romans 8 — The Holy Spirit and Adoption", fr: "Romains 8 — Le Saint-Esprit et l'Adoption" }, image: A, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a3-a', isTruth: true,  text: { en: "Paul says those who are led by the Spirit of God are sons and daughters of God.", fr: "Paul dit que ceux qui sont conduits par l'Esprit de Dieu sont fils et filles de Dieu." } },
      { id: 'a3-b', isTruth: true,  text: { en: "Paul uses the Aramaic word 'Abba' (Father) in Romans 8 to describe the intimacy of the believer's relationship with God.", fr: "Paul utilise le mot araméen 'Abba' (Père) dans Romains 8 pour décrire l'intimité de la relation du croyant avec Dieu." } },
      { id: 'a3-c', isTruth: true,  text: { en: "Paul says the Spirit intercedes for believers with groans that words cannot express.", fr: "Paul dit que l'Esprit intercède pour les croyants avec des gémissements inexprimables." } },
      { id: 'a3-d', isTruth: false, text: { en: "Romans 8 teaches that nothing can separate believers from God's love, except persistent unrepentant sin.", fr: "Romains 8 enseigne que rien ne peut séparer les croyants de l'amour de Dieu, sauf le péché persistant et impénitent." } },
    ],
    explanation: { en: "Paul's list in Romans 8:38-39 is absolute and unconditional: neither death nor life, neither angels nor demons, neither present nor future, nor any powers, nor height nor depth, nor anything else in all creation can separate believers from God's love. No exceptions are given (Romans 8:38-39).", fr: "La liste de Paul dans Romains 8:38-39 est absolue et inconditionnelle : ni la mort ni la vie, ni les anges ni les démons, ni le présent ni l'avenir, ni aucune puissance, ni la hauteur ni la profondeur, ni rien d'autre dans la création ne peut séparer les croyants de l'amour de Dieu (Romains 8:38-39)." }
  },
  {
    id: 'a4', levelNumber: 4, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "1 Corinthians — The Resurrection Chapter", fr: "1 Corinthiens — Le Chapitre sur la Résurrection" }, image: A, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a4-a', isTruth: true,  text: { en: "Paul says if Christ has not been raised, our faith is futile and we are still in our sins.", fr: "Paul dit que si Christ n'est pas ressuscité, notre foi est vaine et nous sommes encore dans nos péchés." } },
      { id: 'a4-b', isTruth: true,  text: { en: "Paul states that Christ appeared to more than 500 brothers and sisters at one time after His resurrection.", fr: "Paul affirme que Christ est apparu à plus de 500 frères et sœurs en même temps après sa résurrection." } },
      { id: 'a4-c', isTruth: true,  text: { en: "Paul describes the resurrection body as imperishable, in glory, in power, and spiritual.", fr: "Paul décrit le corps de résurrection comme impérissable, glorieux, puissant et spirituel." } },
      { id: 'a4-d', isTruth: false, text: { en: "Paul says in 1 Corinthians 15 that believers will be resurrected with the exact same physical body they had on earth.", fr: "Paul dit dans 1 Corinthiens 15 que les croyants ressusciteront avec exactement le même corps physique qu'ils avaient sur terre." } },
    ],
    explanation: { en: "Paul contrasts the earthly body (perishable, dishonor, weakness, natural) with the resurrection body (imperishable, glory, power, spiritual). He uses the seed analogy — what goes in is not what comes out. The resurrection body is transformed and different (1 Corinthians 15:42-44).", fr: "Paul contraste le corps terrestre (périssable, honte, faiblesse, naturel) avec le corps de résurrection (impérissable, gloire, puissance, spirituel). Il utilise l'analogie de la graine — ce qui entre n'est pas ce qui ressort. Le corps de résurrection est transformé et différent (1 Corinthiens 15:42-44)." }
  },
  {
    id: 'a5', levelNumber: 5, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Galatians — The Judaizer Controversy", fr: "Galates — La Controverse des Judaïsants" }, image: A, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a5-a', isTruth: true,  text: { en: "Paul rebuked Peter in Antioch to his face because Peter was withdrawing from Gentile believers when circumcised men came from Jerusalem.", fr: "Paul réprimanda Pierre en face à Antioche parce que Pierre se retirait des croyants non-juifs quand des hommes circoncis vinrent de Jérusalem." } },
      { id: 'a5-b', isTruth: true,  text: { en: "Paul says he received the gospel not from men but through a direct revelation of Jesus Christ.", fr: "Paul dit qu'il reçut l'Évangile non de la part des hommes, mais par une révélation directe de Jésus-Christ." } },
      { id: 'a5-c', isTruth: true,  text: { en: "Paul says in Galatians that the law was our guardian until Christ came, so that we might be justified by faith.", fr: "Paul dit dans Galates que la loi était notre gardien jusqu'à ce que Christ vienne, afin que nous soyons justifiés par la foi." } },
      { id: 'a5-d', isTruth: false, text: { en: "Paul taught that circumcision is still required for Gentile believers but not for salvation purposes.", fr: "Paul enseigna que la circoncision est toujours requise pour les croyants d'origine non juive, mais pas dans un but de salut." } },
    ],
    explanation: { en: "Paul taught the opposite — that circumcision means nothing in Christ. He warned in Galatians 5:2 that if Gentiles get circumcised, Christ will be of no value to them. He strongly opposed requiring circumcision of Gentile believers (Galatians 5:2-6).", fr: "Paul enseigna le contraire — que la circoncision n'a aucune valeur en Christ. Il avertit dans Galates 5:2 que si les non-Juifs se font circoncire, Christ ne leur servira à rien. Il s'opposa fermement à l'imposition de la circoncision aux croyants non-Juifs (Galates 5:2-6)." }
  },
  {
    id: 'a6', levelNumber: 6, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Philippians — Joy in Prison and the Kenosis", fr: "Philippiens — La Joie en Prison et la Kénose" }, image: A, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a6-a', isTruth: true,  text: { en: "Paul wrote Philippians while in prison, yet the letter overflows with joy and rejoicing.", fr: "Paul écrivit aux Philippiens depuis la prison, pourtant la lettre déborde de joie et d'allégresse." } },
      { id: 'a6-b', isTruth: true,  text: { en: "Philippians 2 says Jesus, being in the form of God, did not consider equality with God something to be grasped.", fr: "Philippiens 2 dit que Jésus, étant de condition divine, n'a pas regardé son égalité avec Dieu comme une proie à saisir." } },
      { id: 'a6-c', isTruth: true,  text: { en: "Paul declares he has learned to be content in all circumstances — whether in plenty or in want.", fr: "Paul déclare avoir appris à se contenter dans toutes les situations — dans l'abondance comme dans le besoin." } },
      { id: 'a6-d', isTruth: false, text: { en: "Paul's famous 'I can do all things through Christ who strengthens me' means believers can perform any miracle.", fr: "Le célèbre 'Je puis tout par celui qui me fortifie' de Paul signifie que les croyants peuvent accomplir n'importe quel miracle." } },
    ],
    explanation: { en: "The context of Philippians 4:13 is Paul speaking about contentment in any circumstance — whether hungry or full, in abundance or in need. It refers to enduring and being content, not performing supernatural miracles at will (Philippians 4:11-13).", fr: "Le contexte de Philippiens 4:13 est Paul parlant de se contenter dans toutes les situations — qu'il soit dans le besoin ou dans l'abondance. Cela fait référence à l'endurance et à la contentement, pas à l'accomplissement de miracles surnaturels à volonté (Philippiens 4:11-13)." }
  },
  {
    id: 'a7', levelNumber: 7, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Hebrews — The High Priesthood of Christ", fr: "Hébreux — Le Grand Sacerdoce du Christ" }, image: A, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a7-a', isTruth: true,  text: { en: "The book of Hebrews argues that Jesus is the High Priest who entered the most holy place once for all by his own blood.", fr: "L'épître aux Hébreux argue que Jésus est le Grand Sacrificateur qui est entré une fois pour toutes dans le lieu très saint par son propre sang." } },
      { id: 'a7-b', isTruth: true,  text: { en: "Hebrews describes Jesus as a High Priest after the order of Melchizedek, not the order of Aaron.", fr: "Hébreux décrit Jésus comme un Grand Sacrificateur selon l'ordre de Melchisédek, non selon celui d'Aaron." } },
      { id: 'a7-c', isTruth: true,  text: { en: "Hebrews says Jesus is the mediator of a new covenant, better than the old because it is based on better promises.", fr: "Hébreux dit que Jésus est le médiateur d'une nouvelle alliance, meilleure que l'ancienne car fondée sur de meilleures promesses." } },
      { id: 'a7-d', isTruth: false, text: { en: "The author of Hebrews is definitively identified as Paul in the first verse of the letter.", fr: "L'auteur de l'épître aux Hébreux est définitivement identifié comme Paul dans le premier verset de la lettre." } },
    ],
    explanation: { en: "The authorship of Hebrews is unknown and debated. The letter begins without any author identification. Candidates include Paul, Barnabas, Apollos, or Priscilla. Early church father Origen famously said 'God only knows' who wrote it.", fr: "La paternité de l'épître aux Hébreux est inconnue et débattue. La lettre commence sans identification d'auteur. Les candidats incluent Paul, Barnabas, Apollos ou Priscille. Le père de l'Église Origène a dit avec humour que 'Dieu seul sait' qui l'a écrite." }
  },
  {
    id: 'a8', levelNumber: 8, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Hall of Faith — Hebrews 11", fr: "Le Palmarès de la Foi — Hébreux 11" }, image: A, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a8-a', isTruth: true,  text: { en: "Hebrews 11 defines faith as 'confidence in what we hope for and assurance about what we do not see.'", fr: "Hébreux 11 définit la foi comme 'la certitude des choses qu'on espère et la démonstration de celles qu'on ne voit pas.'" } },
      { id: 'a8-b', isTruth: true,  text: { en: "Abel, Enoch, Noah, Abraham, Sarah, Isaac, Jacob, Moses, and Rahab are all mentioned in Hebrews 11.", fr: "Abel, Énoch, Noé, Abraham, Sara, Isaac, Jacob, Moïse et Rahab sont tous mentionnés dans Hébreux 11." } },
      { id: 'a8-c', isTruth: true,  text: { en: "The chapter says these heroes of faith did not receive what was promised during their lifetimes.", fr: "Le chapitre dit que ces héros de la foi ne reçurent pas ce qui avait été promis de leur vivant." } },
      { id: 'a8-d', isTruth: false, text: { en: "Hebrews 11 mentions Samson as a failure of faith excluded from the 'cloud of witnesses.'", fr: "Hébreux 11 mentionne Samson comme un échec de la foi exclu de la 'nuée de témoins.'" } },
    ],
    explanation: { en: "Samson is actually included in the Hebrews 11 hall of faith — listed alongside Gideon, Barak, Jephthah, David, Samuel, and the prophets. Despite his failures, his faith act of pulling down the temple is recognized (Hebrews 11:32).", fr: "Samson est en fait inclus dans le palmarès de la foi d'Hébreux 11 — mentionné aux côtés de Gédéon, Barak, Jephthah, David, Samuel et les prophètes. Malgré ses échecs, son acte de foi en renversant le temple est reconnu (Hébreux 11:32)." }
  },
  {
    id: 'a9', levelNumber: 9, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Seven Churches of Revelation", fr: "Les Sept Églises de l'Apocalypse" }, image: A, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a9-a', isTruth: true,  text: { en: "The seven churches addressed in Revelation are Ephesus, Smyrna, Pergamum, Thyatira, Sardis, Philadelphia, and Laodicea.", fr: "Les sept Églises de l'Apocalypse sont Éphèse, Smyrne, Pergame, Thyatire, Sardes, Philadelphie et Laodicée." } },
      { id: 'a9-b', isTruth: true,  text: { en: "The church of Laodicea is rebuked for being 'lukewarm — neither hot nor cold.'", fr: "L'Église de Laodicée est réprimandée pour être 'tiède — ni froide ni chaude.'" } },
      { id: 'a9-c', isTruth: true,  text: { en: "The church of Smyrna receives no rebuke — only encouragement despite poverty and persecution.", fr: "L'Église de Smyrne ne reçoit aucune réprimande — seulement des encouragements malgré la pauvreté et la persécution." } },
      { id: 'a9-d', isTruth: false, text: { en: "The church of Ephesus is praised for leaving its first love and growing in maturity.", fr: "L'Église d'Éphèse est félicitée pour avoir quitté son premier amour et grandi en maturité." } },
    ],
    explanation: { en: "The church of Ephesus is rebuked — not praised — for leaving its first love. Jesus commanded it to repent and do the things it did at first, otherwise He would remove its lampstand (Revelation 2:4-5).", fr: "L'Église d'Éphèse est réprimandée — et non félicitée — pour avoir abandonné son premier amour. Jésus lui ordonna de se repentir et de faire les premières œuvres, sinon Il retirerait son chandelier (Apocalypse 2:4-5)." }
  },
  {
    id: 'a10', levelNumber: 10, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Revelation — The New Jerusalem", fr: "L'Apocalypse — La Nouvelle Jérusalem" }, image: A, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a10-a', isTruth: true,  text: { en: "John describes the New Jerusalem coming down out of heaven from God, prepared as a bride for her husband.", fr: "Jean décrit la Nouvelle Jérusalem descendant du ciel d'auprès de Dieu, préparée comme une épouse pour son mari." } },
      { id: 'a10-b', isTruth: true,  text: { en: "The New Jerusalem has twelve gates, each made of a single pearl, and twelve foundations named after the apostles.", fr: "La Nouvelle Jérusalem a douze portes, chacune faite d'une seule perle, et douze fondements portant les noms des apôtres." } },
      { id: 'a10-c', isTruth: true,  text: { en: "John sees no temple in the New Jerusalem because God and the Lamb are its temple.", fr: "Jean ne voit aucun temple dans la Nouvelle Jérusalem parce que Dieu et l'Agneau en sont le temple." } },
      { id: 'a10-d', isTruth: false, text: { en: "The New Jerusalem is described as a perfect cube measuring 100 miles in each direction.", fr: "La Nouvelle Jérusalem est décrite comme un cube parfait mesurant 160 km dans chaque direction." } },
    ],
    explanation: { en: "The New Jerusalem measures 12,000 stadia — approximately 1,380 miles (2,200 km) — in length, width, and height. It is described as a cube or square, not 100 miles but far larger (Revelation 21:16).", fr: "La Nouvelle Jérusalem mesure 12 000 stades — environ 2 200 km — en longueur, largeur et hauteur. Elle est décrite comme un cube ou un carré, non pas de 160 km mais bien plus grande (Apocalypse 21:16)." }
  },
  {
    id: 'a11', levelNumber: 11, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Isaiah 53 — The Suffering Servant", fr: "Ésaïe 53 — Le Serviteur Souffrant" }, image: A, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a11-a', isTruth: true,  text: { en: "Isaiah 53 says the Suffering Servant was 'despised and rejected by mankind, a man of suffering, and familiar with pain.'", fr: "Ésaïe 53 dit que le Serviteur souffrant était 'méprisé et abandonné des hommes, homme de douleurs et habitué à la souffrance.'" } },
      { id: 'a11-b', isTruth: true,  text: { en: "Isaiah 53 states the Servant bore our pain and was 'pierced for our transgressions' and 'crushed for our iniquities.'", fr: "Ésaïe 53 déclare que le Serviteur porta nos douleurs et fut 'transpercé à cause de nos péchés' et 'écrasé à cause de nos iniquités.'" } },
      { id: 'a11-c', isTruth: true,  text: { en: "Isaiah 53 says 'he was led like a lamb to the slaughter, and as a sheep before its shearers is silent, so he did not open his mouth.'", fr: "Ésaïe 53 dit : 'Il a été mené comme un agneau à l'abattoir, comme un agneau muet devant celui qui le tond, il n'a pas ouvert la bouche.'" } },
      { id: 'a11-d', isTruth: false, text: { en: "Isaiah 53 predicts the Servant will be buried in the tomb of the poor and wicked.", fr: "Ésaïe 53 prédit que le Serviteur sera enterré dans le tombeau des pauvres et des méchants." } },
    ],
    explanation: { en: "Isaiah 53:9 says 'He was assigned a grave with the wicked, and with the rich in his death.' Jesus was crucified among criminals (the wicked) but buried in the tomb of Joseph of Arimathea — a rich man (Matthew 27:57-60).", fr: "Ésaïe 53:9 dit : 'On lui a assigné un sépulcre avec les méchants, son tombeau est avec le riche.' Jésus fut crucifié parmi les criminels mais enterré dans le tombeau de Joseph d'Arimathée — un homme riche (Matthieu 27:57-60)." }
  },
  {
    id: 'a12', levelNumber: 12, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Daniel's Seventy Weeks (Daniel 9)", fr: "Les Soixante-Dix Semaines de Daniel (Daniel 9)" }, image: A, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a12-a', isTruth: true,  text: { en: "Daniel's 70 Weeks prophecy was given while Daniel was praying and confessing sin on behalf of Israel.", fr: "La prophétie des 70 semaines de Daniel fut donnée pendant que Daniel priait et confessait le péché au nom d'Israël." } },
      { id: 'a12-b', isTruth: true,  text: { en: "The angel Gabriel brought the message of the 70 Weeks to Daniel.", fr: "L'ange Gabriel apporta à Daniel le message des 70 semaines." } },
      { id: 'a12-c', isTruth: true,  text: { en: "The 70th 'week' speaks of a covenant being confirmed for one 'seven' and an abomination of desolation in the middle of the week.", fr: "La 70e 'semaine' parle d'une alliance confirmée pour un 'sept' et d'une abomination de la désolation au milieu de la semaine." } },
      { id: 'a12-d', isTruth: false, text: { en: "Daniel 9 says the seventy weeks began at the decree to rebuild the temple of Solomon.", fr: "Daniel 9 dit que les soixante-dix semaines commencèrent au décret de reconstruire le temple de Salomon." } },
    ],
    explanation: { en: "Daniel 9:25 says the 70 weeks begin 'from the time the word goes out to restore and rebuild Jerusalem' — not to rebuild Solomon's temple specifically, but to rebuild the city of Jerusalem (Daniel 9:25).", fr: "Daniel 9:25 dit que les 70 semaines commencent 'dès la sortie de la parole sur la restauration et la reconstruction de Jérusalem' — pas spécifiquement pour reconstruire le temple de Salomon, mais pour reconstruire la ville de Jérusalem (Daniel 9:25)." }
  },
  {
    id: 'a13', levelNumber: 13, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Tabernacle and Its Furnishings", fr: "Le Tabernacle et son Mobilier" }, image: A, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a13-a', isTruth: true,  text: { en: "The Ark of the Covenant was placed in the Most Holy Place (Holy of Holies) behind the inner veil.", fr: "L'arche de l'alliance était placée dans le lieu très saint (Saint des Saints) derrière le voile intérieur." } },
      { id: 'a13-b', isTruth: true,  text: { en: "The altar of incense stood in the Holy Place, in front of the veil that separated it from the Most Holy Place.", fr: "L'autel des parfums se trouvait dans le lieu saint, devant le voile qui le séparait du lieu très saint." } },
      { id: 'a13-c', isTruth: true,  text: { en: "The Menorah (seven-branched lampstand) stood in the Holy Place opposite the table of showbread.", fr: "La Ménorah (chandelier à sept branches) se trouvait dans le lieu saint, en face de la table des pains de proposition." } },
      { id: 'a13-d', isTruth: false, text: { en: "The High Priest entered the Most Holy Place once a month on the Day of Atonement.", fr: "Le Grand Sacrificateur entrait dans le lieu très saint une fois par mois le jour des Expiations." } },
    ],
    explanation: { en: "The High Priest entered the Most Holy Place only once per year — on Yom Kippur (the Day of Atonement) — not once per month. This was the most sacred event in the Jewish calendar (Leviticus 16:34; Hebrews 9:7).", fr: "Le Grand Sacrificateur n'entrait dans le lieu très saint qu'une fois par an — à Yom Kippour (le jour des Expiations) — pas une fois par mois. C'était l'événement le plus sacré du calendrier juif (Lévitique 16:34 ; Hébreux 9:7)." }
  },
  {
    id: 'a14', levelNumber: 14, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Davidic Covenant (2 Samuel 7)", fr: "L'Alliance Davidique (2 Samuel 7)" }, image: A, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a14-a', isTruth: true,  text: { en: "God told David through Nathan the prophet that He would establish David's throne forever.", fr: "Dieu dit à David par le prophète Nathan qu'Il établirait son trône pour toujours." } },
      { id: 'a14-b', isTruth: true,  text: { en: "God said David's son would build the temple, and God would be to him a Father and he would be God's son.", fr: "Dieu dit que le fils de David construirait le temple, et que Dieu serait son Père et lui serait le fils de Dieu." } },
      { id: 'a14-c', isTruth: true,  text: { en: "God promised that even if David's descendants sinned, He would discipline them but not take His love from them as He did with Saul.", fr: "Dieu promit que même si les descendants de David péchaient, Il les disciplinerait mais ne leur retirerait pas son amour comme Il l'avait fait avec Saül." } },
      { id: 'a14-d', isTruth: false, text: { en: "David himself proposed the idea to build a temple for God and God enthusiastically approved.", fr: "David proposa lui-même l'idée de construire un temple pour Dieu et Dieu approuva avec enthousiasme." } },
    ],
    explanation: { en: "David proposed building a temple, but God redirected through Nathan. God asked 'Are you the one to build me a house?' and said David's son (Solomon) would build it, not David himself. God's response was not simple enthusiasm but a reorientation (2 Samuel 7:4-13).", fr: "David proposa de construire un temple, mais Dieu redirigea par Nathan. Dieu demanda 'Serais-tu toi qui me bâtirais une maison ?' et dit que le fils de David (Salomon) le construirait, pas David lui-même. La réponse de Dieu n'était pas un simple enthousiasme mais une réorientation (2 Samuel 7:4-13)." }
  },
  {
    id: 'a15', levelNumber: 15, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Nazirite Vow (Numbers 6)", fr: "Le Vœu de Naziréat (Nombres 6)" }, image: A, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a15-a', isTruth: true,  text: { en: "A Nazirite vow required abstaining from wine, strong drink, vinegar, and grape products.", fr: "Le vœu de naziréat exigeait de s'abstenir du vin, de toute boisson forte, du vinaigre et de tout produit de la vigne." } },
      { id: 'a15-b', isTruth: true,  text: { en: "A Nazirite was not to cut their hair for the duration of the vow.", fr: "Un naziréen ne devait pas se couper les cheveux pendant la durée de son vœu." } },
      { id: 'a15-c', isTruth: true,  text: { en: "A Nazirite was not to go near a dead body, even if a parent or sibling died during the vow period.", fr: "Un naziréen ne devait pas s'approcher d'un corps mort, même si un parent ou un frère mourait pendant la période de son vœu." } },
      { id: 'a15-d', isTruth: false, text: { en: "The Nazirite vow could only be taken by male members of the priestly tribe of Levi.", fr: "Le vœu de naziréat ne pouvait être pris que par les membres masculins de la tribu sacerdotale de Lévi." } },
    ],
    explanation: { en: "The Nazirite vow was available to both men and women of any tribe, not just Levites. Numbers 6:2 specifically says 'a man or woman' who makes a special vow. Examples include Samson (from the tribe of Dan) (Numbers 6:2).", fr: "Le vœu de naziréat était accessible aux hommes et aux femmes de n'importe quelle tribu, pas seulement aux Lévites. Nombres 6:2 dit spécifiquement 'un homme ou une femme' qui fait un vœu spécial. Samson (de la tribu de Dan) en est un exemple (Nombres 6:2)." }
  },
  {
    id: 'a16', levelNumber: 16, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Melchizedek — Priest-King of Salem", fr: "Melchisédek — Roi-Prêtre de Salem" }, image: A, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a16-a', isTruth: true,  text: { en: "Melchizedek was king of Salem and priest of God Most High who blessed Abraham and received a tithe from him.", fr: "Melchisédek était roi de Salem et sacrificateur de Dieu Très-Haut qui bénit Abraham et reçut de lui la dîme." } },
      { id: 'a16-b', isTruth: true,  text: { en: "Hebrews says Melchizedek was 'without father or mother, without genealogy, without beginning of days or end of life.'", fr: "Hébreux dit que Melchisédek était 'sans père, sans mère, sans généalogie, sans commencement de jours ni fin de vie.'" } },
      { id: 'a16-c', isTruth: true,  text: { en: "Psalm 110:4 declares the Messiah will be 'a priest forever, in the order of Melchizedek.'", fr: "Le Psaume 110:4 déclare que le Messie sera 'sacrificateur pour toujours, selon l'ordre de Melchisédek.'" } },
      { id: 'a16-d', isTruth: false, text: { en: "The name 'Melchizedek' means 'King of the Covenant' in Hebrew.", fr: "Le nom 'Melchisédek' signifie 'Roi de l'Alliance' en hébreu." } },
    ],
    explanation: { en: "Melchizedek means 'King of Righteousness' (Hebrews 7:2 explicitly states this). 'Salem' (his city) means peace, making him also 'King of Peace.' The name does not mean 'King of the Covenant' (Hebrews 7:2).", fr: "Melchisédek signifie 'Roi de Justice' (Hébreux 7:2 le dit explicitement). 'Salem' (sa ville) signifie paix, faisant de lui aussi 'Roi de Paix'. Le nom ne signifie pas 'Roi de l'Alliance' (Hébreux 7:2)." }
  },
  {
    id: 'a17', levelNumber: 17, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "James — Faith and Works", fr: "Jacques — La Foi et les Œuvres" }, image: A, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a17-a', isTruth: true,  text: { en: "James says faith without deeds is dead — as the body without the spirit is dead.", fr: "Jacques dit que la foi sans les œuvres est morte — comme le corps sans l'esprit est mort." } },
      { id: 'a17-b', isTruth: true,  text: { en: "James says Abraham was justified by works when he offered Isaac on the altar.", fr: "Jacques dit qu'Abraham fut justifié par les œuvres quand il offrit Isaac sur l'autel." } },
      { id: 'a17-c', isTruth: true,  text: { en: "James says if you claim to have faith but no deeds, your faith cannot save you.", fr: "Jacques dit que si quelqu'un prétend avoir la foi sans en avoir les œuvres, cette foi ne peut le sauver." } },
      { id: 'a17-d', isTruth: false, text: { en: "James directly contradicts Paul by teaching that salvation comes from works plus faith, not faith alone.", fr: "Jacques contredit directement Paul en enseignant que le salut vient des œuvres plus la foi, et non de la seule foi." } },
    ],
    explanation: { en: "James and Paul are addressing different issues. Paul argues against trusting in law-works for justification before God. James argues against a dead, profession-only faith with no evidence. They complement rather than contradict each other — true saving faith produces works (James 2:24; Romans 3:28).", fr: "Jacques et Paul traitent de questions différentes. Paul argumente contre la confiance dans les œuvres de la loi pour la justification devant Dieu. Jacques argumente contre une foi morte, qui ne consiste qu'en profession sans preuve. Ils se complètent plutôt qu'ils ne se contredisent — la vraie foi salvatrice produit des œuvres (Jacques 2:24 ; Romains 3:28)." }
  },
  {
    id: 'a18', levelNumber: 18, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Seven 'I Am' Statements in John", fr: "Les Sept Déclarations 'Je Suis' dans Jean" }, image: A, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a18-a', isTruth: true,  text: { en: "Jesus declared 'I am the bread of life' — those who come to Him will never go hungry.", fr: "Jésus déclara : 'Je suis le pain de vie' — celui qui vient à lui n'aura plus jamais faim." } },
      { id: 'a18-b', isTruth: true,  text: { en: "Jesus declared 'I am the resurrection and the life' — those who believe in Him will live even if they die.", fr: "Jésus déclara : 'Je suis la résurrection et la vie' — celui qui croit en lui vivra même s'il meurt." } },
      { id: 'a18-c', isTruth: true,  text: { en: "Jesus declared 'I am the way, the truth, and the life — no one comes to the Father except through me.'", fr: "Jésus déclara : 'Je suis le chemin, la vérité et la vie — nul ne vient au Père que par moi.'" } },
      { id: 'a18-d', isTruth: false, text: { en: "Jesus declared 'I am the cornerstone' as one of His seven 'I am' statements in John's Gospel.", fr: "Jésus déclara 'Je suis la pierre angulaire' comme l'une de ses sept déclarations 'Je suis' dans l'Évangile de Jean." } },
    ],
    explanation: { en: "'I am the cornerstone' is not one of Jesus' seven I AM statements in John. The seven are: bread of life (6:35), light of the world (8:12), gate for the sheep (10:7), good shepherd (10:11), resurrection and life (11:25), way/truth/life (14:6), true vine (15:1). Cornerstone is a metaphor used of Jesus elsewhere (Ephesians 2:20) but not as an I AM statement.", fr: "'Je suis la pierre angulaire' ne fait pas partie des sept déclarations 'Je suis' de Jésus dans Jean. Les sept sont : pain de vie (6:35), lumière du monde (8:12), porte des brebis (10:7), bon berger (10:11), résurrection et vie (11:25), chemin/vérité/vie (14:6), vraie vigne (15:1)." }
  },
  {
    id: 'a19', levelNumber: 19, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Paul's 'Thorn in the Flesh'", fr: "L'Épine dans la Chair de Paul" }, image: A, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a19-a', isTruth: true,  text: { en: "Paul says he was given a 'thorn in the flesh' to keep him from being conceited after receiving surpassing revelations.", fr: "Paul dit qu'une 'épine dans la chair' lui fut donnée pour l'empêcher de s'enorgueillir après avoir reçu des révélations supérieures." } },
      { id: 'a19-b', isTruth: true,  text: { en: "Paul says he pleaded with the Lord three times to take the thorn away.", fr: "Paul dit qu'il demanda trois fois au Seigneur de lui retirer cette épine." } },
      { id: 'a19-c', isTruth: true,  text: { en: "God's response was 'My grace is sufficient for you, for my power is made perfect in weakness.'", fr: "La réponse de Dieu fut : 'Ma grâce te suffit, car ma puissance s'accomplit dans la faiblesse.'" } },
      { id: 'a19-d', isTruth: false, text: { en: "Paul clearly identified his 'thorn in the flesh' as an eye disease in 2 Corinthians.", fr: "Paul identifia clairement son 'épine dans la chair' comme une maladie des yeux dans 2 Corinthiens." } },
    ],
    explanation: { en: "Paul never specifically identifies what the thorn is in 2 Corinthians 12. Theories include eye problems (from Galatians 4:15), epilepsy, headaches, or opponents. It remains unidentified in the 2 Corinthians passage itself (2 Corinthians 12:7).", fr: "Paul ne précise jamais ce qu'est l'épine dans 2 Corinthiens 12. Les théories incluent des problèmes oculaires (d'après Galates 4:15), l'épilepsie, les maux de tête ou des adversaires. Elle reste non identifiée dans le passage lui-même (2 Corinthiens 12:7)." }
  },
  {
    id: 'a20', levelNumber: 20, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Revelation — The Mark of the Beast", fr: "Apocalypse — La Marque de la Bête" }, image: A, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a20-a', isTruth: true,  text: { en: "Revelation 13 says the mark of the beast is placed on the right hand or the forehead.", fr: "Apocalypse 13 dit que la marque de la bête est placée sur la main droite ou le front." } },
      { id: 'a20-b', isTruth: true,  text: { en: "Revelation says no one could buy or sell unless they had the mark.", fr: "L'Apocalypse dit que nul ne pouvait acheter ou vendre sans avoir la marque." } },
      { id: 'a20-c', isTruth: true,  text: { en: "Revelation calls for wisdom to calculate the number of the beast, which is 666.", fr: "L'Apocalypse appelle à la sagesse pour calculer le nombre de la bête, qui est 666." } },
      { id: 'a20-d', isTruth: false, text: { en: "Revelation 13 explicitly states the mark of the beast will be a physical tattoo visible to the human eye.", fr: "Apocalypse 13 stipule explicitement que la marque de la bête sera un tatouage physique visible à l'œil humain." } },
    ],
    explanation: { en: "Revelation 13 says the mark will be placed on the right hand or forehead but does not describe its physical form or say it will be a tattoo. The exact nature of the mark — whether literal or symbolic — is a matter of ongoing theological debate (Revelation 13:16-17).", fr: "Apocalypse 13 dit que la marque sera placée sur la main droite ou le front mais ne décrit pas sa forme physique ni ne dit que ce sera un tatouage. La nature exacte de la marque — littérale ou symbolique — est un sujet de débat théologique en cours (Apocalypse 13:16-17)." }
  },
  {
    id: 'a21', levelNumber: 21, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Covenant of Abraham (Genesis 15 & 17)", fr: "L'Alliance d'Abraham (Genèse 15 et 17)" }, image: A, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a21-a', isTruth: true,  text: { en: "In Genesis 15, God made a covenant with Abraham while he was in a deep sleep, represented by a smoking firepot and blazing torch.", fr: "Dans Genèse 15, Dieu établit une alliance avec Abraham pendant qu'il était dans un profond sommeil, représentée par un brasier fumant et une torche enflammée." } },
      { id: 'a21-b', isTruth: true,  text: { en: "God promised Abraham that his descendants would be slaves in a foreign country for 400 years before being freed.", fr: "Dieu promit à Abraham que ses descendants seraient esclaves en pays étranger pendant 400 ans avant d'être libérés." } },
      { id: 'a21-c', isTruth: true,  text: { en: "In the Genesis 15 covenant, only God passed through the pieces of the animals — symbolizing a unilateral covenant.", fr: "Dans l'alliance de Genèse 15, seul Dieu passa entre les morceaux des animaux — symbolisant une alliance unilatérale." } },
      { id: 'a21-d', isTruth: false, text: { en: "Abraham performed animal sacrifices in Genesis 15 using twelve animals representing the twelve tribes of Israel.", fr: "Abraham accomplit des sacrifices d'animaux dans Genèse 15 avec douze animaux représentant les douze tribus d'Israël." } },
    ],
    explanation: { en: "Abraham prepared five animals in Genesis 15: a heifer, a goat, a ram (each cut in two), and a dove and a young pigeon (not cut). There were five animals — not twelve — and no explicit connection to the twelve tribes (Genesis 15:9-10).", fr: "Abraham prépara cinq animaux dans Genèse 15 : une génisse, une chèvre, un bélier (chacun coupé en deux), et une tourterelle et un jeune pigeon (non coupés). Il y avait cinq animaux — pas douze — et aucun lien explicite avec les douze tribus (Genèse 15:9-10)." }
  },
  {
    id: 'a22', levelNumber: 22, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Paul's Letter to the Colossians", fr: "La Lettre de Paul aux Colossiens" }, image: A, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a22-a', isTruth: true,  text: { en: "Colossians 1 says Jesus is 'the firstborn over all creation' and 'in him all things hold together.'", fr: "Colossiens 1 dit que Jésus est 'le premier-né de toute la création' et que 'tout subsiste en lui.'" } },
      { id: 'a22-b', isTruth: true,  text: { en: "Paul warns the Colossians against being captured by hollow and deceptive philosophy, according to human tradition rather than Christ.", fr: "Paul avertit les Colossiens de ne pas se laisser captiver par une philosophie creuse et trompeuse, selon la tradition humaine plutôt que selon Christ." } },
      { id: 'a22-c', isTruth: true,  text: { en: "Paul says in Colossians that God was pleased to have all His fullness dwell in Christ.", fr: "Paul dit dans Colossiens que Dieu a voulu que toute sa plénitude habite en Christ." } },
      { id: 'a22-d', isTruth: false, text: { en: "Paul wrote Colossians specifically to address the heresy of Gnosticism by name.", fr: "Paul écrivit aux Colossiens spécifiquement pour s'opposer nommément à l'hérésie du gnosticisme." } },
    ],
    explanation: { en: "Paul never names 'Gnosticism' in Colossians. He addresses certain practices and beliefs that some scholars associate with proto-Gnostic or syncretistic tendencies, but the letter's target heresy is often called the 'Colossian heresy' — its exact identity is debated and not labeled 'Gnosticism' by Paul (Colossians 2:8).", fr: "Paul ne nomme jamais le 'gnosticisme' dans Colossiens. Il aborde certaines pratiques et croyances que des érudits associent à des tendances proto-gnostiques, mais l'hérésie ciblée, souvent appelée 'hérésie colossienne', n'est pas étiquetée 'gnosticisme' par Paul (Colossiens 2:8)." }
  },
  {
    id: 'a23', levelNumber: 23, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "1 Thessalonians — The Second Coming", fr: "1 Thessaloniciens — Le Second Avènement" }, image: A, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a23-a', isTruth: true,  text: { en: "Paul says the Lord will descend from heaven with a loud command, the archangel's call, and the trumpet of God.", fr: "Paul dit que le Seigneur descendra du ciel avec un signal, la voix d'un archange et la trompette de Dieu." } },
      { id: 'a23-b', isTruth: true,  text: { en: "Paul says those who have died in Christ will rise first, then those who are still alive will be caught up with them in the clouds.", fr: "Paul dit que ceux qui sont morts en Christ ressusciteront d'abord, puis ceux qui seront encore vivants seront emportés avec eux dans les nuées." } },
      { id: 'a23-c', isTruth: true,  text: { en: "Paul wrote 1 Thessalonians partly to reassure believers who were worried that Christians who had died would miss the Second Coming.", fr: "Paul écrivit 1 Thessaloniciens en partie pour rassurer les croyants qui craignaient que les chrétiens morts ratent le Second Avènement." } },
      { id: 'a23-d', isTruth: false, text: { en: "Paul specifies in 1 Thessalonians 4 that the Second Coming will occur exactly seven years after a specific treaty is signed.", fr: "Paul précise dans 1 Thessaloniciens 4 que le Second Avènement aura lieu exactement sept ans après la signature d'un traité spécifique." } },
    ],
    explanation: { en: "Paul says the day of the Lord will come like a thief in the night — unexpectedly. He gives no specific timeline of seven years or connection to a treaty. Such precise timelines come from interpretive traditions applied to other passages, not from 1 Thessalonians itself (1 Thessalonians 5:2).", fr: "Paul dit que le jour du Seigneur viendra comme un voleur dans la nuit — de manière inattendue. Il ne donne aucun calendrier précis de sept ans ni de lien avec un traité. De telles chronologies précises viennent de traditions interprétatives appliquées à d'autres passages, pas de 1 Thessaloniciens lui-même (1 Thessaloniciens 5:2)." }
  },
  {
    id: 'a24', levelNumber: 24, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Ezekiel's Vision of the Valley of Dry Bones", fr: "La Vision d'Ézéchiel de la Vallée des Ossements" }, image: A, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a24-a', isTruth: true,  text: { en: "The Spirit carried Ezekiel and set him in the middle of a valley full of very dry bones.", fr: "L'Esprit transporta Ézéchiel et le déposa au milieu d'une vallée pleine d'ossements très secs." } },
      { id: 'a24-b', isTruth: true,  text: { en: "God asked Ezekiel 'Son of man, can these bones live?' and Ezekiel replied 'Sovereign LORD, you alone know.'", fr: "Dieu demanda à Ézéchiel : 'Fils de l'homme, ces ossements peuvent-ils revivre ?' et Ézéchiel répondit : 'Seigneur Éternel, toi seul le sais.'" } },
      { id: 'a24-c', isTruth: true,  text: { en: "God explained to Ezekiel that the dry bones represented the whole house of Israel in exile.", fr: "Dieu expliqua à Ézéchiel que les ossements secs représentaient toute la maison d'Israël en exil." } },
      { id: 'a24-d', isTruth: false, text: { en: "Ezekiel was told to pray over the bones, and they came to life through his intercession.", fr: "Ézéchiel reçut l'ordre de prier sur les ossements, et ils revirent à la vie grâce à son intercession." } },
    ],
    explanation: { en: "God told Ezekiel to prophesy — to speak the word of God over the bones. It was the spoken word of prophecy commanded by God, not Ezekiel's prayer of intercession, that caused the bones to come together and receive breath (Ezekiel 37:4-10).", fr: "Dieu ordonna à Ézéchiel de prophétiser — de proclamer la parole de Dieu sur les ossements. C'est la parole de prophétie prononcée sur ordre de Dieu, et non la prière d'intercession d'Ézéchiel, qui fit que les ossements se rejoignirent et reçurent le souffle (Ézéchiel 37:4-10)." }
  },
  {
    id: 'a25', levelNumber: 25, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Zechariah's Messianic Prophecies", fr: "Les Prophéties Messianiques de Zacharie" }, image: A, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a25-a', isTruth: true,  text: { en: "Zechariah 9:9 prophesied the Messiah would come riding on a donkey, on a colt, the foal of a donkey.", fr: "Zacharie 9:9 prophétisa que le Messie viendrait monté sur un âne, sur un ânon fils d'ânesse." } },
      { id: 'a25-b', isTruth: true,  text: { en: "Zechariah 11:12-13 prophesied the 30 pieces of silver and the potter's field, which Matthew applies to Judas's betrayal.", fr: "Zacharie 11:12-13 prophétisa les 30 pièces d'argent et le champ du potier, que Matthieu applique à la trahison de Judas." } },
      { id: 'a25-c', isTruth: true,  text: { en: "Zechariah 12:10 speaks of the one who was 'pierced' being mourned like a firstborn son.", fr: "Zacharie 12:10 parle de celui qui a été 'transpercé' et pleuré comme un fils premier-né." } },
      { id: 'a25-d', isTruth: false, text: { en: "Zechariah prophesied that the Messiah would be born in Bethlehem of Ephrathah.", fr: "Zacharie prophétisa que le Messie naîtrait à Bethléhem d'Éphrata." } },
    ],
    explanation: { en: "The prophecy of the Messiah's birth in Bethlehem of Ephrathah is found in Micah 5:2 — not in Zechariah. This is a classic misattribution. Zechariah contains other Messianic prophecies but not the Bethlehem birthplace (Micah 5:2).", fr: "La prophétie de la naissance du Messie à Bethléhem d'Éphrata se trouve dans Michée 5:2 — pas dans Zacharie. C'est une erreur d'attribution classique. Zacharie contient d'autres prophéties messianiques mais pas le lieu de naissance à Bethléhem (Michée 5:2)." }
  },
  {
    id: 'a26', levelNumber: 26, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Revelation — The Four Living Creatures", fr: "Apocalypse — Les Quatre Êtres Vivants" }, image: A, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a26-a', isTruth: true,  text: { en: "Revelation 4 describes four living creatures around the throne with faces like a lion, an ox, a man, and an eagle.", fr: "Apocalypse 4 décrit quatre êtres vivants autour du trône avec des faces de lion, de bœuf, d'homme et d'aigle." } },
      { id: 'a26-b', isTruth: true,  text: { en: "Each of the four living creatures in Revelation has six wings and is covered with eyes all around.", fr: "Chacun des quatre êtres vivants de l'Apocalypse a six ailes et est couvert d'yeux tout autour." } },
      { id: 'a26-c', isTruth: true,  text: { en: "The four living creatures cry 'Holy, holy, holy is the Lord God Almighty, who was, and is, and is to come.'", fr: "Les quatre êtres vivants crient : 'Saint, saint, saint est le Seigneur Dieu tout-puissant, qui était, qui est et qui vient.'" } },
      { id: 'a26-d', isTruth: false, text: { en: "Ezekiel's four living creatures in Ezekiel 1 are identical in all details to John's four creatures in Revelation 4.", fr: "Les quatre êtres vivants d'Ézéchiel 1 sont identiques en tous points aux quatre êtres de l'Apocalypse 4." } },
    ],
    explanation: { en: "Both describe four living creatures with four faces, but there are differences. Ezekiel's creatures each have four wings and human-like hands; Revelation's have six wings. In Ezekiel they move in straight lines with wheels; in Revelation they stand and cry. The imagery parallels but does not perfectly match (Ezekiel 1:6 vs Revelation 4:8).", fr: "Les deux décrivent quatre êtres avec quatre faces, mais il y a des différences. Les êtres d'Ézéchiel ont chacun quatre ailes et des mains humaines ; ceux de l'Apocalypse en ont six. Chez Ézéchiel ils se déplacent en ligne droite avec des roues ; dans l'Apocalypse ils se tiennent debout et crient (Ézéchiel 1:6 vs Apocalypse 4:8)." }
  },
  {
    id: 'a27', levelNumber: 27, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Levitical Feasts (Leviticus 23)", fr: "Les Fêtes Lévitiques (Lévitique 23)" }, image: A, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a27-a', isTruth: true,  text: { en: "The seven feasts of Israel include Passover, Unleavened Bread, Firstfruits, Pentecost (Weeks), Trumpets, Atonement, and Tabernacles.", fr: "Les sept fêtes d'Israël incluent la Pâque, les Pains sans levain, les Prémices, la Pentecôte, les Trompettes, l'Expiation et les Tabernacles." } },
      { id: 'a27-b', isTruth: true,  text: { en: "The Feast of Tabernacles (Sukkot) lasted seven days and celebrated the wilderness wandering.", fr: "La fête des Tabernacles (Soukkot) durait sept jours et célébrait l'errance dans le désert." } },
      { id: 'a27-c', isTruth: true,  text: { en: "Yom Kippur (Day of Atonement) was the most solemn day in the Jewish calendar, requiring fasting and rest.", fr: "Yom Kippour (Jour des Expiations) était le jour le plus solennel du calendrier juif, exigeant le jeûne et le repos." } },
      { id: 'a27-d', isTruth: false, text: { en: "The Feast of Hanukkah is one of the seven appointed feasts listed in Leviticus 23.", fr: "La fête de Hanoukka est l'une des sept fêtes désignées listées dans Lévitique 23." } },
    ],
    explanation: { en: "Hanukkah is not one of the seven Levitical feasts in Leviticus 23. It was instituted much later to commemorate the rededication of the temple during the Maccabean period (2nd century BC). It is mentioned in John 10:22 as the 'Feast of Dedication.'", fr: "Hanoukka n'est pas l'une des sept fêtes lévitiques de Lévitique 23. Elle fut instituée bien plus tard pour commémorer la rededication du temple lors de la période maccabéenne (2e siècle av. J.-C.). Elle est mentionnée dans Jean 10:22 comme la 'fête de la Dédicace.'" }
  },
  {
    id: 'a28', levelNumber: 28, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "2 Peter — False Teachers", fr: "2 Pierre — Les Faux Docteurs" }, image: A, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a28-a', isTruth: true,  text: { en: "Peter warns of false teachers who will secretly introduce destructive heresies, even denying the sovereign Lord who bought them.", fr: "Pierre avertit de faux docteurs qui introduiront secrètement des hérésies destructrices, niant même le Seigneur souverain qui les a rachetés." } },
      { id: 'a28-b', isTruth: true,  text: { en: "Peter says that with the Lord a day is like a thousand years, and a thousand years are like a day.", fr: "Pierre dit qu'auprès du Seigneur un jour est comme mille ans et mille ans sont comme un jour." } },
      { id: 'a28-c', isTruth: true,  text: { en: "2 Peter describes false teachers as 'springs without water and mists driven by a storm.'", fr: "2 Pierre décrit les faux docteurs comme 'des sources sans eau et des brouillards poussés par la tempête.'" } },
      { id: 'a28-d', isTruth: false, text: { en: "Peter says God's reason for delaying judgment is because He is unable to bring it about yet.", fr: "Pierre dit que la raison pour laquelle Dieu tarde à exercer le jugement est qu'Il n'est pas encore en mesure de le faire." } },
    ],
    explanation: { en: "Peter explicitly says God's delay is not because He cannot act — it is because He is patient, not wanting anyone to perish but for everyone to come to repentance. God's delay is a merciful choice, not a limitation (2 Peter 3:9).", fr: "Pierre dit explicitement que le délai de Dieu n'est pas parce qu'Il ne peut pas agir — c'est parce qu'Il est patient, ne voulant pas qu'aucun périsse mais que tous arrivent à la repentance. Le délai de Dieu est un choix miséricordieux, pas une limitation (2 Pierre 3:9)." }
  },
  {
    id: 'a29', levelNumber: 29, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The High Priestly Prayer — John 17", fr: "La Prière Sacerdotale — Jean 17" }, image: A, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a29-a', isTruth: true,  text: { en: "Jesus prayed that His disciples would be sanctified by the truth, saying 'Your word is truth.'", fr: "Jésus pria que ses disciples soient sanctifiés par la vérité, disant : 'Ta parole est vérité.'" } },
      { id: 'a29-b', isTruth: true,  text: { en: "Jesus prayed for believers to be one, as He and the Father are one, so the world would believe.", fr: "Jésus pria pour que les croyants soient un, comme lui et le Père sont un, afin que le monde croie." } },
      { id: 'a29-c', isTruth: true,  text: { en: "Jesus explicitly says in John 17 'I am not praying for the world, but for those you have given me.'", fr: "Jésus dit explicitement dans Jean 17 : 'Ce n'est pas pour le monde que je prie, mais pour ceux que tu m'as donnés.'" } },
      { id: 'a29-d', isTruth: false, text: { en: "Jesus prayed in John 17 that His disciples would be taken out of the world to be protected from evil.", fr: "Jésus pria dans Jean 17 que ses disciples soient ôtés du monde pour être protégés du mal." } },
    ],
    explanation: { en: "Jesus explicitly said 'My prayer is not that you take them out of the world but that you protect them from the evil one.' He wanted them to remain in the world as His witnesses while being protected (John 17:15).", fr: "Jésus dit explicitement : 'Je ne prie pas que tu les ôtes du monde, mais que tu les gardes du mal.' Il voulait qu'ils restent dans le monde comme ses témoins tout en étant protégés (Jean 17:15)." }
  },
  {
    id: 'a30', levelNumber: 30, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Olivet Discourse — Signs of the End", fr: "Le Discours Olivétique — Les Signes de la Fin" }, image: A, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a30-a', isTruth: true,  text: { en: "Jesus predicted the destruction of the temple, saying not one stone would be left on another.", fr: "Jésus prédit la destruction du temple, disant qu'il n'y resterait pas pierre sur pierre." } },
      { id: 'a30-b', isTruth: true,  text: { en: "Jesus warned of false messiahs, wars, earthquakes, and famines as 'the beginning of birth pains.'", fr: "Jésus avertit de faux messies, de guerres, de tremblements de terre et de famines comme 'le commencement des douleurs de l'enfantement.'" } },
      { id: 'a30-c', isTruth: true,  text: { en: "Jesus said 'About that day or hour no one knows, not even the angels in heaven, nor the Son, but only the Father.'", fr: "Jésus dit : 'Ce jour et cette heure-là, personne ne les connaît, pas même les anges dans le ciel, ni le Fils, mais le Père seul.'" } },
      { id: 'a30-d', isTruth: false, text: { en: "Jesus said the generation that sees the sign of the Son of Man in the sky will have three years to repent before judgment.", fr: "Jésus dit que la génération qui verra le signe du Fils de l'homme dans le ciel aura trois ans pour se repentir avant le jugement." } },
    ],
    explanation: { en: "Jesus gave no such three-year window after the sign. He said when the sign appears in the sky, the tribes of the earth will mourn and they will see the Son of Man coming — with power and glory. The text presents this as an immediate, swift event, not a three-year period (Matthew 24:30).", fr: "Jésus ne donna pas de délai de trois ans après le signe. Il dit que quand le signe paraîtra dans le ciel, les tribus de la terre se lamenteront et verront le Fils de l'homme venir avec puissance et gloire — présenté comme immédiat, pas comme une période de trois ans (Matthieu 24:30)." }
  },
  {
    id: 'a31', levelNumber: 31, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Romans 9–11 — Israel and the Gentiles", fr: "Romains 9–11 — Israël et les Nations" }, image: A, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a31-a', isTruth: true,  text: { en: "Paul uses the metaphor of an olive tree in Romans 11, with some natural branches broken off and wild branches grafted in.", fr: "Paul utilise la métaphore d'un olivier dans Romains 11, avec certaines branches naturelles cassées et des branches sauvages greffées." } },
      { id: 'a31-b', isTruth: true,  text: { en: "Paul says 'all Israel will be saved' and a partial hardening has come upon Israel until the full number of Gentiles comes in.", fr: "Paul dit 'tout Israël sera sauvé' et qu'un endurcissement partiel est arrivé à Israël jusqu'à ce que la totalité des nations soit entrée." } },
      { id: 'a31-c', isTruth: true,  text: { en: "Paul concludes this section with a doxology: 'Oh, the depth of the riches of the wisdom and knowledge of God!'", fr: "Paul conclut cette section par une doxologie : 'Ô profondeur des richesses, de la sagesse et de la science de Dieu !'" } },
      { id: 'a31-d', isTruth: false, text: { en: "Paul teaches in Romans 9–11 that God has permanently rejected the Jewish people in favor of Gentiles.", fr: "Paul enseigne dans Romains 9–11 que Dieu a définitivement rejeté le peuple juif en faveur des nations." } },
    ],
    explanation: { en: "Paul explicitly asks 'Did God reject his people?' and answers 'By no means!' He himself is a Jew, and he argues God has not rejected Israel. He says Israel's stumbling has brought salvation to Gentiles, but God's ultimate purpose includes restoring Israel (Romans 11:1-2, 11).", fr: "Paul demande explicitement : 'Dieu a-t-il rejeté son peuple ?' et répond : 'Certes non !' Il est lui-même juif, et il argumente que Dieu n'a pas rejeté Israël. Il dit que la chute d'Israël a apporté le salut aux nations, mais que le dessein ultime de Dieu inclut la restauration d'Israël (Romains 11:1-2, 11)." }
  },
  {
    id: 'a32', levelNumber: 32, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "1 John — Fellowship and the Tests of Faith", fr: "1 Jean — La Communion et les Tests de la Foi" }, image: A, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a32-a', isTruth: true,  text: { en: "1 John says 'God is light; in him there is no darkness at all.'", fr: "1 Jean dit : 'Dieu est lumière et en lui il n'y a pas de ténèbres.'" } },
      { id: 'a32-b', isTruth: true,  text: { en: "John says 'If we claim to be without sin, we deceive ourselves and the truth is not in us.'", fr: "Jean dit : 'Si nous disons que nous n'avons pas de péché, nous nous séduisons nous-mêmes et la vérité n'est pas en nous.'" } },
      { id: 'a32-c', isTruth: true,  text: { en: "John writes that 'God is love' and that perfect love drives out fear.", fr: "Jean écrit que 'Dieu est amour' et que l'amour parfait bannit la crainte." } },
      { id: 'a32-d', isTruth: false, text: { en: "John says in 1 John that anyone who has been born of God is incapable of committing any sin.", fr: "Jean dit dans 1 Jean que quiconque est né de Dieu est incapable de commettre aucun péché." } },
    ],
    explanation: { en: "1 John 3:9 says those born of God do not 'continue to sin' or 'practice sin' (depending on translation). The same letter also says 'if we claim to be without sin, we deceive ourselves' (1:8). John is describing a pattern of life, not absolute sinless perfection (1 John 1:8; 3:9).", fr: "1 Jean 3:9 dit que ceux qui sont nés de Dieu ne 'pratiquent pas le péché' (selon les traductions). La même lettre dit aussi 'si nous disons que nous n'avons pas de péché, nous nous séduisons' (1:8). Jean décrit un mode de vie, non une perfection sans péché absolue (1 Jean 1:8 ; 3:9)." }
  },
  {
    id: 'a33', levelNumber: 33, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Revelation — The 144,000", fr: "Apocalypse — Les 144 000" }, image: A, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a33-a', isTruth: true,  text: { en: "Revelation 7 describes 144,000 sealed from the twelve tribes of Israel — 12,000 from each tribe.", fr: "Apocalypse 7 décrit 144 000 scellés des douze tribus d'Israël — 12 000 de chaque tribu." } },
      { id: 'a33-b', isTruth: true,  text: { en: "Revelation 14 describes the 144,000 as those who had not defiled themselves and followed the Lamb wherever He goes.", fr: "Apocalypse 14 décrit les 144 000 comme ceux qui ne s'étaient pas souillés et qui suivaient l'Agneau partout où il allait." } },
      { id: 'a33-c', isTruth: true,  text: { en: "In Revelation 7, after the 144,000 are mentioned, a great multitude that no one could count appears — from every nation.", fr: "Dans Apocalypse 7, après la mention des 144 000, apparaît une grande foule que personne ne pouvait dénombrer — de toute nation." } },
      { id: 'a33-d', isTruth: false, text: { en: "The tribe of Dan is included in the list of 144,000 in Revelation 7.", fr: "La tribu de Dan est incluse dans la liste des 144 000 dans Apocalypse 7." } },
    ],
    explanation: { en: "The tribe of Dan is notably absent from the list in Revelation 7. Manasseh (Joseph's son) appears instead of Dan. Scholars have debated why Dan is excluded — some link it to Dan's idolatry in Judges (Revelation 7:4-8).", fr: "La tribu de Dan est remarquablement absente de la liste d'Apocalypse 7. Manassé (fils de Joseph) apparaît à sa place. Les érudits ont débattu des raisons de l'exclusion de Dan — certains la relient à l'idolâtrie de Dan dans les Juges (Apocalypse 7:4-8)." }
  },
  {
    id: 'a34', levelNumber: 34, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Jeremiah's New Covenant (Jeremiah 31)", fr: "La Nouvelle Alliance de Jérémie (Jérémie 31)" }, image: A, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a34-a', isTruth: true,  text: { en: "Jeremiah 31 says God will make a new covenant with Israel that is not like the covenant made with their ancestors at the Exodus.", fr: "Jérémie 31 dit que Dieu établira une nouvelle alliance avec Israël qui ne sera pas comme l'alliance faite avec leurs ancêtres lors de l'Exode." } },
      { id: 'a34-b', isTruth: true,  text: { en: "God promises in Jeremiah 31 to put His law in their minds and write it on their hearts.", fr: "Dieu promet dans Jérémie 31 de mettre sa loi dans leur intelligence et de l'écrire sur leur cœur." } },
      { id: 'a34-c', isTruth: true,  text: { en: "Jeremiah 31 promises 'I will be their God and they will be my people' as part of the new covenant.", fr: "Jérémie 31 promet 'Je serai leur Dieu et ils seront mon peuple' dans le cadre de la nouvelle alliance." } },
      { id: 'a34-d', isTruth: false, text: { en: "Jeremiah 31 says the new covenant will only be made with the Gentiles who believe, replacing Israel entirely.", fr: "Jérémie 31 dit que la nouvelle alliance ne sera établie qu'avec les nations qui croient, remplaçant complètement Israël." } },
    ],
    explanation: { en: "Jeremiah 31 explicitly addresses 'the people of Israel and the people of Judah.' The new covenant is made with Israel and Judah — not exclusively with Gentiles. The New Testament teaches Gentiles are included through faith in Christ, but Israel is not replaced (Jeremiah 31:31).", fr: "Jérémie 31 s'adresse explicitement au 'peuple d'Israël et au peuple de Juda'. La nouvelle alliance est établie avec Israël et Juda — pas exclusivement avec les nations. Le Nouveau Testament enseigne que les nations sont incluses par la foi en Christ, mais Israël n'est pas remplacé (Jérémie 31:31)." }
  },
  {
    id: 'a35', levelNumber: 35, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Beatitudes in Luke vs. Matthew", fr: "Les Béatitudes dans Luc vs Matthieu" }, image: A, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a35-a', isTruth: true,  text: { en: "Matthew 5 records eight beatitudes, while Luke 6 records four beatitudes paired with four 'woes.'", fr: "Matthieu 5 rapporte huit béatitudes, tandis que Luc 6 en rapporte quatre associées à quatre 'malheurs.'" } },
      { id: 'a35-b', isTruth: true,  text: { en: "Matthew says 'Blessed are the poor in spirit,' while Luke says 'Blessed are the poor' without the qualifier.", fr: "Matthieu dit 'Heureux les pauvres en esprit', tandis que Luc dit simplement 'Heureux les pauvres' sans qualificatif." } },
      { id: 'a35-c', isTruth: true,  text: { en: "Luke's Sermon on the Plain includes 'Woe to you who are rich, for you have already received your comfort.'", fr: "Le sermon dans la plaine de Luc comprend : 'Malheur à vous les riches, car vous avez reçu votre consolation.'" } },
      { id: 'a35-d', isTruth: false, text: { en: "Both Matthew and Luke record the Beatitudes as being preached on a mountaintop.", fr: "Matthieu et Luc rapportent tous deux que les Béatitudes furent prêchées au sommet d'une montagne." } },
    ],
    explanation: { en: "Matthew says Jesus went up on a mountainside and sat down (5:1), while Luke 6:17 says Jesus 'went down with them and stood on a level place' — on a plain. This is why Luke's account is called the 'Sermon on the Plain' (Luke 6:17; Matthew 5:1).", fr: "Matthieu dit que Jésus monta sur la montagne et s'assit (5:1), tandis que Luc 6:17 dit que Jésus 'descendit avec eux et s'arrêta dans un endroit plat'. C'est pourquoi le compte rendu de Luc est appelé 'Sermon dans la plaine' (Luc 6:17 ; Matthieu 5:1)." }
  },
  {
    id: 'a36', levelNumber: 36, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Jude — Contending for the Faith", fr: "Jude — Défendre la Foi" }, image: A, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a36-a', isTruth: true,  text: { en: "Jude introduces himself as a servant of Jesus Christ and brother of James.", fr: "Jude se présente comme serviteur de Jésus-Christ et frère de Jacques." } },
      { id: 'a36-b', isTruth: true,  text: { en: "Jude references the archangel Michael disputing with the devil about the body of Moses.", fr: "Jude fait référence à l'archange Michel disputant avec le diable au sujet du corps de Moïse." } },
      { id: 'a36-c', isTruth: true,  text: { en: "Jude quotes from the book of Enoch, a non-canonical text, calling Enoch 'the seventh from Adam.'", fr: "Jude cite le livre d'Énoch, un texte non canonique, appelant Énoch 'le septième depuis Adam.'" } },
      { id: 'a36-d', isTruth: false, text: { en: "The Book of Jude is the longest letter in the New Testament.", fr: "L'Épître de Jude est la plus longue lettre du Nouveau Testament." } },
    ],
    explanation: { en: "Jude is one of the shortest books in the New Testament — only 25 verses. The longest letters in the New Testament are Romans (16 chapters) and 1 Corinthians (16 chapters). Jude is a very brief, urgent appeal.", fr: "Jude est l'un des livres les plus courts du Nouveau Testament — seulement 25 versets. Les lettres les plus longues sont Romains (16 chapitres) et 1 Corinthiens (16 chapitres). Jude est un bref appel urgent." }
  },
  {
    id: 'a37', levelNumber: 37, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Priestly Garments (Exodus 28)", fr: "Les Vêtements du Sacrificateur (Exode 28)" }, image: A, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a37-a', isTruth: true,  text: { en: "The High Priest wore a breastpiece with twelve stones, each engraved with the name of one tribe of Israel.", fr: "Le Grand Sacrificateur portait un pectoral avec douze pierres, chacune gravée du nom d'une tribu d'Israël." } },
      { id: 'a37-b', isTruth: true,  text: { en: "The High Priest wore a robe of blue with golden bells and pomegranates on its hem.", fr: "Le Grand Sacrificateur portait une robe bleue avec des cloches en or et des grenades sur son ourlet." } },
      { id: 'a37-c', isTruth: true,  text: { en: "The High Priest's turban had a gold plate inscribed 'HOLY TO THE LORD.'", fr: "La tiare du Grand Sacrificateur portait une lame d'or gravée 'CONSACRÉ À L'ÉTERNEL.'" } },
      { id: 'a37-d', isTruth: false, text: { en: "The High Priest carried the Urim and Thummim in a special belt worn around the waist.", fr: "Le Grand Sacrificateur portait l'Urim et le Thummim dans une ceinture spéciale autour de la taille." } },
    ],
    explanation: { en: "The Urim and Thummim were carried in the breastpiece — the pouch on the chest — not in a belt around the waist. Exodus 28:30 says 'Also put the Urim and the Thummim in the breastpiece' (Exodus 28:30).", fr: "L'Urim et le Thummim étaient portés dans le pectoral — la poche sur la poitrine — pas dans une ceinture autour de la taille. Exode 28:30 dit : 'Tu mettras aussi dans le pectoral de jugement l'Urim et le Thummim' (Exode 28:30)." }
  },
  {
    id: 'a38', levelNumber: 38, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "1 Timothy — Qualifications for Church Leaders", fr: "1 Timothée — Qualifications des Responsables d'Église" }, image: A, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a38-a', isTruth: true,  text: { en: "Paul says an overseer must be 'above reproach, faithful to his wife, temperate, self-controlled, respectable, hospitable, able to teach.'", fr: "Paul dit qu'un évêque doit être 'sans reproche, mari d'une seule femme, sobre, sensé, digne, hospitalier, propre à enseigner.'" } },
      { id: 'a38-b', isTruth: true,  text: { en: "Paul says an elder must not be a recent convert to avoid becoming conceited and falling into the devil's trap.", fr: "Paul dit qu'un ancien ne doit pas être un converti récent pour ne pas devenir orgueilleux et tomber dans le piège du diable." } },
      { id: 'a38-c', isTruth: true,  text: { en: "Paul lists qualifications for deacons in 1 Timothy 3, including being tested first and proven blameless.", fr: "Paul énumère les qualifications pour les diacres dans 1 Timothée 3, notamment être d'abord éprouvés et trouver irréprochables." } },
      { id: 'a38-d', isTruth: false, text: { en: "Paul requires all church elders to be unmarried and celibate like himself to give full devotion to God.", fr: "Paul exige que tous les anciens de l'Église soient célibataires et sans mariage comme lui-même pour se consacrer pleinement à Dieu." } },
    ],
    explanation: { en: "Paul requires elders to be 'faithful to his wife' (literally 'husband of one wife'). He never requires celibacy as a qualification — quite the opposite. Paul himself chose celibacy but never mandated it for church leaders (1 Timothy 3:2).", fr: "Paul exige que les anciens soient 'mari d'une seule femme'. Il n'exige jamais le célibat comme qualification — bien au contraire. Paul lui-même choisit le célibat mais ne l'imposa jamais aux responsables d'Église (1 Timothée 3:2)." }
  },
  {
    id: 'a39', levelNumber: 39, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Malachi — The Final Prophetic Word", fr: "Malachie — La Dernière Parole Prophétique" }, image: A, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a39-a', isTruth: true,  text: { en: "Malachi is the last book of the Old Testament in the Protestant Bible and ends the prophetic record before the New Testament era.", fr: "Malachie est le dernier livre de l'Ancien Testament de la Bible protestante et clôt le registre prophétique avant l'ère du Nouveau Testament." } },
      { id: 'a39-b', isTruth: true,  text: { en: "God accuses the people in Malachi of robbing Him by withholding tithes and offerings.", fr: "Dieu accuse le peuple dans Malachie de le voler en retenant les dîmes et les offrandes." } },
      { id: 'a39-c', isTruth: true,  text: { en: "Malachi 4 promises the coming of 'Elijah the prophet' before the great and dreadful day of the LORD.", fr: "Malachie 4 promet la venue 'd'Élie le prophète' avant le jour de l'Éternel, grand et redoutable." } },
      { id: 'a39-d', isTruth: false, text: { en: "Malachi says God hates all divorce without exception and commands remarriage after divorce is prohibited.", fr: "Malachie dit que Dieu hait tout divorce sans exception et ordonne qu'aucun remariage après un divorce ne soit permis." } },
    ],
    explanation: { en: "Malachi 2:16 contains the phrase about God hating divorce (though some translations render it differently), but the passage is about treacherous divorce — specifically men divorcing their wives of their youth to marry foreign women. It does not address all remarriage or all divorce without exception (Malachi 2:14-16).", fr: "Malachie 2:16 contient l'expression sur Dieu qui hait le divorce (bien que certaines traductions la rendent différemment), mais le passage porte sur le divorce perfide — spécifiquement des hommes répudiant les femmes de leur jeunesse pour épouser des étrangères. Il ne traite pas de tout remariage ou de tout divorce sans exception (Malachie 2:14-16)." }
  },
  {
    id: 'a40', levelNumber: 40, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Pharisees and Sadducees — Key Differences", fr: "Pharisiens et Sadducéens — Différences Clés" }, image: A, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a40-a', isTruth: true,  text: { en: "The Sadducees rejected belief in the resurrection of the dead, angels, and spirits, while the Pharisees affirmed all three.", fr: "Les Sadducéens rejetaient la croyance en la résurrection des morts, aux anges et aux esprits, tandis que les Pharisiens les affirmaient tous les trois." } },
      { id: 'a40-b', isTruth: true,  text: { en: "The Sadducees only accepted the five books of Moses (Pentateuch) as authoritative, not the Prophets or Writings.", fr: "Les Sadducéens n'acceptaient que les cinq livres de Moïse (Pentateuque) comme faisant autorité, pas les Prophètes ni les Écrits." } },
      { id: 'a40-c', isTruth: true,  text: { en: "The Pharisees believed in the oral Torah as a supplemental authority alongside the written Torah.", fr: "Les Pharisiens croyaient en la Torah orale comme autorité complémentaire aux côtés de la Torah écrite." } },
      { id: 'a40-d', isTruth: false, text: { en: "The Sadducees were the dominant group in the synagogues throughout Galilee during Jesus' time.", fr: "Les Sadducéens étaient le groupe dominant dans les synagogues de toute la Galilée au temps de Jésus." } },
    ],
    explanation: { en: "The Pharisees dominated the synagogues in Galilee and throughout Jewish life. The Sadducees were concentrated in Jerusalem, particularly around the temple and priestly aristocracy. The Sadducees had little influence outside Jerusalem (Acts 23:7-8).", fr: "Les Pharisiens dominaient les synagogues en Galilée et dans toute la vie juive. Les Sadducéens étaient concentrés à Jérusalem, notamment autour du temple et de l'aristocratie sacerdotale. Les Sadducéens avaient peu d'influence hors de Jérusalem (Actes 23:7-8)." }
  },
  {
    id: 'a41', levelNumber: 41, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Revelation — The Millennial Reign", fr: "Apocalypse — Le Règne Millénaire" }, image: A, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a41-a', isTruth: true,  text: { en: "Revelation 20 describes Satan being bound and thrown into the Abyss for a thousand years.", fr: "Apocalypse 20 décrit Satan enchaîné et jeté dans l'abîme pour mille ans." } },
      { id: 'a41-b', isTruth: true,  text: { en: "Revelation 20 says those who reigned with Christ for the thousand years are those who did not worship the beast.", fr: "Apocalypse 20 dit que ceux qui régnèrent avec Christ pendant mille ans sont ceux qui n'adorèrent pas la bête." } },
      { id: 'a41-c', isTruth: true,  text: { en: "After the thousand years, Satan is released briefly before being thrown into the lake of fire.", fr: "Après les mille ans, Satan est brièvement libéré avant d'être jeté dans l'étang de feu." } },
      { id: 'a41-d', isTruth: false, text: { en: "The term 'Millennium' referring to the thousand-year reign is used repeatedly throughout the New Testament.", fr: "Le terme 'Millénium' désignant le règne de mille ans est utilisé à plusieurs reprises dans tout le Nouveau Testament." } },
    ],
    explanation: { en: "The concept of a thousand-year reign appears only in Revelation 20 — specifically in six verses (20:2-7). It is not mentioned elsewhere in the New Testament. All theological debate about the Millennium (pre-, post-, a-) centers on this single passage (Revelation 20:2-7).", fr: "Le concept d'un règne de mille ans n'apparaît que dans Apocalypse 20 — spécifiquement dans six versets (20:2-7). Il n'est mentionné nulle part ailleurs dans le Nouveau Testament. Tout débat théologique sur le Millénium (pré-, post-, a-) est centré sur ce seul passage (Apocalypse 20:2-7)." }
  },
  {
    id: 'a42', levelNumber: 42, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "2 Timothy — Paul's Final Letter", fr: "2 Timothée — La Dernière Lettre de Paul" }, image: A, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a42-a', isTruth: true,  text: { en: "Paul declares in 2 Timothy 3:16 that all Scripture is God-breathed (theopneustos) and useful for teaching, rebuking, correcting, and training.", fr: "Paul déclare dans 2 Timothée 3:16 que toute Écriture est inspirée de Dieu (theopneustos) et utile pour enseigner, reprendre, corriger et instruire." } },
      { id: 'a42-b', isTruth: true,  text: { en: "Paul tells Timothy to endure hardship 'like a good soldier of Christ Jesus.'", fr: "Paul dit à Timothée de supporter les souffrances 'comme un bon soldat du Christ Jésus.'" } },
      { id: 'a42-c', isTruth: true,  text: { en: "Paul says he has 'fought the good fight, finished the race, kept the faith' near the end of 2 Timothy.", fr: "Paul dit qu'il a 'combattu le bon combat, achevé la course, gardé la foi' vers la fin de 2 Timothée." } },
      { id: 'a42-d', isTruth: false, text: { en: "2 Timothy was written by Paul while he was free and traveling on his fourth missionary journey.", fr: "2 Timothée fut écrit par Paul alors qu'il était libre et voyageait lors de son quatrième voyage missionnaire." } },
    ],
    explanation: { en: "2 Timothy was written during Paul's second Roman imprisonment — believed to be his final imprisonment before execution. Paul writes from prison with a sense of imminent death, saying 'The time for my departure is near' (2 Timothy 4:6).", fr: "2 Timothée fut écrit durant la deuxième emprisonnement de Paul à Rome — considéré comme son dernier avant son exécution. Paul écrit depuis la prison avec le sentiment d'une mort imminente, disant : 'Le moment de mon départ approche' (2 Timothée 4:6)." }
  },
  {
    id: 'a43', levelNumber: 43, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Parables of the Kingdom — Hidden Treasure and Pearl", fr: "Paraboles du Royaume — Trésor caché et Perle" }, image: A, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a43-a', isTruth: true,  text: { en: "Jesus said the kingdom of heaven is like treasure hidden in a field — a man found it, hid it, then sold everything to buy the field.", fr: "Jésus dit que le royaume des cieux est comme un trésor caché dans un champ — un homme le trouva, le cacha, puis vendit tout pour acheter le champ." } },
      { id: 'a43-b', isTruth: true,  text: { en: "Jesus said the kingdom of heaven is like a merchant looking for fine pearls who found one of great value and sold everything to buy it.", fr: "Jésus dit que le royaume des cieux est comme un négociant qui cherchait de belles perles et en trouva une d'une grande valeur qu'il acheta après avoir tout vendu." } },
      { id: 'a43-c', isTruth: true,  text: { en: "Both the hidden treasure and pearl parables appear in Matthew 13 alongside the parables of the Sower, Mustard Seed, and Yeast.", fr: "Les deux paraboles du trésor caché et de la perle apparaissent dans Matthieu 13 aux côtés des paraboles du Semeur, de la Graine de sénevé et du Levain." } },
      { id: 'a43-d', isTruth: false, text: { en: "In the parable of the pearl, the merchant finds multiple pearls and chooses the best one to keep.", fr: "Dans la parabole de la perle, le négociant trouve plusieurs perles et choisit la meilleure à garder." } },
    ],
    explanation: { en: "In the parable, the merchant found one pearl of great value and sold everything to buy that one pearl — not multiple pearls with one chosen as best. The singularity and supreme value of the one pearl is the point (Matthew 13:45-46).", fr: "Dans la parabole, le négociant trouva une seule perle de grande valeur et vendit tout pour acheter cette seule perle — pas plusieurs perles parmi lesquelles choisir la meilleure. La singularité et la valeur suprême de cette unique perle sont le point de la parabole (Matthieu 13:45-46)." }
  },
  {
    id: 'a44', levelNumber: 44, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Mosaic Law — Major Divisions", fr: "La Loi Mosaïque — Divisions Principales" }, image: A, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a44-a', isTruth: true,  text: { en: "Theologians traditionally divide the Mosaic Law into moral, ceremonial, and civil (judicial) categories.", fr: "Les théologiens divisent traditionnellement la Loi mosaïque en catégories morale, cérémonielle et civile (judiciaire)." } },
      { id: 'a44-b', isTruth: true,  text: { en: "The moral law (Ten Commandments) is seen by most Reformed theologians as continuing to bind Christians as a guide to righteous living.", fr: "La loi morale (Dix Commandements) est considérée par la plupart des théologiens réformés comme continuant à lier les chrétiens comme guide de vie juste." } },
      { id: 'a44-c', isTruth: true,  text: { en: "The ceremonial law (sacrifices, feasts, purity laws) is understood in Christian theology as fulfilled and abrogated in Christ.", fr: "La loi cérémonielle (sacrifices, fêtes, lois de pureté) est comprise dans la théologie chrétienne comme accomplie et abrogée en Christ." } },
      { id: 'a44-d', isTruth: false, text: { en: "The division of the Mosaic Law into moral, ceremonial, and civil categories is explicitly stated in the Old Testament text itself.", fr: "La division de la Loi mosaïque en catégories morale, cérémonielle et civile est explicitement énoncée dans le texte de l'Ancien Testament lui-même." } },
    ],
    explanation: { en: "This threefold division of the law is a theological and interpretive framework developed by later theologians (particularly in Reformed theology). The Old Testament itself does not divide the law into these three categories — they are imposed by interpreters to help understand how the law applies to Christians (a useful but man-made framework).", fr: "Cette division tripartite de la loi est un cadre théologique et interprétatif développé par des théologiens ultérieurs (particulièrement dans la théologie réformée). L'Ancien Testament lui-même ne divise pas la loi en ces trois catégories — elles sont imposées par les interprètes pour aider à comprendre comment la loi s'applique aux chrétiens." }
  },
  {
    id: 'a45', levelNumber: 45, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Book of Job — God Speaks from the Whirlwind", fr: "Le Livre de Job — Dieu Parle du Tourbillon" }, image: A, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a45-a', isTruth: true,  text: { en: "God's speech to Job includes the question 'Where were you when I laid the earth's foundation?'", fr: "Le discours de Dieu à Job comprend la question : 'Où étais-tu quand j'ai posé les fondements de la terre ?'" } },
      { id: 'a45-b', isTruth: true,  text: { en: "God rebuked Eliphaz and his two friends, saying they had not spoken what was right about God as Job had.", fr: "Dieu réprimanda Éliphaz et ses deux amis, disant qu'ils n'avaient pas dit de lui ce qui est juste, comme Job l'avait fait." } },
      { id: 'a45-c', isTruth: true,  text: { en: "A young man named Elihu spoke before God appeared, offering a different perspective than Job's three older friends.", fr: "Un jeune homme nommé Élihu parla avant que Dieu n'apparaisse, offrant une perspective différente de celle des trois amis plus âgés de Job." } },
      { id: 'a45-d', isTruth: false, text: { en: "After God spoke, Job admitted he had sinned by being proud, which was the real cause of his suffering all along.", fr: "Après que Dieu eut parlé, Job admit qu'il avait péché par orgueil, ce qui était la vraie cause de ses souffrances depuis le début." } },
    ],
    explanation: { en: "God never says Job's suffering was caused by pride or sin. Job repented of his limited understanding — not of specific sins. The book's point is that suffering is not always punishment for sin. God rebuked the friends for claiming it was (Job 42:7-8).", fr: "Dieu ne dit jamais que les souffrances de Job étaient causées par l'orgueil ou le péché. Job se repentit de sa compréhension limitée — pas de péchés spécifiques. Le point du livre est que la souffrance n'est pas toujours une punition pour le péché. Dieu réprimanda les amis pour l'avoir affirmé (Job 42:7-8)." }
  },
  {
    id: 'a46', levelNumber: 46, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Paul's Letter to the Ephesians — The Church", fr: "La Lettre de Paul aux Éphésiens — L'Église" }, image: A, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a46-a', isTruth: true,  text: { en: "Ephesians 2 describes believers as 'God's handiwork (masterpiece), created in Christ Jesus to do good works.'", fr: "Éphésiens 2 décrit les croyants comme 'l'ouvrage de Dieu (chef-d'œuvre), créés en Jésus-Christ pour des œuvres bonnes.'" } },
      { id: 'a46-b', isTruth: true,  text: { en: "Ephesians 4 lists five ministry gifts: apostles, prophets, evangelists, pastors, and teachers.", fr: "Éphésiens 4 énumère cinq dons ministériels : apôtres, prophètes, évangélistes, pasteurs et docteurs." } },
      { id: 'a46-c', isTruth: true,  text: { en: "Ephesians 5 instructs husbands to love their wives as Christ loved the church and gave himself up for her.", fr: "Éphésiens 5 exhorte les maris à aimer leurs femmes comme Christ a aimé l'Église et s'est livré lui-même pour elle." } },
      { id: 'a46-d', isTruth: false, text: { en: "Paul's letter to the Ephesians was specifically addressed to problems of immorality in the church at Ephesus.", fr: "La lettre de Paul aux Éphésiens était spécifiquement adressée aux problèmes d'immoralité dans l'Église d'Éphèse." } },
    ],
    explanation: { en: "Ephesians is notably generic compared to other Pauline letters — it lacks personal greetings, specific problems, or named individuals (except Tychicus). It reads as a circular letter about the nature and calling of the church in general, not a corrective letter addressing specific Ephesian sins (Ephesians 1:1).", fr: "Éphésiens est remarquablement générale par rapport aux autres lettres pauliniennes — elle manque de salutations personnelles, de problèmes spécifiques ou de personnes nommées (sauf Tychique). Elle ressemble à une lettre circulaire sur la nature et la vocation de l'Église en général, pas à une lettre corrective adressant des péchés éphésiens spécifiques (Éphésiens 1:1)." }
  },
  {
    id: 'a47', levelNumber: 47, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Abrahamic Covenant — Land Promise", fr: "L'Alliance Abrahamique — La Promesse du Pays" }, image: A, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a47-a', isTruth: true,  text: { en: "God promised Abraham's descendants land 'from the Wadi of Egypt to the great river, the Euphrates.'", fr: "Dieu promit aux descendants d'Abraham la terre 'depuis le torrent d'Égypte jusqu'au grand fleuve, l'Euphrate.'" } },
      { id: 'a47-b', isTruth: true,  text: { en: "God also promised Abraham that all peoples on earth would be blessed through him.", fr: "Dieu promit aussi à Abraham que toutes les familles de la terre seraient bénies en lui." } },
      { id: 'a47-c', isTruth: true,  text: { en: "The book of Galatians applies the 'seed of Abraham' promise to Jesus Christ and those who belong to Christ.", fr: "Le livre des Galates applique la promesse de la 'descendance d'Abraham' à Jésus-Christ et à ceux qui lui appartiennent." } },
      { id: 'a47-d', isTruth: false, text: { en: "The land promise to Abraham was fully and completely fulfilled during the reign of David.", fr: "La promesse du pays à Abraham fut pleinement et complètement accomplie sous le règne de David." } },
    ],
    explanation: { en: "Solomon's reign is often cited as the closest to fulfillment of the geographic promise — Israel controlled from the Euphrates to Egypt (1 Kings 4:21). David's reign was slightly smaller. But debate continues about ultimate fulfillment, especially regarding eschatological promises. Neither reign is described as complete and final fulfillment (1 Kings 4:21).", fr: "Le règne de Salomon est souvent cité comme le plus proche de l'accomplissement de la promesse géographique — Israël contrôlait de l'Euphrate jusqu'à l'Égypte (1 Rois 4:21). Le règne de David était légèrement plus petit. Mais le débat sur l'accomplissement ultime, notamment concernant les promesses eschatologiques, se poursuit (1 Rois 4:21)." }
  },
  {
    id: 'a48', levelNumber: 48, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Sanhedrin and Jewish Trial of Jesus", fr: "Le Sanhédrin et le Procès Juif de Jésus" }, image: A, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a48-a', isTruth: true,  text: { en: "The Sanhedrin was the supreme Jewish council in Jerusalem, composed of 71 members including chief priests, elders, and teachers of the law.", fr: "Le Sanhédrin était le suprême conseil juif de Jérusalem, composé de 71 membres dont des grands sacrificateurs, des anciens et des scribes." } },
      { id: 'a48-b', isTruth: true,  text: { en: "The high priest Caiaphas presided over the Sanhedrin that condemned Jesus.", fr: "Le grand sacrificateur Caïphe présida le Sanhédrin qui condamna Jésus." } },
      { id: 'a48-c', isTruth: true,  text: { en: "Nicodemus and Joseph of Arimathea were both members of the Sanhedrin who did not consent to the decision to condemn Jesus.", fr: "Nicodème et Joseph d'Arimathée étaient tous deux membres du Sanhédrin qui n'approuvèrent pas la décision de condamner Jésus." } },
      { id: 'a48-d', isTruth: false, text: { en: "Under Roman rule, the Sanhedrin had full authority to carry out the death penalty for religious crimes.", fr: "Sous la domination romaine, le Sanhédrin avait pleine autorité pour appliquer la peine de mort pour les crimes religieux." } },
    ],
    explanation: { en: "Under Roman rule, the Sanhedrin could not execute anyone without Roman approval (ius gladii — the right of the sword). This is why the Jewish leaders had to bring Jesus to Pilate. John 18:31 records the Jews saying 'We have no right to execute anyone' (John 18:31).", fr: "Sous la domination romaine, le Sanhédrin ne pouvait pas exécuter quelqu'un sans l'approbation romaine (ius gladii — le droit du glaive). C'est pourquoi les chefs juifs durent amener Jésus à Pilate. Jean 18:31 rapporte les Juifs disant : 'Il ne nous est pas permis de mettre quelqu'un à mort' (Jean 18:31)." }
  },
  {
    id: 'a49', levelNumber: 49, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Women Prophets in the Bible", fr: "Les Femmes Prophètes dans la Bible" }, image: A, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a49-a', isTruth: true,  text: { en: "Miriam, the sister of Moses, is called a prophetess in the Old Testament.", fr: "Myriam, la sœur de Moïse, est appelée prophétesse dans l'Ancien Testament." } },
      { id: 'a49-b', isTruth: true,  text: { en: "Huldah the prophetess authenticated the Book of the Law found in Josiah's temple renovation.", fr: "La prophétesse Hulda authentifia le Livre de la Loi trouvé lors de la rénovation du temple sous Josias." } },
      { id: 'a49-c', isTruth: true,  text: { en: "Philip the evangelist had four unmarried daughters who were prophetesses, mentioned in Acts 21.", fr: "Philippe l'évangéliste avait quatre filles non mariées qui étaient prophétesses, mentionnées dans Actes 21." } },
      { id: 'a49-d', isTruth: false, text: { en: "Anna, the prophetess who saw the baby Jesus in the temple, was 84 years old at the time.", fr: "Anna, la prophétesse qui vit le bébé Jésus au temple, avait 84 ans à ce moment-là." } },
    ],
    explanation: { en: "Luke 2:36-37 says Anna had lived with her husband seven years after her marriage, then was a widow 'until she was eighty-four.' Some translations interpret this as she was a widow for 84 years (making her over 100), not that she was 84 years old. The Greek is ambiguous, and the exact age is debated (Luke 2:36-37).", fr: "Luc 2:36-37 dit qu'Anna avait vécu avec son mari sept ans après son mariage, puis était veuve 'jusqu'à l'âge de quatre-vingt-quatre ans'. Certaines traductions interprètent cela comme elle était veuve depuis 84 ans (la faisant dépasser 100 ans), pas qu'elle avait 84 ans. Le grec est ambigu (Luc 2:36-37)." }
  },
  {
    id: 'a50', levelNumber: 50, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Daniel 4 — Nebuchadnezzar's Madness", fr: "Daniel 4 — La Folie de Nébucadnetsar" }, image: A, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a50-a', isTruth: true,  text: { en: "Nebuchadnezzar dreamed of a great tree that was cut down, leaving only a stump bound with iron and bronze.", fr: "Nébucadnetsar rêva d'un grand arbre qui fut abattu, ne laissant qu'une souche liée de fer et de bronze." } },
      { id: 'a50-b', isTruth: true,  text: { en: "Daniel interpreted the dream to mean Nebuchadnezzar would lose his sanity and live like an animal until he acknowledged God's sovereignty.", fr: "Daniel interpréta le rêve comme signifiant que Nébucadnetsar perdrait sa raison et vivrait comme un animal jusqu'à ce qu'il reconnaisse la souveraineté de Dieu." } },
      { id: 'a50-c', isTruth: true,  text: { en: "Nebuchadnezzar was driven away from people and ate grass like an ox, with his hair growing like eagles' feathers.", fr: "Nébucadnetsar fut chassé d'auprès des hommes et mangea de l'herbe comme les bœufs, ses cheveux poussant comme des plumes d'aigle." } },
      { id: 'a50-d', isTruth: false, text: { en: "Nebuchadnezzar's madness lasted exactly one year before his sanity returned.", fr: "La folie de Nébucadnetsar dura exactement un an avant que sa raison ne lui revienne." } },
    ],
    explanation: { en: "Daniel 4 says Nebuchadnezzar's punishment lasted 'seven times' — traditionally interpreted as seven years — not exactly one year. The precise duration is described as 'seven periods' in the text (Daniel 4:32-33).", fr: "Daniel 4 dit que la punition de Nébucadnetsar dura 'sept temps' — traditionnellement interprété comme sept ans — pas exactement un an. La durée précise est décrite comme 'sept périodes' dans le texte (Daniel 4:32-33)." }
  },
  {
    id: 'a51', levelNumber: 51, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Spiritual Gifts in 1 Corinthians 12", fr: "Les Dons Spirituels dans 1 Corinthiens 12" }, image: A, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a51-a', isTruth: true,  text: { en: "Paul lists wisdom, knowledge, faith, healing, miraculous powers, prophecy, distinguishing spirits, tongues, and interpretation of tongues.", fr: "Paul énumère la sagesse, la connaissance, la foi, les guérisons, les miracles, la prophétie, le discernement des esprits, les langues et l'interprétation des langues." } },
      { id: 'a51-b', isTruth: true,  text: { en: "Paul says all these gifts are worked by one and the same Spirit, who distributes them just as He determines.", fr: "Paul dit que tous ces dons sont l'œuvre d'un seul et même Esprit, qui les distribue à chacun en particulier comme il le veut." } },
      { id: 'a51-c', isTruth: true,  text: { en: "Paul uses the metaphor of the human body — with many parts but one body — to explain the diversity and unity of spiritual gifts.", fr: "Paul utilise la métaphore du corps humain — avec de nombreux membres mais un seul corps — pour expliquer la diversité et l'unité des dons spirituels." } },
      { id: 'a51-d', isTruth: false, text: { en: "Paul teaches that speaking in tongues is the highest spiritual gift and all believers should seek it above all others.", fr: "Paul enseigne que le parler en langues est le don spirituel le plus élevé et que tous les croyants devraient le rechercher avant tout autre." } },
    ],
    explanation: { en: "Paul says 'Are all apostles? Are all prophets? Are all workers of miracles? Do all speak in tongues?' (rhetorically expecting 'no') and then says 'eagerly desire the greater gifts' — placing tongues near the end of his lists. He later calls prophecy greater than tongues (1 Corinthians 12:29-30; 14:5).", fr: "Paul dit : 'Tous sont-ils apôtres ? tous prophètes ? tous docteurs ? tous opèrent-ils des miracles ? Tous parlent-ils en langues ?' (attendant rhétoriquement 'non') et dit ensuite de 'rechercher ardemment les dons les plus excellents' — plaçant les langues vers la fin de ses listes (1 Corinthiens 12:29-30 ; 14:5)." }
  },
  {
    id: 'a52', levelNumber: 52, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "Isaiah 7:14 — The Virgin Birth Prophecy", fr: "Ésaïe 7:14 — La Prophétie de la Naissance Virginale" }, image: A, badgeColor: 'bg-purple-800', testament: 'Old',
    statements: [
      { id: 'a52-a', isTruth: true,  text: { en: "Isaiah 7:14 says 'the virgin will conceive and give birth to a son, and will call him Immanuel.'", fr: "Ésaïe 7:14 dit : 'la vierge (ou jeune femme) sera enceinte et enfantera un fils, et elle lui donnera le nom d'Emmanuel.'" } },
      { id: 'a52-b', isTruth: true,  text: { en: "Matthew 1:22-23 quotes Isaiah 7:14 as fulfilled in the virgin birth of Jesus.", fr: "Matthieu 1:22-23 cite Ésaïe 7:14 comme accompli dans la naissance virginale de Jésus." } },
      { id: 'a52-c', isTruth: true,  text: { en: "The Hebrew word in Isaiah 7:14 is 'almah,' which typically means 'young woman' or 'maiden,' not the specific word 'betulah' meaning virgin.", fr: "Le mot hébreu dans Ésaïe 7:14 est 'almah', qui signifie généralement 'jeune femme' ou 'jeune fille', pas le mot spécifique 'betulah' signifiant vierge." } },
      { id: 'a52-d', isTruth: false, text: { en: "The name 'Immanuel' means 'God protects us' in Hebrew.", fr: "Le nom 'Emmanuel' signifie 'Dieu nous protège' en hébreu." } },
    ],
    explanation: { en: "'Immanuel' (or Emmanuel) means 'God with us' — not 'God protects us.' Matthew 1:23 explicitly translates it as 'God with us.' This is a core affirmation of the incarnation — that God has come to dwell with humanity (Matthew 1:23; Isaiah 7:14).", fr: "'Emmanuel' signifie 'Dieu avec nous' — pas 'Dieu nous protège'. Matthieu 1:23 le traduit explicitement par 'Dieu avec nous'. C'est une affirmation fondamentale de l'incarnation — que Dieu est venu habiter avec l'humanité (Matthieu 1:23 ; Ésaïe 7:14)." }
  },
  {
    id: 'a53', levelNumber: 53, difficulty: 'Advanced', difficultyFr: 'Avancé',
    topic: { en: "The Book of Revelation — Opening Vision", fr: "Le Livre de l'Apocalypse — La Vision d'Ouverture" }, image: A, badgeColor: 'bg-purple-800', testament: 'New',
    statements: [
      { id: 'a53-a', isTruth: true,  text: { en: "John received the Revelation while exiled on the island of Patmos because of the word of God and his testimony about Jesus.", fr: "Jean reçut l'Apocalypse alors qu'il était exilé sur l'île de Patmos à cause de la parole de Dieu et du témoignage de Jésus." } },
      { id: 'a53-b', isTruth: true,  text: { en: "The vision begins with John seeing seven golden lampstands and one 'like a son of man' with a two-edged sword coming from His mouth.", fr: "La vision commence par Jean voyant sept chandeliers d'or et un 'semblable à un fils de l'homme' avec une épée à deux tranchants sortant de sa bouche." } },
      { id: 'a53-c', isTruth: true,  text: { en: "Jesus identifies Himself in Revelation 1 as 'the Alpha and the Omega, who is and who was and who is to come, the Almighty.'", fr: "Jésus se désigne dans Apocalypse 1 comme 'l'Alpha et l'Oméga, celui qui est, qui était et qui vient, le Tout-Puissant.'" } },
      { id: 'a53-d', isTruth: false, text: { en: "John was alone on Patmos as a missionary, having chosen to retreat there for a period of prayer and fasting.", fr: "Jean était seul à Patmos en tant que missionnaire, ayant choisi de s'y retirer pour une période de prière et de jeûne." } },
    ],
    explanation: { en: "John was exiled to Patmos as a punishment — not as a voluntary retreat for prayer and fasting. He was there 'because of the word of God and the testimony of Jesus' — meaning Roman persecution sent him there (Revelation 1:9).", fr: "Jean était exilé à Patmos comme punition — pas comme retraite volontaire pour prier et jeûner. Il s'y trouvait 'à cause de la parole de Dieu et du témoignage de Jésus' — c'est-à-dire que la persécution romaine l'y envoya (Apocalypse 1:9)." }
  },
];
