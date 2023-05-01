import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppState } from './store';
import { loadPurchases } from './store/products/products.actions';
import { Store } from '@ngrx/store';
import { getPurchases } from './store/products/products.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
  
  
export class AppComponent {


  constructor( private readonly _store: Store<AppState>) { 
    
    this._store.dispatch(loadPurchases())


    this._store.select(getPurchases)

  }
}
