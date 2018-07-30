import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CreateHeroFormComponent } from './create-hero-form/create-hero-form.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroListElementComponent } from './hero-list-element/hero-list-element.component';
import { CreateHeroComponent } from './create-hero/create-hero.component';
import { HeroService } from 'src/app/hero.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'create-hero',      component: CreateHeroComponent },
  { path: 'heroes',           component: HeroListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CreateHeroFormComponent,
    HeroDetailsComponent,
    HeroListElementComponent,
    CreateHeroComponent,
    HeroListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
