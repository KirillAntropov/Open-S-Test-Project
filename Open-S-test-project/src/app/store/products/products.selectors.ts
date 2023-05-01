import { ActionReducerMap, createSelector, createFeatureSelector, MetaReducer } from '@ngrx/store';
import * as fromPurchases from './products.reducer'

export interface AppState {
  products: fromPurchases.ProductState;
}

export const reducers: ActionReducerMap<AppState> = {
  products: fromPurchases.purchasesReducer
};


export const getPurchasesState = (state: AppState) => state.products

export const getPurchases = createSelector(
  getPurchasesState,
  (state: fromPurchases.ProductState) => state.purchases
);

export const getFilteredProducts = createSelector(
  getPurchasesState,
  (state: fromPurchases.ProductState) => state.filteredPurchases
);

export const getDataInBasket = createSelector(
  getPurchasesState,
  (state: fromPurchases.ProductState) => state.dataInBasket
);

export const getCategories = createSelector(
  getPurchasesState,
  (state: fromPurchases.ProductState) => state.categories
);

export const getPurchasesLoading = createSelector(
  getPurchasesState,
  (state: fromPurchases.ProductState) => state.loading
);

export const getPurchasesError = createSelector(
  getPurchasesState,
  (state: fromPurchases.ProductState) => state.error
);
