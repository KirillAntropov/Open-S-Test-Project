import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { getFilteredProducts } from 'src/app/store/products/products.selectors';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class CategoryComponent {


  filteredData$ = this.store.select(getFilteredProducts);
  constructor(private store: Store<AppState>) { 


    // !TODO сделать диспач фильтер дата
  }

  
}
