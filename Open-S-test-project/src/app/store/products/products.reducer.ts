import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './products.actions';
import { ICategories, IProducts } from 'src/app/models/products';

export interface ProductState {
  purchases: IProducts[];
  filteredPurchases: IProducts[],
  categories: ICategories[];
  dataInBasket: IProducts[]
  loading: boolean;
  error: any;
}

export const initialState: ProductState = {
  purchases: [],
  categories: [],
  filteredPurchases: [],
  dataInBasket: [],
  loading: false,
  error: null
};

const productReducer = createReducer(
  initialState,
  on(actions.loadPurchases,
    state => ({ ...state, loading: true })),
 
  on(actions.loadPurchasesSuccess,
    (state, { purchases }) => ({ ...state, purchases, loading: false })),
  
  on(actions.loadPurchasesFailure,
    (state, { error }) => ({ ...state, error, loading: false })),

  on(actions.filteredPurchasesSuccess,
    (state, { filteredPurchases }) => ({ ...state, filteredPurchases, loading: false })),
  
  on(actions.dataInBasketSuccess,
    (state, { dataInBasket }) => ({ ...state, dataInBasket, loading: false })),
);

export function purchasesReducer(state: ProductState | undefined, action: Action) {
  return productReducer(state, action);
}
