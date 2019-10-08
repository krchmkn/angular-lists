import { Component, EventEmitter, Input, Output } from '@angular/core';
import { List, ListItem } from '@lib/types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() list: List;
  @Input() active: ListItem;
  @Output() selected = new EventEmitter<ListItem>();

  select(item: ListItem) {
    this.selected.emit(item);
  }
}
