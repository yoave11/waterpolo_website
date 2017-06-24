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
import {Ng2ParallaxScrollDirective} from "ng2-parallax-scroll";
import {Parallax, ParallaxConfig} from "ng2-parallax/dist/ts/commonjs/parallax.directive";
// import {Parallax} from "ng2-parallax/dist/ts/commonjs/parallax.directive";
// import {NguiModule} from '@ngui/ngui'
// import {} from "ng2-parallax";
// import {ng2Parallax} from '../../node_modules/ang2-parallax'
;
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
    // Parallax,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
