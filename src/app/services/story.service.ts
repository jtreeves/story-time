import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character';
import { Story } from '../interfaces/story';
import { EMPTY_STORY } from './../data/emptyStory';

@Injectable({
    providedIn: 'root',
})

export class StoryService {
    private story: Story = EMPTY_STORY;

    setMainCharacter(character: Character): void {
        this.story.mainCharacter = character;
    }

    setSupportingCharacter(character: Character): void {
        this.story.supportingCharacter = character;
    }

    setGenre(genre: 'horror' | 'comedy' | 'tragedy' | 'mystery' | 'adventure' | 'romance'): void {
        this.story.genre = genre;
    }

    setActions(actions: string[]): void {
        this.story.actions = actions;
    }

    setObjects(objects: string[]): void {
        this.story.objects = objects;
    }

    setContent(content: string): void {
        this.story.content = content;
    }

    getStory(): Story {
        return this.story;
    }
}
