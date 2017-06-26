import {Injectable} from "@angular/core";
import {PoloEvent} from "./poloevent";

@Injectable()
export class PoloEventService {

  events:PoloEvent[]= [
    new PoloEvent("משהו","לאגודות על ידי תגמולן בגיוס ילדות חדשות וכן תגמולד בגילאי 8-14 בקבוצות עצמן.","","/assets/butt.png"),
    new PoloEvent("משהו","לאגודות על ידי תגמולן בגיוס ילדות חדשות וכן תגמולד בגילאי 8-14 בקבוצות עצמן.","","/assets/throw.jpg"),
    new PoloEvent("משהו","לאגודות על ידי תגמולן בגיוס ילדות חדשות וכן תגמולד בגילאי 8-14 בקבוצות עצמן.","","/assets/plate.jpg"),
    new PoloEvent("משהו","לאגודות על ידי תגמולן בגיוס ילדות חדשות וכן תגמולד בגילאי 8-14 בקבוצות עצמן.","","/assets/team.png"),
  ];


  constructor() {
  }

  getEvents(): PoloEvent[] {
    return this.events;
  }

}
