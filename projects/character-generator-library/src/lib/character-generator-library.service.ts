import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterGeneratorLibraryService {

  constructor() { }

  public generateCharacter() {
    const characterRaces = ['Human', 'Elf', 'Dwarf', 'Halfling', 'Dragonborn', 'Gnome', 'Half-Elf', 'Half-Orc', 'Tiefling'];
    const characterClasses = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'];
    const characterAbilities = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];

    const character = {
      name: 'Unknown',
      race: characterRaces[Math.floor(Math.random() * characterRaces.length)],
      class: characterClasses[Math.floor(Math.random() * characterClasses.length)],
      Strength: Math.floor(Math.random() * 18) + 1,
      Dexterity: Math.floor(Math.random() * 18) + 1,
      Constitution: Math.floor(Math.random() * 18) + 1,
      Intelligence: Math.floor(Math.random() * 18) + 1,
      Wisdom: Math.floor(Math.random() * 18) + 1,
      Charisma: Math.floor(Math.random() * 18) + 1,
      hitPoints: 0
    };

    switch (character.class) {
      case 'Barbarian':
        character.hitPoints = Math.floor(Math.random() * 12) + 1 + character.Constitution;
        break;
      case 'Bard':
        character.hitPoints = Math.floor(Math.random() * 8) + 1 + character.Constitution;
        break;
      case 'Cleric':
        character.hitPoints = Math.floor(Math.random() * 8) + 1 + character.Constitution;
        break;
      case 'Druid':
        character.hitPoints = Math.floor(Math.random() * 8) + 1 + character.Constitution;
        break;
      case 'Fighter':
        character.hitPoints = Math.floor(Math.random() * 10) + 1 + character.Constitution;
        break;
      case 'Monk':
        character.hitPoints = Math.floor(Math.random() * 8) + 1 + character.Constitution;
        break;
      case 'Paladin':
        character.hitPoints = Math.floor(Math.random() * 10) + 1 + character.Constitution;
        break;
      case 'Ranger':
        character.hitPoints = Math.floor(Math.random() * 10) + 1 + character.Constitution;
        break;
      case 'Rogue':
        character.hitPoints = Math.floor(Math.random() * 8) + 1 + character.Constitution;
        break;
      case 'Sorcerer':
        character.hitPoints = Math.floor(Math.random() * 6) + 1 + character.Constitution;
        break;
      case 'Warlock':
        character.hitPoints = Math.floor(Math.random() * 8) + 1 + character.Constitution;
        break;
      case 'Wizard':
        character.hitPoints = Math.floor(Math.random() * 6) + 1 + character.Constitution;
        break;
    }
    return character;
  }
}
