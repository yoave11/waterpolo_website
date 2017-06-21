import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {HeaderComponent} from "./header/header.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './home/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    ,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
