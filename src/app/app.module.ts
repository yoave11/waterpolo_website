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
import { AboutComponent } from './about/about.component';
import {routing} from "../app.routes";
import {NguiParallaxScrollDirective, NguiParallaxScrollModule} from "@ngui/parallax-scroll";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    Parallax,
    // NguiParallaxScrollDirective,
    AboutComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SwiperModule,
    routing,
    NguiParallaxScrollModule,

    BrowserAnimationsModule
  ],
  providers: [PoloEventService],
  bootstrap: [AppComponent],

})
export class AppModule {
}
