"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular2_swiper_1 = require("angular2-swiper");
var HomeComponent = (function () {
    function HomeComponent(poloEventService) {
        this.poloEventService = poloEventService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.events = this.poloEventService.getEvents();
        this.example1SwipeOptions = {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            slidesPerView: 'auto',
            loop: false,
            spaceBetween: 0,
        };
    };
    HomeComponent.prototype.moveNext = function () {
        this.swiperContainer.swiper.slideNext();
    };
    HomeComponent.prototype.movePrev = function () {
        this.swiperContainer.swiper.slidePrev();
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        console.log(this.swiperContainer);
    };
    return HomeComponent;
}());
__decorate([
    core_1.ViewChild(angular2_swiper_1.KSSwiperContainer)
], HomeComponent.prototype, "swiperContainer", void 0);
HomeComponent = __decorate([
    core_1.Component({
        selector: 'polo-home',
        templateUrl: './home.component.html',
        styleUrls: ['home.component.scss']
    })
], HomeComponent);
exports.HomeComponent = HomeComponent;
