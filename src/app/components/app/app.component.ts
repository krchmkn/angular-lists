import { Component, OnInit } from '@angular/core';
import { AppService } from '@services/app.service';
import { ListItem } from '@lib/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppService]
})
export class AppComponent implements OnInit {
  listLeft: Array<ListItem>;
  listRight: Array<ListItem>;
  filters: Array<string>;
  activeFilters: Array<string> = [];
  searchQuery: string;
  currentItem: ListItem;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.listLeft = this.appService.sortAlphabetical([...this.appService.data.foo.list]);
    this.listRight = [...this.appService.data.bar.list];
    this.filters = [...this.appService.data.bar.filters];
    this.activeFilters = [...this.appService.data.bar.filters];
  }

  sortAlphabetical(ev: any): void {
    this.listLeft = this.appService.sortAlphabetical(
      this.appService.data.foo.list,
      !ev.target.checked
    );
  }

  filterByName(ev: any): void {
    if (!ev.target.value) {
      this.listLeft = this.appService.data.foo.list;
      return;
    }
    this.listLeft = this.appService.filterByName(
      this.appService.data.foo.list,
      ev.target.value
    );
  }

  filterByProps(filter: string): void {
    const index = this.activeFilters.indexOf(filter);
    (index === -1 ? this.activeFilters.push(filter) : this.activeFilters.splice(index, 1));

    if (!this.activeFilters.length) {
      this.listRight = [];
      return;
    }

    this.listRight = this.appService.filterByProps(
      this.appService.data.bar.list,
      this.activeFilters
    );
  }

  selectItem(item: ListItem): void {
    this.currentItem = item;
  }

}
