import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public price: number = 0

  public interval$?: Subscription

  ngOnInit(): void {
    console.log('PriceComponent: ngOnInit')
    this.interval$ = interval(1000).subscribe(value => console.log(value))
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    console.log('PriceComponent: ngOnChanges')
  }
  ngOnDestroy(): void {
    console.log('PriceComponent: ngOnDestroy')
    this.interval$?.unsubscribe()
  }

}
