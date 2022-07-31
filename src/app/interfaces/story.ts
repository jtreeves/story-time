import { Character } from './character';

export interface Story {
    mainCharacter: Character;
    supportingCharacter: Character;
    genre: 'horror' | 'comedy' | 'tragedy' | 'mystery' | 'adventure' | 'romance';
    actions: string[];
    objects: string[];
    content: string;
}
