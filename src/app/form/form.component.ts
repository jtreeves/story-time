import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StoryService } from '../services/story.service';
import { GENRES } from './../data/genres';

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

    storyForm: FormGroup = this.formBuilder.group({
        genre: new FormControl(
            '',
            [
                Validators.required,
                Validators.pattern(/(horror|comedy|tragedy|mystery|romance|adventure|^$)/)
            ]
        )
    })

    ngOnInit(): void {}

    onSubmit(): void {
        this.storyService.setGenre(this.storyForm.value.genre)
    }
}
