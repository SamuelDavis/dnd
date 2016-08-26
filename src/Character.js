import {ALIGNMENTS, LANGUAGES} from './misc';
import {HUMAN} from './Race';
import {mergeObjects, forOwn} from './utils';
import {Strength, Dexterity, Constitution, Intellect, Wisdom, Charisma, HP} from './Stat';

const defaultBiography = {
  race: HUMAN,
  alignment: ALIGNMENTS.TN,
  ideals: [],
  bonds: [],
  flaws: [],
  background: 'Mysterious.',
  languages: [LANGUAGES.COMMON]
};

function Character(
  {
    str = new Strength({}),
    dex = new Dexterity({}),
    con = new Constitution({}),
    int = new Intellect({}),
    wis = new Wisdom({}),
    chr = new Charisma({}),
    hp = new HP({}),
    biography = {},
  }
) {
  this.biography = mergeObjects(defaultBiography, biography);
  this.stats = {
    str, dex, con, int, wis, chr,
    spd: this.biography.race.spd,
    hp: hp,
  };
  forOwn((mod, stat) => this.stats[stat].addMod(mod), this.biography.race.statMods);
}

export default Character;
