import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {HeaderComponent} from "./header/header.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FooterComponent} from "./footer/footer.component";
import {CarouselComponent} from "./home/carousel/carousel.component";
import {Parallax} from "ng2-parallax/dist/ts/commonjs/parallax.directive";
import {PoloEventService} from "./poloevent.service";
import {SwiperModule} from "angular2-useful-swiper";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    Parallax,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SwiperModule,
    BrowserAnimationsModule
  ],
  providers: [PoloEventService],
  bootstrap: [AppComponent],

})
export class AppModule {
}
