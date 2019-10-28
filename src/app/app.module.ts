import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { HomepageComponent } from './main/homepage/homepage.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { FooterComponent } from './main/footer/footer.component';
import { HeaderComponent } from './main/homepage/header/header.component';
import { FeaturesComponent } from './main/homepage/features/features.component';
import { WorkstepsComponent } from './main/homepage/worksteps/worksteps.component';
import { ClientStoriesComponent } from './main/homepage/client-stories/client-stories.component';
import { CallbackFormComponent } from './main/homepage/callback-form/callback-form.component';
import { TrackItemComponent } from './main/homepage/track-item/track-item.component';
import { TopHeaderComponent } from './main/top-header/top-header.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomepageComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    FeaturesComponent,
    WorkstepsComponent,
    ClientStoriesComponent,
    CallbackFormComponent,
    TrackItemComponent,
    TopHeaderComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
