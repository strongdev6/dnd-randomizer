import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterGeneratorLibraryService {

  constructor() { }

  public generateCharacter() {
    const race = ['Human', 'Elf', 'Dwarf', 'Halfling', 'Dragonborn', 'Gnome', 'Half-Elf', 'Half-Orc', 'Tiefling'];
    const classes = ['Artificer', 'Barbarian', 'Bard', "Blood-Hunter", 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'];
    const abilityNames =['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];
    const classToHPScale: {[key: string]: number} = {
      'Artificer': 8,
      'Barbarian': 12,
      'Bard': 8,
      'Blood-Hunter': 10,
      'Cleric': 8,
      'Druid': 8,
      'Fighter': 10,
      'Monk': 8,
      'Paladin': 10,
      'Ranger': 10,
      'Rogue': 8,
      'Sorcerer': 6,
      'Warlock': 8,
      'Wizard': 6
    };

    const randomRace = race[Math.floor(Math.random() * race.length)];
    const randomClass = classes[Math.floor(Math.random() * classes.length)];
    const constitution = Math.floor(Math.random() * 18) + 1;

    const abilities: Record<string, number> = {};
    abilityNames.forEach(ability => {
      abilities[ability] = Math.floor(Math.random() * 11) + 8;
    });

    return {
      name: 'Unknown',
      race: randomRace,
      class: randomClass,
      abilities: abilities,
      hitPoints: Math.floor(Math.random() * classToHPScale[randomClass]) + constitution
    }
  }
}
