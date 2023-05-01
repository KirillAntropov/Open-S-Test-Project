import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { getDataInBasket } from 'src/app/store/products/products.selectors';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})

export class BasketComponent {
  
  dataInBasket$ = this.store.select(getDataInBasket);
  constructor(private store: Store<AppState>) {
  }

}
