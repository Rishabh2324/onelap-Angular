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
import { TopheaderComponent } from './main/topheader/topheader.component';
import { VideoSectionComponent } from './main/homepage/video-section/video-section.component';
import { FeaturesComponent } from './main/homepage/features/features.component';
import { CallbackComponent } from './main/homepage/callback/callback.component';
import { TrackingComponent } from './main/homepage/tracking/tracking.component';
import { ClientstoriesComponent } from './main/homepage/clientstories/clientstories.component';
import { ProcessComponent } from './main/homepage/process/process.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomepageComponent,
    NavbarComponent,
    FooterComponent,
    TopheaderComponent,
    VideoSectionComponent,
    FeaturesComponent,
    CallbackComponent,
    TrackingComponent,
    ClientstoriesComponent,
    ProcessComponent,
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
