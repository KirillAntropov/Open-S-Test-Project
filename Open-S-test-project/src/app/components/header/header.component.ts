import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IProducts } from 'src/app/models/products';
import { AppState } from 'src/app/store';
import { filteredPurchases } from 'src/app/store/products/products.actions';
import { getPurchases } from 'src/app/store/products/products.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class HeaderComponent implements OnInit {


  purchases: IProducts[]
  constructor (private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.select(getPurchases).subscribe((purchases => {
this.purchases = purchases
    }))
  }

  showCategory(id: number) {
    const purchases = this.store.select(getPurchases);

    this.store.dispatch(filteredPurchases({id, purchases:this.purchases}))
  }



}
