// ============================================================================
// Bible Challenge
// Story Images
// Central registry for all story illustrations
// ============================================================================

import noahsArkImg from '@/assets/images/beginner/noahs_ark_v1.png';
import towerOfBabelImg from '@/assets/images/beginner/tower_of_babel_v1.png';
import abrahamUnderStarsImg from '@/assets/images/beginner/abraham_under_the_stars_v1.png';
import abrahamAndIsaacImg from '@/assets/images/beginner/abraham_and_isaac_v1.png';
import jacobsLadderImg from '@/assets/images/beginner/jacobs_ladder_v1.png';

import josephInEgyptImg from '@/assets/images/intermediate/joseph_in_egypt_v1.png';
import burningBushImg from '@/assets/images/intermediate/burning_bush_v1.png';
import crossingRedSeaImg from '@/assets/images/intermediate/crossing_red_sea_v1.png';
import davidAndGoliathImg from '@/assets/images/intermediate/david_and_goliath_v1.png';
import danielLionsDenImg from '@/assets/images/intermediate/daniel_lions_den_v1.png';

import estherBeforeTheKingImg from '@/assets/images/advanced/esther_before_the_king_v1.png';
import fallOfJerusalemImg from '@/assets/images/advanced/fall_of_jerusalem_v1.png';
import fallOfJerichoImg from '@/assets/images/advanced/fall_of_jericho_v1.png';
import solomonsTempleConstructionImg from '@/assets/images/advanced/solomons_temple_construction_v1.png';
import kingLeadsHisArmyImg from '@/assets/images/advanced/king_leads_his_army_v1.png';
import mosesReceivesTenCommandmentsImg from '@/assets/images/advanced/moses_receives_the_ten_commandments_v1.png';
import paulWritingHisEpistlesImg from '@/assets/images/advanced/paul_writing_his_epistles_v1.png';
import theNewJerusalemImg from '@/assets/images/advanced/the_new_jerusalem_v1.png';

