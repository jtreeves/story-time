import { Character } from './character';
import { Sentence } from './sentence';

export interface Story {
    mainCharacter: Character;
    supportingCharacter: Character;
    genre: string;
    actions: string[];
    objects: string[];
    beginning: Sentence;
    middle: Sentence;
    end: Sentence;
    content: string;
}
