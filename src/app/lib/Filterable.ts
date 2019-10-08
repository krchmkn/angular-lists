import { List } from '@lib/types';

export default interface Filterable {
    filterByName(list: List, name: string): List;
    filterByProps(list: List, props: Array<string>): List;
}
