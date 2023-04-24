import { Component } from '@angular/core';
import {
  CharacterGeneratorLibraryService
} from "../../../projects/character-generator-library/src/lib/character-generator-library.service";
import { FormControl, FormGroup } from "@angular/forms";


@Component({
  selector: 'app-character-generator',
  templateUrl: './character-generator.component.html',
  styleUrls: ['./character-generator.component.scss']
})
export class CharacterGeneratorComponent {

  character: any;
  constructor(private characterGenerator: CharacterGeneratorLibraryService) {
    this.character = this.characterGenerator.generateCharacter();
  }
  generateCharacter() {
    this.character = this.characterGenerator.generateCharacter();
  }
}
