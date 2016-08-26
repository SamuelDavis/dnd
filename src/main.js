import Character from './Character';
import {ALIGNMENTS} from './misc';
import {Strength, Dexterity, Constitution, Intellect, Wisdom, Charisma} from './Stat';

window.onload = function () {

  const frith = new Character({
    str: new Strength({base: 12}),
    dex: new Dexterity({base: 14}),
    con: new Constitution({base: 13}),
    int: new Intellect({base: 8}),
    wis: new Wisdom({base: 10}),
    chr: new Charisma({base: 15}),
    biography: {
      alignment: ALIGNMENTS.CN
    }
  });
  console.log({
    frith,
    chr: frith.stats.chr.getMod()
  });
};