// Advanced artwork has not been added yet. This embedded SVG prevents broken
// images without requiring a temporary file in src/assets/images/advanced/.
const advancedPlaceholder =
  'data:image/svg+xml;charset=UTF-8,' +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#312e81"/>
          <stop offset="100%" stop-color="#7e22ce"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="675" fill="url(#bg)"/>
      <text x="600" y="300" text-anchor="middle" fill="#ffffff"
            font-family="Arial, sans-serif" font-size="58" font-weight="700">
        Bible Challenge
      </text>
      <text x="600" y="385" text-anchor="middle" fill="#e9d5ff"
            font-family="Arial, sans-serif" font-size="38">
        Advanced Artwork Coming Soon
      </text>
    </svg>
  `);

const imageAssets = {
  // Beginner
  noahsArk: noahsArkImg,
  towerOfBabel: towerOfBabelImg,
  abrahamUnderStars: abrahamUnderStarsImg,
  abrahamAndIsaac: abrahamAndIsaacImg,
  jacobsLadder: jacobsLadderImg,

  // Intermediate
  josephInEgypt: josephInEgyptImg,
  burningBush: burningBushImg,
  crossingRedSea: crossingRedSeaImg,
  davidAndGoliath: davidAndGoliathImg,
  danielLionsDen: danielLionsDenImg,

  // Advanced
  estherBeforeTheKing: estherBeforeTheKingImg,
  fallOfJerusalem: fallOfJerusalemImg,
  fallOfJericho: fallOfJerichoImg,
  solomonsTempleConstruction: solomonsTempleConstructionImg,
  kingLeadsHisArmy: kingLeadsHisArmyImg,
  mosesReceivesTenCommandments: mosesReceivesTenCommandmentsImg,
  paulWritingHisEpistles: paulWritingHisEpistlesImg,
  theNewJerusalem: theNewJerusalemImg,

  // Temporary fallback
  advancedPlaceholder,
} as const;

export const StoryImages = {
  // Beginner
  b1: imageAssets.noahsArk, // Noah's Ark
  b2: imageAssets.abrahamUnderStars, // The Creation — Days 1–3
  b3: imageAssets.abrahamUnderStars, // The Creation — Days 4–7
  b4: imageAssets.abrahamUnderStars, // Adam and Eve
  b5: imageAssets.noahsArk, // The Fall — The Serpent and the Fruit
  b6: imageAssets.abrahamUnderStars, // Cain and Abel
  b7: imageAssets.noahsArk, // Noah Before the Flood
  b8: imageAssets.towerOfBabel, // The Tower of Babel
  b9: imageAssets.abrahamUnderStars, // Abraham's Call
  b10: imageAssets.abrahamUnderStars, // Sodom and Gomorrah
  b11: imageAssets.abrahamAndIsaac, // Abraham and Isaac — The Sacrifice
  b12: imageAssets.abrahamUnderStars, // Jacob and Esau — The Birthright
  b13: imageAssets.jacobsLadder, // Jacob's Dream — The Ladder
  b14: imageAssets.josephInEgypt, // Joseph — His Brothers' Betrayal
  b15: imageAssets.josephInEgypt, // Joseph — From Prison to Palace
  b16: imageAssets.burningBush, // Baby Moses
  b17: imageAssets.burningBush, // Moses and the Burning Bush
  b18: imageAssets.crossingRedSea, // The Ten Plagues — Overview
  b19: imageAssets.crossingRedSea, // The Passover
  b20: imageAssets.crossingRedSea, // Crossing the Red Sea
  b21: imageAssets.abrahamUnderStars, // Manna in the Wilderness
  b22: imageAssets.abrahamUnderStars, // The Ten Commandments
  b23: imageAssets.abrahamUnderStars, // The Golden Calf
  b24: imageAssets.abrahamUnderStars, // Joshua and Jericho
  b25: imageAssets.abrahamUnderStars, // Samson and Delilah
  b26: imageAssets.abrahamUnderStars, // Ruth and Naomi
  b27: imageAssets.abrahamUnderStars, // Hannah and the Birth of Samuel
  b28: imageAssets.davidAndGoliath, // David and Goliath
  b29: imageAssets.davidAndGoliath, // Solomon's Wisdom
  b30: imageAssets.abrahamUnderStars, // Elijah and the Prophets of Baal
  b31: imageAssets.abrahamUnderStars, // Elijah and the Still Small Voice
  b32: imageAssets.abrahamUnderStars, // Jonah and the Great Fish
  b33: imageAssets.danielLionsDen, // Shadrach, Meshach, and Abednego
  b34: imageAssets.danielLionsDen, // Daniel in the Lions' Den
  b35: imageAssets.abrahamUnderStars, // Esther Saves Her People
  b36: imageAssets.noahsArk, // The Birth of Jesus
  b37: imageAssets.noahsArk, // The Wise Men
  b38: imageAssets.noahsArk, // Jesus' Baptism
  b39: imageAssets.noahsArk, // The Temptation of Jesus
  b40: imageAssets.noahsArk, // Jesus Feeds 5,000
  b41: imageAssets.noahsArk, // Jesus Walks on Water
  b42: imageAssets.noahsArk, // Zacchaeus
  b43: imageAssets.noahsArk, // The Good Samaritan
  b44: imageAssets.noahsArk, // The Prodigal Son
  b45: imageAssets.noahsArk, // The Last Supper
  b46: imageAssets.noahsArk, // The Resurrection
  b47: imageAssets.noahsArk, // Pentecost
  b48: imageAssets.abrahamUnderStars, // Jesus at the Temple — Age 12
  b49: imageAssets.noahsArk, // The Lost Sheep
  b50: imageAssets.noahsArk, // The Wedding at Cana
  b51: imageAssets.noahsArk, // Lazarus Raised from the Dead
  b52: imageAssets.noahsArk, // Palm Sunday
  b53: imageAssets.noahsArk, // Peter's Denial
  b54: imageAssets.noahsArk, // The Sermon on the Mount — The Beatitudes
  b55: imageAssets.noahsArk, // The Transfiguration
  b56: imageAssets.noahsArk, // The Healing of Ten Lepers
  b57: imageAssets.noahsArk, // The Lord's Prayer
  b58: imageAssets.abrahamUnderStars, // Jacob's Blessing — Disguise of Isaac
  b59: imageAssets.abrahamUnderStars, // Balaam's Donkey
  b60: imageAssets.davidAndGoliath, // Saul Becomes King
  b61: imageAssets.noahsArk, // The Crucifixion
  b62: imageAssets.abrahamUnderStars, // Gideon's Army
  b63: imageAssets.noahsArk, // The Parable of the Talents
  b64: imageAssets.abrahamUnderStars, // Job's Suffering
  b65: imageAssets.davidAndGoliath, // Solomon and the Baby — Judgment
  b66: imageAssets.abrahamUnderStars, // Isaac and Rebekah
  b67: imageAssets.abrahamUnderStars, // Deborah the Judge
  b68: imageAssets.abrahamUnderStars, // Abraham and the Covenant of Circumcision

  // Intermediate
  i1: imageAssets.davidAndGoliath, // David and Saul
  i2: imageAssets.davidAndGoliath, // The Twelve Spies
  i3: imageAssets.davidAndGoliath, // David and Bathsheba
  i4: imageAssets.davidAndGoliath, // Solomon's Temple
  i5: imageAssets.danielLionsDen, // The Queen of Sheba
  i6: imageAssets.danielLionsDen, // The Divided Kingdom
  i7: imageAssets.danielLionsDen, // Elijah and the Widow of Zarephath
  i8: imageAssets.danielLionsDen, // Naaman and the Leprosy
  i9: imageAssets.danielLionsDen, // Hezekiah and Sennacherib
  i10: imageAssets.danielLionsDen, // The Fall of Jerusalem to Babylon
  i11: imageAssets.danielLionsDen, // Nehemiah and the Wall
  i12: imageAssets.davidAndGoliath, // John the Baptist
  i13: imageAssets.davidAndGoliath, // Jesus and Nicodemus
  i14: imageAssets.davidAndGoliath, // The Woman at the Well
  i15: imageAssets.davidAndGoliath, // Ananias and Sapphira
  i16: imageAssets.davidAndGoliath, // Stephen's Martyrdom
  i17: imageAssets.davidAndGoliath, // Saul's Conversion
  i18: imageAssets.davidAndGoliath, // Peter and Cornelius
  i19: imageAssets.davidAndGoliath, // Paul and Silas in Philippi
  i20: imageAssets.davidAndGoliath, // Paul in Athens — the Areopagus
  i21: imageAssets.davidAndGoliath, // Paul's Shipwreck
  i22: imageAssets.danielLionsDen, // Isaiah the Prophet
  i23: imageAssets.danielLionsDen, // Jeremiah the Prophet
  i24: imageAssets.davidAndGoliath, // The Parable of the Ten Virgins
  i25: imageAssets.davidAndGoliath, // The Rich Young Ruler
  i26: imageAssets.danielLionsDen, // Elisha's Miracles
  i27: imageAssets.davidAndGoliath, // Mary and Martha
  i28: imageAssets.davidAndGoliath, // The Parable of the Sower
  i29: imageAssets.danielLionsDen, // Job's Restoration
  i30: imageAssets.davidAndGoliath, // The Book of Psalms
  i31: imageAssets.davidAndGoliath, // Proverbs and Solomon
  i32: imageAssets.davidAndGoliath, // The Triumphal Entry — Details
  i33: imageAssets.danielLionsDen, // Jesus Cleanses the Temple
  i34: imageAssets.davidAndGoliath, // Philip and the Ethiopian Eunuch
  i35: imageAssets.davidAndGoliath, // Thomas the Apostle
  i36: imageAssets.danielLionsDen, // The Council of Jerusalem (Acts 15)
  i37: imageAssets.davidAndGoliath, // The Transfiguration — Details
  i38: imageAssets.danielLionsDen, // Jonah in Nineveh
  i39: imageAssets.davidAndGoliath, // The Sermon on the Mount — Salt and Light
  i40: imageAssets.davidAndGoliath, // Bartimaeus Healed
  i41: imageAssets.davidAndGoliath, // The Apostle Paul's Early Ministry
  i42: imageAssets.davidAndGoliath, // The Widow's Offering
  i43: imageAssets.davidAndGoliath, // The Parable of the Lost Coin
  i44: imageAssets.davidAndGoliath, // The Call of Moses' Successor
  i45: imageAssets.danielLionsDen, // Jephthah's Vow
  i46: imageAssets.abrahamUnderStars, // The Ark of the Covenant Captured
  i47: imageAssets.davidAndGoliath, // The Road to Emmaus
  i48: imageAssets.danielLionsDen, // Elisha and the Syrian Army
  i49: imageAssets.danielLionsDen, // Absalom's Rebellion
  i50: imageAssets.danielLionsDen, // Ezra Reads the Law
  i51: imageAssets.danielLionsDen, // Zechariah — Father of John the Baptist
  i52: imageAssets.davidAndGoliath, // The Parable of the Mustard Seed
  i53: imageAssets.davidAndGoliath, // Samuel Anoints Saul
  i54: imageAssets.davidAndGoliath, // Mary Magdalene at the Tomb
  i55: imageAssets.danielLionsDen, // Nebuchadnezzar's Dream (Daniel 2)
  i56: imageAssets.davidAndGoliath, // Peter's Restoration by Jesus
  i57: imageAssets.davidAndGoliath, // The Pharisee and the Tax Collector
  i58: imageAssets.danielLionsDen, // The Book of Ruth — Boaz the Kinsman-Redeemer
  i59: imageAssets.davidAndGoliath, // The Day of Pentecost — Peter's Sermon
  i60: imageAssets.davidAndGoliath, // The Fruit of the Spirit (Galatians 5)
  i61: imageAssets.davidAndGoliath, // The Armor of God (Ephesians 6)
  i62: imageAssets.davidAndGoliath, // Pentecost Preparations — Jesus' Promise
  i63: imageAssets.davidAndGoliath, // The Parable of the Wheat and Weeds
  i64: imageAssets.noahsArk, // David Brings the Ark to Jerusalem
  i65: imageAssets.davidAndGoliath, // The Love Chapter — 1 Corinthians 13
  i66: imageAssets.davidAndGoliath, // The Sheep and the Goats (Matthew 25)
  i67: imageAssets.davidAndGoliath, // Paul's Letter to Philemon
  i68: imageAssets.davidAndGoliath, // The Rich Man and Lazarus
// Advanced
a1: imageAssets.paulWritingHisEpistles, // The Epistles of Paul
a2: imageAssets.paulWritingHisEpistles, // Romans — Justification by Faith
a3: imageAssets.paulWritingHisEpistles, // Romans 8 — The Holy Spirit and Adoption
a4: imageAssets.paulWritingHisEpistles, // 1 Corinthians — The Resurrection Chapter
a5: imageAssets.paulWritingHisEpistles, // Galatians — The Judaizer Controversy
a6: imageAssets.paulWritingHisEpistles, // Philippians — Joy in Prison and the Kenosis
a7: imageAssets.advancedPlaceholder, // Hebrews — The High Priesthood of Christ
a8: imageAssets.advancedPlaceholder, // The Hall of Faith — Hebrews 11
a9: imageAssets.theNewJerusalem, // The Seven Churches of Revelation
a10: imageAssets.theNewJerusalem, // Revelation — The New Jerusalem
a11: imageAssets.advancedPlaceholder, // Isaiah 53 — The Suffering Servant
a12: imageAssets.advancedPlaceholder, // Daniel's Seventy Weeks
a13: imageAssets.advancedPlaceholder, // The Tabernacle and Its Furnishings
a14: imageAssets.kingLeadsHisArmy, // The Davidic Covenant
a15: imageAssets.advancedPlaceholder, // The Nazirite Vow
a16: imageAssets.advancedPlaceholder, // Melchizedek
a17: imageAssets.advancedPlaceholder, // James — Faith and Works
a18: imageAssets.advancedPlaceholder, // The Seven 'I Am' Statements
a19: imageAssets.paulWritingHisEpistles, // Paul's Thorn in the Flesh
a20: imageAssets.theNewJerusalem, // Revelation — The Mark of the Beast
a21: imageAssets.advancedPlaceholder, // The Covenant of Abraham
a22: imageAssets.paulWritingHisEpistles, // Colossians
a23: imageAssets.paulWritingHisEpistles, // 1 Thessalonians
a24: imageAssets.advancedPlaceholder, // Valley of Dry Bones
a25: imageAssets.advancedPlaceholder, // Zechariah
a26: imageAssets.theNewJerusalem, // Four Living Creatures
a27: imageAssets.advancedPlaceholder, // Levitical Feasts
a28: imageAssets.advancedPlaceholder, // 2 Peter
a29: imageAssets.advancedPlaceholder, // High Priestly Prayer
a30: imageAssets.advancedPlaceholder, // Olivet Discourse
a31: imageAssets.paulWritingHisEpistles, // Romans 9–11
a32: imageAssets.advancedPlaceholder, // 1 John
a33: imageAssets.theNewJerusalem, // Revelation — The 144,000
a34: imageAssets.fallOfJerusalem, // Jeremiah's New Covenant
a35: imageAssets.advancedPlaceholder, // Beatitudes comparison
a36: imageAssets.advancedPlaceholder, // Jude
a37: imageAssets.advancedPlaceholder, // Priestly Garments
a38: imageAssets.paulWritingHisEpistles, // 1 Timothy
a39: imageAssets.advancedPlaceholder, // Malachi
a40: imageAssets.advancedPlaceholder, // Pharisees and Sadducees
a41: imageAssets.theNewJerusalem, // Millennial Reign
a42: imageAssets.paulWritingHisEpistles, // 2 Timothy
a43: imageAssets.advancedPlaceholder, // Kingdom Parables
a44: imageAssets.mosesReceivesTenCommandments, // Mosaic Law
a45: imageAssets.advancedPlaceholder, // Job
a46: imageAssets.paulWritingHisEpistles, // Ephesians
a47: imageAssets.advancedPlaceholder, // Abrahamic Land Promise
a48: imageAssets.advancedPlaceholder, // Sanhedrin and Trial
a49: imageAssets.advancedPlaceholder, // Women Prophets
a50: imageAssets.advancedPlaceholder, // Nebuchadnezzar's Madness
a51: imageAssets.paulWritingHisEpistles, // Spiritual Gifts
a52: imageAssets.advancedPlaceholder, // Isaiah 7:14
a53: imageAssets.theNewJerusalem, // Revelation — Opening Vision

} as const;

export type StoryImageId = keyof typeof StoryImages;
