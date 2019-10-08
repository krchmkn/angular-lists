import { List } from '@lib/types';

export default interface Sortable {
    sortAlphabetical(list: List, reverse?: boolean): List;
}
