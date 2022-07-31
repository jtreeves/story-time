import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { StoryComponent } from './story/story.component';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FormComponent,
        StoryComponent,
        FavoritesComponent,
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})

export class AppModule {}
