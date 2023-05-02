import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  categories = ["Category #1", "Category #2"];
  selectedCategory = '';
  searchName = '';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const category = this.route.snapshot.queryParamMap.get('category');
    if (category) {
      this.selectedCategory = category;
    }

    const name = this.route.snapshot.queryParamMap.get('name');
    if (name) {
      this.searchName = name;
    }
  }

  search() {
    let queryParams = {};
    if (this.selectedCategory) {
      queryParams = {...queryParams, category: this.selectedCategory};
    }
    if (this.searchName) {
      queryParams = {...queryParams, name: this.searchName};
    }

    this.router.navigate([''], { queryParams });
  }
}
