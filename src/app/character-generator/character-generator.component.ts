import { Component } from '@angular/core';
import {
  Character,
  generateCharacter
} from 'projects/character-generator-library/src/lib/character-generator-library.service';


@Component({
  selector: 'app-character-generator',
  templateUrl: './character-generator.component.html',
  styleUrls: ['./character-generator.component.scss']
})
export class CharacterGeneratorComponent {

  character?: Character;
  generateCharacter() {
    this.character = generateCharacter();
  }
}
