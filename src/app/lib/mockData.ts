const name = 'loremipsum';
const filters = ['flower', 'heart', 'sun', 'flash'];

const listBuilder = (count: number, itemName: string, flags: Array<string>) => {
    let num = 1;
    return Array.from(Array(count).keys(), i => {
        num += 1;
        return {
            id: Date.now() * num,
            name: itemName.split('').slice(Math.random() * itemName.length).join('').trim(),
            flags: [
                flags[
                    Math.floor(Math.random() * flags.length)
                ]
            ]
        };
    });
};

const mockData = {
    foo: {
        filters,
        list: listBuilder(100, name, filters)
    },
    bar: {
        filters,
        list: listBuilder(100, name, filters)
    }
};

export default mockData;
