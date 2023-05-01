import { ActionReducerMap } from '@ngrx/store';
import * as fromPurchases from './products/products.reducer';

export interface AppState {
  products: fromPurchases.ProductState;
}

export const reducers: ActionReducerMap<AppState> = {
  products: fromPurchases.purchasesReducer
};
