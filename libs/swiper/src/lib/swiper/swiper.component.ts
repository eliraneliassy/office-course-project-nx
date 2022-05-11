import { Component, OnInit, ChangeDetectionStrategy, Input, Inject, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'ui-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwiperComponent implements OnInit, AfterViewInit {

  @Input() slides: string[] = [];
  currentIndex: number = 0;

  slidesPostiosion: any[] = [];

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {}

  slide(direction: number) {
    this.currentIndex += direction;

    if(this.currentIndex > this.slidesPostiosion.length - 1) {
      this.currentIndex = 0;
    }

    if(this.currentIndex < 0) {this.currentIndex = this.slidesPostiosion.length - 1;}

    this.document.querySelector('.slider')?.scrollTo({
      left: this.slidesPostiosion[this.currentIndex],
      behavior: 'smooth'
    })
  }

  ngAfterViewInit(): void {
    this.getSlidesPositions();
  }

  getSlidesPositions(){
    this.slidesPostiosion = [];
    this.document.querySelectorAll<HTMLElement>('.slide')
      .forEach(
      ((div)=> this.slidesPostiosion.push(div.offsetLeft))
    );
  }
}
