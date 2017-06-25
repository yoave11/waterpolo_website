import {Component, OnInit, ViewChild} from '@angular/core';
import {PoloEventService} from "../poloevent.service";
import {PoloEvent} from "../poloevent";
import {KSSwiperContainer} from "angular2-swiper";
@Component({
  selector: 'polo-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(KSSwiperContainer) swiperContainer: KSSwiperContainer;
  events:PoloEvent[];
  example1SwipeOptions: any;

  constructor(private poloEventService:PoloEventService) { }

  ngOnInit() {
    this.events = this.poloEventService.getEvents();
    this.example1SwipeOptions = {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      slidesPerView: 'auto',
      loop: false,
      spaceBetween: 0,
    };
  }

  moveNext() {
    this.swiperContainer.swiper.slideNext();
  }

  movePrev() {
    this.swiperContainer.swiper.slidePrev();
  }

  ngAfterViewInit() {
    console.log(this.swiperContainer);
  }

}
