import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { StoryService } from '../services/story.service';
import { GENRES } from './../data/genres';
import { GENDERS } from '../data/genders';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
})

export class FormComponent implements OnInit {
    constructor(
        private storyService: StoryService,
        private formBuilder: FormBuilder
    ) {}

    genres: string[] = GENRES
    genders: string[] = GENDERS

    storyForm: FormGroup = this.formBuilder.group({
        genre: new FormControl('comedy'),
        mainCharacterName: new FormControl(''),
        mainCharacterGender: new FormControl('nonbinary'),
        mainCharacterOccupation: new FormControl(''),
        mainCharacterAge: new FormControl(0),
        mainCharacterAdjective1: new FormControl(''),
        mainCharacterAdjective2: new FormControl(''),
        mainCharacterAdjective3: new FormControl(''),
    })

    ngOnInit(): void {}

    onSubmit(): void {
        this.storyService.setGenre(this.storyForm.value.genre)
        this.storyService.setMainCharacter({
            name: this.storyForm.value.mainCharacterName,
            gender: this.storyForm.value.mainCharacterGender,
            occupation: this.storyForm.value.mainCharacterOccupation,
            age: this.storyForm.value.mainCharacterAge,
            adjectives: [
                this.storyForm.value.mainCharacterAdjective1,
                this.storyForm.value.mainCharacterAdjective2,
                this.storyForm.value.mainCharacterAdjective3
            ]
        })
    }
}
