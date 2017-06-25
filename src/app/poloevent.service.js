"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var poloevent_1 = require("./poloevent");
var PoloEventService = (function () {
    function PoloEventService() {
        this.events = [
            new poloevent_1.PoloEvent("משהו", "לאגודות על ידי תגמולן בגיוס ילדות חדשות וכן תגמולד בגילאי 8-14 בקבוצות עצמן.", "", "/assets/logo.jpg"),
            new poloevent_1.PoloEvent("משהו", "לאגודות על ידי תגמולן בגיוס ילדות חדשות וכן תגמולד בגילאי 8-14 בקבוצות עצמן.", "", "/assets/throw.jpg"),
            new poloevent_1.PoloEvent("משהו", "לאגודות על ידי תגמולן בגיוס ילדות חדשות וכן תגמולד בגילאי 8-14 בקבוצות עצמן.", "", "/assets/plate.jpg"),
            new poloevent_1.PoloEvent("משהו", "לאגודות על ידי תגמולן בגיוס ילדות חדשות וכן תגמולד בגילאי 8-14 בקבוצות עצמן.", "", "/assets/team.png"),
        ];
    }
    PoloEventService.prototype.getEvents = function () {
        return this.events;
    };
    return PoloEventService;
}());
PoloEventService = __decorate([
    core_1.Injectable()
], PoloEventService);
exports.PoloEventService = PoloEventService;
