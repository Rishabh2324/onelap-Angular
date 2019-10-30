import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TopheaderComponent } from './topheader/topheader.component';
import { VideoSectionComponent } from './homepage/video-section/video-section.component';
import { FeaturesComponent } from './homepage/features/features.component';
import { CallbackComponent } from './homepage/callback/callback.component';
import { TrackingComponent } from './homepage/tracking/tracking.component';
import { ClientstoriesComponent } from './homepage/clientstories/clientstories.component';
import { ProcessComponent } from './homepage/process/process.component';
import { HardwaresComponent } from './hardwares/hardwares.component';
import { GPStrackersComponent } from './hardwares/gpstrackers/gpstrackers.component';
import { MainRoutingModule } from './main-routing.module'


@NgModule({
  declarations: [
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
    HardwaresComponent,
    GPStrackersComponent,
  ],
  imports: [
    MainRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class MainModule { }