import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { StoryComponent } from './story/story.component';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule, 
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        FormComponent,
        StoryComponent,
        FavoritesComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
})

export class AppModule {}
