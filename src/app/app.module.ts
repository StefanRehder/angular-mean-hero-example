import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CreateHeroFormComponent } from './create-hero-form/create-hero-form.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroListElementComponent } from './hero-list-element/hero-list-element.component';
import { HeroService } from 'src/app/hero.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusCircle, faList, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { TabMenuModule } from 'primeng/tabmenu';
import { CardModule } from 'primeng/card';

// Add an icon to the library for convenient access in other components
library.add(faPlusCircle);
library.add(faList);
library.add(faTrashAlt);

const appRoutes: Routes = [
  { path:'', redirectTo: 'heroes', pathMatch: 'full' },
  { path: 'create-hero', component: CreateHeroFormComponent },
  { path: 'heroes', component: HeroListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CreateHeroFormComponent,
    HeroDetailsComponent,
    HeroListElementComponent,
    HeroListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    FontAwesomeModule,
    TabMenuModule,
    CardModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
