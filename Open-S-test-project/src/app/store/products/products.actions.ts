import { Action, createAction, props } from '@ngrx/store';
import { ICategories, IProducts } from 'src/app/models/products';



export const loadPurchases = createAction('[Purchases] Load Purchases');

export const loadPurchasesSuccess = createAction('[Purchases] Load Purchases Success',
  props<{ purchases: IProducts[] }>());

export const loadPurchasesFailure = createAction('[Purchases] Load Purchases Failure',
  props<{ error: any }>());

  export const filteredPurchases = createAction('[Purchases] Filter Categories',
    props<{ id: number, purchases: IProducts[] }>());
    
  export const filteredPurchasesSuccess = createAction('[Purchases] Filter Categories Success',
    props<{ filteredPurchases: IProducts[] }>());
  
  export const addToBasket = createAction('[Purchases] Add To Basket',
    props<{ product: IProducts, dataInBasket: IProducts[] }>());
  

  export const dataInBasketSuccess = createAction('[Purchases] Add To Basket Success',
    props<{ dataInBasket: IProducts[] }>());

