"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var header_component_1 = require("./header/header.component");
var animations_1 = require("@angular/platform-browser/animations");
var footer_component_1 = require("./footer/footer.component");
var carousel_component_1 = require("./home/carousel/carousel.component");
var parallax_directive_1 = require("ng2-parallax/dist/ts/commonjs/parallax.directive");
var poloevent_service_1 = require("./poloevent.service");
var angular2_useful_swiper_1 = require("angular2-useful-swiper");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            header_component_1.HeaderComponent,
            footer_component_1.FooterComponent,
            carousel_component_1.CarouselComponent,
            parallax_directive_1.Parallax,
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            angular2_useful_swiper_1.SwiperModule,
            animations_1.BrowserAnimationsModule
        ],
        providers: [poloevent_service_1.PoloEventService],
        bootstrap: [app_component_1.AppComponent],
    })
], AppModule);
exports.AppModule = AppModule;
