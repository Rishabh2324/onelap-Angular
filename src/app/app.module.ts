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



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomepageComponent,
    NavbarComponent,
    FooterComponent,
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
