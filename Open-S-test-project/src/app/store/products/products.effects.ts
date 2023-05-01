import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import axios from 'axios';
import * as actions from '../../store/products/products.actions'
import { Store } from '@ngrx/store';
import { ProductState } from './products.reducer';
import { IProducts } from 'src/app/models/products';



@Injectable({
  providedIn: 'root'
})
export class ProductsEffects {

  
  constructor(private actions$: Actions, private readonly store: Store<ProductState>) { }

  url: string = "http://localhost:3000/purchases";
  

  loadPurchases$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadPurchases),
      switchMap(() =>
        axios.get(this.url).then((response) => response.data)
      ),
      map((data) => actions.loadPurchasesSuccess({ purchases: data }))
    )

  );


  filterProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.filteredPurchases),
      mergeMap(action => {
        const { id, purchases } = action;
        const filteredPurchases =  purchases.filter(i => i.category === id);
        return [filteredPurchases];
      }),
    map((filteredPurchases: IProducts[]) => actions.filteredPurchasesSuccess({filteredPurchases}))
    );
  })


  addToBasket$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.addToBasket),
      mergeMap(action => {
        const { product, dataInBasket } = action;
        const newData = [...dataInBasket, product];
        return [newData];
      }),
    map((dataInBasket: IProducts[]) => actions.dataInBasketSuccess({dataInBasket}))
    );
  })
}
