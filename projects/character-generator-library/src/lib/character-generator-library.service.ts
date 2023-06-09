enum Race {
  Human = 'Human',
  Elf = 'Elf',
  Dwarf = 'Dwarf',
  Halfling = 'Halfling',
  Dragonborn = 'Dragonborn',
  Gnome = 'Gnome',
  HalfElf = 'Half-Elf',
  HalfOrc = 'Half-Orc',
  Tiefling = 'Tiefling',
}
enum Class {
  Artificer = 'Artificer',
  Barbarian = 'Barbarian',
  Bard = 'Bard',
  BloodHunter = 'Blood-Hunter',
  Cleric = 'Cleric',
  Druid = 'Druid',
  Fighter = 'Fighter',
  Monk = 'Monk',
  Paladin = 'Paladin',
  Ranger = 'Ranger',
  Rogue = 'Rogue',
  Sorcerer = 'Sorcerer',
  Warlock = 'Warlock',
  Wizard = 'Wizard',
}
enum Ability {
  Strength = 'Strength',
  Dexterity = 'Dexterity',
  Constitution = 'Constitution',
  Intelligence = 'Intelligence',
  Wisdom = 'Wisdom',
  Charisma = 'Charisma',
}
export interface Abilities {
  [Ability.Strength]: number;
  [Ability.Dexterity]: number;
  [Ability.Constitution]: number;
  [Ability.Intelligence]: number;
  [Ability.Wisdom]: number;
  [Ability.Charisma]: number;
}
export interface Character {
  race: Race,
  class: Class,
  abilities: Abilities,
  hitPoints: number
}
  export function generateCharacter(): Character {
    const raceValues = Object.values(Race);
    const classValues = Object.values(Class);
    const abilityValues = Object.values(Ability);
    const classToHPScale: { [key in Class]: number } = {
      [Class.Artificer]: 8,
      [Class.Barbarian]: 12,
      [Class.Bard]: 8,
      [Class.BloodHunter]: 10,
      [Class.Cleric]: 8,
      [Class.Druid]: 8,
      [Class.Fighter]: 10,
      [Class.Monk]: 8,
      [Class.Paladin]: 10,
      [Class.Ranger]: 10,
      [Class.Rogue]: 8,
      [Class.Sorcerer]: 6,
      [Class.Warlock]: 8,
      [Class.Wizard]: 6,
    };
    const randomRace = raceValues[Math.floor(Math.random() * raceValues.length)];
    const randomClass = classValues[Math.floor(Math.random() * classValues.length)];
    const abilities: Record<Ability, number> = {} as Record<Ability, number>;
    abilityValues.forEach((ability) => {
      abilities[ability] = Math.floor(Math.random() * 11) + 8;
    });
    function getConstitutionModifier(x: number) {
      let constitutionModifier = 0;
      if (x == 8 || x == 9) {
        constitutionModifier = -1;
      } else if (x == 10 || x == 11) {
        constitutionModifier = 0;
      } else if (x == 12 || x == 13) {
        constitutionModifier = 1;
      } else if (x == 14 || x == 15) {
        constitutionModifier = 2;
      } else if (x == 16 || x == 17) {
        constitutionModifier = 3;
      } else {
        constitutionModifier = 4;
      }
      return constitutionModifier;
    }
    return {
      race: randomRace,
      class: randomClass,
      abilities: abilities,
      hitPoints: classToHPScale[randomClass] + getConstitutionModifier(abilities.Constitution)
    };
  }

