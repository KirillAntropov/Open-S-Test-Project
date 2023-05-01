import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IProducts } from 'src/app/models/products';
import { AppState  } from 'src/app/store';
import { addToBasket, loadPurchases } from 'src/app/store/products/products.actions';
import { getDataInBasket, getPurchases } from 'src/app/store/products/products.selectors';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ProductsComponent implements OnInit {

  products$ = this._store.select(getPurchases)

  name = ''
  search = ''
  dataInBasket: any;


  constructor(private readonly _store: Store<AppState>)
  { 
    this._store.select(getDataInBasket).subscribe(data => {
      this.dataInBasket = data;
    })
  }


  ngOnInit(): void {
  this._store.dispatch(loadPurchases())
  }

  addToBasket(product: IProducts) {
  this._store.dispatch(addToBasket({product, dataInBasket: this.dataInBasket}))
  }

}
