import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoryComponent } from './story/story.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
    declarations: [
        AppComponent,
        StoryComponent,
        FormComponent,
        HeaderComponent,
        FavoritesComponent,
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})

export class AppModule {}
