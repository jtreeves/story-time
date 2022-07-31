import { Component, OnInit } from '@angular/core';
import { StoryService } from './../services/story.service';
import { Story } from '../interfaces/story';

@Component({
    selector: 'app-story',
    templateUrl: './story.component.html',
    styleUrls: ['./story.component.css'],
})

export class StoryComponent implements OnInit {
    constructor(
        private storyService: StoryService
    ) {}

    story: Story = this.storyService.getStory()

    ngOnInit(): void {}
}
