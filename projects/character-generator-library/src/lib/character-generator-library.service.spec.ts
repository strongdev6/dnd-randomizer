// import { TestBed } from '@angular/core/testing';
// import { CharacterGeneratorLibraryService } from './character-generator-library.service';
//
// describe('CharacterGeneratorLibraryService', () => {
//   let service: CharacterGeneratorLibraryService;
//
//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(CharacterGeneratorLibraryService);
//   });
//
//   it('should create the service', () => {
//     expect(service).toBeTruthy();
//   });
//
//   describe('generateCharacter()', () => {
//     it('should generate a character with a name of "Unknown"', () => {
//       const character = service.generateCharacter();
//       expect(character.name).toBe('Unknown');
//     });
//
//     it('should generate a character with a race from the list', () => {
//       const character = service.generateCharacter();
//       expect(characterRaces).toContain(character.race);
//     });
//
//     it('should generate a character with a class from the list', () => {
//       const character = service.generateCharacter();
//       expect(characterClasses).toContain(character.class);
//     });
//
//     it('should generate a character with abilities between 1 and 18', () => {
//       const character = service.generateCharacter();
//       expect(character.Strength).toBeGreaterThanOrEqual(1);
//       expect(character.Strength).toBeLessThanOrEqual(18);
//       expect(character.Dexterity).toBeGreaterThanOrEqual(1);
//       expect(character.Dexterity).toBeLessThanOrEqual(18);
//       expect(character.Constitution).toBeGreaterThanOrEqual(1);
//       expect(character.Constitution).toBeLessThanOrEqual(18);
//       expect(character.Intelligence).toBeGreaterThanOrEqual(1);
//       expect(character.Intelligence).toBeLessThanOrEqual(18);
//       expect(character.Wisdom).toBeGreaterThanOrEqual(1);
//       expect(character.Wisdom).toBeLessThanOrEqual(18);
//       expect(character.Charisma).toBeGreaterThanOrEqual(1);
//       expect(character.Charisma).toBeLessThanOrEqual(18);
//     });
//
//     it('should generate a character with hit points according to their class', () => {
//       const character = service.generateCharacter();
//       switch (character.class) {
//         case 'Barbarian':
//           expect(character.hitPoints).toBeGreaterThanOrEqual(2);
//           expect(character.hitPoints).toBeLessThanOrEqual(31);
//           break;
//         case 'Bard':
//           expect(character.hitPoints).toBeGreaterThanOrEqual(2);
//           expect(character.hitPoints).toBeLessThanOrEqual(26);
//           break;
//         case 'Cleric':
//           expect(character.hitPoints).toBeGreaterThanOrEqual(2);
//           expect(character.hitPoints).toBeLessThanOrEqual(26);
//           break;
//         case 'Druid':
//           expect(character.hitPoints).toBeGreaterThanOrEqual(2);
//           expect(character.hitPoints).toBeLessThanOrEqual(26);
//           break;
//         case 'Fighter':
//           expect(character.hitPoints).toBeGreaterThanOrEqual(2);
//           expect(character.hitPoints).toBeLessThanOrEqual(30);
//           break;
//         case 'Monk':
//           expect(character.hitPoints).toBeGreaterThanOrEqual(2);
//           expect(character.hitPoints).toBeLessThanOrEqual(26);
//           break;
//         case 'Paladin':
//           expect(character.hitPoints).toBeGreaterThanOrEqual(2);
//           expect(character.hitPoints).toBeLessThanOrEqual(30);
//           break;
//         case 'Ranger':
//           expect(character.hitPoints).toBeGreaterThanOrEqual(2);
//           expect(character.hitPoints).toBeLessThanOrEqual(30);
//           break;
//         case 'Rogue':
//           expect(character.hitPoints).toBeGreaterThanOrEqual(2);
//           expect(character.hitPoints).toBeLessThanOrEqual(26);
//           break;
//         case 'Sorcerer':
//           expect(character.hitPoints).toBeGreaterThanOrEqual(2);
//           expect(character.hitPoints).toBeLessThanOrEqual(22);
//           break;
//           case 'Wizard':
//           expect(character.hitPoints).toBeGreaterThanOrEqual(2);
//           expect(character.hitPoints).toBeLessThanOrEqual(22);
//           break;
//           default:
//           expect(false).toBe(true); // should not reach here
//           }
//         });
//       });
//     });
