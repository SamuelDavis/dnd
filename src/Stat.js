import {push, pull} from './utils';

class Stat {
  constructor({base = 0, mods = [], current = null}) {
    this.base = base || this.base;
    this.mods = mods;
    this.current = current || this.base;
  }

  addMod(mod, unique = true) {
    push.call(this, this.mods, mod, unique)
  }

  removeMod(mod, all = true) {
    pull.call(this, this.mods, mod, all)
  }

  getMax() {
    return this.mods.reduce((max, mod) => mod(max), this.base)
  }

  reset() {
    this.current = this.getMax();
  }

  getMod() {
    return Math.floor((this.getMax() - 10) / 2);
  }
}

export class Strength extends Stat {
}
export class Dexterity extends Stat {
}
export class Constitution extends Stat {
}
export class Intellect extends Stat {
}
export class Wisdom extends Stat {
}
export class Charisma extends Stat {
}
export class Speed extends Stat {
}
export class HP extends Stat {
  constructor({base = 0, mods = [], current = null, dice = '0d0'}) {
    super(arguments);
    this.dice = dice;
  }
}
