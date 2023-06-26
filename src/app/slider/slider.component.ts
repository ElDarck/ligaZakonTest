import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Files} from "../interfaces/interfaces";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, OnDestroy{

  @Input() public sliderFiles: Files[] = [];

  public currentSlideIndex: number = 0;

  private interval: number;
  constructor() {
  }

  ngOnInit(): void {
    this.changeSlideInterval();
  }

  public nextSlide(): void {
    const isLastSlide = this.currentSlideIndex === this.sliderFiles.length - 1;
    this.currentSlideIndex = isLastSlide ? 0 : this.currentSlideIndex + 1;
  }

  public prevSlide(): void {
    const isFirstSlide = this.currentSlideIndex === 0;
    this.currentSlideIndex = isFirstSlide ? this.sliderFiles.length - 1 : this.currentSlideIndex - 1;
  }

  private changeSlideInterval(): void {
    this.interval = setInterval(() => this.nextSlide(), 15000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval)
  }

}
