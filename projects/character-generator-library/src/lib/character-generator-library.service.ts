import { Injectable } from '@angular/core';

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

@Injectable({
  providedIn: 'root',
})
export class CharacterGeneratorLibraryService {
  constructor() {}

  public generateCharacter() {
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
    const constitution = Math.floor(Math.random() * 18) + 1;
    const abilities: Record<Ability, number> = {} as Record<Ability, number>;
    abilityValues.forEach((ability) => {
      abilities[ability] = Math.floor(Math.random() * 11) + 8;
    });

    let constitutionModifier = 0;
    if (constitution == 8 || constitution == 9) {
      constitutionModifier = -1;
    } else if (constitution == 10 || constitution == 11) {
      constitutionModifier = 0;
    } else if (constitution == 12 || constitution == 13) {
      constitutionModifier = 1;
    } else if (constitution == 14 || constitution == 15) {
      constitutionModifier = 2;
    } else if (constitution == 16 || constitution == 17) {
      constitutionModifier = 3;
    } else {
      constitutionModifier = 4;
    }

    return {
      name: 'Unknown',
      race: randomRace,
      class: randomClass,
      abilities: abilities,
      hitPoints: classToHPScale[randomClass] + constitutionModifier,
    };
  }
}
