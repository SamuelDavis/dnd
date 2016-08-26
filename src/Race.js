import {LANGUAGES} from './misc';
import {Speed} from './Stat';

class Race {
  constructor({spd = new Speed({}), language = LANGUAGES.COMMON, statMods = {}}) {
    this.spd = spd;
    this.language = language;
    this.statMods = statMods;
  }
}

export const HUMAN = new Race({
  speed: 30,
  statMods: {
    chr: chr => chr + 1,
    dex: dex => dex + 1,
    con: con => con + 1,
    str: str => str + 1,
    wis: wis => wis + 1,
    int: int => int + 1,
  }
});
