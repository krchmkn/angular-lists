import { Injectable } from '@angular/core';
import Sortable from '@lib/Sortable';
import Filterable from '@lib/Filterable';
import { List } from '@lib/types';
import mockData from '@lib/mockData';

@Injectable()
export class AppService implements Sortable, Filterable {

  private _data = mockData;
  get data(): any {
    return {...this._data};
  }

  sortAlphabetical(list: List, reverse?: boolean): List {
    const result = [...list].sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
         return 1;
      }
      return 0;
    });
    return (reverse ? result.reverse() : result);
  }

  filterByName(list: List, name: string): List {
    return list.filter(item => item.name === name);
  }

  filterByProps(list: List, props: Array<string>): List {
    const result = [...list];
    return list.filter(item => item.flags.find(el => props.includes(el)));
  }

}
